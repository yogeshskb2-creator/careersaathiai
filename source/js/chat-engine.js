// CareerSaathi Assistant — the conversation engine ("guide mode").
//
// HOW IT WORKS (honest version):
// - It runs completely in the visitor's browser. Nothing is sent anywhere.
// - It is an automated assistant built on simple, open rules — not a human and
//   not a large language model. It understands common ways of asking in English,
//   Hindi (Devanagari) and Hinglish, and keeps the context of the current chat.
// - Every course, provider, link, salary figure or vacancy it mentions comes from
//   this website's own data files, through the same functions the pages use:
//     courses  → coursesForSkill()  (only VERIFIED provider–skill links)
//     careers  → data/careers.js    · salary → salaryView()  · vacancies → vacancyStatus()
//   General learning paths are clearly labelled as general guidance.
// - When the optional AI mode is switched on (js/chat-config.js), retrieveFacts()
//   gives the AI the same verified facts, so it cannot invent providers either.
//
// Pure functions — tested in Node (tests/chat-engine.test.js).

import { CAREERS } from "../data/careers.js";
import { COURSES } from "../data/courses.js";
import { ALL_SKILLS, labelOf } from "../data/options.js";
import { coursesForSkill } from "./course-match.js";
import { QUIZ_AREAS } from "../data/quiz.js";
import { PATHS, STAGES } from "../data/roadmap.js";
import { VACANCIES } from "../data/vacancies.js";
import { vacancyStatus, daysBetween } from "./vacancy-match.js";
import { ROLES } from "../data/private-roles.js";
import { salaryView } from "./pj-model.js";
import { SALARY_SOURCE } from "../data/salary.js";

export const MAX_INPUT = 500;          // characters per message
export const MAX_TURNS_KEPT = 40;      // messages kept in the visible history

// ---------------- Language ----------------
const HINGLISH = /\b(mujhe|mujhko|muje|hai|hain|kya|kaise|kaun|kahan|kahaan|kab|karna|karu|karoon|karun|chahiye|chahta|chahti|nahi|nhi|banna|banana|bata|batao|batayein|samajh|seekh|sikh|sikhna|seekhna|padhai|naukri|kaam|accha|acha|theek|haan|ji|aur|lekin|mera|meri|mere|apna|kuch|kitna|kitni|kyun|kyu|pehle|baad|wala|wali|sakta|sakti|abhi|shuru|koi|yeh|ye|woh|wo|dikhao|dikhaiye|dikha|karo|kariye|milega|milegi|hoga|hogi|sakte|wale|kitne|padhna|seekhun|seekhu|karu|bano|banu|lagta|lagti|pasand|dijiye|jaankari)\b/i;

/** "hi" = Hindi script, "hl" = Hinglish (Hindi in Latin letters), "en" = English, null = can't tell. */
export function detectLang(text) {
  const s = String(text || "");
  if (/[ऀ-ॿ]/.test(s)) return "hi";
  const words = s.toLowerCase().match(/[a-z]+/g) || [];
  if (!words.length) return null;
  const hits = words.filter((w) => HINGLISH.test(w)).length;
  if (hits >= 1 && hits / words.length >= 0.15) return "hl";
  return words.length >= 2 || /^(hi|hello|hey|thanks|help|ok|yes|no)$/.test(words[0]) ? "en" : null;
}

