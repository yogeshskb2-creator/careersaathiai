// "What do I enjoy?" interest quiz — original questions written for CareerSaathi AI.
// Six broad interest areas (an idea widely used in career guidance). This is a simple
// self-check to start a conversation, not a scientific or psychometric test.

const tx = (en, hi) => ({ en, hi });

export const QUIZ_AREAS = [
  {
    id: "hands", icon: "🔧",
    name: tx("Hands-on & machines", "हाथ का काम और मशीनें"),
    about: tx("You enjoy practical work — fixing, building and using tools. Skilled trades are in steady demand and you can learn them through ITI, apprenticeships and short courses.",
      "आपको व्यावहारिक काम पसंद है — चीज़ें ठीक करना, बनाना और औज़ार चलाना। हुनर वाले कामों की माँग बनी रहती है और इन्हें ITI, अप्रेंटिसशिप और छोटे कोर्स से सीखा जा सकता है।"),
    careers: ["electrician", "plumber", "welder", "repair-technician", "driver", "trade-apprentice", "rrb-level1", "army-agniveer", "agri-entrepreneur"],
    skills: ["electrician", "repair", "welding", "plumbing", "driving"],
    guide: "guide-career-after-iti.html"
  },
  {
    id: "think", icon: "🔍",
    name: tx("Solving & science", "हल ढूँढना और विज्ञान"),
    about: tx("You like understanding how things work and solving problems. Computers, data and exam-based careers that reward careful thinking may suit you.",
      "आपको यह समझना पसंद है कि चीज़ें कैसे काम करती हैं, और समस्याएँ हल करना अच्छा लगता है। कंप्यूटर, डेटा और सोच-समझ वाली परीक्षाओं से जुड़े करियर आपके लिए हो सकते हैं।"),
    careers: ["software-developer", "data-analyst", "web-developer", "ssc-cgl", "upsc-cse"],
    skills: ["programming", "data-analytics", "excel", "basic-computer"],
    guide: "guide-free-skill-training.html"
  },
  {
    id: "create", icon: "🎨",
    name: tx("Creative & design", "रचनात्मक काम और डिज़ाइन"),
    about: tx("You enjoy making things look good and expressing ideas. Design, digital content and craft-based work can turn this into a career or your own business.",
      "आपको चीज़ों को सुंदर बनाना और अपने विचार दिखाना पसंद है। डिज़ाइन, डिजिटल कंटेंट और कारीगरी वाला काम इसे करियर या अपना व्यवसाय बना सकता है।"),
    careers: ["graphic-designer", "digital-marketer", "web-developer", "tailoring-business"],
    skills: ["graphic-design", "digital-marketing", "tailoring", "webdev"],
    guide: "guide-free-skill-training.html"
  },
  {
    id: "help", icon: "🤝",
    name: tx("Helping & teaching", "मदद करना और पढ़ाना"),
    about: tx("You care about people and like explaining and supporting. Teaching, public service and customer-facing work use these strengths.",
      "आप लोगों की परवाह करते हैं और समझाना व मदद करना पसंद करते हैं। पढ़ाना, जन-सेवा और ग्राहकों से जुड़े काम में ये ख़ूबियाँ काम आती हैं।"),
    careers: ["tutor", "govt-teacher", "customer-support", "india-post-gds", "state-police"],
    skills: ["teaching", "customer-service", "spoken-english"],
    guide: "guide-free-skill-training.html"
  },
  {
    id: "lead", icon: "🚀",
    name: tx("Business & leading", "व्यवसाय और नेतृत्व"),
    about: tx("You like convincing people, taking charge and spotting opportunities. Sales, your own business and leadership roles may suit you.",
      "आपको लोगों को मनाना, ज़िम्मेदारी लेना और मौक़े पहचानना पसंद है। सेल्स, अपना व्यवसाय और नेतृत्व वाले काम आपके लिए हो सकते हैं।"),
    careers: ["sales-executive", "food-business", "computer-centre", "tailoring-business", "bank-po", "state-psc"],
    skills: ["sales", "digital-marketing", "accounting", "spoken-english"],
    guide: "guide-business-loans-schemes.html"
  },
  {
    id: "organise", icon: "📋",
    name: tx("Organising & numbers", "व्यवस्था और हिसाब-किताब"),
    about: tx("You like order, accuracy and working with numbers. Office, accounts, banking and clerical government jobs need exactly these strengths.",
      "आपको व्यवस्था, सटीकता और अंकों के साथ काम पसंद है। ऑफ़िस, हिसाब-किताब, बैंक और सरकारी क्लर्क वाली नौकरियों में यही ख़ूबियाँ चाहिए।"),
    careers: ["accounts-assistant", "data-entry", "office-assistant", "bank-clerk", "ssc-chsl", "ssc-mts"],
    skills: ["tally", "excel", "accounting", "typing", "ccc"],
    guide: "guide-ccc-course-guide.html"
  }
];

