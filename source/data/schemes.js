// Government Scheme Finder records.
//
// RULES
// - Every fact below was read on an official government or public-sector
//   bank page on `checked` (the page is named in `checkedFrom`).
// - Rules change. The site always tells people to confirm on the official page.
// - `hints` are only used to say "may be worth checking" — NEVER "eligible".
//   Conditions we cannot check (income, BPL status, family rules) go in the
//   eligibility list and are always shown to the user.

export const SCHEME_CATEGORIES = [
  { id: "training", en: "Education & skill training", hi: "शिक्षा और हुनर प्रशिक्षण" },
  { id: "employment", en: "Employment support & internships", hi: "रोज़गार सहायता और इंटर्नशिप" },
  { id: "apprenticeship", en: "Apprenticeships", hi: "अप्रेंटिसशिप" },
  { id: "entrepreneurship", en: "Entrepreneurship & artisans", hi: "उद्यमिता और कारीगर" },
  { id: "finance", en: "Business finance", hi: "व्यवसाय के लिए ऋण" }
];

const CHECKED = "2026-10-22";
const tx = (en, hi) => ({ en, hi });

export const SCHEMES = [
  {
    id: "pmkvy", category: "training",
    name: tx("Pradhan Mantri Kaushal Vikas Yojana (PMKVY 4.0)", "प्रधानमंत्री कौशल विकास योजना (PMKVY 4.0)"),
    ministry: tx("Ministry of Skill Development & Entrepreneurship, through NSDC", "कौशल विकास और उद्यमिता मंत्रालय, NSDC के ज़रिए"),
    purpose: tx("Free, industry-linked skill training to make young people employable.", "युवाओं को रोज़गार लायक़ बनाने के लिए मुफ़्त, उद्योग से जुड़ी हुनर ट्रेनिंग।"),
    audience: tx("Unemployed youth and school or college dropouts; special support for some groups.", "बेरोज़गार युवा और स्कूल/कॉलेज छोड़ चुके लोग; कुछ वर्गों को ख़ास मदद।"),
    eligibility: [
      tx("Short-term training is aimed at unemployed youth and school/college dropouts.", "शॉर्ट-टर्म ट्रेनिंग बेरोज़गार युवाओं और पढ़ाई छोड़ चुके लोगों के लिए है।"),
      tx("Each course has its own entry requirements — check with the training centre.", "हर कोर्स की अपनी शर्तें हैं — ट्रेनिंग सेंटर से पूछें।")
    ],
    benefits: [
      tx("Training cost is paid by the scheme — free for the candidate.", "ट्रेनिंग का ख़र्च योजना उठाती है — उम्मीदवार के लिए मुफ़्त।"),
      tx("Short-term courses with on-the-job training.", "काम पर ट्रेनिंग के साथ छोटे कोर्स।"),
      tx("Recognition of Prior Learning (RPL) can certify skills you already have.", "पहले से सीखे हुनर का प्रमाणपत्र (RPL) मिल सकता है।"),
      tx("Nationally recognised certificate after passing the assessment.", "परीक्षा पास करने पर राष्ट्रीय स्तर का मान्य प्रमाणपत्र।")
    ],
    howToApply: [
      tx("Contact NSDC through the official PMKVY / Skill India Digital channels or a nearby PMKVY training centre.", "आधिकारिक PMKVY / स्किल इंडिया डिजिटल माध्यम या पास के PMKVY ट्रेनिंग सेंटर से संपर्क करें।")
    ],
    officialUrl: "https://nsdcindia.org/products/pradhan-mantri-kaushal-vikas-yojana",
    checkedFrom: tx("NSDC official page", "NSDC की आधिकारिक वेबसाइट"), checked: CHECKED, note: null,
    hints: { goals: ["skill-development", "career-change", "private-job"], employment: ["unemployed", "student"] }
  },
  {
    id: "ddugky", category: "training",
    name: tx("Deen Dayal Upadhyaya Grameen Kaushalya Yojana (DDU-GKY)", "दीन दयाल उपाध्याय ग्रामीण कौशल्य योजना (DDU-GKY)"),
    ministry: tx("Rural development programme, run with State skill missions", "ग्रामीण विकास कार्यक्रम, राज्य कौशल मिशनों के साथ"),
    purpose: tx("Skill training linked to jobs for rural youth from poor families.", "ग़रीब परिवारों के ग्रामीण युवाओं के लिए नौकरी से जुड़ी हुनर ट्रेनिंग।"),
    audience: tx("Rural youth aged 15–35 from poor (BPL) households.", "15–35 साल के ग़रीब (BPL) परिवारों के ग्रामीण युवा।"),
    eligibility: [
      tx("Rural youth aged 15–35.", "15–35 साल के ग्रामीण युवा।"),
      tx("From a poor household (BPL category). We cannot check this — your State skill mission can.", "ग़रीब परिवार (BPL) से हों। यह हम नहीं जाँच सकते — राज्य कौशल मिशन जाँचेगा।"),
      tx("Priority for SC/ST, minorities, women and persons with disabilities.", "SC/ST, अल्पसंख्यक, महिलाओं और दिव्यांगों को प्राथमिकता।")
    ],
    benefits: [
      tx("Free skill training; residential training is available.", "मुफ़्त हुनर ट्रेनिंग; रहने की सुविधा वाली ट्रेनिंग भी।"),
      tx("Placement support after training.", "ट्रेनिंग के बाद नौकरी दिलाने में मदद।")
    ],
    howToApply: [
      tx("Register through your State skill mission or a DDU-GKY training partner.", "अपने राज्य कौशल मिशन या DDU-GKY ट्रेनिंग पार्टनर के ज़रिए रजिस्टर करें।"),
      tx("Choose a course, complete training and assessment, then get placement help.", "कोर्स चुनें, ट्रेनिंग और परीक्षा पूरी करें, फिर नौकरी में मदद पाएँ।")
    ],
    officialUrl: "https://wb.gov.in/government-schemes-details-deen-dayal-upadhyaya-grameen-kaushalya-yojana.aspx",
    checkedFrom: tx("Government of West Bengal scheme page", "पश्चिम बंगाल सरकार का योजना पेज"), checked: CHECKED,
    note: tx("Run by each State. Ask your State Rural Livelihood / skill mission for local centres.", "हर राज्य चलाता है। स्थानीय केंद्रों के लिए अपने राज्य ग्रामीण आजीविका / कौशल मिशन से पूछें।"),
    hints: { goals: ["skill-development", "private-job"], ageRanges: ["under18", "18-21", "22-25", "26-30", "31-35"] }
  },
  {
    id: "naps", category: "apprenticeship",
    name: tx("National Apprenticeship Promotion Scheme (NAPS)", "राष्ट्रीय अप्रेंटिसशिप प्रोत्साहन योजना (NAPS)"),
    ministry: tx("Ministry of Skill Development & Entrepreneurship", "कौशल विकास और उद्यमिता मंत्रालय"),
    purpose: tx("Encourages companies to take apprentices, with government support towards the stipend.", "कंपनियों को अप्रेंटिस रखने के लिए प्रोत्साहन; स्टाइपेंड में सरकार की मदद।"),
    audience: tx("People who want paid on-the-job training in a trade or job role.", "जो किसी ट्रेड या काम में स्टाइपेंड के साथ ट्रेनिंग चाहते हैं।"),
    eligibility: [
      tx("You must have the minimum qualification set for the trade or role.", "उस ट्रेड या काम के लिए तय न्यूनतम योग्यता होनी चाहिए।"),
      tx("Age and other conditions follow the apprenticeship rules — check the portal.", "उम्र और अन्य शर्तें अप्रेंटिसशिप नियमों के अनुसार — पोर्टल देखें।")
    ],
    benefits: [
      tx("Stipend from the employer, with government support towards part of it.", "कंपनी से स्टाइपेंड, जिसका एक हिस्सा सरकार देती है।"),
      tx("Basic training support for freshers without prior training.", "बिना पहले की ट्रेनिंग वाले फ्रेशर के लिए बेसिक ट्रेनिंग में मदद।")
    ],
    howToApply: [
      tx("Register as a candidate on the official national apprenticeship portal and apply to openings.", "आधिकारिक राष्ट्रीय अप्रेंटिसशिप पोर्टल पर उम्मीदवार के रूप में रजिस्टर करें और आवेदन करें।")
    ],
    officialUrl: "https://www.myscheme.gov.in/schemes/naps",
    checkedFrom: tx("MSDE NAPS FAQ document", "MSDE का NAPS FAQ दस्तावेज़"), checked: CHECKED,
    note: tx("The support amounts have changed over time, so we do not show them. Check the current rules.", "सहायता राशि समय के साथ बदली है, इसलिए हम नहीं दिखाते। मौजूदा नियम देखें।"),
    hints: { goals: ["apprenticeship", "skill-development"], education: ["class10", "class12", "iti", "diploma", "graduation"] }
  },
  {
    id: "nats", category: "apprenticeship",
    name: tx("National Apprenticeship Training Scheme (NATS 2.0)", "राष्ट्रीय अप्रेंटिसशिप प्रशिक्षण योजना (NATS 2.0)"),
    ministry: tx("Ministry of Education", "शिक्षा मंत्रालय"),
    purpose: tx("Apprenticeships with a monthly stipend for young graduates and diploma holders.", "युवा ग्रेजुएट और डिप्लोमा धारकों के लिए मासिक स्टाइपेंड वाली अप्रेंटिसशिप।"),
    audience: tx("Graduates and diploma holders.", "ग्रेजुएट और डिप्लोमा धारक।"),
    eligibility: [
      tx("For graduates and diploma holders — the portal lists the exact conditions, including how recently you passed.", "ग्रेजुएट और डिप्लोमा धारकों के लिए — पास होने के साल समेत पूरी शर्तें पोर्टल पर हैं।")
    ],
    benefits: [
      tx("Monthly stipend; the government's share is paid directly to your bank account (DBT).", "मासिक स्टाइपेंड; सरकार का हिस्सा सीधे आपके बैंक खाते में (DBT)।"),
      tx("Certificate after completing the apprenticeship.", "अप्रेंटिसशिप पूरी होने पर प्रमाणपत्र।")
    ],
    howToApply: [
      tx("Register on the NATS 2.0 portal, search openings and apply.", "NATS 2.0 पोर्टल पर रजिस्टर करें, मौक़े खोजें और आवेदन करें।")
    ],
    officialUrl: "https://nats.education.gov.in/",
    checkedFrom: tx("PIB press release, Ministry of Education (30 July 2024)", "PIB प्रेस विज्ञप्ति, शिक्षा मंत्रालय (30 जुलाई 2024)"), checked: CHECKED, note: null,
    hints: { goals: ["apprenticeship", "internship", "private-job"], education: ["diploma", "graduation"] }
  },
  {
    id: "pm-internship", category: "employment",
    name: tx("PM Internship Scheme", "पीएम इंटर्नशिप योजना"),
    ministry: tx("Ministry of Corporate Affairs", "कॉर्पोरेट कार्य मंत्रालय"),
    purpose: tx("12-month internships in top companies for young people not in full-time work or study.", "युवाओं के लिए बड़ी कंपनियों में 12 महीने की इंटर्नशिप।"),
    audience: tx("Young people aged 21–24 with 10th, 12th, ITI, diploma or graduation.", "21–24 साल के युवा, जिनके पास 10वीं, 12वीं, ITI, डिप्लोमा या ग्रेजुएशन है।"),
    eligibility: [
      tx("Age 21 to 24 years (as published for the pilot).", "उम्र 21 से 24 साल (पायलट के लिए प्रकाशित)।"),
      tx("Qualification such as 10th, 12th, ITI, polytechnic diploma or graduation.", "योग्यता जैसे 10वीं, 12वीं, ITI, पॉलिटेक्निक डिप्लोमा या ग्रेजुएशन।"),
      tx("Family income and family government-job conditions apply. We cannot check these.", "परिवार की आय और परिवार में सरकारी नौकरी से जुड़ी शर्तें लागू हैं। ये हम नहीं जाँच सकते।")
    ],
    benefits: [
      tx("Monthly assistance and a one-time grant (amounts published for the pilot: ₹5,000 per month and ₹6,000 once).", "मासिक सहायता और एक बार की राशि (पायलट के लिए प्रकाशित: ₹5,000 प्रति माह और ₹6,000 एक बार)।"),
      tx("Real work experience for 12 months, at least half of it on the job.", "12 महीने का असली काम का अनुभव, कम से कम आधा समय काम पर।")
    ],
    howToApply: [
      tx("Register on the official PM Internship portal and choose up to 5 internships.", "आधिकारिक पीएम इंटर्नशिप पोर्टल पर रजिस्टर करें और अधिकतम 5 इंटर्नशिप चुनें।")
    ],
    officialUrl: "https://pminternship.mca.gov.in/",
    checkedFrom: tx("BPUT (Odisha govt university) notice on the scheme", "BPUT (ओडिशा सरकारी विश्वविद्यालय) की योजना सूचना"), checked: CHECKED,
    note: tx("These details are from the pilot round. Rules and amounts may have changed — confirm on the portal.", "ये विवरण पायलट चरण के हैं। नियम और राशि बदल सकते हैं — पोर्टल पर पक्का करें।"),
    hints: { goals: ["internship", "private-job", "skill-development"], ageRanges: ["18-21", "22-25"], exactAge: [21, 24],
      education: ["class10", "class12", "iti", "diploma", "graduation"] }
  },
  {
    id: "pmegp", category: "finance",
    name: tx("Prime Minister's Employment Generation Programme (PMEGP)", "प्रधानमंत्री रोज़गार सृजन कार्यक्रम (PMEGP)"),
    ministry: tx("Implemented by Khadi and Village Industries Commission (KVIC)", "खादी और ग्रामोद्योग आयोग (KVIC) द्वारा लागू"),
    purpose: tx("Bank loan with a subsidy to start a new micro-enterprise in rural or urban areas.", "गाँव या शहर में नया छोटा उद्यम शुरू करने के लिए सब्सिडी के साथ बैंक ऋण।"),
    audience: tx("Individuals above 18 and some groups (SHGs, societies, co-operatives, trusts).", "18 साल से ऊपर के व्यक्ति और कुछ समूह (SHG, सोसायटी, सहकारी समितियाँ, ट्रस्ट)।"),
    eligibility: [
      tx("Individuals above 18 years of age.", "18 साल से ज़्यादा उम्र के व्यक्ति।"),
      tx("At least 8th pass for some projects (for example, larger manufacturing projects).", "कुछ प्रोजेक्ट (जैसे बड़े मैन्युफ़ैक्चरिंग प्रोजेक्ट) के लिए कम से कम 8वीं पास।"),
      tx("Only for new units. Entrepreneurship training (EDP) is mandatory.", "सिर्फ़ नए उद्यम के लिए। उद्यमिता प्रशिक्षण (EDP) ज़रूरी है।")
    ],
    benefits: [
      tx("Margin-money subsidy on project cost (higher for special categories and rural areas).", "प्रोजेक्ट लागत पर मार्जिन मनी सब्सिडी (विशेष वर्गों और ग्रामीण इलाक़ों में ज़्यादा)।"),
      tx("Banks fund most of the project; your own contribution is 10% (general) or 5% (special categories).", "प्रोजेक्ट का ज़्यादातर पैसा बैंक देता है; आपका हिस्सा 10% (सामान्य) या 5% (विशेष वर्ग)।")
    ],
    howToApply: [
      tx("Apply online on the KVIC PMEGP e-portal (\"Application for New Unit\") and upload documents.", "KVIC PMEGP ई-पोर्टल पर ऑनलाइन आवेदन करें (\"Application for New Unit\") और दस्तावेज़ अपलोड करें।")
    ],
    officialUrl: "https://www.kviconline.gov.in/pmegpeportal/pmegphome/index.jsp",
    checkedFrom: tx("Government of Goa, Directorate of Industries scheme page", "गोवा सरकार, उद्योग निदेशालय का योजना पेज"), checked: CHECKED,
    note: tx("A subsidy is decided by the bank and KVIC after appraisal. It is not automatic.", "सब्सिडी बैंक और KVIC जाँच के बाद तय करते हैं। यह अपने-आप नहीं मिलती।"),
    hints: { goals: ["business"], notAgeRanges: ["under18"] }
  },
  {
    id: "mudra", category: "finance",
    name: tx("Pradhan Mantri MUDRA Yojana (PMMY)", "प्रधानमंत्री मुद्रा योजना (PMMY)"),
    ministry: tx("Department of Financial Services, Ministry of Finance", "वित्तीय सेवा विभाग, वित्त मंत्रालय"),
    purpose: tx("Loans without collateral for micro enterprises in non-farm activities.", "ग़ैर-कृषि गतिविधियों वाले छोटे उद्यमों के लिए बिना गिरवी के ऋण।"),
    audience: tx("Micro businesses, including allied activities such as poultry, dairy and beekeeping.", "छोटे व्यापार, जिनमें मुर्ग़ी पालन, डेयरी, मधुमक्खी पालन जैसे काम भी शामिल।"),
    eligibility: [
      tx("For non-farm micro enterprises (including allied activities like dairy and poultry).", "ग़ैर-कृषि छोटे उद्यमों के लिए (डेयरी, मुर्ग़ी पालन जैसे काम भी)।"),
      tx("The bank decides based on your business plan and its own checks.", "बैंक आपकी व्यवसाय योजना और अपनी जाँच के आधार पर फ़ैसला करता है।")
    ],
    benefits: [
      tx("Shishu: up to ₹50,000. Kishore: above ₹50,000 up to ₹5 lakh. Tarun: above ₹5 lakh up to ₹10 lakh.", "शिशु: ₹50,000 तक। किशोर: ₹50,000 से ₹5 लाख तक। तरुण: ₹5 लाख से ₹10 लाख तक।"),
      tx("Tarun Plus: above ₹10 lakh up to ₹20 lakh, for those who repaid a Tarun loan well.", "तरुण प्लस: ₹10 लाख से ₹20 लाख तक, उनके लिए जिन्होंने तरुण ऋण ठीक से चुकाया।"),
      tx("Collateral is not required.", "गिरवी (कोलैटरल) की ज़रूरत नहीं।")
    ],
    howToApply: [
      tx("Approach a bank, regional rural bank, small finance bank, NBFC or MFI that gives MUDRA loans.", "मुद्रा ऋण देने वाले बैंक, ग्रामीण बैंक, स्मॉल फ़ाइनेंस बैंक, NBFC या MFI से संपर्क करें।")
    ],
    officialUrl: "https://financialservices.gov.in/index.php/pradhan-mantri-mudra-yojana-pmmy",
    checkedFrom: tx("Department of Financial Services page", "वित्तीय सेवा विभाग का पेज"), checked: CHECKED,
    note: tx("A loan is never guaranteed. Avoid agents who promise loans for a fee.", "ऋण की कोई गारंटी नहीं। फ़ीस लेकर ऋण का वादा करने वाले एजेंटों से बचें।"),
    hints: { goals: ["business"] }
  },
  {
    id: "standup-india", category: "finance",
    name: tx("Stand-Up India", "स्टैंड-अप इंडिया"),
    ministry: tx("Bank loan scheme of the Government of India", "भारत सरकार की बैंक ऋण योजना"),
    purpose: tx("Bank loans for SC/ST and women entrepreneurs to start a first-time (greenfield) enterprise.", "SC/ST और महिला उद्यमियों के लिए पहला (नया) उद्यम शुरू करने हेतु बैंक ऋण।"),
    audience: tx("SC/ST and/or women entrepreneurs above 18 years.", "18 साल से ऊपर के SC/ST और/या महिला उद्यमी।"),
    eligibility: [
      tx("SC/ST and/or women entrepreneurs, above 18 years.", "SC/ST और/या महिला उद्यमी, 18 साल से ऊपर।"),
      tx("Only for a new (greenfield) enterprise in manufacturing, services or trading.", "सिर्फ़ नए (ग्रीनफ़ील्ड) उद्यम के लिए — निर्माण, सेवा या व्यापार।"),
      tx("Must not be in default to any bank or financial institution.", "किसी बैंक या वित्तीय संस्था का डिफ़ॉल्टर नहीं होना चाहिए।")
    ],
    benefits: [
      tx("Composite loan (term loan and/or working capital) above ₹10 lakh and up to ₹1 crore.", "₹10 लाख से ऊपर और ₹1 करोड़ तक का ऋण (टर्म लोन और/या वर्किंग कैपिटल)।"),
      tx("Repayment up to 7 years, with up to 18 months moratorium (as per the SBI page).", "7 साल तक चुकाने का समय, 18 महीने तक की छूट अवधि के साथ (SBI पेज के अनुसार)।")
    ],
    howToApply: [
      tx("Register on the Stand-Up India portal, answer the questions, then contact banks from your dashboard.", "स्टैंड-अप इंडिया पोर्टल पर रजिस्टर करें, सवालों के जवाब दें, फिर डैशबोर्ड से बैंकों से संपर्क करें।")
    ],
    officialUrl: "https://sbi.bank.in/web/get-business-product-information/stand-up-india",
    checkedFrom: tx("State Bank of India scheme page", "भारतीय स्टेट बैंक का योजना पेज"), checked: CHECKED,
    note: tx("The page we read says the scheme was extended up to FY2025. Confirm it is still open with your bank.", "हमने जो पेज पढ़ा, उसमें योजना FY2025 तक बढ़ाने की बात है। अपने बैंक से पक्का करें कि यह अभी चालू है।"),
    hints: { goals: ["business"], notAgeRanges: ["under18"], genderOrCategory: { gender: ["female"], category: ["sc", "st"] } }
  },
  {
    id: "pm-vishwakarma", category: "entrepreneurship",
    name: tx("PM Vishwakarma", "पीएम विश्वकर्मा"),
    ministry: tx("Ministry of Micro, Small and Medium Enterprises (MSME)", "सूक्ष्म, लघु और मध्यम उद्यम मंत्रालय (MSME)"),
    purpose: tx("Recognition, training, tools and low-interest credit for traditional artisans in 18 trades.", "18 पारंपरिक कामों के कारीगरों के लिए पहचान, ट्रेनिंग, औज़ार और कम ब्याज पर ऋण।"),
    audience: tx("Artisans such as tailors (darzi), carpenters, masons, barbers, potters, cobblers, goldsmiths and others.", "दर्ज़ी, बढ़ई, राजमिस्त्री, नाई, कुम्हार, मोची, सुनार जैसे कारीगर।"),
    eligibility: [
      tx("You must work in one of the 18 listed traditional trades (tailor is one of them).", "18 सूचीबद्ध पारंपरिक कामों में से किसी एक में काम करते हों (दर्ज़ी उनमें से एक है)।"),
      tx("Registration needs Aadhaar-based e-KYC at a Common Service Centre. CareerSaathi never asks for your Aadhaar.", "पंजीकरण के लिए जन सेवा केंद्र पर आधार e-KYC ज़रूरी है। करियरसाथी आपका आधार कभी नहीं माँगता।"),
      tx("Other conditions (family and earlier loans) apply — check the official portal.", "अन्य शर्तें (परिवार और पुराने ऋण से जुड़ी) लागू हैं — आधिकारिक पोर्टल देखें।")
    ],
    benefits: [
      tx("PM Vishwakarma certificate and ID card.", "पीएम विश्वकर्मा प्रमाणपत्र और पहचान पत्र।"),
      tx("Skill training with a stipend of ₹500 per day.", "₹500 प्रति दिन स्टाइपेंड के साथ हुनर ट्रेनिंग।"),
      tx("Toolkit e-voucher of up to ₹15,000.", "₹15,000 तक का औज़ार ई-वाउचर।"),
      tx("Collateral-free loan of up to ₹3 lakh at 5% interest.", "5% ब्याज पर ₹3 लाख तक का बिना गिरवी ऋण।"),
      tx("Help with digital payments and marketing.", "डिजिटल भुगतान और मार्केटिंग में मदद।")
    ],
    howToApply: [
      tx("Visit your nearest Common Service Centre (CSC) with the required documents and register.", "ज़रूरी दस्तावेज़ों के साथ नज़दीकी जन सेवा केंद्र (CSC) जाएँ और पंजीकरण कराएँ।")
    ],
    officialUrl: "https://pmvishwakarma.gov.in/",
    checkedFrom: tx("Government of Goa, Directorate of Industries scheme page", "गोवा सरकार, उद्योग निदेशालय का योजना पेज"), checked: CHECKED, note: null,
    hints: { goals: ["business", "skill-development"], skills: ["tailoring"], requireSkill: true }
  }
];

// The general discovery portal, always shown.
export const MYSCHEME = {
  url: "https://www.myscheme.gov.in/",
  name: tx("myScheme — search all government schemes", "myScheme — सभी सरकारी योजनाएँ खोजें"),
  text: tx("The official national platform to discover central and state schemes and check what you may qualify for.", "केंद्र और राज्य की योजनाएँ खोजने और अपनी पात्रता देखने का आधिकारिक राष्ट्रीय प्लेटफ़ॉर्म।")
};
