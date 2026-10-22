/* CareerSaathi AI — bundled by tools/build_standalone.py. Edit the files in js/ and data/, then rebuild. */
(function () {
"use strict";
const __mods = {};
// ===== js/i18n.js =====
__mods["js/i18n.js"] = (function () {
// CareerSaathi AI — interface text in English and simple Hindi.
// Every key in `en` must also exist in `hi` (a test checks this).
// This file has no browser code, so Node tests can import it directly.

const SUPPORTED_LANGS = ["en", "hi"];
const DEFAULT_LANG = "en";

const translations = {
  en: {
    // ---- Shared: header, nav, footer ----
    "skip": "Skip to main content",
    "brand.name": "CareerSaathi AI",
    "brand.tagline": "Your Education. Your Skills. Your Opportunities.",
    "nav.label": "Main menu",
    "nav.menu": "Menu",
    "nav.home": "Home",
    "nav.profile": "My Profile",
    "nav.recommendations": "Recommendations",
    "nav.jobs": "Govt Jobs",
    "nav.schemes": "Schemes",
    "nav.courses": "Courses",
    "nav.dashboard": "Dashboard",
    "nav.about": "About",
    "nav.privacy": "Privacy",
    "lang.label": "Choose language",
    "footer.note": "CareerSaathi AI is a free guidance tool. It is not a government website and does not offer jobs.",
    "footer.verify": "Always verify vacancies, schemes and eligibility on official websites.",
    "footer.disclaimer": "Read the disclaimer",
    "footer.privacy": "Privacy information",
    "footer.demo": "Prototype · Demo data is clearly labelled",

    // ---- Shared: badges and states ----
    "badge.soon": "Coming soon",
    "badge.demo": "Demo data",
    "state.loading": "Loading…",
    "state.error": "Something went wrong. Please refresh the page and try again.",

    // ---- Homepage ----
    "home.title": "CareerSaathi AI — Free career guidance for India",
    "home.eyebrow": "Free · No sign-up · Works in Hindi and English",
    "home.h1": "Find the right career path for your education and skills",
    "home.hindiTagline": "Aapki Yogyata Se Aapke Rozgaar Tak.",
    "home.lead": "Answer a few simple questions. Get career ideas, official government recruitment sources, schemes and courses that match you — with a clear reason for every suggestion.",
    "home.ctaStart": "Start my career profile",
    "home.ctaHow": "See how it works",
    "home.privacyLine": "No login. No Aadhaar. Your answers stay on your phone or computer.",

    "home.whoTitle": "Made for every kind of learner and worker",
    "home.who.10": "Class 10 & 12 pass",
    "home.who.iti": "ITI & Diploma holders",
    "home.who.grad": "Graduates & Postgraduates",
    "home.who.fresher": "Freshers & job seekers",
    "home.who.working": "Working professionals",
    "home.who.skilled": "Skilled workers",
    "home.who.business": "Future entrepreneurs",

    "home.howTitle": "How it works",
    "home.how.1t": "Tell us about yourself",
    "home.how.1d": "Education, skills, experience and goals. Your name is optional.",
    "home.how.2t": "We compare, step by step",
    "home.how.2d": "Simple, open rules check qualification, skills, experience and your preferences.",
    "home.how.3t": "See matches with reasons",
    "home.how.3d": "Every suggestion explains why it fits and which skills are missing.",
    "home.how.4t": "Explore official sources",
    "home.how.4d": "Links to official recruitment portals, schemes and trusted courses.",
    "home.how.5t": "Follow a 30-day plan",
    "home.how.5d": "Small weekly actions based on your goal.",

    "home.exploreTitle": "What you can explore",
    "home.f.match.t": "Career Recommendations",
    "home.f.match.d": "Career ideas that fit your qualification and skills, with a clear explanation.",
    "home.f.jobs.t": "Government Job Explorer",
    "home.f.jobs.d": "SSC, Railways, Banking, State PSCs, Teaching and Apprenticeship sources.",
    "home.f.schemes.t": "Scheme Finder",
    "home.f.schemes.d": "Training, employment and business support schemes to look into.",
    "home.f.courses.t": "Courses & Skills",
    "home.f.courses.d": "Free and official learning options for the skills you are missing.",
    "home.f.dash.t": "Personal Dashboard",
    "home.f.dash.d": "All your matches, skill gaps and next steps in one place.",
    "home.f.plan.t": "30-Day Action Plan",
    "home.f.plan.d": "A practical plan that changes with your career goal.",

    "home.trustTitle": "Our promise to you",
    "home.trust.1t": "Honest suggestions",
    "home.trust.1d": "We never promise a job. We show reasons, not made-up percentages.",
    "home.trust.2t": "Official sources only",
    "home.trust.2d": "We point to official websites. We do not invent vacancies, dates or salaries.",
    "home.trust.3t": "Your data stays with you",
    "home.trust.3d": "Everything runs in your browser. Nothing is sent to us or to employers.",
    "home.trust.4t": "Completely free",
    "home.trust.4d": "No fees, no sign-up, no premium plan.",

    "home.bottomTitle": "Ready to find your path?",
    "home.bottomText": "It takes about 5 minutes. You can skip any question you are not sure about.",

    // ---- Profile form ----
    "profile.title": "Career Profile — CareerSaathi AI",
    "profile.h1": "Your career profile",
    "profile.lead": "Answer what you can. Questions marked * are needed. Everything else is optional.",
    "profile.privacyNote": "Your answers stay in this browser. We never ask for Aadhaar, phone number or bank details.",
    "profile.noscript": "Please turn on JavaScript to fill the profile form.",
    "form.progress": "Step {n} of {total}",
    "form.progressLabel": "Form progress",
    "form.reviewStep": "Final check",

    "step.basic.t": "Basic information",
    "step.basic.d": "Tell us a little about yourself. Your name is optional.",
    "step.education.t": "Education",
    "step.education.d": "Choose your highest qualification. You can add more qualifications below.",
    "step.skills.t": "Skills",
    "step.skills.d": "Tick everything you can do, even a little. You can also add your own skills.",
    "step.experience.t": "Work experience",
    "step.experience.d": "Any job, helper work, family business or freelance work counts. You can skip this step.",
    "step.goals.t": "Career goals",
    "step.goals.d": "What do you want next? You can choose more than one.",
    "step.eligibility.t": "Optional eligibility details",
    "step.eligibility.d": "Some government jobs and schemes give age relaxation or special support to certain groups. Fill these only if you want such rules mentioned. You can skip this step.",
    "step.review.t": "Check your answers",
    "step.review.d": "Look over your answers. Use Edit to change anything.",

    "f.required": "required",
    "f.choose": "— Choose —",
    "f.name": "Your name",
    "f.nameHint": "Optional. You can leave this blank or use a nickname.",
    "f.ageRange": "Age group",
    "f.state": "State / Union Territory",
    "f.district": "District",
    "f.districtHint": "Optional.",
    "f.preferredLocation": "Where would you like to work?",
    "f.language": "Preferred language",
    "f.employmentStatus": "What are you doing now?",
    "f.eduLevel": "Highest qualification",
    "f.stream": "Stream",
    "f.streamHint": "Optional. Mainly for Class 12 and above.",
    "f.specialization": "Subject or specialization",
    "f.specializationHint": "Optional. For example: B.Com, Electrician trade, Computer Science.",
    "f.passingYear": "Passing year",
    "f.passingYearHint": "Optional. If your result is awaited, enter the expected year.",
    "f.certificates": "Other certificates",
    "f.certificatesHint": "Optional. For example: NCC, typing certificate, driving licence.",
    "f.extraQuals": "Other qualifications",
    "f.extraQualsHint": "Add any other degree, diploma or ITI that you have.",
    "f.qualN": "Qualification {n}",
    "f.qualLevel": "Qualification",
    "f.addQual": "Add another qualification",
    "f.removeQual": "Remove qualification {n}",
    "f.skillsNone": "No skills ticked yet? That is okay — we will suggest skills to learn.",
    "f.customSkill": "Add your own skill",
    "f.customSkillHint": "For example: Mehndi design, Video editing, Beauty parlour work.",
    "f.addSkill": "Add",
    "f.yourSkills": "Skills you added",
    "f.removeSkill": "Remove {skill}",
    "f.skillAdded": "{skill} added.",
    "f.expType": "Your experience",
    "f.expYears": "Total years of experience",
    "f.expYearsHint": "Whole years only. Less than 1 year? Enter 0.",
    "f.expTitle": "Current or last job title",
    "f.expTitleHint": "Optional. For example: Shop assistant, Data entry operator.",
    "f.expIndustry": "Industry",
    "f.expIndustryHint": "Optional. For example: Retail, Construction, Education.",
    "f.expPrevious": "Other past work",
    "f.expPreviousHint": "Optional. A few words is enough.",
    "f.freelance": "I have done freelance work or run my own business",
    "f.goals": "Your goals",
    "f.budget": "Learning budget",
    "f.budgetHint": "Optional. Helps us suggest courses you can afford.",
    "f.exactAge": "Age in completed years",
    "f.exactAgeHint": "Optional. Government age limits use exact years. We do not ask for your date of birth.",
    "f.category": "Category",
    "f.categoryHint": "Optional. Used only to remind you about official age relaxation rules.",
    "f.gender": "Gender",
    "f.genderHint": "Optional. Some schemes are made especially for women.",
    "f.pwd": "Person with disability (PwD)",
    "f.exServiceman": "Ex-serviceman",
    "f.optional": "Optional.",

    "btn.next": "Next",
    "btn.back": "Back",
    "btn.skip": "Skip this step",
    "btn.save": "Save my profile",
    "btn.edit": "Edit",
    "btn.editProfile": "Edit my profile",
    "btn.deleteProfile": "Delete my profile",
    "btn.startOver": "Start again",
    "btn.continue": "Continue with saved profile",

    "review.notGiven": "Not given",
    "review.skipped": "Skipped",
    "review.yes": "Yes",
    "review.no": "No",
    "review.years": "{n} years",
    "review.remember": "Remember my profile on this device",
    "review.rememberHint": "Leave this unticked on a shared or cyber-café computer. Your answers will then be deleted when you close this tab.",

    "saved.title": "Your profile is saved",
    "saved.local": "Saved on this device. It will still be here next time you visit.",
    "saved.session": "Saved only until you close this browser tab.",
    "saved.next": "Your career recommendations are ready. They use this profile and update when you edit it.",
    "saved.deleted": "Your profile has been deleted from this browser.",
    "resume.title": "Welcome back",
    "resume.text": "We found a profile saved in this browser.",

    "err.summary": "Please fix these before going on:",
    "err.required": "Please choose or fill this.",
    "err.nameChars": "Use letters and spaces only.",
    "err.tooLong": "This is too long.",
    "err.year": "Enter a real 4-digit year, for example 2024.",
    "err.years": "Enter whole years from 0 to 50.",
    "err.age": "Enter an age from 14 to 70.",
    "err.goalsRequired": "Choose at least one goal.",
    "err.skillEmpty": "Type a skill first.",
    "err.skillLong": "Keep each skill under 40 letters.",
    "err.skillMax": "You can add up to 20 of your own skills.",
    "err.skillDup": "This skill is already in your list.",

    // ---- Recommendations ----
    "badge.open": "Open",
    "rec.title": "Career Recommendations — CareerSaathi AI",
    "rec.h1": "Your career recommendations",
    "rec.lead": "Based only on the answers in your profile. Every card explains why it was suggested and what you should check.",
    "rec.notice": "These are suggestions, not job offers. We do not show live vacancies — always check the official source before applying.",
    "rec.basedOn": "Based on:",
    "rec.editProfile": "Edit profile",
    "rec.noProfileT": "No profile yet",
    "rec.noProfileD": "Fill the short profile form first. It takes about 5 minutes and needs no login.",
    "rec.noProfileBtn": "Start my career profile",
    "rec.noMatchesT": "No matches yet",
    "rec.noMatchesD": "Try choosing more goals or skills in your profile. Our career list is still small (demo data).",
    "rec.incomplete": "Add your {items} in the profile to get better suggestions.",
    "rec.missing.education": "education",
    "rec.missing.goals": "goals",
    "rec.missing.skills": "skills",
    "rec.filterLabel": "Filter by type",
    "rec.filter.all": "All",
    "rec.count": "Showing {shown} of {total} suggestions",
    "rec.showMore": "Show more",
    "rec.fit.strong": "Good match",
    "rec.fit.possible": "Partial match",
    "rec.fit.upskill": "Reachable with new skills",
    "rec.why": "Why we suggested this",
    "rec.skillsToBuild": "Skills to build",
    "rec.more": "Things to check and next steps",
    "rec.check": "Things to check",
    "rec.next": "What to do next",
    "rec.sources": "Official sources",
    "rec.sourceChecked": "Website address confirmed on {date}",
    "rec.newTab": "opens in a new tab",
    "rec.labelsHelp": "What do these labels mean?",
    "rec.futureT": "Future paths",
    "rec.futureD": "These match your goals but need a qualification you have not recorded yet.",
    "rec.futureNeeds": "Needs one of: {levels}",
    "rec.emptyFilter": "No suggestions of this type. Choose \"All\" to see everything.",
    "why.goal": "Matches your goal: {goals}.",
    "why.qualMeets": "Your qualification ({level}) is in our recorded list for this path.",
    "why.qualAny": "No minimum qualification is recorded — skills matter most here.",
    "why.skillsHave": "You already have: {skills}.",
    "why.optionalHave": "Useful extra skills you have: {skills}.",
    "why.noSkillNeeded": "No special skill is recorded as required — selection is usually by exam, merit or interview.",
    "why.expMeets": "Your experience meets the recorded requirement.",
    "why.remote": "This work can often be done remotely.",
    "check.qualVaries": "Qualification rules vary by state or notification — check the official source.",
    "check.qualMissing": "Add your education to your profile so we can compare qualifications.",
    "check.expShort": "Usually asks for about {n}+ years of experience.",
    "check.expUnknown": "May ask for about {n}+ years of experience.",
    "check.location": "You prefer remote work, but this work is usually done on site.",
    "check.govtAge": "Age limits, fees and dates change with every notification. Read the latest official notification.",
    "check.relaxation": "Age relaxation may apply to you — confirm it in the official notification.",
    "check.demo": "Demo data: these details are not yet checked against an official notification.",
    "next.learn": "Learn: {skills}. See free and official course options on the Courses page.",
    "next.govt": "Open an official source below and look for the latest notification.",
    "next.apprentice": "Register on the official apprenticeship portal and look for openings near you.",
    "next.private": "Search for openings on the National Career Service portal and trusted local job boards.",
    "next.self": "Look for business support schemes on myScheme and ask your local bank or District Industries Centre.",
    "next.preferred": "Often preferred: {preferred}.",
    "saved.seeRecs": "See my recommendations",
    "saved.seeDash": "Open my dashboard",

    // ---- Jobs & schemes ----
    "jobs.title": "Government Job Explorer — CareerSaathi AI",
    "jobs.h1": "Government Job Explorer",
    "jobs.lead": "Official websites where government recruitment is announced, grouped by type. We do not list live vacancies or dates.",
    "jobs.verify": "Explore the official recruitment source to verify current vacancies and eligibility.",
    "jobs.scamT": "Stay safe from job scams",
    "jobs.scam": "Government jobs are never sold. Do not pay any agent. Trust only official websites, which usually end in .gov.in or .nic.in.",
    "jobs.searchLabel": "Search sources",
    "jobs.searchHint": "For example: SSC, railway, teacher, bank",
    "jobs.filterLabel": "Filter by type",
    "jobs.all": "All",
    "jobs.count": "{n} official sources",
    "jobs.empty": "No sources match your search. Try another word or choose \"All\".",
    "jobs.visit": "Visit official website",
    "jobs.checked": "Website address confirmed on {date}",
    "jobs.yourState": "Your state",
    "jobs.stateMissing": "Recruitment bodies for {state} are not in our list yet. Search for \"{state} Public Service Commission\" and use only websites ending in .gov.in or .nic.in.",
    "jobs.stateHint": "Save your state in your profile to see your state's recruitment bodies first.",
    "jobs.stateExamples": "We list a few state commissions as examples. Every state has its own Public Service Commission and subordinate selection boards.",
    "jobs.seeCareers": "See which government careers may suit you",
    "schemes.title": "Government Scheme Finder — CareerSaathi AI",
    "schemes.h1": "Government Scheme Finder",
    "schemes.lead": "Training, apprenticeship, internship and business-support schemes, summarised from official pages.",
    "schemes.warn": "A suggestion here is not an approval. Only the official department or bank decides eligibility, loans, subsidies or benefits.",
    "schemes.mysT": "Search every scheme on myScheme",
    "schemes.mysBtn": "Open myScheme",
    "schemes.worth": "Worth a look for you",
    "schemes.worthD": "Some published conditions seem to match your profile. Please confirm everything on the official page.",
    "schemes.others": "Other schemes",
    "schemes.all": "All schemes",
    "schemes.noProfile": "Fill your profile to see which schemes may be worth a look for you.",
    "schemes.noWorth": "None of these schemes stands out for your profile yet. You can still read them all below, or search myScheme.",
    "schemes.filterLabel": "Filter by category",
    "schemes.allCats": "All",
    "schemes.ministry": "Run by",
    "schemes.purpose": "Purpose",
    "schemes.audience": "For whom",
    "schemes.why": "Why it may fit you",
    "schemes.check": "Please confirm",
    "schemes.eligibility": "Main conditions (as published)",
    "schemes.benefits": "Benefits (as published)",
    "schemes.apply": "How to apply",
    "schemes.details": "Conditions, benefits and how to apply",
    "schemes.official": "Official page",
    "schemes.readFrom": "Summary checked on {date} from: {source}",
    "schemes.important": "Important:",
    "schemes.badge": "Worth a look",
    "sch.why.goal": "Matches your goal: {goals}.",
    "sch.why.status": "Meant for people in your current situation.",
    "sch.why.edu": "Your qualification ({level}) appears in the published conditions.",
    "sch.why.age": "Your age is within the published age range.",
    "sch.why.ageRange": "Your age group seems to fit the published age range.",
    "sch.why.group": "You are in a group this scheme is meant for.",
    "sch.why.skill": "Your trade fits: {skills}.",
    "sch.check.edu": "Your recorded qualification may not match — check the conditions.",
    "sch.check.ageOut": "Your age may be outside the published limit.",
    "sch.check.ageExact": "The published age limit is {min}–{max} years. Check your exact age.",
    "sch.check.group": "This scheme is for SC/ST and/or women entrepreneurs. Check whether it applies to you.",
    "sch.check.groupNo": "This scheme is for SC/ST and/or women entrepreneurs, so it may not apply to you.",
    "sch.check.final": "Final eligibility is decided only by the official department or bank.",

    // ---- Courses ----
    "courses.title": "Course & Skill Explorer — CareerSaathi AI",
    "courses.h1": "Course & Skill Explorer",
    "courses.lead": "Free and official ways to learn the skills your career matches need. We only state costs, durations and certificates that we read on the provider's own page.",
    "courses.noJob": "Finishing a course does not guarantee a job. It helps you build skills and show proof of them.",
    "courses.gapsT": "Your skill gaps",
    "courses.gapsD": "Skills missing from your top career matches. The number shows how many of those careers need it.",
    "courses.noGaps": "Your top career matches do not show missing skills. You can still browse courses below.",
    "courses.noProfile": "Save your profile to see courses for your own skill gaps. You can still browse all courses below.",
    "courses.forYouT": "Suggested for you",
    "courses.uncovered": "We have not found a verified free course for: {skills}. Try the Skill India Digital Hub or ask your nearest ITI or PMKVY centre.",
    "courses.browseT": "Browse all courses",
    "courses.skillFilter": "Show courses for this skill",
    "courses.anySkill": "Any skill",
    "courses.costFilter": "Cost",
    "courses.cost.all": "All",
    "courses.cost.free": "Free to learn",
    "courses.count": "{n} learning options",
    "courses.emptyFilter": "No course in our list teaches this skill yet. Try Skill India Digital Hub.",
    "courses.provider": "Provider",
    "courses.topics": "What you learn",
    "courses.prereq": "Before you start",
    "courses.cost": "Cost",
    "courses.duration": "Duration",
    "courses.certificate": "Certificate",
    "courses.mode": "Mode",
    "courses.howToFind": "How to find it",
    "courses.why": "Why this could help",
    "courses.check": "Good to know",
    "courses.open": "Open provider website",
    "courses.notVerified": "Not verified — check the provider",
    "courses.checkedFrom": "Details read on {date} from: {source}",
    "courses.mode.online": "Online",
    "courses.mode.in-person": "In person",
    "courses.mode.both": "Online or in person",
    "courses.costLabel.free": "Free",
    "courses.costLabel.free-exam-fee": "Free to learn · exam fee for certificate",
    "courses.costLabel.fee": "Fee applies",
    "courses.sidhT": "Explore more on Skill India Digital Hub",
    "courses.sidhBtn": "Open Skill India Digital Hub",
    "courses.seeCourses": "Find courses for these skills",
    "course.why.gap": "Teaches skills you are missing: {skills}.",
    "course.why.careers": "Useful for: {careers}.",
    "course.why.free": "Free, as stated by the provider.",
    "course.check.costUnknown": "We could not verify the cost. Check before you join.",
    "course.check.budget": "This may not fit the learning budget in your profile.",
    "course.check.examFee": "Learning is free, but the certificate needs a paid exam.",
    "course.check.durationUnknown": "Duration not verified — it depends on the course you choose.",
    "course.check.already": "You already have: {skills}.",
    "course.check.noJob": "A course alone does not guarantee a job.",

    // ---- Dashboard & plan ----
    "plan.title": "Your 30-day action plan",
    "plan.lead": "Small steps for the next 30 days, based on your goals. Tick tasks as you finish them — ticks are saved only on this device.",
    "plan.week1": "Week 1 — Decide and get organised",
    "plan.week2": "Week 2 — Start learning",
    "plan.week3": "Week 3 — Practise and apply",
    "plan.week4": "Last stretch — Act and review",
    "plan.days": "Days {days}",
    "plan.progress": "{done} of {total} tasks done",
    "plan.reset": "Clear all ticks",
    "plan.completeProfile": "Complete your profile (education and goals) so this plan can be more specific.",
    "plan.shortlist": "Read the cards for your top matches ({careers}) and choose 1–2 to focus on.",
    "plan.exploreCareers": "Browse the recommendations and government sources, and pick 1–2 paths to focus on.",
    "plan.govt.readNotice": "Open the official website for {career} and read the latest notification fully: eligibility, age limit, fees and dates.",
    "plan.govt.readNoticeAny": "Open the official recruitment website for your chosen exam and read the latest notification fully: eligibility, age limit, fees and dates.",
    "plan.govt.documents": "Keep copies of your mark sheets, certificates and ID ready (on paper and phone). Never hand them to agents.",
    "plan.private.resume": "Make a simple one-page resume with your education, skills and any work you have done.",
    "plan.private.ncs": "Register on the National Career Service (NCS) portal.",
    "plan.appr.register": "Register on the official apprenticeship portal — NATS for graduates and diploma holders, NAPS for trade apprentices.",
    "plan.intern.portal": "Read the current rules on the official PM Internship portal and check whether registrations are open.",
    "plan.biz.idea": "Write your business idea on one page: what you will sell, to whom, and what you need to start.",
    "plan.higher.shortlist": "List 3 courses or colleges you want and open their official admission pages.",
    "plan.startCourse": "Start learning: {course} (for {skill}).",
    "plan.practiseSkill": "Start learning {skill} — ask your nearest ITI or PMKVY centre, or use Skill India Digital Hub.",
    "plan.dailyHour": "Practise {skill} for at least 1 hour every day.",
    "plan.govt.syllabus": "Download the official syllabus and previous papers from the official exam website.",
    "plan.govt.timetable": "Make a daily study timetable and stick to it.",
    "plan.private.proof": "Collect proof of your skills: certificates, small projects or photos of your work.",
    "plan.biz.customers": "Talk to at least 5 possible customers. Ask what they need and what they would pay.",
    "plan.biz.scheme": "Read the {scheme} details on its official page and note the documents it needs.",
    "plan.appr.search": "Search for openings near you on the portal and note the ones that fit your trade or degree.",
    "plan.secondSkill": "Begin your next skill: {skill}.",
    "plan.govt.mock": "Take a timed practice test every few days and note your weak topics.",
    "plan.private.apply": "Apply to at least 5 openings that match your skills on trusted portals.",
    "plan.appr.apply": "Apply to 3–5 suitable openings through the official portal.",
    "plan.biz.costs": "Make a simple sheet of your starting costs, monthly costs and selling price.",
    "plan.biz.documents": "Ask your bank or District Industries Centre which documents and registrations you need.",
    "plan.higher.dates": "Note the admission or entrance-exam dates from the official pages.",
    "plan.govt.apply": "If a notification is open and you meet its rules, apply only on the official website, before its last date.",
    "plan.private.interview": "Practise answers to common interview questions with a friend or family member.",
    "plan.biz.start": "Start small: make your first few sales and keep a record of money in and out.",
    "plan.appr.follow": "Check your application status on the portal and follow up politely.",
    "plan.review": "Review the month: what you finished and what to continue. Add new skills to your profile.",
    "plan.safety": "Stay safe: never pay anyone for a job, loan or scheme approval. Use only official websites.",
    "plan.learnBasics": "Learn basic computer use — it helps in almost every job today.",
    "plan.practiseGeneric": "Spend some time every day practising one skill you want to grow.",
    "dash.title": "My Dashboard — CareerSaathi AI",
    "dash.h1": "My career dashboard",
    "dash.hello": "Namaste, {name}!",
    "dash.helloAnon": "Namaste!",
    "dash.lead": "Everything from your profile in one place. Nothing here is sent anywhere.",
    "dash.print": "Print or save as PDF",
    "dash.noProfileT": "Your dashboard is empty",
    "dash.noProfileD": "Fill the short profile form to see your career matches, skill gaps, courses, schemes and a 30-day plan.",
    "dash.matchesT": "Career matches",
    "dash.matchesEmpty": "No career matches yet. Add more goals or skills to your profile.",
    "dash.seeAll": "See all {n} recommendations",
    "dash.govtT": "Government recruitment resources",
    "dash.govtD": "Official websites for the government careers in your matches.",
    "dash.govtEmpty": "No government career is in your matches. You can still explore all official recruitment sources.",
    "dash.openExplorer": "Open Government Job Explorer",
    "dash.gapsT": "Skill gap analysis",
    "dash.gapsD": "Skills missing from your top matches, and how many of them need each one.",
    "dash.gapsEmpty": "No missing skills in your top matches.",
    "dash.coursesT": "Recommended courses",
    "dash.coursesEmpty": "No course suggestions yet.",
    "dash.seeCourses": "See all courses",
    "dash.schemesT": "Government scheme discovery",
    "dash.schemesEmpty": "No scheme stands out for your profile yet. You can browse them all.",
    "dash.seeSchemes": "Open Scheme Finder",
    "dash.yourState": "Your state",

    // ---- About & Disclaimer ----
    "about.title": "About & Disclaimer — CareerSaathi AI",
    "about.h1": "About CareerSaathi AI",
    "about.lead": "CareerSaathi AI is a free guidance tool that helps people in India understand which careers, government recruitment sources, schemes and courses may suit their education and skills.",
    "about.whatTitle": "What this website does",
    "about.what.1": "Compares your profile with a small, hand-checked list of careers.",
    "about.what.2": "Explains why each career is suggested and which skills you may need.",
    "about.what.3": "Links you to official government websites for recruitment and schemes.",
    "about.what.4": "Suggests courses, preferring free and official options.",
    "about.notTitle": "What this website does not do",
    "about.not.1": "It does not offer jobs or collect job applications.",
    "about.not.2": "It does not show live vacancies or application deadlines.",
    "about.not.3": "It does not approve schemes, loans, subsidies or benefits.",
    "about.not.4": "It is not connected to any government department.",
    "about.labelsTitle": "What our labels mean",
    "about.label.potential": "Potentially suitable career",
    "about.label.potentialD": "Your profile matches this career in general. It is an idea to explore.",
    "about.label.unverified": "Eligibility not yet verified",
    "about.label.unverifiedD": "We do not have all the official rules (for example age limits). Check the official notification.",
    "about.label.eligible": "Eligible based on available recorded criteria",
    "about.label.eligibleD": "You meet the rules we have recorded. Official rules may have more conditions.",
    "about.label.vacancy": "Verified active vacancy",
    "about.label.vacancyD": "Not used in this version, because we do not have a live official vacancy feed.",
    "about.discTitle": "Disclaimer",
    "about.disc.1": "Information on this website is for general guidance only. It may be incomplete or out of date.",
    "about.disc.2": "Always read the official notification or scheme guidelines before applying. Official rules always win.",
    "about.disc.3": "A recommendation is not a promise of a job, admission, loan or benefit.",
    "about.disc.4": "This is a prototype. Records marked \"Demo data\" are examples and must not be used for real decisions.",
    "about.disc.5": "Beware of anyone asking for money for government jobs. Official recruitment never needs a bribe or an agent.",

    // ---- Privacy ----
    "privacy.title": "Privacy Information — CareerSaathi AI",
    "privacy.h1": "Privacy Information",
    "privacy.lead": "Short version: we do not collect your personal data. Your answers are processed on your own device.",
    "privacy.updated": "Last updated: 22 October 2026",
    "privacy.collectTitle": "What we ask for",
    "privacy.collect.1": "Education, skills, experience and career goals — to suggest careers.",
    "privacy.collect.2": "State and district — to show relevant state resources.",
    "privacy.collect.3": "Your name is optional. You can use the site without it.",
    "privacy.neverTitle": "What we never ask for",
    "privacy.never.1": "Aadhaar, PAN or any ID number",
    "privacy.never.2": "Bank account or card details",
    "privacy.never.3": "Passwords or OTPs",
    "privacy.never.4": "Phone number, email or photos",
    "privacy.whereTitle": "Where your answers are kept",
    "privacy.where.1": "Your answers are processed inside your browser. There is no CareerSaathi server or database.",
    "privacy.where.2": "If you choose \"Remember on this device\", answers are saved only in this browser. You can delete them anytime.",
    "privacy.where.3": "We do not share anything with employers, agencies or advertisers.",
    "privacy.where.4": "This version has no ads, no tracking and no analytics.",
    "privacy.where.5": "If you do not tick \"Remember\", your answers are kept only until you close the browser tab.",
    "privacy.thirdTitle": "Outside services",
    "privacy.third.1": "The page font is loaded from Google Fonts, which can see your IP address, like any website you visit.",
    "privacy.third.2": "When you click an official link (for example ssc.gov.in), that website's own privacy policy applies.",
    "privacy.deleteTitle": "Delete data saved on this device",
    "privacy.deleteText": "This removes your saved language choice and any saved profile from this browser.",
    "privacy.deleteBtn": "Delete my saved data",
    "privacy.deleteDone": "Done. All CareerSaathi data saved in this browser has been deleted.",
    "privacy.deleteNone": "There was no CareerSaathi data saved in this browser.",
    "privacy.deleteError": "Your browser blocked access to saved data, so nothing was stored here."
  },

  hi: {
    // ---- Shared ----
    "skip": "मुख्य सामग्री पर जाएँ",
    "brand.name": "करियरसाथी AI",
    "brand.tagline": "आपकी पढ़ाई। आपका हुनर। आपके अवसर।",
    "nav.label": "मुख्य मेन्यू",
    "nav.menu": "मेन्यू",
    "nav.home": "होम",
    "nav.profile": "मेरी प्रोफ़ाइल",
    "nav.recommendations": "सुझाव",
    "nav.jobs": "सरकारी नौकरी",
    "nav.schemes": "योजनाएँ",
    "nav.courses": "कोर्स",
    "nav.dashboard": "डैशबोर्ड",
    "nav.about": "हमारे बारे में",
    "nav.privacy": "गोपनीयता",
    "lang.label": "भाषा चुनें",
    "footer.note": "करियरसाथी AI एक मुफ़्त मार्गदर्शन टूल है। यह सरकारी वेबसाइट नहीं है और नौकरी नहीं देता।",
    "footer.verify": "भर्ती, योजना और पात्रता हमेशा सरकारी वेबसाइट पर जाँचें।",
    "footer.disclaimer": "अस्वीकरण पढ़ें",
    "footer.privacy": "गोपनीयता जानकारी",
    "footer.demo": "प्रोटोटाइप · डेमो डेटा पर साफ़ लेबल लगा है",

    "badge.soon": "जल्द आ रहा है",
    "badge.demo": "डेमो डेटा",
    "state.loading": "लोड हो रहा है…",
    "state.error": "कुछ गड़बड़ हो गई। पेज दोबारा खोलकर फिर से कोशिश करें।",

    // ---- Homepage ----
    "home.title": "करियरसाथी AI — भारत के लिए मुफ़्त करियर मार्गदर्शन",
    "home.eyebrow": "मुफ़्त · बिना साइन-अप · हिंदी और अंग्रेज़ी में",
    "home.h1": "अपनी पढ़ाई और हुनर के हिसाब से सही करियर चुनें",
    "home.hindiTagline": "आपकी योग्यता से आपके रोज़गार तक।",
    "home.lead": "कुछ आसान सवालों के जवाब दें। आपके लिए करियर के विकल्प, सरकारी भर्ती की आधिकारिक वेबसाइटें, योजनाएँ और कोर्स देखें — हर सुझाव का साफ़ कारण भी।",
    "home.ctaStart": "मेरी करियर प्रोफ़ाइल बनाएँ",
    "home.ctaHow": "देखें यह कैसे काम करता है",
    "home.privacyLine": "लॉगिन नहीं। आधार नहीं। आपके जवाब आपके फ़ोन या कंप्यूटर में ही रहते हैं।",

    "home.whoTitle": "हर तरह के छात्र और कामगार के लिए",
    "home.who.10": "10वीं और 12वीं पास",
    "home.who.iti": "ITI और डिप्लोमा धारक",
    "home.who.grad": "ग्रेजुएट और पोस्ट-ग्रेजुएट",
    "home.who.fresher": "फ्रेशर और नौकरी खोजने वाले",
    "home.who.working": "नौकरीपेशा लोग",
    "home.who.skilled": "हुनरमंद कारीगर",
    "home.who.business": "अपना काम शुरू करने वाले",

    "home.howTitle": "यह कैसे काम करता है",
    "home.how.1t": "अपने बारे में बताएँ",
    "home.how.1d": "पढ़ाई, हुनर, अनुभव और लक्ष्य। नाम बताना ज़रूरी नहीं।",
    "home.how.2t": "हम क़दम-दर-क़दम मिलान करते हैं",
    "home.how.2d": "आसान और खुले नियम आपकी योग्यता, हुनर, अनुभव और पसंद जाँचते हैं।",
    "home.how.3t": "कारण के साथ सुझाव देखें",
    "home.how.3d": "हर सुझाव बताता है कि वह क्यों सही है और कौन-सा हुनर अभी कम है।",
    "home.how.4t": "आधिकारिक वेबसाइट देखें",
    "home.how.4d": "सरकारी भर्ती पोर्टल, योजनाओं और भरोसेमंद कोर्स के लिंक।",
    "home.how.5t": "30 दिन का प्लान अपनाएँ",
    "home.how.5d": "आपके लक्ष्य के हिसाब से हर हफ़्ते के छोटे काम।",

    "home.exploreTitle": "आप क्या-क्या देख सकते हैं",
    "home.f.match.t": "करियर सुझाव",
    "home.f.match.d": "आपकी योग्यता और हुनर से मेल खाते करियर, साफ़ कारण के साथ।",
    "home.f.jobs.t": "सरकारी नौकरी जानकारी",
    "home.f.jobs.d": "SSC, रेलवे, बैंक, राज्य लोक सेवा आयोग, शिक्षक और अप्रेंटिसशिप की आधिकारिक वेबसाइटें।",
    "home.f.schemes.t": "योजना खोजें",
    "home.f.schemes.d": "ट्रेनिंग, रोज़गार और व्यवसाय से जुड़ी योजनाएँ जिन्हें आप जाँच सकते हैं।",
    "home.f.courses.t": "कोर्स और हुनर",
    "home.f.courses.d": "जो हुनर कम है उसके लिए मुफ़्त और आधिकारिक सीखने के विकल्प।",
    "home.f.dash.t": "मेरा डैशबोर्ड",
    "home.f.dash.d": "आपके सुझाव, हुनर की कमी और अगले क़दम एक ही जगह।",
    "home.f.plan.t": "30 दिन का एक्शन प्लान",
    "home.f.plan.d": "आपके करियर लक्ष्य के हिसाब से बदलने वाला आसान प्लान।",

    "home.trustTitle": "हमारा आपसे वादा",
    "home.trust.1t": "ईमानदार सुझाव",
    "home.trust.1d": "हम नौकरी का वादा नहीं करते। हम कारण दिखाते हैं, मनगढ़ंत प्रतिशत नहीं।",
    "home.trust.2t": "सिर्फ़ आधिकारिक स्रोत",
    "home.trust.2d": "हम सरकारी वेबसाइट का लिंक देते हैं। हम भर्ती, तारीख़ या वेतन ख़ुद से नहीं बनाते।",
    "home.trust.3t": "आपका डेटा आपके पास",
    "home.trust.3d": "सब कुछ आपके ब्राउज़र में चलता है। कुछ भी हमें या किसी कंपनी को नहीं भेजा जाता।",
    "home.trust.4t": "पूरी तरह मुफ़्त",
    "home.trust.4d": "कोई फ़ीस नहीं, कोई साइन-अप नहीं, कोई प्रीमियम प्लान नहीं।",

    "home.bottomTitle": "अपना रास्ता खोजने के लिए तैयार हैं?",
    "home.bottomText": "लगभग 5 मिनट लगते हैं। जिस सवाल पर पक्का न हों, उसे छोड़ सकते हैं।",

    // ---- Profile form ----
    "profile.title": "करियर प्रोफ़ाइल — करियरसाथी AI",
    "profile.h1": "आपकी करियर प्रोफ़ाइल",
    "profile.lead": "जितना पता हो उतना भरें। * वाले सवाल ज़रूरी हैं। बाक़ी सब आपकी मर्ज़ी।",
    "profile.privacyNote": "आपके जवाब इसी ब्राउज़र में रहते हैं। हम आधार, फ़ोन नंबर या बैंक की जानकारी कभी नहीं माँगते।",
    "profile.noscript": "प्रोफ़ाइल फ़ॉर्म भरने के लिए JavaScript चालू करें।",
    "form.progress": "क़दम {n} / {total}",
    "form.progressLabel": "फ़ॉर्म की प्रगति",
    "form.reviewStep": "आख़िरी जाँच",

    "step.basic.t": "बुनियादी जानकारी",
    "step.basic.d": "अपने बारे में थोड़ा बताएँ। नाम बताना ज़रूरी नहीं।",
    "step.education.t": "पढ़ाई",
    "step.education.d": "अपनी सबसे ऊँची योग्यता चुनें। नीचे और योग्यताएँ भी जोड़ सकते हैं।",
    "step.skills.t": "हुनर",
    "step.skills.d": "जो भी काम आप कर सकते हैं उस पर टिक करें, चाहे थोड़ा ही आता हो। अपना हुनर ख़ुद भी लिख सकते हैं।",
    "step.experience.t": "काम का अनुभव",
    "step.experience.d": "कोई भी नौकरी, हेल्पर का काम, परिवार का व्यवसाय या फ़्रीलांस काम गिना जाएगा। आप यह क़दम छोड़ भी सकते हैं।",
    "step.goals.t": "करियर लक्ष्य",
    "step.goals.d": "आगे आप क्या करना चाहते हैं? एक से ज़्यादा चुन सकते हैं।",
    "step.eligibility.t": "पात्रता की वैकल्पिक जानकारी",
    "step.eligibility.d": "कुछ सरकारी नौकरियों और योजनाओं में कुछ वर्गों को उम्र में छूट या ख़ास मदद मिलती है। अगर आप चाहते हैं कि हम ऐसे नियम बताएँ, तभी भरें। आप यह क़दम छोड़ भी सकते हैं।",
    "step.review.t": "अपने जवाब जाँचें",
    "step.review.d": "अपने जवाब एक बार देख लें। कुछ बदलना हो तो \"बदलें\" दबाएँ।",

    "f.required": "ज़रूरी",
    "f.choose": "— चुनें —",
    "f.name": "आपका नाम",
    "f.nameHint": "ज़रूरी नहीं। ख़ाली छोड़ सकते हैं या कोई छोटा नाम लिख सकते हैं।",
    "f.ageRange": "उम्र",
    "f.state": "राज्य / केंद्र शासित प्रदेश",
    "f.district": "ज़िला",
    "f.districtHint": "ज़रूरी नहीं।",
    "f.preferredLocation": "आप कहाँ काम करना चाहेंगे?",
    "f.language": "पसंदीदा भाषा",
    "f.employmentStatus": "अभी आप क्या कर रहे हैं?",
    "f.eduLevel": "सबसे ऊँची योग्यता",
    "f.stream": "स्ट्रीम / विषय वर्ग",
    "f.streamHint": "ज़रूरी नहीं। ख़ासकर 12वीं और उसके बाद के लिए।",
    "f.specialization": "विषय या विशेषज्ञता",
    "f.specializationHint": "ज़रूरी नहीं। जैसे: B.Com, इलेक्ट्रीशियन ट्रेड, कंप्यूटर साइंस।",
    "f.passingYear": "पास होने का साल",
    "f.passingYearHint": "ज़रूरी नहीं। रिज़ल्ट आना बाक़ी है तो अनुमानित साल लिखें।",
    "f.certificates": "अन्य सर्टिफ़िकेट",
    "f.certificatesHint": "ज़रूरी नहीं। जैसे: NCC, टाइपिंग सर्टिफ़िकेट, ड्राइविंग लाइसेंस।",
    "f.extraQuals": "अन्य योग्यताएँ",
    "f.extraQualsHint": "आपके पास कोई और डिग्री, डिप्लोमा या ITI हो तो जोड़ें।",
    "f.qualN": "योग्यता {n}",
    "f.qualLevel": "योग्यता",
    "f.addQual": "एक और योग्यता जोड़ें",
    "f.removeQual": "योग्यता {n} हटाएँ",
    "f.skillsNone": "अभी कोई हुनर नहीं चुना? कोई बात नहीं — हम सीखने लायक़ हुनर सुझाएँगे।",
    "f.customSkill": "अपना हुनर जोड़ें",
    "f.customSkillHint": "जैसे: मेहंदी डिज़ाइन, वीडियो एडिटिंग, ब्यूटी पार्लर का काम।",
    "f.addSkill": "जोड़ें",
    "f.yourSkills": "आपके जोड़े हुए हुनर",
    "f.removeSkill": "{skill} हटाएँ",
    "f.skillAdded": "{skill} जोड़ दिया गया।",
    "f.expType": "आपका अनुभव",
    "f.expYears": "कुल अनुभव (साल में)",
    "f.expYearsHint": "सिर्फ़ पूरे साल। 1 साल से कम है तो 0 लिखें।",
    "f.expTitle": "अभी का या पिछला पद",
    "f.expTitleHint": "ज़रूरी नहीं। जैसे: दुकान सहायक, डेटा एंट्री ऑपरेटर।",
    "f.expIndustry": "क्षेत्र / इंडस्ट्री",
    "f.expIndustryHint": "ज़रूरी नहीं। जैसे: रिटेल, निर्माण, शिक्षा।",
    "f.expPrevious": "पहले किया हुआ अन्य काम",
    "f.expPreviousHint": "ज़रूरी नहीं। कुछ शब्द काफ़ी हैं।",
    "f.freelance": "मैंने फ़्रीलांस काम किया है या अपना काम चलाया है",
    "f.goals": "आपके लक्ष्य",
    "f.budget": "पढ़ाई का बजट",
    "f.budgetHint": "ज़रूरी नहीं। इससे हम आपके बजट के कोर्स सुझा पाएँगे।",
    "f.exactAge": "पूरे सालों में उम्र",
    "f.exactAgeHint": "ज़रूरी नहीं। सरकारी उम्र सीमा पूरे सालों में गिनी जाती है। हम जन्मतिथि नहीं पूछते।",
    "f.category": "वर्ग (कैटेगरी)",
    "f.categoryHint": "ज़रूरी नहीं। सिर्फ़ आधिकारिक उम्र छूट के नियम याद दिलाने के लिए।",
    "f.gender": "लिंग",
    "f.genderHint": "ज़रूरी नहीं। कुछ योजनाएँ ख़ास तौर पर महिलाओं के लिए हैं।",
    "f.pwd": "दिव्यांग व्यक्ति (PwD)",
    "f.exServiceman": "पूर्व सैनिक",
    "f.optional": "ज़रूरी नहीं।",

    "btn.next": "आगे",
    "btn.back": "पीछे",
    "btn.skip": "यह क़दम छोड़ें",
    "btn.save": "मेरी प्रोफ़ाइल सेव करें",
    "btn.edit": "बदलें",
    "btn.editProfile": "प्रोफ़ाइल बदलें",
    "btn.deleteProfile": "प्रोफ़ाइल मिटाएँ",
    "btn.startOver": "फिर से शुरू करें",
    "btn.continue": "सेव प्रोफ़ाइल के साथ आगे बढ़ें",

    "review.notGiven": "नहीं बताया",
    "review.skipped": "छोड़ा गया",
    "review.yes": "हाँ",
    "review.no": "नहीं",
    "review.years": "{n} साल",
    "review.remember": "मेरी प्रोफ़ाइल इस डिवाइस पर याद रखें",
    "review.rememberHint": "शेयर किए गए या साइबर कैफ़े के कंप्यूटर पर इसे टिक न करें। तब टैब बंद करते ही आपके जवाब मिट जाएँगे।",

    "saved.title": "आपकी प्रोफ़ाइल सेव हो गई",
    "saved.local": "इस डिवाइस पर सेव है। अगली बार आने पर भी यहाँ मिलेगी।",
    "saved.session": "सिर्फ़ इस ब्राउज़र टैब के बंद होने तक सेव है।",
    "saved.next": "आपके करियर सुझाव तैयार हैं। ये इसी प्रोफ़ाइल से बनते हैं और प्रोफ़ाइल बदलने पर बदल जाते हैं।",
    "saved.deleted": "आपकी प्रोफ़ाइल इस ब्राउज़र से मिटा दी गई है।",
    "resume.title": "फिर से स्वागत है",
    "resume.text": "इस ब्राउज़र में आपकी एक सेव प्रोफ़ाइल मिली है।",

    "err.summary": "आगे बढ़ने से पहले इन्हें ठीक करें:",
    "err.required": "कृपया इसे चुनें या भरें।",
    "err.nameChars": "सिर्फ़ अक्षर और खाली जगह इस्तेमाल करें।",
    "err.tooLong": "यह बहुत लंबा है।",
    "err.year": "सही 4 अंकों का साल लिखें, जैसे 2024।",
    "err.years": "0 से 50 तक पूरे साल लिखें।",
    "err.age": "14 से 70 के बीच उम्र लिखें।",
    "err.goalsRequired": "कम से कम एक लक्ष्य चुनें।",
    "err.skillEmpty": "पहले कोई हुनर लिखें।",
    "err.skillLong": "हर हुनर 40 अक्षरों से कम रखें।",
    "err.skillMax": "आप ज़्यादा से ज़्यादा 20 हुनर ख़ुद जोड़ सकते हैं।",
    "err.skillDup": "यह हुनर पहले से आपकी सूची में है।",

    // ---- Recommendations ----
    "badge.open": "खोलें",
    "rec.title": "करियर सुझाव — करियरसाथी AI",
    "rec.h1": "आपके करियर सुझाव",
    "rec.lead": "सिर्फ़ आपकी प्रोफ़ाइल के जवाबों पर आधारित। हर कार्ड बताता है कि वह क्यों सुझाया गया और आपको क्या जाँचना चाहिए।",
    "rec.notice": "ये सुझाव हैं, नौकरी का ऑफ़र नहीं। हम चालू भर्ती नहीं दिखाते — आवेदन से पहले हमेशा आधिकारिक स्रोत देखें।",
    "rec.basedOn": "इन पर आधारित:",
    "rec.editProfile": "प्रोफ़ाइल बदलें",
    "rec.noProfileT": "अभी कोई प्रोफ़ाइल नहीं",
    "rec.noProfileD": "पहले छोटा प्रोफ़ाइल फ़ॉर्म भरें। लगभग 5 मिनट लगते हैं, लॉगिन नहीं चाहिए।",
    "rec.noProfileBtn": "मेरी करियर प्रोफ़ाइल बनाएँ",
    "rec.noMatchesT": "अभी कोई मेल नहीं मिला",
    "rec.noMatchesD": "अपनी प्रोफ़ाइल में और लक्ष्य या हुनर चुनकर देखें। हमारी करियर सूची अभी छोटी है (डेमो डेटा)।",
    "rec.incomplete": "बेहतर सुझावों के लिए प्रोफ़ाइल में अपनी {items} जोड़ें।",
    "rec.missing.education": "पढ़ाई",
    "rec.missing.goals": "लक्ष्य",
    "rec.missing.skills": "हुनर",
    "rec.filterLabel": "प्रकार के हिसाब से देखें",
    "rec.filter.all": "सभी",
    "rec.count": "{total} में से {shown} सुझाव दिख रहे हैं",
    "rec.showMore": "और दिखाएँ",
    "rec.fit.strong": "अच्छा मेल",
    "rec.fit.possible": "आंशिक मेल",
    "rec.fit.upskill": "नया हुनर सीखकर संभव",
    "rec.why": "हमने यह क्यों सुझाया",
    "rec.skillsToBuild": "सीखने लायक़ हुनर",
    "rec.more": "जाँचने की बातें और अगले क़दम",
    "rec.check": "जाँचने की बातें",
    "rec.next": "आगे क्या करें",
    "rec.sources": "आधिकारिक स्रोत",
    "rec.sourceChecked": "वेबसाइट का पता {date} को जाँचा गया",
    "rec.newTab": "नए टैब में खुलेगा",
    "rec.labelsHelp": "इन लेबल का मतलब क्या है?",
    "rec.futureT": "आगे के रास्ते",
    "rec.futureD": "ये आपके लक्ष्यों से मेल खाते हैं, पर इनके लिए ऐसी योग्यता चाहिए जो आपने अभी नहीं भरी है।",
    "rec.futureNeeds": "इनमें से कोई एक चाहिए: {levels}",
    "rec.emptyFilter": "इस प्रकार का कोई सुझाव नहीं। सब देखने के लिए \"सभी\" चुनें।",
    "why.goal": "आपके लक्ष्य से मेल: {goals}।",
    "why.qualMeets": "आपकी योग्यता ({level}) इस रास्ते के लिए हमारी दर्ज सूची में है।",
    "why.qualAny": "कोई न्यूनतम योग्यता दर्ज नहीं है — यहाँ हुनर सबसे ज़्यादा मायने रखता है।",
    "why.skillsHave": "आपके पास पहले से है: {skills}।",
    "why.optionalHave": "आपके काम आने वाले अतिरिक्त हुनर: {skills}।",
    "why.noSkillNeeded": "कोई ख़ास हुनर ज़रूरी दर्ज नहीं है — चयन आमतौर पर परीक्षा, मेरिट या इंटरव्यू से होता है।",
    "why.expMeets": "आपका अनुभव दर्ज ज़रूरत को पूरा करता है।",
    "why.remote": "यह काम अक्सर घर से भी हो सकता है।",
    "check.qualVaries": "योग्यता के नियम राज्य या सूचना के हिसाब से बदलते हैं — आधिकारिक स्रोत देखें।",
    "check.qualMissing": "प्रोफ़ाइल में अपनी पढ़ाई जोड़ें ताकि हम योग्यता मिला सकें।",
    "check.expShort": "आमतौर पर लगभग {n}+ साल का अनुभव माँगा जाता है।",
    "check.expUnknown": "लगभग {n}+ साल का अनुभव माँगा जा सकता है।",
    "check.location": "आप घर से काम चाहते हैं, पर यह काम आमतौर पर साइट पर होता है।",
    "check.govtAge": "उम्र सीमा, फ़ीस और तारीख़ें हर सूचना में बदलती हैं। नई आधिकारिक सूचना ज़रूर पढ़ें।",
    "check.relaxation": "आपको उम्र में छूट मिल सकती है — आधिकारिक सूचना में पक्का करें।",
    "check.demo": "डेमो डेटा: यह जानकारी अभी आधिकारिक सूचना से नहीं जाँची गई है।",
    "next.learn": "सीखें: {skills}। कोर्स पेज पर मुफ़्त और आधिकारिक विकल्प देखें।",
    "next.govt": "नीचे दिए आधिकारिक स्रोत खोलें और नई भर्ती सूचना देखें।",
    "next.apprentice": "आधिकारिक अप्रेंटिसशिप पोर्टल पर रजिस्टर करें और अपने पास के मौक़े देखें।",
    "next.private": "राष्ट्रीय करियर सेवा पोर्टल और भरोसेमंद स्थानीय जॉब बोर्ड पर नौकरियाँ खोजें।",
    "next.self": "myScheme पर व्यवसाय मदद की योजनाएँ देखें और अपने बैंक या ज़िला उद्योग केंद्र से पूछें।",
    "next.preferred": "अक्सर पसंद किया जाता है: {preferred}।",
    "saved.seeRecs": "मेरे सुझाव देखें",
    "saved.seeDash": "मेरा डैशबोर्ड खोलें",

    // ---- Jobs & schemes ----
    "jobs.title": "सरकारी नौकरी जानकारी — करियरसाथी AI",
    "jobs.h1": "सरकारी नौकरी जानकारी",
    "jobs.lead": "वे आधिकारिक वेबसाइटें जहाँ सरकारी भर्तियाँ निकलती हैं, प्रकार के हिसाब से। हम चालू भर्ती या तारीख़ें नहीं दिखाते।",
    "jobs.verify": "चालू भर्ती और पात्रता पक्की करने के लिए आधिकारिक भर्ती वेबसाइट देखें।",
    "jobs.scamT": "नौकरी के धोखे से बचें",
    "jobs.scam": "सरकारी नौकरी कभी बिकती नहीं। किसी एजेंट को पैसे न दें। सिर्फ़ आधिकारिक वेबसाइट पर भरोसा करें, जो आमतौर पर .gov.in या .nic.in पर ख़त्म होती हैं।",
    "jobs.searchLabel": "स्रोत खोजें",
    "jobs.searchHint": "जैसे: SSC, रेलवे, शिक्षक, बैंक",
    "jobs.filterLabel": "प्रकार के हिसाब से देखें",
    "jobs.all": "सभी",
    "jobs.count": "{n} आधिकारिक स्रोत",
    "jobs.empty": "आपकी खोज से कोई स्रोत नहीं मिला। कोई और शब्द आज़माएँ या \"सभी\" चुनें।",
    "jobs.visit": "आधिकारिक वेबसाइट खोलें",
    "jobs.checked": "वेबसाइट का पता {date} को जाँचा गया",
    "jobs.yourState": "आपका राज्य",
    "jobs.stateMissing": "{state} की भर्ती संस्थाएँ अभी हमारी सूची में नहीं हैं। \"{state} लोक सेवा आयोग\" खोजें और सिर्फ़ .gov.in या .nic.in वाली वेबसाइट इस्तेमाल करें।",
    "jobs.stateHint": "अपने राज्य की भर्ती संस्थाएँ पहले देखने के लिए प्रोफ़ाइल में अपना राज्य सेव करें।",
    "jobs.stateExamples": "हमने उदाहरण के तौर पर कुछ राज्य आयोग दिए हैं। हर राज्य का अपना लोक सेवा आयोग और अधीनस्थ चयन बोर्ड होता है।",
    "jobs.seeCareers": "देखें कौन-सी सरकारी नौकरियाँ आपके लिए सही हो सकती हैं",
    "schemes.title": "योजना खोजें — करियरसाथी AI",
    "schemes.h1": "सरकारी योजना खोजें",
    "schemes.lead": "ट्रेनिंग, अप्रेंटिसशिप, इंटर्नशिप और व्यवसाय मदद की योजनाएँ, आधिकारिक पेजों से संक्षेप में।",
    "schemes.warn": "यहाँ दिया सुझाव मंज़ूरी नहीं है। पात्रता, ऋण, सब्सिडी या लाभ का फ़ैसला सिर्फ़ आधिकारिक विभाग या बैंक करता है।",
    "schemes.mysT": "myScheme पर सभी योजनाएँ खोजें",
    "schemes.mysBtn": "myScheme खोलें",
    "schemes.worth": "आपके लिए देखने लायक़",
    "schemes.worthD": "कुछ प्रकाशित शर्तें आपकी प्रोफ़ाइल से मेल खाती लगती हैं। सब कुछ आधिकारिक पेज पर ज़रूर पक्का करें।",
    "schemes.others": "अन्य योजनाएँ",
    "schemes.all": "सभी योजनाएँ",
    "schemes.noProfile": "कौन-सी योजनाएँ आपके लिए देखने लायक़ हैं, यह जानने के लिए अपनी प्रोफ़ाइल भरें।",
    "schemes.noWorth": "अभी आपकी प्रोफ़ाइल के लिए कोई योजना ख़ास तौर पर मेल नहीं खाती। आप नीचे सभी योजनाएँ पढ़ सकते हैं या myScheme पर खोज सकते हैं।",
    "schemes.filterLabel": "श्रेणी के हिसाब से देखें",
    "schemes.allCats": "सभी",
    "schemes.ministry": "चलाने वाला विभाग",
    "schemes.purpose": "उद्देश्य",
    "schemes.audience": "किसके लिए",
    "schemes.why": "यह आपके लिए क्यों हो सकती है",
    "schemes.check": "कृपया पक्का करें",
    "schemes.eligibility": "मुख्य शर्तें (जैसा प्रकाशित है)",
    "schemes.benefits": "लाभ (जैसा प्रकाशित है)",
    "schemes.apply": "आवेदन कैसे करें",
    "schemes.details": "शर्तें, लाभ और आवेदन का तरीक़ा",
    "schemes.official": "आधिकारिक पेज",
    "schemes.readFrom": "{date} को इस स्रोत से जाँचा गया सारांश: {source}",
    "schemes.important": "ज़रूरी:",
    "schemes.badge": "देखने लायक़",
    "sch.why.goal": "आपके लक्ष्य से मेल: {goals}।",
    "sch.why.status": "आपकी अभी की स्थिति वाले लोगों के लिए बनी है।",
    "sch.why.edu": "आपकी योग्यता ({level}) प्रकाशित शर्तों में है।",
    "sch.why.age": "आपकी उम्र प्रकाशित उम्र सीमा के अंदर है।",
    "sch.why.ageRange": "आपका आयु वर्ग प्रकाशित उम्र सीमा में आता लगता है।",
    "sch.why.group": "आप उस वर्ग में हैं जिसके लिए यह योजना बनी है।",
    "sch.why.skill": "आपका काम मेल खाता है: {skills}।",
    "sch.check.edu": "आपकी दर्ज योग्यता शायद मेल न खाए — शर्तें देखें।",
    "sch.check.ageOut": "आपकी उम्र प्रकाशित सीमा से बाहर हो सकती है।",
    "sch.check.ageExact": "प्रकाशित उम्र सीमा {min}–{max} साल है। अपनी सही उम्र जाँचें।",
    "sch.check.group": "यह योजना SC/ST और/या महिला उद्यमियों के लिए है। देखें कि यह आप पर लागू होती है या नहीं।",
    "sch.check.groupNo": "यह योजना SC/ST और/या महिला उद्यमियों के लिए है, इसलिए शायद आप पर लागू न हो।",
    "sch.check.final": "आख़िरी पात्रता का फ़ैसला सिर्फ़ आधिकारिक विभाग या बैंक करता है।",

    // ---- Courses ----
    "courses.title": "कोर्स और हुनर — करियरसाथी AI",
    "courses.h1": "कोर्स और हुनर",
    "courses.lead": "आपके करियर के लिए ज़रूरी हुनर सीखने के मुफ़्त और आधिकारिक तरीक़े। हम सिर्फ़ वही ख़र्च, अवधि और प्रमाणपत्र बताते हैं जो हमने संस्था के अपने पेज पर पढ़े।",
    "courses.noJob": "कोर्स पूरा करने से नौकरी की गारंटी नहीं मिलती। इससे हुनर बनता है और उसका सबूत मिलता है।",
    "courses.gapsT": "आपके हुनर की कमी",
    "courses.gapsD": "आपके मुख्य करियर सुझावों में जो हुनर कम हैं। संख्या बताती है कि कितने करियर में यह चाहिए।",
    "courses.noGaps": "आपके मुख्य करियर सुझावों में कोई हुनर कम नहीं दिखता। फिर भी नीचे कोर्स देख सकते हैं।",
    "courses.noProfile": "अपने हुनर की कमी के हिसाब से कोर्स देखने के लिए प्रोफ़ाइल सेव करें। नीचे सभी कोर्स देख सकते हैं।",
    "courses.forYouT": "आपके लिए सुझाव",
    "courses.uncovered": "इनके लिए हमें कोई जाँचा हुआ मुफ़्त कोर्स नहीं मिला: {skills}। स्किल इंडिया डिजिटल हब देखें या पास के ITI या PMKVY सेंटर से पूछें।",
    "courses.browseT": "सभी कोर्स देखें",
    "courses.skillFilter": "इस हुनर के कोर्स दिखाएँ",
    "courses.anySkill": "कोई भी हुनर",
    "courses.costFilter": "ख़र्च",
    "courses.cost.all": "सभी",
    "courses.cost.free": "मुफ़्त पढ़ाई",
    "courses.count": "सीखने के {n} विकल्प",
    "courses.emptyFilter": "हमारी सूची में अभी इस हुनर का कोई कोर्स नहीं है। स्किल इंडिया डिजिटल हब देखें।",
    "courses.provider": "संस्था",
    "courses.topics": "आप क्या सीखेंगे",
    "courses.prereq": "शुरू करने से पहले",
    "courses.cost": "ख़र्च",
    "courses.duration": "अवधि",
    "courses.certificate": "प्रमाणपत्र",
    "courses.mode": "तरीक़ा",
    "courses.howToFind": "कैसे खोजें",
    "courses.why": "यह कैसे मदद कर सकता है",
    "courses.check": "ध्यान रखें",
    "courses.open": "संस्था की वेबसाइट खोलें",
    "courses.notVerified": "जाँचा नहीं गया — संस्था से पता करें",
    "courses.checkedFrom": "{date} को इस स्रोत से पढ़ा गया: {source}",
    "courses.mode.online": "ऑनलाइन",
    "courses.mode.in-person": "केंद्र पर जाकर",
    "courses.mode.both": "ऑनलाइन या केंद्र पर",
    "courses.costLabel.free": "मुफ़्त",
    "courses.costLabel.free-exam-fee": "पढ़ाई मुफ़्त · प्रमाणपत्र के लिए परीक्षा फ़ीस",
    "courses.costLabel.fee": "फ़ीस लगती है",
    "courses.sidhT": "स्किल इंडिया डिजिटल हब पर और देखें",
    "courses.sidhBtn": "स्किल इंडिया डिजिटल हब खोलें",
    "courses.seeCourses": "इन हुनर के कोर्स खोजें",
    "course.why.gap": "जो हुनर आपमें कम हैं, वे सिखाता है: {skills}।",
    "course.why.careers": "इनके लिए उपयोगी: {careers}।",
    "course.why.free": "मुफ़्त, जैसा संस्था ने बताया है।",
    "course.check.costUnknown": "ख़र्च हम पक्का नहीं कर सके। जुड़ने से पहले जाँचें।",
    "course.check.budget": "यह आपकी प्रोफ़ाइल के पढ़ाई बजट में शायद न आए।",
    "course.check.examFee": "पढ़ाई मुफ़्त है, पर प्रमाणपत्र के लिए फ़ीस वाली परीक्षा देनी होगी।",
    "course.check.durationUnknown": "अवधि जाँची नहीं गई — यह चुने हुए कोर्स पर निर्भर है।",
    "course.check.already": "आपके पास पहले से है: {skills}।",
    "course.check.noJob": "सिर्फ़ कोर्स से नौकरी की गारंटी नहीं मिलती।",

    // ---- Dashboard & plan ----
    "plan.title": "आपका 30 दिन का एक्शन प्लान",
    "plan.lead": "आपके लक्ष्यों के हिसाब से अगले 30 दिनों के छोटे क़दम। काम पूरा होने पर टिक करें — टिक सिर्फ़ इसी डिवाइस पर सेव होते हैं।",
    "plan.week1": "हफ़्ता 1 — तय करें और तैयारी करें",
    "plan.week2": "हफ़्ता 2 — सीखना शुरू करें",
    "plan.week3": "हफ़्ता 3 — अभ्यास करें और आवेदन करें",
    "plan.week4": "आख़िरी दौर — क़दम उठाएँ और समीक्षा करें",
    "plan.days": "दिन {days}",
    "plan.progress": "{total} में से {done} काम पूरे",
    "plan.reset": "सारे टिक हटाएँ",
    "plan.completeProfile": "अपनी प्रोफ़ाइल (पढ़ाई और लक्ष्य) पूरी करें ताकि यह प्लान और सटीक बन सके।",
    "plan.shortlist": "अपने मुख्य सुझावों ({careers}) के कार्ड पढ़ें और ध्यान देने के लिए 1–2 चुनें।",
    "plan.exploreCareers": "सुझाव और सरकारी स्रोत देखें, और ध्यान देने के लिए 1–2 रास्ते चुनें।",
    "plan.govt.readNotice": "{career} की आधिकारिक वेबसाइट खोलें और नई सूचना पूरी पढ़ें: पात्रता, उम्र सीमा, फ़ीस और तारीख़ें।",
    "plan.govt.readNoticeAny": "अपनी चुनी हुई परीक्षा की आधिकारिक भर्ती वेबसाइट खोलें और नई सूचना पूरी पढ़ें: पात्रता, उम्र सीमा, फ़ीस और तारीख़ें।",
    "plan.govt.documents": "अपनी मार्कशीट, प्रमाणपत्र और पहचान पत्र की कॉपी तैयार रखें (काग़ज़ और फ़ोन पर)। इन्हें कभी एजेंट को न दें।",
    "plan.private.resume": "अपनी पढ़ाई, हुनर और किए गए काम के साथ एक पेज का आसान बायोडाटा बनाएँ।",
    "plan.private.ncs": "राष्ट्रीय करियर सेवा (NCS) पोर्टल पर रजिस्टर करें।",
    "plan.appr.register": "आधिकारिक अप्रेंटिसशिप पोर्टल पर रजिस्टर करें — ग्रेजुएट और डिप्लोमा के लिए NATS, ट्रेड अप्रेंटिस के लिए NAPS।",
    "plan.intern.portal": "आधिकारिक पीएम इंटर्नशिप पोर्टल पर मौजूदा नियम पढ़ें और देखें कि रजिस्ट्रेशन खुले हैं या नहीं।",
    "plan.biz.idea": "अपने व्यवसाय का विचार एक पेज पर लिखें: क्या बेचेंगे, किसे बेचेंगे और शुरू करने के लिए क्या चाहिए।",
    "plan.higher.shortlist": "जो 3 कोर्स या कॉलेज चाहते हैं उनकी सूची बनाएँ और उनके आधिकारिक दाख़िला पेज खोलें।",
    "plan.startCourse": "सीखना शुरू करें: {course} ({skill} के लिए)।",
    "plan.practiseSkill": "{skill} सीखना शुरू करें — पास के ITI या PMKVY सेंटर से पूछें, या स्किल इंडिया डिजिटल हब देखें।",
    "plan.dailyHour": "{skill} का रोज़ कम से कम 1 घंटा अभ्यास करें।",
    "plan.govt.syllabus": "आधिकारिक परीक्षा वेबसाइट से सिलेबस और पिछले साल के पेपर डाउनलोड करें।",
    "plan.govt.timetable": "रोज़ पढ़ाई का टाइम-टेबल बनाएँ और उसका पालन करें।",
    "plan.private.proof": "अपने हुनर का सबूत जमा करें: प्रमाणपत्र, छोटे प्रोजेक्ट या अपने काम की फ़ोटो।",
    "plan.biz.customers": "कम से कम 5 संभावित ग्राहकों से बात करें। पूछें कि उन्हें क्या चाहिए और वे कितना देंगे।",
    "plan.biz.scheme": "{scheme} की जानकारी उसके आधिकारिक पेज पर पढ़ें और ज़रूरी दस्तावेज़ लिख लें।",
    "plan.appr.search": "पोर्टल पर अपने पास के मौक़े खोजें और अपने ट्रेड या डिग्री से मेल खाने वाले लिख लें।",
    "plan.secondSkill": "अगला हुनर सीखना शुरू करें: {skill}।",
    "plan.govt.mock": "हर कुछ दिन में समय बाँधकर एक अभ्यास टेस्ट दें और कमज़ोर विषय लिख लें।",
    "plan.private.apply": "भरोसेमंद पोर्टल पर अपने हुनर से मेल खाती कम से कम 5 नौकरियों में आवेदन करें।",
    "plan.appr.apply": "आधिकारिक पोर्टल से 3–5 सही मौक़ों पर आवेदन करें।",
    "plan.biz.costs": "शुरुआती ख़र्च, हर महीने का ख़र्च और बिक्री दाम की एक आसान शीट बनाएँ।",
    "plan.biz.documents": "अपने बैंक या ज़िला उद्योग केंद्र से पूछें कि कौन-से दस्तावेज़ और पंजीकरण चाहिए।",
    "plan.higher.dates": "आधिकारिक पेजों से दाख़िले या प्रवेश परीक्षा की तारीख़ें लिख लें।",
    "plan.govt.apply": "अगर कोई सूचना खुली है और आप उसके नियम पूरे करते हैं, तो आख़िरी तारीख़ से पहले सिर्फ़ आधिकारिक वेबसाइट पर आवेदन करें।",
    "plan.private.interview": "किसी दोस्त या परिवार वाले के साथ इंटरव्यू के आम सवालों के जवाब का अभ्यास करें।",
    "plan.biz.start": "छोटे से शुरू करें: पहली कुछ बिक्री करें और आने-जाने वाले पैसे का हिसाब रखें।",
    "plan.appr.follow": "पोर्टल पर अपने आवेदन की स्थिति देखें और विनम्रता से फ़ॉलो-अप करें।",
    "plan.review": "महीने की समीक्षा करें: क्या पूरा हुआ और क्या जारी रखना है। नए हुनर प्रोफ़ाइल में जोड़ें।",
    "plan.safety": "सावधान रहें: नौकरी, ऋण या योजना मंज़ूरी के लिए किसी को पैसे न दें। सिर्फ़ आधिकारिक वेबसाइट इस्तेमाल करें।",
    "plan.learnBasics": "बेसिक कंप्यूटर सीखें — आज लगभग हर नौकरी में यह काम आता है।",
    "plan.practiseGeneric": "रोज़ कुछ समय उस हुनर का अभ्यास करें जिसे आप बढ़ाना चाहते हैं।",
    "dash.title": "मेरा डैशबोर्ड — करियरसाथी AI",
    "dash.h1": "मेरा करियर डैशबोर्ड",
    "dash.hello": "नमस्ते, {name}!",
    "dash.helloAnon": "नमस्ते!",
    "dash.lead": "आपकी प्रोफ़ाइल से जुड़ी हर चीज़ एक जगह। यहाँ से कुछ भी कहीं नहीं भेजा जाता।",
    "dash.print": "प्रिंट करें या PDF सेव करें",
    "dash.noProfileT": "आपका डैशबोर्ड ख़ाली है",
    "dash.noProfileD": "करियर सुझाव, हुनर की कमी, कोर्स, योजनाएँ और 30 दिन का प्लान देखने के लिए छोटा प्रोफ़ाइल फ़ॉर्म भरें।",
    "dash.matchesT": "करियर सुझाव",
    "dash.matchesEmpty": "अभी कोई करियर सुझाव नहीं। प्रोफ़ाइल में और लक्ष्य या हुनर जोड़ें।",
    "dash.seeAll": "सभी {n} सुझाव देखें",
    "dash.govtT": "सरकारी भर्ती के स्रोत",
    "dash.govtD": "आपके सुझावों में शामिल सरकारी करियर की आधिकारिक वेबसाइटें।",
    "dash.govtEmpty": "आपके सुझावों में कोई सरकारी करियर नहीं है। फिर भी सभी आधिकारिक भर्ती स्रोत देख सकते हैं।",
    "dash.openExplorer": "सरकारी नौकरी जानकारी खोलें",
    "dash.gapsT": "हुनर की कमी का विश्लेषण",
    "dash.gapsD": "आपके मुख्य सुझावों में जो हुनर कम हैं, और कितने करियर में हर एक चाहिए।",
    "dash.gapsEmpty": "आपके मुख्य सुझावों में कोई हुनर कम नहीं है।",
    "dash.coursesT": "सुझाए गए कोर्स",
    "dash.coursesEmpty": "अभी कोई कोर्स सुझाव नहीं।",
    "dash.seeCourses": "सभी कोर्स देखें",
    "dash.schemesT": "सरकारी योजनाएँ",
    "dash.schemesEmpty": "अभी आपकी प्रोफ़ाइल के लिए कोई योजना ख़ास तौर पर मेल नहीं खाती। आप सभी देख सकते हैं।",
    "dash.seeSchemes": "योजना खोज खोलें",
    "dash.yourState": "आपका राज्य",

    // ---- About ----
    "about.title": "हमारे बारे में और अस्वीकरण — करियरसाथी AI",
    "about.h1": "करियरसाथी AI के बारे में",
    "about.lead": "करियरसाथी AI एक मुफ़्त मार्गदर्शन टूल है। यह भारत के लोगों को समझने में मदद करता है कि उनकी पढ़ाई और हुनर के हिसाब से कौन-से करियर, सरकारी भर्ती स्रोत, योजनाएँ और कोर्स सही हो सकते हैं।",
    "about.whatTitle": "यह वेबसाइट क्या करती है",
    "about.what.1": "आपकी प्रोफ़ाइल को जाँचे हुए करियर की एक छोटी सूची से मिलाती है।",
    "about.what.2": "बताती है कि हर करियर क्यों सुझाया गया और कौन-सा हुनर चाहिए।",
    "about.what.3": "भर्ती और योजनाओं के लिए आधिकारिक सरकारी वेबसाइट के लिंक देती है।",
    "about.what.4": "कोर्स सुझाती है — पहले मुफ़्त और आधिकारिक विकल्प।",
    "about.notTitle": "यह वेबसाइट क्या नहीं करती",
    "about.not.1": "नौकरी नहीं देती और नौकरी के आवेदन नहीं लेती।",
    "about.not.2": "चालू भर्ती या आवेदन की आख़िरी तारीख़ नहीं दिखाती।",
    "about.not.3": "योजना, लोन, सब्सिडी या कोई लाभ मंज़ूर नहीं करती।",
    "about.not.4": "किसी सरकारी विभाग से जुड़ी नहीं है।",
    "about.labelsTitle": "हमारे लेबल का मतलब",
    "about.label.potential": "संभावित रूप से उपयुक्त करियर",
    "about.label.potentialD": "आपकी प्रोफ़ाइल इस करियर से आम तौर पर मेल खाती है। इसे एक विकल्प के रूप में देखें।",
    "about.label.unverified": "पात्रता अभी जाँची नहीं गई",
    "about.label.unverifiedD": "हमारे पास सभी आधिकारिक नियम (जैसे उम्र सीमा) नहीं हैं। आधिकारिक सूचना ज़रूर पढ़ें।",
    "about.label.eligible": "दर्ज नियमों के अनुसार पात्र",
    "about.label.eligibleD": "हमारे पास दर्ज नियम आप पूरे करते हैं। आधिकारिक नियमों में और शर्तें हो सकती हैं।",
    "about.label.vacancy": "पुष्टि की गई चालू भर्ती",
    "about.label.vacancyD": "इस संस्करण में इस्तेमाल नहीं होता, क्योंकि हमारे पास भर्ती की लाइव आधिकारिक जानकारी नहीं है।",
    "about.discTitle": "अस्वीकरण",
    "about.disc.1": "इस वेबसाइट की जानकारी सिर्फ़ सामान्य मार्गदर्शन के लिए है। यह अधूरी या पुरानी हो सकती है।",
    "about.disc.2": "आवेदन से पहले हमेशा आधिकारिक सूचना या योजना के नियम पढ़ें। आधिकारिक नियम ही मान्य हैं।",
    "about.disc.3": "कोई सुझाव नौकरी, दाख़िले, लोन या लाभ का वादा नहीं है।",
    "about.disc.4": "यह एक प्रोटोटाइप है। \"डेमो डेटा\" वाले रिकॉर्ड सिर्फ़ उदाहरण हैं, असली फ़ैसलों के लिए इनका इस्तेमाल न करें।",
    "about.disc.5": "सरकारी नौकरी के नाम पर पैसे माँगने वालों से सावधान रहें। सरकारी भर्ती में रिश्वत या एजेंट की ज़रूरत कभी नहीं होती।",

    // ---- Privacy ----
    "privacy.title": "गोपनीयता जानकारी — करियरसाथी AI",
    "privacy.h1": "गोपनीयता जानकारी",
    "privacy.lead": "छोटे में: हम आपका निजी डेटा नहीं लेते। आपके जवाब आपके अपने डिवाइस पर ही प्रोसेस होते हैं।",
    "privacy.updated": "पिछला अपडेट: 22 अक्टूबर 2026",
    "privacy.collectTitle": "हम क्या पूछते हैं",
    "privacy.collect.1": "पढ़ाई, हुनर, अनुभव और करियर लक्ष्य — करियर सुझाने के लिए।",
    "privacy.collect.2": "राज्य और ज़िला — आपके राज्य की जानकारी दिखाने के लिए।",
    "privacy.collect.3": "नाम बताना ज़रूरी नहीं। आप बिना नाम के भी वेबसाइट इस्तेमाल कर सकते हैं।",
    "privacy.neverTitle": "हम कभी नहीं पूछते",
    "privacy.never.1": "आधार, पैन या कोई भी पहचान नंबर",
    "privacy.never.2": "बैंक खाता या कार्ड की जानकारी",
    "privacy.never.3": "पासवर्ड या OTP",
    "privacy.never.4": "फ़ोन नंबर, ईमेल या फ़ोटो",
    "privacy.whereTitle": "आपके जवाब कहाँ रहते हैं",
    "privacy.where.1": "आपके जवाब आपके ब्राउज़र के अंदर ही प्रोसेस होते हैं। करियरसाथी का कोई सर्वर या डेटाबेस नहीं है।",
    "privacy.where.2": "अगर आप \"इस डिवाइस पर याद रखें\" चुनते हैं, तो जवाब सिर्फ़ इसी ब्राउज़र में सेव होते हैं। आप इन्हें कभी भी मिटा सकते हैं।",
    "privacy.where.3": "हम कुछ भी किसी कंपनी, एजेंसी या विज्ञापन देने वाले से साझा नहीं करते।",
    "privacy.where.4": "इस संस्करण में कोई विज्ञापन, ट्रैकिंग या एनालिटिक्स नहीं है।",
    "privacy.where.5": "अगर आप \"याद रखें\" पर टिक नहीं करते, तो जवाब सिर्फ़ ब्राउज़र टैब बंद होने तक रहते हैं।",
    "privacy.thirdTitle": "बाहरी सेवाएँ",
    "privacy.third.1": "पेज का फ़ॉन्ट Google Fonts से आता है, जो किसी भी वेबसाइट की तरह आपका IP पता देख सकता है।",
    "privacy.third.2": "जब आप किसी आधिकारिक लिंक (जैसे ssc.gov.in) पर जाते हैं, तो उस वेबसाइट की अपनी गोपनीयता नीति लागू होती है।",
    "privacy.deleteTitle": "इस डिवाइस पर सेव डेटा मिटाएँ",
    "privacy.deleteText": "इससे इस ब्राउज़र में सेव आपकी भाषा और प्रोफ़ाइल मिट जाएगी।",
    "privacy.deleteBtn": "मेरा सेव डेटा मिटाएँ",
    "privacy.deleteDone": "हो गया। इस ब्राउज़र में सेव करियरसाथी का सारा डेटा मिटा दिया गया है।",
    "privacy.deleteNone": "इस ब्राउज़र में करियरसाथी का कोई डेटा सेव नहीं था।",
    "privacy.deleteError": "आपके ब्राउज़र ने सेव डेटा की अनुमति नहीं दी, इसलिए यहाँ कुछ सेव नहीं हुआ था।"
  }
};

/** Returns the text for a key (falls back to English, then the key). `vars` fills {placeholders}. */
function t(key, lang = DEFAULT_LANG, vars = null) {
  const table = translations[lang] || translations[DEFAULT_LANG];
  let text = key;
  if (key in table) text = table[key];
  else if (key in translations[DEFAULT_LANG]) text = translations[DEFAULT_LANG][key];
  // Fill placeholders like {n} or {skill}
  if (vars) text = text.replace(/\{(\w+)\}/g, (m, name) => (name in vars ? String(vars[name]) : m));
  return text;
}

/** Makes sure we only ever use a language we support. */
function normalizeLang(value) {
  return SUPPORTED_LANGS.includes(value) ? value : DEFAULT_LANG;
}

return { t, normalizeLang, SUPPORTED_LANGS, DEFAULT_LANG, translations };
})();

// ===== js/storage.js =====
__mods["js/storage.js"] = (function () {
// Safe wrappers around browser storage.
//   "local"   = localStorage   → stays after the browser closes ("Remember me")
//   "session" = sessionStorage → deleted when the tab is closed (default)
// Some browsers (private mode, strict settings) block storage and throw errors.
// These helpers never crash the page — they just return a fallback.

const PREFIX = "cs_"; // every CareerSaathi key starts with this

function area(name) {
  return name === "session" ? window.sessionStorage : window.localStorage;
}

function getItem(key, fallback = null, where = "local") {
  try {
    const value = area(where).getItem(PREFIX + key);
    return value === null ? fallback : value;
  } catch {
    return fallback;
  }
}

function setItem(key, value, where = "local") {
  try {
    area(where).setItem(PREFIX + key, String(value));
    return true;
  } catch {
    return false;
  }
}

function removeItem(key, where = "local") {
  try {
    area(where).removeItem(PREFIX + key);
  } catch {
    /* storage blocked: nothing to remove */
  }
}

/** Reads JSON. Broken or missing data returns the fallback instead of crashing. */
function getJSON(key, fallback = null, where = "local") {
  const raw = getItem(key, null, where);
  if (raw === null) return fallback;
  try {
    return JSON.parse(raw);
  } catch {
    return fallback;
  }
}

function setJSON(key, value, where = "local") {
  try {
    return setItem(key, JSON.stringify(value), where);
  } catch {
    return false;
  }
}

/**
 * Deletes every CareerSaathi key from this browser (both storage areas).
 * Returns the number of keys removed, or -1 if storage is blocked.
 */
function clearAll() {
  let removed = 0;
  let blocked = 0;
  for (const where of ["local", "session"]) {
    try {
      const store = area(where);
      const ours = [];
      for (let i = 0; i < store.length; i++) {
        const k = store.key(i);
        if (k && k.startsWith(PREFIX)) ours.push(k);
      }
      ours.forEach((k) => store.removeItem(k));
      removed += ours.length;
    } catch {
      blocked++;
    }
  }
  return blocked === 2 ? -1 : removed;
}

return { getItem, setItem, removeItem, getJSON, setJSON, clearAll };
})();

// ===== js/layout.js =====
__mods["js/layout.js"] = (function () {
// Builds the shared header + footer on every page and runs the
// English/Hindi language switch. Each page only needs:
//   <body data-page="home">  <div id="site-header"></div> ... <div id="site-footer"></div>
//   <script type="module" src="js/layout.js"></script>

const { t, normalizeLang } = __mods["js/i18n.js"];
const { getItem, setItem } = __mods["js/storage.js"];
// Pages in the menu. Set `ready: true` when a page is built —
// unfinished pages stay hidden so visitors never hit a broken link.
const NAV_ITEMS = [
  { id: "home",            href: "index.html",           key: "nav.home",            ready: true },
  { id: "profile",         href: "profile.html",         key: "nav.profile",         ready: true },
  { id: "recommendations", href: "recommendations.html", key: "nav.recommendations", ready: true },
  { id: "jobs",            href: "jobs.html",            key: "nav.jobs",            ready: true },
  { id: "schemes",         href: "schemes.html",         key: "nav.schemes",         ready: true },
  { id: "courses",         href: "courses.html",         key: "nav.courses",         ready: true },
  { id: "dashboard",       href: "dashboard.html",       key: "nav.dashboard",       ready: true },
  { id: "about",           href: "about.html",           key: "nav.about",           ready: true },
  { id: "privacy",         href: "privacy.html",         key: "nav.privacy",         ready: true }
];

let currentLang = normalizeLang(getItem("lang"));

function getLang() {
  return currentLang;
}

function buildHeader(pageId) {
  const links = NAV_ITEMS.filter((item) => item.ready)
    .map((item) => {
      const current = item.id === pageId ? ' aria-current="page"' : "";
      return `<li><a href="${item.href}" data-i18n="${item.key}"${current}></a></li>`;
    })
    .join("");

  return `
  <a class="skip-link" href="#main" data-i18n="skip"></a>
  <header class="site-header">
    <div class="container header-row">
      <a class="brand" href="index.html" aria-label="CareerSaathi AI — Home">
        <svg class="brand-mark" viewBox="0 0 40 40" aria-hidden="true">
          <rect width="40" height="40" rx="10" fill="var(--c-brand)"/>
          <path d="M11 27 L20 12 L29 27" fill="none" stroke="#fff" stroke-width="3.2" stroke-linecap="round" stroke-linejoin="round"/>
          <circle cx="20" cy="29" r="2.6" fill="var(--c-accent-bright)"/>
        </svg>
        <span class="brand-text" data-i18n="brand.name"></span>
      </a>

      <div class="header-actions">
        <div class="lang-switch" role="group" data-i18n-attr="aria-label:lang.label">
          <button type="button" data-lang="en" lang="en">EN</button>
          <button type="button" data-lang="hi" lang="hi">हिंदी</button>
        </div>
        <button type="button" class="menu-toggle" aria-expanded="false" aria-controls="site-nav">
          <svg viewBox="0 0 24 24" width="22" height="22" aria-hidden="true">
            <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" stroke-width="2" stroke-linecap="round"/>
          </svg>
          <span data-i18n="nav.menu"></span>
        </button>
      </div>

      <nav id="site-nav" class="site-nav" data-i18n-attr="aria-label:nav.label">
        <ul>${links}</ul>
      </nav>
    </div>
  </header>`;
}

function buildFooter() {
  const year = new Date().getFullYear();
  return `
  <footer class="site-footer">
    <div class="container footer-grid">
      <div>
        <p class="footer-brand" data-i18n="brand.name"></p>
        <p class="footer-tagline" data-i18n="brand.tagline"></p>
      </div>
      <div>
        <p data-i18n="footer.note"></p>
        <p><strong data-i18n="footer.verify"></strong></p>
      </div>
      <ul class="footer-links">
        <li><a href="about.html#disclaimer" data-i18n="footer.disclaimer"></a></li>
        <li><a href="privacy.html" data-i18n="footer.privacy"></a></li>
      </ul>
    </div>
    <div class="container footer-base">
      <span>© ${year} CareerSaathi AI</span>
      <span data-i18n="footer.demo"></span>
    </div>
  </footer>`;
}

/** Puts the right language text into every element marked with data-i18n. */
function applyTranslations(lang, root = document) {
  root.querySelectorAll("[data-i18n]").forEach((el) => {
    el.textContent = t(el.dataset.i18n, lang);
  });
  // Format: data-i18n-attr="aria-label:key; placeholder:key2"
  root.querySelectorAll("[data-i18n-attr]").forEach((el) => {
    el.dataset.i18nAttr.split(";").forEach((pair) => {
      const [attr, key] = pair.split(":").map((s) => s.trim());
      if (attr && key) el.setAttribute(attr, t(key, lang));
    });
  });
}

function setLang(lang) {
  currentLang = normalizeLang(lang);
  setItem("lang", currentLang);
  document.documentElement.lang = currentLang;
  applyTranslations(currentLang);
  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.setAttribute("aria-pressed", String(btn.dataset.lang === currentLang));
  });
  // Other scripts can listen for this to re-render their own content.
  document.dispatchEvent(new CustomEvent("cs:langchange", { detail: { lang: currentLang } }));
}

function setupMenu() {
  const toggle = document.querySelector(".menu-toggle");
  const nav = document.getElementById("site-nav");
  if (!toggle || !nav) return;

  const close = () => {
    toggle.setAttribute("aria-expanded", "false");
    nav.classList.remove("is-open");
  };

  toggle.addEventListener("click", () => {
    const open = toggle.getAttribute("aria-expanded") === "true";
    toggle.setAttribute("aria-expanded", String(!open));
    nav.classList.toggle("is-open", !open);
  });

  // Escape closes the mobile menu and returns focus to the button.
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && nav.classList.contains("is-open")) {
      close();
      toggle.focus();
    }
  });
}

