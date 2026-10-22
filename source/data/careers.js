// Career dataset for the matching engine.
//
// HONESTY RULES FOR THIS FILE
// - No salaries, vacancy numbers, exam dates or age limits are stored here.
// - `education` lists the qualification levels we RECORD for a path:
//     an array of level ids → only those levels are treated as matching
//     "any"                 → no minimum recorded; skills matter most
//     null                  → rules vary (by state / notification) → always "verify"
// - Every record is `status: "demo"` until a person checks it against an official
//   notification and changes it to "source-checked" with the date.
//   Government records always show "Eligibility not yet verified" while demo.

const FROM_10 = ["class10", "class12", "iti", "diploma", "graduation", "postgraduation", "professional"];
const FROM_12 = ["class12", "graduation", "postgraduation", "professional"];
const GRAD = ["graduation", "postgraduation", "professional"];
const DEMO = { status: "demo", checkedOn: null };

const c = (o) => ({
  optionalSkills: [], minYearsExperience: 0, remoteFriendly: false,
  preferred: null, educationNote: null, courseIds: [], verification: DEMO, ...o
});

export const SECTORS = [
  { id: "government", en: "Government", hi: "सरकारी" },
  { id: "apprenticeship", en: "Apprenticeship", hi: "अप्रेंटिसशिप" },
  { id: "private", en: "Private job", hi: "प्राइवेट नौकरी" },
  { id: "self", en: "Self-employment", hi: "स्वरोज़गार" }
];

