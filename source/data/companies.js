// Trusted company directory for the Private Job Finder.
//
// HONESTY RULES (please keep them when you add companies)
// - Company facts (founded, founders, headquarters, parent, listing, employees,
//   key people) are copied from each company's Wikipedia infobox, read on CHECKED.
//   Wikipedia is a third-party source and can be out of date — the site says so.
// - careers.checked = true only when we opened that careers page on CHECKED and it
//   identified itself as the company's own page. Otherwise we link the company's
//   main website and say the careers link was not checked.
// - fraudNotice = true only when the careers page itself warns about fake offers.
// - We do NOT claim any company is hiring now. "Often hires for" is based on the
//   company's line of business, not on a vacancy.
// - We do NOT copy ratings or reviews (review sites could not be read reliably);
//   the site links people to review platforms instead.
// - No logos are used (we have no permission to use them).

export const COMPANIES_CHECKED = "2026-10-23";

const tx = (en, hi) => ({ en, hi });
const wiki = (page) => `https://en.wikipedia.org/wiki/${page}`;

export const COMPANY_TYPES = [
  { id: "domestic", en: "Indian company", hi: "भारतीय कंपनी" },
  { id: "mnc", en: "Multinational (MNC)", hi: "बहुराष्ट्रीय (MNC)" },
  { id: "mnc-owned", en: "Indian company, foreign parent", hi: "भारतीय कंपनी, विदेशी मूल कंपनी" }
];

export const INDUSTRIES = [
  { id: "retail", en: "Retail", hi: "रिटेल" },
  { id: "it", en: "IT services", hi: "IT सेवाएँ" },
  { id: "auto", en: "Automobile", hi: "ऑटोमोबाइल" },
  { id: "banking", en: "Banking", hi: "बैंकिंग" },
  { id: "telecom", en: "Telecom", hi: "टेलीकॉम" },
  { id: "logistics", en: "Logistics & e-commerce", hi: "लॉजिस्टिक्स और ई-कॉमर्स" },
  { id: "healthcare", en: "Healthcare", hi: "स्वास्थ्य सेवा" },
  { id: "hospitality", en: "Hotels & food", hi: "होटल और खान-पान" },
  { id: "fmcg", en: "Consumer goods (FMCG)", hi: "उपभोक्ता सामान (FMCG)" },
  { id: "staffing", en: "Staffing & HR services", hi: "स्टाफ़िंग और HR सेवाएँ" }
];

const co = (o) => ({ websiteSource: "Wikipedia", fraudNotice: false, parent: null, listing: null, keyPeople: null, employees: null, founders: null, ...o });