// Questions are mixed so the same area does not come twice in a row.
export const QUESTIONS = [
  { id: "q1", area: "hands", text: tx("Fixing things like a fan, a bicycle or a mobile phone", "पंखा, साइकिल या मोबाइल जैसी चीज़ें ठीक करना") },
  { id: "q2", area: "think", text: tx("Solving puzzles and maths problems", "पहेलियाँ और गणित के सवाल हल करना") },
  { id: "q3", area: "create", text: tx("Drawing, painting or designing things", "ड्रॉइंग, पेंटिंग या डिज़ाइन बनाना") },
  { id: "q4", area: "help", text: tx("Explaining things to others or teaching younger children", "दूसरों को समझाना या छोटे बच्चों को पढ़ाना") },
  { id: "q5", area: "lead", text: tx("Selling things or convincing people", "चीज़ें बेचना या लोगों को मनाना") },
  { id: "q6", area: "organise", text: tx("Keeping records, lists and files neat", "रिकॉर्ड, सूची और फ़ाइलें व्यवस्थित रखना") },
  { id: "q7", area: "hands", text: tx("Working with tools and machines", "औज़ारों और मशीनों के साथ काम करना") },
  { id: "q8", area: "think", text: tx("Finding out how and why things work", "यह जानना कि चीज़ें कैसे और क्यों काम करती हैं") },
  { id: "q9", area: "create", text: tx("Making videos, photos or social media posts", "वीडियो, फ़ोटो या सोशल मीडिया पोस्ट बनाना") },
  { id: "q10", area: "help", text: tx("Helping people solve their problems", "लोगों की परेशानी हल करने में मदद करना") },
  { id: "q11", area: "lead", text: tx("Planning and leading a group or an event", "किसी समूह या कार्यक्रम की योजना बनाना और उसे चलाना") },
  { id: "q12", area: "organise", text: tx("Working with numbers, accounts or money", "अंकों, हिसाब-किताब या पैसों के साथ काम करना") },
  { id: "q13", area: "hands", text: tx("Working outdoors, on a farm or at a building site", "बाहर, खेत में या निर्माण की जगह पर काम करना") },
  { id: "q14", area: "think", text: tx("Learning to use computers, apps or coding", "कंप्यूटर, ऐप या कोडिंग सीखना") },
  { id: "q15", area: "create", text: tx("Writing stories, poems or articles", "कहानी, कविता या लेख लिखना") },
  { id: "q16", area: "help", text: tx("Looking after people who are sick or elderly", "बीमार या बुज़ुर्ग लोगों की देखभाल करना") },
  { id: "q17", area: "lead", text: tx("Thinking about starting my own business", "अपना व्यवसाय शुरू करने के बारे में सोचना") },
  { id: "q18", area: "organise", text: tx("Following clear rules and steps carefully", "साफ़ नियमों और क़दमों का ध्यान से पालन करना") },
  { id: "q19", area: "hands", text: tx("Learning a practical trade by doing it with my hands", "हाथ से करके कोई व्यावहारिक हुनर सीखना") },
  { id: "q20", area: "think", text: tx("Reading about science, technology or current affairs", "विज्ञान, तकनीक या करंट अफ़ेयर्स के बारे में पढ़ना") },
  { id: "q21", area: "create", text: tx("Stitching, decorating or making things look beautiful", "सिलाई, सजावट या चीज़ों को सुंदर बनाना") },
  { id: "q22", area: "help", text: tx("Working for my community or village", "अपने समुदाय या गाँव के लिए काम करना") },
  { id: "q23", area: "lead", text: tx("Taking decisions and responsibility", "फ़ैसले लेना और ज़िम्मेदारी उठाना") },
  { id: "q24", area: "organise", text: tx("Typing, data entry or office work on a computer", "कंप्यूटर पर टाइपिंग, डेटा एंट्री या ऑफ़िस का काम") }
];

// Answer values: 2 = "Yes, I enjoy this", 1 = "Sometimes / not sure", 0 = "No".
export const ANSWERS = [
  { value: 2, en: "Yes, I enjoy this", hi: "हाँ, मुझे पसंद है" },
  { value: 1, en: "Sometimes / not sure", hi: "कभी-कभी / पता नहीं" },
  { value: 0, en: "No", hi: "नहीं" }
];
