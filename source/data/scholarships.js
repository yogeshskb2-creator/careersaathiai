// Scholarship Finder records — same format as data/schemes.js.
//
// RULES
// - Facts come from official or public pages read on `checked` (named in `checkedFrom`).
// - Amounts and limits are shown "as published". Scholarship rules change almost every
//   year, so the site always asks students to confirm on the official portal.
// - `hints` only decide "worth a look" — never "eligible". Family income cannot be
//   checked (we never ask for it), so it is always listed as a condition to confirm.

export const SCHOLARSHIP_CATEGORIES = [
  { id: "school", en: "School students", hi: "स्कूल के छात्र" },
  { id: "college", en: "College & university", hi: "कॉलेज और विश्वविद्यालय" },
  { id: "girls", en: "For girls", hi: "लड़कियों के लिए" },
  { id: "pwd", en: "Students with disability", hi: "दिव्यांग छात्र" },
  { id: "social", en: "SC / ST / OBC students", hi: "SC / ST / OBC छात्र" }
];

const CHECKED = "2026-10-22";
const tx = (en, hi) => ({ en, hi });
const NSP = "https://scholarships.gov.in/";

export const SCHOLARSHIPS = [
  {
    id: "nmmss", category: "school",
    name: tx("National Means-cum-Merit Scholarship (NMMSS)", "राष्ट्रीय साधन-सह-योग्यता छात्रवृत्ति (NMMSS)"),
    ministry: tx("Ministry of Education (centrally sponsored); selection exam by State Governments", "शिक्षा मंत्रालय (केंद्र प्रायोजित); चयन परीक्षा राज्य सरकारें लेती हैं"),
    purpose: tx("Helps bright students from low-income families continue studying from Class 9 to Class 12.", "कम आय वाले परिवारों के होनहार छात्रों को 9वीं से 12वीं तक पढ़ाई जारी रखने में मदद।"),
    audience: tx("Class 8 students in government, government-aided or local-body schools.", "सरकारी, सरकारी सहायता प्राप्त या स्थानीय निकाय स्कूलों के 8वीं के छात्र।"),
    eligibility: [
      tx("Parents' income from all sources not more than ₹3.5 lakh per year.", "माता-पिता की कुल आय ₹3.5 लाख प्रति वर्ष से ज़्यादा नहीं।"),
      tx("At least 55% marks (or equivalent grade) in Class 8; 5% relaxation for SC/ST.", "8वीं में कम से कम 55% अंक (या बराबर ग्रेड); SC/ST को 5% छूट।"),
      tx("Must study in a government, government-aided or local-body school. Kendriya Vidyalaya, Navodaya Vidyalaya, residential state schools and private schools are not covered.", "सरकारी, सरकारी सहायता प्राप्त या स्थानीय निकाय स्कूल में पढ़ना ज़रूरी। केंद्रीय विद्यालय, नवोदय विद्यालय, आवासीय राज्य स्कूल और प्राइवेट स्कूल शामिल नहीं।"),
      tx("Selection through an exam held by your State Government (usually in Class 8).", "राज्य सरकार की परीक्षा से चयन (आमतौर पर 8वीं में)।")
    ],
    benefits: [
      tx("₹12,000 per year (₹1,000 per month) for Classes 9 to 12, up to four years.", "9वीं से 12वीं तक ₹12,000 प्रति वर्ष (₹1,000 प्रति माह), अधिकतम चार साल।")
    ],
    howToApply: [
      tx("Ask your school about the State's NMMS selection exam and its dates.", "अपने स्कूल से राज्य की NMMS चयन परीक्षा और उसकी तारीख़ों के बारे में पूछें।"),
      tx("Selected students apply and renew on the National Scholarship Portal (NSP).", "चुने गए छात्र राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर आवेदन और नवीनीकरण करते हैं।")
    ],
    officialUrl: NSP,
    checkedFrom: tx("All India Radio news (1 Sept 2026) and Vikaspedia scheme page", "ऑल इंडिया रेडियो समाचार (1 सितंबर 2026) और विकासपीडिया योजना पेज"),
    checked: CHECKED, note: null,
    hints: { employment: ["student"], education: ["below10", "class10"] }
  },
  {
    id: "csss", category: "college",
    name: tx("Central Sector Scheme of Scholarships for College and University Students (PM-USP CSSS)", "कॉलेज और विश्वविद्यालय छात्रों के लिए केंद्रीय क्षेत्र छात्रवृत्ति योजना (PM-USP CSSS)"),
    ministry: tx("Ministry of Education, Government of India", "शिक्षा मंत्रालय, भारत सरकार"),
    purpose: tx("Supports meritorious students from low-income families in regular college and university degree courses.", "कम आय वाले परिवारों के मेधावी छात्रों को कॉलेज/विश्वविद्यालय की रेगुलर डिग्री में मदद।"),
    audience: tx("Students who scored above the 80th percentile of their stream in Class 12 and join a regular degree course.", "जिन्होंने 12वीं में अपनी स्ट्रीम में 80वें पर्सेंटाइल से ऊपर अंक पाए और रेगुलर डिग्री में दाख़िला लिया।"),
    eligibility: [
      tx("Above the 80th percentile of successful candidates in your stream in Class 12 (the board publishes the cut-off).", "12वीं में आपकी स्ट्रीम के सफल उम्मीदवारों में 80वें पर्सेंटाइल से ऊपर (कट-ऑफ़ बोर्ड बताता है)।"),
      tx("Family income up to ₹4.5 lakh per year.", "परिवार की आय ₹4.5 लाख प्रति वर्ष तक।"),
      tx("Regular degree course only — not correspondence, distance or diploma courses.", "सिर्फ़ रेगुलर डिग्री कोर्स — पत्राचार, दूरस्थ या डिप्लोमा कोर्स नहीं।"),
      tx("You cannot take another scholarship or fee-waiver scheme at the same time.", "साथ में कोई दूसरी छात्रवृत्ति या फ़ीस माफ़ी योजना नहीं ले सकते।"),
      tx("Renewal needs at least 50% marks and 75% attendance.", "नवीनीकरण के लिए कम से कम 50% अंक और 75% उपस्थिति ज़रूरी।")
    ],
    benefits: [
      tx("Graduation: ₹12,000 per year for the first three years.", "ग्रेजुएशन: पहले तीन साल ₹12,000 प्रति वर्ष।"),
      tx("Post-graduation: ₹20,000 per year (also the 4th and 5th years of longer courses).", "पोस्ट-ग्रेजुएशन: ₹20,000 प्रति वर्ष (लंबे कोर्स के चौथे और पाँचवें साल में भी)।")
    ],
    howToApply: [
      tx("Apply online on the National Scholarship Portal (NSP) and upload the documents asked for.", "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP) पर ऑनलाइन आवेदन करें और माँगे गए दस्तावेज़ अपलोड करें।"),
      tx("Ask your college's Institute Nodal Officer to verify your application in time.", "अपने कॉलेज के इंस्टीट्यूट नोडल ऑफ़िसर से समय पर आवेदन सत्यापित कराएँ।")
    ],
    officialUrl: NSP,
    checkedFrom: tx("Government of Goa notice (4 Sept 2025) and a news summary of the guidelines (2023)", "गोवा सरकार की सूचना (4 सितंबर 2025) और दिशानिर्देशों का समाचार सारांश (2023)"),
    checked: CHECKED,
    note: tx("Amounts and limits are from published summaries — confirm the current guidelines on NSP.", "राशि और सीमाएँ प्रकाशित सारांश से हैं — NSP पर मौजूदा दिशानिर्देश पक्का करें।"),
    hints: { employment: ["student"], education: ["class12"], goals: ["higher-education"] }
  },
  {
    id: "aicte-pragati", category: "girls",
    name: tx("AICTE Pragati Scholarship for Girls", "AICTE प्रगति छात्रवृत्ति (लड़कियों के लिए)"),
    ministry: tx("All India Council for Technical Education (AICTE)", "अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE)"),
    purpose: tx("Encourages girls to study technical degree and diploma courses.", "लड़कियों को तकनीकी डिग्री और डिप्लोमा पढ़ने के लिए प्रोत्साहन।"),
    audience: tx("Girls admitted to the first year of a degree or diploma course in an AICTE-approved institution.", "AICTE से मान्य संस्थान में डिग्री या डिप्लोमा के पहले साल में दाख़िला लेने वाली लड़कियाँ।"),
    eligibility: [
      tx("Admitted to the 1st year of a degree or diploma course through a centralised admission process.", "केंद्रीकृत दाख़िला प्रक्रिया से डिग्री या डिप्लोमा के पहले साल में दाख़िला।"),
      tx("Family income not more than ₹8 lakh per year.", "परिवार की आय ₹8 लाख प्रति वर्ष से ज़्यादा नहीं।"),
      tx("Up to two girls per family.", "एक परिवार की अधिकतम दो लड़कियाँ।")
    ],
    benefits: [
      tx("Tuition fee up to ₹30,000 (or actual fee, whichever is less), plus ₹2,000 per month for 10 months.", "₹30,000 तक ट्यूशन फ़ीस (या असली फ़ीस, जो कम हो), साथ में 10 महीने ₹2,000 प्रति माह।"),
      tx("4,000 scholarships a year (2,000 degree, 2,000 diploma), as published.", "हर साल 4,000 छात्रवृत्तियाँ (2,000 डिग्री, 2,000 डिप्लोमा), जैसा प्रकाशित है।")
    ],
    howToApply: [
      tx("Check the current year's notice and application route on AICTE's website or the National Scholarship Portal.", "इस साल की सूचना और आवेदन का तरीक़ा AICTE की वेबसाइट या राष्ट्रीय छात्रवृत्ति पोर्टल पर देखें।")
    ],
    officialUrl: "https://www.aicte.gov.in/",
    checkedFrom: tx("AICTE scheme document (undated)", "AICTE योजना दस्तावेज़ (तारीख़ नहीं)"),
    checked: CHECKED,
    note: tx("The AICTE document we read has no date. Confirm the current amount and process before applying.", "हमने जो AICTE दस्तावेज़ पढ़ा उसमें तारीख़ नहीं है। आवेदन से पहले मौजूदा राशि और प्रक्रिया पक्की करें।"),
    hints: { genderOrCategory: { gender: ["female"] }, education: ["class10", "class12"] }
  },
  {
    id: "aicte-saksham", category: "pwd",
    name: tx("AICTE Saksham Scholarship for Students with Disability", "AICTE सक्षम छात्रवृत्ति (दिव्यांग छात्रों के लिए)"),
    ministry: tx("All India Council for Technical Education (AICTE)", "अखिल भारतीय तकनीकी शिक्षा परिषद (AICTE)"),
    purpose: tx("Supports students with disability in technical degree and diploma courses.", "तकनीकी डिग्री और डिप्लोमा में दिव्यांग छात्रों की मदद।"),
    audience: tx("Students with at least 40% disability admitted to the first year of a degree or diploma course.", "कम से कम 40% दिव्यांगता वाले छात्र, जिन्होंने डिग्री या डिप्लोमा के पहले साल में दाख़िला लिया हो।"),
    eligibility: [
      tx("Disability of not less than 40%.", "दिव्यांगता 40% से कम नहीं।"),
      tx("Admitted to the 1st year of a degree or diploma course in an AICTE-approved institution through centralised admission.", "केंद्रीकृत दाख़िले से AICTE मान्य संस्थान में डिग्री या डिप्लोमा के पहले साल में दाख़िला।"),
      tx("Family income not more than ₹8 lakh per year.", "परिवार की आय ₹8 लाख प्रति वर्ष से ज़्यादा नहीं।"),
      tx("Must not be getting another State or Central Government scholarship.", "कोई दूसरी राज्य या केंद्र सरकार की छात्रवृत्ति नहीं मिल रही हो।")
    ],
    benefits: [
      tx("Tuition fee up to ₹30,000 (or actual fee, whichever is less), plus ₹2,000 per month for 10 months.", "₹30,000 तक ट्यूशन फ़ीस (या असली फ़ीस, जो कम हो), साथ में 10 महीने ₹2,000 प्रति माह।"),
      tx("If your fee is already waived, ₹30,000 can be used for books, equipment or a laptop, as published.", "अगर फ़ीस पहले से माफ़ है, तो ₹30,000 किताबों, उपकरण या लैपटॉप के लिए, जैसा प्रकाशित है।")
    ],
    howToApply: [
      tx("Check the current year's notice and application route on AICTE's website or the National Scholarship Portal.", "इस साल की सूचना और आवेदन का तरीक़ा AICTE की वेबसाइट या राष्ट्रीय छात्रवृत्ति पोर्टल पर देखें।")
    ],
    officialUrl: "https://www.aicte.gov.in/",
    checkedFrom: tx("Vikaspedia scheme page (Government of India portal)", "विकासपीडिया योजना पेज (भारत सरकार का पोर्टल)"),
    checked: CHECKED,
    note: tx("Confirm the current amount, number of scholarships and application process on AICTE's website.", "मौजूदा राशि, छात्रवृत्तियों की संख्या और आवेदन प्रक्रिया AICTE की वेबसाइट पर पक्की करें।"),
    hints: { pwd: true, education: ["class10", "class12"] }
  },
  {
    id: "post-matric-sc", category: "social",
    name: tx("Post-Matric Scholarship for Scheduled Caste Students", "अनुसूचित जाति छात्रों के लिए पोस्ट-मैट्रिक छात्रवृत्ति"),
    ministry: tx("Ministry of Social Justice and Empowerment, run through State Governments", "सामाजिक न्याय और अधिकारिता मंत्रालय, राज्य सरकारों के ज़रिए"),
    purpose: tx("Helps SC students study after Class 10 — Class 11 and 12, ITI, diploma, graduation and above.", "SC छात्रों को 10वीं के बाद की पढ़ाई में मदद — 11वीं-12वीं, ITI, डिप्लोमा, ग्रेजुएशन और आगे।"),
    audience: tx("Scheduled Caste students in post-matric courses.", "पोस्ट-मैट्रिक कोर्स में पढ़ रहे अनुसूचित जाति के छात्र।"),
    eligibility: [
      tx("Must belong to a Scheduled Caste.", "अनुसूचित जाति से होना ज़रूरी।"),
      tx("Parents' annual income below ₹2.5 lakh, as published (the Government has said it is working on raising this limit — check the current figure).", "माता-पिता की सालाना आय ₹2.5 लाख से कम, जैसा प्रकाशित है (सरकार ने यह सीमा बढ़ाने पर काम की बात कही है — मौजूदा आँकड़ा देखें)।"),
      tx("Studying in a recognised post-matric course; your State may add its own rules (for example domicile).", "मान्य पोस्ट-मैट्रिक कोर्स में पढ़ाई; आपका राज्य अपने नियम (जैसे निवास) जोड़ सकता है।")
    ],
    benefits: [
      tx("Compulsory non-refundable fees are reimbursed.", "ज़रूरी न लौटने वाली फ़ीस की भरपाई।"),
      tx("A monthly maintenance allowance, depending on the course.", "कोर्स के हिसाब से मासिक भत्ता।")
    ],
    howToApply: [
      tx("Apply on your State's scholarship portal (or NSP, if your State uses it). Ask your school or college office.", "अपने राज्य के छात्रवृत्ति पोर्टल पर आवेदन करें (या NSP पर, अगर राज्य उसे इस्तेमाल करता है)। स्कूल या कॉलेज ऑफ़िस से पूछें।")
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/pmsscsn",
    checkedFrom: tx("Government of Haryana scheme page (2023) and news on the planned income-limit change (2026)", "हरियाणा सरकार का योजना पेज (2023) और आय सीमा बदलाव पर समाचार (2026)"),
    checked: CHECKED,
    note: tx("Each State runs this scheme with its own portal and dates. Confirm the income limit and process with your State.", "हर राज्य यह योजना अपने पोर्टल और तारीख़ों से चलाता है। आय सीमा और प्रक्रिया अपने राज्य से पक्की करें।"),
    hints: { genderOrCategory: { category: ["sc"] }, employment: ["student"], education: ["class10", "class12", "iti", "diploma", "graduation"] }
  },
  {
    id: "pm-yasasvi-top-school", category: "social",
    name: tx("PM YASASVI — Top Class School Education (OBC, EBC, DNT)", "पीएम यशस्वी — टॉप क्लास स्कूल शिक्षा (OBC, EBC, DNT)"),
    ministry: tx("Ministry of Social Justice and Empowerment; entrance test by NTA", "सामाजिक न्याय और अधिकारिता मंत्रालय; प्रवेश परीक्षा NTA द्वारा"),
    purpose: tx("Pays school or hostel fees for meritorious OBC, EBC and DNT students in selected top-class schools.", "चुने हुए टॉप क्लास स्कूलों में OBC, EBC और DNT के मेधावी छात्रों की स्कूल या हॉस्टल फ़ीस।"),
    audience: tx("OBC, EBC and DNT students in Class 9 or Class 11 at a listed top-class school.", "सूचीबद्ध टॉप क्लास स्कूल में 9वीं या 11वीं में पढ़ रहे OBC, EBC और DNT छात्र।"),
    eligibility: [
      tx("Belong to OBC, Economically Backward Class (EBC) or De-notified / Nomadic / Semi-Nomadic Tribe (DNT).", "OBC, आर्थिक रूप से पिछड़ा वर्ग (EBC) या विमुक्त / घुमंतू / अर्ध-घुमंतू जनजाति (DNT) से हों।"),
      tx("Parents' annual income not more than ₹2.5 lakh.", "माता-पिता की सालाना आय ₹2.5 लाख से ज़्यादा नहीं।"),
      tx("Studying in Class 9 or 11 in a school on the official top-class school list.", "आधिकारिक टॉप क्लास स्कूल सूची के किसी स्कूल में 9वीं या 11वीं में।")
    ],
    benefits: [
      tx("Up to ₹75,000 a year for Class 9–10 and up to ₹1,25,000 a year for Class 11–12, for school or hostel fees.", "स्कूल या हॉस्टल फ़ीस के लिए 9वीं-10वीं में ₹75,000 तक और 11वीं-12वीं में ₹1,25,000 तक प्रति वर्ष।")
    ],
    howToApply: [
      tx("Selection has been through the YASASVI Entrance Test (YET) conducted by NTA. Check NTA and the Ministry's website for the current year.", "चयन NTA की यशस्वी प्रवेश परीक्षा (YET) से होता रहा है। इस साल की जानकारी NTA और मंत्रालय की वेबसाइट पर देखें।")
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/pm-yasasvitcseobcebcdnts",
    checkedFrom: tx("Ministry of Social Justice notice (2023 cycle)", "सामाजिक न्याय मंत्रालय की सूचना (2023 चक्र)"),
    checked: CHECKED,
    note: tx("The notice we read is from the 2023 cycle. The selection process may have changed — confirm before applying.", "हमने जो सूचना पढ़ी वह 2023 चक्र की है। चयन प्रक्रिया बदल सकती है — आवेदन से पहले पक्का करें।"),
    hints: { genderOrCategory: { category: ["obc"] }, employment: ["student"], education: ["below10", "class10"] }
  }
];

export const NSP_PORTAL = {
  url: NSP,
  name: tx("National Scholarship Portal (NSP)", "राष्ट्रीय छात्रवृत्ति पोर्टल (NSP)"),
  text: tx("The Government of India's single portal for many central and state scholarships — apply, track and renew.", "भारत सरकार का एक पोर्टल, जहाँ कई केंद्रीय और राज्य छात्रवृत्तियों के लिए आवेदन, ट्रैकिंग और नवीनीकरण होता है।")
};
