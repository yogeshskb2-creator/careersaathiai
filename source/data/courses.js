// Course & Skill Explorer records ("learning options").
//
// HONESTY RULES
// - `cost`, `duration` and `certificate` are filled ONLY when we read them on the
//   provider's own page on `checked`. Otherwise they are null and the site says
//   "Not verified — check the provider".
// - We never show prices. "fee" only says that a fee applies.
// - Course pages change every term, so most records point to the provider and
//   give a `searchTip` (what to search for there) instead of a fragile deep link.
// - Completing a course never guarantees a job. The page says so.

export const COST = {
  FREE: "free",                 // learning and certificate free (as stated by provider)
  FREE_EXAM_FEE: "free-exam-fee", // learning free, certificate needs a paid exam
  FEE: "fee",                   // a fee applies (amount not shown)
  UNVERIFIED: null
};

const CHECKED = "2026-10-22";
const tx = (en, hi) => ({ en, hi });
const c = (o) => ({ duration: null, certificate: null, minEducation: null, searchTip: null, note: null, checked: CHECKED, ...o });

export const PROVIDER_TYPES = [
  { id: "government", en: "Government", hi: "सरकारी" },
  { id: "institute", en: "Public institute", hi: "सार्वजनिक संस्थान" },
  { id: "nonprofit", en: "Non-profit", hi: "ग़ैर-लाभकारी" },
  { id: "other", en: "Other", hi: "अन्य" }
];

