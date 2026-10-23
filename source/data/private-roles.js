// Private-sector job roles ("designations") for the Private Job Finder.
//
// HONESTY RULES
// - These are GENERAL descriptions of common roles, not vacancies. Real employers
//   set their own requirements — the site always says "check the actual job advert".
// - eduRank = the education level employers USUALLY ask for (see PJ_EDUCATION ranks).
//   null = no usual minimum. Lower education never hides a role completely; it is
//   shown as "needs more" so the person can see the path.
// - formal = a requirement a short course cannot replace (licence, degree, certificate).
//   It is "met" if the person has any listed certificate or education level.
// - salary = id in data/salary.js, or null when we found no reliable figure.
// Checked against common job-advert patterns and PayScale role titles: 2026-10-23.

const tx = (en, hi) => ({ en, hi });
const GRAD_UP = ["graduation", "postgraduation", "professional"];

export const ROLES = [
  {
    id: "retail-sales-associate", cats: ["retail", "sales"],
    title: tx("Retail Sales Associate", "रिटेल सेल्स एसोसिएट"),
    does: tx("Helps customers in a shop or showroom, explains products, keeps shelves neat and may handle billing.",
      "दुकान या शोरूम में ग्राहकों की मदद, सामान के बारे में बताना, शेल्फ़ सजाकर रखना और कभी-कभी बिलिंग।"),
    eduRank: 2, eduNote: tx("Usually Class 10 or 12. Many stores value attitude and communication more.", "आम तौर पर 10वीं या 12वीं। कई दुकानें व्यवहार और बातचीत को ज़्यादा महत्व देती हैं।"),
    formal: null, required: ["communication"], helpful: ["customer-service", "retail-ops", "sales", "computer-basics"],
    expYears: 0, modes: ["onsite"], shifts: ["day", "rotational"], types: ["full-time", "part-time"],
    salary: "retail-sales-associate", next: ["store-supervisor"], search: "retail sales associate"
  },
  {
    id: "billing-executive", cats: ["retail", "accounts"],
    title: tx("Billing / Cashier Executive", "बिलिंग / कैशियर एग्ज़िक्यूटिव"),
    does: tx("Makes bills on the computer, handles cash and UPI payments, and keeps daily sales records.",
      "कंप्यूटर पर बिल बनाना, नक़द और UPI भुगतान संभालना, रोज़ की बिक्री का हिसाब रखना।"),
    eduRank: 3, eduNote: tx("Usually Class 12; commerce is a plus.", "आम तौर पर 12वीं; कॉमर्स हो तो बेहतर।"),
    formal: null, required: ["computer-basics", "accounting"], helpful: ["ms-office", "customer-service"],
    expYears: 0, modes: ["onsite"], shifts: ["day", "rotational"], types: ["full-time", "part-time"],
    salary: null, next: ["accounts-assistant"], search: "billing executive"
  },
  {
    id: "store-supervisor", cats: ["store-manager", "retail"],
    title: tx("Store Supervisor / Team Leader", "स्टोर सुपरवाइज़र / टीम लीडर"),
    does: tx("Runs a section or shift of a store: guides staff, checks stock and displays, and solves customer problems.",
      "दुकान के एक हिस्से या शिफ़्ट को संभालना: स्टाफ़ को काम बताना, स्टॉक और डिस्प्ले जाँचना, ग्राहकों की परेशानी सुलझाना।"),
    eduRank: 3, eduNote: tx("Usually Class 12 or graduation, plus retail experience.", "आम तौर पर 12वीं या ग्रेजुएशन, साथ में रिटेल का अनुभव।"),
    formal: null, required: ["retail-ops", "team-lead", "inventory"], helpful: ["ms-office", "sales", "customer-service"],
    expYears: 2, modes: ["onsite"], shifts: ["day", "rotational"], types: ["full-time"],
    salary: null, next: ["store-manager"], search: "store supervisor"
  },
  {
    id: "store-manager", cats: ["store-manager", "retail"],
    title: tx("Store Manager", "स्टोर मैनेजर"),
    does: tx("Responsible for a whole store: sales targets, staff, stock, customer experience and reports.",
      "पूरी दुकान की ज़िम्मेदारी: बिक्री लक्ष्य, स्टाफ़, स्टॉक, ग्राहक अनुभव और रिपोर्ट।"),
    eduRank: 5, eduNote: tx("Graduation is often asked; many managers are promoted from within after years of store work.", "अक्सर ग्रेजुएशन माँगा जाता है; कई मैनेजर सालों के काम के बाद अंदर से ही प्रमोट होते हैं।"),
    formal: null, required: ["retail-ops", "team-lead", "inventory", "sales", "ms-office"], helpful: ["spoken-english", "customer-service"],
    expYears: 4, modes: ["onsite"], shifts: ["day", "rotational"], types: ["full-time"],
    salary: "retail-store-manager", next: [], search: "store manager"
  },
  {
    id: "inventory-executive", cats: ["warehouse", "retail"],
    title: tx("Inventory / Stock Executive", "इन्वेंटरी / स्टॉक एग्ज़िक्यूटिव"),
    does: tx("Keeps stock records correct, receives and checks goods, and updates entries in software or Excel.",
      "स्टॉक का हिसाब सही रखना, माल लेना और जाँचना, सॉफ़्टवेयर या एक्सेल में एंट्री करना।"),
    eduRank: 3, eduNote: tx("Usually Class 12 or graduation.", "आम तौर पर 12वीं या ग्रेजुएशन।"),
    formal: null, required: ["inventory", "ms-office"], helpful: ["computer-basics", "accounting"],
    expYears: 1, modes: ["onsite"], shifts: ["day", "rotational"], types: ["full-time", "contract"],
    salary: null, next: ["store-supervisor"], search: "inventory executive"
  },
  {
    id: "warehouse-associate", cats: ["warehouse", "delivery"],
    title: tx("Warehouse Associate / Picker-Packer", "वेयरहाउस एसोसिएट / पिकर-पैकर"),
    does: tx("Picks, packs, scans and loads goods in a warehouse. The work is physical and often in shifts.",
      "गोदाम में सामान निकालना, पैक करना, स्कैन करना और लोड करना। काम शारीरिक है और अक्सर शिफ़्ट में।"),
    eduRank: null, eduNote: tx("Often no minimum; some ask for Class 10.", "अक्सर कोई न्यूनतम नहीं; कुछ 10वीं माँगते हैं।"),
    formal: null, required: [], helpful: ["inventory", "computer-basics"],
    expYears: 0, modes: ["onsite"], shifts: ["day", "night", "rotational"], types: ["full-time", "contract"],
    salary: "warehouse-associate", next: ["inventory-executive"], search: "warehouse associate"
  },
  {
    id: "delivery-executive", cats: ["delivery"],
    title: tx("Delivery Executive", "डिलीवरी एग्ज़िक्यूटिव"),
    does: tx("Delivers parcels or food to customers using a two-wheeler and a smartphone app, and collects payment where needed.",
      "दोपहिया और स्मार्टफ़ोन ऐप से ग्राहकों तक पार्सल या खाना पहुँचाना, ज़रूरत हो तो भुगतान लेना।"),
    eduRank: null, eduNote: tx("Usually no minimum education.", "आम तौर पर कोई न्यूनतम पढ़ाई नहीं।"),
    formal: { note: tx("A valid driving licence is required by law to drive; many companies also ask for your own two-wheeler.", "गाड़ी चलाने के लिए क़ानूनन वैध ड्राइविंग लाइसेंस ज़रूरी है; कई कंपनियाँ अपना दोपहिया भी माँगती हैं।"), anyCert: ["licence-lmv", "licence-hmv"] },
    required: ["driving"], helpful: ["communication"],
    expYears: 0, modes: ["onsite"], shifts: ["day", "flexible"], types: ["full-time", "part-time", "contract"],
    salary: "delivery-driver", next: ["inventory-executive"], search: "delivery executive"
  },
  {
    id: "driver", cats: ["delivery"],
    title: tx("Driver (car / commercial vehicle)", "ड्राइवर (कार / व्यावसायिक वाहन)"),
    does: tx("Drives company, private or goods vehicles safely and keeps basic vehicle records.",
      "कंपनी, निजी या माल वाहन सुरक्षित चलाना और गाड़ी का बुनियादी रिकॉर्ड रखना।"),
    eduRank: null, eduNote: tx("Usually no minimum education.", "आम तौर पर कोई न्यूनतम पढ़ाई नहीं।"),
    formal: { note: tx("A valid licence for that vehicle class is required by law (HMV for trucks and buses).", "उस वाहन श्रेणी का वैध लाइसेंस क़ानूनन ज़रूरी है (ट्रक-बस के लिए HMV)।"), anyCert: ["licence-lmv", "licence-hmv"] },
    required: ["driving"], helpful: ["mechanical"],
    expYears: 1, modes: ["onsite"], shifts: ["day", "rotational", "flexible"], types: ["full-time", "contract"],
    salary: null, next: [], search: "driver"
  },
  {
    id: "customer-support", cats: ["customer-support", "remote"],
    title: tx("Customer Support Executive", "कस्टमर सपोर्ट एग्ज़िक्यूटिव"),
    does: tx("Answers customer calls, chats or emails, solves simple problems and records each case on the computer.",
      "ग्राहकों के कॉल, चैट या ईमेल का जवाब देना, छोटी परेशानियाँ सुलझाना और हर केस कंप्यूटर में दर्ज करना।"),
    eduRank: 3, eduNote: tx("Usually Class 12 or graduation. Hindi or regional-language support roles exist too.", "आम तौर पर 12वीं या ग्रेजुएशन। हिंदी या क्षेत्रीय भाषा वाले सपोर्ट पद भी होते हैं।"),
    formal: null, required: ["communication", "computer-basics"], helpful: ["customer-service", "spoken-english", "typing"],
    expYears: 0, modes: ["onsite", "remote", "hybrid"], shifts: ["day", "night", "rotational"], types: ["full-time", "contract"],
    salary: "customer-service", next: ["technical-support"], search: "customer support executive"
  },
  {
    id: "office-assistant", cats: ["office"],
    title: tx("Office Assistant", "ऑफ़िस असिस्टेंट"),
    does: tx("Handles files, letters, phone calls, simple computer work and day-to-day office tasks.",
      "फ़ाइलें, चिट्ठियाँ, फ़ोन कॉल, आसान कंप्यूटर काम और ऑफ़िस के रोज़ के काम संभालना।"),
    eduRank: 3, eduNote: tx("Usually Class 12 or graduation.", "आम तौर पर 12वीं या ग्रेजुएशन।"),
    formal: null, required: ["computer-basics"], helpful: ["ms-office", "communication", "typing"],
    expYears: 0, modes: ["onsite"], shifts: ["day"], types: ["full-time"],
    salary: "office-assistant", next: ["back-office-executive", "hr-executive"], search: "office assistant"
  },
  {
    id: "receptionist", cats: ["receptionist", "hospitality", "healthcare"],
    title: tx("Receptionist / Front Desk", "रिसेप्शनिस्ट / फ़्रंट डेस्क"),
    does: tx("Welcomes visitors, answers phones, books appointments and keeps the visitor register.",
      "आने वालों का स्वागत, फ़ोन उठाना, अपॉइंटमेंट बुक करना और रजिस्टर रखना।"),
    eduRank: 3, eduNote: tx("Usually Class 12 or graduation.", "आम तौर पर 12वीं या ग्रेजुएशन।"),
    formal: null, required: ["communication", "computer-basics"], helpful: ["spoken-english", "customer-service"],
    expYears: 0, modes: ["onsite"], shifts: ["day", "rotational"], types: ["full-time"],
    salary: "receptionist", next: ["office-assistant"], search: "receptionist"
  },
  {
    id: "back-office-executive", cats: ["office", "data-entry"],
    title: tx("Back Office Executive", "बैक ऑफ़िस एग्ज़िक्यूटिव"),
    does: tx("Does computer-based support work: updating records, preparing simple reports and checking documents.",
      "कंप्यूटर पर सहायता का काम: रिकॉर्ड अपडेट करना, आसान रिपोर्ट बनाना और दस्तावेज़ जाँचना।"),
    eduRank: 3, eduNote: tx("Usually Class 12 or graduation.", "आम तौर पर 12वीं या ग्रेजुएशन।"),
    formal: null, required: ["computer-basics", "ms-office"], helpful: ["typing", "data-entry"],
    expYears: 0, modes: ["onsite", "hybrid"], shifts: ["day", "rotational"], types: ["full-time", "contract"],
    salary: null, next: ["accounts-assistant", "hr-executive"], search: "back office executive"
  },
  {
    id: "data-entry-operator", cats: ["data-entry", "remote"],
    title: tx("Data Entry Operator", "डेटा एंट्री ऑपरेटर"),
    does: tx("Types information into computer systems quickly and accurately, and checks it for errors.",
      "जानकारी को कंप्यूटर में तेज़ी और सही तरह से टाइप करना और ग़लतियाँ जाँचना।"),
    eduRank: 3, eduNote: tx("Usually Class 12. A typing speed test is common.", "आम तौर पर 12वीं। अक्सर टाइपिंग स्पीड टेस्ट होता है।"),
    formal: null, required: ["typing", "computer-basics"], helpful: ["ms-office", "data-entry"],
    expYears: 0, modes: ["onsite", "remote"], shifts: ["day", "flexible"], types: ["full-time", "part-time", "contract"],
    salary: "data-entry", next: ["back-office-executive", "computer-operator"], search: "data entry operator"
  },
  {
    id: "computer-operator", cats: ["data-entry", "office"],
    title: tx("Computer Operator", "कंप्यूटर ऑपरेटर"),
    does: tx("Uses office software for typing, records, spreadsheets, printing and online forms.",
      "टाइपिंग, रिकॉर्ड, स्प्रेडशीट, प्रिंट और ऑनलाइन फ़ॉर्म के लिए ऑफ़िस सॉफ़्टवेयर चलाना।"),
    eduRank: 3, eduNote: tx("Usually Class 12 with a computer course (for example CCC or DCA).", "आम तौर पर 12वीं के साथ कंप्यूटर कोर्स (जैसे CCC या DCA)।"),
    formal: null, required: ["computer-basics", "ms-office", "typing"], helpful: ["data-entry"],
    expYears: 0, modes: ["onsite"], shifts: ["day"], types: ["full-time", "contract"],
    salary: "computer-operator", next: ["back-office-executive"], search: "computer operator"
  },
  {
    id: "accounts-assistant", cats: ["accounts", "banking"],
    title: tx("Accounts Assistant / Junior Accountant", "अकाउंट्स असिस्टेंट / जूनियर अकाउंटेंट"),
    does: tx("Records bills and payments in Tally or other software, prepares GST data and helps with monthly accounts.",
      "टैली या दूसरे सॉफ़्टवेयर में बिल और भुगतान दर्ज करना, GST का डेटा बनाना और महीने के हिसाब में मदद।"),
    eduRank: 5, eduNote: tx("Usually B.Com; some small firms take Class 12 commerce with Tally.", "आम तौर पर B.Com; कुछ छोटी फ़र्में 12वीं कॉमर्स और टैली वालों को भी लेती हैं।"),
    formal: null, required: ["accounting", "ms-office"], helpful: ["computer-basics"],
    expYears: 0, modes: ["onsite", "hybrid"], shifts: ["day"], types: ["full-time"],
    salary: "accountant", next: [], search: "accounts assistant"
  },
  {
    id: "machine-operator", cats: ["manufacturing"],
    title: tx("Machine Operator / Production Associate", "मशीन ऑपरेटर / प्रोडक्शन एसोसिएट"),
    does: tx("Runs machines on a production line, follows safety rules and checks product quality.",
      "प्रोडक्शन लाइन पर मशीन चलाना, सुरक्षा नियम मानना और सामान की गुणवत्ता जाँचना।"),
    eduRank: 2, eduNote: tx("Usually Class 10 or ITI; many factories train on the job.", "आम तौर पर 10वीं या ITI; कई फ़ैक्ट्रियाँ काम पर ही सिखाती हैं।"),
    formal: null, required: ["manufacturing"], helpful: ["mechanical"],
    expYears: 0, modes: ["onsite"], shifts: ["day", "night", "rotational"], types: ["full-time", "contract", "apprenticeship"],
    salary: "machine-operator", next: [], search: "machine operator"
  },
  {
    id: "electrician", cats: ["technician", "manufacturing"],
    title: tx("Electrician", "इलेक्ट्रीशियन"),
    does: tx("Installs and repairs wiring, panels and electrical equipment safely.",
      "वायरिंग, पैनल और बिजली के उपकरण सुरक्षित तरीक़े से लगाना और ठीक करना।"),
    eduRank: 3, eduNote: tx("Usually ITI (Electrician / Wireman).", "आम तौर पर ITI (इलेक्ट्रीशियन / वायरमैन)।"),
    formal: { note: tx("Employers usually ask for an ITI electrical trade or a wireman/electrical licence; electrical work also has safety rules.", "नियोक्ता आम तौर पर ITI इलेक्ट्रिकल ट्रेड या वायरमैन/बिजली लाइसेंस माँगते हैं; बिजली के काम के सुरक्षा नियम भी होते हैं।"), anyCert: ["wireman", "apprentice"], anyEdu: ["iti", "diploma"] },
    required: ["electrical"], helpful: ["repair"],
    expYears: 0, modes: ["onsite"], shifts: ["day", "rotational"], types: ["full-time", "contract", "apprenticeship"],
    salary: "electrician", next: ["service-technician"], search: "electrician"
  },
  {
    id: "service-technician", cats: ["technician"],
    title: tx("Service Technician (appliance / AC / mobile / vehicle)", "सर्विस टेक्नीशियन (उपकरण / AC / मोबाइल / गाड़ी)"),
    does: tx("Visits customers or works at a service centre to install and repair products.",
      "ग्राहकों के पास जाकर या सर्विस सेंटर पर सामान लगाना और ठीक करना।"),
    eduRank: 2, eduNote: tx("Usually Class 10 or ITI with practical repair skills.", "आम तौर पर 10वीं या ITI, साथ में मरम्मत का व्यावहारिक हुनर।"),
    formal: null, required: ["repair"], helpful: ["electrical", "mechanical", "driving", "communication"],
    expYears: 0, modes: ["onsite"], shifts: ["day"], types: ["full-time", "contract"],
    salary: "field-service-technician", next: [], search: "service technician"
  },
  {
    id: "sales-executive", cats: ["sales", "banking"],
    title: tx("Sales / Field Sales Executive", "सेल्स / फ़ील्ड सेल्स एग्ज़िक्यूटिव"),
    does: tx("Meets customers or shops, explains products or services, closes sales and follows up. Often has targets and incentives.",
      "ग्राहकों या दुकानों से मिलना, सामान या सेवा समझाना, बिक्री पक्की करना और फ़ॉलो-अप। अक्सर टारगेट और इंसेंटिव होते हैं।"),
    eduRank: 3, eduNote: tx("Usually Class 12 or graduation.", "आम तौर पर 12वीं या ग्रेजुएशन।"),
    formal: null, required: ["sales", "communication"], helpful: ["driving", "spoken-english", "computer-basics"],
    expYears: 0, modes: ["onsite"], shifts: ["day"], types: ["full-time"],
    salary: "sales-executive", next: ["store-supervisor"], search: "sales executive"
  },
  {
    id: "digital-marketing-executive", cats: ["digital-marketing", "remote"],
    title: tx("Digital Marketing Executive", "डिजिटल मार्केटिंग एग्ज़िक्यूटिव"),
    does: tx("Runs social media pages, simple online ads and content, and tracks results with analytics tools.",
      "सोशल मीडिया पेज, आसान ऑनलाइन विज्ञापन और कंटेंट चलाना, और एनालिटिक्स टूल से नतीजे देखना।"),
    eduRank: 3, eduNote: tx("Often graduation, but a portfolio of real work matters a lot.", "अक्सर ग्रेजुएशन, लेकिन असली काम का पोर्टफ़ोलियो बहुत मायने रखता है।"),
    formal: null, required: ["digital-marketing", "computer-basics"], helpful: ["graphic-design", "spoken-english", "ms-office"],
    expYears: 0, modes: ["onsite", "hybrid", "remote"], shifts: ["day"], types: ["full-time", "internship", "freelance"],
    salary: "digital-marketing", next: [], search: "digital marketing executive"
  },
  {
    id: "graphic-designer", cats: ["digital-marketing", "remote"],
    title: tx("Graphic Designer", "ग्राफ़िक डिज़ाइनर"),
    does: tx("Designs posters, social media posts, logos and print material using design software.",
      "डिज़ाइन सॉफ़्टवेयर से पोस्टर, सोशल मीडिया पोस्ट, लोगो और प्रिंट सामग्री बनाना।"),
    eduRank: 3, eduNote: tx("A portfolio matters more than a degree for many employers.", "कई नियोक्ताओं के लिए डिग्री से ज़्यादा पोर्टफ़ोलियो मायने रखता है।"),
    formal: null, required: ["graphic-design", "computer-basics"], helpful: ["digital-marketing"],
    expYears: 0, modes: ["onsite", "hybrid", "remote"], shifts: ["day", "flexible"], types: ["full-time", "freelance", "internship"],
    salary: "graphic-designer", next: [], search: "graphic designer"
  },
  {
    id: "web-developer", cats: ["it", "remote"],
    title: tx("Junior Web Developer", "जूनियर वेब डेवलपर"),
    does: tx("Builds and fixes websites with HTML, CSS and JavaScript under a senior developer.",
      "सीनियर डेवलपर के साथ HTML, CSS और JavaScript से वेबसाइट बनाना और ठीक करना।"),
    eduRank: 3, eduNote: tx("Many employers ask for a degree or diploma; some hire on skills and projects.", "कई नियोक्ता डिग्री या डिप्लोमा माँगते हैं; कुछ हुनर और प्रोजेक्ट देखकर रखते हैं।"),
    formal: null, required: ["programming"], helpful: ["graphic-design", "spoken-english"],
    expYears: 0, modes: ["onsite", "hybrid", "remote"], shifts: ["day"], types: ["full-time", "internship", "freelance"],
    salary: "web-developer", next: ["software-developer"], search: "junior web developer"
  },
  {
    id: "software-developer", cats: ["it"],
    title: tx("Software Developer (fresher)", "सॉफ़्टवेयर डेवलपर (फ़्रेशर)"),
    does: tx("Writes, tests and fixes code in a team, usually after a training period at large IT companies.",
      "टीम में कोड लिखना, जाँचना और ठीक करना; बड़ी IT कंपनियों में आम तौर पर ट्रेनिंग के बाद।"),
    eduRank: 5, eduNote: tx("Usually a degree (B.Tech, BCA, B.Sc etc.); large IT firms set their own eligibility.", "आम तौर पर डिग्री (B.Tech, BCA, B.Sc आदि); बड़ी IT कंपनियाँ अपनी पात्रता ख़ुद तय करती हैं।"),
    formal: { note: tx("Most fresher hiring in large IT companies is for graduates; some have special programmes after Class 12.", "बड़ी IT कंपनियों में ज़्यादातर फ़्रेशर भर्ती ग्रेजुएट्स के लिए होती है; कुछ में 12वीं के बाद के ख़ास प्रोग्राम भी हैं।"), anyEdu: GRAD_UP },
    required: ["programming"], helpful: ["spoken-english", "computer-basics"],
    expYears: 0, modes: ["onsite", "hybrid"], shifts: ["day", "rotational"], types: ["full-time", "internship"],
    salary: "software-developer", next: [], search: "software developer fresher"
  },
  {
    id: "technical-support", cats: ["it", "customer-support"],
    title: tx("Technical Support Associate", "टेक्निकल सपोर्ट एसोसिएट"),
    does: tx("Helps users fix computer, software or network problems by phone, chat or on-site.",
      "फ़ोन, चैट या मौक़े पर जाकर कंप्यूटर, सॉफ़्टवेयर या नेटवर्क की दिक़्क़तें ठीक करने में मदद।"),
    eduRank: 4, eduNote: tx("Usually a diploma or degree in IT/computers.", "आम तौर पर IT/कंप्यूटर में डिप्लोमा या डिग्री।"),
    formal: null, required: ["computer-basics", "communication"], helpful: ["programming", "spoken-english", "customer-service"],
    expYears: 0, modes: ["onsite", "hybrid", "remote"], shifts: ["day", "night", "rotational"], types: ["full-time", "contract"],
    salary: "technical-support", next: [], search: "technical support associate"
  },
  {
    id: "hr-executive", cats: ["hr", "office"],
    title: tx("HR Executive / Recruiter", "HR एग्ज़िक्यूटिव / रिक्रूटर"),
    does: tx("Finds and calls candidates, schedules interviews, keeps employee records and helps with joining paperwork.",
      "उम्मीदवार ढूँढना और कॉल करना, इंटरव्यू तय करना, कर्मचारियों का रिकॉर्ड रखना और जॉइनिंग के काग़ज़ों में मदद।"),
    eduRank: 5, eduNote: tx("Usually graduation; an MBA (HR) helps for higher roles.", "आम तौर पर ग्रेजुएशन; ऊँचे पदों के लिए MBA (HR) मदद करता है।"),
    formal: null, required: ["hr", "ms-office", "communication"], helpful: ["spoken-english"],
    expYears: 0, modes: ["onsite", "hybrid"], shifts: ["day"], types: ["full-time", "internship"],
    salary: "hr-generalist", next: [], search: "hr executive"
  },
  {
    id: "private-teacher", cats: ["teaching"],
    title: tx("Teacher (private school)", "शिक्षक (प्राइवेट स्कूल)"),
    does: tx("Teaches a class or subject, prepares lessons, checks homework and talks with parents.",
      "कक्षा या विषय पढ़ाना, पाठ तैयार करना, होमवर्क जाँचना और अभिभावकों से बात करना।"),
    eduRank: 5, eduNote: tx("Usually graduation in the subject plus a teaching qualification.", "आम तौर पर विषय में ग्रेजुएशन और शिक्षण योग्यता।"),
    formal: { note: tx("For school teaching, a teacher-training qualification (B.Ed / D.El.Ed) is usually needed, and many schools ask for TET. Coaching centres and tuition may not.", "स्कूल में पढ़ाने के लिए आम तौर पर शिक्षक-प्रशिक्षण योग्यता (B.Ed / D.El.Ed) चाहिए, और कई स्कूल TET माँगते हैं। कोचिंग और ट्यूशन में ज़रूरी नहीं भी हो सकता।"), anyCert: ["bed", "tet"] },
    required: ["teaching", "communication"], helpful: ["spoken-english", "computer-basics"],
    expYears: 0, modes: ["onsite"], shifts: ["day"], types: ["full-time", "part-time"],
    salary: "teacher", next: [], search: "school teacher"
  },
  {
    id: "hotel-service-staff", cats: ["hospitality"],
    title: tx("Hotel / Restaurant Service Staff", "होटल / रेस्टोरेंट सर्विस स्टाफ़"),
    does: tx("Serves guests, takes orders, keeps the dining or room area clean and follows hygiene rules.",
      "मेहमानों को सेवा देना, ऑर्डर लेना, डाइनिंग या कमरे साफ़ रखना और स्वच्छता नियम मानना।"),
    eduRank: 2, eduNote: tx("Usually Class 10 or 12; a hospitality course helps.", "आम तौर पर 10वीं या 12वीं; हॉस्पिटैलिटी कोर्स मदद करता है।"),
    formal: null, required: ["hospitality", "communication"], helpful: ["spoken-english", "customer-service"],
    expYears: 0, modes: ["onsite"], shifts: ["day", "night", "rotational"], types: ["full-time", "part-time", "contract"],
    salary: null, next: ["receptionist"], search: "hotel steward"
  },
  {
    id: "patient-care-assistant", cats: ["healthcare"],
    title: tx("Patient Care / General Duty Assistant", "पेशेंट केयर / जनरल ड्यूटी असिस्टेंट"),
    does: tx("Helps nurses with patient comfort, movement, hygiene and basic care in hospitals or homes.",
      "अस्पताल या घर में मरीज़ के आराम, उठने-बैठने, सफ़ाई और बुनियादी देखभाल में नर्सों की मदद।"),
    eduRank: 2, eduNote: tx("Usually Class 10 or 12 plus a certified care-assistant course.", "आम तौर पर 10वीं या 12वीं और प्रमाणित केयर-असिस्टेंट कोर्स।"),
    formal: { note: tx("Hospitals usually ask for a recognised health-care assistant certificate. Nursing jobs need a nursing qualification and registration — a short course cannot replace that.", "अस्पताल आम तौर पर मान्य हेल्थ-केयर असिस्टेंट प्रमाणपत्र माँगते हैं। नर्स की नौकरी के लिए नर्सिंग योग्यता और रजिस्ट्रेशन चाहिए — छोटा कोर्स उसकी जगह नहीं ले सकता।"), anyCert: ["health-cert"] },
    required: ["healthcare", "communication"], helpful: [],
    expYears: 0, modes: ["onsite"], shifts: ["day", "night", "rotational"], types: ["full-time", "contract"],
    salary: "nursing-assistant", next: [], search: "patient care assistant"
  }
];
