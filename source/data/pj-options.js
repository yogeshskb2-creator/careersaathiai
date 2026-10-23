// Answer lists for the Private Job Finder form (English + Hindi).
// Kept separate from data/options.js so the existing Career Profile is not affected.

const o = (id, en, hi, extra = {}) => ({ id, en, hi, ...extra });

// rank = rough order of formal education, used only to compare with what employers
// usually ask. "other" has no rank, so it is never used to rule anyone out.
export const PJ_EDUCATION = [
  o("none", "No formal qualification", "कोई औपचारिक पढ़ाई नहीं", { rank: 0 }),
  o("below10", "Below Class 10", "10वीं से कम", { rank: 1 }),
  o("class10", "Class 10", "10वीं", { rank: 2 }),
  o("class12", "Class 12", "12वीं", { rank: 3 }),
  o("iti", "ITI", "ITI", { rank: 3 }),
  o("diploma", "Diploma", "डिप्लोमा", { rank: 4 }),
  o("graduation", "Undergraduate degree", "ग्रेजुएशन (स्नातक)", { rank: 5 }),
  o("postgraduation", "Postgraduate degree", "पोस्ट ग्रेजुएशन", { rank: 6 }),
  o("professional", "Professional degree", "प्रोफ़ेशनल डिग्री", { rank: 6 }),
  o("other", "Other qualification", "अन्य योग्यता", { rank: null })
];

export const PJ_STREAMS = [
  o("science", "Science", "साइंस"),
  o("commerce", "Commerce", "कॉमर्स"),
  o("arts", "Arts / Humanities", "आर्ट्स"),
  o("technical", "Technical / Engineering / ITI trade", "तकनीकी / इंजीनियरिंग / ITI ट्रेड"),
  o("computers", "Computers / IT", "कंप्यूटर / IT"),
  o("health", "Health / Nursing / Pharmacy", "स्वास्थ्य / नर्सिंग / फ़ार्मेसी"),
  o("other", "Other", "अन्य")
];

export const PJ_STUDY_STATUS = [
  o("completed", "Completed", "पूरी हो गई"),
  o("studying", "Currently studying", "अभी पढ़ रहे हैं")
];

export const PJ_INSTITUTION = [
  o("government", "Government", "सरकारी"),
  o("private", "Private", "प्राइवेट"),
  o("open", "Open / distance learning", "ओपन / दूरस्थ शिक्षा"),
  o("other", "Other", "अन्य")
];

export const PJ_CERTS = [
  o("ccc", "CCC (NIELIT)", "CCC (NIELIT)"),
  o("olevel", "O Level (NIELIT)", "O लेवल (NIELIT)"),
  o("tally", "Tally certificate", "टैली प्रमाणपत्र"),
  o("typing", "Typing certificate", "टाइपिंग प्रमाणपत्र"),
  o("licence-lmv", "Driving licence (LMV / two-wheeler)", "ड्राइविंग लाइसेंस (LMV / दोपहिया)"),
  o("licence-hmv", "Driving licence (HMV)", "ड्राइविंग लाइसेंस (HMV)"),
  o("wireman", "Wireman / electrical licence", "वायरमैन / बिजली लाइसेंस"),
  o("nsqf", "Skill India / PMKVY certificate", "स्किल इंडिया / PMKVY प्रमाणपत्र"),
  o("bed", "B.Ed / D.El.Ed", "B.Ed / D.El.Ed"),
  o("tet", "CTET / State TET", "CTET / राज्य TET"),
  o("health-cert", "Health-care assistant certificate", "हेल्थ-केयर असिस्टेंट प्रमाणपत्र"),
  o("apprentice", "Apprenticeship certificate", "अप्रेंटिसशिप प्रमाणपत्र")
];