export const COMPANIES = [
  co({
    id: "reliance-retail", name: "Reliance Retail", type: "domestic", industry: "retail",
    business: tx("Supermarkets, electronics, fashion and online shopping (Reliance Fresh/Smart, Reliance Digital, Trends, JioMart, AJIO).", "सुपरमार्केट, इलेक्ट्रॉनिक्स, फ़ैशन और ऑनलाइन ख़रीदारी (रिलायंस फ़्रेश/स्मार्ट, रिलायंस डिजिटल, ट्रेंड्स, जियोमार्ट, AJIO)।"),
    founded: "2006", founders: "Mukesh Ambani", hq: "Mumbai, Maharashtra", parent: "Reliance Industries",
    keyPeople: "Mukesh Ambani (Chairman), Isha Ambani (MD)", employees: { n: "207,552", asOf: "2024" },
    website: "https://www.relianceretail.com/", careers: { url: null, checked: false },
    cats: ["retail", "sales", "store-manager", "warehouse", "delivery", "customer-support"],
    sources: [wiki("Reliance_Retail")]
  }),
  co({
    id: "dmart", name: "Avenue Supermarts (DMart)", type: "domestic", industry: "retail",
    business: tx("DMart supermarkets selling groceries, household and daily-use goods.", "DMart सुपरमार्केट — किराना, घरेलू और रोज़मर्रा का सामान।"),
    founded: "2002", founders: "Radhakishan Damani", hq: "Powai, Mumbai", listing: "NSE: DMART · BSE: 540376",
    keyPeople: "Radhakishan Damani (Chairman), Anshul Asawa (CEO)", employees: { n: "13,971 permanent + 59,961 contractual", asOf: "2024" },
    website: "https://www.dmartindia.com/", careers: { url: null, checked: false },
    cats: ["retail", "store-manager", "warehouse", "accounts"],
    sources: [wiki("DMart")]
  }),
  co({
    id: "trent", name: "Trent (Westside, Zudio)", type: "domestic", industry: "retail",
    business: tx("Fashion retail stores: Westside, Zudio, Star Bazaar and others.", "फ़ैशन रिटेल स्टोर: वेस्टसाइड, ज़ूडियो, स्टार बाज़ार आदि।"),
    founded: "1998 (as Trent)", hq: "Mumbai, Maharashtra", parent: "Tata Group", listing: "NSE: TRENT · BSE: 500251",
    keyPeople: "Noel Tata (Chairman), P. Venkatesalu (CEO)", employees: { n: "25,277", asOf: "March 2024" },
    website: "https://trentlimited.com/", careers: { url: null, checked: false },
    cats: ["retail", "sales", "store-manager", "warehouse"],
    sources: [wiki("Trent_Limited")]
  }),
  co({
    id: "titan", name: "Titan Company", type: "domestic", industry: "retail",
    business: tx("Watches, jewellery and eyewear: Titan, Tanishq, Fastrack, Titan Eyeplus, CaratLane and others.", "घड़ियाँ, ज्वेलरी और चश्मे: टाइटन, तनिष्क, फ़ास्ट्रैक, टाइटन आईप्लस, कैरटलेन आदि।"),
    founded: "1984", founders: "Xerxes Desai", hq: "Bengaluru, Karnataka", parent: "Tata Group", listing: "NSE: TITAN · BSE: 500114",
    keyPeople: "Ajoy Chawla (MD)", employees: { n: "8,680", asOf: "2024" },
    website: "https://www.titancompany.in/", careers: { url: "https://www.titancompany.in/careers", checked: true },
    cats: ["retail", "sales", "store-manager", "manufacturing"],
    sources: [wiki("Titan_Company"), "https://www.titancompany.in/careers"]
  }),
  co({
    id: "tcs", name: "Tata Consultancy Services (TCS)", type: "domestic", industry: "it",
    business: tx("IT services, consulting and business process services.", "IT सेवाएँ, कंसल्टिंग और बिज़नेस प्रोसेस सेवाएँ।"),
    founded: "1968", founders: "J. R. D. Tata", hq: "Mumbai, Maharashtra", parent: "Tata Group", listing: "NSE: TCS · BSE: 532540",
    keyPeople: "N. Chandrasekaran (Chairman), K. Krithivasan (MD & CEO)", employees: { n: "584,519", asOf: "March 2026" },
    website: "https://www.tcs.com/", careers: { url: "https://www.tcs.com/careers", checked: true }, fraudNotice: true,
    cats: ["it", "customer-support", "office"],
    sources: [wiki("Tata_Consultancy_Services"), "https://www.tcs.com/careers"]
  }),
  co({
    id: "infosys", name: "Infosys", type: "domestic", industry: "it",
    business: tx("IT services, consulting and business process outsourcing.", "IT सेवाएँ, कंसल्टिंग और बिज़नेस प्रोसेस आउटसोर्सिंग।"),
    founded: "1981", founders: "N. R. Narayana Murthy, Nandan Nilekani and five others", hq: "Bengaluru, Karnataka", listing: "NSE: INFY · BSE: 500209 · NYSE: INFY",
    keyPeople: "Nandan Nilekani (Chairman), Salil Parekh (MD & CEO)", employees: { n: "328,594", asOf: "March 2026" },
    website: "https://www.infosys.com/", careers: { url: "https://www.infosys.com/careers/", checked: true }, fraudNotice: true,
    cats: ["it", "customer-support", "office"],
    sources: [wiki("Infosys"), "https://www.infosys.com/careers/"]
  }),
  co({
    id: "wipro", name: "Wipro", type: "domestic", industry: "it",
    business: tx("IT services, consulting and outsourcing.", "IT सेवाएँ, कंसल्टिंग और आउटसोर्सिंग।"),
    founded: "1945", founders: "M. H. Hasham Premji", hq: "Bengaluru, Karnataka", listing: "NSE: WIPRO · BSE: 507685 · NYSE: WIT",
    keyPeople: "Rishad Premji (Executive Chairman), Srini Pallia (CEO)", employees: { n: "242,021", asOf: "December 2025" },
    website: "https://www.wipro.com/", careers: { url: "https://careers.wipro.com/", checked: true }, fraudNotice: true,
    cats: ["it", "customer-support"],
    sources: [wiki("Wipro"), "https://careers.wipro.com/"]
  }),
  co({
    id: "hcltech", name: "HCLTech", type: "domestic", industry: "it",
    business: tx("IT services, engineering and digital services.", "IT सेवाएँ, इंजीनियरिंग और डिजिटल सेवाएँ।"),
    founded: "1991", founders: "Shiv Nadar", hq: "Noida, Uttar Pradesh", listing: "NSE: HCLTECH · BSE: HCLTECH",
    keyPeople: "Roshni Nadar Malhotra (Chairperson), C. Vijayakumar (CEO & MD)", employees: { n: "223,889", asOf: "June 2026" },
    website: "https://www.hcltech.com/", careers: { url: "https://careers.hcltech.com/", checked: true }, fraudNotice: true,
    cats: ["it", "customer-support"],
    sources: [wiki("HCLTech"), "https://careers.hcltech.com/"]
  }),
  co({
    id: "accenture", name: "Accenture (India)", type: "mnc", industry: "it",
    business: tx("Consulting, technology and operations services. Global company headquartered in Dublin, Ireland.", "कंसल्टिंग, टेक्नोलॉजी और ऑपरेशंस सेवाएँ। वैश्विक कंपनी, मुख्यालय डबलिन (आयरलैंड)।"),
    founded: "1989", hq: "Dublin, Ireland (global)", listing: "NYSE: ACN",
    keyPeople: "Julie Sweet (Chair & CEO, global)", employees: { n: "814,000 (worldwide)", asOf: "2026" },
    website: "https://www.accenture.com/in-en", careers: { url: "https://www.accenture.com/in-en/careers", checked: true },
    cats: ["it", "customer-support", "office"],
    sources: [wiki("Accenture"), "https://www.accenture.com/in-en/careers"]
  }),
  co({
    id: "maruti", name: "Maruti Suzuki India", type: "mnc-owned", industry: "auto",
    business: tx("Cars and commercial vehicles; large dealer and service network across India.", "कारें और व्यावसायिक वाहन; पूरे भारत में बड़ा डीलर और सर्विस नेटवर्क।"),
    founded: "1981", founders: "Government of India", hq: "New Delhi", parent: "Suzuki Motor Corporation", listing: "NSE: MARUTI · BSE: 532500",
    keyPeople: "R. C. Bhargava (Chairman), Hisashi Takeuchi (MD & CEO)", employees: { n: "40,004 (incl. 21,776 non-permanent)", asOf: "2024" },
    website: "https://www.marutisuzuki.com/", careers: { url: "https://www.marutisuzuki.com/corporate/careers", checked: true }, fraudNotice: true,
    cats: ["manufacturing", "technician", "sales"],
    notes: tx("The careers page lists ITI workmen hiring, engineering hiring and freshers. Dealership jobs are with individual dealers, not on this page.", "करियर पेज पर ITI वर्कमेन भर्ती, इंजीनियरिंग भर्ती और फ़्रेशर दिखते हैं। डीलरशिप की नौकरियाँ अलग-अलग डीलरों के पास होती हैं, इस पेज पर नहीं।"),
    sources: [wiki("Maruti_Suzuki"), "https://www.marutisuzuki.com/corporate/careers"]
  }),
  co({
    id: "hero", name: "Hero MotoCorp", type: "domestic", industry: "auto",
    business: tx("Motorcycles and scooters.", "मोटरसाइकिल और स्कूटर।"),
    founded: "1984", founders: "Brijmohan Lall Munjal", hq: "New Delhi", listing: "NSE: HEROMOTOCO · BSE: 500182",
    keyPeople: "Pawan Munjal (Executive Chairman)", employees: { n: "8,599", asOf: "2020" },
    website: "https://www.heromotocorp.com/", careers: { url: "https://www.heromotocorp.com/en-in/company/careers.html", checked: true },
    cats: ["manufacturing", "technician", "sales"],
    sources: [wiki("Hero_MotoCorp"), "https://www.heromotocorp.com/en-in/company/careers.html"]
  }),
  co({
    id: "hdfc-bank", name: "HDFC Bank", type: "domestic", industry: "banking",
    business: tx("Private-sector bank with a large branch network.", "बड़े ब्रांच नेटवर्क वाला निजी क्षेत्र का बैंक।"),
    founded: "1994–95", founders: "HDFC Ltd (led by Deepak Parekh)", hq: "Mumbai, Maharashtra", listing: "NSE: HDFCBANK · BSE: 500180 · NYSE: HDB",
    keyPeople: "Sashidhar Jagdishan (MD & CEO)", employees: { n: "211,178", asOf: "FY25" },
    website: "https://www.hdfc.bank.in/", careers: { url: "https://www.hdfc.bank.in/careers", checked: true },
    cats: ["banking", "sales", "customer-support", "office"],
    sources: [wiki("HDFC_Bank"), "https://www.hdfc.bank.in/careers"]
  }),
  co({
    id: "icici-bank", name: "ICICI Bank", type: "domestic", industry: "banking",
    business: tx("Private-sector bank and financial services.", "निजी क्षेत्र का बैंक और वित्तीय सेवाएँ।"),
    founded: "1955 (ICICI)", hq: "Mumbai, Maharashtra", listing: "NSE: ICICIBANK · BSE: 532174 · NYSE: IBN",
    keyPeople: "Sandeep Bakhshi (MD & CEO)",
    website: "https://www.icici.bank.in/", careers: { url: null, checked: false },
    cats: ["banking", "sales", "customer-support"],
    sources: [wiki("ICICI_Bank")]
  }),
  co({
    id: "airtel", name: "Bharti Airtel", type: "domestic", industry: "telecom",
    business: tx("Mobile, broadband, DTH and digital services.", "मोबाइल, ब्रॉडबैंड, DTH और डिजिटल सेवाएँ।"),
    founded: "1995", founders: "Sunil Mittal", hq: "New Delhi", listing: "NSE: BHARTIARTL · BSE: 532454",
    keyPeople: "Sunil Mittal (Chairman), Gopal Vittal (Vice Chairman & MD)", employees: { n: "28,730", asOf: "March 2026" },
    website: "https://www.airtel.com/", careers: { url: null, checked: false },
    cats: ["sales", "customer-support", "technician", "it"],
    sources: [wiki("Bharti_Airtel")]
  }),
  co({
    id: "delhivery", name: "Delhivery", type: "domestic", industry: "logistics",
    business: tx("Parcel delivery, warehousing and freight across India.", "पूरे भारत में पार्सल डिलीवरी, वेयरहाउसिंग और माल ढुलाई।"),
    founded: "2011", founders: "Sahil Barua, Mohit Tandon, Bhavesh Manglani, Suraj Saharan, Kapil Bharati", hq: "Gurugram, Haryana", listing: "NSE: DELHIVERY · BSE: 543529",
    employees: { n: "63,713", asOf: "2024" },
    website: "https://www.delhivery.com/", careers: { url: "https://www.delhivery.com/careers", checked: true },
    cats: ["delivery", "warehouse", "office"],
    sources: [wiki("Delhivery"), "https://www.delhivery.com/careers"]
  }),
  co({
    id: "amazon", name: "Amazon (India operations)", type: "mnc", industry: "logistics",
    business: tx("Online shopping, delivery network, cloud (AWS) and customer service. Global company headquartered in Seattle, USA.", "ऑनलाइन ख़रीदारी, डिलीवरी नेटवर्क, क्लाउड (AWS) और ग्राहक सेवा। वैश्विक कंपनी, मुख्यालय सिएटल (अमेरिका)।"),
    founded: "1994", founders: "Jeff Bezos", hq: "Seattle, USA (global)", listing: "NASDAQ: AMZN",
    keyPeople: "Andy Jassy (CEO, global)",
    website: "https://www.amazon.com/", careers: { url: "https://www.amazon.jobs/", checked: true },
    cats: ["warehouse", "delivery", "customer-support", "it"],
    notes: tx("amazon.jobs is Amazon's global jobs site — choose India as the location there.", "amazon.jobs अमेज़न की वैश्विक नौकरी साइट है — वहाँ स्थान में भारत चुनें।"),
    sources: [wiki("Amazon_(company)"), "https://www.amazon.jobs/"]
  }),
  co({
    id: "flipkart", name: "Flipkart", type: "mnc-owned", industry: "logistics",
    business: tx("Online shopping and its own delivery network (Ekart).", "ऑनलाइन ख़रीदारी और अपना डिलीवरी नेटवर्क।"),
    founded: "2007", founders: "Sachin Bansal, Binny Bansal", hq: "Bengaluru, Karnataka", parent: "Walmart Inc. (about 85%)",
    keyPeople: "Kalyan Krishnamurthy (CEO)", employees: { n: "22,000 (excluding Myntra)", asOf: "January 2024" },
    website: "https://www.flipkart.com/", careers: { url: "https://www.flipkartcareers.com/", checked: true },
    cats: ["warehouse", "delivery", "customer-support", "it"],
    sources: [wiki("Flipkart"), "https://www.flipkartcareers.com/"]
  }),
  co({
    id: "apollo", name: "Apollo Hospitals", type: "domestic", industry: "healthcare",
    business: tx("Hospitals, clinics, diagnostics and Apollo Pharmacy stores.", "अस्पताल, क्लिनिक, जाँच केंद्र और अपोलो फ़ार्मेसी स्टोर।"),
    founded: "1983", founders: "Prathap C. Reddy", hq: "Chennai, Tamil Nadu", listing: "NSE: APOLLOHOSP · BSE: 508869",
    keyPeople: "Prathap C. Reddy (Chairman)", employees: { n: "62,939", asOf: "2020" },
    website: "https://www.apollohospitals.com/", careers: { url: null, checked: false },
    cats: ["healthcare", "receptionist", "office", "retail"],
    sources: [wiki("Apollo_Hospitals")]
  }),
  co({
    id: "ihcl", name: "Indian Hotels Company (IHCL — Taj, Vivanta, Ginger)", type: "domestic", industry: "hospitality",
    business: tx("Hotels and resorts: Taj, SeleQtions, Vivanta, Ginger and others.", "होटल और रिसॉर्ट: ताज, सेलेक्शंस, विवांता, जिंजर आदि।"),
    founded: "1902", founders: "Jamsetji Tata", hq: "Mumbai, Maharashtra", parent: "Tata Group", listing: "NSE: INDHOTEL · BSE: 500850",
    keyPeople: "Puneet Chhatwal (MD & CEO)", employees: { n: "40,726", asOf: "2024" },
    website: "https://www.ihcltata.com/", careers: { url: "https://www.ihcltata.com/careers/", checked: true },
    cats: ["hospitality", "receptionist", "office"],
    sources: [wiki("Indian_Hotels_Company_Limited"), "https://www.ihcltata.com/careers/"]
  }),
  co({
    id: "jubilant", name: "Jubilant FoodWorks (Domino's in India)", type: "domestic", industry: "hospitality",
    business: tx("Runs Domino's Pizza, Popeyes, Dunkin' and Hong's Kitchen restaurants in India.", "भारत में डोमिनोज़ पिज़्ज़ा, पोपायज़, डंकिन' और हॉन्ग्स किचन रेस्टोरेंट चलाती है।"),
    founded: "1995", hq: "Noida, Uttar Pradesh", parent: "Jubilant Bhartia Group", listing: "NSE: JUBLFOOD · BSE: 533155",
    keyPeople: "Sameer Khetarpal (MD & CEO)", employees: { n: "34,120", asOf: "2024" },
    website: "https://www.jubilantfoodworks.com/", careers: { url: null, checked: false },
    cats: ["hospitality", "delivery", "store-manager"],
    sources: [wiki("Jubilant_FoodWorks")]
  }),
  co({
    id: "hul", name: "Hindustan Unilever (HUL)", type: "mnc-owned", industry: "fmcg",
    business: tx("Soaps, detergents, food, personal-care and home-care products.", "साबुन, डिटर्जेंट, खाने-पीने, पर्सनल केयर और घरेलू सफ़ाई के उत्पाद।"),
    founded: "1933", hq: "Mumbai, Maharashtra", parent: "Unilever (61.90%)", listing: "NSE: HINDUNILVR · BSE: 500696",
    keyPeople: "Priya Nair (CEO & MD)", employees: { n: "26,667 (incl. 18,465 workers)", asOf: "2025" },
    website: "https://www.hul.co.in/", careers: { url: "https://careers.unilever.com/en/india", checked: true }, fraudNotice: true,
    cats: ["sales", "manufacturing", "warehouse", "accounts"],
    notes: tx("The careers page states that Unilever will never ask for money or card details during recruitment.", "करियर पेज पर लिखा है कि यूनिलीवर भर्ती में कभी पैसे या कार्ड की जानकारी नहीं माँगती।"),
    sources: [wiki("Hindustan_Unilever"), "https://careers.unilever.com/en/india"]
  }),
  co({
    id: "teamlease", name: "TeamLease Services", type: "domestic", industry: "staffing",
    business: tx("Staffing, apprenticeship and skilling company that hires people for client companies.", "स्टाफ़िंग, अप्रेंटिसशिप और स्किलिंग कंपनी, जो दूसरी कंपनियों के लिए लोगों को रखती है।"),
    founded: "2000", founders: "Manish Sabharwal, Ashok Reddy", hq: "Bengaluru, Karnataka", listing: "NSE and BSE",
    website: "https://www.teamlease.com/", websiteSource: "Screener.in", careers: { url: null, checked: false },
    cats: ["retail", "sales", "customer-support", "warehouse", "delivery", "manufacturing", "office", "data-entry"],
    notes: tx("A staffing company: your employer on paper may be TeamLease while you work at a client company. Genuine staffing firms should not charge job seekers a placement fee.", "स्टाफ़िंग कंपनी: काग़ज़ पर आपका नियोक्ता TeamLease हो सकता है और काम किसी दूसरी कंपनी में। असली स्टाफ़िंग कंपनियों को नौकरी के लिए उम्मीदवार से फ़ीस नहीं लेनी चाहिए।"),
    sources: [wiki("TeamLease"), "https://www.screener.in/company/539658"]
  })
];

