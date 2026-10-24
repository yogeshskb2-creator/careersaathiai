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
// - `skills` lists ONLY skills with evidence that this provider offers them now
//   (`evidence` says where we saw it). Claims we could not confirm go in
//   `unverifiedSkills`: they are shown as "not confirmed" and are NEVER used to
//   match a course to a skill. A record may have no verified skills at all — then
//   it is a general place to look, not a match for any skill.

export const COST = {
  FREE: "free",                 // learning and certificate free (as stated by provider)
  FREE_EXAM_FEE: "free-exam-fee", // learning free, certificate needs a paid exam
  FEE: "fee",                   // a fee applies (amount not shown)
  UNVERIFIED: null
};

const CHECKED = "2026-10-22";
const tx = (en, hi) => ({ en, hi });
const V2 = "2026-10-24";
const ev = (url, en, hi, checked = V2) => ({ url, text: tx(en, hi), checked });
const c = (o) => ({ duration: null, certificate: null, minEducation: null, searchTip: null, note: null, checked: CHECKED, unverifiedSkills: [], evidence: null, ...o });

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
    evidence: ev("https://www.nielit.gov.in/node/2480", "NIELIT's CCC syllabus lists: introduction to computer, word processing, spreadsheets, internet and presentations.", "NIELIT के CCC सिलेबस में: कंप्यूटर परिचय, वर्ड प्रोसेसिंग, स्प्रेडशीट, इंटरनेट और प्रेज़ेंटेशन।"),
    checkedFrom: tx("NIELIT CCC page", "NIELIT CCC पेज")
  }),
  c({
    id: "nielit-olevel", providerType: "government", mode: "both",
    title: tx("O Level (IT)", "O लेवल (IT)"),
    provider: tx("NIELIT (Government of India)", "NIELIT (भारत सरकार)"),
    url: "https://www.nielit.gov.in/node/15962",
    searchTip: tx("On the NIELIT site, open the O Level section for the current syllabus and rules.", "NIELIT की वेबसाइट पर O लेवल सेक्शन में मौजूदा सिलेबस और नियम देखें।"),
    skills: ["olevel", "basic-computer", "programming", "webdev"],
    topics: tx("IT tools and networking basics, web design, Python programming and Internet of Things (as listed by NIELIT).", "IT टूल्स और नेटवर्क की बुनियाद, वेब डिज़ाइन, पाइथन प्रोग्रामिंग और इंटरनेट ऑफ़ थिंग्स (NIELIT के अनुसार)।"),
    prerequisites: null, cost: null, costNote: null,
    relatedCareers: ["data-entry", "computer-centre", "web-developer"],
    evidence: ev("https://www.nielit.gov.in/node/15962", "NIELIT's O Level (IT) page lists the papers: IT Tools & Network Basics, Web Design & Publishing, Programming through Python, and Internet of Things.", "NIELIT के O लेवल (IT) पेज पर पेपर: IT टूल्स और नेटवर्क बेसिक्स, वेब डिज़ाइन और पब्लिशिंग, पाइथन से प्रोग्रामिंग, और इंटरनेट ऑफ़ थिंग्स।"),
    checkedFrom: tx("NIELIT O Level (IT) page", "NIELIT O लेवल (IT) पेज")
  }),
  c({
    id: "swayam-computer", providerType: "government", mode: "online",
    title: tx("Search SWAYAM for computer and office courses (not confirmed)", "स्वयम पर कंप्यूटर और ऑफ़िस कोर्स खोजें (पक्का नहीं)"),
    provider: tx("SWAYAM (Ministry of Education)", "स्वयम (शिक्षा मंत्रालय)"),
    url: "https://swayam.gov.in/",
    searchTip: tx("Search SWAYAM for \"computer fundamentals\", \"office automation\" or \"spreadsheet\". Available courses change each semester.", "स्वयम पर \"computer fundamentals\", \"office automation\" या \"spreadsheet\" खोजें। कोर्स हर सेमेस्टर बदलते हैं।"),
    skills: [],
    topics: tx("University-level online courses on computer and office basics.", "कंप्यूटर और ऑफ़िस की बुनियाद पर विश्वविद्यालय स्तर के ऑनलाइन कोर्स।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Learning is free. A certificate needs a paid, in-person proctored exam.", "पढ़ाई मुफ़्त है। प्रमाणपत्र के लिए फ़ीस वाली परीक्षा केंद्र पर देनी होती है।"),
    certificate: tx("Only after passing the paid proctored exam.", "सिर्फ़ फ़ीस वाली निगरानी परीक्षा पास करने पर।"),
    relatedCareers: [],
    note: tx("We could not find a computer-basics or spreadsheet course in the current SWAYAM semester lists we checked. Search SWAYAM yourself; this is not a confirmed offering.", "हमने जो मौजूदा स्वयम सेमेस्टर सूचियाँ देखीं, उनमें कंप्यूटर बेसिक्स या स्प्रेडशीट का कोर्स नहीं मिला। स्वयम पर ख़ुद खोजें; यह पक्का किया हुआ कोर्स नहीं है।"),
    unverifiedSkills: ["basic-computer", "excel"],
    checkedFrom: tx("SWAYAM 'About' page", "स्वयम का 'About' पेज")
  }),
  c({
    id: "swayam-accounting", providerType: "government", mode: "online",
    title: tx("Search SWAYAM for accounting courses (not confirmed)", "स्वयम पर अकाउंटिंग कोर्स खोजें (पक्का नहीं)"),
    provider: tx("SWAYAM (Ministry of Education)", "स्वयम (शिक्षा मंत्रालय)"),
    url: "https://swayam.gov.in/",
    searchTip: tx("Search SWAYAM for \"accounting\", \"financial accounting\" or \"GST\".", "स्वयम पर \"accounting\", \"financial accounting\" या \"GST\" खोजें।"),
    skills: [],
    topics: tx("Basics of bookkeeping, financial accounting and taxation from universities.", "विश्वविद्यालयों से बही-खाता, वित्तीय लेखा और टैक्स की बुनियाद।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Learning is free. A certificate needs a paid, in-person proctored exam.", "पढ़ाई मुफ़्त है। प्रमाणपत्र के लिए फ़ीस वाली परीक्षा केंद्र पर देनी होती है।"),
    certificate: tx("Only after passing the paid proctored exam.", "सिर्फ़ फ़ीस वाली निगरानी परीक्षा पास करने पर।"),
    relatedCareers: [],
    note: tx("We could not find an accounting course in the current SWAYAM semester lists we checked. Search SWAYAM yourself; this is not a confirmed offering.", "हमने जो मौजूदा स्वयम सेमेस्टर सूचियाँ देखीं, उनमें अकाउंटिंग का कोर्स नहीं मिला। स्वयम पर ख़ुद खोजें; यह पक्का किया हुआ कोर्स नहीं है।"),
    unverifiedSkills: ["accounting"],
    checkedFrom: tx("SWAYAM 'About' page", "स्वयम का 'About' पेज")
  }),
  c({
    id: "swayam-digital-marketing", providerType: "government", mode: "online",
    title: tx("Basics of Digital Marketing (CEC, on SWAYAM)", "डिजिटल मार्केटिंग की बुनियाद (CEC, स्वयम पर)"),
    provider: tx("SWAYAM (Ministry of Education)", "स्वयम (शिक्षा मंत्रालय)"),
    url: "https://swayam.gov.in/",
    searchTip: tx("Search SWAYAM for \"Basics of Digital Marketing\". Courses run by semester — if it is not open now, check the next semester.", "स्वयम पर \"Basics of Digital Marketing\" खोजें। कोर्स सेमेस्टर के हिसाब से चलते हैं — अभी न खुला हो तो अगला सेमेस्टर देखें।"),
    skills: ["digital-marketing"],
    topics: tx("A SWAYAM course on the basics of digital marketing, offered by CEC (Consortium for Educational Communication).", "डिजिटल मार्केटिंग की बुनियाद पर स्वयम का कोर्स, CEC (कंसोर्टियम फ़ॉर एजुकेशनल कम्युनिकेशन) द्वारा।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Learning is free. A certificate needs a paid, in-person proctored exam.", "पढ़ाई मुफ़्त है। प्रमाणपत्र के लिए फ़ीस वाली परीक्षा केंद्र पर देनी होती है।"),
    certificate: tx("Only after passing the paid proctored exam.", "सिर्फ़ फ़ीस वाली निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["digital-marketer"],
    evidence: ev("https://manuu.edu.in/sites/default/files/SWAYAM/SWAYAM-Courses-approved-ODD-2026-for-2872027.pdf", "'Basics of Digital Marketing' (CEC) appears in a university's list of SWAYAM courses for the July 2026 semester.", "'Basics of Digital Marketing' (CEC) एक विश्वविद्यालय की जुलाई 2026 सेमेस्टर की स्वयम कोर्स सूची में है।"),
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
    evidence: ev("https://nptel.ac.in/courses/106106182", "NPTEL course pages: 'The Joy of Computing using Python' (106106182) and 'Python for Data Science' (106106212).", "NPTEL कोर्स पेज: 'The Joy of Computing using Python' (106106182) और 'Python for Data Science' (106106212)।"),
    checkedFrom: tx("NPTEL FAQ page", "NPTEL FAQ पेज")
  }),
  c({
    id: "nptel-english", providerType: "institute", mode: "online",
    title: tx("Spoken English and communication courses", "बोलचाल की अंग्रेज़ी और संवाद कौशल के कोर्स"),
    provider: tx("NPTEL / SWAYAM", "NPTEL / स्वयम"),
    url: "https://nptel.ac.in/",
    searchTip: tx("Search NPTEL or SWAYAM for \"spoken English\", \"speaking effectively\" or \"communication skills\".", "NPTEL या स्वयम पर \"spoken English\", \"speaking effectively\" या \"communication skills\" खोजें।"),
    skills: ["spoken-english"],
    topics: tx("Speaking, listening and workplace communication.", "बोलना, सुनना और काम की जगह पर बातचीत।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Course materials are free. The certification exam has a fee.", "कोर्स सामग्री मुफ़्त है। प्रमाणपत्र परीक्षा की फ़ीस लगती है।"),
    certificate: tx("After passing the proctored exam.", "निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["customer-support", "bank-po", "sales-executive", "tutor"],
    unverifiedSkills: ["customer-service"],
    evidence: ev("https://archive.nptel.ac.in/content/syllabus_pdf/109105117.pdf", "NPTEL 'Speaking Effectively' (IIT Kharagpur) syllabus covers English pronunciation, interviews, presentations and meetings.", "NPTEL 'Speaking Effectively' (IIT खड़गपुर) के सिलेबस में अंग्रेज़ी उच्चारण, इंटरव्यू, प्रेज़ेंटेशन और मीटिंग शामिल हैं।"),
    checkedFrom: tx("NPTEL FAQ and SWAYAM 'About' pages", "NPTEL FAQ और स्वयम 'About' पेज")
  }),
  c({
    id: "freecodecamp-web", providerType: "nonprofit", mode: "online",
    title: tx("Web development (HTML, CSS, JavaScript)", "वेब डेवलपमेंट (HTML, CSS, JavaScript)"),
    provider: tx("freeCodeCamp", "freeCodeCamp"),
    url: "https://www.freecodecamp.org/",
    searchTip: tx("Start with the Responsive Web Design curriculum. Lessons are in English.", "Responsive Web Design पाठ्यक्रम से शुरू करें। पाठ अंग्रेज़ी में हैं।"),
    skills: ["webdev", "programming", "data-analytics"],
    topics: tx("Build real web pages step by step and practise with projects.", "क़दम-दर-क़दम असली वेब पेज बनाएँ और प्रोजेक्ट से अभ्यास करें।"),
    prerequisites: tx("Basic computer use and some English reading.", "बेसिक कंप्यूटर और थोड़ी अंग्रेज़ी पढ़ना।"),
    cost: "free", costNote: tx("The site states that you can learn to code for free.", "वेबसाइट के अनुसार कोडिंग मुफ़्त सीख सकते हैं।"),
    relatedCareers: ["web-developer", "software-developer", "data-analyst"],
    evidence: ev("https://www.freecodecamp.org/news/freecodecamp-certifications/", "freeCodeCamp's own article lists certifications including Responsive Web Design, JavaScript Algorithms and Data Structures, and Data Analysis with Python (article dated March 2022).", "freeCodeCamp के अपने लेख में Responsive Web Design, JavaScript Algorithms and Data Structures और Data Analysis with Python जैसे प्रमाणपत्र (लेख मार्च 2022 का)।"),
    checkedFrom: tx("freeCodeCamp home page", "freeCodeCamp होम पेज")
  }),
  c({
    id: "spoken-tutorial", providerType: "institute", mode: "online",
    title: tx("Software tutorials in Hindi and English (computer basics, typing, Calc, Python, HTML, GIMP, Inkscape)", "हिंदी और अंग्रेज़ी में सॉफ़्टवेयर ट्यूटोरियल (कंप्यूटर बेसिक्स, टाइपिंग, Calc, Python, HTML, GIMP, Inkscape)"),
    provider: tx("Spoken Tutorial (developed at IIT Bombay)", "स्पोकन ट्यूटोरियल (IIT बॉम्बे में विकसित)"),
    url: "https://spoken-tutorial.org/",
    searchTip: tx("Choose a topic such as \"LibreOffice Calc\", \"Python\", \"HTML\", \"GIMP\" or \"Inkscape\", then pick Hindi or English.", "\"LibreOffice Calc\", \"Python\", \"HTML\", \"GIMP\" या \"Inkscape\" जैसा विषय चुनें, फिर हिंदी या अंग्रेज़ी चुनें।"),
    skills: ["basic-computer", "typing", "excel", "programming", "webdev", "graphic-design"],
    topics: tx("Short video tutorials for learning software on your own; many are in Hindi.", "ख़ुद सॉफ़्टवेयर सीखने के छोटे वीडियो; कई हिंदी में।"),
    prerequisites: null, cost: null, costNote: null,
    note: tx("The site now lists subscription and payment pages, so we could not confirm what is free.", "वेबसाइट पर अब सब्सक्रिप्शन और भुगतान पेज भी हैं, इसलिए हम पक्का नहीं कर सके कि क्या मुफ़्त है।"),
    relatedCareers: ["graphic-designer", "office-assistant", "web-developer", "data-analyst"],
    evidence: ev("https://spoken-tutorial.org/", "The site's course list includes Introduction to Computers, Tux Typing, LibreOffice Calc (spreadsheets), Python, Java, HTML/CSS/JavaScript, GIMP and Inkscape; 658 tutorials are listed in Hindi.", "वेबसाइट की सूची में Introduction to Computers, Tux Typing, LibreOffice Calc (स्प्रेडशीट), Python, Java, HTML/CSS/JavaScript, GIMP और Inkscape हैं; हिंदी में 658 ट्यूटोरियल दिखते हैं।"),
    checkedFrom: tx("Spoken Tutorial home page", "स्पोकन ट्यूटोरियल होम पेज")
  }),
  c({
    id: "iti-cts", providerType: "government", mode: "in-person",
    title: tx("ITI trade courses (Craftsmen Training Scheme)", "ITI ट्रेड कोर्स (शिल्पकार प्रशिक्षण योजना)"),
    provider: tx("Government and private ITIs, under DGT (Ministry of Skill Development)", "सरकारी और प्राइवेट ITI, DGT (कौशल विकास मंत्रालय) के तहत"),
    url: "https://dgt.gov.in/en/about-us",
    searchTip: tx("Ask your nearest government ITI or your State's technical education / ITI admission portal about trades and admission dates.", "ट्रेड और दाख़िले की तारीख़ों के लिए नज़दीकी सरकारी ITI या अपने राज्य के ITI दाख़िला पोर्टल से पूछें।"),
    skills: ["electrician", "plumbing", "welding", "repair", "tailoring"],
    topics: tx("Hands-on training in engineering and non-engineering trades at ITIs.", "ITI में इंजीनियरिंग और ग़ैर-इंजीनियरिंग ट्रेड की व्यावहारिक ट्रेनिंग।"),
    prerequisites: tx("Each trade sets its own entry qualification.", "हर ट्रेड की अपनी प्रवेश योग्यता है।"),
    cost: null, costNote: null,
    duration: tx("About 6 months to 2 years, depending on the trade.", "ट्रेड के हिसाब से लगभग 6 महीने से 2 साल।"),
    relatedCareers: ["electrician", "plumber", "welder", "repair-technician", "tailoring-business", "trade-apprentice", "rrb-level1"],
    evidence: ev("https://dgt.gov.in/sites/default/files/2024-02/list_of_cts_trades.pdf", "DGT's list of CTS trades includes Electrician, Wireman, Plumber, Welder, Electronic Mechanic, Refrigeration & AC Mechanic, Sewing Technology and Dress Making. Not every ITI runs every trade.", "DGT की CTS ट्रेड सूची में इलेक्ट्रीशियन, वायरमैन, प्लंबर, वेल्डर, इलेक्ट्रॉनिक मैकेनिक, रेफ़्रिजरेशन और AC मैकेनिक, सिलाई तकनीक और ड्रेस मेकिंग हैं। हर ITI में हर ट्रेड नहीं होता।"),
    checkedFrom: tx("DGT 'About us' page", "DGT का 'About us' पेज")
  }),
  c({
    id: "pmkvy-training", providerType: "government", mode: "in-person",
    title: tx("Free short-term job-role training (PMKVY)", "मुफ़्त छोटी जॉब-रोल ट्रेनिंग (PMKVY)"),
    provider: tx("PMKVY training centres, through NSDC", "PMKVY ट्रेनिंग सेंटर, NSDC के ज़रिए"),
    url: "https://nsdcindia.org/products/pradhan-mantri-kaushal-vikas-yojana",
    searchTip: tx("Ask a PMKVY centre near you which job roles they train for (for example retail, tailoring, electrician, customer service).", "पास के PMKVY सेंटर से पूछें कि वे किन कामों की ट्रेनिंग देते हैं (जैसे रिटेल, सिलाई, इलेक्ट्रीशियन, ग्राहक सेवा)।"),
    skills: [],
    topics: tx("Industry-linked job-role courses with on-the-job training. Available roles differ by centre.", "उद्योग से जुड़े जॉब-रोल कोर्स, काम पर ट्रेनिंग के साथ। हर सेंटर पर अलग कोर्स।"),
    prerequisites: tx("Each job role has its own entry requirements.", "हर जॉब रोल की अपनी शर्तें हैं।"),
    cost: "free", costNote: tx("Training cost is paid by the scheme.", "ट्रेनिंग का ख़र्च योजना उठाती है।"),
    duration: tx("Courses typically run 300–600 hours.", "कोर्स आमतौर पर 300–600 घंटे के होते हैं।"),
    certificate: tx("Nationally recognised certificate after the assessment.", "परीक्षा के बाद राष्ट्रीय स्तर पर मान्य प्रमाणपत्र।"),
    relatedCareers: [],
    note: tx("Job roles differ from centre to centre. We could not confirm which roles a centre near you offers, so this is not shown as a match for any skill — ask the centre.", "हर सेंटर पर जॉब रोल अलग होते हैं। हम पक्का नहीं कर सके कि आपके पास का सेंटर कौन-से रोल सिखाता है, इसलिए इसे किसी हुनर के मेल के रूप में नहीं दिखाते — सेंटर से पूछें।"),
    unverifiedSkills: ["customer-service", "sales", "tailoring", "electrician", "plumbing", "welding", "repair", "cooking", "digital-marketing"],
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
    evidence: ev("https://sarathi.parivahan.gov.in/sarathiservice/", "Sarathi is the government's official driving-licence service. It issues licences; it does not teach driving.", "सारथी सरकार की आधिकारिक ड्राइविंग लाइसेंस सेवा है। यह लाइसेंस देती है; ड्राइविंग नहीं सिखाती।", "2026-10-22"),
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
    evidence: ev("https://kvk.icar.gov.in/", "ICAR describes Krishi Vigyan Kendras as district centres that train farmers and rural youth in agriculture and allied work.", "ICAR के अनुसार कृषि विज्ञान केंद्र ज़िला स्तर पर किसानों और ग्रामीण युवाओं को खेती और सहायक कामों की ट्रेनिंग देते हैं।", "2026-10-22"),
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
    evidence: ev("https://ncte.gov.in/", "NCTE is the statutory body that recognises teacher-training institutes (D.El.Ed, B.Ed).", "NCTE शिक्षक-प्रशिक्षण संस्थानों (D.El.Ed, B.Ed) को मान्यता देने वाली वैधानिक संस्था है।", "2026-10-22"),
    checkedFrom: tx("NCTE official website (institution lists)", "NCTE आधिकारिक वेबसाइट (संस्थान सूची)")
  }),
  c({
    id: "tally-education", providerType: "other", mode: "both",
    title: tx("TallyPrime and GST courses (Tally Education)", "टैलीप्राइम और GST कोर्स (टैली एजुकेशन)"),
    provider: tx("Tally Education — learning arm of the makers of Tally", "टैली एजुकेशन — टैली बनाने वालों की लर्निंग शाखा"),
    url: "https://tallyeducation.com/",
    skills: ["tally", "accounting"],
    topics: tx("Courses such as TallyEssential, TallyProfessional and GST using TallyPrime.", "टैलीएसेंशियल, टैलीप्रोफ़ेशनल और टैलीप्राइम से GST जैसे कोर्स।"),
    prerequisites: null, cost: null, costNote: null,
    certificate: tx("Certificate from Tally Education (not a government qualification).", "टैली एजुकेशन का प्रमाणपत्र (सरकारी योग्यता नहीं)।"),
    relatedCareers: ["accounts-assistant"],
    evidence: ev("https://tallyeducation.com/", "Tally Education's home page lists TallyEssential, TallyProfessional, GST using TallyPrime and other TallyPrime courses. Fees are not stated there.", "टैली एजुकेशन के होम पेज पर टैलीएसेंशियल, टैलीप्रोफ़ेशनल, टैलीप्राइम से GST और दूसरे कोर्स दिखते हैं। वहाँ फ़ीस नहीं लिखी।", "2026-10-23"),
    checked: "2026-10-23",
    checkedFrom: tx("Tally Education home page", "टैली एजुकेशन होम पेज")
  }),
  c({
    id: "rseti", providerType: "institute", mode: "in-person",
    title: tx("RSETI — free self-employment training (mobile/AC repair, CCTV, computerised accounting and more)", "RSETI — मुफ़्त स्वरोज़गार ट्रेनिंग (मोबाइल/AC रिपेयर, CCTV, कंप्यूटराइज़्ड अकाउंटिंग आदि)"),
    provider: tx("Rural Self Employment Training Institutes, run by banks under Ministry of Rural Development guidelines", "ग्रामीण स्वरोज़गार प्रशिक्षण संस्थान — ग्रामीण विकास मंत्रालय के दिशानिर्देशों के तहत बैंकों द्वारा"),
    url: "https://bankofbaroda.bank.in/hi-in/baroda-swarojgar-vikas-sansthan",
    searchTip: tx("Ask the lead bank in your district for the nearest RSETI and its next batch.", "अपने ज़िले के लीड बैंक से पास के RSETI और अगले बैच के बारे में पूछें।"),
    skills: ["repair", "accounting"],
    topics: tx("Short residential-style trainings for unemployed people who want self-employment or a job.", "स्वरोज़गार या नौकरी चाहने वाले बेरोज़गार लोगों के लिए छोटी ट्रेनिंग।"),
    prerequisites: tx("Age 18–45, unemployed, with basic knowledge of the chosen field (as stated by Bank of Baroda's RSETI page).", "उम्र 18–45, बेरोज़गार, चुने गए क्षेत्र की बुनियादी जानकारी (बैंक ऑफ़ बड़ौदा RSETI पेज के अनुसार)।"),
    cost: "free", costNote: tx("Bank of Baroda's RSETI page calls the training completely free.", "बैंक ऑफ़ बड़ौदा के RSETI पेज के अनुसार ट्रेनिंग पूरी तरह मुफ़्त है।"),
    relatedCareers: ["repair-technician", "accounts-assistant"],
    evidence: ev("https://bankofbaroda.bank.in/hi-in/baroda-swarojgar-vikas-sansthan", "Bank of Baroda's RSETI page lists courses including mobile phone repair, refrigerator & AC repair, CCTV installation and computerised accounting.", "बैंक ऑफ़ बड़ौदा के RSETI पेज पर मोबाइल फ़ोन रिपेयर, फ़्रिज और AC रिपेयर, CCTV लगाना और कंप्यूटराइज़्ड अकाउंटिंग जैसे कोर्स दिखते हैं।", "2026-10-23"),
    checked: "2026-10-23",
    checkedFrom: tx("Bank of Baroda — Baroda Swarojgar Vikas Sansthan page", "बैंक ऑफ़ बड़ौदा — बड़ौदा स्वरोज़गार विकास संस्थान पेज")
  }),
  c({
    id: "hubspot-academy", providerType: "other", mode: "online",
    title: tx("HubSpot Academy — digital and social media marketing", "हबस्पॉट अकादमी — डिजिटल और सोशल मीडिया मार्केटिंग"),
    provider: tx("HubSpot (private company)", "हबस्पॉट (निजी कंपनी)"),
    url: "https://academy.hubspot.com/",
    skills: ["digital-marketing"],
    topics: tx("Short online courses and certifications such as Digital Marketing and Social Media Marketing. In English.", "डिजिटल मार्केटिंग और सोशल मीडिया मार्केटिंग जैसे छोटे ऑनलाइन कोर्स और प्रमाणपत्र। अंग्रेज़ी में।"),
    prerequisites: null,
    cost: "free", costNote: tx("HubSpot says a HubSpot Academy account is 100% free and gives unlimited access to its library.", "हबस्पॉट के अनुसार हबस्पॉट अकादमी का अकाउंट 100% मुफ़्त है और पूरी लाइब्रेरी मिलती है।"),
    certificate: tx("HubSpot certification (from HubSpot, not a government qualification).", "हबस्पॉट का प्रमाणपत्र (हबस्पॉट से, सरकारी योग्यता नहीं)।"),
    relatedCareers: ["digital-marketer"],
    evidence: ev("https://academy.hubspot.com/courses", "HubSpot Academy's course list shows a Social Media Marketing certification and a Digital Marketing certification.", "हबस्पॉट अकादमी की कोर्स सूची में सोशल मीडिया मार्केटिंग और डिजिटल मार्केटिंग प्रमाणपत्र दिखते हैं।"),
    checked: "2026-10-24",
    checkedFrom: tx("HubSpot Academy home and course pages", "हबस्पॉट अकादमी होम और कोर्स पेज")
  }),
  c({
    id: "google-skillshop", providerType: "other", mode: "online",
    title: tx("Google Skillshop — Google Ads and Analytics training", "गूगल स्किलशॉप — गूगल ऐड्स और एनालिटिक्स ट्रेनिंग"),
    provider: tx("Google (private company)", "गूगल (निजी कंपनी)"),
    url: "https://skillshop.withgoogle.com/",
    skills: ["digital-marketing"],
    topics: tx("Self-paced training on Google Ads, Google Analytics and other Google marketing tools.", "गूगल ऐड्स, गूगल एनालिटिक्स और दूसरे गूगल मार्केटिंग टूल्स पर अपनी गति से ट्रेनिंग।"),
    prerequisites: null,
    cost: "free", costNote: tx("Skillshop describes its training as free. Whether each certification is free was not checked.", "स्किलशॉप अपनी ट्रेनिंग को मुफ़्त बताता है। हर प्रमाणपत्र मुफ़्त है या नहीं, यह जाँचा नहीं गया।"),
    certificate: tx("Google product certifications (from Google, not a government qualification).", "गूगल के प्रोडक्ट प्रमाणपत्र (गूगल से, सरकारी योग्यता नहीं)।"),
    relatedCareers: ["digital-marketer"],
    evidence: ev("https://skillshop.withgoogle.com/", "Skillshop's home page offers training on Google Ads, Google Analytics and Google Marketing Platform leading to Google product certifications.", "स्किलशॉप होम पेज पर गूगल ऐड्स, गूगल एनालिटिक्स और गूगल मार्केटिंग प्लेटफ़ॉर्म की ट्रेनिंग, जिससे गूगल के प्रमाणपत्र मिलते हैं।", "2026-10-23"),
    checked: "2026-10-23",
    checkedFrom: tx("Skillshop home page", "स्किलशॉप होम पेज")
  })
];

// General portal to explore many more courses.
export const SKILL_INDIA = {
  url: "https://www.skillindiadigital.gov.in/",
  name: tx("Skill India Digital Hub", "स्किल इंडिया डिजिटल हब"),
  text: tx("The Ministry of Skill Development's platform for skill courses, certificates and job links. We have not verified which courses are free.", "कौशल विकास मंत्रालय का प्लेटफ़ॉर्म — हुनर कोर्स, प्रमाणपत्र और नौकरी के लिंक। कौन-से कोर्स मुफ़्त हैं, यह हमने नहीं जाँचा।")
};
