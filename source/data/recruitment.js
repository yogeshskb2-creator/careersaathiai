// Government Job Explorer: official recruitment SOURCES (not vacancies).
//
// RULES
// - Each URL was confirmed as the official site of that body on `checked`.
// - We describe what kind of recruitment the body handles — never a current
//   vacancy, date, fee or age limit.
// - `state` is set only for state-level bodies (uses state ids from options.js).

export const RECRUITMENT_CATEGORIES = [
  { id: "central", en: "Central govt (SSC, UPSC)", hi: "केंद्र सरकार (SSC, UPSC)" },
  { id: "railway", en: "Railways", hi: "रेलवे" },
  { id: "banking", en: "Banking", hi: "बैंकिंग" },
  { id: "state", en: "State government", hi: "राज्य सरकार" },
  { id: "teaching", en: "Teaching", hi: "शिक्षक भर्ती" },
  { id: "technical", en: "Technical & research", hi: "तकनीकी और रिसर्च" },
  { id: "defence", en: "Defence", hi: "रक्षा / सेना" },
  { id: "apprenticeship", en: "Apprenticeships", hi: "अप्रेंटिसशिप" },
  { id: "portal", en: "Job news & portals", hi: "रोज़गार समाचार और पोर्टल" }
];

const CHECKED = "2026-10-22";
const r = (o) => ({ checked: CHECKED, state: null, ...o });

