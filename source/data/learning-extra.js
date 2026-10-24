// Extra learning options for the "Courses & Skill Development" page (Private Job Finder).
// They are added to the existing list in data/courses.js. Providers with a VERIFIED
// skill offering live in data/courses.js (so the Courses page and this page agree);
// this file mainly holds general portals and practical programmes.
//
// HONESTY RULES
// - cost is filled only from the provider's own page on `checked`:
//     "free" = the provider says it is free · "fee" = a fee applies · null = not verified
//   We never show prices (they change and differ by course).
// - cert: "recognised" = a government / statutory certificate;
//         "provider"   = a certificate from the company or platform (not a government qualification);
//         null         = no certificate claim checked.
// - skills = ids from data/pj-options.js (PJ_SKILLS), ONLY where the provider's own
//   page (checkedFrom) shows a course for that skill. Platforms whose pages we could
//   not read in detail have skills: [] — they are shown as "general places to
//   search", never as a verified match for a skill.
// - No ratings, reviews or placement numbers — we could not verify them.

export const EXTRA_CHECKED = "2026-10-23";
const tx = (en, hi) => ({ en, hi });
const x = (o) => ({ beginner: false, govt: false, practical: false, cert: null, cost: null, costNote: null, eduMax: null, checked: EXTRA_CHECKED, ...o });