// learn: how the skill is usually gained —
//   "course"   = a short course can teach the basics
//   "practice" = mostly learned by doing it on the job
//   "licence"  = needs a formal licence/certificate
// courseSkills = matching skills in data/courses.js (for course suggestions).
export const PJ_SKILLS = [
  o("computer-basics", "Basic computer & internet", "बेसिक कंप्यूटर और इंटरनेट", { learn: "course", courseSkills: ["basic-computer", "ccc"] }),
  o("ms-office", "MS Office (Word, Excel)", "MS ऑफ़िस (वर्ड, एक्सेल)", { learn: "course", courseSkills: ["excel", "basic-computer"] }),
  o("typing", "Typing (Hindi / English)", "टाइपिंग (हिंदी / अंग्रेज़ी)", { learn: "course", courseSkills: ["typing"] }),
  o("data-entry", "Data entry", "डेटा एंट्री", { learn: "course", courseSkills: ["typing", "excel", "basic-computer"] }),
  o("communication", "Talking clearly with people", "लोगों से साफ़ बात करना", { learn: "practice", courseSkills: ["customer-service"] }),
  o("spoken-english", "Spoken English", "अंग्रेज़ी बोलना", { learn: "course", courseSkills: ["spoken-english"] }),
  o("customer-service", "Customer service", "ग्राहक सेवा", { learn: "course", courseSkills: ["customer-service"] }),
  o("sales", "Sales & marketing", "सेल्स और मार्केटिंग", { learn: "practice", courseSkills: ["sales"] }),
  o("accounting", "Accounting & billing (Tally, GST)", "अकाउंटिंग और बिलिंग (टैली, GST)", { learn: "course", courseSkills: ["tally", "accounting"] }),
  o("retail-ops", "Shop / showroom work (counter, display, stock)", "दुकान / शोरूम का काम (काउंटर, डिस्प्ले, स्टॉक)", { learn: "practice", courseSkills: ["sales", "customer-service"] }),
  o("inventory", "Inventory & warehouse work", "इन्वेंटरी और गोदाम का काम", { learn: "practice", courseSkills: [] }),
  o("manufacturing", "Factory / production / machine work", "फ़ैक्ट्री / प्रोडक्शन / मशीन का काम", { learn: "practice", courseSkills: [] }),
  o("electrical", "Electrical work", "बिजली का काम", { learn: "licence", courseSkills: ["electrician"] }),
  o("mechanical", "Mechanical / fitter work", "मैकेनिकल / फ़िटर का काम", { learn: "practice", courseSkills: ["repair"] }),
  o("repair", "Repair (mobile, appliance, vehicle)", "मरम्मत (मोबाइल, उपकरण, गाड़ी)", { learn: "course", courseSkills: ["repair"] }),
  o("driving", "Driving (with licence)", "ड्राइविंग (लाइसेंस के साथ)", { learn: "licence", courseSkills: ["driving"] }),
  o("hospitality", "Hotel, restaurant & food service", "होटल, रेस्टोरेंट और खाना परोसना", { learn: "practice", courseSkills: ["cooking", "customer-service"] }),
  o("healthcare", "Healthcare support (patient care)", "स्वास्थ्य सहायता (मरीज़ की देखभाल)", { learn: "licence", courseSkills: [] }),
  o("teaching", "Teaching & training", "पढ़ाना और ट्रेनिंग देना", { learn: "practice", courseSkills: ["teaching"] }),
  o("digital-marketing", "Digital marketing", "डिजिटल मार्केटिंग", { learn: "course", courseSkills: ["digital-marketing"] }),
  o("programming", "Programming & IT", "प्रोग्रामिंग और IT", { learn: "course", courseSkills: ["programming", "webdev"] }),
  o("graphic-design", "Graphic design", "ग्राफ़िक डिज़ाइन", { learn: "course", courseSkills: ["graphic-design"] }),
  o("hr", "HR & recruitment basics", "HR और भर्ती की बुनियाद", { learn: "course", courseSkills: [] }),
  o("team-lead", "Leading a small team", "छोटी टीम संभालना", { learn: "practice", courseSkills: [] })
];

// years = the smallest number of years this answer means.
export const PJ_EXPERIENCE = [
  o("none", "No work experience", "कोई काम का अनुभव नहीं", { years: 0 }),
  o("fresher", "Fresher (just finished studies)", "फ़्रेशर (अभी पढ़ाई पूरी की)", { years: 0 }),
  o("lt1", "Less than 1 year", "1 साल से कम", { years: 0.5 }),
  o("y1-3", "1–3 years", "1–3 साल", { years: 1 }),
  o("y3-5", "3–5 years", "3–5 साल", { years: 3 }),
  o("y5", "More than 5 years", "5 साल से ज़्यादा", { years: 5 })
];