export const COURSES = [
  c({
    id: "nielit-ccc", providerType: "government", mode: "both",
    title: tx("CCC — Course on Computer Concepts", "CCC — कंप्यूटर की बुनियादी जानकारी का कोर्स"),
    provider: tx("NIELIT (Government of India)", "NIELIT (भारत सरकार)"),
    url: "https://www.nielit.gov.in/node/2480",
    skills: ["ccc", "basic-computer", "excel"],
    topics: tx("Computer basics, word processing, spreadsheets, internet, email and simple presentations.", "कंप्यूटर की बुनियाद, वर्ड प्रोसेसिंग, स्प्रेडशीट, इंटरनेट, ईमेल और छोटी प्रेज़ेंटेशन।"),
    prerequisites: tx("No minimum education required.", "कोई न्यूनतम पढ़ाई ज़रूरी नहीं।"),
    cost: "fee", costNote: tx("An exam fee applies. You can study at an approved institute or by yourself.", "परीक्षा फ़ीस लगती है। मान्य संस्थान से या ख़ुद पढ़ सकते हैं।"),
    duration: tx("80 hours", "80 घंटे"),
    certificate: tx("Digitally signed NIELIT certificate after passing the exam.", "परीक्षा पास करने पर NIELIT का डिजिटल हस्ताक्षर वाला प्रमाणपत्र।"),
    relatedCareers: ["data-entry", "ssc-chsl", "india-post-gds", "office-assistant", "computer-centre"],
    checkedFrom: tx("NIELIT CCC page", "NIELIT CCC पेज")
  }),
  c({
    id: "nielit-olevel", providerType: "government", mode: "both",
    title: tx("O Level (IT)", "O लेवल (IT)"),
    provider: tx("NIELIT (Government of India)", "NIELIT (भारत सरकार)"),
    url: "https://www.nielit.gov.in/",
    searchTip: tx("On the NIELIT site, open the O Level section for the current syllabus and rules.", "NIELIT की वेबसाइट पर O लेवल सेक्शन में मौजूदा सिलेबस और नियम देखें।"),
    skills: ["olevel", "basic-computer", "programming", "webdev"],
    topics: tx("A longer IT course after CCC. Check the current syllabus on NIELIT.", "CCC के बाद का लंबा IT कोर्स। मौजूदा सिलेबस NIELIT पर देखें।"),
    prerequisites: null, cost: null, costNote: null,
    relatedCareers: ["data-entry", "computer-centre", "web-developer"],
    checkedFrom: tx("NIELIT official website (address only)", "NIELIT आधिकारिक वेबसाइट (सिर्फ़ पता)")
  }),
  c({
    id: "swayam-computer", providerType: "government", mode: "online",
    title: tx("Computer & office skills courses", "कंप्यूटर और ऑफ़िस कौशल के कोर्स"),
    provider: tx("SWAYAM (Ministry of Education)", "स्वयम (शिक्षा मंत्रालय)"),
    url: "https://swayam.gov.in/",
    searchTip: tx("Search SWAYAM for \"computer fundamentals\", \"office automation\" or \"spreadsheet\". Available courses change each semester.", "स्वयम पर \"computer fundamentals\", \"office automation\" या \"spreadsheet\" खोजें। कोर्स हर सेमेस्टर बदलते हैं।"),
    skills: ["basic-computer", "excel"],
    topics: tx("University-level online courses on computer and office basics.", "कंप्यूटर और ऑफ़िस की बुनियाद पर विश्वविद्यालय स्तर के ऑनलाइन कोर्स।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Learning is free. A certificate needs a paid, in-person proctored exam.", "पढ़ाई मुफ़्त है। प्रमाणपत्र के लिए फ़ीस वाली परीक्षा केंद्र पर देनी होती है।"),
    certificate: tx("Only after passing the paid proctored exam.", "सिर्फ़ फ़ीस वाली निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["office-assistant", "data-entry", "accounts-assistant"],
    checkedFrom: tx("SWAYAM 'About' page", "स्वयम का 'About' पेज")
  }),
  c({
    id: "swayam-accounting", providerType: "government", mode: "online",
    title: tx("Accounting and commerce courses", "अकाउंटिंग और कॉमर्स के कोर्स"),
    provider: tx("SWAYAM (Ministry of Education)", "स्वयम (शिक्षा मंत्रालय)"),
    url: "https://swayam.gov.in/",
    searchTip: tx("Search SWAYAM for \"accounting\", \"financial accounting\" or \"GST\".", "स्वयम पर \"accounting\", \"financial accounting\" या \"GST\" खोजें।"),
    skills: ["accounting"],
    topics: tx("Basics of bookkeeping, financial accounting and taxation from universities.", "विश्वविद्यालयों से बही-खाता, वित्तीय लेखा और टैक्स की बुनियाद।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Learning is free. A certificate needs a paid, in-person proctored exam.", "पढ़ाई मुफ़्त है। प्रमाणपत्र के लिए फ़ीस वाली परीक्षा केंद्र पर देनी होती है।"),
    certificate: tx("Only after passing the paid proctored exam.", "सिर्फ़ फ़ीस वाली निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["accounts-assistant", "bank-clerk", "ssc-cgl"],
    checkedFrom: tx("SWAYAM 'About' page", "स्वयम का 'About' पेज")
  }),
  c({
    id: "swayam-digital-marketing", providerType: "government", mode: "online",
    title: tx("Digital marketing and e-commerce courses", "डिजिटल मार्केटिंग और ई-कॉमर्स के कोर्स"),
    provider: tx("SWAYAM (Ministry of Education)", "स्वयम (शिक्षा मंत्रालय)"),
    url: "https://swayam.gov.in/",
    searchTip: tx("Search SWAYAM for \"digital marketing\" or \"e-commerce\". If none is open now, check again next semester.", "स्वयम पर \"digital marketing\" या \"e-commerce\" खोजें। अभी कोई न हो तो अगले सेमेस्टर देखें।"),
    skills: ["digital-marketing"],
    topics: tx("Online promotion, social media and selling online.", "ऑनलाइन प्रचार, सोशल मीडिया और ऑनलाइन बिक्री।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Learning is free. A certificate needs a paid, in-person proctored exam.", "पढ़ाई मुफ़्त है। प्रमाणपत्र के लिए फ़ीस वाली परीक्षा केंद्र पर देनी होती है।"),
    certificate: tx("Only after passing the paid proctored exam.", "सिर्फ़ फ़ीस वाली निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["digital-marketer", "tailoring-business", "food-business"],
    checkedFrom: tx("SWAYAM 'About' page", "स्वयम का 'About' पेज")
  }),
  c({
    id: "nptel-programming", providerType: "institute", mode: "online",
    title: tx("Programming and data courses from IITs", "IIT के प्रोग्रामिंग और डेटा कोर्स"),
    provider: tx("NPTEL (IITs and IISc, funded by Ministry of Education)", "NPTEL (IIT और IISc, शिक्षा मंत्रालय द्वारा वित्तपोषित)"),
    url: "https://nptel.ac.in/",
    searchTip: tx("Search NPTEL for \"Python\", \"programming in Java\" or \"data analytics\".", "NPTEL पर \"Python\", \"programming in Java\" या \"data analytics\" खोजें।"),
    skills: ["programming", "data-analytics"],
    topics: tx("Programming languages, data science and analytics taught by IIT/IISc faculty.", "IIT/IISc के शिक्षकों द्वारा प्रोग्रामिंग, डेटा साइंस और एनालिटिक्स।"),
    prerequisites: tx("Some courses expect college-level maths or prior programming — read the course page.", "कुछ कोर्स में कॉलेज स्तर का गणित या पहले की प्रोग्रामिंग चाहिए — कोर्स पेज पढ़ें।"),
    cost: "free-exam-fee", costNote: tx("Course materials are free. The in-person certification exam has a fee.", "कोर्स सामग्री मुफ़्त है। प्रमाणपत्र परीक्षा की फ़ीस लगती है।"),
    certificate: tx("After passing the proctored exam.", "निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["software-developer", "data-analyst", "web-developer"],
    checkedFrom: tx("NPTEL FAQ page", "NPTEL FAQ पेज")
  }),
  c({
    id: "nptel-english", providerType: "institute", mode: "online",
    title: tx("Spoken English and communication courses", "बोलचाल की अंग्रेज़ी और संवाद कौशल के कोर्स"),
    provider: tx("NPTEL / SWAYAM", "NPTEL / स्वयम"),
    url: "https://nptel.ac.in/",
    searchTip: tx("Search NPTEL or SWAYAM for \"spoken English\", \"speaking effectively\" or \"communication skills\".", "NPTEL या स्वयम पर \"spoken English\", \"speaking effectively\" या \"communication skills\" खोजें।"),
    skills: ["spoken-english", "customer-service"],
    topics: tx("Speaking, listening and workplace communication.", "बोलना, सुनना और काम की जगह पर बातचीत।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Course materials are free. The certification exam has a fee.", "कोर्स सामग्री मुफ़्त है। प्रमाणपत्र परीक्षा की फ़ीस लगती है।"),
    certificate: tx("After passing the proctored exam.", "निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["customer-support", "bank-po", "sales-executive", "tutor"],
    checkedFrom: tx("NPTEL FAQ and SWAYAM 'About' pages", "NPTEL FAQ और स्वयम 'About' पेज")
  }),
  c({
    id: "freecodecamp-web", providerType: "nonprofit", mode: "online",
    title: tx("Web development (HTML, CSS, JavaScript)", "वेब डेवलपमेंट (HTML, CSS, JavaScript)"),
    provider: tx("freeCodeCamp", "freeCodeCamp"),
    url: "https://www.freecodecamp.org/",
    searchTip: tx("Start with the Responsive Web Design curriculum. Lessons are in English.", "Responsive Web Design पाठ्यक्रम से शुरू करें। पाठ अंग्रेज़ी में हैं।"),
    skills: ["webdev", "programming"],
    topics: tx("Build real web pages step by step and practise with projects.", "क़दम-दर-क़दम असली वेब पेज बनाएँ और प्रोजेक्ट से अभ्यास करें।"),
    prerequisites: tx("Basic computer use and some English reading.", "बेसिक कंप्यूटर और थोड़ी अंग्रेज़ी पढ़ना।"),
    cost: "free", costNote: tx("The site states that you can learn to code for free.", "वेबसाइट के अनुसार कोडिंग मुफ़्त सीख सकते हैं।"),
    relatedCareers: ["web-developer", "software-developer"],
    checkedFrom: tx("freeCodeCamp home page", "freeCodeCamp होम पेज")
  }),
  c({
    id: "spoken-tutorial", providerType: "institute", mode: "online",
    title: tx("Software tutorials in Hindi and English (Calc, Python, HTML, GIMP, Inkscape)", "हिंदी और अंग्रेज़ी में सॉफ़्टवेयर ट्यूटोरियल (Calc, Python, HTML, GIMP, Inkscape)"),
    provider: tx("Spoken Tutorial (developed at IIT Bombay)", "स्पोकन ट्यूटोरियल (IIT बॉम्बे में विकसित)"),
    url: "https://spoken-tutorial.org/",
    searchTip: tx("Choose a topic such as \"LibreOffice Calc\", \"Python\", \"HTML\", \"GIMP\" or \"Inkscape\", then pick Hindi or English.", "\"LibreOffice Calc\", \"Python\", \"HTML\", \"GIMP\" या \"Inkscape\" जैसा विषय चुनें, फिर हिंदी या अंग्रेज़ी चुनें।"),
    skills: ["excel", "programming", "webdev", "graphic-design"],
    topics: tx("Short video tutorials for learning software on your own; many are in Hindi.", "ख़ुद सॉफ़्टवेयर सीखने के छोटे वीडियो; कई हिंदी में।"),
    prerequisites: null, cost: null, costNote: null,
    note: tx("The site now lists subscription and payment pages, so we could not confirm what is free.", "वेबसाइट पर अब सब्सक्रिप्शन और भुगतान पेज भी हैं, इसलिए हम पक्का नहीं कर सके कि क्या मुफ़्त है।"),
    relatedCareers: ["graphic-designer", "office-assistant", "web-developer", "data-analyst"],
    checkedFrom: tx("Spoken Tutorial home page", "स्पोकन ट्यूटोरियल होम पेज")
  }),
  c({
    id: "iti-cts", providerType: "government", mode: "in-person",
    title: tx("ITI trade courses (Craftsmen Training Scheme)", "ITI ट्रेड कोर्स (शिल्पकार प्रशिक्षण योजना)"),
    provider: tx("Government and private ITIs, under DGT (Ministry of Skill Development)", "सरकारी और प्राइवेट ITI, DGT (कौशल विकास मंत्रालय) के तहत"),
    url: "https://dgt.gov.in/en/about-us",
    searchTip: tx("Ask your nearest government ITI or your State's technical education / ITI admission portal about trades and admission dates.", "ट्रेड और दाख़िले की तारीख़ों के लिए नज़दीकी सरकारी ITI या अपने राज्य के ITI दाख़िला पोर्टल से पूछें।"),
    skills: ["electrician", "plumbing", "welding", "repair"],
    topics: tx("Hands-on training in engineering and non-engineering trades at ITIs.", "ITI में इंजीनियरिंग और ग़ैर-इंजीनियरिंग ट्रेड की व्यावहारिक ट्रेनिंग।"),
    prerequisites: tx("Each trade sets its own entry qualification.", "हर ट्रेड की अपनी प्रवेश योग्यता है।"),
    cost: null, costNote: null,
    duration: tx("About 6 months to 2 years, depending on the trade.", "ट्रेड के हिसाब से लगभग 6 महीने से 2 साल।"),
    relatedCareers: ["electrician", "plumber", "welder", "repair-technician", "trade-apprentice", "rrb-level1"],
    checkedFrom: tx("DGT 'About us' page", "DGT का 'About us' पेज")
  }),
  c({
    id: "pmkvy-training", providerType: "government", mode: "in-person",
    title: tx("Free short-term job-role training (PMKVY)", "मुफ़्त छोटी जॉब-रोल ट्रेनिंग (PMKVY)"),
    provider: tx("PMKVY training centres, through NSDC", "PMKVY ट्रेनिंग सेंटर, NSDC के ज़रिए"),
    url: "https://nsdcindia.org/products/pradhan-mantri-kaushal-vikas-yojana",
    searchTip: tx("Ask a PMKVY centre near you which job roles they train for (for example retail, tailoring, electrician, customer service).", "पास के PMKVY सेंटर से पूछें कि वे किन कामों की ट्रेनिंग देते हैं (जैसे रिटेल, सिलाई, इलेक्ट्रीशियन, ग्राहक सेवा)।"),
    skills: ["customer-service", "sales", "tailoring", "electrician", "plumbing", "welding", "repair", "cooking", "digital-marketing"],
    topics: tx("Industry-linked job-role courses with on-the-job training. Available roles differ by centre.", "उद्योग से जुड़े जॉब-रोल कोर्स, काम पर ट्रेनिंग के साथ। हर सेंटर पर अलग कोर्स।"),
    prerequisites: tx("Each job role has its own entry requirements.", "हर जॉब रोल की अपनी शर्तें हैं।"),
    cost: "free", costNote: tx("Training cost is paid by the scheme.", "ट्रेनिंग का ख़र्च योजना उठाती है।"),
    duration: tx("Courses typically run 300–600 hours.", "कोर्स आमतौर पर 300–600 घंटे के होते हैं।"),
    certificate: tx("Nationally recognised certificate after the assessment.", "परीक्षा के बाद राष्ट्रीय स्तर पर मान्य प्रमाणपत्र।"),
    relatedCareers: ["retail-associate", "customer-support", "sales-executive", "tailoring-business", "electrician", "plumber", "welder", "repair-technician"],
    checkedFrom: tx("NSDC PMKVY page", "NSDC PMKVY पेज")
  }),
  c({
    id: "sarathi-licence", providerType: "government", mode: "both",
    title: tx("Learner's and driving licence", "लर्नर और ड्राइविंग लाइसेंस"),
    provider: tx("Sarathi — Ministry of Road Transport & Highways", "सारथी — सड़क परिवहन और राजमार्ग मंत्रालय"),
    url: "https://sarathi.parivahan.gov.in/sarathiservice/",
    searchTip: tx("Choose your state, then apply for a learner's licence. Learn the road rules first.", "अपना राज्य चुनें, फिर लर्नर लाइसेंस के लिए आवेदन करें। पहले सड़क के नियम सीखें।"),
    skills: ["driving"],
    topics: tx("Not a course: the legal licence you need before driving for work.", "यह कोर्स नहीं: काम के लिए गाड़ी चलाने से पहले ज़रूरी क़ानूनी लाइसेंस।"),
    prerequisites: null,
    cost: "fee", costNote: tx("Government fees apply.", "सरकारी फ़ीस लगती है।"),
    relatedCareers: ["driver", "sales-executive"],
    checkedFrom: tx("Saharanpur district (UP) official page on driving licences", "सहारनपुर ज़िला (UP) का ड्राइविंग लाइसेंस पेज")
  }),
  c({
    id: "kvk-training", providerType: "government", mode: "in-person",
    title: tx("Farm and allied training at Krishi Vigyan Kendra", "कृषि विज्ञान केंद्र पर खेती और सहायक कामों की ट्रेनिंग"),
    provider: tx("Krishi Vigyan Kendras (ICAR)", "कृषि विज्ञान केंद्र (ICAR)"),
    url: "https://kvk.icar.gov.in/",
    searchTip: tx("Find the KVK in your district and ask about upcoming vocational trainings.", "अपने ज़िले का KVK खोजें और आने वाली ट्रेनिंग के बारे में पूछें।"),
    skills: ["agriculture"],
    topics: tx("Short and long vocational training for farmers and rural youth in agriculture and allied work.", "किसानों और ग्रामीण युवाओं के लिए खेती और सहायक कामों की छोटी और लंबी ट्रेनिंग।"),
    prerequisites: null, cost: null, costNote: null,
    relatedCareers: ["agri-entrepreneur"],
    checkedFrom: tx("ICAR institute page on KVKs", "KVK पर ICAR संस्थान का पेज")
  }),
  c({
    id: "ncte-teacher", providerType: "government", mode: "in-person",
    title: tx("Teacher training (D.El.Ed / B.Ed) — check recognition first", "शिक्षक प्रशिक्षण (D.El.Ed / B.Ed) — पहले मान्यता जाँचें"),
    provider: tx("NCTE-recognised institutes", "NCTE से मान्यता प्राप्त संस्थान"),
    url: "https://ncte.gov.in/",
    searchTip: tx("Before paying any fee, check that the institute appears in NCTE's state-wise list of recognised institutions.", "कोई भी फ़ीस देने से पहले देखें कि संस्थान NCTE की राज्यवार मान्यता सूची में है।"),
    skills: ["teaching"],
    topics: tx("Professional teacher-training qualifications needed for most school teaching jobs.", "ज़्यादातर स्कूल शिक्षक नौकरियों के लिए ज़रूरी शिक्षक-प्रशिक्षण योग्यता।"),
    prerequisites: tx("Depends on the programme (usually Class 12 for D.El.Ed and graduation for B.Ed) — confirm with NCTE rules.", "कार्यक्रम पर निर्भर (आमतौर पर D.El.Ed के लिए 12वीं, B.Ed के लिए ग्रेजुएशन) — NCTE नियमों से पक्का करें।"),
    cost: null, costNote: null,
    relatedCareers: ["govt-teacher", "tutor"],
    checkedFrom: tx("NCTE official website (institution lists)", "NCTE आधिकारिक वेबसाइट (संस्थान सूची)")
  })
];

// General portal to explore many more courses.
export const SKILL_INDIA = {
  url: "https://www.skillindiadigital.gov.in/",
  name: tx("Skill India Digital Hub", "स्किल इंडिया डिजिटल हब"),
  text: tx("The Ministry of Skill Development's platform for skill courses, certificates and job links. We have not verified which courses are free.", "कौशल विकास मंत्रालय का प्लेटफ़ॉर्म — हुनर कोर्स, प्रमाणपत्र और नौकरी के लिंक। कौन-से कोर्स मुफ़्त हैं, यह हमने नहीं जाँचा।")
};