export const EXTRA_LEARNING = [
  x({
    id: "skill-india-digital", kind: "govt", mode: "both", govt: true, beginner: true,
    title: tx("Skill India Digital Hub — courses and training centres", "स्किल इंडिया डिजिटल हब — कोर्स और ट्रेनिंग सेंटर"),
    provider: tx("Ministry of Skill Development & Entrepreneurship", "कौशल विकास और उद्यमिता मंत्रालय"),
    url: "https://www.skillindiadigital.gov.in/",
    skills: [],
    about: tx("Government portal listing online courses and nearby training centres (including PMKVY). Costs and certificates differ by course — check each listing.", "सरकारी पोर्टल, जिस पर ऑनलाइन कोर्स और पास के ट्रेनिंग सेंटर (PMKVY सहित) मिलते हैं। हर कोर्स की फ़ीस और प्रमाणपत्र अलग हैं — हर लिस्टिंग में देखें।"),
    language: tx("Several Indian languages", "कई भारतीय भाषाएँ"),
    checkedFrom: tx("Official portal (address)", "आधिकारिक पोर्टल (पता)")
  }),
  x({
    id: "jss", kind: "offline", mode: "offline", govt: true, beginner: true, eduMax: 3,
    title: tx("Jan Shikshan Sansthan (JSS) — vocational training", "जन शिक्षण संस्थान (JSS) — व्यावसायिक प्रशिक्षण"),
    provider: tx("Ministry of Skill Development & Entrepreneurship (through NGOs)", "कौशल विकास और उद्यमिता मंत्रालय (NGO के ज़रिए)"),
    url: "https://skilldevelopment.gov.in/schemes-initiatives/Other-Schemes-and-Initiatives/Jan-Shikshan-Sansthan-JSS",
    skills: [],
    about: tx("Skill training in districts for non-literates, neo-literates and school dropouts (up to Class 12), with a focus on rural areas, women and disadvantaged groups. Fees are not stated on the ministry page — ask your local JSS.", "ज़िलों में निरक्षर, नव-साक्षर और स्कूल छोड़ चुके (12वीं तक) लोगों के लिए हुनर प्रशिक्षण; ग्रामीण क्षेत्र, महिलाओं और वंचित वर्गों पर ज़ोर। मंत्रालय के पेज पर फ़ीस नहीं लिखी — अपने स्थानीय JSS से पूछें।"),
    language: tx("Local language", "स्थानीय भाषा"),
    checkedFrom: tx("Ministry of Skill Development scheme page", "कौशल विकास मंत्रालय का योजना पेज")
  }),
  x({
    id: "apprenticeship-india", kind: "practical", mode: "offline", govt: true, practical: true, beginner: true,
    title: tx("Apprenticeship (earn while you learn)", "अप्रेंटिसशिप (सीखते हुए कमाएँ)"),
    provider: tx("Apprenticeship India portal (Government of India)", "अप्रेंटिसशिप इंडिया पोर्टल (भारत सरकार)"),
    url: "https://www.apprenticeshipindia.gov.in/",
    skills: [],
    about: tx("On-the-job training at real companies with a monthly stipend, under the Apprentices Act. Openings and stipends are listed on the portal.", "अप्रेंटिस अधिनियम के तहत असली कंपनियों में काम पर ट्रेनिंग, हर महीने स्टाइपेंड के साथ। अवसर और स्टाइपेंड पोर्टल पर दिए होते हैं।"),
    cert: "recognised", language: tx("Depends on the employer", "नियोक्ता पर निर्भर"),
    checkedFrom: tx("Official portal (address)", "आधिकारिक पोर्टल (पता)")
  }),
  x({
    id: "nats", kind: "practical", mode: "offline", govt: true, practical: true,
    title: tx("NATS apprenticeship for graduates and diploma holders", "ग्रेजुएट और डिप्लोमा वालों के लिए NATS अप्रेंटिसशिप"),
    provider: tx("Ministry of Education (Boards of Apprenticeship Training)", "शिक्षा मंत्रालय (बोर्ड्स ऑफ़ अप्रेंटिसशिप ट्रेनिंग)"),
    url: "https://nats.education.gov.in/",
    skills: [],
    about: tx("Apprenticeship training through the NATS 2.0 portal. The government pays a share of the stipend by DBT; e-KYC is required.", "NATS 2.0 पोर्टल से अप्रेंटिसशिप ट्रेनिंग। स्टाइपेंड का सरकारी हिस्सा DBT से मिलता है; e-KYC ज़रूरी है।"),
    cert: "recognised", language: tx("Depends on the employer", "नियोक्ता पर निर्भर"),
    checkedFrom: tx("NATS portal notice", "NATS पोर्टल की सूचना")
  }),
  x({
    id: "microsoft-learn", kind: "free-online", mode: "online",
    title: tx("Microsoft Learn — Office, data and cloud skills", "माइक्रोसॉफ़्ट लर्न — ऑफ़िस, डेटा और क्लाउड हुनर"),
    provider: tx("Microsoft (private company)", "माइक्रोसॉफ़्ट (निजी कंपनी)"),
    url: "https://learn.microsoft.com/en-us/training/",
    skills: [],
    about: tx("Self-paced modules and learning paths. The page we read did not state costs — check before registering for any instructor-led course or exam.", "अपनी गति से पढ़ने वाले मॉड्यूल। हमने जो पेज पढ़ा उसमें ख़र्च नहीं लिखा — किसी इंस्ट्रक्टर कोर्स या परीक्षा से पहले जाँच लें।"),
    cert: "provider", language: tx("English and other languages", "अंग्रेज़ी और अन्य भाषाएँ"),
    checkedFrom: tx("Microsoft Learn training page", "माइक्रोसॉफ़्ट लर्न ट्रेनिंग पेज")
  }),
  x({
    id: "coursera", kind: "paid-online", mode: "online", cost: "fee",
    costNote: tx("A paid platform. Prices and any free or financial-aid options are shown on each course page — not checked by us.", "फ़ीस वाला प्लेटफ़ॉर्म। क़ीमत और कोई मुफ़्त या आर्थिक-सहायता विकल्प हर कोर्स पेज पर दिखता है — हमने नहीं जाँचा।"),
    title: tx("Coursera — university and company courses", "कोर्सेरा — विश्वविद्यालय और कंपनियों के कोर्स"),
    provider: tx("Coursera (private platform)", "कोर्सेरा (निजी प्लेटफ़ॉर्म)"),
    url: "https://www.coursera.org/",
    skills: [],
    about: tx("Online courses and professional certificates from universities and companies.", "विश्वविद्यालयों और कंपनियों के ऑनलाइन कोर्स और प्रोफ़ेशनल सर्टिफ़िकेट।"),
    cert: "provider", language: tx("Mostly English", "ज़्यादातर अंग्रेज़ी"),
    checkedFrom: tx("Platform address only", "सिर्फ़ प्लेटफ़ॉर्म का पता")
  }),
  x({
    id: "udemy", kind: "paid-online", mode: "online", cost: "fee",
    costNote: tx("A paid marketplace of courses by independent instructors. Quality varies — read the syllabus before paying.", "स्वतंत्र प्रशिक्षकों के फ़ीस वाले कोर्स का बाज़ार। गुणवत्ता अलग-अलग होती है — पैसे देने से पहले सिलेबस पढ़ें।"),
    title: tx("Udemy — recorded practical courses", "यूडेमी — रिकॉर्डेड व्यावहारिक कोर्स"),
    provider: tx("Udemy (private platform)", "यूडेमी (निजी प्लेटफ़ॉर्म)"),
    url: "https://www.udemy.com/",
    skills: [],
    about: tx("Recorded courses on many job skills, including some in Hindi.", "कई नौकरी वाले हुनर पर रिकॉर्डेड कोर्स, कुछ हिंदी में भी।"),
    cert: "provider", language: tx("English, some Hindi", "अंग्रेज़ी, कुछ हिंदी"),
    checkedFrom: tx("Platform address only", "सिर्फ़ प्लेटफ़ॉर्म का पता")
  }),
  x({
    id: "ncs-counselling", kind: "govt", mode: "both", govt: true, beginner: true, cost: "free",
    costNote: tx("NCS states it charges no fee at any stage of registration, job application or interview processing.", "NCS के अनुसार पंजीकरण, आवेदन या इंटरव्यू के किसी चरण में फ़ीस नहीं ली जाती।"),
    title: tx("National Career Service — counselling, job fairs and private jobs", "नेशनल करियर सर्विस — काउंसलिंग, रोज़गार मेले और प्राइवेट नौकरियाँ"),
    provider: tx("Ministry of Labour & Employment", "श्रम और रोज़गार मंत्रालय"),
    url: "https://www.ncs.gov.in/",
    skills: [],
    about: tx("Free career counselling, job fairs, a resume builder and private job listings.", "मुफ़्त करियर काउंसलिंग, रोज़गार मेले, रिज़्यूमे बिल्डर और प्राइवेट नौकरियाँ।"),
    language: tx("English and Hindi", "अंग्रेज़ी और हिंदी"),
    checkedFrom: tx("NCS home page and FAQ", "NCS होम पेज और FAQ")
  })
];
