// OPEN RECRUITMENTS ("live vacancies") — updated by hand.
//
// HOW TO UPDATE (takes 5 minutes, do it every week):
//   1. Remove records whose last date has passed (the site already hides them).
//   2. Add new records by copying one below. Dates are "YYYY-MM-DD".
//   3. verification: "official-notice"  → you read the official notice/PDF yourself
//                    "news-reports"     → only seen in news/job sites (site shows "confirm")
//   4. Change LIST_UPDATED to today's date and run `npm test`.
//
// RULES: Only real notifications. Never guess dates. Always link the official website.
// The site works out "open / closing soon / upcoming / closed" from today's date
// on the visitor's own device, so nothing else needs changing when days pass.

export const LIST_UPDATED = "2026-10-23";

const tx = (en, hi) => ({ en, hi });
const GRAD = ["graduation", "postgraduation", "professional"];

export const VACANCIES = [
  {
    id: "ousssc-police-constable-2026",
    title: tx("Odisha Police: Constable, Firefighter, Driver and other posts (Advt. 01-CRE-2026/OUSSSC)",
      "ओडिशा पुलिस: कांस्टेबल, फ़ायरफ़ाइटर, ड्राइवर और अन्य पद (विज्ञापन 01-CRE-2026/OUSSSC)"),
    org: tx("Odisha Uniformed Services Staff Selection Commission (OUSSSC)", "ओडिशा यूनिफ़ॉर्म्ड सर्विसेज़ स्टाफ़ सिलेक्शन कमीशन (OUSSSC)"),
    posts: tx("7,268 posts as reported: Constable (Civil), Constable (Communication), Constable OISF, Firefighter, Firefighting Driver, Driver PMT, Traffic Constable",
      "रिपोर्ट के अनुसार 7,268 पद: कांस्टेबल (सिविल), कांस्टेबल (कम्युनिकेशन), कांस्टेबल OISF, फ़ायरफ़ाइटर, फ़ायरफ़ाइटिंग ड्राइवर, ड्राइवर PMT, ट्रैफ़िक कांस्टेबल"),
    category: "state", state: "OD",
    opens: "2026-10-23", closes: "2026-11-12", closesTime: "22:00",
    education: ["class10", "class12", "iti", "diploma", "graduation", "postgraduation", "professional"],
    educationNote: tx("Most posts: Class 12 (+2). Constable OISF and Driver PMT: Class 10 (Driver also needs a valid licence). Constable (Communication): +2 Science or a 3-year engineering diploma. Reports differ slightly — read the official notice.",
      "ज़्यादातर पद: 12वीं (+2)। कांस्टेबल OISF और ड्राइवर PMT: 10वीं (ड्राइवर के लिए वैध लाइसेंस भी)। कांस्टेबल (कम्युनिकेशन): +2 साइंस या 3 साल का इंजीनियरिंग डिप्लोमा। रिपोर्टों में थोड़ा फ़र्क़ है — आधिकारिक नोटिस पढ़ें।"),
    age: { min: 18, maxGeneral: null, asOn: "2026-01-01",
      note: tx("Differs by post (for example Constable Civil 18–26, Traffic Constable 21–32) as on 01.01.2026, as reported; relaxation as per rules.",
        "पद के हिसाब से अलग (जैसे कांस्टेबल सिविल 18–26, ट्रैफ़िक कांस्टेबल 21–32), 01.01.2026 को, रिपोर्ट के अनुसार; नियमों के अनुसार छूट।") },
    experienceYears: 0,
    applyUrl: "https://ousssc.odisha.gov.in/",
    careerIds: ["state-police"],
    verification: "news-reports",
    checkedOn: "2026-10-23",
    checkedFrom: tx("Two job news websites reporting the advertisement (Testbook, FreeJobAlert)", "विज्ञापन पर दो नौकरी समाचार वेबसाइटें (Testbook, FreeJobAlert)")
  },
  {
    id: "rrb-ntpc-graduate-cen-06-2026",
    title: tx("RRB NTPC Graduate Level (CEN 06/2026)", "RRB NTPC ग्रेजुएट स्तर (CEN 06/2026)"),
    org: tx("Railway Recruitment Boards", "रेलवे भर्ती बोर्ड"),
    posts: tx("Chief Commercial cum Ticket Supervisor, Goods Train Manager, Junior Accounts Assistant cum Typist, Senior Clerk cum Typist",
      "चीफ़ कमर्शियल कम टिकट सुपरवाइज़र, गुड्स ट्रेन मैनेजर, जूनियर अकाउंट्स असिस्टेंट कम टाइपिस्ट, सीनियर क्लर्क कम टाइपिस्ट"),
    category: "railway", state: null,
    opens: "2026-10-08", closes: "2026-11-06", closesTime: "23:59",
    education: GRAD,
    educationNote: tx("A bachelor's degree; exact qualification for each post is in Annexure-A of the notice.",
      "ग्रेजुएशन की डिग्री; हर पद की सही योग्यता नोटिस के Annexure-A में है।"),
    age: { min: 18, maxGeneral: 33, asOn: "2027-01-01",
      note: tx("18–33 years for UR/EWS as on 01.01.2027 (OBC-NCL up to 36, SC/ST up to 38, as per the notice's date-of-birth limits).",
        "UR/EWS के लिए 01.01.2027 को 18–33 साल (नोटिस की जन्मतिथि सीमा के अनुसार OBC-NCL 36 तक, SC/ST 38 तक)।") },
    experienceYears: 0,
    applyUrl: "https://www.rrbapply.gov.in/",
    careerIds: ["rrb-ntpc"],
    verification: "official-notice",
    checkedOn: "2026-10-22",
    checkedFrom: tx("Official RRB notice CEN 06/2026 (copy of RRB Ranchi notice)", "RRB का आधिकारिक नोटिस CEN 06/2026 (RRB रांची नोटिस की कॉपी)")
  },
  {
    id: "rrb-ntpc-undergraduate-cen-07-2026",
    title: tx("RRB NTPC Undergraduate Level (CEN 07/2026)", "RRB NTPC अंडरग्रेजुएट स्तर (CEN 07/2026)"),
    org: tx("Railway Recruitment Boards", "रेलवे भर्ती बोर्ड"),
    posts: tx("Commercial cum Ticket Clerk, Accounts Clerk cum Typist, Junior Clerk cum Typist, Trains Clerk",
      "कमर्शियल कम टिकट क्लर्क, अकाउंट्स क्लर्क कम टाइपिस्ट, जूनियर क्लर्क कम टाइपिस्ट, ट्रेन्स क्लर्क"),
    category: "railway", state: null,
    opens: "2026-10-15", closes: "2026-11-13", closesTime: "23:59",
    education: ["class12", "graduation", "postgraduation", "professional"],
    educationNote: tx("Class 12 pass with at least 50% marks, by 13.11.2026 (SC/ST, PwBD, ex-servicemen and higher-qualified candidates are exempt from the 50% rule, as reported). Result-awaited candidates are not eligible.",
      "13.11.2026 तक कम से कम 50% अंकों के साथ 12वीं पास (रिपोर्ट के अनुसार SC/ST, PwBD, पूर्व सैनिक और ज़्यादा पढ़े उम्मीदवारों को 50% की छूट)। रिज़ल्ट का इंतज़ार कर रहे उम्मीदवार पात्र नहीं।"),
    age: { min: 18, maxGeneral: 30, asOn: "2027-01-01",
      note: tx("18–30 years for General/EWS as on 01.01.2027 (OBC-NCL up to 33, SC/ST up to 35, as reported).",
        "सामान्य/EWS के लिए 01.01.2027 को 18–30 साल (रिपोर्ट के अनुसार OBC-NCL 33 तक, SC/ST 35 तक)।") },
    experienceYears: 0,
    applyUrl: "https://www.rrbapply.gov.in/",
    careerIds: ["rrb-ntpc"],
    verification: "news-reports",
    checkedOn: "2026-10-22",
    checkedFrom: tx("Two education news websites reporting the notice (Testbook, PW)", "नोटिस पर दो शिक्षा समाचार वेबसाइटें (Testbook, PW)")
  },
  {
    id: "rrb-station-master-2026",
    title: tx("RRB Station Master (short notice)", "RRB स्टेशन मास्टर (शॉर्ट नोटिस)"),
    org: tx("Railway Recruitment Boards", "रेलवे भर्ती बोर्ड"),
    posts: tx("Station Master", "स्टेशन मास्टर"),
    category: "railway", state: null,
    opens: "2026-10-27", closes: "2026-11-25", closesTime: null,
    education: GRAD,
    educationNote: tx("Graduation, as per the detailed notice (CEN) — read it when it is published.", "ग्रेजुएशन, विस्तृत नोटिस (CEN) के अनुसार — जारी होने पर ज़रूर पढ़ें।"),
    age: null,
    experienceYears: 0,
    applyUrl: "https://www.rrbapply.gov.in/",
    careerIds: ["rrb-ntpc"],
    verification: "news-reports",
    checkedOn: "2026-10-22",
    checkedFrom: tx("Job news website reporting the short notice", "शॉर्ट नोटिस पर नौकरी समाचार वेबसाइट")
  },
  {
    id: "appsc-forest-and-technical-2026",
    title: tx("APPSC: Forest Range / Section / Beat Officer, Draughtsman Grade-II and other posts",
      "APPSC: फ़ॉरेस्ट रेंज / सेक्शन / बीट ऑफ़िसर, ड्राफ़्ट्समैन ग्रेड-II और अन्य पद"),
    org: tx("Andhra Pradesh Public Service Commission", "आंध्र प्रदेश लोक सेवा आयोग"),
    posts: tx("Forest Range Officer, Forest Section Officer, Forest Beat Officer, Draughtsman Grade-II, Executive Officer Grade-III and others",
      "फ़ॉरेस्ट रेंज ऑफ़िसर, फ़ॉरेस्ट सेक्शन ऑफ़िसर, फ़ॉरेस्ट बीट ऑफ़िसर, ड्राफ़्ट्समैन ग्रेड-II, एग्ज़िक्यूटिव ऑफ़िसर ग्रेड-III और अन्य"),
    category: "state", state: "AP",
    opens: "2026-10-16", closes: "2026-11-05", closesTime: null,
    education: ["class12", "iti", "graduation", "postgraduation", "professional"],
    educationNote: tx("Different for each post: Beat Officer — Intermediate; Draughtsman — ITI Draughtsman (Civil); Range/Section Officer — a degree in listed subjects. Some posts have physical standards.",
      "हर पद के लिए अलग: बीट ऑफ़िसर — इंटरमीडिएट; ड्राफ़्ट्समैन — ITI ड्राफ़्ट्समैन (सिविल); रेंज/सेक्शन ऑफ़िसर — तय विषयों में डिग्री। कुछ पदों पर शारीरिक मानक भी हैं।"),
    age: null,
    experienceYears: 0,
    applyUrl: "https://psc.ap.gov.in/",
    careerIds: ["state-psc"],
    verification: "news-reports",
    checkedOn: "2026-10-22",
    checkedFrom: tx("Education news website listing APPSC notifications", "APPSC सूचनाओं की सूची वाली शिक्षा समाचार वेबसाइट")
  },
  {
    id: "appsc-group1-and-others-2026",
    title: tx("APPSC: Group-I Services, Assistant Environmental Engineer, Horticulture Officer and others",
      "APPSC: ग्रुप-I सेवाएँ, असिस्टेंट एनवायरनमेंटल इंजीनियर, हॉर्टिकल्चर ऑफ़िसर और अन्य"),
    org: tx("Andhra Pradesh Public Service Commission", "आंध्र प्रदेश लोक सेवा आयोग"),
    posts: tx("Group-I Services, Assistant Environmental Engineer, Horticulture Officer, Assistant Director (Forensic Science Laboratory)",
      "ग्रुप-I सेवाएँ, असिस्टेंट एनवायरनमेंटल इंजीनियर, हॉर्टिकल्चर ऑफ़िसर, असिस्टेंट डायरेक्टर (फ़ॉरेंसिक साइंस लैब)"),
    category: "state", state: "AP",
    opens: "2026-10-06", closes: "2026-10-27", closesTime: null,
    education: null,
    educationNote: tx("Qualification differs by post — read each notification. One report shows a later last date (05.11.2026); we show the earlier date to be safe.",
      "हर पद की योग्यता अलग है — हर सूचना पढ़ें। एक रिपोर्ट में बाद की आख़िरी तारीख़ (05.11.2026) भी दिखती है; सावधानी के लिए हम पहले वाली तारीख़ दिखा रहे हैं।"),
    age: null,
    experienceYears: 0,
    applyUrl: "https://psc.ap.gov.in/",
    careerIds: ["state-psc"],
    verification: "news-reports",
    checkedOn: "2026-10-22",
    checkedFrom: tx("Education news website listing APPSC notifications", "APPSC सूचनाओं की सूची वाली शिक्षा समाचार वेबसाइट")
  },
  {
    id: "scl-technical-2026",
    title: tx("SCL Mohali: Technician 'B', Technical Assistant and other posts (Advt. SCL:DR:01/2026)",
      "SCL मोहाली: टेक्नीशियन 'B', टेक्निकल असिस्टेंट और अन्य पद (विज्ञापन SCL:DR:01/2026)"),
    org: tx("Semi-Conductor Laboratory (Ministry of Electronics & IT)", "सेमी-कंडक्टर लेबोरेटरी (इलेक्ट्रॉनिकी और IT मंत्रालय)"),
    posts: tx("Technician 'B', Technical Assistant, Junior Personal Assistant, Administrative / Accounts / Purchase & Stores Officer",
      "टेक्नीशियन 'B', टेक्निकल असिस्टेंट, जूनियर पर्सनल असिस्टेंट, प्रशासनिक / लेखा / क्रय एवं भंडार अधिकारी"),
    category: "technical", state: null,
    opens: "2026-11-01", closes: "2026-11-30", closesTime: "17:00",
    education: ["iti", "diploma", "class12", "graduation", "postgraduation", "professional"],
    educationNote: tx("Technician 'B': Class 10 + 2-year ITI (NCVT) in the trade, plus 2 years' experience. Technical Assistant: first-class 3-year engineering diploma, plus 2 years' experience. Junior PA: Class 12 + stenography. Officer posts: degree + several years' experience.",
      "टेक्नीशियन 'B': 10वीं + ट्रेड में 2 साल का ITI (NCVT), साथ में 2 साल का अनुभव। टेक्निकल असिस्टेंट: फ़र्स्ट क्लास 3 साल का इंजीनियरिंग डिप्लोमा, साथ में 2 साल का अनुभव। जूनियर PA: 12वीं + स्टेनोग्राफ़ी। अधिकारी पद: डिग्री + कई साल का अनुभव।"),
    age: { min: 18, maxGeneral: null, asOn: "2026-11-30",
      note: tx("Technician 'B' 18–27, Technical Assistant 18–30, Junior PA up to 25, officer posts up to 35 — as on 30.11.2026; relaxation as per rules.",
        "टेक्नीशियन 'B' 18–27, टेक्निकल असिस्टेंट 18–30, जूनियर PA 25 तक, अधिकारी पद 35 तक — 30.11.2026 को; नियमों के अनुसार छूट।") },
    experienceYears: 2,
    applyUrl: "https://scl.gov.in/",
    careerIds: [],
    verification: "news-reports",
    checkedOn: "2026-10-22",
    checkedFrom: tx("Job news website reporting the advertisement", "विज्ञापन पर नौकरी समाचार वेबसाइट")
  }
];