export const RECRUITMENT_SOURCES = [
  // ---- Central ----
  r({ id: "ssc", category: "central", url: "https://ssc.gov.in/",
    name: { en: "Staff Selection Commission (SSC)", hi: "कर्मचारी चयन आयोग (SSC)" },
    covers: { en: "Exams for Group B and C posts in central ministries and departments, such as CGL, CHSL, MTS and GD Constable.", hi: "केंद्रीय मंत्रालयों और विभागों के ग्रुप B और C पदों की परीक्षाएँ, जैसे CGL, CHSL, MTS और GD कांस्टेबल।" } }),
  r({ id: "upsc", category: "central", url: "https://upsc.gov.in/",
    name: { en: "Union Public Service Commission (UPSC)", hi: "संघ लोक सेवा आयोग (UPSC)" },
    covers: { en: "Civil Services (IAS, IPS and others), Engineering Services and other Group A recruitment.", hi: "सिविल सेवा (IAS, IPS आदि), इंजीनियरिंग सेवा और अन्य ग्रुप A भर्ती।" } }),
  r({ id: "gds", category: "central", url: "https://indiapostgdsonline.gov.in/",
    name: { en: "India Post — Gramin Dak Sevak (GDS) online engagement", hi: "भारतीय डाक — ग्रामीण डाक सेवक (GDS) ऑनलाइन चयन" },
    covers: { en: "Engagement of Gramin Dak Sevaks in village post offices.", hi: "गाँव के डाकघरों में ग्रामीण डाक सेवकों का चयन।" } }),

  // ---- Railway ----
  r({ id: "rrb", category: "railway", url: "https://www.rrbapply.gov.in/",
    name: { en: "Railway Recruitment Boards — application portal", hi: "रेलवे भर्ती बोर्ड — आवेदन पोर्टल" },
    covers: { en: "Online applications for railway recruitment such as NTPC, Level-1, technician and other posts.", hi: "रेलवे भर्ती के ऑनलाइन आवेदन, जैसे NTPC, लेवल-1, टेक्नीशियन और अन्य पद।" } }),

  // ---- Banking ----
  r({ id: "ibps", category: "banking", url: "https://www.ibps.in/",
    name: { en: "Institute of Banking Personnel Selection (IBPS)", hi: "बैंकिंग कार्मिक चयन संस्थान (IBPS)" },
    covers: { en: "Common exams for clerks, probationary officers and specialist officers in many public sector and regional rural banks.", hi: "कई सरकारी और ग्रामीण बैंकों के क्लर्क, PO और स्पेशलिस्ट ऑफ़िसर की साझा परीक्षाएँ।" } }),
  r({ id: "sbi", category: "banking", url: "https://sbi.bank.in/web/careers",
    name: { en: "State Bank of India — Careers", hi: "भारतीय स्टेट बैंक — करियर" },
    covers: { en: "SBI's own recruitment for clerks (Junior Associates), probationary officers and specialist officers.", hi: "SBI की अपनी भर्ती — क्लर्क (जूनियर एसोसिएट), PO और स्पेशलिस्ट ऑफ़िसर।" } }),
  r({ id: "rbi", category: "banking", url: "https://opportunities.rbi.org.in/",
    name: { en: "Reserve Bank of India — Opportunities", hi: "भारतीय रिज़र्व बैंक — अवसर" },
    covers: { en: "Recruitment for RBI posts such as Officers (Grade B) and Assistants.", hi: "RBI के पदों की भर्ती, जैसे ऑफ़िसर (ग्रेड B) और असिस्टेंट।" } }),

  // ---- State (examples — each state has its own bodies) ----
  r({ id: "uppsc", category: "state", state: "UP", url: "https://uppsc.up.nic.in/",
    name: { en: "UP Public Service Commission (UPPSC)", hi: "उत्तर प्रदेश लोक सेवा आयोग (UPPSC)" },
    covers: { en: "Uttar Pradesh state services (PCS) and other state-level posts.", hi: "उत्तर प्रदेश राज्य सेवा (PCS) और अन्य राज्य स्तरीय पद।" } }),
  r({ id: "upsssc", category: "state", state: "UP", url: "https://upsssc.gov.in/",
    name: { en: "UP Subordinate Services Selection Commission (UPSSSC)", hi: "उत्तर प्रदेश अधीनस्थ सेवा चयन आयोग (UPSSSC)" },
    covers: { en: "Group C posts in Uttar Pradesh government departments.", hi: "उत्तर प्रदेश सरकार के विभागों में ग्रुप C पद।" } }),
  r({ id: "mpsc", category: "state", state: "MH", url: "https://mpsc.gov.in/",
    name: { en: "Maharashtra Public Service Commission (MPSC)", hi: "महाराष्ट्र लोक सेवा आयोग (MPSC)" },
    covers: { en: "Maharashtra state services and other state posts (Group A, B and C).", hi: "महाराष्ट्र राज्य सेवा और अन्य राज्य पद (ग्रुप A, B और C)।" } }),
  r({ id: "rpsc", category: "state", state: "RJ", url: "https://rpsc.rajasthan.gov.in/",
    name: { en: "Rajasthan Public Service Commission (RPSC)", hi: "राजस्थान लोक सेवा आयोग (RPSC)" },
    covers: { en: "Rajasthan state services (RAS) and other state posts, including some teaching posts.", hi: "राजस्थान राज्य सेवा (RAS) और अन्य राज्य पद, कुछ शिक्षक पद भी।" } }),

  // ---- Teaching ----
  r({ id: "kvs", category: "teaching", url: "https://kvsangathan.nic.in/",
    name: { en: "Kendriya Vidyalaya Sangathan (KVS)", hi: "केंद्रीय विद्यालय संगठन (KVS)" },
    covers: { en: "Teaching and non-teaching posts in Kendriya Vidyalayas.", hi: "केंद्रीय विद्यालयों में शिक्षक और गैर-शिक्षक पद।" } }),
  r({ id: "nvs", category: "teaching", url: "https://navodaya.gov.in/",
    name: { en: "Navodaya Vidyalaya Samiti (NVS)", hi: "नवोदय विद्यालय समिति (NVS)" },
    covers: { en: "Teaching and non-teaching posts in Jawahar Navodaya Vidyalayas.", hi: "जवाहर नवोदय विद्यालयों में शिक्षक और गैर-शिक्षक पद।" } }),
  r({ id: "ctet", category: "teaching", url: "https://ctet.nic.in/",
    name: { en: "Central Teacher Eligibility Test (CTET)", hi: "केंद्रीय शिक्षक पात्रता परीक्षा (CTET)" },
    covers: { en: "An eligibility test for teaching in central government schools. It is not a job recruitment by itself.", hi: "केंद्र सरकार के स्कूलों में पढ़ाने की पात्रता परीक्षा। यह अपने-आप में नौकरी की भर्ती नहीं है।" } }),

  // ---- Technical & research ----
  r({ id: "isro", category: "technical", url: "https://www.isro.gov.in/Careers.html",
    name: { en: "ISRO — Careers", hi: "इसरो (ISRO) — करियर" },
    covers: { en: "Scientist/engineer, technician and other posts at ISRO centres.", hi: "ISRO केंद्रों में वैज्ञानिक/इंजीनियर, टेक्नीशियन और अन्य पद।" } }),
  r({ id: "drdo", category: "technical", url: "https://drdo.gov.in/drdo/careers",
    name: { en: "DRDO — Careers", hi: "DRDO — करियर" },
    covers: { en: "Scientist, technical staff and apprentice openings in DRDO labs.", hi: "DRDO प्रयोगशालाओं में वैज्ञानिक, तकनीकी स्टाफ़ और अप्रेंटिस के मौक़े।" } }),

  // ---- Defence ----
  r({ id: "army", category: "defence", url: "https://joinindianarmy.nic.in/",
    name: { en: "Join Indian Army", hi: "भारतीय सेना भर्ती" },
    covers: { en: "Agniveer and officer entries into the Indian Army.", hi: "भारतीय सेना में अग्निवीर और ऑफ़िसर भर्ती।" } }),
  r({ id: "navy", category: "defence", url: "https://www.joinindiannavy.gov.in/",
    name: { en: "Join Indian Navy", hi: "भारतीय नौसेना भर्ती" },
    covers: { en: "Sailor (Agniveer) and officer entries into the Indian Navy.", hi: "भारतीय नौसेना में नाविक (अग्निवीर) और ऑफ़िसर भर्ती।" } }),

  // ---- Apprenticeship ----
  r({ id: "nats", category: "apprenticeship", url: "https://nats.education.gov.in/",
    name: { en: "National Apprenticeship Training Scheme (NATS) portal", hi: "राष्ट्रीय अप्रेंटिसशिप प्रशिक्षण योजना (NATS) पोर्टल" },
    covers: { en: "Apprenticeships with a stipend for graduates and diploma holders.", hi: "ग्रेजुएट और डिप्लोमा धारकों के लिए स्टाइपेंड वाली अप्रेंटिसशिप।" } }),
  r({ id: "naps", category: "apprenticeship", url: "https://www.myscheme.gov.in/schemes/naps",
    name: { en: "National Apprenticeship Promotion Scheme (NAPS) — on myScheme", hi: "राष्ट्रीय अप्रेंटिसशिप प्रोत्साहन योजना (NAPS) — myScheme पर" },
    covers: { en: "Apprenticeships in companies and organisations for trade and other apprentices.", hi: "कंपनियों और संस्थाओं में ट्रेड व अन्य अप्रेंटिस के लिए अप्रेंटिसशिप।" } }),

  // ---- Portals & news ----
  r({ id: "ncs", category: "portal", url: "https://www.ncs.gov.in/",
    name: { en: "National Career Service (NCS)", hi: "राष्ट्रीय करियर सेवा (NCS)" },
    covers: { en: "Government job portal with listings from employers, job fairs and career counselling.", hi: "सरकारी जॉब पोर्टल — कंपनियों की नौकरियाँ, रोज़गार मेले और करियर सलाह।" } }),
  r({ id: "empnews", category: "portal", url: "https://employmentnews.gov.in/",
    name: { en: "Employment News (Rozgar Samachar)", hi: "रोज़गार समाचार" },
    covers: { en: "Government weekly that publishes official recruitment advertisements from many departments.", hi: "सरकार का साप्ताहिक, जिसमें कई विभागों के आधिकारिक भर्ती विज्ञापन छपते हैं।" } })
];