// ---------------- Phrases (English / Hindi / Hinglish) ----------------
const P = {
  hello: {
    en: "Hello! I'm the CareerSaathi Assistant — an automated helper, not a human. You don't need to tell me your name or any personal details.\n\nAsk me about careers, skills, courses, government jobs or what to do after 10th/12th. Where should we start?",
    hi: "नमस्ते! मैं CareerSaathi असिस्टेंट हूँ — एक ऑटोमेटेड सहायक, इंसान नहीं। आपको अपना नाम या कोई निजी जानकारी बताने की ज़रूरत नहीं है।\n\nकरियर, हुनर, कोर्स, सरकारी नौकरी या 10वीं/12वीं के बाद क्या करें — कुछ भी पूछें। कहाँ से शुरू करें?",
    hl: "Namaste! Main CareerSaathi Assistant hoon — ek automated helper, insaan nahi. Aapko apna naam ya koi personal detail batane ki zaroorat nahi hai.\n\nCareer, skills, courses, sarkari naukri ya 10th/12th ke baad kya karein — kuch bhi poochiye. Kahan se shuru karein?"
  },
  unsure: {
    en: "That's completely okay — many people feel this way. Let's explore step by step.\n\nWhat kind of work sounds more interesting to you? Pick one, or tell me in your own words:",
    hi: "कोई बात नहीं — बहुत लोग ऐसा महसूस करते हैं। हम क़दम-दर-क़दम देखते हैं।\n\nआपको किस तरह का काम ज़्यादा अच्छा लगता है? एक चुनें, या अपने शब्दों में बताएँ:",
    hl: "Koi baat nahi — bahut log aisa feel karte hain. Hum step by step explore karte hain.\n\nAapko kis tarah ka kaam zyada interesting lagta hai? Ek chuniye, ya apne words mein bataiye:"
  },
  notSureArea: {
    en: "No problem. A quick way to find out is our 4-minute interest quiz — it suggests areas you may enjoy. Or tell me one thing you liked doing in school or at home.",
    hi: "कोई बात नहीं। जानने का आसान तरीक़ा हमारा 4 मिनट का रुचि क्विज़ है — यह बताता है कि आपको क्या पसंद आ सकता है। या मुझे एक काम बताइए जो आपको स्कूल या घर पर अच्छा लगता था।",
    hl: "Koi baat nahi. Jaanne ka aasaan tareeka hamara 4 minute ka interest quiz hai — yeh batata hai ki aapko kya pasand aa sakta hai. Ya mujhe ek kaam bataiye jo aapko school ya ghar par accha lagta tha."
  },
  area: {
    en: "Good choice to explore: **{area}**. {about}\n\nCareers people often look at in this area: {careers}.\n\nWhich of these would you like to know more about? You can also ask \"what should I learn first?\"",
    hi: "देखने लायक़ क्षेत्र: **{area}**। {about}\n\nइस क्षेत्र में लोग अक्सर ये करियर देखते हैं: {careers}।\n\nइनमें से किसके बारे में और जानना चाहेंगे? आप यह भी पूछ सकते हैं: \"पहले क्या सीखूँ?\"",
    hl: "Explore karne layak area: **{area}**. {about}\n\nIs area mein log aksar ye careers dekhte hain: {careers}.\n\nInmein se kiske baare mein aur jaanna chahenge? Aap yeh bhi pooch sakte hain: \"pehle kya seekhun?\""
  },
  careerIntro: {
    en: "**{title}** — {summary}",
    hi: "**{title}** — {summary}",
    hl: "**{title}** — {summary}"
  },
  careerEdu: {
    en: "Education usually recorded for this path: {edu}.",
    hi: "इस रास्ते के लिए आम तौर पर दर्ज पढ़ाई: {edu}।",
    hl: "Is raaste ke liye aam taur par darj padhai: {edu}."
  },
  careerEduVaries: {
    en: "Education rules vary by state or notification — check the official notice.",
    hi: "पढ़ाई के नियम राज्य या नोटिफ़िकेशन के हिसाब से बदलते हैं — आधिकारिक नोटिस देखें।",
    hl: "Padhai ke niyam state ya notification ke hisaab se badalte hain — official notice dekhiye."
  },
  careerSkills: {
    en: "Main skills: {skills}.",
    hi: "मुख्य हुनर: {skills}।",
    hl: "Main skills: {skills}."
  },
  careerNoSkills: {
    en: "This path is mainly through an exam — preparation and the official notice matter most.",
    hi: "यह रास्ता मुख्य रूप से परीक्षा से है — तैयारी और आधिकारिक नोटिस सबसे ज़रूरी हैं।",
    hl: "Yeh raasta mainly exam se hai — taiyari aur official notice sabse zaroori hain."
  },
  pathT: {
    en: "A possible learning path (general guidance, not a guarantee):",
    hi: "एक संभावित सीखने का रास्ता (सामान्य मार्गदर्शन, गारंटी नहीं):",
    hl: "Ek possible learning path (general guidance, guarantee nahi):"
  },
  careerNext: {
    en: "Want to see verified courses for these skills, or the next steps? You can also tell me your education level and I'll check what fits.",
    hi: "क्या इन हुनर के जाँचे गए कोर्स या अगले क़दम देखना चाहेंगे? आप अपनी पढ़ाई भी बता सकते हैं, मैं देखूँगा क्या ठीक बैठता है।",
    hl: "Kya in skills ke verified courses ya next steps dekhna chahenge? Aap apni padhai bhi bata sakte hain, main dekhunga kya fit hota hai."
  },
  noGuarantee: {
    en: "No course or career can guarantee a job or a salary — results depend on your effort, the job market and each employer.",
    hi: "कोई कोर्स या करियर नौकरी या सैलरी की गारंटी नहीं दे सकता — नतीजा आपकी मेहनत, नौकरी के बाज़ार और हर नियोक्ता पर निर्भर है।",
    hl: "Koi course ya career naukri ya salary ki guarantee nahi de sakta — result aapki mehnat, job market aur har employer par depend karta hai."
  },
  salaryShow: {
    en: "For **{role}**, reported base pay is about {low}–{high} per month (middle 80% of {n} self-reported salaries on {source}, updated {date}). Small-town pay is often lower, and this is not a promise.",
    hi: "**{role}** के लिए बताई गई बेसिक सैलरी लगभग {low}–{high} प्रति माह है ({source} पर {n} लोगों की ख़ुद बताई सैलरी का बीच का 80%, अपडेट {date})। छोटे शहरों में अक्सर कम होती है, और यह कोई वादा नहीं है।",
    hl: "**{role}** ke liye batayi gayi basic salary lagbhag {low}–{high} per month hai ({source} par {n} logon ki khud batayi salary ka beech ka 80%, update {date}). Chhote shehron mein aksar kam hoti hai, aur yeh koi waada nahi hai."
  },
  salaryNone: {
    en: "We don't have reliable salary data for **{role}**, so I won't guess a number. Check the salary written in each real job advert.",
    hi: "**{role}** के लिए हमारे पास भरोसेमंद सैलरी डेटा नहीं है, इसलिए मैं अंदाज़े से कोई संख्या नहीं बताऊँगा। हर असली विज्ञापन में लिखी सैलरी देखें।",
    hl: "**{role}** ke liye hamare paas bharosemand salary data nahi hai, isliye main andaze se koi number nahi bataunga. Har asli job advert mein likhi salary dekhiye."
  },
  salaryAsk: {
    en: "Which job do you want salary information for? For example: data entry, accountant, web developer, customer support.",
    hi: "किस नौकरी की सैलरी जाननी है? जैसे: डेटा एंट्री, अकाउंटेंट, वेब डेवलपर, कस्टमर सपोर्ट।",
    hl: "Kis naukri ki salary jaanni hai? Jaise: data entry, accountant, web developer, customer support."
  },
  coursesT: {
    en: "Verified learning options on our website for **{skill}**:",
    hi: "**{skill}** के लिए हमारी वेबसाइट पर जाँचे गए सीखने के विकल्प:",
    hl: "**{skill}** ke liye hamari website par verified learning options:"
  },
  coursesFree: {
    en: "You said you prefer free options, so free ones are shown first.",
    hi: "आपने मुफ़्त विकल्प पसंद बताए थे, इसलिए मुफ़्त वाले पहले दिखाए हैं।",
    hl: "Aapne free options pasand bataye the, isliye free wale pehle dikhaye hain."
  },
  noVerified: {
    en: "We haven't found a verified provider for **{skill}** yet, so I won't suggest one. If you like, I can explain a general way to start learning it.",
    hi: "**{skill}** के लिए अभी हमें कोई जाँचा हुआ प्रदाता नहीं मिला, इसलिए मैं कोई नाम नहीं सुझाऊँगा। चाहें तो मैं इसे सीखने का एक सामान्य तरीक़ा समझा सकता हूँ।",
    hl: "Abhi humein **{skill}** ke liye koi verified provider nahi mila, isliye main koi naam suggest nahi karunga. Aap chahein to main ise seekhne ka ek general tareeka samjha sakta hoon."
  },
  unknownSkill: {
    en: "\"{skill}\" isn't in our course data, so I can't point to a verified provider for it. I can share general guidance, or you can search the Skill India Digital Hub (we have not checked those results).",
    hi: "\"{skill}\" हमारे कोर्स डेटा में नहीं है, इसलिए मैं इसके लिए कोई जाँचा हुआ प्रदाता नहीं बता सकता। मैं सामान्य मार्गदर्शन दे सकता हूँ, या आप स्किल इंडिया डिजिटल हब पर खोज सकते हैं (वहाँ के नतीजे हमने नहीं जाँचे)।",
    hl: "\"{skill}\" hamare course data mein nahi hai, isliye main iske liye koi verified provider nahi bata sakta. Main general guidance de sakta hoon, ya aap Skill India Digital Hub par search kar sakte hain (wahan ke results humne check nahi kiye)."
  },
  providerYes: {
    en: "Yes — our data shows **{provider}** offers **{skill}**. How we checked: {evidence} (checked {date}).",
    hi: "हाँ — हमारे डेटा के अनुसार **{provider}** में **{skill}** सिखाया जाता है। हमने कैसे जाँचा: {evidence} ({date} को)।",
    hl: "Haan — hamare data ke hisaab se **{provider}** mein **{skill}** sikhaya jata hai. Humne kaise check kiya: {evidence} ({date} ko)."
  },
  providerUnconfirmed: {
    en: "Not confirmed. **{provider}** may list **{skill}**, but we could not verify a current offering, so I can't recommend it as a match. Please check with the provider directly.",
    hi: "पक्का नहीं। **{provider}** में **{skill}** हो सकता है, लेकिन हम मौजूदा कोर्स की पुष्टि नहीं कर सके, इसलिए इसे मेल के रूप में नहीं सुझा सकता। सीधे प्रदाता से पूछें।",
    hl: "Confirm nahi hai. **{provider}** mein **{skill}** ho sakta hai, lekin hum current course verify nahi kar sake, isliye ise match ke roop mein suggest nahi kar sakta. Seedhe provider se poochiye."
  },
  providerNo: {
    en: "Our data does not show **{provider}** offering **{skill}**, so I won't recommend it for that.",
    hi: "हमारे डेटा में **{provider}** के पास **{skill}** का कोर्स नहीं दिखता, इसलिए मैं उसके लिए इसे नहीं सुझाऊँगा।",
    hl: "Hamare data mein **{provider}** ke paas **{skill}** ka course nahi dikhta, isliye main uske liye ise suggest nahi karunga."
  },
  providerSkills: {
    en: "What our data verifies for **{provider}**: {skills}.",
    hi: "**{provider}** के लिए हमारे डेटा में जाँचा गया: {skills}।",
    hl: "**{provider}** ke liye hamare data mein verified: {skills}."
  },
  providerNone: {
    en: "**{provider}** has no verified skill offering in our data right now — treat it as a general place to search.",
    hi: "हमारे डेटा में अभी **{provider}** का कोई जाँचा हुआ कोर्स नहीं है — इसे खोजने की सामान्य जगह मानें।",
    hl: "Hamare data mein abhi **{provider}** ka koi verified course nahi hai — ise search karne ki general jagah maaniye."
  },
  govtT: {
    en: "Government recruitments open right now in our list (worked out from today's date):",
    hi: "हमारी सूची में अभी खुली सरकारी भर्तियाँ (आज की तारीख़ से निकाली गईं):",
    hl: "Hamari list mein abhi khuli sarkari bhartiyan (aaj ki date se nikaali gayi):"
  },
  govtNone: {
    en: "No recruitment in our list is open today. Check the official websites on our Govt Jobs page.",
    hi: "आज हमारी सूची में कोई भर्ती खुली नहीं है। हमारे सरकारी नौकरी पेज पर आधिकारिक वेबसाइटें देखें।",
    hl: "Aaj hamari list mein koi bharti khuli nahi hai. Hamare Govt Jobs page par official websites dekhiye."
  },
  govtNote: {
    en: "Always confirm dates and eligibility in the official notice. We update this list by hand.",
    hi: "तारीख़ और पात्रता हमेशा आधिकारिक नोटिस में पक्की करें। यह सूची हम हाथ से अपडेट करते हैं।",
    hl: "Dates aur eligibility hamesha official notice mein confirm kariye. Yeh list hum haath se update karte hain."
  },
  govtItem: {
    en: "last date {date} ({n} days left)",
    hi: "आख़िरी तारीख़ {date} ({n} दिन बाक़ी)",
    hl: "last date {date} ({n} din baaki)"
  },
  govtConfirm: {
    en: "reported in news — confirm officially",
    hi: "ख़बरों के अनुसार — आधिकारिक रूप से पक्का करें",
    hl: "news ke hisaab se — officially confirm kariye"
  },
  roadmapT: {
    en: "Main paths {stage} (durations are usual ones — check official websites):",
    hi: "{stage} के मुख्य रास्ते (अवधि आम तौर पर लगने वाली — आधिकारिक वेबसाइट देखें):",
    hl: "{stage} ke main raaste (duration aam taur par lagne wali — official websites dekhiye):"
  },
  pagePointer: {
    en: "You'll find this on our **{page}** page.",
    hi: "यह आपको हमारे **{page}** पेज पर मिलेगा।",
    hl: "Yeh aapko hamare **{page}** page par milega."
  },
  privacy: {
    en: "That's absolutely fine — you don't need to share anything personal. I can help with just your interests or goals. This chat stays in this browser tab only.",
    hi: "बिल्कुल ठीक है — आपको कुछ भी निजी बताने की ज़रूरत नहीं। मैं सिर्फ़ आपकी रुचि या लक्ष्य से मदद कर सकता हूँ। यह चैट सिर्फ़ इसी ब्राउज़र टैब में रहती है।",
    hl: "Bilkul theek hai — aapko kuch bhi personal batane ki zaroorat nahi. Main sirf aapke interests ya goals se help kar sakta hoon. Yeh chat sirf isi browser tab mein rehti hai."
  },
  secrets: {
    en: "I can't help with that. This assistant runs in your browser and has no passwords, API keys or other people's chats — conversations are never shared between users. Ask me anything about careers or courses instead.",
    hi: "इसमें मैं मदद नहीं कर सकता। यह असिस्टेंट आपके ब्राउज़र में चलता है; इसके पास कोई पासवर्ड, API key या दूसरों की चैट नहीं है — एक व्यक्ति की चैट दूसरे को कभी नहीं दिखती। करियर या कोर्स के बारे में कुछ भी पूछें।",
    hl: "Isme main help nahi kar sakta. Yeh assistant aapke browser mein chalta hai; iske paas koi password, API key ya dusron ki chat nahi hai — ek user ki chat dusre ko kabhi nahi dikhti. Career ya courses ke baare mein kuch bhi poochiye."
  },
  prefFree: {
    en: "Noted — I'll show free options first.",
    hi: "ठीक है — मैं मुफ़्त विकल्प पहले दिखाऊँगा।",
    hl: "Theek hai — main free options pehle dikhaunga."
  },
  prefBeginner: {
    en: "Noted — starting from the beginning is perfectly fine.",
    hi: "ठीक है — शुरुआत से सीखना बिल्कुल ठीक है।",
    hl: "Theek hai — shuruaat se seekhna bilkul theek hai."
  },
  thanks: {
    en: "You're welcome! Ask anytime. Before any big decision, compare a few options and check official websites.",
    hi: "आपका स्वागत है! कभी भी पूछें। कोई बड़ा फ़ैसला लेने से पहले कुछ विकल्पों की तुलना करें और आधिकारिक वेबसाइट देखें।",
    hl: "Aapka swagat hai! Kabhi bhi poochiye. Koi bada faisla lene se pehle kuch options compare kariye aur official websites dekhiye."
  },
  fallback: {
    en: "I'm not sure I understood. I'm a simple automated guide, so short questions work best — for example: \"I want to become a data analyst\", \"Where can I learn Tally?\" or \"What after 12th?\"",
    hi: "मैं ठीक से समझ नहीं पाया। मैं एक आसान ऑटोमेटेड गाइड हूँ, इसलिए छोटे सवाल सबसे अच्छे चलते हैं — जैसे: \"मुझे डेटा एनालिस्ट बनना है\", \"टैली कहाँ सीखूँ?\" या \"12वीं के बाद क्या?\"",
    hl: "Main theek se samajh nahi paya. Main ek simple automated guide hoon, isliye chhote sawaal sabse acche chalte hain — jaise: \"mujhe data analyst banna hai\", \"Tally kahan seekhun?\" ya \"12th ke baad kya?\""
  },
  tooLong: {
    en: "Your message was long, so I read only the first {n} characters.",
    hi: "आपका संदेश लंबा था, इसलिए मैंने सिर्फ़ पहले {n} अक्षर पढ़े।",
    hl: "Aapka message lamba tha, isliye maine sirf pehle {n} characters padhe."
  },
  empty: {
    en: "Please type a question.",
    hi: "कृपया कोई सवाल लिखें।",
    hl: "Kripya koi sawaal likhiye."
  },
  needGoal: {
    en: "Sure — which career or skill should I plan for? For example: web developer, accountant, electrician, teacher.",
    hi: "ज़रूर — किस करियर या हुनर के लिए बताऊँ? जैसे: वेब डेवलपर, अकाउंटेंट, इलेक्ट्रीशियन, शिक्षक।",
    hl: "Zaroor — kis career ya skill ke liye bataun? Jaise: web developer, accountant, electrician, teacher."
  },
  firstSkills: {
    en: "For **{title}**, a sensible order is:",
    hi: "**{title}** के लिए सही क्रम यह हो सकता है:",
    hl: "**{title}** ke liye ek sahi order yeh ho sakta hai:"
  },
  eduAsk: {
    en: "Got it — your education: **{level}**. {fit}",
    hi: "समझ गया — आपकी पढ़ाई: **{level}**। {fit}",
    hl: "Samajh gaya — aapki padhai: **{level}**. {fit}"
  },
  eduFits: {
    en: "That matches what is usually recorded for {title}.",
    hi: "यह {title} के लिए आम तौर पर दर्ज पढ़ाई से मेल खाती है।",
    hl: "Yeh {title} ke liye aam taur par darj padhai se match karti hai."
  },
  eduGap: {
    en: "For {title}, the education usually recorded is {edu}. You can still start learning the skills now, and plan the qualification alongside.",
    hi: "{title} के लिए आम तौर पर दर्ज पढ़ाई {edu} है। आप हुनर अभी से सीखना शुरू कर सकते हैं, और योग्यता की योजना साथ में बनाएँ।",
    hl: "{title} ke liye aam taur par darj padhai {edu} hai. Aap skills abhi se seekhna shuru kar sakte hain, aur qualification ki planning saath mein kariye."
  }
};