function init() {
  const pageId = document.body.dataset.page || "";
  const headerSlot = document.getElementById("site-header");
  const footerSlot = document.getElementById("site-footer");
  if (headerSlot) headerSlot.outerHTML = buildHeader(pageId);
  if (footerSlot) footerSlot.outerHTML = buildFooter();

  document.querySelectorAll(".lang-switch button").forEach((btn) => {
    btn.addEventListener("click", () => setLang(btn.dataset.lang));
  });

  setupMenu();
  setLang(currentLang);
  document.body.classList.add("is-ready");
}

init();

return { getLang, applyTranslations, setLang, NAV_ITEMS };
})();

// ===== data/options.js =====
__mods["data/options.js"] = (function () {
// Choice lists used by the profile form, in English and simple Hindi.
// IDs are stable codes the matching engine will use later — never rename them.

const o = (id, en, hi) => ({ id, en, hi });

const AGE_RANGES = [
  o("under18", "Under 18", "18 से कम"),
  o("18-21", "18–21", "18–21"),
  o("22-25", "22–25", "22–25"),
  o("26-30", "26–30", "26–30"),
  o("31-35", "31–35", "31–35"),
  o("36-40", "36–40", "36–40"),
  o("41-50", "41–50", "41–50"),
  o("51plus", "51 or above", "51 या उससे ज़्यादा")
];

// 28 states + 8 union territories
const STATES = [
  o("AP", "Andhra Pradesh", "आंध्र प्रदेश"),
  o("AR", "Arunachal Pradesh", "अरुणाचल प्रदेश"),
  o("AS", "Assam", "असम"),
  o("BR", "Bihar", "बिहार"),
  o("CG", "Chhattisgarh", "छत्तीसगढ़"),
  o("GA", "Goa", "गोवा"),
  o("GJ", "Gujarat", "गुजरात"),
  o("HR", "Haryana", "हरियाणा"),
  o("HP", "Himachal Pradesh", "हिमाचल प्रदेश"),
  o("JH", "Jharkhand", "झारखंड"),
  o("KA", "Karnataka", "कर्नाटक"),
  o("KL", "Kerala", "केरल"),
  o("MP", "Madhya Pradesh", "मध्य प्रदेश"),
  o("MH", "Maharashtra", "महाराष्ट्र"),
  o("MN", "Manipur", "मणिपुर"),
  o("ML", "Meghalaya", "मेघालय"),
  o("MZ", "Mizoram", "मिज़ोरम"),
  o("NL", "Nagaland", "नागालैंड"),
  o("OD", "Odisha", "ओडिशा"),
  o("PB", "Punjab", "पंजाब"),
  o("RJ", "Rajasthan", "राजस्थान"),
  o("SK", "Sikkim", "सिक्किम"),
  o("TN", "Tamil Nadu", "तमिलनाडु"),
  o("TS", "Telangana", "तेलंगाना"),
  o("TR", "Tripura", "त्रिपुरा"),
  o("UP", "Uttar Pradesh", "उत्तर प्रदेश"),
  o("UK", "Uttarakhand", "उत्तराखंड"),
  o("WB", "West Bengal", "पश्चिम बंगाल"),
  o("AN", "Andaman and Nicobar Islands (UT)", "अंडमान और निकोबार द्वीप समूह (केंद्र शासित)"),
  o("CH", "Chandigarh (UT)", "चंडीगढ़ (केंद्र शासित)"),
  o("DD", "Dadra and Nagar Haveli and Daman and Diu (UT)", "दादरा और नगर हवेली और दमन और दीव (केंद्र शासित)"),
  o("DL", "Delhi (UT)", "दिल्ली (केंद्र शासित)"),
  o("JK", "Jammu and Kashmir (UT)", "जम्मू और कश्मीर (केंद्र शासित)"),
  o("LA", "Ladakh (UT)", "लद्दाख (केंद्र शासित)"),
  o("LD", "Lakshadweep (UT)", "लक्षद्वीप (केंद्र शासित)"),
  o("PY", "Puducherry (UT)", "पुडुचेरी (केंद्र शासित)")
];

const LOCATION_PREFS = [
  o("home-district", "In or near my district", "अपने ज़िले में या आस-पास"),
  o("home-state", "Anywhere in my state", "अपने राज्य में कहीं भी"),
  o("anywhere-india", "Anywhere in India", "भारत में कहीं भी"),
  o("remote", "Work from home / remote", "घर से काम (रिमोट)")
];

const EMPLOYMENT_STATUS = [
  o("student", "Student", "छात्र/छात्रा"),
  o("unemployed", "Looking for work", "काम की तलाश में"),
  o("employed", "Working (job)", "नौकरी कर रहे हैं"),
  o("self-employed", "Self-employed / own work", "अपना काम / स्वरोज़गार"),
  o("homemaker", "Homemaker", "गृहिणी / घर संभालते हैं")
];

// Ordered from lowest to highest (the engine uses this order later).
const EDUCATION_LEVELS = [
  o("below10", "Below Class 10", "10वीं से कम"),
  o("class10", "Class 10 / High School", "10वीं / हाई स्कूल"),
  o("class12", "Class 12 / Intermediate", "12वीं / इंटरमीडिएट"),
  o("iti", "ITI", "ITI"),
  o("diploma", "Diploma", "डिप्लोमा"),
  o("graduation", "Graduation (BA, BSc, BCom, BTech…)", "ग्रेजुएशन (BA, BSc, BCom, BTech…)"),
  o("postgraduation", "Post Graduation (MA, MSc, MCom, MBA…)", "पोस्ट ग्रेजुएशन (MA, MSc, MCom, MBA…)"),
  o("professional", "Professional degree (CA, LLB, MBBS…)", "प्रोफ़ेशनल डिग्री (CA, LLB, MBBS…)"),
  o("other", "Other qualification", "अन्य योग्यता")
];

const STREAMS = [
  o("science", "Science", "विज्ञान (साइंस)"),
  o("commerce", "Commerce", "वाणिज्य (कॉमर्स)"),
  o("arts", "Arts / Humanities", "कला (आर्ट्स)"),
  o("vocational", "Vocational / Technical", "व्यावसायिक / तकनीकी"),
  o("other", "Other", "अन्य"),
  o("na", "Not applicable", "लागू नहीं")
];

const SKILL_GROUPS = [
  {
    id: "computer", en: "Computer & office", hi: "कंप्यूटर और ऑफ़िस",
    skills: [
      o("basic-computer", "Basic computer use", "बेसिक कंप्यूटर"),
      o("ccc", "CCC", "CCC"),
      o("olevel", "O Level", "O लेवल"),
      o("dca", "DCA / ADCA", "DCA / ADCA"),
      o("tally", "Tally", "टैली"),
      o("excel", "MS Excel", "MS एक्सेल"),
      o("typing", "Typing (Hindi / English)", "टाइपिंग (हिंदी / अंग्रेज़ी)")
    ]
  },
  {
    id: "digital", en: "Digital & technology", hi: "डिजिटल और टेक्नोलॉजी",
    skills: [
      o("programming", "Programming", "प्रोग्रामिंग"),
      o("webdev", "Web development", "वेब डेवलपमेंट"),
      o("data-analytics", "Data analytics", "डेटा एनालिटिक्स"),
      o("graphic-design", "Graphic design", "ग्राफ़िक डिज़ाइन"),
      o("digital-marketing", "Digital marketing", "डिजिटल मार्केटिंग")
    ]
  },
  {
    id: "people", en: "Business & people", hi: "व्यापार और लोगों से जुड़े",
    skills: [
      o("teaching", "Teaching", "पढ़ाना"),
      o("accounting", "Accounting", "अकाउंटिंग / हिसाब-किताब"),
      o("sales", "Sales", "सेल्स / बिक्री"),
      o("customer-service", "Customer service", "ग्राहक सेवा"),
      o("spoken-english", "Spoken English", "अंग्रेज़ी बोलना")
    ]
  },
  {
    id: "trades", en: "Trades & practical work", hi: "हुनर और हाथ का काम",
    skills: [
      o("electrician", "Electrician work", "इलेक्ट्रीशियन का काम"),
      o("plumbing", "Plumbing", "प्लंबिंग"),
      o("welding", "Welding", "वेल्डिंग"),
      o("tailoring", "Tailoring", "सिलाई"),
      o("driving", "Driving", "ड्राइविंग"),
      o("repair", "Repair work (mobile, appliance, vehicle)", "मरम्मत (मोबाइल, उपकरण, गाड़ी)"),
      o("agriculture", "Agriculture", "खेती-बाड़ी"),
      o("cooking", "Cooking", "खाना बनाना")
    ]
  }
];

const ALL_SKILLS = SKILL_GROUPS.flatMap((g) => g.skills);

const GOALS = [
  o("govt-job", "Government job", "सरकारी नौकरी"),
  o("private-job", "Private job", "प्राइवेट नौकरी"),
  o("remote", "Remote / work from home", "घर से काम"),
  o("internship", "Internship", "इंटर्नशिप"),
  o("apprenticeship", "Apprenticeship", "अप्रेंटिसशिप"),
  o("career-change", "Career change", "करियर बदलना"),
  o("higher-education", "Higher education", "आगे की पढ़ाई"),
  o("skill-development", "Learn new skills", "नया हुनर सीखना"),
  o("business", "Business / self-employment", "अपना व्यवसाय / स्वरोज़गार")
];

const LEARNING_BUDGETS = [
  o("free", "Free only", "सिर्फ़ मुफ़्त"),
  o("low", "Free or low cost", "मुफ़्त या कम ख़र्च"),
  o("any", "Cost is not a problem", "ख़र्च कोई समस्या नहीं")
];

const EXPERIENCE_TYPES = [
  o("fresher", "Fresher (no work experience)", "फ्रेशर (काम का अनुभव नहीं)"),
  o("experienced", "I have work experience", "मुझे काम का अनुभव है")
];

// Optional eligibility (Step F) — all include "prefer not to say".
const CATEGORIES = [
  o("general", "General / Unreserved", "सामान्य / अनारक्षित"),
  o("ews", "EWS", "EWS"),
  o("obc", "OBC", "OBC"),
  o("sc", "SC", "SC"),
  o("st", "ST", "ST"),
  o("prefer-not", "Prefer not to say", "नहीं बताना चाहते")
];

const GENDERS = [
  o("female", "Female", "महिला"),
  o("male", "Male", "पुरुष"),
  o("other", "Other", "अन्य"),
  o("prefer-not", "Prefer not to say", "नहीं बताना चाहते")
];

const YES_NO = [
  o("yes", "Yes", "हाँ"),
  o("no", "No", "नहीं"),
  o("prefer-not", "Prefer not to say", "नहीं बताना चाहते")
];

/** Label for an id in the chosen language ("" if not found). */
function labelOf(list, id, lang = "en") {
  const item = list.find((x) => x.id === id);
  return item ? item[lang] || item.en : "";
}

/** Every list, for tests. */
const ALL_LISTS = {
  AGE_RANGES, STATES, LOCATION_PREFS, EMPLOYMENT_STATUS, EDUCATION_LEVELS, STREAMS,
  ALL_SKILLS, GOALS, LEARNING_BUDGETS, EXPERIENCE_TYPES, CATEGORIES, GENDERS, YES_NO
};

return { labelOf, AGE_RANGES, STATES, LOCATION_PREFS, EMPLOYMENT_STATUS, EDUCATION_LEVELS, STREAMS, SKILL_GROUPS, ALL_SKILLS, GOALS, LEARNING_BUDGETS, EXPERIENCE_TYPES, CATEGORIES, GENDERS, YES_NO, ALL_LISTS };
})();