export const PJ_CATEGORIES = [
  o("retail", "Retail & showroom", "रिटेल और शोरूम"),
  o("sales", "Sales executive", "सेल्स एग्ज़िक्यूटिव"),
  o("store-manager", "Store supervisor / manager", "स्टोर सुपरवाइज़र / मैनेजर"),
  o("customer-support", "Customer support", "कस्टमर सपोर्ट"),
  o("office", "Office assistant / back office", "ऑफ़िस असिस्टेंट / बैक ऑफ़िस"),
  o("receptionist", "Receptionist / front desk", "रिसेप्शनिस्ट / फ़्रंट डेस्क"),
  o("data-entry", "Data entry / computer operator", "डेटा एंट्री / कंप्यूटर ऑपरेटर"),
  o("accounts", "Accounts & billing", "अकाउंट्स और बिलिंग"),
  o("warehouse", "Warehouse & inventory", "गोदाम और इन्वेंटरी"),
  o("delivery", "Delivery, driving & logistics", "डिलीवरी, ड्राइविंग और लॉजिस्टिक्स"),
  o("manufacturing", "Manufacturing / factory", "मैन्युफ़ैक्चरिंग / फ़ैक्ट्री"),
  o("technician", "Technician / electrician / repair", "टेक्नीशियन / इलेक्ट्रीशियन / मरम्मत"),
  o("it", "IT & software", "IT और सॉफ़्टवेयर"),
  o("digital-marketing", "Digital marketing & design", "डिजिटल मार्केटिंग और डिज़ाइन"),
  o("healthcare", "Healthcare support", "स्वास्थ्य सहायता"),
  o("hospitality", "Hotels & restaurants", "होटल और रेस्टोरेंट"),
  o("teaching", "Teaching (private schools, coaching)", "पढ़ाना (प्राइवेट स्कूल, कोचिंग)"),
  o("banking", "Banking & financial services", "बैंकिंग और वित्तीय सेवाएँ"),
  o("hr", "Human resources (HR)", "मानव संसाधन (HR)"),
  o("remote", "Remote / work from home", "रिमोट / घर से काम"),
  o("other", "Other", "अन्य")
];

export const PJ_EMP_TYPES = [
  o("full-time", "Full-time", "फ़ुल-टाइम"),
  o("part-time", "Part-time", "पार्ट-टाइम"),
  o("contract", "Contract", "कॉन्ट्रैक्ट"),
  o("internship", "Internship", "इंटर्नशिप"),
  o("apprenticeship", "Apprenticeship", "अप्रेंटिसशिप"),
  o("freelance", "Freelance", "फ़्रीलांस")
];

export const PJ_WORK_MODES = [
  o("onsite", "At the workplace (on-site)", "कार्यस्थल पर (ऑन-साइट)"),
  o("hybrid", "Hybrid (some days from home)", "हाइब्रिड (कुछ दिन घर से)"),
  o("remote", "Remote (from home)", "रिमोट (घर से)"),
  o("any", "Any", "कोई भी")
];

export const PJ_SHIFTS = [
  o("day", "Day shift", "दिन की शिफ़्ट"),
  o("night", "Night shift", "रात की शिफ़्ट"),
  o("rotational", "Rotational shift", "बदलती शिफ़्ट"),
  o("flexible", "Flexible / any", "कोई भी / लचीला")
];

export const PJ_AVAILABILITY = [
  o("now", "Can join immediately", "तुरंत जॉइन कर सकते हैं"),
  o("month", "Within a month", "एक महीने में"),
  o("later", "Later (after studies etc.)", "बाद में (पढ़ाई के बाद आदि)")
];

export const PJ_EMPLOYER_TYPES = [
  o("local-business", "Small local business", "छोटा स्थानीय व्यवसाय"),
  o("local-retail", "Local showroom / retail chain", "स्थानीय शोरूम / रिटेल चेन"),
  o("sme", "Small or medium company", "छोटी या मध्यम कंपनी"),
  o("large-domestic", "Large Indian company", "बड़ी भारतीय कंपनी"),
  o("mnc", "Multinational company (MNC)", "बहुराष्ट्रीय कंपनी (MNC)"),
  o("startup", "Startup", "स्टार्टअप"),
  o("apprentice-scheme", "Government-supported apprenticeship / training", "सरकार-समर्थित अप्रेंटिसशिप / ट्रेनिंग")
];

export const PJ_LOCATION_PREF = [
  o("near-home", "Near my home / district", "घर / ज़िले के पास"),
  o("state", "Anywhere in my state", "अपने राज्य में कहीं भी"),
  o("india", "Anywhere in India", "भारत में कहीं भी"),
  o("remote", "Work from home only", "सिर्फ़ घर से काम")
];

export const PJ_RADIUS = [
  o("5", "Up to 5 km", "5 किमी तक"),
  o("10", "Up to 10 km", "10 किमी तक"),
  o("25", "Up to 25 km", "25 किमी तक"),
  o("50", "Up to 50 km", "50 किमी तक"),
  o("any", "Distance doesn't matter", "दूरी से फ़र्क़ नहीं")
];

export const PJ_LANGUAGES = [
  o("hindi", "Hindi", "हिंदी"),
  o("english", "English", "अंग्रेज़ी"),
  o("both", "Hindi and English", "हिंदी और अंग्रेज़ी"),
  o("regional", "Another Indian language", "कोई और भारतीय भाषा")
];

export const PJ_YES_NO = [
  o("yes", "Yes", "हाँ"),
  o("no", "No", "नहीं")
];

export function pjLabel(list, id, lang = "en") {
  const item = list.find((x) => x.id === id);
  return item ? item[lang] || item.en : "";
}