function say(key, lang, vars = {}) {
  const row = P[key];
  const s = (row && (row[lang] || row.en)) || "";
  return s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] === undefined || vars[k] === null ? "" : String(vars[k])));
}
const pick = (o, lang) => (o ? (lang === "hi" ? o.hi || o.en : o.en) : "");
const skillLabel = (id, lang) => labelOf(ALL_SKILLS, id, lang === "hi" ? "hi" : "en");
const careerById = (id) => CAREERS.find((c) => c.id === id);

// ---------------- Understanding the message ----------------
const norm = (s) => String(s || "").toLowerCase().replace(/[’']/g, "").replace(/\s+/g, " ").trim();

// Skills in the course data (exact ids from data/options.js). Aliases cover common
// English, Hinglish and Hindi ways of naming them.
export const SKILL_ALIASES = {
  "basic-computer": ["basic computer", "computer basics", "computer chalana", "computer seekh", "computer sikh", "computer course", "कंप्यूटर"],
  ccc: ["ccc"],
  olevel: ["o level", "o-level", "olevel"],
  dca: ["dca", "adca"],
  tally: ["tally", "टैली"],
  excel: ["excel", "spreadsheet", "libreoffice calc", "एक्सेल", "स्प्रेडशीट"],
  typing: ["typing", "टाइपिंग"],
  programming: ["programming", "coding", "python", "java ", "प्रोग्रामिंग", "कोडिंग"],
  webdev: ["web development", "web design", "website banana", "website bana", "html", "css", "javascript", "वेब डेवलपमेंट"],
  "data-analytics": ["data analytics", "data analysis", "data science", "डेटा एनालिटिक्स"],
  "graphic-design": ["graphic design", "graphics design", "designing", "photoshop", "canva", "ग्राफ़िक", "ग्राफिक"],
  "digital-marketing": ["digital marketing", "social media marketing", "seo", "online marketing", "डिजिटल मार्केटिंग"],
  teaching: ["teaching skill", "padhana seekh", "पढ़ाना"],
  accounting: ["accounting", "accounts", "hisab kitab", "hisaab", "gst", "bookkeeping", "अकाउंटिंग", "हिसाब"],
  sales: ["sales", "selling", "सेल्स"],
  "customer-service": ["customer service", "customer care", "ग्राहक सेवा"],
  "spoken-english": ["spoken english", "english bolna", "english speaking", "english seekh", "english sikh", "अंग्रेज़ी", "अंग्रेजी", "इंग्लिश"],
  electrician: ["electrician", "wiring", "electrical", "बिजली", "इलेक्ट्रीशियन"],
  plumbing: ["plumbing", "plumber", "प्लंबर", "प्लंबिंग"],
  welding: ["welding", "welder", "वेल्डिंग"],
  tailoring: ["tailoring", "silai", "sewing", "stitching", "सिलाई"],
  driving: ["driving", "driving licence", "driving license", "ड्राइविंग"],
  repair: ["repair", "mobile repair", "ac repair", "रिपेयर", "मरम्मत"],
  agriculture: ["farming", "kheti", "agriculture", "खेती"],
  cooking: ["cooking", "khana banana", "खाना बनाना"]
};

// Skills people ask about that are NOT in our course data (answered honestly).
const UNKNOWN_SKILLS = ["sql", "statistics", "power bi", "tableau", "nursing", "hr ", "inventory", "autocad", "cloud", "machine learning", "ai course", "video editing", "photography", "beautician", "share market"];

// Careers (data/careers.js ids) — common names in English, Hinglish and Hindi.
export const CAREER_ALIASES = {
  "data-analyst": ["data analyst", "डेटा एनालिस्ट"],
  "web-developer": ["web developer", "website developer", "वेब डेवलपर"],
  "software-developer": ["software developer", "software engineer", "programmer", "सॉफ़्टवेयर डेवलपर", "सॉफ्टवेयर"],
  "graphic-designer": ["graphic designer", "ग्राफ़िक डिज़ाइनर", "ग्राफिक डिजाइनर"],
  "digital-marketer": ["digital marketer", "digital marketing executive", "social media manager"],
  "accounts-assistant": ["accountant", "accounts assistant", "अकाउंटेंट"],
  "data-entry": ["data entry", "computer operator", "डेटा एंट्री"],
  "office-assistant": ["office assistant", "office job", "ऑफ़िस"],
  "customer-support": ["customer support", "call centre", "call center", "bpo", "कस्टमर सपोर्ट"],
  "sales-executive": ["sales executive", "salesman", "marketing job"],
  "retail-associate": ["retail", "showroom", "shop job", "दुकान"],
  "govt-teacher": ["government teacher", "sarkari teacher", "सरकारी शिक्षक", "teacher", "शिक्षक", "अध्यापक"],
  tutor: ["tutor", "tuition", "ट्यूशन"],
  electrician: ["electrician banna", "electrician job", "electrician bana", "become an electrician"],
  plumber: ["plumber banna", "plumber job", "become a plumber"],
  welder: ["welder banna", "welder job", "become a welder"],
  driver: ["driver", "ड्राइवर"],
  "repair-technician": ["mobile repair technician", "repair technician", "mechanic", "मैकेनिक"],
  "bank-po": ["bank po", "bank officer", "बैंक पीओ"],
  "bank-clerk": ["bank clerk", "bank job", "bank mein naukri", "बैंक"],
  "ssc-chsl": ["ssc chsl", "chsl"],
  "ssc-cgl": ["ssc cgl", "cgl"],
  "ssc-mts": ["ssc mts", "mts"],
  "rrb-ntpc": ["railway", "rrb", "ntpc", "रेलवे"],
  "state-police": ["police", "constable", "पुलिस"],
  "army-agniveer": ["army", "agniveer", "fauj", "सेना", "अग्निवीर"],
  "upsc-cse": ["ias", "ips", "upsc", "civil services", "आईएएस"],
  "india-post-gds": ["post office", "gds", "डाक"],
  "tailoring-business": ["boutique", "tailor", "दर्ज़ी", "दर्जी"],
  "food-business": ["food business", "tiffin", "restaurant business"],
  "computer-centre": ["computer centre", "csc centre", "cyber cafe"]
};

// General learning paths (guidance, labelled as such). Steps mention skills; the
// courses shown next to them still come only from verified data.
const GENERAL_PATHS = {
  "data-analyst": {
    en: ["Spreadsheet basics (formulas, sorting, charts)", "Basic statistics (average, percentages, simple graphs)", "SQL to read data from databases", "Data visualisation (clear charts and dashboards)", "Python for data, if your goals need it", "2–3 small portfolio projects with real public data"],
    hi: ["स्प्रेडशीट की बुनियाद (फ़ॉर्मूले, सॉर्टिंग, चार्ट)", "बेसिक सांख्यिकी (औसत, प्रतिशत, आसान ग्राफ़)", "डेटाबेस से डेटा पढ़ने के लिए SQL", "डेटा विज़ुअलाइज़ेशन (साफ़ चार्ट और डैशबोर्ड)", "ज़रूरत हो तो डेटा के लिए पाइथन", "असली सार्वजनिक डेटा से 2–3 छोटे पोर्टफ़ोलियो प्रोजेक्ट"],
    hl: ["Spreadsheet basics (formulas, sorting, charts)", "Basic statistics (average, percentage, simple graphs)", "Database se data padhne ke liye SQL", "Data visualisation (saaf charts aur dashboards)", "Zaroorat ho to data ke liye Python", "Asli public data se 2–3 chhote portfolio projects"]
  },
  "web-developer": {
    en: ["HTML and CSS — build simple pages", "JavaScript basics", "Make 2–3 small real websites (portfolio)", "Learn Git and how to publish a site", "Apply for internships or junior roles"],
    hi: ["HTML और CSS — आसान पेज बनाएँ", "JavaScript की बुनियाद", "2–3 छोटी असली वेबसाइट बनाएँ (पोर्टफ़ोलियो)", "Git और वेबसाइट पब्लिश करना सीखें", "इंटर्नशिप या जूनियर नौकरी के लिए आवेदन करें"],
    hl: ["HTML aur CSS — simple pages banaiye", "JavaScript basics", "2–3 chhoti asli websites banaiye (portfolio)", "Git aur website publish karna seekhiye", "Internship ya junior role ke liye apply kariye"]
  },
  "software-developer": {
    en: ["One programming language well (for example Python or Java)", "Problem solving and basic data structures", "Small projects you can show", "Git and teamwork basics", "Graduate / fresher hiring routes of IT companies"],
    hi: ["एक प्रोग्रामिंग भाषा अच्छे से (जैसे पाइथन या जावा)", "प्रॉब्लम सॉल्विंग और बेसिक डेटा स्ट्रक्चर", "दिखाने लायक़ छोटे प्रोजेक्ट", "Git और टीम में काम की बुनियाद", "IT कंपनियों के ग्रेजुएट / फ़्रेशर भर्ती रास्ते"],
    hl: ["Ek programming language acche se (jaise Python ya Java)", "Problem solving aur basic data structures", "Dikhane layak chhote projects", "Git aur teamwork basics", "IT companies ke graduate / fresher hiring routes"]
  },
  "digital-marketer": {
    en: ["How social media and online ads work", "Writing simple posts and basic design", "Measuring results (analytics)", "Run a small real page or campaign as practice", "Internships or entry-level roles"],
    hi: ["सोशल मीडिया और ऑनलाइन विज्ञापन कैसे काम करते हैं", "आसान पोस्ट लिखना और बेसिक डिज़ाइन", "नतीजे मापना (एनालिटिक्स)", "अभ्यास के लिए एक छोटा असली पेज या अभियान चलाएँ", "इंटर्नशिप या शुरुआती नौकरी"],
    hl: ["Social media aur online ads kaise kaam karte hain", "Simple posts likhna aur basic design", "Results measure karna (analytics)", "Practice ke liye ek chhota asli page ya campaign chalaiye", "Internship ya entry-level role"]
  },
  "graphic-designer": {
    en: ["Design basics: layout, colour, fonts", "One design tool well", "Practise with real posters and posts", "Build a portfolio of 10–15 pieces", "Freelance or junior roles"],
    hi: ["डिज़ाइन की बुनियाद: लेआउट, रंग, फ़ॉन्ट", "एक डिज़ाइन टूल अच्छे से", "असली पोस्टर और पोस्ट से अभ्यास", "10–15 कामों का पोर्टफ़ोलियो", "फ़्रीलांस या जूनियर नौकरी"],
    hl: ["Design basics: layout, colour, fonts", "Ek design tool acche se", "Asli posters aur posts se practice", "10–15 kaam ka portfolio", "Freelance ya junior role"]
  },
  "accounts-assistant": {
    en: ["Basics of accounting (entries, ledgers)", "Tally / accounting software", "GST basics", "Spreadsheets", "Practice with sample bills; apply to small firms"],
    hi: ["अकाउंटिंग की बुनियाद (एंट्री, लेजर)", "टैली / अकाउंटिंग सॉफ़्टवेयर", "GST की बुनियाद", "स्प्रेडशीट", "सैंपल बिल से अभ्यास; छोटी फ़र्मों में आवेदन"],
    hl: ["Accounting basics (entries, ledgers)", "Tally / accounting software", "GST basics", "Spreadsheets", "Sample bills se practice; chhoti firms mein apply"]
  }
};

const PROVIDERS = [
  { id: "nielit-ccc", label: "NIELIT", names: ["nielit", "ccc course"] },
  { id: "nielit-olevel", label: "NIELIT", names: ["o level course"] },
  { id: "swayam-digital-marketing", label: "SWAYAM", names: ["swayam", "स्वयम"] },
  { id: "nptel-programming", label: "NPTEL", names: ["nptel", "एनपीटेल"] },
  { id: "freecodecamp-web", label: "freeCodeCamp", names: ["freecodecamp", "free code camp"] },
  { id: "spoken-tutorial", label: "Spoken Tutorial", names: ["spoken tutorial", "iit bombay"] },
  { id: "iti-cts", label: "ITI", names: ["iti", "आईटीआई"] },
  { id: "pmkvy-training", label: "PMKVY", names: ["pmkvy", "kaushal vikas"] },
  { id: "sarathi-licence", label: "Sarathi", names: ["sarathi", "parivahan"] },
  { id: "kvk-training", label: "Krishi Vigyan Kendra", names: ["kvk", "krishi vigyan"] },
  { id: "ncte-teacher", label: "NCTE-recognised institutes", names: ["ncte", "b.ed", "bed course", "d.el.ed", "deled"] },
  { id: "tally-education", label: "Tally Education", names: ["tally education"] },
  { id: "rseti", label: "RSETI", names: ["rseti"] },
  { id: "hubspot-academy", label: "HubSpot Academy", names: ["hubspot"] },
  { id: "google-skillshop", label: "Google Skillshop", names: ["skillshop", "google ads course"] }
];
// SWAYAM and NIELIT have several records; all of them are checked together.
const PROVIDER_GROUPS = {
  "swayam-digital-marketing": ["swayam-digital-marketing", "swayam-computer", "swayam-accounting"],
  "nptel-programming": ["nptel-programming", "nptel-english"],
  "nielit-ccc": ["nielit-ccc", "nielit-olevel"]
};

const has = (text, list) => list.some((w) => text.includes(w));
const word = (text, re) => re.test(text);

function findSkills(t) {
  const found = [];
  for (const [id, words] of Object.entries(SKILL_ALIASES)) if (has(t + " ", words)) found.push(id);
  // "web developer" is a career; don't also treat it as only a skill question.
  return found;
}
// Each career's own title (English and Hindi) also counts as a name for it.
const TITLE_ALIASES = Object.fromEntries(CAREERS.map((c) => [c.id, [norm(c.title.en), c.title.hi]]));
function findCareer(t) {
  let best = null;
  for (const [id, words] of [...Object.entries(CAREER_ALIASES), ...Object.entries(TITLE_ALIASES)]) {
    for (const w of words) if (t.includes(w) && (!best || w.length > best.len)) best = { id, len: w.length };
  }
  return best ? best.id : null;
}
function findProvider(t) {
  for (const p of PROVIDERS) if (p.names.some((n) => new RegExp(`(^|[^a-z])${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z]|$)`).test(t))) return p.id;
  return null;
}
function findUnknownSkill(t) {
  return UNKNOWN_SKILLS.find((w) => (t + " ").includes(w)) || null;
}

const AREA_WORDS = {
  think: ["technology", "tech", "computer", "coding", "science", "टेक्नोलॉजी", "कंप्यूटर", "विज्ञान"],
  lead: ["business", "management", "vyapar", "dhandha", "व्यवसाय", "बिज़नेस", "बिजनेस"],
  create: ["creative", "design", "art", "drawing", "रचनात्मक", "डिज़ाइन", "कला"],
  help: ["teaching", "helping", "help others", "social work", "padhana", "पढ़ाना", "मदद"],
  hands: ["hands-on", "machine", "machines", "practical work", "repair", "हाथ का काम", "मशीन"],
  organise: ["numbers", "accounts", "office work", "हिसाब", "ऑफ़िस"]
};
function findArea(t) {
  for (const [id, words] of Object.entries(AREA_WORDS)) if (has(t, words)) return id;
  return null;
}

const EDU_WORDS = [
  ["postgraduation", ["post graduation", "postgraduate", "masters", "m.a", "m.com", "mba", "m.sc", "पोस्ट ग्रेजुएशन"]],
  ["graduation", ["graduation", "graduate", "b.a", "b.com", "bcom", "b.sc", "bsc", "btech", "b.tech", "bca", "degree", "ग्रेजुएशन", "स्नातक"]],
  ["diploma", ["diploma", "polytechnic", "डिप्लोमा"]],
  ["iti", ["iti pass", "iti kiya", "iti done", "maine iti"]],
  ["class12", ["12th", "12 pass", "12th pass", "class 12", "intermediate", "inter pass", "12वीं", "बारहवीं"]],
  ["class10", ["10th", "10 pass", "10th pass", "class 10", "high school", "matric", "10वीं", "दसवीं"]]
];
function findEdu(t) {
  for (const [id, words] of EDU_WORDS) if (has(t, words)) return id;
  return null;
}

// ---------------- Answers built from website data ----------------
function verifiedCourseCards(skillId, ctx) {
  let list = coursesForSkill(skillId, COURSES);
  if (ctx.budget === "free") list = [...list].sort((a, b) => Number(isFree(b)) - Number(isFree(a)));
  return list.map((c) => courseCard(c, skillId));
}
const isFree = (c) => c.cost === "free" || c.cost === "free-exam-fee";
function courseCard(c, skillId) {
  return {
    id: c.id, title: c.title, provider: c.provider, url: c.url, skill: skillId,
    cost: c.cost, costNote: c.costNote || null, duration: c.duration || null,
    evidence: c.evidence ? { url: c.evidence.url, text: c.evidence.text, checked: c.evidence.checked } : null
  };
}

function careerReply(id, lang, ctx) {
  const c = careerById(id);
  const lines = [say("careerIntro", lang, { title: pick(c.title, lang), summary: pick(c.summary, lang) })];
  if (Array.isArray(c.education)) {
    lines.push(say("careerEdu", lang, { edu: eduList(c.education, lang) }));
  } else if (c.education === null) lines.push(say("careerEduVaries", lang));
  const skills = [...c.requiredSkills, ...c.optionalSkills.slice(0, 2)];
  lines.push(c.requiredSkills.length ? say("careerSkills", lang, { skills: skills.map((s) => skillLabel(s, lang)).join(", ") }) : say("careerNoSkills", lang));
  const path = GENERAL_PATHS[id];
  if (path) lines.push("", say("pathT", lang), ...path[lang === "hi" ? "hi" : lang === "hl" ? "hl" : "en"].map((s, i) => `${i + 1}. ${s}`));
  lines.push("", say("noGuarantee", lang), "", say("careerNext", lang));
  const chips = [
    { label: chip("firstSkills", lang), send: chipSend("firstSkills", lang) },
    { label: chip("courses", lang), send: chipSend("courses", lang) },
    { label: chip("salary", lang), send: chipSend("salary", lang) }
  ];
  const links = c.sector === "government" ? [{ page: "jobs.html" }] : [{ page: "recommendations.html" }];
  return { text: lines.join("\n"), chips, links };
}

const EDU_LABEL = {
  class10: { en: "Class 10", hi: "10वीं" }, class12: { en: "Class 12", hi: "12वीं" }, iti: { en: "ITI", hi: "ITI" },
  diploma: { en: "Diploma", hi: "डिप्लोमा" }, graduation: { en: "Graduation", hi: "ग्रेजुएशन" },
  postgraduation: { en: "Post graduation", hi: "पोस्ट ग्रेजुएशन" }, professional: { en: "Professional degree", hi: "प्रोफ़ेशनल डिग्री" }
};
function eduList(levels, lang) {
  if (levels === "any") return lang === "hi" ? "कोई न्यूनतम नहीं" : "no minimum recorded";
  return levels.slice(0, 3).map((l) => pick(EDU_LABEL[l], lang)).join(" / ") + (levels.length > 3 ? (lang === "hi" ? " आदि" : " and higher") : "");
}

const CHIPS = {
  unsure: { en: "I'm not sure", hi: "मुझे पक्का नहीं पता", hl: "Mujhe pakka nahi pata" },
  firstSkills: { en: "What should I learn first?", hi: "पहले क्या सीखूँ?", hl: "Pehle kya seekhun?" },
  courses: { en: "Show verified courses", hi: "जाँचे गए कोर्स दिखाओ", hl: "Verified courses dikhao" },
  salary: { en: "Salary information", hi: "सैलरी की जानकारी", hl: "Salary ki jaankari" },
  govt: { en: "Government jobs open now", hi: "अभी खुली सरकारी नौकरियाँ", hl: "Abhi khuli sarkari naukri" },
  after10: { en: "What after 10th?", hi: "10वीं के बाद क्या?", hl: "10th ke baad kya?" },
  after12: { en: "What after 12th?", hi: "12वीं के बाद क्या?", hl: "12th ke baad kya?" },
  generalPath: { en: "Explain a general way to learn it", hi: "सीखने का सामान्य तरीक़ा बताओ", hl: "Seekhne ka general tareeka batao" }
};
const chip = (k, lang) => CHIPS[k][lang] || CHIPS[k].en;
const chipSend = chip;

function areaChips(lang) {
  return [...QUIZ_AREAS.map((a) => ({ label: `${a.icon} ${pick(a.name, lang)}`, send: pick(a.name, lang) })), { label: chip("unsure", lang), send: chip("unsure", lang) }];
}

function salaryReply(ctx, lang) {
  const role = ROLE_FOR_CAREER[ctx.goal] ? ROLES.find((r) => r.id === ROLE_FOR_CAREER[ctx.goal]) : null;
  if (!ctx.goal) return { text: [say("noGuarantee", lang), "", say("salaryAsk", lang)].join("\n") };
  const title = role ? (lang === "hi" ? role.title.hi : role.title.en) : pick(careerById(ctx.goal)?.title, lang);
  const v = role ? salaryView(role.salary, ctx.today) : { show: false };
  const lines = [];
  if (v.show) {
    const money = (n) => "₹" + Number(n).toLocaleString("en-IN");
    lines.push(say("salaryShow", lang, { role: title, low: money(v.low), high: money(v.high), n: v.profiles, source: SALARY_SOURCE.name, date: v.updated }));
  } else lines.push(say("salaryNone", lang, { role: title }));
  lines.push("", say("noGuarantee", lang));
  return { text: lines.join("\n"), links: v.show ? [{ url: v.url, label: SALARY_SOURCE.name }] : [] };
}
// Private Job Finder roles that correspond to a career (for salary data only).
const ROLE_FOR_CAREER = {
  "data-entry": "data-entry-operator", "accounts-assistant": "accounts-assistant", "office-assistant": "office-assistant",
  "customer-support": "customer-support", "sales-executive": "sales-executive", "retail-associate": "retail-sales-associate",
  electrician: "electrician", "repair-technician": "service-technician", "web-developer": "web-developer",
  "software-developer": "software-developer", "graphic-designer": "graphic-designer", "digital-marketer": "digital-marketing-executive",
  driver: "driver", "data-analyst": null
};

function coursesReply(skills, lang, ctx) {
  const parts = [];
  const cards = [];
  const chips = [];
  const sections = [];
  for (const s of skills.slice(0, 3)) {
    const list = verifiedCourseCards(s, ctx);
    if (list.length) {
      sections.push({ text: say("coursesT", lang, { skill: skillLabel(s, lang) }), cards: list.slice(0, 4) });
      cards.push(...list.slice(0, 4));
    } else {
      sections.push({ text: say("noVerified", lang, { skill: skillLabel(s, lang) }), cards: [] });
      if (!chips.length) chips.push({ label: chip("generalPath", lang), send: chip("generalPath", lang) });
    }
  }
  if (ctx.budget === "free" && cards.length) parts.push(say("coursesFree", lang));
  return { text: parts.join("\n\n"), sections, cards, chips, links: [{ page: "courses.html" }] };
}

function providerReply(providerId, skills, lang) {
  const ids = PROVIDER_GROUPS[providerId] || [providerId];
  const records = ids.map((id) => COURSES.find((c) => c.id === id)).filter(Boolean);
  const name = PROVIDERS.find((p) => p.id === providerId)?.label || pick(records[0].provider, lang);
  if (!skills.length) {
    const verified = [...new Set(records.flatMap((r) => r.skills))];
    return { text: verified.length ? say("providerSkills", lang, { provider: name, skills: verified.map((s) => skillLabel(s, lang)).join(", ") }) : say("providerNone", lang, { provider: name }),
      cards: records.filter((r) => r.skills.length).map((r) => courseCard(r, r.skills[0])) };
  }
  const lines = [];
  const cards = [];
  for (const s of skills.slice(0, 2)) {
    const yes = records.find((r) => r.skills.includes(s));
    const unconfirmed = records.find((r) => (r.unverifiedSkills || []).includes(s));
    if (yes) {
      lines.push(say("providerYes", lang, { provider: name, skill: skillLabel(s, lang), evidence: pick(yes.evidence?.text, lang), date: yes.evidence?.checked || yes.checked }));
      cards.push(courseCard(yes, s));
    } else if (unconfirmed) lines.push(say("providerUnconfirmed", lang, { provider: name, skill: skillLabel(s, lang) }));
    else lines.push(say("providerNo", lang, { provider: name, skill: skillLabel(s, lang) }));
    if (!yes) {
      const others = coursesForSkill(s, COURSES).filter((c) => !ids.includes(c.id));
      if (others.length) { lines.push(say("coursesT", lang, { skill: skillLabel(s, lang) })); cards.push(...others.slice(0, 3).map((c) => courseCard(c, s))); }
    }
  }
  return { text: lines.join("\n\n"), cards };
}

function govtReply(lang, today) {
  const open = VACANCIES
    .map((v) => ({ v, status: vacancyStatus(v, today).status }))
    .filter((x) => x.status === "open" || x.status === "closing-soon")
    .sort((a, b) => a.v.closes.localeCompare(b.v.closes));
  if (!open.length) return { text: say("govtNone", lang), links: [{ page: "jobs.html" }] };
  const lines = [say("govtT", lang), ...open.slice(0, 6).map(({ v }) => {
    const left = daysBetween(today, v.closes);
    return `- **${pick(v.title, lang)}** — ${say("govtItem", lang, { date: v.closes, n: left })}${v.verification === "news-reports" ? " · " + say("govtConfirm", lang) : ""}`;
  }), "", say("govtNote", lang)];
  return { text: lines.join("\n"), links: [{ page: "jobs.html" }] };
}

function roadmapReply(stageId, lang) {
  const stage = STAGES.find((s) => s.id === stageId);
  const paths = PATHS.filter((p) => p.stage === stageId);
  const lines = [say("roadmapT", lang, { stage: pick(stage.name, lang) }), ...paths.map((p) => `- **${pick(p.name, lang)}** — ${pick(p.duration, lang)}`)];
  return { text: lines.join("\n"), links: [{ page: `roadmap.html?stage=${stageId}`, pageKey: "roadmap.html" }], chips: [{ label: chip("govt", lang), send: chip("govt", lang) }] };
}

function firstSkillsReply(ctx, lang) {
  const c = careerById(ctx.goal);
  const path = GENERAL_PATHS[ctx.goal];
  const lines = [say("firstSkills", lang, { title: pick(c.title, lang) })];
  if (path) lines.push(...path[lang === "hi" ? "hi" : lang === "hl" ? "hl" : "en"].map((s, i) => `${i + 1}. ${s}`));
  else {
    const order = [...c.requiredSkills, ...c.optionalSkills];
    if (order.length) lines.push(...order.map((s, i) => `${i + 1}. ${skillLabel(s, lang)}`));
    else lines.push(say("careerNoSkills", lang));
  }
  lines.push("", say("noGuarantee", lang));
  return { text: lines.join("\n"), chips: [{ label: chip("courses", lang), send: chip("courses", lang) }] };
}

function goalSkills(goal) {
  const c = careerById(goal);
  return c ? [...c.requiredSkills, ...c.optionalSkills].slice(0, 3) : [];
}

// ---------------- Main entry ----------------
export function newContext(today) {
  return { lang: "en", goal: null, area: null, budget: null, level: null, edu: null, lastSkills: [], pendingOptions: null, today: today || "2026-10-24" };
}

/**
 * Answers one message. Returns { reply: { text, chips, cards, links }, ctx }.
 * ctx is a plain object kept only for this conversation (never shared).
 */
export function respond(input, prevCtx) {
  const ctx = { ...newContext(prevCtx?.today), ...(prevCtx || {}) };
  let raw = typeof input === "string" ? input : "";
  // Remove control characters; keep the text otherwise unchanged.
  raw = raw.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
  const notes = [];
  if (raw.length > MAX_INPUT) { raw = raw.slice(0, MAX_INPUT); notes.push("tooLong"); }
  // Clicking a suggestion or answering "1", "2"… keeps the language of the chat.
  const fromChip = Array.isArray(ctx.lastSends) && ctx.lastSends.includes(raw);
  const lang = (fromChip || ctx.keepLang ? ctx.lang : detectLang(raw)) || ctx.lang || "en";
  ctx.lang = lang;
  ctx.keepLang = false;
  const out = (reply) => {
    const pre = notes.map((n) => say(n, lang, { n: MAX_INPUT })).join("\n");
    const full = { chips: [], cards: [], links: [], sections: [], ...reply, text: (pre ? pre + "\n\n" : "") + (reply.text || "") };
    ctx.lastSends = full.chips.map((c) => c.send).concat(ctx.pendingOptions || []);
    return { reply: full, ctx };
  };
  if (!raw) return out({ text: say("empty", lang) });

  const t = norm(raw);

  // Numbered answer to a list of options we just showed.
  if (/^[1-9]$/.test(t) && Array.isArray(ctx.pendingOptions) && ctx.pendingOptions[Number(t) - 1]) {
    return respond(ctx.pendingOptions[Number(t) - 1], { ...ctx, pendingOptions: null, keepLang: true });
  }
  ctx.pendingOptions = null;

  // 1. Requests for secrets, instructions or other people's data.
  if (word(t, /(api.?key|secret|password|token|system prompt|system instruction|your instructions|prompt dikha|admin|database dump|other users?|another user|dusre (user|logon)|kisi aur ki chat|सिस्टम प्रॉम्प्ट|पासवर्ड|दूसरों की चैट)/)) {
    return out({ text: say("secrets", lang) });
  }
  // 2. Not wanting to share personal details.
  if (word(t, /(nahi batana|nahi bataunga|nahi batungi|naam nahi|don.?t want to (share|tell)|won.?t share|no personal|private rakhna|नाम नहीं|नहीं बताना|निजी जानकारी)/)) {
    return out({ text: say("privacy", lang), chips: areaChips(lang).slice(0, 3) });
  }
  // 3. Preferences that can be corrected at any time.
  const prefNotes = [];
  if (word(t, /(free|muft|mufat|bina paise|मुफ़्त|मुफ्त|फ्री)/)) { ctx.budget = "free"; prefNotes.push(say("prefFree", lang)); }
  if (word(t, /(paid (course )?(is )?ok|paise de sakta|paise de sakti|can pay)/)) ctx.budget = "any";
  if (word(t, /(beginner|shuru se|shuruaat se|starting from scratch|from zero|शुरुआत से|शुरू से)/)) { ctx.level = "beginner"; prefNotes.push(say("prefBeginner", lang)); }

  const edu = findEdu(t);
  const career = findCareer(t);
  const provider = findProvider(t);
  const skills = findSkills(t).filter((s) => !(career === "web-developer" && s === "webdev" && !provider) || /course|seekh|sikh|learn|सीख/.test(t));
  const unknown = findUnknownSkill(t);

  // Scholarships and schemes have their own pages.
  if (word(t, /(scholarship|छात्रवृत्ति|स्कॉलरशिप|vazifa)/)) return out({ text: say("pagePointer", lang, { page: lang === "en" ? "Scholarship Finder" : "स्कॉलरशिप" }), links: [{ page: "scholarships.html" }] });
  if (word(t, /(scheme|yojana|योजना|loan)/)) return out({ text: say("pagePointer", lang, { page: lang === "en" ? "Scheme Finder" : "योजनाएँ" }), links: [{ page: "schemes.html" }] });
  // 4. Guarantee / salary questions.
  if (word(t, /(guarantee|guaranteed|pakka|pakki naukri|100 ?%|surely get|salary|tankhwah|tankha|kitna kama|kitni kamai|वेतन|सैलरी|गारंटी|पक्की नौकरी|कमाई)/)) {
    if (career) ctx.goal = career;
    return out(salaryReply(ctx, lang));
  }
  // 5. Provider check ("does ITI teach welding?").
  if (provider) return out(withPrefix(prefNotes, providerReply(provider, skills, lang)));

  // 6. Topics with their own pages.
  if (word(t, /(10th ke baad|10 ke baad|after 10th|after class 10|10वीं के बाद|दसवीं के बाद)/)) return out(roadmapReply("after10", lang));
  if (word(t, /(12th ke baad|12 ke baad|after 12th|after class 12|12वीं के बाद|बारहवीं के बाद)/)) return out(roadmapReply("after12", lang));
  if (word(t, /(sarkari|government job|govt job|vacanc|bharti|recruitment|सरकारी|भर्ती|वैकेंसी)/) && !career) return out(govtReply(lang, ctx.today));
  if (word(t, /(private job|private naukri|company job|प्राइवेट नौकरी)/)) return out({ text: say("pagePointer", lang, { page: "Private Job Finder" }), links: [{ page: "private-jobs.html" }] });
  if (word(t, /\bquiz\b|क्विज़/)) return out({ text: say("notSureArea", lang), links: [{ page: "quiz.html" }] });

  // 7. A career goal (also used to change the goal later).
  if (career) {
    ctx.goal = career;
    ctx.lastSkills = goalSkills(career);
    const r = careerReply(career, lang, ctx);
    if (edu) r.text = eduFitText(edu, career, lang) + "\n\n" + r.text;
    if (edu) ctx.edu = edu;
    return out(withPrefix(prefNotes, r));
  }
  // 8. Education given on its own → relate it to the current goal.
  if (edu) {
    ctx.edu = edu;
    if (ctx.goal) return out({ text: eduFitText(edu, ctx.goal, lang), chips: [{ label: chip("firstSkills", lang), send: chip("firstSkills", lang) }] });
    return out(roadmapReply(["class10"].includes(edu) ? "after10" : "after12", lang));
  }
  // 9. A skill or course question.
  if (skills.length) {
    ctx.lastSkills = skills;
    return out(withPrefix(prefNotes, coursesReply(skills, lang, ctx)));
  }
  if (unknown) return out({ text: say("unknownSkill", lang, { skill: unknown.trim() }), links: [{ url: "https://www.skillindiadigital.gov.in/", label: "Skill India Digital Hub" }] });

  // 10. Feeling unsure / where to start.
  if (word(t, /(samajh nahi|samjh nahi|confus|pata nahi|kya karu|kya karun|kya karna chahiye|kya karoon|what should i do|don.?t know what|no idea|not sure|unsure|समझ नहीं|पता नहीं|क्या करूँ|क्या करना चाहिए|उलझन|पक्का नहीं)/)) {
    if (ctx.pendingArea) { ctx.pendingArea = false; return out({ text: say("notSureArea", lang), links: [{ page: "quiz.html" }] }); }
    ctx.pendingArea = true;
    const chips = areaChips(lang);
    ctx.pendingOptions = chips.map((c) => c.send);
    return out({ text: say("unsure", lang) + "\n" + chips.map((c, i) => `${i + 1}. ${c.label}`).join("\n"), chips });
  }
  // 11. An interest area.
  const area = findArea(t) || QUIZ_AREAS.find((a) => t.includes(norm(a.name.en)) || raw.includes(a.name.hi))?.id;
  if (area) {
    ctx.area = area; ctx.pendingArea = false;
    const a = QUIZ_AREAS.find((x) => x.id === area);
    const careers = a.careers.map((id) => careerById(id)).filter(Boolean).slice(0, 6);
    ctx.pendingOptions = careers.map((c) => pick(c.title, lang === "hi" ? "hi" : "en"));
    return out({
      text: say("area", lang, { area: pick(a.name, lang), about: pick(a.about, lang), careers: careers.map((c, i) => `${i + 1}. ${pick(c.title, lang)}`).join("; ") }),
      chips: careers.slice(0, 4).map((c) => ({ label: pick(c.title, lang), send: pick(c.title, "en") })),
      links: [{ page: "quiz.html" }]
    });
  }
  // 12. Follow-ups that rely on the conversation so far.
  if (word(t, /(pehle kya|pahle kya|first|start kaha|shuru kaha|kahan se shuru|where (do|should) i start|next step|aage kya|roadmap|steps|पहले क्या|कहाँ से शुरू|अगला क़दम|अगला कदम)/)) {
    return out(ctx.goal ? firstSkillsReply(ctx, lang) : { text: say("needGoal", lang), chips: areaChips(lang).slice(0, 4) });
  }
  if (word(t, /(course|courses|kahan seekh|kahan sikh|where (can|to) learn|provider|institute|कोर्स|कहाँ सीख|संस्थान|verified)/)) {
    const list = ctx.lastSkills && ctx.lastSkills.length ? ctx.lastSkills : goalSkills(ctx.goal);
    return out(list.length ? withPrefix(prefNotes, coursesReply(list, lang, ctx)) : { text: say("needGoal", lang) });
  }
  if (word(t, /(general (way|tareeka|path)|samjhao|explain)/) && ctx.lastSkills?.length) {
    return out({ text: generalLearning(ctx.lastSkills[0], lang) });
  }
  if (prefNotes.length) return out({ text: prefNotes.join(" ") + (ctx.lastSkills?.length ? "" : "\n\n" + say("needGoal", lang)) , chips: ctx.lastSkills?.length ? [{ label: chip("courses", lang), send: chip("courses", lang) }] : [] });
  // 13. Greetings and thanks.
  if (word(t, /^(hi|hello|hey|namaste|namaskar|नमस्ते|नमस्कार|hii+|helo|start|help|madad)\b/)) return out({ text: say("hello", lang), chips: helloChips(lang) });
  if (word(t, /(thank|thanks|dhanyavad|shukriya|धन्यवाद|शुक्रिया)/)) return out({ text: say("thanks", lang) });

  return out({ text: say("fallback", lang), chips: helloChips(lang) });
}

function withPrefix(prefNotes, reply) {
  return prefNotes.length ? { ...reply, text: prefNotes.join(" ") + "\n\n" + reply.text } : reply;
}

function eduFitText(edu, goal, lang) {
  const c = careerById(goal);
  const label = pick(EDU_LABEL[edu], lang);
  let fit = "";
  if (c && Array.isArray(c.education)) {
    fit = c.education.includes(edu) ? say("eduFits", lang, { title: pick(c.title, lang) }) : say("eduGap", lang, { title: pick(c.title, lang), edu: eduList(c.education, lang) });
  } else if (c && c.education === null) fit = say("careerEduVaries", lang);
  return say("eduAsk", lang, { level: label, fit });
}

function generalLearning(skillId, lang) {
  const name = skillLabel(skillId, lang);
  const steps = {
    en: [`Learn the basics of ${name} from free videos or books`, "Practise a little every day", "Make one small real piece of work", "Ask someone experienced for feedback", "Look for verified courses again later — our list is updated"],
    hi: [`${name} की बुनियाद मुफ़्त वीडियो या किताबों से सीखें`, "रोज़ थोड़ा अभ्यास करें", "एक छोटा असली काम बनाकर देखें", "किसी अनुभवी व्यक्ति से राय लें", "बाद में फिर से जाँचे गए कोर्स देखें — हमारी सूची अपडेट होती है"],
    hl: [`${name} ke basics free videos ya books se seekhiye`, "Roz thoda practice kariye", "Ek chhota asli kaam bana kar dekhiye", "Kisi experienced vyakti se feedback lijiye", "Baad mein phir se verified courses dekhiye — hamari list update hoti hai"]
  };
  return say("pathT", lang) + "\n" + steps[lang === "hi" ? "hi" : lang === "hl" ? "hl" : "en"].map((s, i) => `${i + 1}. ${s}`).join("\n");
}

function helloChips(lang) {
  return [
    { label: chip("unsure", lang), send: chip("unsure", lang) },
    { label: chip("after12", lang), send: chip("after12", lang) },
    { label: chip("govt", lang), send: chip("govt", lang) },
    { label: lang === "en" ? "I want to become a data analyst" : lang === "hi" ? "मुझे डेटा एनालिस्ट बनना है" : "Mujhe data analyst banna hai", send: lang === "en" ? "I want to become a data analyst" : lang === "hi" ? "मुझे डेटा एनालिस्ट बनना है" : "Mujhe data analyst banna hai" }
  ];
}

export function welcome(lang = "en") {
  return { text: say("hello", lang), chips: helloChips(lang), cards: [], links: [] };
}

/**
 * Facts for the optional AI mode: only verified website data relevant to the
 * message and the conversation. The AI is told to use ONLY these facts for any
 * course, provider, link, salary or vacancy.
 */
export function retrieveFacts(input, ctx) {
  const t = norm(input);
  const career = findCareer(t) || ctx?.goal || null;
  const skills = [...new Set([...findSkills(t), ...(career ? goalSkills(career) : []), ...((ctx && ctx.lastSkills) || [])])].slice(0, 5);
  const today = ctx?.today || "2026-10-24";
  const c = career ? careerById(career) : null;
  return {
    career: c ? { id: c.id, title: c.title.en, summary: c.summary.en, education: c.education, requiredSkills: c.requiredSkills, optionalSkills: c.optionalSkills } : null,
    verifiedCourses: Object.fromEntries(skills.map((s) => [s, coursesForSkill(s, COURSES).slice(0, 4).map((x) => ({
      title: x.title.en, provider: x.provider.en, url: x.url, cost: x.cost, costNote: x.costNote?.en || null, duration: x.duration?.en || null,
      evidence: x.evidence ? `${x.evidence.text.en} (checked ${x.evidence.checked})` : null
    }))])),
    skillsWithoutVerifiedProvider: skills.filter((s) => !coursesForSkill(s, COURSES).length),
    salary: career && ROLE_FOR_CAREER[career] ? (() => { const r = ROLES.find((x) => x.id === ROLE_FOR_CAREER[career]); const v = salaryView(r.salary, today); return v.show ? { role: r.title.en, monthlyLow: v.low, monthlyHigh: v.high, profiles: v.profiles, updated: v.updated, source: SALARY_SOURCE.name, url: v.url } : { role: r.title.en, available: false }; })() : null,
    openGovtRecruitments: VACANCIES.filter((v) => ["open", "closing-soon"].includes(vacancyStatus(v, today).status)).map((v) => ({ title: v.title.en, closes: v.closes, apply: v.applyUrl, verification: v.verification })),
    today
  };
}