// ===== js/profile-model.js =====
__mods["js/profile-model.js"] = (function () {
// Profile data + validation rules. Pure functions only (no browser code),
// so Node tests can check every rule.

const { AGE_RANGES, STATES, LOCATION_PREFS, EMPLOYMENT_STATUS, EDUCATION_LEVELS, STREAMS, ALL_SKILLS, GOALS, LEARNING_BUDGETS, EXPERIENCE_TYPES, CATEGORIES, GENDERS, YES_NO } = __mods["data/options.js"];
const PROFILE_VERSION = 1;

const STEPS = ["basic", "education", "skills", "experience", "goals", "eligibility", "review"];
const SKIPPABLE_STEPS = ["experience", "eligibility"];

const LIMITS = {
  name: 60, district: 60, specialization: 80, certificates: 200,
  title: 60, industry: 60, previous: 300,
  customSkill: 40, customSkillsMax: 20, extraQualsMax: 5,
  minYear: 1960, maxYearsExperience: 50, minAge: 14, maxAge: 70
};

function emptyProfile() {
  return {
    version: PROFILE_VERSION,
    name: "", ageRange: "", state: "", district: "",
    preferredLocation: "", language: "en", employmentStatus: "",
    education: { level: "", stream: "", specialization: "", passingYear: null, certificates: "" },
    additionalQualifications: [],
    skills: [], customSkills: [],
    experience: { type: "", years: null, title: "", industry: "", previous: "", freelance: false, skipped: false },
    goals: [], learningBudget: "",
    eligibility: { exactAge: null, category: "", gender: "", pwd: "", exServiceman: "", skipped: false },
    savedAt: ""
  };
}

function emptyQualification() {
  return { level: "", specialization: "", passingYear: null };
}

// ---------- Cleaning helpers ----------

/** Trims, collapses spaces, removes < > and control characters, caps length. */
function cleanText(value, max = 100) {
  if (typeof value !== "string") return "";
  return value
    .replace(/[\u0000-\u001f\u007f<>]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .slice(0, max);
}

/** Returns a whole number, or null if empty / not a number. */
function toIntOrNull(value) {
  if (value === null || value === undefined || value === "") return null;
  const n = Number(value);
  return Number.isFinite(n) ? n : null;
}

const ids = (list) => new Set(list.map((x) => x.id));
const VALID = {
  ageRange: ids(AGE_RANGES), state: ids(STATES), preferredLocation: ids(LOCATION_PREFS),
  employmentStatus: ids(EMPLOYMENT_STATUS), level: ids(EDUCATION_LEVELS), stream: ids(STREAMS),
  skills: ids(ALL_SKILLS), goals: ids(GOALS), learningBudget: ids(LEARNING_BUDGETS),
  expType: ids(EXPERIENCE_TYPES), category: ids(CATEGORIES), gender: ids(GENDERS), yesNo: ids(YES_NO)
};

const pick = (value, set) => (typeof value === "string" && set.has(value) ? value : "");

/**
 * Turns ANY input (old saved data, broken JSON, null) into a correctly
 * shaped profile. Unknown choices are dropped. Never throws.
 */
function normalizeProfile(raw) {
  const p = emptyProfile();
  if (!raw || typeof raw !== "object") return p;
  const ed = raw.education && typeof raw.education === "object" ? raw.education : {};
  const ex = raw.experience && typeof raw.experience === "object" ? raw.experience : {};
  const el = raw.eligibility && typeof raw.eligibility === "object" ? raw.eligibility : {};

  p.name = cleanText(raw.name, LIMITS.name);
  p.ageRange = pick(raw.ageRange, VALID.ageRange);
  p.state = pick(raw.state, VALID.state);
  p.district = cleanText(raw.district, LIMITS.district);
  p.preferredLocation = pick(raw.preferredLocation, VALID.preferredLocation);
  p.language = raw.language === "hi" ? "hi" : "en";
  p.employmentStatus = pick(raw.employmentStatus, VALID.employmentStatus);

  p.education = {
    level: pick(ed.level, VALID.level),
    stream: pick(ed.stream, VALID.stream),
    specialization: cleanText(ed.specialization, LIMITS.specialization),
    passingYear: toIntOrNull(ed.passingYear),
    certificates: cleanText(ed.certificates, LIMITS.certificates)
  };

  p.additionalQualifications = (Array.isArray(raw.additionalQualifications) ? raw.additionalQualifications : [])
    .filter((q) => q && typeof q === "object")
    .slice(0, LIMITS.extraQualsMax)
    .map((q) => ({
      level: pick(q.level, VALID.level),
      specialization: cleanText(q.specialization, LIMITS.specialization),
      passingYear: toIntOrNull(q.passingYear)
    }));

  p.skills = [...new Set((Array.isArray(raw.skills) ? raw.skills : []).filter((s) => VALID.skills.has(s)))];
  p.customSkills = dedupeText((Array.isArray(raw.customSkills) ? raw.customSkills : [])
    .map((s) => cleanText(s, LIMITS.customSkill))
    .filter(Boolean))
    .slice(0, LIMITS.customSkillsMax);

  p.experience = {
    type: pick(ex.type, VALID.expType),
    years: toIntOrNull(ex.years),
    title: cleanText(ex.title, LIMITS.title),
    industry: cleanText(ex.industry, LIMITS.industry),
    previous: cleanText(ex.previous, LIMITS.previous),
    freelance: ex.freelance === true,
    skipped: ex.skipped === true
  };

  p.goals = [...new Set((Array.isArray(raw.goals) ? raw.goals : []).filter((g) => VALID.goals.has(g)))];
  p.learningBudget = pick(raw.learningBudget, VALID.learningBudget);

  p.eligibility = {
    exactAge: toIntOrNull(el.exactAge),
    category: pick(el.category, VALID.category),
    gender: pick(el.gender, VALID.gender),
    pwd: pick(el.pwd, VALID.yesNo),
    exServiceman: pick(el.exServiceman, VALID.yesNo),
    skipped: el.skipped === true
  };

  p.savedAt = typeof raw.savedAt === "string" ? raw.savedAt.slice(0, 40) : "";
  return p;
}

function dedupeText(list) {
  const seen = new Set();
  return list.filter((s) => {
    const k = s.toLowerCase();
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}

// ---------- Custom skills ----------

/** Adds a custom skill. Returns { profile, error } — error is an i18n key or "". */
function addCustomSkill(profile, text) {
  const skill = cleanText(text, 200);
  if (!skill) return { profile, error: "err.skillEmpty" };
  if (skill.length > LIMITS.customSkill) return { profile, error: "err.skillLong" };
  if (profile.customSkills.length >= LIMITS.customSkillsMax) return { profile, error: "err.skillMax" };
  const lower = skill.toLowerCase();
  const builtIn = ALL_SKILLS.some((s) => s.en.toLowerCase() === lower || s.hi === skill);
  if (builtIn || profile.customSkills.some((s) => s.toLowerCase() === lower)) {
    return { profile, error: "err.skillDup" };
  }
  return { profile: { ...profile, customSkills: [...profile.customSkills, skill] }, error: "" };
}

// ---------- Validation ----------
// Each function returns { "field.path": "err.key" }. Empty object = valid.

const NAME_RE = /^[\p{L}\p{M} .'-]*$/u; // letters (any script), spaces, . ' -

function checkYear(errors, path, value, now) {
  if (value === null || value === undefined) return;
  const maxYear = now.getFullYear() + 2; // allow "expected" results
  if (!Number.isInteger(value) || value < LIMITS.minYear || value > maxYear) {
    errors[path] = "err.year";
  }
}

function validateStep(step, profile, now = new Date()) {
  const p = profile || emptyProfile();
  const e = {};

  if (step === "basic") {
    if (p.name && !NAME_RE.test(p.name)) e.name = "err.nameChars";
    if (p.name && p.name.length > LIMITS.name) e.name = "err.tooLong";
    if (!p.ageRange) e.ageRange = "err.required";
    if (!p.state) e.state = "err.required";
    if (!p.preferredLocation) e.preferredLocation = "err.required";
    if (!p.employmentStatus) e.employmentStatus = "err.required";
  }

  if (step === "education") {
    if (!p.education.level) e["education.level"] = "err.required";
    checkYear(e, "education.passingYear", p.education.passingYear, now);
    (p.additionalQualifications || []).forEach((q, i) => {
      if (!q.level) e[`additionalQualifications.${i}.level`] = "err.required";
      checkYear(e, `additionalQualifications.${i}.passingYear`, q.passingYear, now);
    });
  }

  if (step === "experience" && !p.experience.skipped) {
    if (!p.experience.type) e["experience.type"] = "err.required";
    if (p.experience.type === "experienced") {
      const y = p.experience.years;
      if (y === null || y === undefined) e["experience.years"] = "err.required";
      else if (!Number.isInteger(y) || y < 0 || y > LIMITS.maxYearsExperience) e["experience.years"] = "err.years";
    }
  }

  if (step === "goals") {
    if (!p.goals.length) e.goals = "err.goalsRequired";
  }

  if (step === "eligibility" && !p.eligibility.skipped) {
    const a = p.eligibility.exactAge;
    if (a !== null && a !== undefined && (!Number.isInteger(a) || a < LIMITS.minAge || a > LIMITS.maxAge)) {
      e["eligibility.exactAge"] = "err.age";
    }
  }

  // "skills" and "review" have no required fields.
  return e;
}

/** Validates every step. Returns { stepId: errors } for steps that have errors. */
function validateAll(profile, now = new Date()) {
  const out = {};
  for (const step of STEPS) {
    const errs = validateStep(step, profile, now);
    if (Object.keys(errs).length) out[step] = errs;
  }
  return out;
}

/** Index of the first step that still has errors, or -1 if all are valid. */
function firstInvalidStep(profile, now = new Date()) {
  return STEPS.findIndex((s) => Object.keys(validateStep(s, profile, now)).length > 0);
}

// ---------- Reading / writing a value by its path, e.g. "education.level" ----------

function getPath(obj, path) {
  return path.split(".").reduce((acc, k) => (acc == null ? undefined : acc[k]), obj);
}

function setPath(obj, path, value) {
  const keys = path.split(".");
  if (keys.some((k) => k === "__proto__" || k === "constructor" || k === "prototype")) return obj;
  let target = obj;
  for (let i = 0; i < keys.length - 1; i++) {
    if (target[keys[i]] == null || typeof target[keys[i]] !== "object") return obj; // invalid path: ignore
    target = target[keys[i]];
  }
  target[keys[keys.length - 1]] = value;
  return obj;
}

return { emptyProfile, emptyQualification, cleanText, toIntOrNull, normalizeProfile, addCustomSkill, validateStep, validateAll, firstInvalidStep, getPath, setPath, PROFILE_VERSION, STEPS, SKIPPABLE_STEPS, LIMITS };
})();

// ===== js/profile-store.js =====
__mods["js/profile-store.js"] = (function () {
// Where the profile is kept in the browser. Other pages (recommendations,
// dashboard) will use loadProfile() to read it.

const { getJSON, setJSON, removeItem, getItem, setItem } = __mods["js/storage.js"];
const { normalizeProfile } = __mods["js/profile-model.js"];
const KEY = "profile";
const DRAFT = "profile_draft";
const STEP = "profile_step";

/** Returns { profile, where: "local" | "session" } or null if nothing is saved. */
function loadProfile() {
  for (const where of ["local", "session"]) {
    const raw = getJSON(KEY, null, where);
    if (raw) return { profile: normalizeProfile(raw), where };
  }
  return null;
}

/** Saves the finished profile. remember=true → survives closing the browser. */
function saveProfile(profile, remember) {
  const data = { ...normalizeProfile(profile), savedAt: new Date().toISOString() };
  const where = remember ? "local" : "session";
  const other = remember ? "session" : "local";
  const ok = setJSON(KEY, data, where);
  removeItem(KEY, other);
  clearDraft();
  return ok ? { profile: data, where } : null;
}

function deleteProfile() {
  removeItem(KEY, "local");
  removeItem(KEY, "session");
  removeItem("plan_done", "local");   // 30-day plan ticks belong to the profile
  removeItem("plan_done", "session");
  clearDraft();
}

// Drafts protect half-filled forms from an accidental refresh.
// They live in sessionStorage only, so they vanish when the tab closes.
function saveDraft(profile, stepIndex) {
  setJSON(DRAFT, profile, "session");
  setItem(STEP, String(stepIndex), "session");
}

function loadDraft() {
  const raw = getJSON(DRAFT, null, "session");
  if (!raw) return null;
  const step = Number(getItem(STEP, "0", "session"));
  return { profile: normalizeProfile(raw), step: Number.isInteger(step) ? step : 0 };
}

function clearDraft() {
  removeItem(DRAFT, "session");
  removeItem(STEP, "session");
}

return { loadProfile, saveProfile, deleteProfile, saveDraft, loadDraft, clearDraft };
})();

// ===== js/engine.js =====
__mods["js/engine.js"] = (function () {
// CareerSaathi matching engine — simple, open rules. No AI API, no percentages.
//
// matchCareers(profile, careers) returns:
//   { ready, matches: [...], futurePaths: [...], missingInfo: [...] }
//
// Every explanation is a message { key, vars } so the page can show it in
// English or Hindi. vars may hold skill ids, goal ids or an education level id.
// This file has no browser code, so it can be tested with Node.

const { normalizeProfile } = __mods["js/profile-model.js"];
const FIT = { STRONG: "strong", POSSIBLE: "possible", UPSKILL: "upskill" };

const STATUS = {
  POTENTIAL: "potential",     // general career match
  UNVERIFIED: "unverified",   // govt path, or rules not fully recorded
  ELIGIBLE: "eligible",       // all RECORDED criteria pass on a source-checked record
  VACANCY: "vacancy"          // verified active vacancy — never produced in v1 (no live data)
};

const FIT_ORDER = { strong: 0, possible: 1, upskill: 2 };
const msg = (key, vars = {}) => ({ key, vars });

/** All qualification levels the person has (highest + extra ones). */
function userLevels(profile) {
  const levels = [profile.education.level, ...profile.additionalQualifications.map((q) => q.level)];
  return [...new Set(levels.filter(Boolean))];
}

/** Step 1: qualification check → "meets" | "any" | "not-met" | "unknown" */
function checkQualification(career, profile) {
  if (career.education === "any") return { result: "any", level: "" };
  if (career.education === null || career.education === undefined) return { result: "unknown", level: "" };
  const levels = userLevels(profile);
  if (!levels.length) return { result: "unknown", level: "" };
  const hit = levels.find((l) => career.education.includes(l));
  if (hit) return { result: "meets", level: hit };
  // "other" is too vague to say no — treat as unknown.
  if (levels.every((l) => l === "other")) return { result: "unknown", level: "" };
  return { result: "not-met", level: "" };
}

/** Step 2: skills check → what they have, what is missing. */
function checkSkills(career, profile) {
  const mine = new Set(profile.skills);
  const have = career.requiredSkills.filter((s) => mine.has(s));
  const missing = career.requiredSkills.filter((s) => !mine.has(s));
  const optionalHave = career.optionalSkills.filter((s) => mine.has(s));
  const ratio = career.requiredSkills.length ? have.length / career.requiredSkills.length : 1;
  return { have, missing, optionalHave, ratio };
}

/** Step 3: experience → "not-needed" | "meets" | "short" | "unknown" */
function checkExperience(career, profile) {
  const need = career.minYearsExperience || 0;
  if (need === 0) return "not-needed";
  const ex = profile.experience;
  if (ex.skipped || !ex.type) return "unknown";
  const years = ex.type === "experienced" && Number.isInteger(ex.years) ? ex.years : 0;
  return years >= need ? "meets" : "short";
}

/** Step 4: preferences → which goals match, and any location conflict. */
function checkPreferences(career, profile) {
  const goals = career.goals.filter((g) => profile.goals.includes(g));
  const remoteOnly = profile.preferredLocation === "remote";
  return {
    goals,
    noGoalsGiven: profile.goals.length === 0,
    locationConflict: remoteOnly && !career.remoteFriendly
  };
}

/** Evaluates one career. Returns null if it is not relevant at all. */
function evaluateCareer(career, rawProfile) {
  const profile = normalizeProfile(rawProfile);
  const qual = checkQualification(career, profile);
  const skills = checkSkills(career, profile);
  const exp = checkExperience(career, profile);
  const pref = checkPreferences(career, profile);
  const isGovt = career.sector === "government";

  // Relevant only if it fits a goal, or the person already has related skills.
  const goalMatch = pref.goals.length > 0;
  const skillOverlap = skills.have.length + skills.optionalHave.length > 0;
  if (!goalMatch && !skillOverlap) return null;

  // A path needing skills the person has none of is only shown if they
  // said they want to learn new skills or change career.
  const wantsToLearn = profile.goals.includes("skill-development") || profile.goals.includes("career-change");
  if (career.requiredSkills.length > 0 && !skillOverlap && !wantsToLearn) return null;

  // Fit level (words, not percentages)
  const noSkillRule = career.requiredSkills.length === 0;
  const blocked = exp === "short" || pref.locationConflict;
  let fit;
  if (noSkillRule) {
    // Exam/merit-based paths: a goal match alone is only "partial";
    // related extra skills make it "good".
    fit = goalMatch && skills.optionalHave.length > 0 && !blocked ? FIT.STRONG : FIT.POSSIBLE;
  } else if ((goalMatch || pref.noGoalsGiven) && skills.ratio >= 2 / 3 && !blocked) {
    fit = FIT.STRONG;
  } else if (skills.ratio >= 1 / 3 && (goalMatch || skills.ratio >= 2 / 3)) {
    fit = FIT.POSSIBLE;
  } else {
    fit = FIT.UPSKILL;
  }
  // For sorting: paths where the person already has the required skills come first.
  const sortScore = noSkillRule ? (skills.optionalHave.length ? 0.6 : 0.5) : skills.ratio;

  // Status label
  const allRecordedPass =
    (qual.result === "meets" || qual.result === "any") && skills.missing.length === 0 && exp !== "short";
  let status;
  if (career.verification?.status === "source-checked" && allRecordedPass) status = STATUS.ELIGIBLE;
  else if (isGovt || qual.result === "unknown") status = STATUS.UNVERIFIED;
  else status = STATUS.POTENTIAL;

  // ---- "Why we suggested this" ----
  const reasons = [];
  if (goalMatch) reasons.push(msg("why.goal", { goals: pref.goals }));
  if (qual.result === "meets") reasons.push(msg("why.qualMeets", { level: qual.level }));
  if (qual.result === "any") reasons.push(msg("why.qualAny"));
  if (skills.have.length) reasons.push(msg("why.skillsHave", { skills: skills.have }));
  if (skills.optionalHave.length) reasons.push(msg("why.optionalHave", { skills: skills.optionalHave }));
  if (career.requiredSkills.length === 0) reasons.push(msg("why.noSkillNeeded"));
  if (exp === "meets") reasons.push(msg("why.expMeets"));
  if (career.remoteFriendly && profile.preferredLocation === "remote") reasons.push(msg("why.remote"));

  // ---- "Things to check" ----
  const checks = [];
  if (qual.result === "unknown") {
    checks.push(msg(userLevels(profile).length ? "check.qualVaries" : "check.qualMissing"));
  }
  if (exp === "short") checks.push(msg("check.expShort", { n: career.minYearsExperience }));
  if (exp === "unknown") checks.push(msg("check.expUnknown", { n: career.minYearsExperience }));
  if (pref.locationConflict) checks.push(msg("check.location"));
  if (isGovt) {
    checks.push(msg("check.govtAge"));
    const cat = profile.eligibility.category;
    if (["obc", "sc", "st", "ews"].includes(cat) || profile.eligibility.pwd === "yes" || profile.eligibility.exServiceman === "yes") {
      checks.push(msg("check.relaxation"));
    }
  }
  if (career.verification?.status !== "source-checked") checks.push(msg("check.demo"));

  // ---- "What to do next" ----
  const next = [];
  if (skills.missing.length) next.push(msg("next.learn", { skills: skills.missing }));
  if (isGovt) next.push(msg("next.govt"));
  else if (career.sector === "apprenticeship") next.push(msg("next.apprentice"));
  else if (career.sector === "self") next.push(msg("next.self"));
  else next.push(msg("next.private"));
  if (career.preferred) next.push(msg("next.preferred"));

  return {
    careerId: career.id,
    career,
    fit,
    status,
    qualification: qual.result,
    skillsHave: skills.have,
    missingSkills: skills.missing,
    matchedGoals: pref.goals,
    reasons,
    checks,
    next,
    _sort: [FIT_ORDER[fit], -sortScore, -pref.goals.length, -skills.optionalHave.length]
  };
}

/** Main entry point. Never throws, even for an empty or broken profile. */
function matchCareers(rawProfile, careers, { futureLimit = 5 } = {}) {
  const profile = normalizeProfile(rawProfile);

  const missingInfo = [];
  if (!profile.education.level) missingInfo.push("education");
  if (!profile.goals.length) missingInfo.push("goals");
  if (!profile.skills.length) missingInfo.push("skills");
  const ready = Boolean(profile.education.level || profile.goals.length || profile.skills.length);

  if (!ready || !Array.isArray(careers)) return { ready: false, matches: [], futurePaths: [], missingInfo };

  const matches = [];
  const futurePaths = [];
  for (const career of careers) {
    let result;
    try {
      result = evaluateCareer(career, profile);
    } catch {
      continue; // one bad record must not break the whole page
    }
    if (!result) continue;
    if (result.qualification === "not-met") {
      if (result.matchedGoals.length) futurePaths.push(result);
    } else {
      matches.push(result);
    }
  }

  const bySort = (a, b) => {
    for (let i = 0; i < a._sort.length; i++) if (a._sort[i] !== b._sort[i]) return a._sort[i] - b._sort[i];
    return a.careerId.localeCompare(b.careerId);
  };
  matches.sort(bySort);
  futurePaths.sort(bySort);

  return { ready: true, matches, futurePaths: futurePaths.slice(0, futureLimit), missingInfo };
}

return { userLevels, checkQualification, checkSkills, checkExperience, checkPreferences, evaluateCareer, matchCareers, FIT, STATUS };
})();

// ===== js/course-match.js =====
__mods["js/course-match.js"] = (function () {
// Course suggestions from skill gaps. Pure functions, tested in Node.
//
// recommendCourses(profile, careers, courses) →
//   { ready, gaps: [{ skill, careers: [ids] }], items: [...], uncovered: [skill ids] }
// The learning budget never hides a course — it only changes the order and
// adds a note, so people still see options they might need (e.g. a licence).

const { normalizeProfile } = __mods["js/profile-model.js"];
const { matchCareers } = __mods["js/engine.js"];
const msg = (key, vars = {}) => ({ key, vars });
// Verified costs rank above unverified ones.
const COST_RANK = { free: 0, "free-exam-fee": 1, fee: 2, null: 3 };
const PROVIDER_RANK = { government: 0, institute: 1, nonprofit: 2, other: 3 };

/** Skills missing from the person's top career matches, most needed first. */
function skillGaps(profile, careers, { topN = 8 } = {}) {
  const { matches } = matchCareers(profile, careers);
  const map = new Map();
  // Exam-only paths have no skill gaps, so look at the top careers that need skills.
  for (const m of matches.filter((x) => x.missingSkills.length).slice(0, topN)) {
    for (const s of m.missingSkills) {
      if (!map.has(s)) map.set(s, []);
      map.get(s).push(m.careerId);
    }
  }
  return [...map.entries()]
    .map(([skill, ids]) => ({ skill, careers: ids }))
    .sort((a, b) => b.careers.length - a.careers.length);
}

function costFits(cost, budget) {
  if (!budget || budget === "any") return true;
  if (budget === "free") return cost === "free" || cost === "free-exam-fee";
  if (budget === "low") return cost !== null; // known cost; "fee" may be low — user decides
  return true;
}

function evaluateCourse(course, profile, gapSkills) {
  const covers = course.skills.filter((s) => gapSkills.includes(s));
  const already = course.skills.filter((s) => profile.skills.includes(s));
  const reasons = [];
  const checks = [];

  if (covers.length) reasons.push(msg("course.why.gap", { skills: covers }));
  if (course.relatedCareers?.length) reasons.push(msg("course.why.careers", { careers: course.relatedCareers }));
  if (course.cost === "free") reasons.push(msg("course.why.free"));

  if (course.cost === null || course.cost === undefined) checks.push(msg("course.check.costUnknown"));
  else if (!costFits(course.cost, profile.learningBudget)) checks.push(msg("course.check.budget"));
  if (course.cost === "free-exam-fee") checks.push(msg("course.check.examFee"));
  if (!course.duration) checks.push(msg("course.check.durationUnknown"));
  if (already.length && !covers.length) checks.push(msg("course.check.already", { skills: already }));
  checks.push(msg("course.check.noJob"));

  return {
    courseId: course.id,
    course,
    covers,
    reasons,
    checks,
    budgetFit: course.cost !== null && course.cost !== undefined && costFits(course.cost, profile.learningBudget)
  };
}

function recommendCourses(rawProfile, careers, courses) {
  const profile = normalizeProfile(rawProfile);
  const ready = Boolean(profile.education.level || profile.goals.length || profile.skills.length);
  if (!ready || !Array.isArray(courses)) return { ready: false, gaps: [], items: [], uncovered: [] };

  const gaps = skillGaps(profile, careers || []);
  const gapSkills = gaps.map((g) => g.skill);
  const items = [];
  for (const course of courses) {
    try {
      const r = evaluateCourse(course, profile, gapSkills);
      if (r.covers.length) items.push(r);
    } catch { /* skip a broken record */ }
  }
  // Most useful first: covers more of the most-needed gaps, fits budget, cheaper, government.
  const gapWeight = (r) => r.covers.reduce((sum, s) => sum + (gaps.find((g) => g.skill === s)?.careers.length || 0), 0);
  items.sort((a, b) =>
    (gapWeight(b) - gapWeight(a)) ||
    (Number(b.budgetFit) - Number(a.budgetFit)) ||
    ((COST_RANK[a.course.cost] ?? 3) - (COST_RANK[b.course.cost] ?? 3)) ||
    ((PROVIDER_RANK[a.course.providerType] ?? 3) - (PROVIDER_RANK[b.course.providerType] ?? 3)));

  const coveredSkills = new Set(items.flatMap((r) => r.covers));
  const uncovered = gapSkills.filter((s) => !coveredSkills.has(s));
  return { ready: true, gaps, items, uncovered };
}

/** Courses that teach one skill (for the "browse by skill" view). */
function coursesForSkill(skill, courses) {
  if (!Array.isArray(courses)) return [];
  return courses
    .filter((c) => !skill || c.skills.includes(skill))
    .sort((a, b) => ((COST_RANK[a.cost] ?? 3) - (COST_RANK[b.cost] ?? 3)) ||
      ((PROVIDER_RANK[a.providerType] ?? 3) - (PROVIDER_RANK[b.providerType] ?? 3)));
}

return { skillGaps, evaluateCourse, recommendCourses, coursesForSkill };
})();

// ===== data/courses.js =====
__mods["data/courses.js"] = (function () {
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

const COST = {
  FREE: "free",                 // learning and certificate free (as stated by provider)
  FREE_EXAM_FEE: "free-exam-fee", // learning free, certificate needs a paid exam
  FEE: "fee",                   // a fee applies (amount not shown)
  UNVERIFIED: null
};

const CHECKED = "2026-10-22";
const tx = (en, hi) => ({ en, hi });
const c = (o) => ({ duration: null, certificate: null, minEducation: null, searchTip: null, note: null, checked: CHECKED, ...o });

const PROVIDER_TYPES = [
  { id: "government", en: "Government", hi: "सरकारी" },
  { id: "institute", en: "Public institute", hi: "सार्वजनिक संस्थान" },
  { id: "nonprofit", en: "Non-profit", hi: "ग़ैर-लाभकारी" },
  { id: "other", en: "Other", hi: "अन्य" }
];

const COURSES = [
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
    checkedFrom: tx("NIELIT CCC page", "NIELIT CCC पेज")
  }),
  c({
    id: "nielit-olevel", providerType: "government", mode: "both",
    title: tx("O Level (IT)", "O लेवल (IT)"),
    provider: tx("NIELIT (Government of India)", "NIELIT (भारत सरकार)"),
    url: "https://www.nielit.gov.in/",
    searchTip: tx("On the NIELIT site, open the O Level section for the current syllabus and rules.", "NIELIT की वेबसाइट पर O लेवल सेक्शन में मौजूदा सिलेबस और नियम देखें।"),
    skills: ["olevel", "basic-computer", "programming", "webdev"],
    topics: tx("A longer IT course after CCC. Check the current syllabus on NIELIT.", "CCC के बाद का लंबा IT कोर्स। मौजूदा सिलेबस NIELIT पर देखें।"),
    prerequisites: null, cost: null, costNote: null,
    relatedCareers: ["data-entry", "computer-centre", "web-developer"],
    checkedFrom: tx("NIELIT official website (address only)", "NIELIT आधिकारिक वेबसाइट (सिर्फ़ पता)")
  }),
  c({
    id: "swayam-computer", providerType: "government", mode: "online",
    title: tx("Computer & office skills courses", "कंप्यूटर और ऑफ़िस कौशल के कोर्स"),
    provider: tx("SWAYAM (Ministry of Education)", "स्वयम (शिक्षा मंत्रालय)"),
    url: "https://swayam.gov.in/",
    searchTip: tx("Search SWAYAM for \"computer fundamentals\", \"office automation\" or \"spreadsheet\". Available courses change each semester.", "स्वयम पर \"computer fundamentals\", \"office automation\" या \"spreadsheet\" खोजें। कोर्स हर सेमेस्टर बदलते हैं।"),
    skills: ["basic-computer", "excel"],
    topics: tx("University-level online courses on computer and office basics.", "कंप्यूटर और ऑफ़िस की बुनियाद पर विश्वविद्यालय स्तर के ऑनलाइन कोर्स।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Learning is free. A certificate needs a paid, in-person proctored exam.", "पढ़ाई मुफ़्त है। प्रमाणपत्र के लिए फ़ीस वाली परीक्षा केंद्र पर देनी होती है।"),
    certificate: tx("Only after passing the paid proctored exam.", "सिर्फ़ फ़ीस वाली निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["office-assistant", "data-entry", "accounts-assistant"],
    checkedFrom: tx("SWAYAM 'About' page", "स्वयम का 'About' पेज")
  }),
  c({
    id: "swayam-accounting", providerType: "government", mode: "online",
    title: tx("Accounting and commerce courses", "अकाउंटिंग और कॉमर्स के कोर्स"),
    provider: tx("SWAYAM (Ministry of Education)", "स्वयम (शिक्षा मंत्रालय)"),
    url: "https://swayam.gov.in/",
    searchTip: tx("Search SWAYAM for \"accounting\", \"financial accounting\" or \"GST\".", "स्वयम पर \"accounting\", \"financial accounting\" या \"GST\" खोजें।"),
    skills: ["accounting"],
    topics: tx("Basics of bookkeeping, financial accounting and taxation from universities.", "विश्वविद्यालयों से बही-खाता, वित्तीय लेखा और टैक्स की बुनियाद।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Learning is free. A certificate needs a paid, in-person proctored exam.", "पढ़ाई मुफ़्त है। प्रमाणपत्र के लिए फ़ीस वाली परीक्षा केंद्र पर देनी होती है।"),
    certificate: tx("Only after passing the paid proctored exam.", "सिर्फ़ फ़ीस वाली निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["accounts-assistant", "bank-clerk", "ssc-cgl"],
    checkedFrom: tx("SWAYAM 'About' page", "स्वयम का 'About' पेज")
  }),
  c({
    id: "swayam-digital-marketing", providerType: "government", mode: "online",
    title: tx("Digital marketing and e-commerce courses", "डिजिटल मार्केटिंग और ई-कॉमर्स के कोर्स"),
    provider: tx("SWAYAM (Ministry of Education)", "स्वयम (शिक्षा मंत्रालय)"),
    url: "https://swayam.gov.in/",
    searchTip: tx("Search SWAYAM for \"digital marketing\" or \"e-commerce\". If none is open now, check again next semester.", "स्वयम पर \"digital marketing\" या \"e-commerce\" खोजें। अभी कोई न हो तो अगले सेमेस्टर देखें।"),
    skills: ["digital-marketing"],
    topics: tx("Online promotion, social media and selling online.", "ऑनलाइन प्रचार, सोशल मीडिया और ऑनलाइन बिक्री।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Learning is free. A certificate needs a paid, in-person proctored exam.", "पढ़ाई मुफ़्त है। प्रमाणपत्र के लिए फ़ीस वाली परीक्षा केंद्र पर देनी होती है।"),
    certificate: tx("Only after passing the paid proctored exam.", "सिर्फ़ फ़ीस वाली निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["digital-marketer", "tailoring-business", "food-business"],
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
    checkedFrom: tx("NPTEL FAQ page", "NPTEL FAQ पेज")
  }),
  c({
    id: "nptel-english", providerType: "institute", mode: "online",
    title: tx("Spoken English and communication courses", "बोलचाल की अंग्रेज़ी और संवाद कौशल के कोर्स"),
    provider: tx("NPTEL / SWAYAM", "NPTEL / स्वयम"),
    url: "https://nptel.ac.in/",
    searchTip: tx("Search NPTEL or SWAYAM for \"spoken English\", \"speaking effectively\" or \"communication skills\".", "NPTEL या स्वयम पर \"spoken English\", \"speaking effectively\" या \"communication skills\" खोजें।"),
    skills: ["spoken-english", "customer-service"],
    topics: tx("Speaking, listening and workplace communication.", "बोलना, सुनना और काम की जगह पर बातचीत।"),
    prerequisites: null,
    cost: "free-exam-fee", costNote: tx("Course materials are free. The certification exam has a fee.", "कोर्स सामग्री मुफ़्त है। प्रमाणपत्र परीक्षा की फ़ीस लगती है।"),
    certificate: tx("After passing the proctored exam.", "निगरानी परीक्षा पास करने पर।"),
    relatedCareers: ["customer-support", "bank-po", "sales-executive", "tutor"],
    checkedFrom: tx("NPTEL FAQ and SWAYAM 'About' pages", "NPTEL FAQ और स्वयम 'About' पेज")
  }),
  c({
    id: "freecodecamp-web", providerType: "nonprofit", mode: "online",
    title: tx("Web development (HTML, CSS, JavaScript)", "वेब डेवलपमेंट (HTML, CSS, JavaScript)"),
    provider: tx("freeCodeCamp", "freeCodeCamp"),
    url: "https://www.freecodecamp.org/",
    searchTip: tx("Start with the Responsive Web Design curriculum. Lessons are in English.", "Responsive Web Design पाठ्यक्रम से शुरू करें। पाठ अंग्रेज़ी में हैं।"),
    skills: ["webdev", "programming"],
    topics: tx("Build real web pages step by step and practise with projects.", "क़दम-दर-क़दम असली वेब पेज बनाएँ और प्रोजेक्ट से अभ्यास करें।"),
    prerequisites: tx("Basic computer use and some English reading.", "बेसिक कंप्यूटर और थोड़ी अंग्रेज़ी पढ़ना।"),
    cost: "free", costNote: tx("The site states that you can learn to code for free.", "वेबसाइट के अनुसार कोडिंग मुफ़्त सीख सकते हैं।"),
    relatedCareers: ["web-developer", "software-developer"],
    checkedFrom: tx("freeCodeCamp home page", "freeCodeCamp होम पेज")
  }),
  c({
    id: "spoken-tutorial", providerType: "institute", mode: "online",
    title: tx("Software tutorials in Hindi and English (Calc, Python, HTML, GIMP, Inkscape)", "हिंदी और अंग्रेज़ी में सॉफ़्टवेयर ट्यूटोरियल (Calc, Python, HTML, GIMP, Inkscape)"),
    provider: tx("Spoken Tutorial (developed at IIT Bombay)", "स्पोकन ट्यूटोरियल (IIT बॉम्बे में विकसित)"),
    url: "https://spoken-tutorial.org/",
    searchTip: tx("Choose a topic such as \"LibreOffice Calc\", \"Python\", \"HTML\", \"GIMP\" or \"Inkscape\", then pick Hindi or English.", "\"LibreOffice Calc\", \"Python\", \"HTML\", \"GIMP\" या \"Inkscape\" जैसा विषय चुनें, फिर हिंदी या अंग्रेज़ी चुनें।"),
    skills: ["excel", "programming", "webdev", "graphic-design"],
    topics: tx("Short video tutorials for learning software on your own; many are in Hindi.", "ख़ुद सॉफ़्टवेयर सीखने के छोटे वीडियो; कई हिंदी में।"),
    prerequisites: null, cost: null, costNote: null,
    note: tx("The site now lists subscription and payment pages, so we could not confirm what is free.", "वेबसाइट पर अब सब्सक्रिप्शन और भुगतान पेज भी हैं, इसलिए हम पक्का नहीं कर सके कि क्या मुफ़्त है।"),
    relatedCareers: ["graphic-designer", "office-assistant", "web-developer", "data-analyst"],
    checkedFrom: tx("Spoken Tutorial home page", "स्पोकन ट्यूटोरियल होम पेज")
  }),
  c({
    id: "iti-cts", providerType: "government", mode: "in-person",
    title: tx("ITI trade courses (Craftsmen Training Scheme)", "ITI ट्रेड कोर्स (शिल्पकार प्रशिक्षण योजना)"),
    provider: tx("Government and private ITIs, under DGT (Ministry of Skill Development)", "सरकारी और प्राइवेट ITI, DGT (कौशल विकास मंत्रालय) के तहत"),
    url: "https://dgt.gov.in/en/about-us",
    searchTip: tx("Ask your nearest government ITI or your State's technical education / ITI admission portal about trades and admission dates.", "ट्रेड और दाख़िले की तारीख़ों के लिए नज़दीकी सरकारी ITI या अपने राज्य के ITI दाख़िला पोर्टल से पूछें।"),
    skills: ["electrician", "plumbing", "welding", "repair"],
    topics: tx("Hands-on training in engineering and non-engineering trades at ITIs.", "ITI में इंजीनियरिंग और ग़ैर-इंजीनियरिंग ट्रेड की व्यावहारिक ट्रेनिंग।"),
    prerequisites: tx("Each trade sets its own entry qualification.", "हर ट्रेड की अपनी प्रवेश योग्यता है।"),
    cost: null, costNote: null,
    duration: tx("About 6 months to 2 years, depending on the trade.", "ट्रेड के हिसाब से लगभग 6 महीने से 2 साल।"),
    relatedCareers: ["electrician", "plumber", "welder", "repair-technician", "trade-apprentice", "rrb-level1"],
    checkedFrom: tx("DGT 'About us' page", "DGT का 'About us' पेज")
  }),
  c({
    id: "pmkvy-training", providerType: "government", mode: "in-person",
    title: tx("Free short-term job-role training (PMKVY)", "मुफ़्त छोटी जॉब-रोल ट्रेनिंग (PMKVY)"),
    provider: tx("PMKVY training centres, through NSDC", "PMKVY ट्रेनिंग सेंटर, NSDC के ज़रिए"),
    url: "https://nsdcindia.org/products/pradhan-mantri-kaushal-vikas-yojana",
    searchTip: tx("Ask a PMKVY centre near you which job roles they train for (for example retail, tailoring, electrician, customer service).", "पास के PMKVY सेंटर से पूछें कि वे किन कामों की ट्रेनिंग देते हैं (जैसे रिटेल, सिलाई, इलेक्ट्रीशियन, ग्राहक सेवा)।"),
    skills: ["customer-service", "sales", "tailoring", "electrician", "plumbing", "welding", "repair", "cooking", "digital-marketing"],
    topics: tx("Industry-linked job-role courses with on-the-job training. Available roles differ by centre.", "उद्योग से जुड़े जॉब-रोल कोर्स, काम पर ट्रेनिंग के साथ। हर सेंटर पर अलग कोर्स।"),
    prerequisites: tx("Each job role has its own entry requirements.", "हर जॉब रोल की अपनी शर्तें हैं।"),
    cost: "free", costNote: tx("Training cost is paid by the scheme.", "ट्रेनिंग का ख़र्च योजना उठाती है।"),
    duration: tx("Courses typically run 300–600 hours.", "कोर्स आमतौर पर 300–600 घंटे के होते हैं।"),
    certificate: tx("Nationally recognised certificate after the assessment.", "परीक्षा के बाद राष्ट्रीय स्तर पर मान्य प्रमाणपत्र।"),
    relatedCareers: ["retail-associate", "customer-support", "sales-executive", "tailoring-business", "electrician", "plumber", "welder", "repair-technician"],
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
    checkedFrom: tx("NCTE official website (institution lists)", "NCTE आधिकारिक वेबसाइट (संस्थान सूची)")
  })
];

// General portal to explore many more courses.
const SKILL_INDIA = {
  url: "https://www.skillindiadigital.gov.in/",
  name: tx("Skill India Digital Hub", "स्किल इंडिया डिजिटल हब"),
  text: tx("The Ministry of Skill Development's platform for skill courses, certificates and job links. We have not verified which courses are free.", "कौशल विकास मंत्रालय का प्लेटफ़ॉर्म — हुनर कोर्स, प्रमाणपत्र और नौकरी के लिंक। कौन-से कोर्स मुफ़्त हैं, यह हमने नहीं जाँचा।")
};

return { COST, PROVIDER_TYPES, COURSES, SKILL_INDIA };
})();

// ===== data/careers.js =====
__mods["data/careers.js"] = (function () {
// Career dataset for the matching engine.
//
// HONESTY RULES FOR THIS FILE
// - No salaries, vacancy numbers, exam dates or age limits are stored here.
// - `education` lists the qualification levels we RECORD for a path:
//     an array of level ids → only those levels are treated as matching
//     "any"                 → no minimum recorded; skills matter most
//     null                  → rules vary (by state / notification) → always "verify"
// - Every record is `status: "demo"` until a person checks it against an official
//   notification and changes it to "source-checked" with the date.
//   Government records always show "Eligibility not yet verified" while demo.

const FROM_10 = ["class10", "class12", "iti", "diploma", "graduation", "postgraduation", "professional"];
const FROM_12 = ["class12", "graduation", "postgraduation", "professional"];
const GRAD = ["graduation", "postgraduation", "professional"];
const DEMO = { status: "demo", checkedOn: null };

const c = (o) => ({
  optionalSkills: [], minYearsExperience: 0, remoteFriendly: false,
  preferred: null, educationNote: null, courseIds: [], verification: DEMO, ...o
});

const SECTORS = [
  { id: "government", en: "Government", hi: "सरकारी" },
  { id: "apprenticeship", en: "Apprenticeship", hi: "अप्रेंटिसशिप" },
  { id: "private", en: "Private job", hi: "प्राइवेट नौकरी" },
  { id: "self", en: "Self-employment", hi: "स्वरोज़गार" }
];

const CAREERS = [
  // ---------------- Government ----------------
  c({
    id: "ssc-mts", sector: "government",
    title: { en: "Central govt Multi-Tasking Staff (SSC MTS)", hi: "केंद्र सरकार मल्टी-टास्किंग स्टाफ़ (SSC MTS)" },
    summary: { en: "Support roles in central government offices, filled through an SSC exam.", hi: "केंद्र सरकार के दफ़्तरों में सहायक पद, SSC परीक्षा से भरे जाते हैं।" },
    education: FROM_10, requiredSkills: [], optionalSkills: ["basic-computer"],
    goals: ["govt-job"], sources: ["ssc", "empnews"],
    locationNote: { en: "Posting can be anywhere in India or a region.", hi: "तैनाती भारत में या किसी क्षेत्र में कहीं भी हो सकती है।" }
  }),
  c({
    id: "ssc-chsl", sector: "government",
    title: { en: "Clerk / Data Entry Operator (SSC CHSL)", hi: "क्लर्क / डेटा एंट्री ऑपरेटर (SSC CHSL)" },
    summary: { en: "Clerical and data entry posts in central government, filled through an SSC exam.", hi: "केंद्र सरकार में क्लर्क और डेटा एंट्री पद, SSC परीक्षा से।" },
    education: FROM_12, requiredSkills: ["typing", "basic-computer"], optionalSkills: ["excel"],
    goals: ["govt-job"], sources: ["ssc", "empnews"],
    educationNote: { en: "Some posts in this exam may ask for a specific stream — check the notification.", hi: "इस परीक्षा के कुछ पदों में ख़ास विषय माँगा जा सकता है — सूचना देखें।" },
    locationNote: { en: "Posting can be anywhere in India.", hi: "तैनाती भारत में कहीं भी हो सकती है।" }
  }),
  c({
    id: "ssc-cgl", sector: "government",
    title: { en: "Central govt Group B/C officer (SSC CGL)", hi: "केंद्र सरकार ग्रुप B/C अधिकारी (SSC CGL)" },
    summary: { en: "Assistant, inspector and auditor-type posts in central ministries and departments.", hi: "केंद्रीय मंत्रालयों और विभागों में सहायक, निरीक्षक, ऑडिटर जैसे पद।" },
    education: GRAD, requiredSkills: [], optionalSkills: ["basic-computer", "excel", "accounting"],
    goals: ["govt-job"], sources: ["ssc", "empnews"],
    educationNote: { en: "A few posts need a particular degree subject — check the notification.", hi: "कुछ पदों के लिए ख़ास विषय की डिग्री चाहिए — सूचना देखें।" },
    locationNote: { en: "Posting can be anywhere in India.", hi: "तैनाती भारत में कहीं भी हो सकती है।" }
  }),
  c({
    id: "rrb-level1", sector: "government",
    title: { en: "Railway Level-1 posts (track, helper, porter etc.)", hi: "रेलवे लेवल-1 पद (ट्रैक, हेल्पर, पोर्टर आदि)" },
    summary: { en: "Entry-level railway posts recruited by the Railway Recruitment Boards.", hi: "रेलवे भर्ती बोर्ड द्वारा भरे जाने वाले शुरुआती रेलवे पद।" },
    education: ["class10", "iti", "class12", "diploma", "graduation", "postgraduation"], requiredSkills: [], optionalSkills: ["electrician", "welding", "repair"],
    goals: ["govt-job"], sources: ["rrb", "empnews"],
    educationNote: { en: "Usually includes a physical fitness test.", hi: "आमतौर पर शारीरिक फ़िटनेस टेस्ट भी होता है।" },
    locationNote: { en: "Posting within the railway zone you apply for.", hi: "जिस रेलवे ज़ोन के लिए आवेदन करें, वहीं तैनाती।" }
  }),
  c({
    id: "rrb-ntpc", sector: "government",
    title: { en: "Railway non-technical posts (RRB NTPC)", hi: "रेलवे नॉन-टेक्निकल पद (RRB NTPC)" },
    summary: { en: "Clerk, ticket clerk, station and goods-related posts in railways.", hi: "रेलवे में क्लर्क, टिकट क्लर्क, स्टेशन और माल से जुड़े पद।" },
    education: FROM_12, requiredSkills: [], optionalSkills: ["typing", "basic-computer"],
    goals: ["govt-job"], sources: ["rrb", "empnews"],
    educationNote: { en: "Some posts need Class 12, others need graduation.", hi: "कुछ पदों के लिए 12वीं, कुछ के लिए ग्रेजुएशन चाहिए।" },
    locationNote: { en: "Posting within the railway zone you apply for.", hi: "जिस रेलवे ज़ोन के लिए आवेदन करें, वहीं तैनाती।" }
  }),
  c({
    id: "bank-clerk", sector: "government",
    title: { en: "Public sector bank clerk", hi: "सरकारी बैंक क्लर्क" },
    summary: { en: "Customer service and cash work in public sector banks, recruited through IBPS and SBI exams.", hi: "सरकारी बैंकों में ग्राहक सेवा और कैश का काम, IBPS और SBI परीक्षाओं से।" },
    education: GRAD, requiredSkills: ["basic-computer"], optionalSkills: ["customer-service", "accounting", "spoken-english"],
    goals: ["govt-job"], sources: ["ibps", "empnews"],
    educationNote: { en: "Knowing the local language of the state is often required.", hi: "अक्सर राज्य की स्थानीय भाषा आना ज़रूरी होता है।" },
    locationNote: { en: "Usually posted in the state you apply for.", hi: "आमतौर पर उसी राज्य में तैनाती जिसके लिए आवेदन करें।" }
  }),
  c({
    id: "bank-po", sector: "government",
    title: { en: "Public sector bank officer (PO)", hi: "सरकारी बैंक अधिकारी (PO)" },
    summary: { en: "Officer-level banking jobs recruited through IBPS and SBI exams.", hi: "IBPS और SBI परीक्षाओं से अधिकारी स्तर की बैंक नौकरी।" },
    education: GRAD, requiredSkills: ["basic-computer"], optionalSkills: ["spoken-english", "accounting", "excel"],
    goals: ["govt-job"], sources: ["ibps", "empnews"],
    locationNote: { en: "Transfers across India are common.", hi: "पूरे भारत में तबादले आम हैं।" }
  }),
  c({
    id: "india-post-gds", sector: "government",
    title: { en: "India Post Gramin Dak Sevak (GDS)", hi: "भारतीय डाक ग्रामीण डाक सेवक (GDS)" },
    summary: { en: "Post office work in villages. Selection has usually been merit-based from Class 10 marks.", hi: "गाँव के डाकघर में काम। चयन आमतौर पर 10वीं के अंकों की मेरिट से हुआ है।" },
    education: FROM_10, requiredSkills: ["basic-computer"], optionalSkills: ["customer-service"],
    goals: ["govt-job"], sources: ["gds"],
    educationNote: { en: "The local language studied up to Class 10 is usually needed — check the notification.", hi: "आमतौर पर 10वीं तक पढ़ी स्थानीय भाषा ज़रूरी होती है — सूचना देखें।" },
    locationNote: { en: "Works in your local area — good if you want to stay near home.", hi: "अपने ही इलाक़े में काम — घर के पास रहना चाहें तो अच्छा।" }
  }),
  c({
    id: "state-psc", sector: "government",
    title: { en: "State civil services officer (State PSC)", hi: "राज्य सिविल सेवा अधिकारी (राज्य लोक सेवा आयोग)" },
    summary: { en: "Administrative posts in your state, through the State Public Service Commission.", hi: "राज्य लोक सेवा आयोग के ज़रिए आपके राज्य के प्रशासनिक पद।" },
    education: GRAD, requiredSkills: [], optionalSkills: ["spoken-english"],
    goals: ["govt-job"], sources: ["uppsc", "empnews"],
    educationNote: { en: "Each state has its own commission and rules. The UP link is an example.", hi: "हर राज्य का अपना आयोग और नियम हैं। UP का लिंक उदाहरण है।" },
    locationNote: { en: "Posting within your state.", hi: "अपने राज्य में तैनाती।" }
  }),
  c({
    id: "upsc-cse", sector: "government",
    title: { en: "Civil services — IAS, IPS and others (UPSC)", hi: "सिविल सेवा — IAS, IPS आदि (UPSC)" },
    summary: { en: "All-India services through the UPSC Civil Services Examination. Needs long preparation.", hi: "UPSC सिविल सेवा परीक्षा से अखिल भारतीय सेवाएँ। लंबी तैयारी चाहिए।" },
    education: GRAD, requiredSkills: [], optionalSkills: ["spoken-english"],
    goals: ["govt-job", "higher-education"], sources: ["upsc"],
    locationNote: { en: "Posting can be anywhere in India.", hi: "तैनाती भारत में कहीं भी हो सकती है।" }
  }),
  c({
    id: "govt-teacher", sector: "government",
    title: { en: "Government school teacher", hi: "सरकारी स्कूल शिक्षक" },
    summary: { en: "Teaching in government schools. Usually needs a teacher-training qualification and a TET pass.", hi: "सरकारी स्कूलों में पढ़ाना। आमतौर पर शिक्षक-प्रशिक्षण योग्यता और TET पास होना ज़रूरी।" },
    education: null, requiredSkills: ["teaching"], optionalSkills: ["spoken-english"],
    goals: ["govt-job"], sources: ["empnews"],
    preferred: { en: "Teacher training (D.El.Ed or B.Ed) and a TET pass", hi: "शिक्षक प्रशिक्षण (D.El.Ed या B.Ed) और TET पास" },
    educationNote: { en: "Rules depend on the state and the class level you want to teach.", hi: "नियम राज्य और जिस कक्षा को पढ़ाना है, उस पर निर्भर करते हैं।" },
    locationNote: { en: "Usually within your state.", hi: "आमतौर पर अपने राज्य में।" }
  }),
  c({
    id: "state-police", sector: "government",
    title: { en: "State police constable", hi: "राज्य पुलिस कांस्टेबल" },
    summary: { en: "Police constable posts recruited by each state's police recruitment board.", hi: "हर राज्य के पुलिस भर्ती बोर्ड द्वारा कांस्टेबल पद।" },
    education: null, requiredSkills: [], optionalSkills: ["driving"],
    goals: ["govt-job"], sources: ["empnews"],
    educationNote: { en: "Qualification, age and physical standards differ by state.", hi: "योग्यता, उम्र और शारीरिक मानक हर राज्य में अलग हैं।" },
    locationNote: { en: "Posting within your state.", hi: "अपने राज्य में तैनाती।" }
  }),
  c({
    id: "army-agniveer", sector: "government",
    title: { en: "Indian Army — Agniveer and other entries", hi: "भारतीय सेना — अग्निवीर और अन्य भर्ती" },
    summary: { en: "Service in the Indian Army. Includes physical and medical standards.", hi: "भारतीय सेना में सेवा। शारीरिक और मेडिकल मानक भी शामिल।" },
    education: FROM_10, requiredSkills: [], optionalSkills: ["driving", "electrician", "repair"],
    goals: ["govt-job"], sources: ["army"],
    educationNote: { en: "Different entries need different qualifications and marks.", hi: "अलग-अलग भर्ती के लिए अलग योग्यता और अंक चाहिए।" },
    locationNote: { en: "Posting anywhere in India.", hi: "तैनाती भारत में कहीं भी।" }
  }),

  // ---------------- Apprenticeship ----------------
  c({
    id: "trade-apprentice", sector: "apprenticeship",
    title: { en: "Trade apprentice (paid on-the-job training)", hi: "ट्रेड अप्रेंटिस (काम के साथ ट्रेनिंग, स्टाइपेंड सहित)" },
    summary: { en: "Learn a trade inside a company or govt organisation and receive a stipend under the apprenticeship scheme.", hi: "किसी कंपनी या सरकारी संस्था में काम सीखें और अप्रेंटिसशिप योजना में स्टाइपेंड पाएँ।" },
    education: ["class10", "class12", "iti"], requiredSkills: [], optionalSkills: ["electrician", "welding", "plumbing", "repair", "basic-computer"],
    goals: ["apprenticeship", "skill-development", "private-job"], sources: ["naps", "ncs"],
    locationNote: { en: "At the company's location.", hi: "कंपनी की जगह पर।" }
  }),
  c({
    id: "graduate-apprentice", sector: "apprenticeship",
    title: { en: "Graduate / diploma apprentice (NATS)", hi: "ग्रेजुएट / डिप्लोमा अप्रेंटिस (NATS)" },
    summary: { en: "One-year training with a stipend for recent graduates and diploma holders.", hi: "हाल ही के ग्रेजुएट और डिप्लोमा धारकों के लिए स्टाइपेंड के साथ एक साल की ट्रेनिंग।" },
    education: ["diploma", "graduation"], requiredSkills: [], optionalSkills: ["basic-computer", "excel"],
    goals: ["apprenticeship", "internship", "skill-development", "private-job"], sources: ["nats"],
    educationNote: { en: "Usually meant for people who passed recently — check the year limit on the portal.", hi: "आमतौर पर हाल में पास हुए लोगों के लिए — पोर्टल पर साल की सीमा देखें।" },
    locationNote: { en: "At the organisation's location.", hi: "संस्था की जगह पर।" }
  }),

  // ---------------- Private ----------------
  c({
    id: "data-entry", sector: "private",
    title: { en: "Data entry operator", hi: "डेटा एंट्री ऑपरेटर" },
    summary: { en: "Typing and updating records on computers in offices, hospitals, shops and banks.", hi: "दफ़्तर, अस्पताल, दुकान और बैंक में कंप्यूटर पर रिकॉर्ड टाइप और अपडेट करना।" },
    education: FROM_10, requiredSkills: ["typing", "basic-computer"], optionalSkills: ["excel", "ccc", "olevel", "dca"],
    goals: ["private-job", "remote"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Most jobs are in offices; some remote work exists.", hi: "ज़्यादातर काम दफ़्तर में; कुछ घर से भी।" }
  }),
  c({
    id: "accounts-assistant", sector: "private",
    title: { en: "Accounts assistant", hi: "अकाउंट्स असिस्टेंट" },
    summary: { en: "Billing, GST entries and bookkeeping for small and medium businesses.", hi: "छोटे और मध्यम व्यापारों के लिए बिलिंग, GST एंट्री और हिसाब-किताब।" },
    education: FROM_12, requiredSkills: ["tally", "accounting"], optionalSkills: ["excel", "basic-computer"],
    goals: ["private-job"], sources: ["ncs"],
    preferred: { en: "Commerce background (B.Com or Class 12 Commerce)", hi: "कॉमर्स पढ़ाई (B.Com या 12वीं कॉमर्स)" },
    locationNote: { en: "Available in most towns and cities.", hi: "ज़्यादातर क़स्बों और शहरों में।" }
  }),
  c({
    id: "office-assistant", sector: "private",
    title: { en: "Office / admin assistant", hi: "ऑफ़िस / एडमिन असिस्टेंट" },
    summary: { en: "Managing files, records, emails and day-to-day office work.", hi: "फ़ाइल, रिकॉर्ड, ईमेल और रोज़ के दफ़्तरी काम संभालना।" },
    education: FROM_12, requiredSkills: ["basic-computer", "excel"], optionalSkills: ["typing", "spoken-english", "customer-service"],
    goals: ["private-job"], sources: ["ncs"],
    locationNote: { en: "Office-based.", hi: "दफ़्तर में काम।" }
  }),
  c({
    id: "customer-support", sector: "private",
    title: { en: "Customer support executive", hi: "कस्टमर सपोर्ट एग्ज़िक्यूटिव" },
    summary: { en: "Helping customers on phone, chat or email for companies and call centres.", hi: "कंपनियों और कॉल सेंटर के लिए फ़ोन, चैट या ईमेल पर ग्राहकों की मदद।" },
    education: FROM_12, requiredSkills: ["customer-service"], optionalSkills: ["spoken-english", "basic-computer", "typing"],
    goals: ["private-job", "remote"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Mostly in cities; some work-from-home roles.", hi: "ज़्यादातर शहरों में; कुछ घर से काम वाले पद।" }
  }),
  c({
    id: "sales-executive", sector: "private",
    title: { en: "Sales executive", hi: "सेल्स एग्ज़िक्यूटिव" },
    summary: { en: "Selling products or services to shops, companies or customers.", hi: "दुकानों, कंपनियों या ग्राहकों को सामान या सेवाएँ बेचना।" },
    education: FROM_12, requiredSkills: ["sales"], optionalSkills: ["spoken-english", "customer-service", "driving"],
    goals: ["private-job"], sources: ["ncs"],
    locationNote: { en: "Often involves field travel.", hi: "अक्सर फ़ील्ड में घूमना पड़ता है।" }
  }),
  c({
    id: "retail-associate", sector: "private",
    title: { en: "Retail store associate", hi: "रिटेल स्टोर एसोसिएट" },
    summary: { en: "Helping customers, billing and managing stock in shops and malls.", hi: "दुकानों और मॉल में ग्राहकों की मदद, बिलिंग और सामान संभालना।" },
    education: FROM_10, requiredSkills: ["customer-service"], optionalSkills: ["sales", "basic-computer"],
    goals: ["private-job"], sources: ["ncs"],
    locationNote: { en: "Available in most towns.", hi: "ज़्यादातर क़स्बों में।" }
  }),
  c({
    id: "electrician", sector: "private",
    title: { en: "Electrician", hi: "इलेक्ट्रीशियन" },
    summary: { en: "Wiring, installation and repair in homes, buildings and factories.", hi: "घरों, इमारतों और फ़ैक्ट्रियों में वायरिंग, फ़िटिंग और मरम्मत।" },
    education: "any", requiredSkills: ["electrician"], optionalSkills: ["repair"],
    goals: ["private-job", "business", "apprenticeship"], sources: ["ncs"],
    preferred: { en: "ITI Electrician trade; a licence may be needed for some work", hi: "ITI इलेक्ट्रीशियन ट्रेड; कुछ कामों के लिए लाइसेंस ज़रूरी हो सकता है" },
    locationNote: { en: "Work is local and on site.", hi: "काम स्थानीय और साइट पर।" }
  }),
  c({
    id: "plumber", sector: "private",
    title: { en: "Plumber", hi: "प्लंबर" },
    summary: { en: "Installing and repairing water pipes and fittings.", hi: "पानी की पाइप और फ़िटिंग लगाना और ठीक करना।" },
    education: "any", requiredSkills: ["plumbing"], optionalSkills: ["repair"],
    goals: ["private-job", "business"], sources: ["ncs"],
    preferred: { en: "ITI Plumber trade or a short skill course", hi: "ITI प्लंबर ट्रेड या छोटा स्किल कोर्स" },
    locationNote: { en: "Work is local and on site.", hi: "काम स्थानीय और साइट पर।" }
  }),
  c({
    id: "welder", sector: "private",
    title: { en: "Welder / fabricator", hi: "वेल्डर / फ़ैब्रिकेटर" },
    summary: { en: "Joining and shaping metal in workshops, factories and construction.", hi: "वर्कशॉप, फ़ैक्ट्री और निर्माण में धातु जोड़ना और आकार देना।" },
    education: "any", requiredSkills: ["welding"], optionalSkills: ["repair"],
    goals: ["private-job", "business", "apprenticeship"], sources: ["ncs"],
    preferred: { en: "ITI Welder trade", hi: "ITI वेल्डर ट्रेड" },
    locationNote: { en: "Workshop or site based; industrial areas have more work.", hi: "वर्कशॉप या साइट पर; औद्योगिक इलाक़ों में ज़्यादा काम।" }
  }),
  c({
    id: "driver", sector: "private",
    title: { en: "Driver (commercial / company)", hi: "ड्राइवर (कमर्शियल / कंपनी)" },
    summary: { en: "Driving for companies, transport services, delivery or cab platforms.", hi: "कंपनियों, ट्रांसपोर्ट, डिलीवरी या कैब के लिए गाड़ी चलाना।" },
    education: "any", requiredSkills: ["driving"], optionalSkills: ["repair"],
    goals: ["private-job", "business"], sources: ["ncs"],
    educationNote: { en: "A valid driving licence of the right type is required by law.", hi: "क़ानूनन सही प्रकार का वैध ड्राइविंग लाइसेंस ज़रूरी है।" },
    locationNote: { en: "Local or long-distance, depending on the job.", hi: "काम के हिसाब से स्थानीय या लंबी दूरी।" }
  }),
  c({
    id: "repair-technician", sector: "private",
    title: { en: "Mobile / appliance repair technician", hi: "मोबाइल / उपकरण मरम्मत तकनीशियन" },
    summary: { en: "Fixing phones, home appliances or vehicles in a shop or service centre.", hi: "दुकान या सर्विस सेंटर में फ़ोन, घरेलू उपकरण या गाड़ियाँ ठीक करना।" },
    education: "any", requiredSkills: ["repair"], optionalSkills: ["electrician", "customer-service"],
    goals: ["private-job", "business"], sources: ["ncs"],
    locationNote: { en: "Local work; can become your own shop.", hi: "स्थानीय काम; आगे चलकर अपनी दुकान बन सकती है।" }
  }),
  c({
    id: "web-developer", sector: "private",
    title: { en: "Junior web developer", hi: "जूनियर वेब डेवलपर" },
    summary: { en: "Building and fixing websites. A strong project portfolio matters a lot.", hi: "वेबसाइट बनाना और ठीक करना। अच्छे प्रोजेक्ट का पोर्टफ़ोलियो बहुत मायने रखता है।" },
    education: ["class12", "diploma", "graduation", "postgraduation", "professional"], requiredSkills: ["webdev", "programming"], optionalSkills: ["graphic-design", "spoken-english"],
    goals: ["private-job", "remote", "internship"], remoteFriendly: true, sources: ["ncs"],
    preferred: { en: "Many employers prefer a degree or diploma in computers", hi: "कई कंपनियाँ कंप्यूटर में डिग्री या डिप्लोमा पसंद करती हैं" },
    locationNote: { en: "Mostly in cities; many remote roles.", hi: "ज़्यादातर शहरों में; कई घर से काम वाले पद।" }
  }),
  c({
    id: "software-developer", sector: "private",
    title: { en: "Software developer", hi: "सॉफ़्टवेयर डेवलपर" },
    summary: { en: "Writing and testing software for companies.", hi: "कंपनियों के लिए सॉफ़्टवेयर लिखना और टेस्ट करना।" },
    education: ["diploma", "graduation", "postgraduation", "professional"], requiredSkills: ["programming"], optionalSkills: ["webdev", "data-analytics", "spoken-english"],
    goals: ["private-job", "remote", "internship"], remoteFriendly: true, sources: ["ncs"],
    preferred: { en: "Degree in computer science, IT or engineering (BCA, B.Tech, MCA)", hi: "कंप्यूटर साइंस, IT या इंजीनियरिंग में डिग्री (BCA, B.Tech, MCA)" },
    locationNote: { en: "Mostly in big cities; many remote roles.", hi: "ज़्यादातर बड़े शहरों में; कई घर से काम वाले पद।" }
  }),
  c({
    id: "data-analyst", sector: "private",
    title: { en: "Junior data analyst", hi: "जूनियर डेटा एनालिस्ट" },
    summary: { en: "Cleaning data and making reports and charts that help businesses decide.", hi: "डेटा साफ़ करना और ऐसी रिपोर्ट व चार्ट बनाना जिनसे व्यापार फ़ैसले ले सकें।" },
    education: GRAD, requiredSkills: ["excel", "data-analytics"], optionalSkills: ["programming", "spoken-english"],
    goals: ["private-job", "remote", "career-change"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Mostly in cities; some remote roles.", hi: "ज़्यादातर शहरों में; कुछ घर से काम वाले पद।" }
  }),
  c({
    id: "graphic-designer", sector: "private",
    title: { en: "Graphic designer", hi: "ग्राफ़िक डिज़ाइनर" },
    summary: { en: "Designing posters, social media posts, logos and packaging.", hi: "पोस्टर, सोशल मीडिया पोस्ट, लोगो और पैकेजिंग डिज़ाइन करना।" },
    education: "any", requiredSkills: ["graphic-design"], optionalSkills: ["digital-marketing", "basic-computer"],
    goals: ["private-job", "remote", "business"], remoteFriendly: true, sources: ["ncs"],
    preferred: { en: "A portfolio of your designs matters more than a degree", hi: "डिग्री से ज़्यादा आपके डिज़ाइनों का पोर्टफ़ोलियो मायने रखता है" },
    locationNote: { en: "Can be done remotely or as freelance work.", hi: "घर से या फ़्रीलांस भी कर सकते हैं।" }
  }),
  c({
    id: "digital-marketer", sector: "private",
    title: { en: "Digital marketing executive", hi: "डिजिटल मार्केटिंग एग्ज़िक्यूटिव" },
    summary: { en: "Running social media, ads and online promotion for businesses.", hi: "व्यापारों के लिए सोशल मीडिया, विज्ञापन और ऑनलाइन प्रचार चलाना।" },
    education: FROM_12, requiredSkills: ["digital-marketing"], optionalSkills: ["graphic-design", "spoken-english", "sales"],
    goals: ["private-job", "remote", "business", "career-change"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Often remote or freelance.", hi: "अक्सर घर से या फ़्रीलांस।" }
  }),
  c({
    id: "tutor", sector: "private",
    title: { en: "Private / online tutor", hi: "प्राइवेट / ऑनलाइन ट्यूटर" },
    summary: { en: "Teaching school students at home, in coaching centres or online.", hi: "घर पर, कोचिंग सेंटर में या ऑनलाइन स्कूल के बच्चों को पढ़ाना।" },
    education: FROM_12, requiredSkills: ["teaching"], optionalSkills: ["spoken-english", "basic-computer"],
    goals: ["private-job", "remote", "business"], remoteFriendly: true, sources: ["ncs"],
    locationNote: { en: "Can be done locally or online.", hi: "स्थानीय या ऑनलाइन, दोनों तरह।" }
  }),

  // ---------------- Self-employment ----------------
  c({
    id: "tailoring-business", sector: "self",
    title: { en: "Tailoring / boutique business", hi: "सिलाई / बुटीक का काम" },
    summary: { en: "Running your own tailoring, alteration or boutique work from home or a shop.", hi: "घर या दुकान से अपना सिलाई, ऑल्टरेशन या बुटीक का काम।" },
    education: "any", requiredSkills: ["tailoring"], optionalSkills: ["sales", "digital-marketing"],
    goals: ["business", "skill-development"], sources: ["myscheme"],
    locationNote: { en: "Can start from home in your own area.", hi: "अपने इलाक़े में घर से शुरू कर सकते हैं।" }
  }),
  c({
    id: "food-business", sector: "self",
    title: { en: "Small food business / tiffin service", hi: "छोटा खाने का व्यवसाय / टिफ़िन सेवा" },
    summary: { en: "Cooking and selling food, snacks or tiffins locally.", hi: "स्थानीय रूप से खाना, नाश्ता या टिफ़िन बनाकर बेचना।" },
    education: "any", requiredSkills: ["cooking"], optionalSkills: ["sales", "digital-marketing"],
    goals: ["business"], sources: ["myscheme"],
    educationNote: { en: "Food businesses need food-safety registration — check local rules.", hi: "खाने के व्यवसाय के लिए फ़ूड-सेफ़्टी पंजीकरण ज़रूरी है — स्थानीय नियम देखें।" },
    locationNote: { en: "Local.", hi: "स्थानीय।" }
  }),
  c({
    id: "agri-entrepreneur", sector: "self",
    title: { en: "Farm-based business (dairy, nursery, organic produce)", hi: "खेती से जुड़ा व्यवसाय (डेयरी, नर्सरी, जैविक उत्पाद)" },
    summary: { en: "Adding income from farming-related work such as dairy, poultry, nursery or selling produce.", hi: "डेयरी, मुर्ग़ी पालन, नर्सरी या उपज बेचने जैसे खेती से जुड़े काम से आमदनी बढ़ाना।" },
    education: "any", requiredSkills: ["agriculture"], optionalSkills: ["sales", "accounting"],
    goals: ["business", "skill-development"], sources: ["myscheme"],
    locationNote: { en: "Rural and semi-urban areas.", hi: "गाँव और क़स्बे।" }
  }),
  c({
    id: "computer-centre", sector: "self",
    title: { en: "Computer / CSC-style service centre", hi: "कंप्यूटर / जन सेवा जैसा सर्विस सेंटर" },
    summary: { en: "Offering typing, printing, online form filling and computer services in your area.", hi: "अपने इलाक़े में टाइपिंग, प्रिंटिंग, ऑनलाइन फ़ॉर्म भरने और कंप्यूटर सेवाएँ देना।" },
    education: FROM_10, requiredSkills: ["basic-computer", "typing"], optionalSkills: ["ccc", "olevel", "dca", "excel", "customer-service"],
    goals: ["business"], sources: ["myscheme"],
    educationNote: { en: "Official Common Service Centres have their own registration rules.", hi: "आधिकारिक जन सेवा केंद्र (CSC) के अपने पंजीकरण नियम हैं।" },
    locationNote: { en: "Works well in towns and villages.", hi: "क़स्बों और गाँवों में अच्छा चलता है।" }
  })
];

return { SECTORS, CAREERS };
})();

// ===== js/ui.js =====
__mods["js/ui.js"] = (function () {
// Small helpers shared by the explorer pages.

/** Makes text safe to put inside HTML. Always use this for data. */
function esc(value) {
  return String(value ?? "")
    .replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;").replace(/'/g, "&#39;");
}

/** "2026-10-22" → "22 Oct 2026" (or Hindi month names). */
function formatDate(iso, lang) {
  const d = new Date(iso + "T00:00:00");
  if (Number.isNaN(d.getTime())) return iso;
  return d.toLocaleDateString(lang === "hi" ? "hi-IN" : "en-IN", { day: "numeric", month: "short", year: "numeric" });
}

/** An external link that opens safely in a new tab. */
function extLink(url, text, newTabLabel, cls = "") {
  return `<a href="${esc(url)}" target="_blank" rel="noopener noreferrer"${cls ? ` class="${cls}"` : ""}>${esc(text)}<span class="visually-hidden"> (${esc(newTabLabel)})</span> <span aria-hidden="true">↗</span></a>`;
}

/** Shows only the web address part, e.g. "ssc.gov.in". */
function hostOf(url) {
  try { return new URL(url).hostname.replace(/^www\./, ""); } catch { return url; }
}

return { esc, formatDate, extLink, hostOf };
})();

// ===== js/courses.js =====
__mods["js/courses.js"] = (function () {
// Course & Skill Explorer: courses for the person's skill gaps, plus browse-by-skill.

const { t } = __mods["js/i18n.js"];
const { getLang } = __mods["js/layout.js"];
const { loadProfile } = __mods["js/profile-store.js"];
const { recommendCourses, coursesForSkill, evaluateCourse } = __mods["js/course-match.js"];
const { COURSES, PROVIDER_TYPES, SKILL_INDIA } = __mods["data/courses.js"];
const { CAREERS } = __mods["data/careers.js"];
const { ALL_SKILLS, SKILL_GROUPS, labelOf } = __mods["data/options.js"];
const { normalizeProfile } = __mods["js/profile-model.js"];
const { esc, formatDate, extLink, hostOf } = __mods["js/ui.js"];
const root = document.getElementById("courses-app");
const state = { profile: null, rec: null, skill: "", freeOnly: false };

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");
const skillName = (id) => labelOf(ALL_SKILLS, id, L());
const careerName = (id) => { const c = CAREERS.find((x) => x.id === id); return c ? txt(c.title) : ""; };

function say(m) {
  const v = m.vars || {};
  const vars = {};
  if (v.skills) vars.skills = v.skills.map(skillName).join(", ");
  if (v.careers) vars.careers = v.careers.slice(0, 3).map(careerName).filter(Boolean).join(", ");
  return tt(m.key, vars);
}

function fact(labelKey, value) {
  const shown = value ? esc(value) : `<span class="muted">${esc(tt("courses.notVerified"))}</span>`;
  return `<div class="review-row"><dt>${esc(tt(labelKey))}</dt><dd>${shown}</dd></div>`;
}

function card(course, result) {
  const type = PROVIDER_TYPES.find((p) => p.id === course.providerType);
  // Show the provider's own wording if we have it; otherwise the short label.
  const costText = course.cost ? (txt(course.costNote) || tt(`courses.costLabel.${course.cost}`)) : "";
  const r = result || evaluateCourse(course, state.profile || normalizeProfile(null), []);
  return `
  <article class="card rec-card course-card" aria-labelledby="co-${course.id}${result ? "-r" : ""}">
    <div class="rec-top">
      <span class="sector">${esc(txt(type))}</span>
      ${course.cost === "free" ? `<span class="fit fit--strong">${esc(tt("courses.costLabel.free"))}</span>` : ""}
      ${course.cost === "free-exam-fee" ? `<span class="fit fit--possible">${esc(tt("courses.cost.free"))}</span>` : ""}
    </div>
    <h3 id="co-${course.id}${result ? "-r" : ""}">${esc(txt(course.title))}</h3>
    <p class="muted">${esc(txt(course.topics))}</p>
    <ul class="chip-list skill-chips">${course.skills.map((s) => `<li class="chip chip--skill">${esc(skillName(s))}</li>`).join("")}</ul>

    ${result ? `<h4>${esc(tt("courses.why"))}</h4>
      <ul class="list-check compact">${result.reasons.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>` : ""}

    <dl class="facts">
      ${fact("courses.provider", txt(course.provider))}
      ${fact("courses.mode", tt(`courses.mode.${course.mode}`))}
      ${fact("courses.cost", costText)}
      ${fact("courses.duration", txt(course.duration))}
      ${fact("courses.certificate", txt(course.certificate))}
      ${course.prerequisites ? fact("courses.prereq", txt(course.prerequisites)) : ""}
    </dl>

    ${course.searchTip ? `<p class="tip"><strong>${esc(tt("courses.howToFind"))}:</strong> ${esc(txt(course.searchTip))}</p>` : ""}
    ${course.note ? `<p class="alert alert--warn small">${esc(txt(course.note))}</p>` : ""}

    <details class="rec-more"${result ? " open" : ""}>
      <summary>${esc(tt("courses.check"))}</summary>
      <ul class="list-warn compact">${r.checks.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>
    </details>

    <p class="source-host">${esc(hostOf(course.url))}</p>
    <p>${extLink(course.url, tt("courses.open"), tt("rec.newTab"), "btn btn-primary btn-small")}</p>
    <p class="muted small">${esc(tt("courses.checkedFrom", { date: formatDate(course.checked, L()), source: txt(course.checkedFrom) }))}</p>
  </article>`;
}

function forYouSection() {
  if (!state.profile) return `<p class="alert alert--info"><a href="profile.html">${esc(tt("courses.noProfile"))}</a></p>`;
  const rec = state.rec;
  if (!rec.ready || !rec.gaps.length) return `<p class="alert alert--info">${esc(tt("courses.noGaps"))}</p>`;

  const gapChips = rec.gaps.map((g) => `
    <li><button type="button" class="chip chip--gap chip-btn" data-skill="${esc(g.skill)}">
      ${esc(skillName(g.skill))} <span class="count">${g.careers.length}</span></button></li>`).join("");
  return `
  <section aria-labelledby="gaps-title" class="card gaps-card">
    <h2 id="gaps-title">${esc(tt("courses.gapsT"))}</h2>
    <p class="muted">${esc(tt("courses.gapsD"))}</p>
    <ul class="chip-list">${gapChips}</ul>
  </section>
  ${rec.uncovered.length ? `<p class="alert alert--info">${esc(tt("courses.uncovered", { skills: rec.uncovered.map(skillName).join(", ") }))}</p>` : ""}
  ${rec.items.length ? `
  <section aria-labelledby="foryou-title">
    <h2 id="foryou-title">${esc(tt("courses.forYouT"))}</h2>
    <div class="rec-grid">${rec.items.map((r) => card(r.course, r)).join("")}</div>
  </section>` : ""}`;
}

function browseControls() {
  const options = SKILL_GROUPS.map((g) => `
    <optgroup label="${esc(txt(g))}">
      ${g.skills.map((s) => `<option value="${esc(s.id)}"${state.skill === s.id ? " selected" : ""}>${esc(txt(s))}</option>`).join("")}
    </optgroup>`).join("");
  return `
  <section aria-labelledby="browse-title" id="browse">
    <h2 id="browse-title">${esc(tt("courses.browseT"))}</h2>
    <div class="browse-controls">
      <div class="field">
        <label for="skill-filter">${esc(tt("courses.skillFilter"))}</label>
        <select id="skill-filter"><option value="">${esc(tt("courses.anySkill"))}</option>${options}</select>
      </div>
      <div class="filter-bar" role="group" aria-label="${esc(tt("courses.costFilter"))}">
        <button type="button" class="filter-btn" data-free="false" aria-pressed="${!state.freeOnly}">${esc(tt("courses.cost.all"))}</button>
        <button type="button" class="filter-btn" data-free="true" aria-pressed="${state.freeOnly}">${esc(tt("courses.cost.free"))}</button>
      </div>
    </div>
    <div id="browse-results"></div>
  </section>`;
}

function renderBrowse() {
  const box = document.getElementById("browse-results");
  if (!box) return;
  const list = coursesForSkill(state.skill, COURSES)
    .filter((c) => !state.freeOnly || c.cost === "free" || c.cost === "free-exam-fee");
  box.innerHTML = `
    <p class="muted" id="browse-count" aria-live="polite">${esc(tt("courses.count", { n: list.length }))}</p>
    ${list.length ? `<div class="rec-grid">${list.map((c) => card(c, null)).join("")}</div>`
      : `<p class="alert alert--info">${esc(tt("courses.emptyFilter"))}</p>`}`;
}

function sidhCard() {
  return `
  <section class="card myscheme-card" aria-labelledby="sidh-title">
    <h2 id="sidh-title">${esc(tt("courses.sidhT"))}</h2>
    <p class="muted">${esc(txt(SKILL_INDIA.text))}</p>
    ${extLink(SKILL_INDIA.url, tt("courses.sidhBtn"), tt("rec.newTab"), "btn btn-primary")}
  </section>`;
}

function render() {
  root.setAttribute("aria-busy", "false");
  root.innerHTML = forYouSection() + browseControls() + sidhCard();
  renderBrowse();
}

function chooseSkill(skill, scroll) {
  state.skill = skill;
  const select = document.getElementById("skill-filter");
  if (select) select.value = skill;
  renderBrowse();
  if (scroll) {
    document.getElementById("browse")?.scrollIntoView({ block: "start" });
    select?.focus({ preventScroll: true });
  }
}

function init() {
  if (!root) return;
  state.profile = loadProfile()?.profile || null;
  state.rec = state.profile ? recommendCourses(state.profile, CAREERS, COURSES) : null;
  const fromUrl = new URLSearchParams(location.search).get("skill") || "";
  if (ALL_SKILLS.some((s) => s.id === fromUrl)) state.skill = fromUrl;

  root.addEventListener("change", (e) => {
    if (e.target.id === "skill-filter") chooseSkill(e.target.value, false);
  });
  root.addEventListener("click", (e) => {
    const chip = e.target.closest("[data-skill]");
    if (chip) { chooseSkill(chip.dataset.skill, true); return; }
    const free = e.target.closest("[data-free]");
    if (free) {
      state.freeOnly = free.dataset.free === "true";
      root.querySelectorAll("[data-free]").forEach((b) => b.setAttribute("aria-pressed", String(b === free)));
      renderBrowse();
    }
  });
  document.addEventListener("cs:langchange", () => render());
  render();
  if (fromUrl && state.skill) {
    document.getElementById("browse")?.scrollIntoView({ block: "start" });
    document.getElementById("skill-filter")?.focus({ preventScroll: true });
  }
}

try {
  init();
} catch (err) {
  console.error(err);
  if (root) root.innerHTML = `<p class="alert alert--error" role="alert">${esc(tt("state.error"))}</p>`;
}

return {  };
})();

})();