// Official tools anyone can use to check a local employer before joining.
export const VERIFY_TOOLS = [
  { id: "mca", url: "https://www.mca.gov.in/", name: tx("Ministry of Corporate Affairs (MCA)", "कॉर्पोरेट कार्य मंत्रालय (MCA)"),
    how: tx("Use 'View Company / LLP Master Data' to check that a company is registered and active.", "'View Company / LLP Master Data' से देखें कि कंपनी रजिस्टर्ड और चालू है।") },
  { id: "gst", url: "https://www.gst.gov.in/", name: tx("GST portal", "GST पोर्टल"),
    how: tx("Use 'Search Taxpayer' with the GSTIN printed on the shop's bill to see the legal business name.", "दुकान के बिल पर छपे GSTIN से 'Search Taxpayer' में असली व्यवसाय का नाम देखें।") },
  { id: "udyam", url: "https://udyamregistration.gov.in/", name: tx("Udyam (MSME) registration", "उद्यम (MSME) रजिस्ट्रेशन"),
    how: tx("Small businesses often have an Udyam number; the portal has a verification option.", "छोटे व्यवसायों के पास अक्सर उद्यम नंबर होता है; पोर्टल पर उसे जाँचने का विकल्प है।") },
  { id: "ncs", url: "https://www.ncs.gov.in/", name: tx("National Career Service (NCS)", "नेशनल करियर सर्विस (NCS)"),
    how: tx("Government job portal with private jobs, job fairs and counselling. NCS says it charges no fee at any stage.", "प्राइवेट नौकरियों, रोज़गार मेलों और काउंसलिंग वाला सरकारी पोर्टल। NCS के अनुसार वह किसी भी चरण में फ़ीस नहीं लेता।") },
  { id: "cyber", url: "https://cybercrime.gov.in/", name: tx("Report job fraud (cybercrime.gov.in, helpline 1930)", "नौकरी धोखाधड़ी की शिकायत (cybercrime.gov.in, हेल्पलाइन 1930)"),
    how: tx("If someone asked you for money for a job or misused your documents, report it here.", "अगर किसी ने नौकरी के लिए पैसे माँगे या आपके दस्तावेज़ों का ग़लत इस्तेमाल किया, तो यहाँ शिकायत करें।") }
];

// Where people can read employee reviews themselves (we don't copy ratings).
export const REVIEW_SITES = [
  { name: "AmbitionBox", url: "https://www.ambitionbox.com/" },
  { name: "Glassdoor", url: "https://www.glassdoor.co.in/" },
  { name: "Indeed (company reviews)", url: "https://in.indeed.com/companies" }
];
