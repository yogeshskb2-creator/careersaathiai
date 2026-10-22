// "What after 10th / 12th?" roadmap. General guidance only.
// RULES: no fees, salaries, seat numbers or exam dates. Durations are the usual ones
// and are written with "usually". Every path links to an official website.
// Checked: 2026-10-22 (DGT for ITI, Apprenticeship India, NTA, NIOS, Skill India Digital).

const tx = (en, hi) => ({ en, hi });
export const ROADMAP_CHECKED = "2026-10-22";

export const STAGES = [
  { id: "after10", name: tx("After Class 10", "10वीं के बाद"), icon: "🎒" },
  { id: "after12", name: tx("After Class 12", "12वीं के बाद"), icon: "🎓" }
];

// areas = quiz interest areas this path often suits (used to highlight paths).
export const PATHS = [
  // ------------------------------- After 10th -------------------------------
  {
    id: "streams", stage: "after10", icon: "📚", areas: ["think", "help", "organise"],
    name: tx("Class 11–12: Science, Commerce or Arts", "11वीं–12वीं: साइंस, कॉमर्स या आर्ट्स"),
    duration: tx("2 years", "2 साल"),
    what: tx("Continue school and choose a stream. Science (Maths or Biology) opens engineering and medical entrance exams; Commerce leads to accounts, banking and CA-type courses; Arts/Humanities leads to teaching, law, civil services, media and more.",
      "स्कूल जारी रखें और स्ट्रीम चुनें। साइंस (मैथ्स या बायोलॉजी) से इंजीनियरिंग और मेडिकल प्रवेश परीक्षाओं का रास्ता खुलता है; कॉमर्स से अकाउंट्स, बैंकिंग और CA जैसे कोर्स; आर्ट्स/ह्यूमैनिटीज़ से टीचिंग, क़ानून, सिविल सेवा, मीडिया आदि।"),
    goodFor: tx("You want a degree later, or you are not sure yet and want to keep many doors open.", "आप आगे डिग्री करना चाहते हैं, या अभी पक्का नहीं है और ज़्यादा रास्ते खुले रखना चाहते हैं।"),
    leadsTo: tx("Any path in the 'After Class 12' list.", "'12वीं के बाद' वाली सूची का कोई भी रास्ता।"),
    tip: tx("Choose the stream for the subjects you can study every day — not only because friends chose it. Can't attend regular school? NIOS (open schooling) is a recognised option.",
      "वह स्ट्रीम चुनें जिसके विषय आप रोज़ पढ़ सकें — सिर्फ़ इसलिए नहीं कि दोस्तों ने चुनी। नियमित स्कूल नहीं जा सकते? NIOS (ओपन स्कूलिंग) एक मान्य विकल्प है।"),
    careers: [],
    links: [{ label: tx("NIOS — open schooling", "NIOS — ओपन स्कूलिंग"), url: "https://www.nios.ac.in/" }]
  },
  {
    id: "iti", stage: "after10", icon: "🔧", areas: ["hands"],
    name: tx("ITI (Industrial Training Institute)", "ITI (औद्योगिक प्रशिक्षण संस्थान)"),
    duration: tx("Usually 6 months to 2 years, depending on the trade", "ट्रेड के हिसाब से आम तौर पर 6 महीने से 2 साल"),
    what: tx("Practical training in a trade such as Electrician, Fitter, Welder, Mechanic, COPA (computer) or Plumber, under the Craftsmen Training Scheme run with DGT. Some trades take 8th-pass students; most take 10th-pass.",
      "इलेक्ट्रीशियन, फ़िटर, वेल्डर, मैकेनिक, COPA (कंप्यूटर) या प्लंबर जैसे ट्रेड में व्यावहारिक प्रशिक्षण, DGT के क्राफ़्ट्समैन ट्रेनिंग स्कीम के तहत। कुछ ट्रेड में 8वीं पास भी ले सकते हैं; ज़्यादातर में 10वीं पास।"),
    goodFor: tx("You like hands-on work and want to start earning sooner.", "आपको हाथ का काम पसंद है और आप जल्दी कमाना शुरू करना चाहते हैं।"),
    leadsTo: tx("Apprenticeship, factory and service jobs, Railway/defence technical posts, your own repair work; in many states, lateral entry to a polytechnic diploma.",
      "अप्रेंटिसशिप, फ़ैक्ट्री और सर्विस की नौकरी, रेलवे/रक्षा के तकनीकी पद, अपना रिपेयर काम; कई राज्यों में पॉलिटेक्निक डिप्लोमा में लेटरल एंट्री।"),
    tip: tx("Check that the ITI and trade are affiliated (NCVT/SCVT) before taking admission.", "दाख़िला लेने से पहले देख लें कि ITI और ट्रेड मान्यता प्राप्त (NCVT/SCVT) हैं।"),
    careers: ["electrician", "welder", "plumber", "repair-technician", "trade-apprentice", "rrb-level1"],
    guide: "guide-career-after-iti.html",
    links: [{ label: tx("DGT — official site", "DGT — आधिकारिक साइट"), url: "https://dgt.gov.in/" }]
  },
  {
    id: "polytechnic", stage: "after10", icon: "🏗️", areas: ["hands", "think"],
    name: tx("Polytechnic diploma (engineering)", "पॉलिटेक्निक डिप्लोमा (इंजीनियरिंग)"),
    duration: tx("Usually 3 years", "आम तौर पर 3 साल"),
    what: tx("A diploma in Civil, Mechanical, Electrical, Computer or another branch. Admission is usually through a state entrance test or merit.",
      "सिविल, मैकेनिकल, इलेक्ट्रिकल, कंप्यूटर या दूसरी ब्रांच में डिप्लोमा। दाख़िला आम तौर पर राज्य की प्रवेश परीक्षा या मेरिट से।"),
    goodFor: tx("You like technical subjects and want a job-ready qualification without waiting for 12th.", "आपको तकनीकी विषय पसंद हैं और 12वीं का इंतज़ार किए बिना नौकरी-लायक़ योग्यता चाहते हैं।"),
    leadsTo: tx("Junior engineer and technician jobs, apprenticeships, and often lateral entry into the 2nd year of B.Tech.", "जूनियर इंजीनियर और टेक्नीशियन की नौकरी, अप्रेंटिसशिप, और अक्सर B.Tech के दूसरे साल में लेटरल एंट्री।"),
    tip: tx("Check your state's technical education board for the entrance test and dates.", "प्रवेश परीक्षा और तारीख़ों के लिए अपने राज्य के तकनीकी शिक्षा बोर्ड की साइट देखें।"),
    careers: ["graduate-apprentice", "repair-technician", "electrician"],
    links: [{ label: tx("Apprenticeship India", "अप्रेंटिसशिप इंडिया"), url: "https://www.apprenticeshipindia.gov.in/" }]
  },
  {
    id: "short-skill", stage: "after10", icon: "⚡", areas: ["create", "lead", "hands"],
    name: tx("Short skill courses (Skill India / PMKVY)", "छोटे स्किल कोर्स (स्किल इंडिया / PMKVY)"),
    duration: tx("Usually a few weeks to a few months", "आम तौर पर कुछ हफ़्ते से कुछ महीने"),
    what: tx("Free or low-cost certified courses in areas like computers, tailoring, beauty, retail, electrical work and more, listed on Skill India Digital.",
      "कंप्यूटर, सिलाई, ब्यूटी, रिटेल, बिजली के काम जैसे क्षेत्रों में मुफ़्त या कम ख़र्च वाले प्रमाणित कोर्स, स्किल इंडिया डिजिटल पर।"),
    goodFor: tx("You need to earn soon, or want a skill alongside your studies.", "आपको जल्दी कमाना है, या पढ़ाई के साथ एक हुनर चाहिए।"),
    leadsTo: tx("Entry-level jobs, self-employment, or a longer course later.", "शुरुआती नौकरी, स्वरोज़गार, या बाद में लंबा कोर्स।"),
    tip: tx("Only join centres listed on the official portal. Never pay an agent for a 'free' government course.", "सिर्फ़ आधिकारिक पोर्टल पर दिए केंद्रों में जाएँ। 'मुफ़्त' सरकारी कोर्स के लिए किसी एजेंट को पैसे न दें।"),
    careers: ["data-entry", "tailoring-business", "retail-associate", "customer-support"],
    guide: "guide-free-skill-training.html",
    links: [{ label: tx("Skill India Digital", "स्किल इंडिया डिजिटल"), url: "https://www.skillindiadigital.gov.in/" }]
  },
  {
    id: "govt10", stage: "after10", icon: "🏛️", areas: ["organise", "help"],
    name: tx("Government jobs open to 10th pass", "10वीं पास के लिए सरकारी नौकरियाँ"),
    duration: tx("Exam preparation: usually several months", "परीक्षा की तैयारी: आम तौर पर कई महीने"),
    what: tx("Some central and state posts accept 10th pass — for example SSC MTS, India Post GDS, Railway Level-1 posts and some defence and police posts. Age limits apply, so many students prepare for these a little later.",
      "कुछ केंद्र और राज्य के पद 10वीं पास लेते हैं — जैसे SSC MTS, इंडिया पोस्ट GDS, रेलवे लेवल-1 पद और कुछ रक्षा व पुलिस पद। उम्र सीमा होती है, इसलिए कई छात्र इनकी तैयारी थोड़ा बाद में करते हैं।"),
    goodFor: tx("You want a stable job and can prepare regularly for exams.", "आप स्थिर नौकरी चाहते हैं और नियमित रूप से परीक्षा की तैयारी कर सकते हैं।"),
    leadsTo: tx("A government job; you can usually keep studying privately (e.g. through open schooling) for promotions.", "सरकारी नौकरी; प्रमोशन के लिए आम तौर पर निजी तौर पर (जैसे ओपन स्कूलिंग से) पढ़ाई जारी रख सकते हैं।"),
    tip: tx("Read the official notification for each post — age, qualification and physical rules differ.", "हर पद का आधिकारिक नोटिफ़िकेशन पढ़ें — उम्र, योग्यता और शारीरिक नियम अलग-अलग होते हैं।"),
    careers: ["ssc-mts", "india-post-gds", "rrb-level1", "army-agniveer", "state-police"],
    page: "jobs.html",
    links: [{ label: tx("SSC — official site", "SSC — आधिकारिक साइट"), url: "https://ssc.gov.in/" }]
  },

  // ------------------------------- After 12th -------------------------------
  {
    id: "degree", stage: "after12", icon: "🎓", areas: ["think", "help", "organise", "create"],
    name: tx("Bachelor's degree (BA, BSc, BCom, BBA, BCA…)", "ग्रेजुएशन (BA, BSc, BCom, BBA, BCA…)"),
    duration: tx("Usually 3–4 years", "आम तौर पर 3–4 साल"),
    what: tx("A general degree at a college or university. Many central universities admit through CUET-UG (run by NTA); state universities and colleges have their own process. Distance and open universities are also an option.",
      "कॉलेज या विश्वविद्यालय से सामान्य डिग्री। कई केंद्रीय विश्वविद्यालय CUET-UG (NTA द्वारा) से दाख़िला देते हैं; राज्य विश्वविद्यालयों और कॉलेजों की अपनी प्रक्रिया होती है। दूरस्थ/ओपन विश्वविद्यालय भी एक विकल्प हैं।"),
    goodFor: tx("You want graduate-level government exams (SSC CGL, bank PO, state PSC) or a postgraduate course later.", "आप ग्रेजुएट-स्तर की सरकारी परीक्षाएँ (SSC CGL, बैंक PO, राज्य PSC) या आगे पोस्टग्रेजुएशन करना चाहते हैं।"),
    leadsTo: tx("Graduate jobs and exams, B.Ed for teaching, MBA/MCA/MA/MSc, graduate apprenticeships.", "ग्रेजुएट नौकरियाँ और परीक्षाएँ, टीचिंग के लिए B.Ed, MBA/MCA/MA/MSc, ग्रेजुएट अप्रेंटिसशिप।"),
    tip: tx("Check that the college is recognised (UGC). Look at scholarships before you pay fees.", "देख लें कि कॉलेज मान्यता प्राप्त (UGC) है। फ़ीस भरने से पहले स्कॉलरशिप देखें।"),
    careers: ["ssc-cgl", "bank-po", "state-psc", "graduate-apprentice", "data-analyst"],
    page: "scholarships.html",
    links: [{ label: tx("NTA — CUET and other exams", "NTA — CUET और अन्य परीक्षाएँ"), url: "https://nta.ac.in/" }]
  },
  {
    id: "professional", stage: "after12", icon: "🩺", areas: ["think", "help"],
    name: tx("Professional courses through entrance exams", "प्रवेश परीक्षा से प्रोफ़ेशनल कोर्स"),
    duration: tx("Usually 4–5½ years", "आम तौर पर 4–5½ साल"),
    what: tx("Engineering (JEE Main), medical and many health courses (NEET-UG), law (CLAT and state tests), hotel management, design and others. Each has its own subjects required in Class 12.",
      "इंजीनियरिंग (JEE Main), मेडिकल और कई हेल्थ कोर्स (NEET-UG), क़ानून (CLAT और राज्य परीक्षाएँ), होटल मैनेजमेंट, डिज़ाइन आदि। हर कोर्स के लिए 12वीं में ख़ास विषय चाहिए।"),
    goodFor: tx("You are clear about a profession and can prepare seriously for a competitive exam.", "आप किसी पेशे को लेकर स्पष्ट हैं और प्रतियोगी परीक्षा की गंभीर तैयारी कर सकते हैं।"),
    leadsTo: tx("Engineer, doctor, nurse, pharmacist, lawyer and similar professions (after licensing where required).", "इंजीनियर, डॉक्टर, नर्स, फ़ार्मासिस्ट, वकील जैसे पेशे (जहाँ ज़रूरी हो, लाइसेंस के बाद)।"),
    tip: tx("Exam dates and rules are on the official NTA and exam websites only — not on social media posts.", "परीक्षा की तारीख़ें और नियम सिर्फ़ NTA और परीक्षा की आधिकारिक साइट पर — सोशल मीडिया पोस्ट पर नहीं।"),
    careers: [],
    links: [{ label: tx("NTA — JEE, NEET, CUET", "NTA — JEE, NEET, CUET"), url: "https://nta.ac.in/" }]
  },
  {
    id: "deled", stage: "after12", icon: "🧑‍🏫", areas: ["help"],
    name: tx("D.El.Ed (teaching diploma)", "D.El.Ed (टीचिंग डिप्लोमा)"),
    duration: tx("Usually 2 years", "आम तौर पर 2 साल"),
    what: tx("A diploma that prepares you to teach in primary classes. Admission and rules are set by states and recognised by NCTE.",
      "प्राथमिक कक्षाओं में पढ़ाने के लिए डिप्लोमा। दाख़िला और नियम राज्य तय करते हैं, मान्यता NCTE देता है।"),
    goodFor: tx("You enjoy teaching children.", "आपको बच्चों को पढ़ाना पसंद है।"),
    leadsTo: tx("Teacher eligibility tests (CTET/state TET) and then teacher recruitment; tutoring meanwhile.", "शिक्षक पात्रता परीक्षा (CTET/राज्य TET) और फिर शिक्षक भर्ती; इस बीच ट्यूशन।"),
    tip: tx("Only join an NCTE-recognised institute.", "सिर्फ़ NCTE से मान्यता प्राप्त संस्थान में दाख़िला लें।"),
    careers: ["govt-teacher", "tutor"],
    links: [{ label: tx("NCTE — official site", "NCTE — आधिकारिक साइट"), url: "https://ncte.gov.in/" }]
  },
  {
    id: "govt12", stage: "after12", icon: "🏛️", areas: ["organise", "help"],
    name: tx("Government jobs open to 12th pass", "12वीं पास के लिए सरकारी नौकरियाँ"),
    duration: tx("Exam preparation: usually several months", "परीक्षा की तैयारी: आम तौर पर कई महीने"),
    what: tx("For example SSC CHSL, RRB NTPC (undergraduate level), police constable, Agniveer and the NDA exam (through UPSC). Many students prepare while doing a degree.",
      "जैसे SSC CHSL, RRB NTPC (अंडरग्रेजुएट स्तर), पुलिस कांस्टेबल, अग्निवीर और NDA परीक्षा (UPSC के ज़रिए)। कई छात्र डिग्री के साथ तैयारी करते हैं।"),
    goodFor: tx("You want a stable job soon and can study for exams regularly.", "आप जल्दी स्थिर नौकरी चाहते हैं और नियमित पढ़ाई कर सकते हैं।"),
    leadsTo: tx("A government job; graduate-level exams later if you also complete a degree.", "सरकारी नौकरी; डिग्री पूरी करने पर आगे ग्रेजुएट-स्तर की परीक्षाएँ।"),
    tip: tx("See which recruitments are open right now on our Govt Jobs page.", "अभी कौन-सी भर्तियाँ खुली हैं, हमारे सरकारी नौकरी पेज पर देखें।"),
    careers: ["ssc-chsl", "rrb-ntpc", "state-police", "army-agniveer"],
    page: "jobs.html",
    links: [{ label: tx("UPSC — official site", "UPSC — आधिकारिक साइट"), url: "https://upsc.gov.in/" }]
  },
  {
    id: "skills12", stage: "after12", icon: "💻", areas: ["create", "organise", "lead"],
    name: tx("Job skills, ITI or diploma", "नौकरी वाले हुनर, ITI या डिप्लोमा"),
    duration: tx("Usually a few months to 2 years", "आम तौर पर कुछ महीने से 2 साल"),
    what: tx("Computer and office skills (CCC, Tally, Excel), digital marketing, design, coding, or an ITI/diploma — on their own or alongside an open/distance degree.",
      "कंप्यूटर और ऑफ़िस हुनर (CCC, Tally, Excel), डिजिटल मार्केटिंग, डिज़ाइन, कोडिंग, या ITI/डिप्लोमा — अकेले या ओपन/दूरस्थ डिग्री के साथ।"),
    goodFor: tx("You want to start working soon and build skills step by step.", "आप जल्दी काम शुरू करना चाहते हैं और धीरे-धीरे हुनर बढ़ाना चाहते हैं।"),
    leadsTo: tx("Office, accounts, IT support, sales and freelance work, or your own small business.", "ऑफ़िस, अकाउंट्स, IT सपोर्ट, सेल्स और फ़्रीलांस काम, या अपना छोटा व्यवसाय।"),
    tip: tx("Build small proof of your skills (a sample sheet, a design, a website) to show employers.", "नियोक्ताओं को दिखाने के लिए अपने हुनर का छोटा सबूत बनाएँ (एक सैंपल शीट, डिज़ाइन, वेबसाइट)।"),
    careers: ["accounts-assistant", "data-entry", "web-developer", "digital-marketer", "graphic-designer"],
    page: "courses.html",
    guide: "guide-ccc-course-guide.html",
    links: [{ label: tx("Skill India Digital", "स्किल इंडिया डिजिटल"), url: "https://www.skillindiadigital.gov.in/" }]
  },
  {
    id: "appr12", stage: "after12", icon: "🏭", areas: ["hands", "organise"],
    name: tx("Apprenticeship (earn while you learn)", "अप्रेंटिसशिप (सीखते हुए कमाएँ)"),
    duration: tx("Usually 6 months to 3 years, depending on the trade", "ट्रेड के हिसाब से आम तौर पर 6 महीने से 3 साल"),
    what: tx("Training at a real company or government organisation with a monthly stipend, under the Apprentices Act. Register free on the Apprenticeship India portal. Also open after 10th and after ITI.",
      "किसी असली कंपनी या सरकारी संस्था में प्रशिक्षण, हर महीने स्टाइपेंड के साथ, अप्रेंटिस अधिनियम के तहत। अप्रेंटिसशिप इंडिया पोर्टल पर मुफ़्त रजिस्टर करें। 10वीं और ITI के बाद भी खुली है।"),
    goodFor: tx("You learn best by doing and need some income while training.", "आप करके सबसे अच्छा सीखते हैं और प्रशिक्षण के दौरान कुछ कमाई चाहिए।"),
    leadsTo: tx("Work experience and a certificate that many employers value.", "काम का अनुभव और प्रमाणपत्र, जिसे कई नियोक्ता महत्व देते हैं।"),
    tip: tx("Stipend amounts and seats are shown on each official opening — check there.", "स्टाइपेंड और सीटें हर आधिकारिक अवसर पर दी होती हैं — वहीं देखें।"),
    careers: ["trade-apprentice", "graduate-apprentice"],
    guide: "guide-apprenticeships-internships-graduates.html",
    links: [{ label: tx("Apprenticeship India", "अप्रेंटिसशिप इंडिया"), url: "https://www.apprenticeshipindia.gov.in/" }]
  }
];