export const CAREERS = [
  // ---------------- Government ----------------
  c({
    id: "ssc-mts", sector: "government",
    title: { en: "Central govt Multi-Tasking Staff (SSC MTS)", hi: "केंद्र सरकार मल्टी-टास्किंग स्टाफ़ (SSC MTS)" },
    summary: { en: "Support roles in central government offices, filled through an SSC exam.", hi: "केंद्र सरकार के दफ़्तरों में सहायक पद, SSC परीक्षा से भरे जाते हैं।" },
    education: FROM_10, requiredSkills: [], optionalSkills: ["basic-computer"],
    goals: ["govt-job"], sources: ["ssc", "empnews"],
    locationNote: { en: "Posting can be anywhere in India or a region.", hi: "तैनाती भारत में या किसी क्षेत्र में कहीं भी हो सकती है।" }
  }),
  c({
    id: "ssc-chsl", sector: "government",
    title: { en: "Clerk / Data Entry Operator (SSC CHSL)", hi: "क्लर्क / डेटा एंट्री ऑपरेटर (SSC CHSL)" },
    summary: { en: "Clerical and data entry posts in central government, filled through an SSC exam.", hi: "केंद्र सरकार में क्लर्क और डेटा एंट्री पद, SSC परीक्षा से।" },
    education: FROM_12, requiredSkills: ["typing", "basic-computer"], optionalSkills: ["excel"],
    goals: ["govt-job"], sources: ["ssc", "empnews"],
    educationNote: { en: "Some posts in this exam may ask for a specific stream — check the notification.", hi: "इस परीक्षा के कुछ पदों में ख़ास विषय माँगा जा सकता है — सूचना देखें।" },
    locationNote: { en: "Posting can be anywhere in India.", hi: "तैनाती भारत में कहीं भी हो सकती है।" }
  }),
  c({
    id: "ssc-cgl", sector: "government",
    title: { en: "Central govt Group B/C officer (SSC CGL)", hi: "केंद्र सरकार ग्रुप B/C अधिकारी (SSC CGL)" },
    summary: { en: "Assistant, inspector and auditor-type posts in central ministries and departments.", hi: "केंद्रीय मंत्रालयों और विभागों में सहायक, निरीक्षक, ऑडिटर जैसे पद।" },
    education: GRAD, requiredSkills: [], optionalSkills: ["basic-computer", "excel", "accounting"],
    goals: ["govt-job"], sources: ["ssc", "empnews"],
    educationNote: { en: "A few posts need a particular degree subject — check the notification.", hi: "कुछ पदों के लिए ख़ास विषय की डिग्री चाहिए — सूचना देखें।" },
    locationNote: { en: "Posting can be anywhere in India.", hi: "तैनाती भारत में कहीं भी हो सकती है।" }
  }),
  c({
    id: "rrb-level1", sector: "government",
    title: { en: "Railway Level-1 posts (track, helper, porter etc.)", hi: "रेलवे लेवल-1 पद (ट्रैक, हेल्पर, पोर्टर आदि)" },
    summary: { en: "Entry-level railway posts recruited by the Railway Recruitment Boards.", hi: "रेलवे भर्ती बोर्ड द्वारा भरे जाने वाले शुरुआती रेलवे पद।" },
    education: ["class10", "iti", "class12", "diploma", "graduation", "postgraduation"], requiredSkills: [], optionalSkills: ["electrician", "welding", "repair"],
    goals: ["govt-job"], sources: ["rrb", "empnews"],
    educationNote: { en: "Usually includes a physical fitness test.", hi: "आमतौर पर शारीरिक फ़िटनेस टेस्ट भी होता है।" },
    locationNote: { en: "Posting within the railway zone you apply for.", hi: "जिस रेलवे ज़ोन के लिए आवेदन करें, वहीं तैनाती।" }
  }),
  c({
    id: "rrb-ntpc", sector: "government",
    title: { en: "Railway non-technical posts (RRB NTPC)", hi: "रेलवे नॉन-टेक्निकल पद (RRB NTPC)" },
    summary: { en: "Clerk, ticket clerk, station and goods-related posts in railways.", hi: "रेलवे में क्लर्क, टिकट क्लर्क, स्टेशन और माल से जुड़े पद।" },
    education: FROM_12, requiredSkills: [], optionalSkills: ["typing", "basic-computer"],
    goals: ["govt-job"], sources: ["rrb", "empnews"],
    educationNote: { en: "Some posts need Class 12, others need graduation.", hi: "कुछ पदों के लिए 12वीं, कुछ के लिए ग्रेजुएशन चाहिए।" },
    locationNote: { en: "Posting within the railway zone you apply for.", hi: "जिस रेलवे ज़ोन के लिए आवेदन करें, वहीं तैनाती।" }
  }),
  c({
    id: "bank-clerk", sector: "government",
    title: { en: "Public sector bank clerk", hi: "सरकारी बैंक क्लर्क" },
    summary: { en: "Customer service and cash work in public sector banks, recruited through IBPS and SBI exams.", hi: "सरकारी बैंकों में ग्राहक सेवा और कैश का काम, IBPS और SBI परीक्षाओं से।" },
    education: GRAD, requiredSkills: ["basic-computer"], optionalSkills: ["customer-service", "accounting", "spoken-english"],
    goals: ["govt-job"], sources: ["ibps", "empnews"],
    educationNote: { en: "Knowing the local language of the state is often required.", hi: "अक्सर राज्य की स्थानीय भाषा आना ज़रूरी होता है।" },
    locationNote: { en: "Usually posted in the state you apply for.", hi: "आमतौर पर उसी राज्य में तैनाती जिसके लिए आवेदन करें।" }
  }),
  c({
    id: "bank-po", sector: "government",
    title: { en: "Public sector bank officer (PO)", hi: "सरकारी बैंक अधिकारी (PO)" },
    summary: { en: "Officer-level banking jobs recruited through IBPS and SBI exams.", hi: "IBPS और SBI परीक्षाओं से अधिकारी स्तर की बैंक नौकरी।" },
    education: GRAD, requiredSkills: ["basic-computer"], optionalSkills: ["spoken-english", "accounting", "excel"],
    goals: ["govt-job"], sources: ["ibps", "empnews"],
    locationNote: { en: "Transfers across India are common.", hi: "पूरे भारत में तबादले आम हैं।" }
  }),
  c({
    id: "india-post-gds", sector: "government",
    title: { en: "India Post Gramin Dak Sevak (GDS)", hi: "भारतीय डाक ग्रामीण डाक सेवक (GDS)" },
    summary: { en: "Post office work in villages. Selection has usually been merit-based from Class 10 marks.", hi: "गाँव के डाकघर में काम। चयन आमतौर पर 10वीं के अंकों की मेरिट से हुआ है।" },
    education: FROM_10, requiredSkills: ["basic-computer"], optionalSkills: ["customer-service"],
    goals: ["govt-job"], sources: ["gds"],
    educationNote: { en: "The local language studied up to Class 10 is usually needed — check the notification.", hi: "आमतौर पर 10वीं तक पढ़ी स्थानीय भाषा ज़रूरी होती है — सूचना देखें।" },
    locationNote: { en: "Works in your local area — good if you want to stay near home.", hi: "अपने ही इलाक़े में काम — घर के पास रहना चाहें तो अच्छा।" }
  }),
  c({
    id: "state-psc", sector: "government",
    title: { en: "State civil services officer (State PSC)", hi: "राज्य सिविल सेवा अधिकारी (राज्य लोक सेवा आयोग)" },
    summary: { en: "Administrative posts in your state, through the State Public Service Commission.", hi: "राज्य लोक सेवा आयोग के ज़रिए आपके राज्य के प्रशासनिक पद।" },
    education: GRAD, requiredSkills: [], optionalSkills: ["spoken-english"],
    goals: ["govt-job"], sources: ["uppsc", "empnews"],
    educationNote: { en: "Each state has its own commission and rules. The UP link is an example.", hi: "हर राज्य का अपना आयोग और नियम हैं। UP का लिंक उदाहरण है।" },
    locationNote: { en: "Posting within your state.", hi: "अपने राज्य में तैनाती।" }
  }),
  c({
    id: "upsc-cse", sector: "government",
    title: { en: "Civil services — IAS, IPS and others (UPSC)", hi: "सिविल सेवा — IAS, IPS आदि (UPSC)" },
    summary: { en: "All-India services through the UPSC Civil Services Examination. Needs long preparation.", hi: "UPSC सिविल सेवा परीक्षा से अखिल भारतीय सेवाएँ। लंबी तैयारी चाहिए।" },
    education: GRAD, requiredSkills: [], optionalSkills: ["spoken-english"],
    goals: ["govt-job", "higher-education"], sources: ["upsc"],
    locationNote: { en: "Posting can be anywhere in India.", hi: "तैनाती भारत में कहीं भी हो सकती है।" }
  }),
  c({
    id: "govt-teacher", sector: "government",
    title: { en: "Government school teacher", hi: "सरकारी स्कूल शिक्षक" },
    summary: { en: "Teaching in government schools. Usually needs a teacher-training qualification and a TET pass.", hi: "सरकारी स्कूलों में पढ़ाना। आमतौर पर शिक्षक-प्रशिक्षण योग्यता और TET पास होना ज़रूरी।" },
    education: null, requiredSkills: ["teaching"], optionalSkills: ["spoken-english"],
    goals: ["govt-job"], sources: ["empnews"],
    preferred: { en: "Teacher training (D.El.Ed or B.Ed) and a TET pass", hi: "शिक्षक प्रशिक्षण (D.El.Ed या B.Ed) और TET पास" },
    educationNote: { en: "Rules depend on the state and the class level you want to teach.", hi: "नियम राज्य और जिस कक्षा को पढ़ाना है, उस पर निर्भर करते हैं।" },
    locationNote: { en: "Usually within your state.", hi: "आमतौर पर अपने राज्य में।" }
  }),
  c({
    id: "state-police", sector: "government",
    title: { en: "State police constable", hi: "राज्य पुलिस कांस्टेबल" },
    summary: { en: "Police constable posts recruited by each state's police recruitment board.", hi: "हर राज्य के पुलिस भर्ती बोर्ड द्वारा कांस्टेबल पद।" },
    education: null, requiredSkills: [], optionalSkills: ["driving"],
    goals: ["govt-job"], sources: ["empnews"],
    educationNote: { en: "Qualification, age and physical standards differ by state.", hi: "योग्यता, उम्र और शारीरिक मानक हर राज्य में अलग हैं।" },
    locationNote: { en: "Posting within your state.", hi: "अपने राज्य में तैनाती।" }
  }),
  c({
    id: "army-agniveer", sector: "government",
    title: { en: "Indian Army — Agniveer and other entries", hi: "भारतीय सेना — अग्निवीर और अन्य भर्ती" },
    summary: { en: "Service in the Indian Army. Includes physical and medical standards.", hi: "भारतीय सेना में सेवा। शारीरिक और मेडिकल मानक भी शामिल।" },
    education: FROM_10, requiredSkills: [], optionalSkills: ["driving", "electrician", "repair"],
    goals: ["govt-job"], sources: ["army"],
    educationNote: { en: "Different entries need different qualifications and marks.", hi: "अलग-अलग भर्ती के लिए अलग योग्यता और अंक चाहिए।" },
    locationNote: { en: "Posting anywhere in India.", hi: "तैनाती भारत में कहीं भी।" }
  }),

  // ---------------- Apprenticeship ----------------
  c({
    id: "trade-apprentice", sector: "apprenticeship",
    title: { en: "Trade apprentice (paid on-the-job training)", hi: "ट्रेड अप्रेंटिस (काम के साथ ट्रेनिंग, स्टाइपेंड सहित)" },
    summary: { en: "Learn a trade inside a company or govt organisation and receive a stipend under the apprenticeship scheme.", hi: "किसी कंपनी या सरकारी संस्था में काम सीखें और अप्रेंटिसशिप योजना में स्टाइपेंड पाएँ।" },
    education: ["class10", "class12", "iti"], requiredSkills: [], optionalSkills: ["electrician", "welding", "plumbing", "repair", "basic-computer"],
    goals: ["apprenticeship", "skill-development", "private-job"], sources: ["naps", "ncs"],
    locationNote: { en: "At the company's location.", hi: "कंपनी की जगह पर।" }
  }),
  c({
    id: "graduate-apprentice", sector: "apprenticeship",
    title: { en: "Graduate / diploma apprentice (NATS)", hi: "ग्रेजुएट / डिप्लोमा अप्रेंटिस (NATS)" },
    summary: { en: "One-year training with a stipend for recent graduates and diploma holders.", hi: "हाल ही के ग्रेजुएट और डिप्लोमा धारकों के लिए स्टाइपेंड के साथ एक साल की ट्रेनिंग।" },
    education: ["diploma", "graduation"], requiredSkills: [], optionalSkills: ["basic-computer", "excel"],
    goals: ["apprenticeship", "internship", "skill-development", "private-job"], sources: ["nats"],
    educationNote: { en: "Usually meant for people who passed recently — check the year limit on the portal.", hi: "आमतौर पर हाल में पास हुए लोगों के लिए — पोर्टल पर साल की सीमा देखें।" },
    locationNote: { en: "At the organisation's location.", hi: "संस्था की जगह पर।" }
  }),

  // ---------------- Private ----------------
  c({
    id: "data-entry", sector: "private",
    title: { en: "Data entry operator", hi: "डेटा एंट्री ऑपरेटर" },
    summary: { en: "Typing and updating records on computers in offices, hospitals, shops and banks.", hi: "दफ़्तर, अस्पताल, दुकान और बैंक में कंप्यूटर पर रिकॉर्ड टाइप और अपडेट करना।" },
    education: FROM_10, requiredSkills: ["typing", "basic-computer"], optionalSkills: ["excel", "ccc", "olevel", "dca"],
    goals: ["private-job", "remote"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Most jobs are in offices; some remote work exists.", hi: "ज़्यादातर काम दफ़्तर में; कुछ घर से भी।" }
  }),
  c({
    id: "accounts-assistant", sector: "private",
    title: { en: "Accounts assistant", hi: "अकाउंट्स असिस्टेंट" },
    summary: { en: "Billing, GST entries and bookkeeping for small and medium businesses.", hi: "छोटे और मध्यम व्यापारों के लिए बिलिंग, GST एंट्री और हिसाब-किताब।" },
    education: FROM_12, requiredSkills: ["tally", "accounting"], optionalSkills: ["excel", "basic-computer"],
    goals: ["private-job"], sources: ["ncs"],
    preferred: { en: "Commerce background (B.Com or Class 12 Commerce)", hi: "कॉमर्स पढ़ाई (B.Com या 12वीं कॉमर्स)" },
    locationNote: { en: "Available in most towns and cities.", hi: "ज़्यादातर क़स्बों और शहरों में।" }
  }),
  c({
    id: "office-assistant", sector: "private",
    title: { en: "Office / admin assistant", hi: "ऑफ़िस / एडमिन असिस्टेंट" },
    summary: { en: "Managing files, records, emails and day-to-day office work.", hi: "फ़ाइल, रिकॉर्ड, ईमेल और रोज़ के दफ़्तरी काम संभालना।" },
    education: FROM_12, requiredSkills: ["basic-computer", "excel"], optionalSkills: ["typing", "spoken-english", "customer-service"],
    goals: ["private-job"], sources: ["ncs"],
    locationNote: { en: "Office-based.", hi: "दफ़्तर में काम।" }
  }),
  c({
    id: "customer-support", sector: "private",
    title: { en: "Customer support executive", hi: "कस्टमर सपोर्ट एग्ज़िक्यूटिव" },
    summary: { en: "Helping customers on phone, chat or email for companies and call centres.", hi: "कंपनियों और कॉल सेंटर के लिए फ़ोन, चैट या ईमेल पर ग्राहकों की मदद।" },
    education: FROM_12, requiredSkills: ["customer-service"], optionalSkills: ["spoken-english", "basic-computer", "typing"],
    goals: ["private-job", "remote"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Mostly in cities; some work-from-home roles.", hi: "ज़्यादातर शहरों में; कुछ घर से काम वाले पद।" }
  }),
  c({
    id: "sales-executive", sector: "private",
    title: { en: "Sales executive", hi: "सेल्स एग्ज़िक्यूटिव" },
    summary: { en: "Selling products or services to shops, companies or customers.", hi: "दुकानों, कंपनियों या ग्राहकों को सामान या सेवाएँ बेचना।" },
    education: FROM_12, requiredSkills: ["sales"], optionalSkills: ["spoken-english", "customer-service", "driving"],
    goals: ["private-job"], sources: ["ncs"],
    locationNote: { en: "Often involves field travel.", hi: "अक्सर फ़ील्ड में घूमना पड़ता है।" }
  }),
  c({
    id: "retail-associate", sector: "private",
    title: { en: "Retail store associate", hi: "रिटेल स्टोर एसोसिएट" },
    summary: { en: "Helping customers, billing and managing stock in shops and malls.", hi: "दुकानों और मॉल में ग्राहकों की मदद, बिलिंग और सामान संभालना।" },
    education: FROM_10, requiredSkills: ["customer-service"], optionalSkills: ["sales", "basic-computer"],
    goals: ["private-job"], sources: ["ncs"],
    locationNote: { en: "Available in most towns.", hi: "ज़्यादातर क़स्बों में।" }
  }),
  c({
    id: "electrician", sector: "private",
    title: { en: "Electrician", hi: "इलेक्ट्रीशियन" },
    summary: { en: "Wiring, installation and repair in homes, buildings and factories.", hi: "घरों, इमारतों और फ़ैक्ट्रियों में वायरिंग, फ़िटिंग और मरम्मत।" },
    education: "any", requiredSkills: ["electrician"], optionalSkills: ["repair"],
    goals: ["private-job", "business", "apprenticeship"], sources: ["ncs"],
    preferred: { en: "ITI Electrician trade; a licence may be needed for some work", hi: "ITI इलेक्ट्रीशियन ट्रेड; कुछ कामों के लिए लाइसेंस ज़रूरी हो सकता है" },
    locationNote: { en: "Work is local and on site.", hi: "काम स्थानीय और साइट पर।" }
  }),
  c({
    id: "plumber", sector: "private",
    title: { en: "Plumber", hi: "प्लंबर" },
    summary: { en: "Installing and repairing water pipes and fittings.", hi: "पानी की पाइप और फ़िटिंग लगाना और ठीक करना।" },
    education: "any", requiredSkills: ["plumbing"], optionalSkills: ["repair"],
    goals: ["private-job", "business"], sources: ["ncs"],
    preferred: { en: "ITI Plumber trade or a short skill course", hi: "ITI प्लंबर ट्रेड या छोटा स्किल कोर्स" },
    locationNote: { en: "Work is local and on site.", hi: "काम स्थानीय और साइट पर।" }
  }),
  c({
    id: "welder", sector: "private",
    title: { en: "Welder / fabricator", hi: "वेल्डर / फ़ैब्रिकेटर" },
    summary: { en: "Joining and shaping metal in workshops, factories and construction.", hi: "वर्कशॉप, फ़ैक्ट्री और निर्माण में धातु जोड़ना और आकार देना।" },
    education: "any", requiredSkills: ["welding"], optionalSkills: ["repair"],
    goals: ["private-job", "business", "apprenticeship"], sources: ["ncs"],
    preferred: { en: "ITI Welder trade", hi: "ITI वेल्डर ट्रेड" },
    locationNote: { en: "Workshop or site based; industrial areas have more work.", hi: "वर्कशॉप या साइट पर; औद्योगिक इलाक़ों में ज़्यादा काम।" }
  }),
  c({
    id: "driver", sector: "private",
    title: { en: "Driver (commercial / company)", hi: "ड्राइवर (कमर्शियल / कंपनी)" },
    summary: { en: "Driving for companies, transport services, delivery or cab platforms.", hi: "कंपनियों, ट्रांसपोर्ट, डिलीवरी या कैब के लिए गाड़ी चलाना।" },
    education: "any", requiredSkills: ["driving"], optionalSkills: ["repair"],
    goals: ["private-job", "business"], sources: ["ncs"],
    educationNote: { en: "A valid driving licence of the right type is required by law.", hi: "क़ानूनन सही प्रकार का वैध ड्राइविंग लाइसेंस ज़रूरी है।" },
    locationNote: { en: "Local or long-distance, depending on the job.", hi: "काम के हिसाब से स्थानीय या लंबी दूरी।" }
  }),
  c({
    id: "repair-technician", sector: "private",
    title: { en: "Mobile / appliance repair technician", hi: "मोबाइल / उपकरण मरम्मत तकनीशियन" },
    summary: { en: "Fixing phones, home appliances or vehicles in a shop or service centre.", hi: "दुकान या सर्विस सेंटर में फ़ोन, घरेलू उपकरण या गाड़ियाँ ठीक करना।" },
    education: "any", requiredSkills: ["repair"], optionalSkills: ["electrician", "customer-service"],
    goals: ["private-job", "business"], sources: ["ncs"],
    locationNote: { en: "Local work; can become your own shop.", hi: "स्थानीय काम; आगे चलकर अपनी दुकान बन सकती है।" }
  }),
  c({
    id: "web-developer", sector: "private",
    title: { en: "Junior web developer", hi: "जूनियर वेब डेवलपर" },
    summary: { en: "Building and fixing websites. A strong project portfolio matters a lot.", hi: "वेबसाइट बनाना और ठीक करना। अच्छे प्रोजेक्ट का पोर्टफ़ोलियो बहुत मायने रखता है।" },
    education: ["class12", "diploma", "graduation", "postgraduation", "professional"], requiredSkills: ["webdev", "programming"], optionalSkills: ["graphic-design", "spoken-english"],
    goals: ["private-job", "remote", "internship"], remoteFriendly: true, sources: ["ncs"],
    preferred: { en: "Many employers prefer a degree or diploma in computers", hi: "कई कंपनियाँ कंप्यूटर में डिग्री या डिप्लोमा पसंद करती हैं" },
    locationNote: { en: "Mostly in cities; many remote roles.", hi: "ज़्यादातर शहरों में; कई घर से काम वाले पद।" }
  }),
  c({
    id: "software-developer", sector: "private",
    title: { en: "Software developer", hi: "सॉफ़्टवेयर डेवलपर" },
    summary: { en: "Writing and testing software for companies.", hi: "कंपनियों के लिए सॉफ़्टवेयर लिखना और टेस्ट करना।" },
    education: ["diploma", "graduation", "postgraduation", "professional"], requiredSkills: ["programming"], optionalSkills: ["webdev", "data-analytics", "spoken-english"],
    goals: ["private-job", "remote", "internship"], remoteFriendly: true, sources: ["ncs"],
    preferred: { en: "Degree in computer science, IT or engineering (BCA, B.Tech, MCA)", hi: "कंप्यूटर साइंस, IT या इंजीनियरिंग में डिग्री (BCA, B.Tech, MCA)" },
    locationNote: { en: "Mostly in big cities; many remote roles.", hi: "ज़्यादातर बड़े शहरों में; कई घर से काम वाले पद।" }
  }),
  c({
    id: "data-analyst", sector: "private",
    title: { en: "Junior data analyst", hi: "जूनियर डेटा एनालिस्ट" },
    summary: { en: "Cleaning data and making reports and charts that help businesses decide.", hi: "डेटा साफ़ करना और ऐसी रिपोर्ट व चार्ट बनाना जिनसे व्यापार फ़ैसले ले सकें।" },
    education: GRAD, requiredSkills: ["excel", "data-analytics"], optionalSkills: ["programming", "spoken-english"],
    goals: ["private-job", "remote", "career-change"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Mostly in cities; some remote roles.", hi: "ज़्यादातर शहरों में; कुछ घर से काम वाले पद।" }
  }),
  c({
    id: "graphic-designer", sector: "private",
    title: { en: "Graphic designer", hi: "ग्राफ़िक डिज़ाइनर" },
    summary: { en: "Designing posters, social media posts, logos and packaging.", hi: "पोस्टर, सोशल मीडिया पोस्ट, लोगो और पैकेजिंग डिज़ाइन करना।" },
    education: "any", requiredSkills: ["graphic-design"], optionalSkills: ["digital-marketing", "basic-computer"],
    goals: ["private-job", "remote", "business"], remoteFriendly: true, sources: ["ncs"],
    preferred: { en: "A portfolio of your designs matters more than a degree", hi: "डिग्री से ज़्यादा आपके डिज़ाइनों का पोर्टफ़ोलियो मायने रखता है" },
    locationNote: { en: "Can be done remotely or as freelance work.", hi: "घर से या फ़्रीलांस भी कर सकते हैं।" }
  }),
  c({
    id: "digital-marketer", sector: "private",
    title: { en: "Digital marketing executive", hi: "डिजिटल मार्केटिंग एग्ज़िक्यूटिव" },
    summary: { en: "Running social media, ads and online promotion for businesses.", hi: "व्यापारों के लिए सोशल मीडिया, विज्ञापन और ऑनलाइन प्रचार चलाना।" },
    education: FROM_12, requiredSkills: ["digital-marketing"], optionalSkills: ["graphic-design", "spoken-english", "sales"],
    goals: ["private-job", "remote", "business", "career-change"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Often remote or freelance.", hi: "अक्सर घर से या फ़्रीलांस।" }
  }),
  c({
    id: "tutor", sector: "private",
    title: { en: "Private / online tutor", hi: "प्राइवेट / ऑनलाइन ट्यूटर" },
    summary: { en: "Teaching school students at home, in coaching centres or online.", hi: "घर पर, कोचिंग सेंटर में या ऑनलाइन स्कूल के बच्चों को पढ़ाना।" },
    education: FROM_12, requiredSkills: ["teaching"], optionalSkills: ["spoken-english", "basic-computer"],
    goals: ["private-job", "remote", "business"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Can be done locally or online.", hi: "स्थानीय या ऑनलाइन, दोनों तरह।" }
  }),

  // ---------------- Self-employment ----------------
  c({
    id: "tailoring-business", sector: "self",
    title: { en: "Tailoring / boutique business", hi: "सिलाई / बुटीक का काम" },
    summary: { en: "Running your own tailoring, alteration or boutique work from home or a shop.", hi: "घर या दुकान से अपना सिलाई, ऑल्टरेशन या बुटीक का काम।" },
    education: "any", requiredSkills: ["tailoring"], optionalSkills: ["sales", "digital-marketing"],
    goals: ["business", "skill-development"], sources: ["myscheme"],
    locationNote: { en: "Can start from home in your own area.", hi: "अपने इलाक़े में घर से शुरू कर सकते हैं।" }
  }),
  c({
    id: "food-business", sector: "self",
    title: { en: "Small food business / tiffin service", hi: "छोटा खाने का व्यवसाय / टिफ़िन सेवा" },
    summary: { en: "Cooking and selling food, snacks or tiffins locally.", hi: "स्थानीय रूप से खाना, नाश्ता या टिफ़िन बनाकर बेचना।" },
    education: "any", requiredSkills: ["cooking"], optionalSkills: ["sales", "digital-marketing"],
    goals: ["business"], sources: ["myscheme"],
    educationNote: { en: "Food businesses need food-safety registration — check local rules.", hi: "खाने के व्यवसाय के लिए फ़ूड-सेफ़्टी पंजीकरण ज़रूरी है — स्थानीय नियम देखें।" },
    locationNote: { en: "Local.", hi: "स्थानीय।" }
  }),
  c({
    id: "agri-entrepreneur", sector: "self",
    title: { en: "Farm-based business (dairy, nursery, organic produce)", hi: "खेती से जुड़ा व्यवसाय (डेयरी, नर्सरी, जैविक उत्पाद)" },
    summary: { en: "Adding income from farming-related work such as dairy, poultry, nursery or selling produce.", hi: "डेयरी, मुर्ग़ी पालन, नर्सरी या उपज बेचने जैसे खेती से जुड़े काम से आमदनी बढ़ाना।" },
    education: "any", requiredSkills: ["agriculture"], optionalSkills: ["sales", "accounting"],
    goals: ["business", "skill-development"], sources: ["myscheme"],
    locationNote: { en: "Rural and semi-urban areas.", hi: "गाँव और क़स्बे।" }
  }),
  c({
    id: "computer-centre", sector: "self",
    title: { en: "Computer / CSC-style service centre", hi: "कंप्यूटर / जन सेवा जैसा सर्विस सेंटर" },
    summary: { en: "Offering typing, printing, online form filling and computer services in your area.", hi: "अपने इलाक़े में टाइपिंग, प्रिंटिंग, ऑनलाइन फ़ॉर्म भरने और कंप्यूटर सेवाएँ देना।" },
    education: FROM_10, requiredSkills: ["basic-computer", "typing"], optionalSkills: ["ccc", "olevel", "dca", "excel", "customer-service"],
    goals: ["business"], sources: ["myscheme"],
    educationNote: { en: "Official Common Service Centres have their own registration rules.", hi: "आधिकारिक जन सेवा केंद्र (CSC) के अपने पंजीकरण नियम हैं।" },
    locationNote: { en: "Works well in towns and villages.", hi: "क़स्बों और गाँवों में अच्छा चलता है।" }
  })
];
