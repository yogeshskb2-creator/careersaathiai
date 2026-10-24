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
    "home.f.plan.d": "A practical plan that changes with your career goal — add it to your phone calendar.",

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
    "jobs.lead": "Open recruitments with their last dates (updated by hand), and the official websites where government recruitment is announced.",
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
    "sch.check.group": "This is only for certain groups (see the main conditions). Check whether it applies to you.",
    "sch.check.groupNo": "This is for a group your profile does not show, so it may not apply to you.",
    "sch.why.pwd": "It is meant for persons with disability, as recorded in your profile.",
    "sch.check.pwd": "This is only for persons with disability (as defined in the scheme).",
    "sch.check.pwdNo": "This is only for persons with disability, so it may not apply to you.",
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
    "courses.emptyFilter": "No course matches these filters.",
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

    // ---- Contact, terms, ads, guides ----
    "nav.guides": "Guides",
    "footer.terms": "Terms of use",
    "footer.contact": "Contact us",
    "footer.explore": "Explore more",
    "contact.title": "Contact Us — CareerSaathi AI",
    "contact.h1": "Contact us",
    "contact.lead": "Questions, corrections or feedback about CareerSaathi AI? Write to us by email.",
    "contact.emailLabel": "Email",
    "contact.copy": "Copy email",
    "contact.copied": "Email address copied.",
    "contact.copyFail": "Could not copy. Please select the address and copy it.",
    "contact.helpT": "We can help with",
    "contact.help.1": "Reporting wrong or outdated information on any page. Please include the page link.",
    "contact.help.2": "Suggestions for careers, schemes, courses or guides to add.",
    "contact.help.3": "Problems using the website on your phone or computer.",
    "contact.cantT": "We cannot help with",
    "contact.cant.1": "Job applications, admit cards or results. Use the official recruitment website.",
    "contact.cant.2": "Scheme or loan approvals. Only the official department or bank decides.",
    "contact.cant.3": "Personal career counselling by phone.",
    "contact.safeT": "Keep your information safe",
    "contact.safe": "Never send Aadhaar, PAN, bank details, passwords or OTPs by email. We will never ask for them, and we never ask for money.",
    "terms.title": "Terms of Use — CareerSaathi AI",
    "terms.h1": "Terms of Use",
    "terms.updated": "Last updated: 22 October 2026",
    "terms.lead": "By using CareerSaathi AI you agree to these terms. Please read them together with our Disclaimer and Privacy Information.",
    "terms.useT": "Using this website",
    "terms.use.1": "CareerSaathi AI is a free information and guidance tool. You may use it for your own career planning.",
    "terms.use.2": "Do not misuse the website — for example by trying to break it, copying it to mislead people, or presenting it as a government service.",
    "terms.infoT": "Information, not advice or guarantees",
    "terms.info.1": "Suggestions are based on simple rules and on the information you enter. They are not professional advice.",
    "terms.info.2": "We do not guarantee any job, admission, loan, subsidy or benefit. Official notifications and official websites always decide.",
    "terms.info.3": "Information can become outdated. Always check the official source before you apply or pay any fee.",
    "terms.linksT": "Links to other websites",
    "terms.links": "We link to official government websites and other websites for your convenience. We do not control them and are not responsible for their content or services.",
    "terms.adsT": "Advertising",
    "terms.ads": "This website may show ads in future. Ads come from third parties such as Google. An ad does not mean we recommend the product or service.",
    "terms.contentT": "Our content",
    "terms.content": "The text, design and code of this website belong to CareerSaathi AI unless stated otherwise. You may share links to our pages, but please do not copy whole pages.",
    "terms.liabilityT": "Limits of our responsibility",
    "terms.liability": "We try to keep information correct, but we are not responsible for any loss caused by relying on it. Please verify important details yourself on official websites.",
    "terms.changesT": "Changes to these terms",
    "terms.changes": "We may update these terms. The date at the top shows the latest version.",
    "terms.lawT": "Governing law",
    "terms.law": "These terms are governed by the laws of India.",
    "terms.contactT": "Questions",
    "terms.contact": "Write to us using the Contact page.",
    "privacy.adsT": "Advertising (Google AdSense)",
    "privacy.adsIntro": "To keep CareerSaathi AI free, we may show ads from Google AdSense in future. When ads are shown, the following applies:",
    "privacy.ads.1": "Third-party vendors, including Google, use cookies to serve ads based on your previous visits to this website or to other websites.",
    "privacy.ads.2": "Google's use of advertising cookies lets Google and its partners show you ads based on your visits to this site and/or other sites on the Internet.",
    "privacy.ads.3": "Ad networks may also use cookies and similar technology to measure ads and prevent fraud.",
    "privacy.vendors": "Ad network we use: Google AdSense. If we add any other ad network, we will list it here.",
    "privacy.optoutT": "Your choices about ads",
    "privacy.optout.1": "Turn off personalised ads from Google in",
    "privacy.optout.1link": "Google Ads Settings",
    "privacy.optout.2": "Opt out of personalised-ad cookies from some other vendors at",
    "privacy.optout.2link": "aboutads.info",
    "privacy.optout.3": "Learn how Google uses information from websites that use its services:",
    "privacy.optout.3link": "How Google uses this information",
    "privacy.adsProfile": "Your career profile is never shared with Google or any advertiser. It stays in your browser.",
    "privacy.adsScam": "We do not choose the individual ads you see, and an ad is not our recommendation. Government jobs are never sold — ignore any ad that offers a job for money.",
    "privacy.contactT": "Contact",
    "privacy.contact": "Questions about privacy? Write to us using the Contact page.",
    "guides.title": "Career Guides — CareerSaathi AI",
    "guides.h1": "Career guides",
    "guides.lead": "Simple guides on jobs, skills and government schemes, written from official sources. Every guide is available in English and Hindi.",
    "guides.note": "Rules, fees and dates change. Each guide lists its official sources — always check them before you apply.",
    "guides.readEn": "Read in English",
    "guides.readHi": "हिंदी में पढ़ें",

    "home.guidesT": "Career guides in English and Hindi",
    "home.guidesD": "Simple, source-checked guides: jobs after ITI, the CCC course, free skill training, apprenticeships, business loans and how to avoid job scams.",
    "home.guidesBtn": "Read the guides",
    // ---- Open recruitments ----
    "vac.sectionT": "Open right now",
    "jobs.sourcesT": "Official recruitment websites",
    "vac.sectionD": "Recruitments open for applications, worked out from today's date ({today}). We update this list by hand — always confirm on the official website.",
    "vac.listUpdated": "List last updated: {date}",
    "vac.listStale": "This list was last updated {n} days ago and may be out of date. Please check the official websites.",
    "vac.none": "No open recruitments in our list right now. Check the official recruitment websites below.",
    "vac.status.open": "Open",
    "vac.status.closing-soon": "Closing soon",
    "vac.status.upcoming": "Opens soon",
    "vac.daysLeft": "{n} days left",
    "vac.oneDayLeft": "1 day left",
    "vac.lastDay": "Last day today",
    "vac.daysToOpen": "Opens in {n} days",
    "vac.dates": "Apply from {from} to {to}",
    "vac.until": "until {time}",
    "vac.posts": "Posts",
    "vac.qualification": "Qualification",
    "vac.age": "Age",
    "vac.reportedLabel": "Open as per reports — confirm officially",
    "vac.matchYou": "Matches your profile",
    "vac.fitCheck": "Check if you qualify",
    "vac.notMet": "Qualification may not match",
    "vac.why": "Why it may suit you",
    "vac.check": "Check before applying",
    "vac.apply": "Official website",
    "vac.checked": "Checked on {date} from: {source}",
    "vac.forYouT": "Open now for you",
    "vac.forYouNone": "No open recruitment in our list matches your profile today.",
    "vac.seeAll": "See all open recruitments",
    "vac.recBanner": "{n} open recruitment(s) match your profile today.",
    "vac.recBtn": "See open recruitments",
    "vac.why.edu": "Your qualification ({level}) matches the recorded requirement.",
    "vac.why.goal": "You chose a government job as a goal.",
    "vac.why.state": "This is your own state's recruitment.",
    "vac.check.eduNo": "The required qualification may be higher than or different from yours.",
    "vac.check.edu": "Qualification differs by post — read the notice to see which post fits you.",
    "vac.check.ageYoung": "You may be below the minimum age ({min} years).",
    "vac.check.ageOld": "You may be above the general upper age limit ({max} years).",
    "vac.check.ageRelax": "You are above the general limit ({max} years), but age relaxation may apply to your category — check the notice.",
    "vac.check.ageDate": "Age is counted as on {date}.",
    "vac.check.exp": "Some posts need {n} years of work experience.",
    "vac.check.state": "State-level recruitment — check the rules for candidates from other states.",
    "vac.check.reported": "These dates come from news reports, not the official notice — confirm them on the official website.",
    "vac.check.notice": "Read the full official notification before applying. Pay fees only on the official portal.",
    "stale.warn": "These details were checked {n} days ago and may have changed. Confirm on the official page.",

    // ---- Quiz, roadmap, scholarships, calendar ----
    "nav.quiz": "Career Quiz",
    "nav.scholarships": "Scholarships",
    "nav.roadmap": "After 10th/12th",
    "home.ctaQuiz": "Take the interest quiz",
    "home.f.quiz.t": "Career Interest Quiz",
    "home.f.quiz.d": "24 quick questions to find the kind of work you enjoy, with careers and skills to match.",
    "home.f.road.t": "What after 10th / 12th?",
    "home.f.road.d": "Streams, ITI, polytechnic, skill courses, degrees, entrance exams and govt jobs — explained simply.",
    "home.f.schol.t": "Scholarship Finder",
    "home.f.schol.d": "Government scholarships for school and college students, with amounts and how to apply.",
    "schol.title": "Scholarship Finder — CareerSaathi AI",
    "schol.h1": "Scholarship Finder",
    "schol.lead": "Government scholarships for school and college students, summarised from official pages. Amounts and limits are shown as published.",
    "schol.warn": "A suggestion here is not an approval. Rules, income limits and last dates change every year — always confirm on the official portal, and never pay anyone to \"get\" a scholarship.",
    "schol.portalT": "Search every scholarship on the National Scholarship Portal",
    "schol.portalBtn": "Open NSP",
    "schol.worth": "Worth a look for you",
    "schol.others": "Other scholarships",
    "schol.all": "All scholarships",
    "schol.noProfile": "Fill your profile (class, category, gender) to see which scholarships may be worth a look for you.",
    "schol.noWorth": "None of these scholarships stands out for your profile yet. You can still read them all below, or search the National Scholarship Portal.",
    "quiz.title": "Career Interest Quiz — CareerSaathi AI",
    "quiz.h1": "What kind of work do I enjoy?",
    "quiz.lead": "24 quick questions, about 4 minutes. There are no right or wrong answers — choose what feels true for you.",
    "quiz.privacy": "Your answers stay only in this browser. You can clear them any time.",
    "quiz.progress": "{done} of {total} answered",
    "quiz.submit": "See my result",
    "quiz.clear": "Clear my answers",
    "quiz.missing": "Please answer the remaining {n} question(s). We have taken you to the first one.",
    "quiz.resultT": "Your interest result",
    "quiz.resultLead": "These are the kinds of work you seem to enjoy most, based on your answers:",
    "quiz.points": "{n} of {max} points",
    "quiz.careersT": "Careers to explore",
    "quiz.skillsT": "Skills that help (tap to find courses)",
    "quiz.guideLink": "Read a related guide",
    "quiz.allT": "All six areas",
    "quiz.noClear": "You answered \"No\" to almost everything, so we can't suggest an area yet. That is okay — try the roadmap page, or talk to a teacher or family member about what you liked doing as a child.",
    "quiz.notTest": "This is a simple self-check, not a scientific or psychometric test. Use it to start thinking — your interests can change, and your qualification and situation matter too.",
    "quiz.edit": "Change my answers",
    "quiz.nextT": "What next?",
    "quiz.nextHave": "Your career recommendations now show which careers match these interests.",
    "quiz.nextNone": "Fill your profile so we can check which of these careers fit your education and skills.",
    "quiz.nextRec": "See my recommendations",
    "quiz.nextProfile": "Fill my profile",
    "quiz.nextRoadmap": "What after 10th / 12th?",
    "quiz.sumT": "Your interests",
    "quiz.sumHave": "From your interest quiz, you seem to enjoy:",
    "quiz.sumSee": "See full quiz result",
    "quiz.sumNone": "Not sure what you like? A 4-minute quiz can help you find out.",
    "quiz.cta": "Take the interest quiz",
    "quiz.recTag": "Matches your interests (quiz)",
    "road.title": "What after 10th or 12th? Career Roadmap — CareerSaathi AI",
    "road.h1": "What after 10th or 12th?",
    "road.lead": "Every main path explained simply — how long it usually takes, who it suits and where it leads. There is no single \"best\" path; the right one depends on what you enjoy and your situation.",
    "road.warn": "Durations are the usual ones. Admission rules, fees and dates differ by state and year — always check the official website before deciding.",
    "road.choose": "Choose your stage",
    "road.count": "{stage}: {n} paths",
    "road.liked": "Suits your interest: {areas}",
    "road.goodFor": "Good if",
    "road.leadsTo": "Leads to",
    "road.tip": "Tip",
    "road.careers": "Careers on this path",
    "road.page.jobs": "See open govt recruitments",
    "road.page.scholarships": "Find scholarships",
    "road.page.courses": "Find free courses",
    "road.guide": "Read our guide",
    "road.quizHave": "Paths marked 🧭 suit your quiz interests ({areas}).",
    "road.quizNone": "Take the interest quiz and we will mark the paths that suit you.",
    "road.checked": "Information checked on {date} from official websites. Rules change — please confirm before deciding.",
    "cal.remind": "Reminder:",
    "cal.lastBtn": "Last date (.ics)",
    "cal.openBtn": "Opening day (.ics)",
    "cal.google": "Google Calendar",
    "cal.done": "Calendar file downloaded — open it to add the reminder.",
    "cal.fail": "Your browser blocked the download. Try the Google Calendar button.",
    "cal.lastTitle": "Last date: {title}",
    "cal.openTitle": "Applications open: {title}",
    "cal.lastDesc": "Last date to apply for {title} ({org}) is {date}. Apply only on the official website: {url} — check the official notice for exact rules. Reminder from CareerSaathi AI.",
    "cal.openDesc": "Applications for {title} ({org}) are expected to open on {date}. Read the official notice first: {url}. Reminder from CareerSaathi AI.",
    "cal.planD": "Get a 9 am reminder at the start of each week on your phone.",
    "cal.planBtn": "Add plan to calendar",
    "cal.planPrefix": "CareerSaathi plan —",
    "cal.planFoot": "Tick off tasks on your CareerSaathi AI dashboard.",
    // ---- Private Job Finder & Skill Development ----
    "nav.privateJobs": "Private Job Finder",
    "pj.title": "Private Job Finder — CareerSaathi AI",
    "pj.h1": "Private Job Finder",
    "pj.lead": "Tell us about your education, skills and the kind of work you want. We will show realistic private-sector roles, companies to explore, salary information with sources, and what to learn next.",
    "pj.howT": "How this works — please read",
    "pj.how.1": "We compare your answers with what employers usually ask for common private jobs.",
    "pj.how.2": "This site has no live job feed, so we never show a vacancy as \"open\". We give you search links to real job portals and official company careers pages.",
    "pj.how.3": "Salary figures come from a named, dated source and are shown only when the data is strong enough.",
    "pj.how.4": "Company facts come from public sources that we list. \"Verification incomplete\" means we could not check everything.",
    "pj.privacyT": "Your privacy",
    "pj.privacy.1": "Your answers stay in this browser. Nothing is sent to us or to any company.",
    "pj.privacy.2": "Name, PIN code and other optional fields can be left empty.",
    "pj.privacy.3": "We never ask for Aadhaar, PAN, bank details, passwords, phone number or email.",
    "pj.privacy.4": "You can clear your answers at any time.",
    "pj.step.place.t": "Where you live and want to work",
    "pj.step.place.d": "This helps us build job searches for the right place. Only the starred questions are needed.",
    "pj.step.edu.t": "Education",
    "pj.step.edu.d": "Lower education does not stop you — we also look at skills, experience and entry-level jobs.",
    "pj.step.skills.t": "Skills and experience",
    "pj.step.skills.d": "Tick everything you can do, even if you learned it at home, in a family shop or by yourself.",
    "pj.step.job.t": "The job you want",
    "pj.step.job.d": "Choose one or more job types. If you dream of a bigger role, pick it as your target — we will show the path.",
    "pj.step.env.t": "Work place and other preferences",
    "pj.step.env.d": "All optional. These help us suggest realistic options.",
    "pj.step.review.t": "Check your answers",
    "pj.step.review.d": "Look through your answers. You can change any section before we search.",
    "pj.f.name": "Your first name (optional)",
    "pj.f.nameHint": "Only used to greet you on this page.",
    "pj.f.state": "State / Union Territory",
    "pj.f.district": "District (optional)",
    "pj.f.city": "City, town or village (optional)",
    "pj.f.cityHint": "Used to make job-portal searches for your area.",
    "pj.f.pin": "PIN code (optional)",
    "pj.f.pinHint": "6 digits. Not needed — only if you want to note it for yourself.",
    "pj.f.locationPref": "Where do you want to work?",
    "pj.f.radius": "How far can you travel each day?",
    "pj.f.relocate": "Can you move to another city for a job?",
    "pj.f.language": "Language you prefer at work",
    "pj.f.contactNote": "We do not ask for your phone number or email. This site does not send job alerts, so they are not needed.",
    "pj.f.level": "Highest education",
    "pj.f.levelHint": "Choose the highest one you have completed or are studying now.",
    "pj.f.stream": "Stream or specialisation",
    "pj.f.course": "Course or degree name (optional)",
    "pj.f.courseHint": "For example: B.Com, ITI Electrician, DCA.",
    "pj.f.year": "Passing year (optional)",
    "pj.f.status": "Is it completed?",
    "pj.f.institution": "Type of school / college",
    "pj.f.certs": "Certificates and licences you have",
    "pj.f.certsHint": "Some jobs legally need a licence or certificate, so this matters.",
    "pj.f.subjects": "Subjects you are good at (optional)",
    "pj.f.skills": "Skills you have",
    "pj.f.skillsHint": "Tick all that apply.",
    "pj.f.customSkills": "Other skills (optional)",
    "pj.f.customHint": "Write any other skill, separated by commas.",
    "pj.f.experience": "Work experience",
    "pj.f.pastRoles": "Previous jobs or work (optional)",
    "pj.f.pastHint": "For example: helper in a mobile shop, delivery partner, tuition teacher.",
    "pj.f.industries": "Industries you have worked in (optional)",
    "pj.f.internship": "Have you done an internship or apprenticeship?",
    "pj.f.cats": "Kinds of jobs you want",
    "pj.f.catsHint": "Choose one or more.",
    "pj.f.targetRole": "Target job (optional)",
    "pj.f.targetHint": "A job you want to grow into — we will show what you need for it.",
    "pj.f.title": "Job title you have in mind (optional)",
    "pj.f.industry": "Preferred industry (optional)",
    "pj.f.types": "Type of job",
    "pj.f.mode": "On-site or from home?",
    "pj.f.shift": "Shift",
    "pj.f.minSalary": "Lowest monthly salary you would accept, in ₹ (optional)",
    "pj.f.minSalaryHint": "Only used to compare with reported salary ranges. Numbers only, for example 15000.",
    "pj.f.availability": "When can you join?",
    "pj.f.travel": "Can you travel for work (field visits)?",
    "pj.f.employerTypes": "Kind of employer you prefer",
    "pj.f.smartphone": "Do you have a smartphone?",
    "pj.f.computer": "Do you have a computer or laptop?",
    "pj.f.internet": "Do you have regular internet?",
    "pj.f.training": "Are you willing to do some training first?",
    "pj.f.certification": "Are you willing to get a job-related certificate?",
    "pj.f.remember": "Remember my answers on this device",
    "pj.f.rememberHint": "If not ticked, your answers are deleted when you close this tab.",
    "pj.err.state": "Please choose your state.",
    "pj.err.pin": "A PIN code has 6 digits and does not start with 0.",
    "pj.err.locationPref": "Please choose where you want to work.",
    "pj.err.level": "Please choose your highest education.",
    "pj.err.year": "Please enter a real year, like 2024 — or leave it empty.",
    "pj.err.experience": "Please choose your work experience.",
    "pj.err.cats": "Please choose at least one kind of job, or a target job.",
    "pj.err.minSalary": "Please enter only a number, like 15000 — or leave it empty.",
    "pj.btn.find": "Find jobs for me",
    "pj.btn.edit": "Change my answers",
    "pj.btn.clear": "Clear my answers",
    "pj.btn.editSection": "Change",
    "pj.notGiven": "Not given",
    "pj.cleared": "Your Private Job Finder answers were deleted from this browser.",
    "pj.review.local": "Your answers will be remembered on this device until you clear them.",
    "pj.review.session": "Your answers will be deleted when you close this tab.",
    "pj.res.t": "Your private job matches",
    "pj.res.tName": "{name}, here are your private job matches",
    "pj.res.summary": "{n} roles to explore, {s} of them a strong or good fit right now. Use the tabs to see companies, your skills gap and safety tips.",
    "pj.res.savedLocal": "Saved on this device. Clear it any time.",
    "pj.res.savedSession": "Kept only until you close this tab.",
    "pj.kinds.t": "Three different things — please don't mix them up",
    "pj.kind.vacancy": "Advertised vacancy",
    "pj.kind.vacancyD": "A real, current job advert. You will find these only on the job portals and careers pages we link to — we do not list them here.",
    "pj.kind.employer": "Employer that may hire",
    "pj.kind.employerD": "A real company whose business needs this kind of work. No current vacancy is verified by us.",
    "pj.kind.general": "General career opportunity",
    "pj.kind.generalD": "A common job role that suits your profile. Use it to search for real openings.",
    "pj.tabsLabel": "Result sections",
    "pj.tab.jobs": "Jobs for you",
    "pj.tab.companies": "Companies",
    "pj.tab.gap": "Skills gap & plan",
    "pj.tab.safety": "Stay safe",
    "pj.catsT": "What the match labels mean",
    "pj.cat.strong": "Strong match",
    "pj.cat.strongD": "You have the usual education and skills, and it fits your choices.",
    "pj.cat.good": "Good match",
    "pj.cat.goodD": "You have the usual education and skills; some of your preferences (shift, job type, on-site/home) may differ.",
    "pj.cat.entry": "Entry-level opportunity",
    "pj.cat.entryD": "A beginner job where you are missing one skill that is usually quick to learn.",
    "pj.cat.training": "Needs more training",
    "pj.cat.trainingD": "Possible after you learn some skills or get a required qualification or licence.",
    "pj.cat.growth": "Career growth opportunity",
    "pj.cat.growthD": "A higher role that usually needs more years of experience — a goal to grow into.",
    "pj.filterLabel": "Filter by match",
    "pj.filter.all": "All",
    "pj.sort.label": "Sort by",
    "pj.sort.best": "Best match first",
    "pj.sort.missing": "Fewest missing skills",
    "pj.sort.salary": "Higher reported salary (where shown)",
    "pj.count": "Showing {n} roles.",
    "pj.none": "No roles in this group. Try \"All\", or change your answers.",
    "pj.targetTag": "Your target",
    "pj.eduUsual": "Education usually asked",
    "pj.skillsNeeded": "Main skills needed",
    "pj.noneSpecial": "No special skill — training on the job",
    "pj.expNeeded": "Experience usually asked",
    "pj.years": "About {n} year(s)",
    "pj.freshersOk": "Freshers often hired",
    "pj.workT": "Work type",
    "pj.formalT": "Required qualification:",
    "pj.whyT": "Why it may suit you",
    "pj.gapsT": "What to check or build",
    "pj.salaryT": "Salary information",
    "pj.salary.range": "About {low} to {high} per month",
    "pj.salary.basis": "Base pay before deductions, middle 80% of reported salaries (average about {avg}). Take-home pay is lower after PF and tax; incentives are not included.",
    "pj.salary.source": "Source: {n} self-reported salaries, updated {date}, on",
    "pj.salary.limited": "Limited data — treat this as a rough guide.",
    "pj.salary.hidden": "Not publicly verified.",
    "pj.salary.why.none": "We found no reliable salary source for this role. Check the salary written in each job advert.",
    "pj.salary.why.old": "The salary data we found is more than 2 years old, so we do not show it.",
    "pj.salary.why.few": "Only {n} salaries were reported — too few to show a fair range.",
    "pj.salary.why.wide": "Reported salaries vary too much to give a useful range.",
    "pj.salary.vs.above": "Your expected minimum ({min}) is above most reported salaries for this role — it may be hard to find at entry level.",
    "pj.salary.vs.within": "Your expected minimum ({min}) is within the reported range.",
    "pj.salary.vs.below": "Your expected minimum ({min}) is below most reported salaries — don't undersell yourself.",
    "pj.searchT": "Search real openings, career path and companies",
    "pj.searchD": "These links open job searches for \"{place}\". We do not check the results — read each advert carefully.",
    "pj.link.ncs": "National Career Service (government, free)",
    "pj.link.indeed": "Search on Indeed",
    "pj.link.linkedin": "Search on LinkedIn",
    "pj.link.apprenticeship": "Apprenticeship India (government)",
    "pj.link.thirdParty": "private job portal",
    "pj.nextT": "Where this role can lead",
    "pj.companiesT": "Companies whose business needs this role",
    "pj.companiesD": "No current vacancy is verified. Tap a name to see the company profile and its official links.",
    "pj.seeGap": "See skills gap and plan",
    "pj.why.edu": "Your education meets what employers usually ask.",
    "pj.why.noEdu": "Employers usually don't ask for a minimum education.",
    "pj.why.formal": "You have the required licence or qualification.",
    "pj.why.skills": "You have the main skills: {skills}.",
    "pj.why.helpful": "Your extra skills help: {skills}.",
    "pj.why.fresher": "Freshers are commonly hired for this role.",
    "pj.why.exp": "Your experience meets the usual {n} year(s).",
    "pj.why.target": "This is your target job.",
    "pj.why.cat": "It is in the kind of work you chose.",
    "pj.why.remote": "Some employers offer this work from home.",
    "pj.gap.edu": "Employers usually ask for {level} or higher.",
    "pj.gap.formal": "Required: {note}",
    "pj.gap.skills": "Skills to build: {skills}.",
    "pj.gap.exp": "Usually needs about {n} year(s) of experience.",
    "pj.gap.mode": "Your on-site / work-from-home choice may not match how this job is usually done.",
    "pj.gap.shift": "This job may not offer your preferred shift.",
    "pj.gap.type": "This job is not usually offered as the job type you chose.",
    "pj.co.lead": "Real companies with official links. We do not claim any of them is hiring now — open their careers page to see current openings.",
    "pj.co.type": "Company type",
    "pj.co.industry": "Industry",
    "pj.co.all": "All",
    "pj.co.sort.name": "Name (A–Z)",
    "pj.co.sort.old": "Oldest first",
    "pj.co.sort.new": "Newest first",
    "pj.co.mine": "Only companies related to my job choices",
    "pj.co.count": "Showing {n} of {total} companies.",
    "pj.co.none": "No companies match these filters.",
    "pj.co.website": "Official website",
    "pj.co.careers": "Official careers page",
    "pj.co.careersNone": "We could not open a careers page ourselves — look for \"Careers\" on the official website.",
    "pj.co.rolesForYou": "Roles from your results that fit this company's business",
    "pj.co.profile": "Company profile, verification and sources",
    "pj.co.founded": "Founded",
    "pj.co.founders": "Founder(s)",
    "pj.co.hq": "Headquarters",
    "pj.co.parent": "Parent company / owner",
    "pj.co.listing": "Stock exchange listing",
    "pj.co.people": "Leadership (public)",
    "pj.co.employees": "Employees",
    "pj.co.employeesV": "{n} (as of {asOf})",
    "pj.co.oftenHires": "Kinds of work its business needs",
    "pj.co.notPublic": "Not publicly verified",
    "pj.co.verifyT": "Verification status",
    "pj.co.wikiNote": "Company facts are from Wikipedia (a public encyclopedia) and may be out of date. Leadership and employee numbers change often.",
    "pj.co.sources": "Sources",
    "pj.co.checked": "Last checked: {date}",
    "pj.co.reviewsT": "Employee reviews",
    "pj.co.reviewsD": "We do not copy ratings. Read reviews yourself on these sites — they are personal opinions, not facts about every employee's experience.",
    "pj.v.identity": "Identity",
    "pj.v.identityListed": "Listed company ({listing}), as per Wikipedia",
    "pj.v.identitySub": "Part of {parent}, as per Wikipedia",
    "pj.v.identityNone": "Not publicly verified",
    "pj.v.website": "Official website",
    "pj.v.websiteD": "Address as listed on {source}",
    "pj.v.careers": "Careers page",
    "pj.v.careersYes": "Opened and checked by us on {date}",
    "pj.v.careersNo": "Not checked by us",
    "pj.v.vacancy": "Current vacancy",
    "pj.v.vacancyD": "Not verified — check the careers page",
    "pj.v.contact": "Contact details",
    "pj.v.contactD": "Not collected — use the official website",
    "pj.v.reputation": "Reputation",
    "pj.v.reputationD": "Not collected — read employee reviews yourself",
    "pj.v.overall": "Verification incomplete",
    "pj.v.fraud": "Its careers page warns about fake job offers. Apply only through official links.",
    "pj.local.t": "Local shops, showrooms and small businesses",
    "pj.local.d": "Many good jobs are with local employers who are not listed online. We cannot list them, but you can find and check them yourself:",
    "pj.local.1": "Visit showrooms, shops, clinics and offices near you and ask if they are hiring. Carry a simple one-page resume.",
    "pj.local.2": "Watch for job fairs (Rozgar Mela) listed on the National Career Service portal and at your district employment exchange.",
    "pj.local.3": "Ask for the business name, address and GST or Udyam number, and check them on the official portals below.",
    "pj.local.4": "Get the salary, working hours and duties in writing (an offer letter or appointment letter).",
    "pj.verify.t": "Check an employer on official portals",
    "pj.gap.choose": "Choose the job you want to grow into",
    "pj.gap.current": "Your current profile",
    "pj.gap.nowT": "Jobs you can aim for now",
    "pj.gap.nowNone": "Fill more skills in your answers to see these.",
    "pj.gap.target": "Target",
    "pj.gap.typical": "These are typical employer requirements; each advert sets its own.",
    "pj.gap.gapT": "Your skills gap",
    "pj.gap.ready": "You already meet the usual requirements. Start applying — and keep building the extra skills below.",
    "pj.gap.have": "You already have",
    "pj.gap.course": "Can be learned through a short course",
    "pj.gap.practice": "Needs practice or work experience",
    "pj.gap.licence": "Licence or certificate needed",
    "pj.gap.eduRow": "Formal education",
    "pj.gap.eduNeeded": "Employers usually ask for {level}. A short course cannot replace this — consider open schooling or distance learning.",
    "pj.gap.eduOk": "Your education meets what is usually asked.",
    "pj.gap.expRow": "Experience",
    "pj.gap.expNeeded": "About {n} more year(s) of related experience is usually expected.",
    "pj.gap.expOk": "Your experience meets what is usually asked.",
    "pj.gap.improve": "Extra skills that help you stand out",
    "pj.gap.noneLeft": "Nothing here.",
    "pj.gap.planT": "Your step-by-step plan",
    "pj.gap.planNote": "This plan is guidance, not a promise. Completing a course does not guarantee a job or promotion.",
    "pj.step.course": "Learn {skills} through a short course — see the Courses & Skill Development page for verified options.",
    "pj.step.formal": "Get the required qualification or licence: {note}",
    "pj.step.formalSkills": "Get the required licence or certificate for: {skills}.",
    "pj.step.practice": "Practise {skills} — through an apprenticeship, internship, part-time work or helping in a family business.",
    "pj.step.edu": "Plan to complete {level}. Open schooling (NIOS) or distance learning lets you study while working.",
    "pj.step.improve": "Add useful extra skills: {skills}.",
    "pj.step.portfolio": "Build a small portfolio of real work (sample posts, designs or projects) to show employers.",
    "pj.step.proof": "Keep proof of your skills: certificates, a reference from an employer or a short work sample.",
    "pj.step.stepping": "Start with a stepping-stone role you can get now ({roles}) to gain experience. About {n} more year(s) is usually expected.",
    "pj.step.steppingNone": "Gain about {n} year(s) of related experience — many employers promote from within.",
    "pj.step.apply": "Apply through official careers pages and trusted portals. Never pay anyone for a job.",
    "pj.consent.q": "Would you like to see learning options for these skills?",
    "pj.consent.d": "We will show free and paid, online and offline courses for this job. Your answers stay on this device.",
    "pj.consent.yes": "Yes, show courses",
    "pj.consent.no": "No, keep looking at jobs",
    "pj.safe.t": "Warning signs of a fake job",
    "pj.safe.1": "Anyone asks for money for a job, interview, training kit, uniform or \"registration\".",
    "pj.safe.2": "A job offer comes without any interview or test.",
    "pj.safe.3": "An \"agent\" says they can get you a job at a big company for a fee.",
    "pj.safe.4": "They ask for your bank password, OTP, ATM PIN or original documents.",
    "pj.safe.5": "The email comes from Gmail/Yahoo instead of the company's own website address.",
    "pj.safe.6": "The salary is unusually high for very little work.",
    "pj.safe.7": "You are rushed: \"Pay today or lose the seat\".",
    "pj.safe.8": "Contact details cannot be verified on the company's official website.",
    "pj.safe.doT": "If something feels wrong",
    "pj.safe.do1": "Stop, and don't pay or share documents.",
    "pj.safe.do2": "Check the company's official website or careers page yourself — don't use links from the message.",
    "pj.safe.do3": "Report it at cybercrime.gov.in or call 1930.",
    "pj.safe.report": "Report fraud (cybercrime.gov.in)",
    "pj.safe.guide": "Read our guide on avoiding job scams",
    "sd.title": "Courses & Skill Development — CareerSaathi AI",
    "sd.h1": "Courses & Skill Development",
    "sd.lead": "Learning options for the job you want — free and paid, online and offline, government programmes, certifications and practical training.",
    "sd.warn": "We only show official links. We never enrol you, take payment or share your details — you decide on the provider's own website. A course alone does not guarantee a job.",
    "sd.noProfile": "Fill the Private Job Finder form for personal suggestions. You can still choose a job below.",
    "sd.fillForm": "Open Private Job Finder",
    "sd.forRole": "Learning for: {role}",
    "sd.chooseRole": "Target job",
    "sd.skillsT": "Skills to build",
    "sd.noGap": "You already have the main skills for this job. Pick extra skills below if you want to improve.",
    "sd.addSkills": "Add other skills you want to learn",
    "sd.pathQ": "How would you like to learn?",
    "sd.path.all": "Compare all options",
    "sd.path.free": "I want to learn for free",
    "sd.path.paid": "I can pay for a course",
    "sd.path.offline": "I prefer offline classes",
    "sd.path.online": "I prefer online learning",
    "sd.path.govt": "Government-supported programme",
    "sd.path.certificate": "I want a certificate",
    "sd.path.practical": "I want practical training",
    "sd.path.jobs": "Keep looking for jobs instead",
    "sd.picksT": "Our picks for you",
    "sd.picksNote": "Picked by simple open rules: how well it matches your skills, cost, certificate and practical value. Not by popularity or advertising.",
    "sd.pick.free": "Best free option",
    "sd.pick.govt": "Best government-supported option",
    "sd.pick.practical": "Best practical training",
    "sd.pick.certificate": "Best certificate option",
    "sd.pick.offline": "Best offline option",
    "sd.pick.beginner": "Best for beginners",
    "sd.count": "{n} learning options.",
    "sd.none": "No options match this choice. Try \"Compare all options\".",
    "sd.govt": "Government",
    "sd.mode.online": "Online",
    "sd.mode.offline": "Offline / in person",
    "sd.mode.both": "Online and offline",
    "sd.why": "Relevant because it teaches:",
    "sd.whyGeneral": "Not verified for a specific skill — search this site for what you need.",
    "sd.costT": "Cost",
    "sd.cost.free": "Free (as stated by the provider)",
    "sd.cost.freeExam": "Free to learn; the certificate exam has a fee",
    "sd.cost.fee": "A fee applies",
    "sd.cost.none": "Not verified — check the provider",
    "sd.certT": "Certificate",
    "sd.cert.recognised": "Government / officially recognised",
    "sd.cert.provider": "Certificate from the provider — not a government qualification",
    "sd.cert.none": "Not checked",
    "sd.duration": "Duration",
    "sd.eligibility": "Who can join",
    "sd.language": "Language",
    "sd.open": "Open official page",
    "sd.checked": "Checked {date} from: {source}",
    "sd.honest": "We do not show fees, student ratings or placement numbers because we could not verify them. Read the provider's page before you pay or share any details.",
    "sd.back": "Back to my job results",
    "sd.allCourses": "See all free courses",
    "courses.teachesT": "Verified to teach:",
    "courses.generalOnly": "General place to look: we have not verified that it currently teaches a specific skill, so it is not shown as a match for any skill.",
    "courses.unverifiedSkills": "Not confirmed (not used for matching): {skills}.",
    "courses.evidence": "How we checked ({date}):",
    "courses.noVerified": "No verified provider is currently available for this course or skill.",
    "courses.noVerifiedHint": "We only list a provider when we have seen evidence that it teaches this exact skill. You can search the Skill India Digital Hub below — results there are not checked by us.",
    "sd.missing": "No verified provider is currently available for: {skills}.",
    "sd.noVerified": "No verified provider is currently available for this course or skill.",
    "sd.noVerifiedFor": "Skills without a verified provider: {skills}. We do not show unrelated providers to fill the gap.",
    "sd.generalT": "Places to search yourself",
    "sd.generalD": "These are real portals and programmes, but we have not verified that they currently teach your exact skills. Search on their sites before you decide.",
    // ---- Chat assistant ----
    "chat.launch": "Ask CareerSaathi",
    "chat.loadFail": "The chat could not load. Please check your internet connection and try again.",
    "chat.title": "CareerSaathi Assistant",
    "chat.subGuide": "Automated guide · not a human · runs in your browser",
    "chat.subAI": "AI assistant ({provider}) · not a human",
    "chat.new": "New chat (clears this conversation)",
    "chat.close": "Close chat",
    "chat.privacyT": "Privacy — please read",
    "chat.privacyGuide": "No login or personal details needed. This guide runs only in your browser: your messages are not sent to us or to anyone else. Answers about courses, providers, salaries and jobs come only from this website's checked data.",
    "chat.privacyAI": "AI answers are switched on: your messages are sent to our chat server and to {provider} to write a reply. Our server does not store chats, but {provider} and network providers may process technical data such as your IP address, so this is not fully anonymous. Do not type your name, phone number or other personal details.",
    "chat.privacyAll": "The conversation is kept only in this browser tab. \"New chat\", closing the tab, or \"Delete my saved data\" removes it.",
    "chat.privacyMore": "Privacy page",
    "chat.aiToggle": "Use AI answers ({provider}) — sends my messages outside this browser",
    "chat.inputLabel": "Your message",
    "chat.placeholder": "Ask in English, हिंदी or Hinglish…",
    "chat.send": "Send",
    "chat.foot": "General guidance only — not a guarantee of any job or salary. Check official websites before deciding.",
    "chat.thinking": "Thinking…",
    "chat.retry": "Try again",
    "chat.useGuide": "Answer with the website guide instead",
    "chat.err.off": "AI answers are not set up on this website. You can use the website guide.",
    "chat.err.timeout": "The AI service took too long to answer.",
    "chat.err.network": "Could not reach the AI service. Check your internet connection.",
    "chat.err.rate": "Too many messages in a short time. Please wait a minute and try again.",
    "chat.err.server": "The AI service is not available right now.",
    "chat.err.bad": "The AI service sent an answer we could not read.",
    "chat.verifiedFor": "Verified for: {skill}",
    "chat.checkedOn": "Checked {date}",
    "chat.aiSaid": "AI assistant said:",
    "chat.botSaid": "Guide said:",
    "chat.youSaid": "You said:",
    "chat.aiTag": "AI answer · {provider}",
    "privacy.where.9": "CareerSaathi Assistant (chat): no login or personal details are needed. In guide mode it runs only in your browser and sends nothing. If AI answers are offered and you switch them on, your messages are sent to our chat server and to Google Gemini to write replies; our server does not store them. The chat is kept only in your browser tab until you start a new chat or close the tab.",
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
    "about.not.2": "It is not a live job feed. Our list of open recruitments is updated by hand and may miss some — always check official websites.",
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
    "about.label.vacancyD": "Shown only when we checked a recruitment against its official notice and it is open on today's date.",
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
    "privacy.where.4": "This website does not use analytics or tracking tools. It does not show ads at the moment.",
    "privacy.where.5": "If you do not tick \"Remember\", your answers are kept only until you close the browser tab.",
    "privacy.where.6": "Interest-quiz answers are saved only in this browser so you can see your result again. \"Delete my saved data\" removes them too.",
    "privacy.where.7": "Calendar reminders are files made on your device. We never see them, and we cannot send you messages.",
    "privacy.where.8": "Private Job Finder answers are kept only in this browser (deleted when you close the tab, unless you choose \"Remember\"). \"Delete my saved data\" removes them too.",
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
    "home.f.plan.d": "आपके करियर लक्ष्य के हिसाब से बदलने वाला आसान प्लान — इसे फ़ोन कैलेंडर में भी जोड़ें।",

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
    "jobs.lead": "आख़िरी तारीख़ के साथ खुली भर्तियाँ (हाथ से अपडेट), और वे आधिकारिक वेबसाइटें जहाँ सरकारी भर्तियाँ निकलती हैं।",
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
    "sch.check.group": "यह सिर्फ़ कुछ ख़ास वर्गों के लिए है (मुख्य शर्तें देखें)। देखें कि यह आप पर लागू होती है या नहीं।",
    "sch.check.groupNo": "यह उस वर्ग के लिए है जो आपकी प्रोफ़ाइल में नहीं है, इसलिए शायद आप पर लागू न हो।",
    "sch.why.pwd": "यह दिव्यांग व्यक्तियों के लिए है, जैसा आपकी प्रोफ़ाइल में दर्ज है।",
    "sch.check.pwd": "यह सिर्फ़ दिव्यांग व्यक्तियों के लिए है (योजना की परिभाषा के अनुसार)।",
    "sch.check.pwdNo": "यह सिर्फ़ दिव्यांग व्यक्तियों के लिए है, इसलिए शायद आप पर लागू न हो।",
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
    "courses.emptyFilter": "इन फ़िल्टर से कोई कोर्स मेल नहीं खाता।",
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

    // ---- Contact, terms, ads, guides ----
    "nav.guides": "करियर गाइड",
    "footer.terms": "उपयोग की शर्तें",
    "footer.contact": "संपर्क करें",
    "footer.explore": "और देखें",
    "contact.title": "संपर्क करें — करियरसाथी AI",
    "contact.h1": "हमसे संपर्क करें",
    "contact.lead": "करियरसाथी AI के बारे में सवाल, सुधार या सुझाव? हमें ईमेल करें।",
    "contact.emailLabel": "ईमेल",
    "contact.copy": "ईमेल कॉपी करें",
    "contact.copied": "ईमेल पता कॉपी हो गया।",
    "contact.copyFail": "कॉपी नहीं हो सका। पता चुनकर ख़ुद कॉपी करें।",
    "contact.helpT": "हम इनमें मदद कर सकते हैं",
    "contact.help.1": "किसी पेज पर ग़लत या पुरानी जानकारी की सूचना। कृपया पेज का लिंक भी भेजें।",
    "contact.help.2": "करियर, योजना, कोर्स या गाइड जोड़ने के सुझाव।",
    "contact.help.3": "फ़ोन या कंप्यूटर पर वेबसाइट चलाने में परेशानी।",
    "contact.cantT": "हम इनमें मदद नहीं कर सकते",
    "contact.cant.1": "नौकरी के आवेदन, एडमिट कार्ड या रिज़ल्ट। इसके लिए आधिकारिक भर्ती वेबसाइट देखें।",
    "contact.cant.2": "योजना या ऋण की मंज़ूरी। इसका फ़ैसला सिर्फ़ आधिकारिक विभाग या बैंक करता है।",
    "contact.cant.3": "फ़ोन पर निजी करियर सलाह।",
    "contact.safeT": "अपनी जानकारी सुरक्षित रखें",
    "contact.safe": "ईमेल में कभी आधार, पैन, बैंक जानकारी, पासवर्ड या OTP न भेजें। हम इन्हें कभी नहीं माँगेंगे, और हम कभी पैसे नहीं माँगते।",
    "terms.title": "उपयोग की शर्तें — करियरसाथी AI",
    "terms.h1": "उपयोग की शर्तें",
    "terms.updated": "पिछला अपडेट: 22 अक्टूबर 2026",
    "terms.lead": "करियरसाथी AI इस्तेमाल करके आप इन शर्तों से सहमत होते हैं। इन्हें हमारे अस्वीकरण और गोपनीयता जानकारी के साथ पढ़ें।",
    "terms.useT": "वेबसाइट का इस्तेमाल",
    "terms.use.1": "करियरसाथी AI एक मुफ़्त जानकारी और मार्गदर्शन टूल है। आप इसे अपनी करियर योजना के लिए इस्तेमाल कर सकते हैं।",
    "terms.use.2": "वेबसाइट का ग़लत इस्तेमाल न करें — जैसे इसे ख़राब करने की कोशिश, लोगों को गुमराह करने के लिए कॉपी करना, या इसे सरकारी सेवा बताना।",
    "terms.infoT": "जानकारी, सलाह या गारंटी नहीं",
    "terms.info.1": "सुझाव आसान नियमों और आपकी भरी जानकारी पर आधारित हैं। ये पेशेवर सलाह नहीं हैं।",
    "terms.info.2": "हम किसी नौकरी, दाख़िले, ऋण, सब्सिडी या लाभ की गारंटी नहीं देते। फ़ैसला हमेशा आधिकारिक सूचना और आधिकारिक वेबसाइट से होता है।",
    "terms.info.3": "जानकारी पुरानी हो सकती है। आवेदन या फ़ीस भरने से पहले हमेशा आधिकारिक स्रोत देखें।",
    "terms.linksT": "दूसरी वेबसाइटों के लिंक",
    "terms.links": "आपकी सुविधा के लिए हम सरकारी और दूसरी वेबसाइटों के लिंक देते हैं। वे हमारे नियंत्रण में नहीं हैं और उनकी सामग्री या सेवाओं की ज़िम्मेदारी हमारी नहीं है।",
    "terms.adsT": "विज्ञापन",
    "terms.ads": "भविष्य में इस वेबसाइट पर विज्ञापन दिख सकते हैं। विज्ञापन Google जैसी बाहरी कंपनियाँ दिखाती हैं। किसी विज्ञापन का मतलब यह नहीं कि हम उसकी सिफ़ारिश करते हैं।",
    "terms.contentT": "हमारी सामग्री",
    "terms.content": "इस वेबसाइट का टेक्स्ट, डिज़ाइन और कोड करियरसाथी AI का है, जब तक अलग से न लिखा हो। आप हमारे पेजों के लिंक शेयर कर सकते हैं, पर पूरे पेज कॉपी न करें।",
    "terms.liabilityT": "हमारी ज़िम्मेदारी की सीमा",
    "terms.liability": "हम जानकारी सही रखने की कोशिश करते हैं, पर उस पर भरोसा करने से हुए किसी नुक़सान के लिए हम ज़िम्मेदार नहीं हैं। ज़रूरी बातें आधिकारिक वेबसाइट पर ख़ुद जाँचें।",
    "terms.changesT": "शर्तों में बदलाव",
    "terms.changes": "हम इन शर्तों को अपडेट कर सकते हैं। ऊपर लिखी तारीख़ नया संस्करण बताती है।",
    "terms.lawT": "लागू क़ानून",
    "terms.law": "ये शर्तें भारत के क़ानूनों के अनुसार हैं।",
    "terms.contactT": "सवाल",
    "terms.contact": "संपर्क पेज के ज़रिए हमें लिखें।",
    "privacy.adsT": "विज्ञापन (Google AdSense)",
    "privacy.adsIntro": "करियरसाथी AI को मुफ़्त रखने के लिए हम भविष्य में Google AdSense के विज्ञापन दिखा सकते हैं। विज्ञापन दिखने पर ये बातें लागू होंगी:",
    "privacy.ads.1": "Google समेत बाहरी कंपनियाँ कुकीज़ का इस्तेमाल करके इस वेबसाइट या दूसरी वेबसाइटों पर आपकी पिछली विज़िट के आधार पर विज्ञापन दिखाती हैं।",
    "privacy.ads.2": "Google की विज्ञापन कुकीज़ से Google और उसके पार्टनर इस साइट और/या इंटरनेट की दूसरी साइटों पर आपकी विज़िट के आधार पर आपको विज्ञापन दिखा सकते हैं।",
    "privacy.ads.3": "विज्ञापन नेटवर्क विज्ञापनों को मापने और धोखाधड़ी रोकने के लिए भी कुकीज़ और ऐसी तकनीक इस्तेमाल कर सकते हैं।",
    "privacy.vendors": "हम जिस विज्ञापन नेटवर्क का इस्तेमाल करते हैं: Google AdSense। अगर कोई और नेटवर्क जोड़ा, तो उसे यहाँ लिखेंगे।",
    "privacy.optoutT": "विज्ञापन से जुड़े आपके विकल्प",
    "privacy.optout.1": "Google के निजी (पर्सनलाइज़्ड) विज्ञापन यहाँ बंद करें:",
    "privacy.optout.1link": "Google विज्ञापन सेटिंग",
    "privacy.optout.2": "कुछ दूसरी कंपनियों की पर्सनलाइज़्ड विज्ञापन कुकीज़ यहाँ बंद करें:",
    "privacy.optout.2link": "aboutads.info",
    "privacy.optout.3": "जानें कि Google अपनी सेवाएँ इस्तेमाल करने वाली वेबसाइटों की जानकारी कैसे इस्तेमाल करता है:",
    "privacy.optout.3link": "Google इस जानकारी का इस्तेमाल कैसे करता है",
    "privacy.adsProfile": "आपकी करियर प्रोफ़ाइल कभी Google या किसी विज्ञापन देने वाले के साथ साझा नहीं की जाती। यह आपके ब्राउज़र में ही रहती है।",
    "privacy.adsScam": "दिखने वाले हर विज्ञापन को हम नहीं चुनते, और कोई विज्ञापन हमारी सिफ़ारिश नहीं है। सरकारी नौकरी कभी बिकती नहीं — पैसे लेकर नौकरी देने वाले हर विज्ञापन को अनदेखा करें।",
    "privacy.contactT": "संपर्क",
    "privacy.contact": "गोपनीयता के बारे में सवाल? संपर्क पेज के ज़रिए हमें लिखें।",
    "guides.title": "करियर गाइड — करियरसाथी AI",
    "guides.h1": "करियर गाइड",
    "guides.lead": "नौकरी, हुनर और सरकारी योजनाओं पर आसान गाइड, आधिकारिक स्रोतों के आधार पर। हर गाइड अंग्रेज़ी और हिंदी दोनों में है।",
    "guides.note": "नियम, फ़ीस और तारीख़ें बदलती रहती हैं। हर गाइड में आधिकारिक स्रोत दिए हैं — आवेदन से पहले उन्हें ज़रूर देखें।",
    "guides.readEn": "Read in English",
    "guides.readHi": "हिंदी में पढ़ें",

    "home.guidesT": "अंग्रेज़ी और हिंदी में करियर गाइड",
    "home.guidesD": "स्रोतों से जाँची हुई आसान गाइड: ITI के बाद नौकरी, CCC कोर्स, मुफ़्त हुनर ट्रेनिंग, अप्रेंटिसशिप, व्यवसाय ऋण और नौकरी के धोखे से बचाव।",
    "home.guidesBtn": "गाइड पढ़ें",
    // ---- Open recruitments ----
    "vac.sectionT": "अभी खुली भर्तियाँ",
    "jobs.sourcesT": "आधिकारिक भर्ती वेबसाइटें",
    "vac.sectionD": "आज की तारीख़ ({today}) के हिसाब से जिन भर्तियों में आवेदन खुले हैं। यह सूची हम हाथ से अपडेट करते हैं — हमेशा आधिकारिक वेबसाइट पर पक्का करें।",
    "vac.listUpdated": "सूची का पिछला अपडेट: {date}",
    "vac.listStale": "यह सूची {n} दिन पहले अपडेट हुई थी और पुरानी हो सकती है। कृपया आधिकारिक वेबसाइटें देखें।",
    "vac.none": "अभी हमारी सूची में कोई खुली भर्ती नहीं है। नीचे दी आधिकारिक भर्ती वेबसाइटें देखें।",
    "vac.status.open": "खुली है",
    "vac.status.closing-soon": "जल्द बंद होगी",
    "vac.status.upcoming": "जल्द खुलेगी",
    "vac.daysLeft": "{n} दिन बाक़ी",
    "vac.oneDayLeft": "1 दिन बाक़ी",
    "vac.lastDay": "आज आख़िरी दिन",
    "vac.daysToOpen": "{n} दिन में खुलेगी",
    "vac.dates": "आवेदन: {from} से {to} तक",
    "vac.until": "{time} बजे तक",
    "vac.posts": "पद",
    "vac.qualification": "योग्यता",
    "vac.age": "उम्र",
    "vac.reportedLabel": "रिपोर्ट के अनुसार खुली — आधिकारिक रूप से पक्का करें",
    "vac.matchYou": "आपकी प्रोफ़ाइल से मेल",
    "vac.fitCheck": "जाँचें कि आप योग्य हैं या नहीं",
    "vac.notMet": "योग्यता शायद मेल न खाए",
    "vac.why": "यह आपके लिए क्यों हो सकती है",
    "vac.check": "आवेदन से पहले जाँचें",
    "vac.apply": "आधिकारिक वेबसाइट",
    "vac.checked": "{date} को इस स्रोत से जाँचा गया: {source}",
    "vac.forYouT": "आपके लिए अभी खुली",
    "vac.forYouNone": "आज हमारी सूची की कोई खुली भर्ती आपकी प्रोफ़ाइल से मेल नहीं खाती।",
    "vac.seeAll": "सभी खुली भर्तियाँ देखें",
    "vac.recBanner": "आज {n} खुली भर्ती आपकी प्रोफ़ाइल से मेल खाती हैं।",
    "vac.recBtn": "खुली भर्तियाँ देखें",
    "vac.why.edu": "आपकी योग्यता ({level}) दर्ज ज़रूरत से मेल खाती है।",
    "vac.why.goal": "आपने लक्ष्य में सरकारी नौकरी चुनी है।",
    "vac.why.state": "यह आपके अपने राज्य की भर्ती है।",
    "vac.check.eduNo": "ज़रूरी योग्यता आपकी योग्यता से ऊँची या अलग हो सकती है।",
    "vac.check.edu": "हर पद की योग्यता अलग है — नोटिस पढ़कर देखें कौन-सा पद आपके लिए है।",
    "vac.check.ageYoung": "आपकी उम्र न्यूनतम उम्र ({min} साल) से कम हो सकती है।",
    "vac.check.ageOld": "आपकी उम्र सामान्य ऊपरी सीमा ({max} साल) से ज़्यादा हो सकती है।",
    "vac.check.ageRelax": "आपकी उम्र सामान्य सीमा ({max} साल) से ज़्यादा है, पर आपके वर्ग को उम्र में छूट मिल सकती है — नोटिस देखें।",
    "vac.check.ageDate": "उम्र {date} को गिनी जाएगी।",
    "vac.check.exp": "कुछ पदों के लिए {n} साल का काम का अनुभव चाहिए।",
    "vac.check.state": "राज्य स्तर की भर्ती — दूसरे राज्यों के उम्मीदवारों के नियम देखें।",
    "vac.check.reported": "ये तारीख़ें समाचार रिपोर्ट से हैं, आधिकारिक नोटिस से नहीं — आधिकारिक वेबसाइट पर पक्का करें।",
    "vac.check.notice": "आवेदन से पहले पूरी आधिकारिक सूचना पढ़ें। फ़ीस सिर्फ़ आधिकारिक पोर्टल पर भरें।",
    "stale.warn": "यह जानकारी {n} दिन पहले जाँची गई थी और बदल सकती है। आधिकारिक पेज पर पक्का करें।",

    // ---- Quiz, roadmap, scholarships, calendar ----
    "nav.quiz": "करियर क्विज़",
    "nav.scholarships": "स्कॉलरशिप",
    "nav.roadmap": "10वीं/12वीं के बाद",
    "home.ctaQuiz": "रुचि क्विज़ दें",
    "home.f.quiz.t": "करियर रुचि क्विज़",
    "home.f.quiz.d": "24 छोटे सवाल — जानें आपको किस तरह का काम पसंद है, और उससे मेल खाते करियर व हुनर।",
    "home.f.road.t": "10वीं / 12वीं के बाद क्या?",
    "home.f.road.d": "स्ट्रीम, ITI, पॉलिटेक्निक, स्किल कोर्स, डिग्री, प्रवेश परीक्षाएँ और सरकारी नौकरियाँ — आसान भाषा में।",
    "home.f.schol.t": "स्कॉलरशिप खोजें",
    "home.f.schol.d": "स्कूल और कॉलेज छात्रों के लिए सरकारी स्कॉलरशिप — राशि और आवेदन का तरीक़ा।",
    "schol.title": "स्कॉलरशिप खोजें — CareerSaathi AI",
    "schol.h1": "स्कॉलरशिप खोजें",
    "schol.lead": "स्कूल और कॉलेज छात्रों के लिए सरकारी स्कॉलरशिप, आधिकारिक पेजों से सार। राशि और सीमाएँ वैसी ही दी गई हैं जैसी प्रकाशित हैं।",
    "schol.warn": "यहाँ का सुझाव मंज़ूरी नहीं है। नियम, आय सीमा और आख़िरी तारीख़ हर साल बदलती हैं — हमेशा आधिकारिक पोर्टल पर पक्का करें, और स्कॉलरशिप \"दिलाने\" के लिए किसी को पैसे न दें।",
    "schol.portalT": "नेशनल स्कॉलरशिप पोर्टल पर सभी स्कॉलरशिप खोजें",
    "schol.portalBtn": "NSP खोलें",
    "schol.worth": "आपके लिए देखने लायक़",
    "schol.others": "अन्य स्कॉलरशिप",
    "schol.all": "सभी स्कॉलरशिप",
    "schol.noProfile": "कौन-सी स्कॉलरशिप आपके लिए देखने लायक़ हैं, यह जानने के लिए अपनी प्रोफ़ाइल (कक्षा, वर्ग, लिंग) भरें।",
    "schol.noWorth": "अभी आपकी प्रोफ़ाइल के लिए कोई स्कॉलरशिप ख़ास तौर पर मेल नहीं खाती। आप नीचे सभी पढ़ सकते हैं या नेशनल स्कॉलरशिप पोर्टल पर खोज सकते हैं।",
    "quiz.title": "करियर रुचि क्विज़ — CareerSaathi AI",
    "quiz.h1": "मुझे किस तरह का काम पसंद है?",
    "quiz.lead": "24 छोटे सवाल, लगभग 4 मिनट। कोई जवाब सही या ग़लत नहीं है — जो आपको सच लगे, वही चुनें।",
    "quiz.privacy": "आपके जवाब सिर्फ़ इसी ब्राउज़र में रहते हैं। आप इन्हें कभी भी मिटा सकते हैं।",
    "quiz.progress": "{total} में से {done} के जवाब दिए",
    "quiz.submit": "मेरा नतीजा देखें",
    "quiz.clear": "मेरे जवाब मिटाएँ",
    "quiz.missing": "कृपया बचे हुए {n} सवालों के जवाब दें। हम आपको पहले सवाल पर ले आए हैं।",
    "quiz.resultT": "आपकी रुचि का नतीजा",
    "quiz.resultLead": "आपके जवाबों के हिसाब से, आपको इस तरह का काम सबसे ज़्यादा पसंद लगता है:",
    "quiz.points": "{max} में से {n} अंक",
    "quiz.careersT": "देखने लायक़ करियर",
    "quiz.skillsT": "काम आने वाले हुनर (कोर्स देखने के लिए दबाएँ)",
    "quiz.guideLink": "इससे जुड़ी गाइड पढ़ें",
    "quiz.allT": "सभी छह क्षेत्र",
    "quiz.noClear": "आपने लगभग हर सवाल पर \"नहीं\" चुना, इसलिए अभी कोई क्षेत्र सुझा नहीं सकते। कोई बात नहीं — रोडमैप पेज देखें, या किसी शिक्षक या परिवार के सदस्य से बात करें कि बचपन में आपको क्या करना अच्छा लगता था।",
    "quiz.notTest": "यह एक आसान ख़ुद-जाँच है, कोई वैज्ञानिक या साइकोमेट्रिक टेस्ट नहीं। इसे सोचने की शुरुआत मानें — आपकी रुचियाँ बदल सकती हैं, और आपकी योग्यता व हालात भी मायने रखते हैं।",
    "quiz.edit": "जवाब बदलें",
    "quiz.nextT": "आगे क्या?",
    "quiz.nextHave": "अब आपकी करियर सिफ़ारिशों में दिखेगा कि कौन-से करियर इन रुचियों से मेल खाते हैं।",
    "quiz.nextNone": "अपनी प्रोफ़ाइल भरें, ताकि हम देख सकें कि इनमें से कौन-से करियर आपकी पढ़ाई और हुनर से मेल खाते हैं।",
    "quiz.nextRec": "मेरी सिफ़ारिशें देखें",
    "quiz.nextProfile": "मेरी प्रोफ़ाइल भरें",
    "quiz.nextRoadmap": "10वीं / 12वीं के बाद क्या?",
    "quiz.sumT": "आपकी रुचियाँ",
    "quiz.sumHave": "आपकी रुचि क्विज़ के अनुसार, आपको यह पसंद लगता है:",
    "quiz.sumSee": "क्विज़ का पूरा नतीजा देखें",
    "quiz.sumNone": "पक्का नहीं कि आपको क्या पसंद है? 4 मिनट का क्विज़ मदद कर सकता है।",
    "quiz.cta": "रुचि क्विज़ दें",
    "quiz.recTag": "आपकी रुचि से मेल (क्विज़)",
    "road.title": "10वीं या 12वीं के बाद क्या? करियर रोडमैप — CareerSaathi AI",
    "road.h1": "10वीं या 12वीं के बाद क्या?",
    "road.lead": "हर मुख्य रास्ता आसान भाषा में — आम तौर पर कितना समय लगता है, किसके लिए ठीक है और कहाँ ले जाता है। कोई एक \"सबसे अच्छा\" रास्ता नहीं होता; सही रास्ता आपकी पसंद और हालात पर निर्भर है।",
    "road.warn": "अवधि आम तौर पर लगने वाली है। दाख़िले के नियम, फ़ीस और तारीख़ें राज्य और साल के हिसाब से बदलती हैं — फ़ैसला करने से पहले आधिकारिक वेबसाइट ज़रूर देखें।",
    "road.choose": "अपना पड़ाव चुनें",
    "road.count": "{stage}: {n} रास्ते",
    "road.liked": "आपकी रुचि से मेल: {areas}",
    "road.goodFor": "किसके लिए अच्छा",
    "road.leadsTo": "कहाँ तक ले जाता है",
    "road.tip": "सुझाव",
    "road.careers": "इस रास्ते के करियर",
    "road.page.jobs": "खुली सरकारी भर्तियाँ देखें",
    "road.page.scholarships": "स्कॉलरशिप खोजें",
    "road.page.courses": "मुफ़्त कोर्स खोजें",
    "road.guide": "हमारी गाइड पढ़ें",
    "road.quizHave": "🧭 वाले रास्ते आपकी क्विज़ रुचियों ({areas}) से मेल खाते हैं।",
    "road.quizNone": "रुचि क्विज़ दें, हम आपके लिए सही रास्तों पर निशान लगा देंगे।",
    "road.checked": "जानकारी {date} को आधिकारिक वेबसाइटों से जाँची गई। नियम बदलते हैं — फ़ैसले से पहले ज़रूर पक्का करें।",
    "cal.remind": "रिमाइंडर:",
    "cal.lastBtn": "आख़िरी तारीख़ (.ics)",
    "cal.openBtn": "शुरू होने का दिन (.ics)",
    "cal.google": "Google कैलेंडर",
    "cal.done": "कैलेंडर फ़ाइल डाउनलोड हो गई — रिमाइंडर जोड़ने के लिए इसे खोलें।",
    "cal.fail": "आपके ब्राउज़र ने डाउनलोड रोक दिया। Google कैलेंडर बटन आज़माएँ।",
    "cal.lastTitle": "आख़िरी तारीख़: {title}",
    "cal.openTitle": "आवेदन शुरू: {title}",
    "cal.lastDesc": "{title} ({org}) के लिए आवेदन की आख़िरी तारीख़ {date} है। सिर्फ़ आधिकारिक वेबसाइट पर आवेदन करें: {url} — सही नियमों के लिए आधिकारिक नोटिस देखें। CareerSaathi AI का रिमाइंडर।",
    "cal.openDesc": "{title} ({org}) के लिए आवेदन {date} को शुरू होने की उम्मीद है। पहले आधिकारिक नोटिस पढ़ें: {url}। CareerSaathi AI का रिमाइंडर।",
    "cal.planD": "हर हफ़्ते की शुरुआत में फ़ोन पर सुबह 9 बजे रिमाइंडर पाएँ।",
    "cal.planBtn": "प्लान कैलेंडर में जोड़ें",
    "cal.planPrefix": "CareerSaathi प्लान —",
    "cal.planFoot": "अपने CareerSaathi AI डैशबोर्ड पर काम पूरे होने का निशान लगाएँ।",
    // ---- Private Job Finder & Skill Development ----
    "nav.privateJobs": "प्राइवेट जॉब फ़ाइंडर",
    "pj.title": "प्राइवेट जॉब फ़ाइंडर — CareerSaathi AI",
    "pj.h1": "प्राइवेट जॉब फ़ाइंडर",
    "pj.lead": "अपनी पढ़ाई, हुनर और जिस तरह का काम चाहिए, उसके बारे में बताएँ। हम आपको प्राइवेट सेक्टर की सही नौकरियाँ, देखने लायक़ कंपनियाँ, स्रोत के साथ सैलरी की जानकारी और आगे क्या सीखना है — यह दिखाएँगे।",
    "pj.howT": "यह कैसे काम करता है — ज़रूर पढ़ें",
    "pj.how.1": "हम आपके जवाबों की तुलना उन बातों से करते हैं जो आम प्राइवेट नौकरियों के लिए नियोक्ता अक्सर माँगते हैं।",
    "pj.how.2": "इस साइट पर लाइव नौकरी फ़ीड नहीं है, इसलिए हम किसी भी वैकेंसी को \"खुली\" नहीं दिखाते। हम असली जॉब पोर्टल और कंपनियों के आधिकारिक करियर पेज के सर्च लिंक देते हैं।",
    "pj.how.3": "सैलरी के आँकड़े एक नामित, तारीख़ वाले स्रोत से हैं और तभी दिखाए जाते हैं जब डेटा भरोसेमंद हो।",
    "pj.how.4": "कंपनियों की जानकारी उन सार्वजनिक स्रोतों से है जिनकी सूची हम देते हैं। \"जाँच अधूरी\" का मतलब है कि हम सब कुछ नहीं जाँच पाए।",
    "pj.privacyT": "आपकी गोपनीयता",
    "pj.privacy.1": "आपके जवाब इसी ब्राउज़र में रहते हैं। हमें या किसी कंपनी को कुछ नहीं भेजा जाता।",
    "pj.privacy.2": "नाम, पिन कोड और दूसरे वैकल्पिक सवाल ख़ाली छोड़ सकते हैं।",
    "pj.privacy.3": "हम कभी आधार, PAN, बैंक जानकारी, पासवर्ड, फ़ोन नंबर या ईमेल नहीं माँगते।",
    "pj.privacy.4": "आप अपने जवाब कभी भी मिटा सकते हैं।",
    "pj.step.place.t": "आप कहाँ रहते हैं और कहाँ काम करना चाहते हैं",
    "pj.step.place.d": "इससे हम सही जगह के लिए नौकरी की खोज बना पाते हैं। सिर्फ़ * वाले सवाल ज़रूरी हैं।",
    "pj.step.edu.t": "पढ़ाई",
    "pj.step.edu.d": "कम पढ़ाई आपको रोकती नहीं — हम हुनर, अनुभव और शुरुआती नौकरियाँ भी देखते हैं।",
    "pj.step.skills.t": "हुनर और अनुभव",
    "pj.step.skills.d": "जो भी आप कर सकते हैं, सब पर निशान लगाएँ — भले ही घर पर, परिवार की दुकान में या ख़ुद से सीखा हो।",
    "pj.step.job.t": "आपको कैसी नौकरी चाहिए",
    "pj.step.job.d": "एक या ज़्यादा तरह की नौकरी चुनें। अगर किसी बड़े पद का सपना है, उसे लक्ष्य चुनें — हम रास्ता दिखाएँगे।",
    "pj.step.env.t": "कार्यस्थल और दूसरी पसंद",
    "pj.step.env.d": "सब वैकल्पिक है। इससे हम सही विकल्प सुझा पाते हैं।",
    "pj.step.review.t": "अपने जवाब जाँचें",
    "pj.step.review.d": "अपने जवाब देख लें। खोज से पहले किसी भी हिस्से को बदल सकते हैं।",
    "pj.f.name": "आपका पहला नाम (वैकल्पिक)",
    "pj.f.nameHint": "सिर्फ़ इस पेज पर आपको नाम से बुलाने के लिए।",
    "pj.f.state": "राज्य / केंद्र शासित प्रदेश",
    "pj.f.district": "ज़िला (वैकल्पिक)",
    "pj.f.city": "शहर, क़स्बा या गाँव (वैकल्पिक)",
    "pj.f.cityHint": "आपके इलाक़े के लिए जॉब पोर्टल पर खोज बनाने में काम आता है।",
    "pj.f.pin": "पिन कोड (वैकल्पिक)",
    "pj.f.pinHint": "6 अंक। ज़रूरी नहीं — सिर्फ़ अगर आप अपने लिए लिखना चाहें।",
    "pj.f.locationPref": "आप कहाँ काम करना चाहते हैं?",
    "pj.f.radius": "रोज़ कितनी दूर तक आ-जा सकते हैं?",
    "pj.f.relocate": "क्या नौकरी के लिए दूसरे शहर जा सकते हैं?",
    "pj.f.language": "काम पर पसंद की भाषा",
    "pj.f.contactNote": "हम आपका फ़ोन नंबर या ईमेल नहीं माँगते। यह साइट जॉब अलर्ट नहीं भेजती, इसलिए इनकी ज़रूरत नहीं।",
    "pj.f.level": "सबसे ऊँची पढ़ाई",
    "pj.f.levelHint": "जो सबसे ऊँची पढ़ाई पूरी की है या अभी कर रहे हैं, वह चुनें।",
    "pj.f.stream": "स्ट्रीम या विशेषज्ञता",
    "pj.f.course": "कोर्स या डिग्री का नाम (वैकल्पिक)",
    "pj.f.courseHint": "जैसे: B.Com, ITI इलेक्ट्रीशियन, DCA।",
    "pj.f.year": "पास होने का साल (वैकल्पिक)",
    "pj.f.status": "क्या पूरी हो गई है?",
    "pj.f.institution": "स्कूल / कॉलेज का प्रकार",
    "pj.f.certs": "आपके पास मौजूद प्रमाणपत्र और लाइसेंस",
    "pj.f.certsHint": "कुछ नौकरियों में क़ानूनन लाइसेंस या प्रमाणपत्र ज़रूरी होता है, इसलिए यह मायने रखता है।",
    "pj.f.subjects": "जिन विषयों में आप अच्छे हैं (वैकल्पिक)",
    "pj.f.skills": "आपके हुनर",
    "pj.f.skillsHint": "जो भी लागू हों, सब पर निशान लगाएँ।",
    "pj.f.customSkills": "दूसरे हुनर (वैकल्पिक)",
    "pj.f.customHint": "कोई और हुनर लिखें, कॉमा लगाकर।",
    "pj.f.experience": "काम का अनुभव",
    "pj.f.pastRoles": "पहले की नौकरी या काम (वैकल्पिक)",
    "pj.f.pastHint": "जैसे: मोबाइल दुकान में हेल्पर, डिलीवरी पार्टनर, ट्यूशन टीचर।",
    "pj.f.industries": "जिन क्षेत्रों में काम किया है (वैकल्पिक)",
    "pj.f.internship": "क्या आपने इंटर्नशिप या अप्रेंटिसशिप की है?",
    "pj.f.cats": "आपको किस तरह की नौकरी चाहिए",
    "pj.f.catsHint": "एक या ज़्यादा चुनें।",
    "pj.f.targetRole": "लक्ष्य वाली नौकरी (वैकल्पिक)",
    "pj.f.targetHint": "जिस नौकरी तक आप पहुँचना चाहते हैं — हम बताएँगे उसके लिए क्या चाहिए।",
    "pj.f.title": "मन में कोई पद का नाम (वैकल्पिक)",
    "pj.f.industry": "पसंद का क्षेत्र (वैकल्पिक)",
    "pj.f.types": "नौकरी का प्रकार",
    "pj.f.mode": "कार्यस्थल पर या घर से?",
    "pj.f.shift": "शिफ़्ट",
    "pj.f.minSalary": "हर महीने कम से कम कितनी सैलरी चलेगी, ₹ में (वैकल्पिक)",
    "pj.f.minSalaryHint": "सिर्फ़ बताई गई सैलरी रेंज से तुलना के लिए। सिर्फ़ अंक लिखें, जैसे 15000।",
    "pj.f.availability": "कब जॉइन कर सकते हैं?",
    "pj.f.travel": "क्या काम के लिए बाहर (फ़ील्ड विज़िट) जा सकते हैं?",
    "pj.f.employerTypes": "किस तरह का नियोक्ता पसंद है",
    "pj.f.smartphone": "क्या आपके पास स्मार्टफ़ोन है?",
    "pj.f.computer": "क्या आपके पास कंप्यूटर या लैपटॉप है?",
    "pj.f.internet": "क्या आपके पास नियमित इंटरनेट है?",
    "pj.f.training": "क्या पहले कुछ ट्रेनिंग लेने को तैयार हैं?",
    "pj.f.certification": "क्या नौकरी से जुड़ा प्रमाणपत्र लेने को तैयार हैं?",
    "pj.f.remember": "मेरे जवाब इस डिवाइस पर याद रखें",
    "pj.f.rememberHint": "अगर निशान नहीं लगाया, तो यह टैब बंद करते ही जवाब मिट जाएँगे।",
    "pj.err.state": "कृपया अपना राज्य चुनें।",
    "pj.err.pin": "पिन कोड 6 अंकों का होता है और 0 से शुरू नहीं होता।",
    "pj.err.locationPref": "कृपया चुनें कि आप कहाँ काम करना चाहते हैं।",
    "pj.err.level": "कृपया अपनी सबसे ऊँची पढ़ाई चुनें।",
    "pj.err.year": "कृपया सही साल लिखें, जैसे 2024 — या ख़ाली छोड़ दें।",
    "pj.err.experience": "कृपया अपना काम का अनुभव चुनें।",
    "pj.err.cats": "कृपया कम से कम एक तरह की नौकरी या एक लक्ष्य नौकरी चुनें।",
    "pj.err.minSalary": "कृपया सिर्फ़ अंक लिखें, जैसे 15000 — या ख़ाली छोड़ दें।",
    "pj.btn.find": "मेरे लिए नौकरियाँ खोजें",
    "pj.btn.edit": "मेरे जवाब बदलें",
    "pj.btn.clear": "मेरे जवाब मिटाएँ",
    "pj.btn.editSection": "बदलें",
    "pj.notGiven": "नहीं बताया",
    "pj.cleared": "आपके प्राइवेट जॉब फ़ाइंडर के जवाब इस ब्राउज़र से मिटा दिए गए।",
    "pj.review.local": "आपके जवाब इस डिवाइस पर तब तक याद रहेंगे जब तक आप उन्हें मिटा न दें।",
    "pj.review.session": "यह टैब बंद करते ही आपके जवाब मिट जाएँगे।",
    "pj.res.t": "आपके लिए प्राइवेट नौकरियाँ",
    "pj.res.tName": "{name}, ये हैं आपके लिए प्राइवेट नौकरियाँ",
    "pj.res.summary": "देखने के लिए {n} नौकरियाँ, जिनमें से {s} अभी मज़बूत या अच्छा मेल हैं। कंपनियाँ, हुनर की कमी और सुरक्षा सुझाव देखने के लिए ऊपर के टैब इस्तेमाल करें।",
    "pj.res.savedLocal": "इस डिवाइस पर सेव है। कभी भी मिटा सकते हैं।",
    "pj.res.savedSession": "सिर्फ़ यह टैब बंद होने तक रहेगा।",
    "pj.kinds.t": "तीन अलग चीज़ें — इन्हें मिलाएँ नहीं",
    "pj.kind.vacancy": "विज्ञापित वैकेंसी",
    "pj.kind.vacancyD": "असली, मौजूदा नौकरी का विज्ञापन। ये आपको सिर्फ़ हमारे दिए जॉब पोर्टल और करियर पेज पर मिलेंगे — हम इन्हें यहाँ नहीं दिखाते।",
    "pj.kind.employer": "नियोक्ता जो भर्ती कर सकता है",
    "pj.kind.employerD": "असली कंपनी जिसके काम में इस तरह की नौकरी चाहिए। हमने कोई मौजूदा वैकेंसी नहीं जाँची है।",
    "pj.kind.general": "सामान्य करियर अवसर",
    "pj.kind.generalD": "एक आम नौकरी जो आपकी प्रोफ़ाइल से मेल खाती है। इससे असली वैकेंसी खोजें।",
    "pj.tabsLabel": "नतीजों के हिस्से",
    "pj.tab.jobs": "आपके लिए नौकरियाँ",
    "pj.tab.companies": "कंपनियाँ",
    "pj.tab.gap": "हुनर की कमी और प्लान",
    "pj.tab.safety": "सुरक्षित रहें",
    "pj.catsT": "मेल के लेबल का मतलब",
    "pj.cat.strong": "मज़बूत मेल",
    "pj.cat.strongD": "आपके पास आम तौर पर माँगी जाने वाली पढ़ाई और हुनर हैं, और यह आपकी पसंद से मेल खाती है।",
    "pj.cat.good": "अच्छा मेल",
    "pj.cat.goodD": "आपके पास आम पढ़ाई और हुनर हैं; आपकी कुछ पसंद (शिफ़्ट, नौकरी का प्रकार, ऑफ़िस/घर) अलग हो सकती है।",
    "pj.cat.entry": "शुरुआती अवसर",
    "pj.cat.entryD": "शुरुआत की नौकरी जिसमें आपके पास एक हुनर कम है, जो आम तौर पर जल्दी सीखा जा सकता है।",
    "pj.cat.training": "और ट्रेनिंग चाहिए",
    "pj.cat.trainingD": "कुछ हुनर सीखने या ज़रूरी योग्यता/लाइसेंस लेने के बाद संभव।",
    "pj.cat.growth": "करियर में आगे बढ़ने का अवसर",
    "pj.cat.growthD": "ऊँचा पद जिसके लिए आम तौर पर ज़्यादा सालों का अनुभव चाहिए — आगे बढ़ने का लक्ष्य।",
    "pj.filterLabel": "मेल के हिसाब से छाँटें",
    "pj.filter.all": "सभी",
    "pj.sort.label": "क्रम",
    "pj.sort.best": "सबसे अच्छा मेल पहले",
    "pj.sort.missing": "सबसे कम कमी वाले हुनर",
    "pj.sort.salary": "ज़्यादा बताई गई सैलरी (जहाँ दिखे)",
    "pj.count": "{n} नौकरियाँ दिख रही हैं।",
    "pj.none": "इस समूह में कोई नौकरी नहीं। \"सभी\" देखें या अपने जवाब बदलें।",
    "pj.targetTag": "आपका लक्ष्य",
    "pj.eduUsual": "आम तौर पर माँगी जाने वाली पढ़ाई",
    "pj.skillsNeeded": "मुख्य ज़रूरी हुनर",
    "pj.noneSpecial": "कोई ख़ास हुनर नहीं — काम पर सिखाया जाता है",
    "pj.expNeeded": "आम तौर पर माँगा जाने वाला अनुभव",
    "pj.years": "लगभग {n} साल",
    "pj.freshersOk": "फ़्रेशर अक्सर रखे जाते हैं",
    "pj.workT": "काम का प्रकार",
    "pj.formalT": "ज़रूरी योग्यता:",
    "pj.whyT": "यह आपके लिए क्यों हो सकती है",
    "pj.gapsT": "क्या जाँचें या बनाएँ",
    "pj.salaryT": "सैलरी की जानकारी",
    "pj.salary.range": "लगभग {low} से {high} प्रति माह",
    "pj.salary.basis": "कटौती से पहले की बेसिक सैलरी, बताई गई सैलरी का बीच का 80% (औसत लगभग {avg})। PF और टैक्स के बाद हाथ में कम आता है; इंसेंटिव शामिल नहीं।",
    "pj.salary.source": "स्रोत: {n} लोगों की ख़ुद बताई सैलरी, {date} को अपडेट, यहाँ:",
    "pj.salary.limited": "डेटा सीमित है — इसे मोटा अंदाज़ा ही मानें।",
    "pj.salary.hidden": "सार्वजनिक रूप से सत्यापित नहीं।",
    "pj.salary.why.none": "इस पद के लिए हमें भरोसेमंद सैलरी स्रोत नहीं मिला। हर नौकरी के विज्ञापन में लिखी सैलरी देखें।",
    "pj.salary.why.old": "हमें मिला सैलरी डेटा 2 साल से पुराना है, इसलिए हम इसे नहीं दिखाते।",
    "pj.salary.why.few": "सिर्फ़ {n} सैलरी बताई गईं — सही रेंज दिखाने के लिए बहुत कम।",
    "pj.salary.why.wide": "बताई गई सैलरी में बहुत ज़्यादा अंतर है, इसलिए उपयोगी रेंज नहीं दी जा सकती।",
    "pj.salary.vs.above": "आपकी अपेक्षित न्यूनतम सैलरी ({min}) इस पद की ज़्यादातर बताई गई सैलरी से ऊपर है — शुरुआत में मिलना मुश्किल हो सकता है।",
    "pj.salary.vs.within": "आपकी अपेक्षित न्यूनतम सैलरी ({min}) बताई गई रेंज के अंदर है।",
    "pj.salary.vs.below": "आपकी अपेक्षित न्यूनतम सैलरी ({min}) ज़्यादातर बताई गई सैलरी से कम है — ख़ुद को कम न आँकें।",
    "pj.searchT": "असली वैकेंसी खोजें, करियर का रास्ता और कंपनियाँ",
    "pj.searchD": "ये लिंक \"{place}\" के लिए नौकरी की खोज खोलते हैं। हम नतीजे नहीं जाँचते — हर विज्ञापन ध्यान से पढ़ें।",
    "pj.link.ncs": "नेशनल करियर सर्विस (सरकारी, मुफ़्त)",
    "pj.link.indeed": "Indeed पर खोजें",
    "pj.link.linkedin": "LinkedIn पर खोजें",
    "pj.link.apprenticeship": "अप्रेंटिसशिप इंडिया (सरकारी)",
    "pj.link.thirdParty": "प्राइवेट जॉब पोर्टल",
    "pj.nextT": "यह नौकरी आगे कहाँ ले जा सकती है",
    "pj.companiesT": "कंपनियाँ जिनके काम में यह नौकरी चाहिए",
    "pj.companiesD": "कोई मौजूदा वैकेंसी सत्यापित नहीं। कंपनी की प्रोफ़ाइल और आधिकारिक लिंक देखने के लिए नाम पर दबाएँ।",
    "pj.seeGap": "हुनर की कमी और प्लान देखें",
    "pj.why.edu": "आपकी पढ़ाई वही है जो नियोक्ता आम तौर पर माँगते हैं।",
    "pj.why.noEdu": "नियोक्ता आम तौर पर न्यूनतम पढ़ाई नहीं माँगते।",
    "pj.why.formal": "आपके पास ज़रूरी लाइसेंस या योग्यता है।",
    "pj.why.skills": "आपके पास मुख्य हुनर हैं: {skills}।",
    "pj.why.helpful": "आपके अतिरिक्त हुनर मदद करते हैं: {skills}।",
    "pj.why.fresher": "इस पद पर फ़्रेशर आम तौर पर रखे जाते हैं।",
    "pj.why.exp": "आपका अनुभव आम तौर पर माँगे जाने वाले {n} साल के बराबर है।",
    "pj.why.target": "यह आपकी लक्ष्य नौकरी है।",
    "pj.why.cat": "यह उसी तरह का काम है जो आपने चुना।",
    "pj.why.remote": "कुछ नियोक्ता यह काम घर से करने का विकल्प देते हैं।",
    "pj.gap.edu": "नियोक्ता आम तौर पर {level} या उससे ज़्यादा माँगते हैं।",
    "pj.gap.formal": "ज़रूरी: {note}",
    "pj.gap.skills": "बनाने वाले हुनर: {skills}।",
    "pj.gap.exp": "आम तौर पर लगभग {n} साल का अनुभव चाहिए।",
    "pj.gap.mode": "ऑफ़िस / घर से काम की आपकी पसंद इस नौकरी के आम तरीक़े से मेल नहीं खा सकती।",
    "pj.gap.shift": "इस नौकरी में आपकी पसंद की शिफ़्ट शायद न मिले।",
    "pj.gap.type": "यह नौकरी आम तौर पर आपके चुने प्रकार में नहीं मिलती।",
    "pj.co.lead": "आधिकारिक लिंक वाली असली कंपनियाँ। हम दावा नहीं करते कि इनमें से कोई अभी भर्ती कर रही है — मौजूदा वैकेंसी देखने के लिए उनका करियर पेज खोलें।",
    "pj.co.type": "कंपनी का प्रकार",
    "pj.co.industry": "क्षेत्र",
    "pj.co.all": "सभी",
    "pj.co.sort.name": "नाम (A–Z)",
    "pj.co.sort.old": "सबसे पुरानी पहले",
    "pj.co.sort.new": "सबसे नई पहले",
    "pj.co.mine": "सिर्फ़ मेरी नौकरी की पसंद से जुड़ी कंपनियाँ",
    "pj.co.count": "{total} में से {n} कंपनियाँ दिख रही हैं।",
    "pj.co.none": "इन फ़िल्टर से कोई कंपनी मेल नहीं खाती।",
    "pj.co.website": "आधिकारिक वेबसाइट",
    "pj.co.careers": "आधिकारिक करियर पेज",
    "pj.co.careersNone": "हम ख़ुद करियर पेज नहीं खोल पाए — आधिकारिक वेबसाइट पर \"Careers\" देखें।",
    "pj.co.rolesForYou": "आपके नतीजों की नौकरियाँ जो इस कंपनी के काम से मेल खाती हैं",
    "pj.co.profile": "कंपनी प्रोफ़ाइल, जाँच और स्रोत",
    "pj.co.founded": "स्थापना",
    "pj.co.founders": "संस्थापक",
    "pj.co.hq": "मुख्यालय",
    "pj.co.parent": "मूल कंपनी / मालिक",
    "pj.co.listing": "शेयर बाज़ार लिस्टिंग",
    "pj.co.people": "नेतृत्व (सार्वजनिक)",
    "pj.co.employees": "कर्मचारी",
    "pj.co.employeesV": "{n} ({asOf} तक)",
    "pj.co.oftenHires": "इसके काम में किस तरह की नौकरियाँ चाहिए",
    "pj.co.notPublic": "सार्वजनिक रूप से सत्यापित नहीं",
    "pj.co.verifyT": "जाँच की स्थिति",
    "pj.co.wikiNote": "कंपनी की जानकारी विकिपीडिया (सार्वजनिक ज्ञानकोश) से है और पुरानी हो सकती है। नेतृत्व और कर्मचारियों की संख्या अक्सर बदलती है।",
    "pj.co.sources": "स्रोत",
    "pj.co.checked": "आख़िरी बार जाँचा: {date}",
    "pj.co.reviewsT": "कर्मचारियों की समीक्षाएँ",
    "pj.co.reviewsD": "हम रेटिंग कॉपी नहीं करते। इन साइटों पर ख़ुद समीक्षाएँ पढ़ें — ये लोगों की निजी राय हैं, हर कर्मचारी के अनुभव का तथ्य नहीं।",
    "pj.v.identity": "पहचान",
    "pj.v.identityListed": "लिस्टेड कंपनी ({listing}), विकिपीडिया के अनुसार",
    "pj.v.identitySub": "{parent} का हिस्सा, विकिपीडिया के अनुसार",
    "pj.v.identityNone": "सार्वजनिक रूप से सत्यापित नहीं",
    "pj.v.website": "आधिकारिक वेबसाइट",
    "pj.v.websiteD": "{source} में दिया गया पता",
    "pj.v.careers": "करियर पेज",
    "pj.v.careersYes": "हमने {date} को खोलकर जाँचा",
    "pj.v.careersNo": "हमने नहीं जाँचा",
    "pj.v.vacancy": "मौजूदा वैकेंसी",
    "pj.v.vacancyD": "सत्यापित नहीं — करियर पेज देखें",
    "pj.v.contact": "संपर्क जानकारी",
    "pj.v.contactD": "इकट्ठा नहीं की — आधिकारिक वेबसाइट देखें",
    "pj.v.reputation": "साख",
    "pj.v.reputationD": "इकट्ठा नहीं की — कर्मचारियों की समीक्षाएँ ख़ुद पढ़ें",
    "pj.v.overall": "जाँच अधूरी",
    "pj.v.fraud": "इसके करियर पेज पर फ़र्ज़ी नौकरी ऑफ़र से सावधान किया गया है। सिर्फ़ आधिकारिक लिंक से आवेदन करें।",
    "pj.local.t": "स्थानीय दुकानें, शोरूम और छोटे व्यवसाय",
    "pj.local.d": "कई अच्छी नौकरियाँ स्थानीय नियोक्ताओं के पास होती हैं जो ऑनलाइन नहीं दिखते। हम उनकी सूची नहीं दे सकते, लेकिन आप ख़ुद उन्हें ढूँढ और जाँच सकते हैं:",
    "pj.local.1": "अपने पास के शोरूम, दुकान, क्लिनिक और ऑफ़िस जाकर पूछें कि क्या भर्ती है। एक पेज का आसान रिज़्यूमे साथ रखें।",
    "pj.local.2": "नेशनल करियर सर्विस पोर्टल और ज़िला रोज़गार कार्यालय में रोज़गार मेलों की जानकारी देखते रहें।",
    "pj.local.3": "व्यवसाय का नाम, पता और GST या उद्यम नंबर पूछें, और नीचे दिए आधिकारिक पोर्टल पर जाँचें।",
    "pj.local.4": "सैलरी, काम के घंटे और काम लिखित में लें (ऑफ़र लेटर या नियुक्ति पत्र)।",
    "pj.verify.t": "आधिकारिक पोर्टल पर नियोक्ता की जाँच करें",
    "pj.gap.choose": "वह नौकरी चुनें जिस तक आप पहुँचना चाहते हैं",
    "pj.gap.current": "आपकी अभी की प्रोफ़ाइल",
    "pj.gap.nowT": "जिन नौकरियों के लिए अभी कोशिश कर सकते हैं",
    "pj.gap.nowNone": "इन्हें देखने के लिए अपने जवाबों में और हुनर भरें।",
    "pj.gap.target": "लक्ष्य",
    "pj.gap.typical": "ये नियोक्ताओं की आम माँगें हैं; हर विज्ञापन की अपनी शर्तें होती हैं।",
    "pj.gap.gapT": "आपके हुनर की कमी",
    "pj.gap.ready": "आप पहले से आम माँगें पूरी करते हैं। आवेदन शुरू करें — और नीचे के अतिरिक्त हुनर भी बढ़ाते रहें।",
    "pj.gap.have": "आपके पास पहले से है",
    "pj.gap.course": "छोटे कोर्स से सीखा जा सकता है",
    "pj.gap.practice": "अभ्यास या काम का अनुभव चाहिए",
    "pj.gap.licence": "लाइसेंस या प्रमाणपत्र चाहिए",
    "pj.gap.eduRow": "औपचारिक पढ़ाई",
    "pj.gap.eduNeeded": "नियोक्ता आम तौर पर {level} माँगते हैं। छोटा कोर्स इसकी जगह नहीं ले सकता — ओपन स्कूलिंग या दूरस्थ शिक्षा पर विचार करें।",
    "pj.gap.eduOk": "आपकी पढ़ाई आम माँग पूरी करती है।",
    "pj.gap.expRow": "अनुभव",
    "pj.gap.expNeeded": "आम तौर पर लगभग {n} साल का और संबंधित अनुभव चाहिए।",
    "pj.gap.expOk": "आपका अनुभव आम माँग पूरी करता है।",
    "pj.gap.improve": "अतिरिक्त हुनर जो आपको अलग दिखाएँ",
    "pj.gap.noneLeft": "यहाँ कुछ नहीं।",
    "pj.gap.planT": "आपका क़दम-दर-क़दम प्लान",
    "pj.gap.planNote": "यह प्लान मार्गदर्शन है, वादा नहीं। कोर्स पूरा करने से नौकरी या प्रमोशन की गारंटी नहीं मिलती।",
    "pj.step.course": "{skills} छोटे कोर्स से सीखें — जाँचे गए विकल्पों के लिए कोर्स और हुनर विकास पेज देखें।",
    "pj.step.formal": "ज़रूरी योग्यता या लाइसेंस लें: {note}",
    "pj.step.formalSkills": "इनके लिए ज़रूरी लाइसेंस या प्रमाणपत्र लें: {skills}।",
    "pj.step.practice": "{skills} का अभ्यास करें — अप्रेंटिसशिप, इंटर्नशिप, पार्ट-टाइम काम या परिवार के व्यवसाय में मदद से।",
    "pj.step.edu": "{level} पूरी करने की योजना बनाएँ। ओपन स्कूलिंग (NIOS) या दूरस्थ शिक्षा से काम के साथ पढ़ सकते हैं।",
    "pj.step.improve": "काम के अतिरिक्त हुनर जोड़ें: {skills}।",
    "pj.step.portfolio": "असली काम का छोटा पोर्टफ़ोलियो बनाएँ (सैंपल पोस्ट, डिज़ाइन या प्रोजेक्ट) ताकि नियोक्ता को दिखा सकें।",
    "pj.step.proof": "अपने हुनर का सबूत रखें: प्रमाणपत्र, किसी नियोक्ता का रेफ़रेंस या काम का छोटा नमूना।",
    "pj.step.stepping": "अनुभव के लिए पहले ऐसी नौकरी से शुरू करें जो अभी मिल सकती है ({roles})। आम तौर पर लगभग {n} साल और चाहिए।",
    "pj.step.steppingNone": "लगभग {n} साल का संबंधित अनुभव लें — कई नियोक्ता अंदर से ही प्रमोशन देते हैं।",
    "pj.step.apply": "आधिकारिक करियर पेज और भरोसेमंद पोर्टल से आवेदन करें। नौकरी के लिए किसी को पैसे न दें।",
    "pj.consent.q": "क्या आप इन हुनर के लिए सीखने के विकल्प देखना चाहेंगे?",
    "pj.consent.d": "हम इस नौकरी के लिए मुफ़्त और फ़ीस वाले, ऑनलाइन और ऑफ़लाइन कोर्स दिखाएँगे। आपके जवाब इसी डिवाइस पर रहेंगे।",
    "pj.consent.yes": "हाँ, कोर्स दिखाएँ",
    "pj.consent.no": "नहीं, नौकरियाँ देखते रहें",
    "pj.safe.t": "फ़र्ज़ी नौकरी के चेतावनी संकेत",
    "pj.safe.1": "कोई नौकरी, इंटरव्यू, ट्रेनिंग किट, वर्दी या \"रजिस्ट्रेशन\" के लिए पैसे माँगे।",
    "pj.safe.2": "बिना इंटरव्यू या टेस्ट के नौकरी का ऑफ़र आ जाए।",
    "pj.safe.3": "कोई \"एजेंट\" कहे कि फ़ीस लेकर बड़ी कंपनी में नौकरी दिला देगा।",
    "pj.safe.4": "बैंक पासवर्ड, OTP, ATM पिन या असली दस्तावेज़ माँगे जाएँ।",
    "pj.safe.5": "ईमेल कंपनी की अपनी वेबसाइट के पते की जगह Gmail/Yahoo से आए।",
    "pj.safe.6": "बहुत कम काम के लिए असामान्य रूप से ज़्यादा सैलरी।",
    "pj.safe.7": "जल्दबाज़ी करवाई जाए: \"आज पैसे दो वरना सीट चली जाएगी\"।",
    "pj.safe.8": "संपर्क जानकारी कंपनी की आधिकारिक वेबसाइट पर जाँची न जा सके।",
    "pj.safe.doT": "अगर कुछ ग़लत लगे",
    "pj.safe.do1": "रुकें, और न पैसे दें न दस्तावेज़।",
    "pj.safe.do2": "कंपनी की आधिकारिक वेबसाइट या करियर पेज ख़ुद खोलकर जाँचें — मैसेज वाले लिंक इस्तेमाल न करें।",
    "pj.safe.do3": "cybercrime.gov.in पर शिकायत करें या 1930 पर कॉल करें।",
    "pj.safe.report": "धोखाधड़ी की शिकायत करें (cybercrime.gov.in)",
    "pj.safe.guide": "नौकरी के धोखे से बचने की हमारी गाइड पढ़ें",
    "sd.title": "कोर्स और हुनर विकास — CareerSaathi AI",
    "sd.h1": "कोर्स और हुनर विकास",
    "sd.lead": "आपकी चाही नौकरी के लिए सीखने के विकल्प — मुफ़्त और फ़ीस वाले, ऑनलाइन और ऑफ़लाइन, सरकारी कार्यक्रम, प्रमाणपत्र और व्यावहारिक ट्रेनिंग।",
    "sd.warn": "हम सिर्फ़ आधिकारिक लिंक दिखाते हैं। हम न दाख़िला करवाते हैं, न पैसे लेते हैं, न आपकी जानकारी किसी को देते हैं — फ़ैसला आप प्रदाता की अपनी वेबसाइट पर करें। सिर्फ़ कोर्स से नौकरी की गारंटी नहीं मिलती।",
    "sd.noProfile": "निजी सुझावों के लिए प्राइवेट जॉब फ़ाइंडर फ़ॉर्म भरें। फिर भी आप नीचे कोई नौकरी चुन सकते हैं।",
    "sd.fillForm": "प्राइवेट जॉब फ़ाइंडर खोलें",
    "sd.forRole": "इसके लिए सीखना: {role}",
    "sd.chooseRole": "लक्ष्य नौकरी",
    "sd.skillsT": "बनाने वाले हुनर",
    "sd.noGap": "इस नौकरी के मुख्य हुनर आपके पास पहले से हैं। बेहतर होने के लिए नीचे अतिरिक्त हुनर चुन सकते हैं।",
    "sd.addSkills": "और हुनर जोड़ें जो आप सीखना चाहते हैं",
    "sd.pathQ": "आप कैसे सीखना चाहेंगे?",
    "sd.path.all": "सभी विकल्पों की तुलना",
    "sd.path.free": "मैं मुफ़्त सीखना चाहता/चाहती हूँ",
    "sd.path.paid": "मैं कोर्स के लिए पैसे दे सकता/सकती हूँ",
    "sd.path.offline": "मुझे ऑफ़लाइन क्लास पसंद है",
    "sd.path.online": "मुझे ऑनलाइन सीखना पसंद है",
    "sd.path.govt": "सरकार-समर्थित कार्यक्रम",
    "sd.path.certificate": "मुझे प्रमाणपत्र चाहिए",
    "sd.path.practical": "मुझे व्यावहारिक ट्रेनिंग चाहिए",
    "sd.path.jobs": "इसकी जगह नौकरियाँ देखते रहें",
    "sd.picksT": "आपके लिए हमारे चुने विकल्प",
    "sd.picksNote": "आसान, खुले नियमों से चुने गए: आपके हुनर से कितना मेल, ख़र्च, प्रमाणपत्र और व्यावहारिक फ़ायदा। लोकप्रियता या विज्ञापन से नहीं।",
    "sd.pick.free": "सबसे अच्छा मुफ़्त विकल्प",
    "sd.pick.govt": "सबसे अच्छा सरकार-समर्थित विकल्प",
    "sd.pick.practical": "सबसे अच्छी व्यावहारिक ट्रेनिंग",
    "sd.pick.certificate": "सबसे अच्छा प्रमाणपत्र विकल्प",
    "sd.pick.offline": "सबसे अच्छा ऑफ़लाइन विकल्प",
    "sd.pick.beginner": "शुरुआत करने वालों के लिए सबसे अच्छा",
    "sd.count": "सीखने के {n} विकल्प।",
    "sd.none": "इस पसंद से कोई विकल्प मेल नहीं खाता। \"सभी विकल्पों की तुलना\" आज़माएँ।",
    "sd.govt": "सरकारी",
    "sd.mode.online": "ऑनलाइन",
    "sd.mode.offline": "ऑफ़लाइन / आमने-सामने",
    "sd.mode.both": "ऑनलाइन और ऑफ़लाइन",
    "sd.why": "क्यों काम का है — यह सिखाता है:",
    "sd.whyGeneral": "किसी ख़ास हुनर के लिए जाँचा नहीं गया — अपनी ज़रूरत की चीज़ इस साइट पर खोजें।",
    "sd.costT": "ख़र्च",
    "sd.cost.free": "मुफ़्त (प्रदाता के अनुसार)",
    "sd.cost.freeExam": "पढ़ाई मुफ़्त; प्रमाणपत्र परीक्षा की फ़ीस लगती है",
    "sd.cost.fee": "फ़ीस लगती है",
    "sd.cost.none": "सत्यापित नहीं — प्रदाता से जाँचें",
    "sd.certT": "प्रमाणपत्र",
    "sd.cert.recognised": "सरकारी / आधिकारिक रूप से मान्य",
    "sd.cert.provider": "प्रदाता का प्रमाणपत्र — सरकारी योग्यता नहीं",
    "sd.cert.none": "जाँचा नहीं",
    "sd.duration": "अवधि",
    "sd.eligibility": "कौन जुड़ सकता है",
    "sd.language": "भाषा",
    "sd.open": "आधिकारिक पेज खोलें",
    "sd.checked": "{date} को जाँचा, स्रोत: {source}",
    "sd.honest": "हम फ़ीस, छात्रों की रेटिंग या प्लेसमेंट के आँकड़े नहीं दिखाते क्योंकि हम उन्हें सत्यापित नहीं कर पाए। पैसे देने या कोई जानकारी देने से पहले प्रदाता का पेज पढ़ें।",
    "sd.back": "मेरे नौकरी के नतीजों पर वापस",
    "sd.allCourses": "सभी मुफ़्त कोर्स देखें",
    "courses.teachesT": "जाँचा गया — यह सिखाता है:",
    "courses.generalOnly": "खोजने की सामान्य जगह: हमने पक्का नहीं किया कि यह अभी कोई ख़ास हुनर सिखाता है, इसलिए इसे किसी हुनर के मेल के रूप में नहीं दिखाते।",
    "courses.unverifiedSkills": "पक्का नहीं (मेल के लिए इस्तेमाल नहीं): {skills}।",
    "courses.evidence": "हमने कैसे जाँचा ({date}):",
    "courses.noVerified": "इस कोर्स या हुनर के लिए अभी कोई सत्यापित प्रदाता उपलब्ध नहीं है।",
    "courses.noVerifiedHint": "हम किसी प्रदाता को तभी दिखाते हैं जब हमें सबूत मिले कि वह ठीक यही हुनर सिखाता है। आप नीचे स्किल इंडिया डिजिटल हब पर खोज सकते हैं — वहाँ के नतीजे हमने नहीं जाँचे।",
    "sd.missing": "इनके लिए अभी कोई सत्यापित प्रदाता उपलब्ध नहीं है: {skills}।",
    "sd.noVerified": "इस कोर्स या हुनर के लिए अभी कोई सत्यापित प्रदाता उपलब्ध नहीं है।",
    "sd.noVerifiedFor": "बिना सत्यापित प्रदाता वाले हुनर: {skills}। कमी भरने के लिए हम असंबंधित प्रदाता नहीं दिखाते।",
    "sd.generalT": "ख़ुद खोजने की जगहें",
    "sd.generalD": "ये असली पोर्टल और कार्यक्रम हैं, लेकिन हमने पक्का नहीं किया कि ये अभी आपके हुनर सिखाते हैं। फ़ैसले से पहले इनकी साइट पर खोजें।",
    // ---- Chat assistant ----
    "chat.launch": "CareerSaathi से पूछें",
    "chat.loadFail": "चैट लोड नहीं हो पाई। अपना इंटरनेट कनेक्शन देखकर फिर कोशिश करें।",
    "chat.title": "CareerSaathi असिस्टेंट",
    "chat.subGuide": "ऑटोमेटेड गाइड · इंसान नहीं · आपके ब्राउज़र में चलता है",
    "chat.subAI": "AI असिस्टेंट ({provider}) · इंसान नहीं",
    "chat.new": "नई चैट (यह बातचीत मिट जाएगी)",
    "chat.close": "चैट बंद करें",
    "chat.privacyT": "गोपनीयता — ज़रूर पढ़ें",
    "chat.privacyGuide": "लॉगिन या निजी जानकारी की ज़रूरत नहीं। यह गाइड सिर्फ़ आपके ब्राउज़र में चलता है: आपके संदेश हमें या किसी और को नहीं भेजे जाते। कोर्स, प्रदाता, सैलरी और नौकरी के जवाब सिर्फ़ इस वेबसाइट के जाँचे गए डेटा से आते हैं।",
    "chat.privacyAI": "AI जवाब चालू हैं: जवाब लिखने के लिए आपके संदेश हमारे चैट सर्वर और {provider} को भेजे जाते हैं। हमारा सर्वर चैट सेव नहीं करता, लेकिन {provider} और नेटवर्क कंपनियाँ आपका IP पता जैसी तकनीकी जानकारी देख सकती हैं, इसलिए यह पूरी तरह गुमनाम नहीं है। अपना नाम, फ़ोन नंबर या दूसरी निजी जानकारी न लिखें।",
    "chat.privacyAll": "बातचीत सिर्फ़ इसी ब्राउज़र टैब में रहती है। \"नई चैट\", टैब बंद करने या \"मेरा सेव डेटा मिटाएँ\" से यह मिट जाती है।",
    "chat.privacyMore": "गोपनीयता पेज",
    "chat.aiToggle": "AI जवाब इस्तेमाल करें ({provider}) — मेरे संदेश ब्राउज़र से बाहर भेजे जाएँगे",
    "chat.inputLabel": "आपका संदेश",
    "chat.placeholder": "English, हिंदी या Hinglish में पूछें…",
    "chat.send": "भेजें",
    "chat.foot": "सिर्फ़ सामान्य मार्गदर्शन — किसी नौकरी या सैलरी की गारंटी नहीं। फ़ैसले से पहले आधिकारिक वेबसाइट देखें।",
    "chat.thinking": "सोच रहा है…",
    "chat.retry": "फिर से कोशिश करें",
    "chat.useGuide": "इसकी जगह वेबसाइट गाइड से जवाब लें",
    "chat.err.off": "इस वेबसाइट पर AI जवाब चालू नहीं हैं। आप वेबसाइट गाइड इस्तेमाल कर सकते हैं।",
    "chat.err.timeout": "AI सेवा ने जवाब देने में बहुत समय लगाया।",
    "chat.err.network": "AI सेवा से संपर्क नहीं हो पाया। अपना इंटरनेट कनेक्शन देखें।",
    "chat.err.rate": "कम समय में बहुत ज़्यादा संदेश। एक मिनट रुककर फिर कोशिश करें।",
    "chat.err.server": "AI सेवा अभी उपलब्ध नहीं है।",
    "chat.err.bad": "AI सेवा का जवाब पढ़ा नहीं जा सका।",
    "chat.verifiedFor": "इसके लिए जाँचा गया: {skill}",
    "chat.checkedOn": "{date} को जाँचा",
    "chat.aiSaid": "AI असिस्टेंट ने कहा:",
    "chat.botSaid": "गाइड ने कहा:",
    "chat.youSaid": "आपने कहा:",
    "chat.aiTag": "AI जवाब · {provider}",
    "privacy.where.9": "CareerSaathi असिस्टेंट (चैट): लॉगिन या निजी जानकारी की ज़रूरत नहीं। गाइड मोड में यह सिर्फ़ आपके ब्राउज़र में चलता है और कुछ नहीं भेजता। अगर AI जवाब उपलब्ध हों और आप उन्हें चालू करें, तो जवाब लिखने के लिए आपके संदेश हमारे चैट सर्वर और Google Gemini को भेजे जाते हैं; हमारा सर्वर उन्हें सेव नहीं करता। चैट सिर्फ़ आपके ब्राउज़र टैब में रहती है, जब तक आप नई चैट शुरू न करें या टैब बंद न करें।",
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
    "about.not.2": "यह लाइव नौकरी फ़ीड नहीं है। खुली भर्तियों की हमारी सूची हाथ से अपडेट होती है और कुछ छूट सकती हैं — हमेशा आधिकारिक वेबसाइट देखें।",
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
    "about.label.vacancyD": "सिर्फ़ तब दिखता है जब हमने भर्ती को उसके आधिकारिक नोटिस से जाँचा हो और वह आज की तारीख़ में खुली हो।",
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
    "privacy.where.4": "यह वेबसाइट एनालिटिक्स या ट्रैकिंग टूल इस्तेमाल नहीं करती। अभी इस पर कोई विज्ञापन नहीं है।",
    "privacy.where.5": "अगर आप \"याद रखें\" पर टिक नहीं करते, तो जवाब सिर्फ़ ब्राउज़र टैब बंद होने तक रहते हैं।",
    "privacy.where.6": "रुचि क्विज़ के जवाब सिर्फ़ इसी ब्राउज़र में सेव होते हैं, ताकि आप नतीजा दोबारा देख सकें। \"मेरा सेव डेटा मिटाएँ\" से ये भी मिट जाते हैं।",
    "privacy.where.7": "कैलेंडर रिमाइंडर आपके डिवाइस पर बनी फ़ाइलें हैं। हम इन्हें कभी नहीं देखते, और आपको कोई मैसेज नहीं भेज सकते।",
    "privacy.where.8": "प्राइवेट जॉब फ़ाइंडर के जवाब सिर्फ़ इसी ब्राउज़र में रहते हैं (टैब बंद होते ही मिट जाते हैं, जब तक आप \"याद रखें\" न चुनें)। \"मेरा सेव डेटा मिटाएँ\" से ये भी मिट जाते हैं।",
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
// - `skills` lists ONLY skills with evidence that this provider offers them now
//   (`evidence` says where we saw it). Claims we could not confirm go in
//   `unverifiedSkills`: they are shown as "not confirmed" and are NEVER used to
//   match a course to a skill. A record may have no verified skills at all — then
//   it is a general place to look, not a match for any skill.

const COST = {
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
const SKILL_INDIA = {
  url: "https://www.skillindiadigital.gov.in/",
  name: tx("Skill India Digital Hub", "स्किल इंडिया डिजिटल हब"),
  text: tx("The Ministry of Skill Development's platform for skill courses, certificates and job links. We have not verified which courses are free.", "कौशल विकास मंत्रालय का प्लेटफ़ॉर्म — हुनर कोर्स, प्रमाणपत्र और नौकरी के लिंक। कौन-से कोर्स मुफ़्त हैं, यह हमने नहीं जाँचा।")
};

return { COST, PROVIDER_TYPES, COURSES, SKILL_INDIA };
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
      o("excel", "Spreadsheets (MS Excel / LibreOffice Calc)", "स्प्रेडशीट (MS एक्सेल / LibreOffice Calc)"),
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

/** Only skills with evidence count (see data/courses.js). Broken records count as none. */
function verifiedSkills(course) {
  return course && Array.isArray(course.skills) ? course.skills : [];
}

function evaluateCourse(course, profile, gapSkills) {
  const skills = verifiedSkills(course);
  const covers = skills.filter((s) => gapSkills.includes(s));
  const already = skills.filter((s) => profile.skills.includes(s));
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

/**
 * Courses for the "browse by skill" view. With a skill, only providers with a
 * VERIFIED offering of exactly that skill are returned — never a provider whose
 * claim is unconfirmed, or one that only teaches a similar or related skill.
 * An empty list means "no verified provider", and the page says so.
 */
function coursesForSkill(skill, courses) {
  if (!Array.isArray(courses)) return [];
  return courses
    .filter((c) => c && c.id && c.title && (!skill || verifiedSkills(c).includes(skill)))
    .sort((a, b) => ((COST_RANK[a.cost] ?? 3) - (COST_RANK[b.cost] ?? 3)) ||
      ((PROVIDER_RANK[a.providerType] ?? 3) - (PROVIDER_RANK[b.providerType] ?? 3)));
}

return { skillGaps, verifiedSkills, evaluateCourse, recommendCourses, coursesForSkill };
})();

// ===== data/quiz.js =====
__mods["data/quiz.js"] = (function () {
// "What do I enjoy?" interest quiz — original questions written for CareerSaathi AI.
// Six broad interest areas (an idea widely used in career guidance). This is a simple
// self-check to start a conversation, not a scientific or psychometric test.

const tx = (en, hi) => ({ en, hi });

const QUIZ_AREAS = [
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
const QUESTIONS = [
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
const ANSWERS = [
  { value: 2, en: "Yes, I enjoy this", hi: "हाँ, मुझे पसंद है" },
  { value: 1, en: "Sometimes / not sure", hi: "कभी-कभी / पता नहीं" },
  { value: 0, en: "No", hi: "नहीं" }
];

return { QUIZ_AREAS, QUESTIONS, ANSWERS };
})();

// ===== data/roadmap.js =====
__mods["data/roadmap.js"] = (function () {
// "What after 10th / 12th?" roadmap. General guidance only.
// RULES: no fees, salaries, seat numbers or exam dates. Durations are the usual ones
// and are written with "usually". Every path links to an official website.
// Checked: 2026-10-22 (DGT for ITI, Apprenticeship India, NTA, NIOS, Skill India Digital).

const tx = (en, hi) => ({ en, hi });
const ROADMAP_CHECKED = "2026-10-22";

const STAGES = [
  { id: "after10", name: tx("After Class 10", "10वीं के बाद"), icon: "🎒" },
  { id: "after12", name: tx("After Class 12", "12वीं के बाद"), icon: "🎓" }
];

// areas = quiz interest areas this path often suits (used to highlight paths).
const PATHS = [
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

return { ROADMAP_CHECKED, STAGES, PATHS };
})();

// ===== data/vacancies.js =====
__mods["data/vacancies.js"] = (function () {
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

const LIST_UPDATED = "2026-10-23";

const tx = (en, hi) => ({ en, hi });
const GRAD = ["graduation", "postgraduation", "professional"];

const VACANCIES = [
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

return { LIST_UPDATED, VACANCIES };
})();

// ===== js/vacancy-match.js =====
__mods["js/vacancy-match.js"] = (function () {
// Open-recruitment logic. Pure functions — tested in Node.
//
// Everything is worked out from TODAY'S date on the visitor's device:
//   upcoming (not open yet) · open · closing soon (≤ 7 days) · closed
// "Verified active vacancy" is used ONLY for records checked against the
// official notice AND open today. Everything else says "confirm officially".

const { normalizeProfile } = __mods["js/profile-model.js"];
const { userLevels } = __mods["js/engine.js"];
const CLOSING_SOON_DAYS = 7;
const STALE_DAYS = 90;          // scheme/course facts older than this get a warning
const STALE_LIST_DAYS = 14;     // the vacancy list itself should be refreshed weekly

const msg = (key, vars = {}) => ({ key, vars });

/** Today's date as "YYYY-MM-DD" in the visitor's own time zone. */
function todayISO(now = new Date()) {
  const y = now.getFullYear();
  const m = String(now.getMonth() + 1).padStart(2, "0");
  const d = String(now.getDate()).padStart(2, "0");
  return `${y}-${m}-${d}`;
}

/** Whole days from date a to date b ("YYYY-MM-DD"), ignoring time zones. */
function daysBetween(a, b) {
  const [ay, am, ad] = a.split("-").map(Number);
  const [by, bm, bd] = b.split("-").map(Number);
  return Math.round((Date.UTC(by, bm - 1, bd) - Date.UTC(ay, am - 1, ad)) / 86400000);
}

/** "upcoming" | "open" | "closing-soon" | "closed", plus day counts. */
function vacancyStatus(v, today) {
  if (today < v.opens) return { status: "upcoming", daysToOpen: daysBetween(today, v.opens), daysLeft: daysBetween(today, v.closes) };
  if (today > v.closes) return { status: "closed", daysLeft: -1 };
  const daysLeft = daysBetween(today, v.closes); // 0 = last day today
  return { status: daysLeft <= CLOSING_SOON_DAYS ? "closing-soon" : "open", daysLeft };
}

const isActive = (s) => s === "open" || s === "closing-soon";

/** How old a "checked" date is, in days (never negative). */
function ageInDays(checkedISO, today) {
  return Math.max(0, daysBetween(checkedISO, today));
}

/** Compares one vacancy with a profile. Never says "eligible" — only what fits and what to check. */
function matchVacancy(v, rawProfile, today) {
  const p = normalizeProfile(rawProfile);
  const st = vacancyStatus(v, today);
  const reasons = [];
  const checks = [];
  let fit = "check"; // "fits-recorded" | "check" | "not-met"

  // Qualification
  const levels = userLevels(p);
  let eduOk = null;
  if (Array.isArray(v.education)) {
    if (!levels.length) eduOk = null;
    else if (levels.some((l) => v.education.includes(l))) eduOk = true;
    else if (levels.every((l) => l === "other")) eduOk = null;
    else eduOk = false;
  }
  if (eduOk === true) reasons.push(msg("vac.why.edu", { level: levels.find((l) => v.education.includes(l)) }));
  if (eduOk === false) checks.push(msg("vac.check.eduNo"));
  if (eduOk === null) checks.push(msg("vac.check.edu"));

  // Goal
  if (p.goals.includes("govt-job")) reasons.push(msg("vac.why.goal"));

  // Age — we only know an exact age if the person chose to give it.
  const age = p.eligibility.exactAge;
  if (v.age && Number.isInteger(age)) {
    if (v.age.min && age < v.age.min) checks.push(msg("vac.check.ageYoung", { min: v.age.min }));
    else if (v.age.maxGeneral && age > v.age.maxGeneral) {
      const reserved = ["obc", "sc", "st", "ews"].includes(p.eligibility.category) ||
        p.eligibility.pwd === "yes" || p.eligibility.exServiceman === "yes";
      checks.push(msg(reserved ? "vac.check.ageRelax" : "vac.check.ageOld", { max: v.age.maxGeneral }));
    }
  }
  if (v.age) checks.push(msg("vac.check.ageDate", { date: v.age.asOn }));

  // Experience
  if (v.experienceYears > 0) checks.push(msg("vac.check.exp", { n: v.experienceYears }));

  // State-level recruitment
  if (v.state) {
    if (p.state === v.state) reasons.push(msg("vac.why.state"));
    else checks.push(msg("vac.check.state"));
  }

  // Source quality
  if (v.verification !== "official-notice") checks.push(msg("vac.check.reported"));
  checks.push(msg("vac.check.notice"));

  if (eduOk === false) fit = "not-met";
  else if (eduOk === true && !(v.state && p.state !== v.state)) fit = "fits-recorded";

  const verifiedActive = v.verification === "official-notice" && isActive(st.status);
  const relevant = fit !== "not-met" && (p.goals.includes("govt-job") || eduOk === true);

  return { vacancy: v, ...st, fit, relevant, verifiedActive, reasons, checks };
}

/**
 * All vacancies that are not closed, with match info.
 * Order: relevant for this person first, then clear matches before "check" ones,
 * then open/closing-soon before upcoming, then the soonest closing date.
 */
function listVacancies(vacancies, rawProfile, today) {
  if (!Array.isArray(vacancies)) return [];
  const out = [];
  for (const v of vacancies) {
    try {
      const r = matchVacancy(v, rawProfile, today);
      if (r.status !== "closed") out.push(r);
    } catch { /* skip a broken record */ }
  }
  const rank = { "closing-soon": 0, open: 1, upcoming: 2 };
  const fitRank = { "fits-recorded": 0, check: 1, "not-met": 2 };
  return out.sort((a, b) =>
    (Number(b.relevant) - Number(a.relevant)) ||
    (fitRank[a.fit] - fitRank[b.fit]) ||
    (rank[a.status] - rank[b.status]) ||
    (a.vacancy.closes < b.vacancy.closes ? -1 : a.vacancy.closes > b.vacancy.closes ? 1 : 0));
}

/** Open (not upcoming) vacancies that match the profile — for dashboard & recommendations. */
function openMatches(vacancies, rawProfile, today) {
  return listVacancies(vacancies, rawProfile, today).filter((r) => r.relevant && isActive(r.status));
}

return { todayISO, daysBetween, vacancyStatus, ageInDays, matchVacancy, listVacancies, openMatches, CLOSING_SOON_DAYS, STALE_DAYS, STALE_LIST_DAYS, isActive };
})();

// ===== data/private-roles.js =====
__mods["data/private-roles.js"] = (function () {
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

const ROLES = [
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

return { ROLES };
})();

// ===== data/pj-options.js =====
__mods["data/pj-options.js"] = (function () {
// Answer lists for the Private Job Finder form (English + Hindi).
// Kept separate from data/options.js so the existing Career Profile is not affected.

const o = (id, en, hi, extra = {}) => ({ id, en, hi, ...extra });

// rank = rough order of formal education, used only to compare with what employers
// usually ask. "other" has no rank, so it is never used to rule anyone out.
const PJ_EDUCATION = [
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

const PJ_STREAMS = [
  o("science", "Science", "साइंस"),
  o("commerce", "Commerce", "कॉमर्स"),
  o("arts", "Arts / Humanities", "आर्ट्स"),
  o("technical", "Technical / Engineering / ITI trade", "तकनीकी / इंजीनियरिंग / ITI ट्रेड"),
  o("computers", "Computers / IT", "कंप्यूटर / IT"),
  o("health", "Health / Nursing / Pharmacy", "स्वास्थ्य / नर्सिंग / फ़ार्मेसी"),
  o("other", "Other", "अन्य")
];

const PJ_STUDY_STATUS = [
  o("completed", "Completed", "पूरी हो गई"),
  o("studying", "Currently studying", "अभी पढ़ रहे हैं")
];

const PJ_INSTITUTION = [
  o("government", "Government", "सरकारी"),
  o("private", "Private", "प्राइवेट"),
  o("open", "Open / distance learning", "ओपन / दूरस्थ शिक्षा"),
  o("other", "Other", "अन्य")
];

const PJ_CERTS = [
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
// courseSkills = the SAME skill in data/courses.js, used to find courses. Only exact
//   equivalents are listed. A related skill is never used as a stand-in (for
//   example "data entry" is not mapped to typing courses, and "mechanical work"
//   is not mapped to repair courses), so a provider is never shown for a skill it
//   was not verified to teach. [] = no equivalent → only verified extra options.
const PJ_SKILLS = [
  o("computer-basics", "Basic computer & internet", "बेसिक कंप्यूटर और इंटरनेट", { learn: "course", courseSkills: ["basic-computer"] }),
  o("ms-office", "Office software (Word, Excel or similar)", "ऑफ़िस सॉफ़्टवेयर (वर्ड, एक्सेल या ऐसे)", { learn: "course", courseSkills: ["excel"] }),
  o("typing", "Typing (Hindi / English)", "टाइपिंग (हिंदी / अंग्रेज़ी)", { learn: "course", courseSkills: ["typing"] }),
  o("data-entry", "Data entry", "डेटा एंट्री", { learn: "course", courseSkills: [] }),
  o("communication", "Talking clearly with people", "लोगों से साफ़ बात करना", { learn: "practice", courseSkills: [] }),
  o("spoken-english", "Spoken English", "अंग्रेज़ी बोलना", { learn: "course", courseSkills: ["spoken-english"] }),
  o("customer-service", "Customer service", "ग्राहक सेवा", { learn: "course", courseSkills: ["customer-service"] }),
  o("sales", "Sales & marketing", "सेल्स और मार्केटिंग", { learn: "practice", courseSkills: ["sales"] }),
  o("accounting", "Accounting & billing (Tally, GST)", "अकाउंटिंग और बिलिंग (टैली, GST)", { learn: "course", courseSkills: ["accounting", "tally"] }),
  o("retail-ops", "Shop / showroom work (counter, display, stock)", "दुकान / शोरूम का काम (काउंटर, डिस्प्ले, स्टॉक)", { learn: "practice", courseSkills: [] }),
  o("inventory", "Inventory & warehouse work", "इन्वेंटरी और गोदाम का काम", { learn: "practice", courseSkills: [] }),
  o("manufacturing", "Factory / production / machine work", "फ़ैक्ट्री / प्रोडक्शन / मशीन का काम", { learn: "practice", courseSkills: [] }),
  o("electrical", "Electrical work", "बिजली का काम", { learn: "licence", courseSkills: ["electrician"] }),
  o("mechanical", "Mechanical / fitter work", "मैकेनिकल / फ़िटर का काम", { learn: "practice", courseSkills: [] }),
  o("repair", "Repair (mobile, appliance, vehicle)", "मरम्मत (मोबाइल, उपकरण, गाड़ी)", { learn: "course", courseSkills: ["repair"] }),
  o("driving", "Driving (with licence)", "ड्राइविंग (लाइसेंस के साथ)", { learn: "licence", courseSkills: ["driving"] }),
  o("hospitality", "Hotel, restaurant & food service", "होटल, रेस्टोरेंट और खाना परोसना", { learn: "practice", courseSkills: [] }),
  o("healthcare", "Healthcare support (patient care)", "स्वास्थ्य सहायता (मरीज़ की देखभाल)", { learn: "licence", courseSkills: [] }),
  o("teaching", "Teaching & training", "पढ़ाना और ट्रेनिंग देना", { learn: "practice", courseSkills: ["teaching"] }),
  o("digital-marketing", "Digital marketing", "डिजिटल मार्केटिंग", { learn: "course", courseSkills: ["digital-marketing"] }),
  o("programming", "Programming & IT", "प्रोग्रामिंग और IT", { learn: "course", courseSkills: ["programming", "webdev"] }),
  o("graphic-design", "Graphic design", "ग्राफ़िक डिज़ाइन", { learn: "course", courseSkills: ["graphic-design"] }),
  o("hr", "HR & recruitment basics", "HR और भर्ती की बुनियाद", { learn: "course", courseSkills: [] }),
  o("team-lead", "Leading a small team", "छोटी टीम संभालना", { learn: "practice", courseSkills: [] })
];

// years = the smallest number of years this answer means.
const PJ_EXPERIENCE = [
  o("none", "No work experience", "कोई काम का अनुभव नहीं", { years: 0 }),
  o("fresher", "Fresher (just finished studies)", "फ़्रेशर (अभी पढ़ाई पूरी की)", { years: 0 }),
  o("lt1", "Less than 1 year", "1 साल से कम", { years: 0.5 }),
  o("y1-3", "1–3 years", "1–3 साल", { years: 1 }),
  o("y3-5", "3–5 years", "3–5 साल", { years: 3 }),
  o("y5", "More than 5 years", "5 साल से ज़्यादा", { years: 5 })
];

const PJ_CATEGORIES = [
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

const PJ_EMP_TYPES = [
  o("full-time", "Full-time", "फ़ुल-टाइम"),
  o("part-time", "Part-time", "पार्ट-टाइम"),
  o("contract", "Contract", "कॉन्ट्रैक्ट"),
  o("internship", "Internship", "इंटर्नशिप"),
  o("apprenticeship", "Apprenticeship", "अप्रेंटिसशिप"),
  o("freelance", "Freelance", "फ़्रीलांस")
];

const PJ_WORK_MODES = [
  o("onsite", "At the workplace (on-site)", "कार्यस्थल पर (ऑन-साइट)"),
  o("hybrid", "Hybrid (some days from home)", "हाइब्रिड (कुछ दिन घर से)"),
  o("remote", "Remote (from home)", "रिमोट (घर से)"),
  o("any", "Any", "कोई भी")
];

const PJ_SHIFTS = [
  o("day", "Day shift", "दिन की शिफ़्ट"),
  o("night", "Night shift", "रात की शिफ़्ट"),
  o("rotational", "Rotational shift", "बदलती शिफ़्ट"),
  o("flexible", "Flexible / any", "कोई भी / लचीला")
];

const PJ_AVAILABILITY = [
  o("now", "Can join immediately", "तुरंत जॉइन कर सकते हैं"),
  o("month", "Within a month", "एक महीने में"),
  o("later", "Later (after studies etc.)", "बाद में (पढ़ाई के बाद आदि)")
];

const PJ_EMPLOYER_TYPES = [
  o("local-business", "Small local business", "छोटा स्थानीय व्यवसाय"),
  o("local-retail", "Local showroom / retail chain", "स्थानीय शोरूम / रिटेल चेन"),
  o("sme", "Small or medium company", "छोटी या मध्यम कंपनी"),
  o("large-domestic", "Large Indian company", "बड़ी भारतीय कंपनी"),
  o("mnc", "Multinational company (MNC)", "बहुराष्ट्रीय कंपनी (MNC)"),
  o("startup", "Startup", "स्टार्टअप"),
  o("apprentice-scheme", "Government-supported apprenticeship / training", "सरकार-समर्थित अप्रेंटिसशिप / ट्रेनिंग")
];

const PJ_LOCATION_PREF = [
  o("near-home", "Near my home / district", "घर / ज़िले के पास"),
  o("state", "Anywhere in my state", "अपने राज्य में कहीं भी"),
  o("india", "Anywhere in India", "भारत में कहीं भी"),
  o("remote", "Work from home only", "सिर्फ़ घर से काम")
];

const PJ_RADIUS = [
  o("5", "Up to 5 km", "5 किमी तक"),
  o("10", "Up to 10 km", "10 किमी तक"),
  o("25", "Up to 25 km", "25 किमी तक"),
  o("50", "Up to 50 km", "50 किमी तक"),
  o("any", "Distance doesn't matter", "दूरी से फ़र्क़ नहीं")
];

const PJ_LANGUAGES = [
  o("hindi", "Hindi", "हिंदी"),
  o("english", "English", "अंग्रेज़ी"),
  o("both", "Hindi and English", "हिंदी और अंग्रेज़ी"),
  o("regional", "Another Indian language", "कोई और भारतीय भाषा")
];

const PJ_YES_NO = [
  o("yes", "Yes", "हाँ"),
  o("no", "No", "नहीं")
];

function pjLabel(list, id, lang = "en") {
  const item = list.find((x) => x.id === id);
  return item ? item[lang] || item.en : "";
}

return { pjLabel, PJ_EDUCATION, PJ_STREAMS, PJ_STUDY_STATUS, PJ_INSTITUTION, PJ_CERTS, PJ_SKILLS, PJ_EXPERIENCE, PJ_CATEGORIES, PJ_EMP_TYPES, PJ_WORK_MODES, PJ_SHIFTS, PJ_AVAILABILITY, PJ_EMPLOYER_TYPES, PJ_LOCATION_PREF, PJ_RADIUS, PJ_LANGUAGES, PJ_YES_NO };
})();

// ===== data/salary.js =====
__mods["data/salary.js"] = (function () {
// Salary data for the Private Job Finder.
//
// SOURCE: PayScale India role pages, read on 2026-10-23. PayScale publishes
// self-reported base pay with the 10th–90th percentile range, the number of
// salary profiles and a "last updated" date. We copy those numbers exactly.
//
// HOW THE SITE USES THEM (see salaryView in js/pj-model.js):
// - Shown only when there are at least 40 profiles, the data was updated within
//   the last 2 years and the range is not extremely wide. Otherwise the site says
//   "Not publicly verified" instead of showing a weak number.
// - Annual figures are divided by 12 and rounded, and always called "approximate".
// - These are national figures from people who report salaries online — often
//   in cities and bigger companies. Small-town pay is often lower.
// To update: open each url, copy the numbers, change `updated` and ACCESSED.

const SALARY_SOURCE = { name: "PayScale India", url: "https://www.payscale.com/research/IN/Country=India/Salary" };
const SALARY_ACCESSED = "2026-10-23";

const s = (id, title, avg, p10, p90, profiles, updated, path) =>
  ({ id, title, avg, p10, p90, profiles, updated, url: `https://www.payscale.com/research/IN/Job=${path}/Salary` });

const SALARIES = [
  s("retail-sales-associate", "Retail Sales Associate", 282597, 136000, 510000, 132, "2025-01-08", "Retail_Sales_Associate"),
  s("customer-service", "Customer Service Representative (CSR)", 342279, 194000, 604000, 560, "2026-06-25", "Customer_Service_Representative_(CSR)"),
  s("office-assistant", "Office Assistant", 239313, 119000, 414000, 89, "2026-06-13", "Office_Assistant"),
  s("data-entry", "Data Entry Operator", 237177, 119000, 456000, 258, "2026-06-18", "Data_Entry_Operator"),
  s("accountant", "Accountant", 310467, 151000, 623000, 1195, "2026-06-25", "Accountant"),
  s("receptionist", "Receptionist", 208717, 100000, 795000, 37, "2026-05-05", "Receptionist"),
  s("retail-store-manager", "Retail Store Manager", 466926, 229000, 985000, 204, "2026-03-28", "Retail_Store_Manager"),
  s("computer-operator", "Computer Operator", 248106, 113000, 510000, 152, "2026-04-20", "Computer_Operator"),
  s("electrician", "Electrician", 292373, 97000, 618000, 125, "2026-03-07", "Electrician"),
  s("machine-operator", "Machine Operator", 220000, 120000, 4000000, 10, "2023-03-13", "Machine_Operator"),
  s("software-developer", "Software Developer (all experience levels)", 716462, 289000, 2000000, 2101, "2026-10-10", "Software_Developer"),
  s("web-developer", "Web Developer", 421634, 180000, 1000000, 569, "2026-07-12", "Web_Developer"),
  s("digital-marketing", "Digital Marketing Specialist", 396465, 198000, 836000, 250, "2026-06-09", "Digital_Marketing_Specialist"),
  s("graphic-designer", "Graphic Designer", 364761, 176000, 820000, 987, "2026-07-02", "Graphic_Designer"),
  s("delivery-driver", "Delivery Driver", 295898, 99000, 2000000, 50, "2026-01-16", "Delivery_Driver"),
  s("hr-generalist", "Human Resources (HR) Generalist", 458059, 226000, 1000000, 671, "2026-07-02", "Human_Resources_(HR)_Generalist"),
  s("sales-executive", "Sales Executive", 288011, 155000, 493000, 125, "2025-03-17", "Sales_Executive"),
  s("field-service-technician", "Field Service Technician", 254866, 122000, 562000, 47, "2025-02-05", "Field_Service_Technician"),
  s("teacher", "Teacher", 298747, 115000, 646000, 311, "2023-10-12", "Teacher"),
  s("nursing-assistant", "Nursing Assistant", 250000, 73000, 690000, 24, "2022-07-23", "Nursing_Assistant"),
  s("warehouse-associate", "Warehouse Associate", 256072, 122000, 779000, 19, "2025-07-19", "Warehouse_Associate"),
  s("technical-support", "Technical Support Engineer", 485191, 246000, 1000000, 463, "2026-05-06", "Technical_Support_Engineer"),
  s("inventory-controller", "Inventory Controller", 513491, 292000, 2000000, 17, "2025-01-16", "Inventory_Controller")
];

return { SALARY_SOURCE, SALARY_ACCESSED, SALARIES };
})();

// ===== data/companies.js =====
__mods["data/companies.js"] = (function () {
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

const COMPANIES_CHECKED = "2026-10-23";

const tx = (en, hi) => ({ en, hi });
const wiki = (page) => `https://en.wikipedia.org/wiki/${page}`;

const COMPANY_TYPES = [
  { id: "domestic", en: "Indian company", hi: "भारतीय कंपनी" },
  { id: "mnc", en: "Multinational (MNC)", hi: "बहुराष्ट्रीय (MNC)" },
  { id: "mnc-owned", en: "Indian company, foreign parent", hi: "भारतीय कंपनी, विदेशी मूल कंपनी" }
];

const INDUSTRIES = [
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

const COMPANIES = [
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
const VERIFY_TOOLS = [
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
const REVIEW_SITES = [
  { name: "AmbitionBox", url: "https://www.ambitionbox.com/" },
  { name: "Glassdoor", url: "https://www.glassdoor.co.in/" },
  { name: "Indeed (company reviews)", url: "https://in.indeed.com/companies" }
];

return { COMPANIES_CHECKED, COMPANY_TYPES, INDUSTRIES, COMPANIES, VERIFY_TOOLS, REVIEW_SITES };
})();

// ===== data/learning-extra.js =====
__mods["data/learning-extra.js"] = (function () {
// Extra learning options for the "Courses & Skill Development" page (Private Job Finder).
// They are added to the existing list in data/courses.js. Providers with a VERIFIED
// skill offering live in data/courses.js (so the Courses page and this page agree);
// this file mainly holds general portals and practical programmes.
//
// HONESTY RULES
// - cost is filled only from the provider's own page on `checked`:
//     "free" = the provider says it is free · "fee" = a fee applies · null = not verified
//   We never show prices (they change and differ by course).
// - cert: "recognised" = a government / statutory certificate;
//         "provider"   = a certificate from the company or platform (not a government qualification);
//         null         = no certificate claim checked.
// - skills = ids from data/pj-options.js (PJ_SKILLS), ONLY where the provider's own
//   page (checkedFrom) shows a course for that skill. Platforms whose pages we could
//   not read in detail have skills: [] — they are shown as "general places to
//   search", never as a verified match for a skill.
// - No ratings, reviews or placement numbers — we could not verify them.

const EXTRA_CHECKED = "2026-10-23";
const tx = (en, hi) => ({ en, hi });
const x = (o) => ({ beginner: false, govt: false, practical: false, cert: null, cost: null, costNote: null, eduMax: null, checked: EXTRA_CHECKED, ...o });

const EXTRA_LEARNING = [
  x({
    id: "skill-india-digital", kind: "govt", mode: "both", govt: true, beginner: true,
    title: tx("Skill India Digital Hub — courses and training centres", "स्किल इंडिया डिजिटल हब — कोर्स और ट्रेनिंग सेंटर"),
    provider: tx("Ministry of Skill Development & Entrepreneurship", "कौशल विकास और उद्यमिता मंत्रालय"),
    url: "https://www.skillindiadigital.gov.in/",
    skills: [],
    about: tx("Government portal listing online courses and nearby training centres (including PMKVY). Costs and certificates differ by course — check each listing.", "सरकारी पोर्टल, जिस पर ऑनलाइन कोर्स और पास के ट्रेनिंग सेंटर (PMKVY सहित) मिलते हैं। हर कोर्स की फ़ीस और प्रमाणपत्र अलग हैं — हर लिस्टिंग में देखें।"),
    language: tx("Several Indian languages", "कई भारतीय भाषाएँ"),
    checkedFrom: tx("Official portal (address)", "आधिकारिक पोर्टल (पता)")
  }),
  x({
    id: "jss", kind: "offline", mode: "offline", govt: true, beginner: true, eduMax: 3,
    title: tx("Jan Shikshan Sansthan (JSS) — vocational training", "जन शिक्षण संस्थान (JSS) — व्यावसायिक प्रशिक्षण"),
    provider: tx("Ministry of Skill Development & Entrepreneurship (through NGOs)", "कौशल विकास और उद्यमिता मंत्रालय (NGO के ज़रिए)"),
    url: "https://skilldevelopment.gov.in/schemes-initiatives/Other-Schemes-and-Initiatives/Jan-Shikshan-Sansthan-JSS",
    skills: [],
    about: tx("Skill training in districts for non-literates, neo-literates and school dropouts (up to Class 12), with a focus on rural areas, women and disadvantaged groups. Fees are not stated on the ministry page — ask your local JSS.", "ज़िलों में निरक्षर, नव-साक्षर और स्कूल छोड़ चुके (12वीं तक) लोगों के लिए हुनर प्रशिक्षण; ग्रामीण क्षेत्र, महिलाओं और वंचित वर्गों पर ज़ोर। मंत्रालय के पेज पर फ़ीस नहीं लिखी — अपने स्थानीय JSS से पूछें।"),
    language: tx("Local language", "स्थानीय भाषा"),
    checkedFrom: tx("Ministry of Skill Development scheme page", "कौशल विकास मंत्रालय का योजना पेज")
  }),
  x({
    id: "apprenticeship-india", kind: "practical", mode: "offline", govt: true, practical: true, beginner: true,
    title: tx("Apprenticeship (earn while you learn)", "अप्रेंटिसशिप (सीखते हुए कमाएँ)"),
    provider: tx("Apprenticeship India portal (Government of India)", "अप्रेंटिसशिप इंडिया पोर्टल (भारत सरकार)"),
    url: "https://www.apprenticeshipindia.gov.in/",
    skills: [],
    about: tx("On-the-job training at real companies with a monthly stipend, under the Apprentices Act. Openings and stipends are listed on the portal.", "अप्रेंटिस अधिनियम के तहत असली कंपनियों में काम पर ट्रेनिंग, हर महीने स्टाइपेंड के साथ। अवसर और स्टाइपेंड पोर्टल पर दिए होते हैं।"),
    cert: "recognised", language: tx("Depends on the employer", "नियोक्ता पर निर्भर"),
    checkedFrom: tx("Official portal (address)", "आधिकारिक पोर्टल (पता)")
  }),
  x({
    id: "nats", kind: "practical", mode: "offline", govt: true, practical: true,
    title: tx("NATS apprenticeship for graduates and diploma holders", "ग्रेजुएट और डिप्लोमा वालों के लिए NATS अप्रेंटिसशिप"),
    provider: tx("Ministry of Education (Boards of Apprenticeship Training)", "शिक्षा मंत्रालय (बोर्ड्स ऑफ़ अप्रेंटिसशिप ट्रेनिंग)"),
    url: "https://nats.education.gov.in/",
    skills: [],
    about: tx("Apprenticeship training through the NATS 2.0 portal. The government pays a share of the stipend by DBT; e-KYC is required.", "NATS 2.0 पोर्टल से अप्रेंटिसशिप ट्रेनिंग। स्टाइपेंड का सरकारी हिस्सा DBT से मिलता है; e-KYC ज़रूरी है।"),
    cert: "recognised", language: tx("Depends on the employer", "नियोक्ता पर निर्भर"),
    checkedFrom: tx("NATS portal notice", "NATS पोर्टल की सूचना")
  }),
  x({
    id: "microsoft-learn", kind: "free-online", mode: "online",
    title: tx("Microsoft Learn — Office, data and cloud skills", "माइक्रोसॉफ़्ट लर्न — ऑफ़िस, डेटा और क्लाउड हुनर"),
    provider: tx("Microsoft (private company)", "माइक्रोसॉफ़्ट (निजी कंपनी)"),
    url: "https://learn.microsoft.com/en-us/training/",
    skills: [],
    about: tx("Self-paced modules and learning paths. The page we read did not state costs — check before registering for any instructor-led course or exam.", "अपनी गति से पढ़ने वाले मॉड्यूल। हमने जो पेज पढ़ा उसमें ख़र्च नहीं लिखा — किसी इंस्ट्रक्टर कोर्स या परीक्षा से पहले जाँच लें।"),
    cert: "provider", language: tx("English and other languages", "अंग्रेज़ी और अन्य भाषाएँ"),
    checkedFrom: tx("Microsoft Learn training page", "माइक्रोसॉफ़्ट लर्न ट्रेनिंग पेज")
  }),
  x({
    id: "coursera", kind: "paid-online", mode: "online", cost: "fee",
    costNote: tx("A paid platform. Prices and any free or financial-aid options are shown on each course page — not checked by us.", "फ़ीस वाला प्लेटफ़ॉर्म। क़ीमत और कोई मुफ़्त या आर्थिक-सहायता विकल्प हर कोर्स पेज पर दिखता है — हमने नहीं जाँचा।"),
    title: tx("Coursera — university and company courses", "कोर्सेरा — विश्वविद्यालय और कंपनियों के कोर्स"),
    provider: tx("Coursera (private platform)", "कोर्सेरा (निजी प्लेटफ़ॉर्म)"),
    url: "https://www.coursera.org/",
    skills: [],
    about: tx("Online courses and professional certificates from universities and companies.", "विश्वविद्यालयों और कंपनियों के ऑनलाइन कोर्स और प्रोफ़ेशनल सर्टिफ़िकेट।"),
    cert: "provider", language: tx("Mostly English", "ज़्यादातर अंग्रेज़ी"),
    checkedFrom: tx("Platform address only", "सिर्फ़ प्लेटफ़ॉर्म का पता")
  }),
  x({
    id: "udemy", kind: "paid-online", mode: "online", cost: "fee",
    costNote: tx("A paid marketplace of courses by independent instructors. Quality varies — read the syllabus before paying.", "स्वतंत्र प्रशिक्षकों के फ़ीस वाले कोर्स का बाज़ार। गुणवत्ता अलग-अलग होती है — पैसे देने से पहले सिलेबस पढ़ें।"),
    title: tx("Udemy — recorded practical courses", "यूडेमी — रिकॉर्डेड व्यावहारिक कोर्स"),
    provider: tx("Udemy (private platform)", "यूडेमी (निजी प्लेटफ़ॉर्म)"),
    url: "https://www.udemy.com/",
    skills: [],
    about: tx("Recorded courses on many job skills, including some in Hindi.", "कई नौकरी वाले हुनर पर रिकॉर्डेड कोर्स, कुछ हिंदी में भी।"),
    cert: "provider", language: tx("English, some Hindi", "अंग्रेज़ी, कुछ हिंदी"),
    checkedFrom: tx("Platform address only", "सिर्फ़ प्लेटफ़ॉर्म का पता")
  }),
  x({
    id: "ncs-counselling", kind: "govt", mode: "both", govt: true, beginner: true, cost: "free",
    costNote: tx("NCS states it charges no fee at any stage of registration, job application or interview processing.", "NCS के अनुसार पंजीकरण, आवेदन या इंटरव्यू के किसी चरण में फ़ीस नहीं ली जाती।"),
    title: tx("National Career Service — counselling, job fairs and private jobs", "नेशनल करियर सर्विस — काउंसलिंग, रोज़गार मेले और प्राइवेट नौकरियाँ"),
    provider: tx("Ministry of Labour & Employment", "श्रम और रोज़गार मंत्रालय"),
    url: "https://www.ncs.gov.in/",
    skills: [],
    about: tx("Free career counselling, job fairs, a resume builder and private job listings.", "मुफ़्त करियर काउंसलिंग, रोज़गार मेले, रिज़्यूमे बिल्डर और प्राइवेट नौकरियाँ।"),
    language: tx("English and Hindi", "अंग्रेज़ी और हिंदी"),
    checkedFrom: tx("NCS home page and FAQ", "NCS होम पेज और FAQ")
  })
];

return { EXTRA_CHECKED, EXTRA_LEARNING };
})();

// ===== js/pj-model.js =====
__mods["js/pj-model.js"] = (function () {
// Private Job Finder — pure logic (no page code), tested in Node.
//
// What it does honestly:
// - Compares the person's profile with GENERAL role requirements (data/private-roles.js).
// - It does not search live vacancies (this site has no server). Instead it builds
//   search links to real job portals and lists companies whose business commonly
//   needs that role — clearly saying no vacancy was verified.
// - Every result is a message { key, vars } so the page can show English or Hindi.

const { PJ_EDUCATION, PJ_SKILLS, PJ_EXPERIENCE, PJ_CATEGORIES, PJ_EMP_TYPES, PJ_WORK_MODES, PJ_SHIFTS, PJ_AVAILABILITY, PJ_EMPLOYER_TYPES, PJ_LOCATION_PREF, PJ_RADIUS, PJ_LANGUAGES, PJ_STREAMS, PJ_STUDY_STATUS, PJ_INSTITUTION, PJ_CERTS } = __mods["data/pj-options.js"];
const { ROLES } = __mods["data/private-roles.js"];
const { SALARIES } = __mods["data/salary.js"];
const { COMPANIES } = __mods["data/companies.js"];
const { COURSES } = __mods["data/courses.js"];
const { EXTRA_LEARNING } = __mods["data/learning-extra.js"];
const msg = (key, vars = {}) => ({ key, vars });
const ids = (list) => new Set(list.map((x) => x.id));
const pick = (v, list) => (typeof v === "string" && ids(list).has(v) ? v : "");
const pickMany = (v, list) => {
  const ok = ids(list);
  return Array.isArray(v) ? [...new Set(v.filter((x) => typeof x === "string" && ok.has(x)))] : [];
};
const yn = (v) => (v === "yes" || v === "no" ? v : "");
const text = (v, max = 120) => (typeof v === "string" ? v.replace(/[<>]/g, "").replace(/\s+/g, " ").trim().slice(0, max) : "");

const CATEGORY_ORDER = ["strong", "good", "entry", "training", "growth"];
const MIN_PROFILES = 40;
const MAX_SALARY_AGE_DAYS = 730;
const MAX_RANGE_RATIO = 8;

/** Turns anything (old storage, junk) into a clean, complete profile. */
function normalizePJ(raw) {
  const r = raw && typeof raw === "object" ? raw : {};
  const e = r.edu && typeof r.edu === "object" ? r.edu : {};
  const pr = r.prefs && typeof r.prefs === "object" ? r.prefs : {};
  const en = r.env && typeof r.env === "object" ? r.env : {};
  const year = Number.parseInt(e.year, 10);
  const min = Number(pr.minSalary);
  return {
    name: text(r.name, 60),
    state: typeof r.state === "string" ? r.state.slice(0, 4) : "",
    district: text(r.district, 60),
    city: text(r.city, 60),
    pin: typeof r.pin === "string" ? r.pin.replace(/\s/g, "").slice(0, 6) : "",
    locationPref: pick(r.locationPref, PJ_LOCATION_PREF),
    relocate: yn(r.relocate),
    radius: pick(r.radius, PJ_RADIUS),
    language: pick(r.language, PJ_LANGUAGES),
    edu: {
      level: pick(e.level, PJ_EDUCATION),
      stream: pick(e.stream, PJ_STREAMS),
      course: text(e.course, 80),
      year: Number.isFinite(year) ? year : null,
      status: pick(e.status, PJ_STUDY_STATUS),
      institution: pick(e.institution, PJ_INSTITUTION),
      certs: pickMany(e.certs, PJ_CERTS),
      subjects: text(e.subjects, 120)
    },
    skills: pickMany(r.skills, PJ_SKILLS),
    customSkills: text(r.customSkills, 160),
    experience: pick(r.experience, PJ_EXPERIENCE),
    pastRoles: text(r.pastRoles, 160),
    industries: text(r.industries, 120),
    internship: yn(r.internship),
    prefs: {
      cats: pickMany(pr.cats, PJ_CATEGORIES),
      targetRole: typeof pr.targetRole === "string" && ROLES.some((x) => x.id === pr.targetRole) ? pr.targetRole : "",
      title: text(pr.title, 80),
      industry: text(pr.industry, 80),
      types: pickMany(pr.types, PJ_EMP_TYPES),
      mode: pick(pr.mode, PJ_WORK_MODES),
      shift: pick(pr.shift, PJ_SHIFTS),
      minSalary: Number.isFinite(min) && min > 0 ? Math.round(min) : null,
      availability: pick(pr.availability, PJ_AVAILABILITY),
      travel: yn(pr.travel)
    },
    env: {
      employerTypes: pickMany(en.employerTypes, PJ_EMPLOYER_TYPES),
      smartphone: yn(en.smartphone),
      computer: yn(en.computer),
      internet: yn(en.internet),
      training: yn(en.training),
      certification: yn(en.certification)
    }
  };
}

function emptyPJ() { return normalizePJ({}); }

/**
 * Checks the form. Returns [{ field, key }] — empty when everything is fine.
 * step: which form step to check (1–5), or 0 for all.
 */
function validatePJ(raw, step = 0, now = new Date()) {
  const p = normalizePJ(raw);
  const r = raw && typeof raw === "object" ? raw : {};
  const errs = [];
  const want = (s) => step === 0 || step === s;
  if (want(1)) {
    if (!p.state) errs.push({ field: "state", key: "pj.err.state" });
    if (r.pin && !/^[1-9]\d{5}$/.test(String(r.pin).replace(/\s/g, ""))) errs.push({ field: "pin", key: "pj.err.pin" });
    if (!p.locationPref) errs.push({ field: "locationPref", key: "pj.err.locationPref" });
  }
  if (want(2)) {
    if (!p.edu.level) errs.push({ field: "level", key: "pj.err.level" });
    const y = r.edu && r.edu.year;
    if (y !== undefined && y !== null && y !== "") {
      const n = Number(y);
      if (!Number.isInteger(n) || n < 1960 || n > now.getFullYear() + 6) errs.push({ field: "year", key: "pj.err.year" });
    }
  }
  if (want(3)) {
    if (!p.experience) errs.push({ field: "experience", key: "pj.err.experience" });
  }
  if (want(4)) {
    if (!p.prefs.cats.length && !p.prefs.targetRole) errs.push({ field: "cats", key: "pj.err.cats" });
    const m = r.prefs && r.prefs.minSalary;
    if (m !== undefined && m !== null && m !== "") {
      const n = Number(m);
      if (!Number.isFinite(n) || n < 0 || n > 1000000) errs.push({ field: "minSalary", key: "pj.err.minSalary" });
    }
  }
  return errs;
}

// ---------- helpers ----------
function eduRank(level) {
  const item = PJ_EDUCATION.find((x) => x.id === level);
  return item ? item.rank : null;
}
function expYears(id) {
  const item = PJ_EXPERIENCE.find((x) => x.id === id);
  return item ? item.years : 0;
}
function skillLearn(id) {
  return PJ_SKILLS.find((x) => x.id === id)?.learn || "practice";
}
function roleById(id) { return ROLES.find((r) => r.id === id) || null; }

function formalMet(role, p) {
  if (!role.formal) return true;
  const certs = role.formal.anyCert || [];
  const edus = role.formal.anyEdu || [];
  return certs.some((c) => p.edu.certs.includes(c)) || edus.includes(p.edu.level);
}

function modeFits(role, p) {
  if (p.locationPref === "remote") return role.modes.includes("remote");
  const m = p.prefs.mode;
  if (!m || m === "any") return true;
  if (m === "hybrid") return role.modes.includes("hybrid") || role.modes.includes("remote");
  return role.modes.includes(m);
}
function shiftFits(role, p) {
  const s = p.prefs.shift;
  return !s || s === "flexible" || role.shifts.includes(s) || role.shifts.includes("flexible");
}
function typeFits(role, p) {
  return !p.prefs.types.length || p.prefs.types.some((t) => role.types.includes(t));
}

/** One role compared with one profile. */
function evaluateRole(role, rawProfile) {
  const p = normalizePJ(rawProfile);
  const userRank = eduRank(p.edu.level);
  const eduOk = role.eduRank === null || userRank === null || userRank >= role.eduRank;
  const formalOk = formalMet(role, p);
  const have = role.required.filter((s) => p.skills.includes(s));
  const missing = role.required.filter((s) => !p.skills.includes(s));
  const helpfulHave = role.helpful.filter((s) => p.skills.includes(s));
  const years = expYears(p.experience);
  const expOk = years >= role.expYears;
  const isTarget = p.prefs.targetRole === role.id;
  const prefCat = isTarget || role.cats.some((c) => p.prefs.cats.includes(c));
  const fits = { mode: modeFits(role, p), shift: shiftFits(role, p), type: typeFits(role, p) };
  const prefsOk = fits.mode && fits.shift && fits.type;

  let category;
  if (!eduOk || !formalOk) category = "training";
  else if (!expOk) category = "growth";
  else if (missing.length === 0) category = prefCat && prefsOk ? "strong" : "good";
  else if (missing.length === 1 && role.expYears === 0 && years < 1) category = "entry";
  else if (missing.length <= 3) category = "training";
  else category = null;

  const reasons = [];
  if (role.eduRank !== null && eduOk && userRank !== null) reasons.push(msg("pj.why.edu"));
  if (role.eduRank === null) reasons.push(msg("pj.why.noEdu"));
  if (role.formal && formalOk) reasons.push(msg("pj.why.formal"));
  if (have.length) reasons.push(msg("pj.why.skills", { skills: have }));
  if (helpfulHave.length) reasons.push(msg("pj.why.helpful", { skills: helpfulHave }));
  if (role.expYears === 0) reasons.push(msg("pj.why.fresher"));
  else if (expOk) reasons.push(msg("pj.why.exp", { n: role.expYears }));
  if (prefCat) reasons.push(msg(isTarget ? "pj.why.target" : "pj.why.cat"));
  if (p.locationPref === "remote" && role.modes.includes("remote")) reasons.push(msg("pj.why.remote"));

  const gaps = [];
  if (!eduOk) gaps.push(msg("pj.gap.edu", { rank: role.eduRank }));
  if (!formalOk) gaps.push(msg("pj.gap.formal", { role: role.id }));
  if (missing.length) gaps.push(msg("pj.gap.skills", { skills: missing }));
  if (!expOk) gaps.push(msg("pj.gap.exp", { n: role.expYears }));
  if (!fits.mode) gaps.push(msg("pj.gap.mode"));
  if (!fits.shift) gaps.push(msg("pj.gap.shift"));
  if (!fits.type) gaps.push(msg("pj.gap.type"));

  return { roleId: role.id, role, category, eduOk, formalOk, expOk, have, missing, helpfulHave, prefCat, isTarget, fits, reasons, gaps };
}

/**
 * All roles worth showing, best first.
 * Shown when: it is the person's target, OR it is in a chosen category, OR it is
 * a strong/good/entry fit anyway (so people discover options they did not think of).
 */
function matchRoles(rawProfile, roles = ROLES) {
  const p = normalizePJ(rawProfile);
  const out = [];
  for (const role of roles) {
    const r = evaluateRole(role, p);
    if (!r.category) { if (r.isTarget) out.push({ ...r, category: "training" }); continue; }
    if (p.locationPref === "remote" && !role.modes.includes("remote") && !r.isTarget) continue;
    const discover = ["strong", "good", "entry"].includes(r.category);
    if (r.prefCat || discover) out.push(r);
  }
  const rank = (c) => CATEGORY_ORDER.indexOf(c);
  return out.sort((a, b) =>
    rank(a.category) - rank(b.category) ||
    Number(b.isTarget) - Number(a.isTarget) ||
    Number(b.prefCat) - Number(a.prefCat) ||
    a.missing.length - b.missing.length ||
    b.have.length - a.have.length ||
    a.role.id.localeCompare(b.role.id));
}

// ---------- Salary ----------
function daysBetween(a, b) {
  return Math.round((Date.parse(`${b}T00:00:00Z`) - Date.parse(`${a}T00:00:00Z`)) / 86400000);
}
const round500 = (n) => Math.round(n / 500) * 500;

/**
 * Decides whether a salary record is good enough to show, and converts it to
 * approximate monthly base pay. Never invents a number.
 */
function salaryView(salaryId, todayISO) {
  const rec = SALARIES.find((s) => s.id === salaryId);
  if (!rec) return { show: false, reason: "none" };
  const base = { rec, profiles: rec.profiles, updated: rec.updated, url: rec.url };
  if (daysBetween(rec.updated, todayISO) > MAX_SALARY_AGE_DAYS) return { ...base, show: false, reason: "old" };
  if (rec.profiles < MIN_PROFILES) return { ...base, show: false, reason: "few" };
  if (rec.p90 / rec.p10 > MAX_RANGE_RATIO) return { ...base, show: false, reason: "wide" };
  return {
    ...base, show: true,
    low: round500(rec.p10 / 12), high: round500(rec.p90 / 12), avg: round500(rec.avg / 12),
    annualLow: rec.p10, annualHigh: rec.p90, limited: rec.profiles < 100
  };
}

/** How the person's minimum expected salary compares with a shown range. */
function salaryVsMin(view, minMonthly) {
  if (!view || !view.show || !minMonthly) return null;
  if (minMonthly > view.high) return "above";
  if (minMonthly < view.low) return "below";
  return "within";
}

// ---------- Companies and search links ----------
function companiesForRole(role, companies = COMPANIES) {
  return companies.filter((c) => c.cats.some((x) => role.cats.includes(x)));
}

/** Where to search live openings for a role. Links only — nothing is fetched. */
function searchLinks(role, rawProfile, stateName = "") {
  const p = normalizePJ(rawProfile);
  let place = p.city || p.district || stateName || "India";
  if (p.locationPref === "remote") place = "Remote";
  else if (p.locationPref === "india") place = "India";
  else if (p.locationPref === "state" && stateName) place = stateName;
  const q = encodeURIComponent(role.search);
  const l = encodeURIComponent(place);
  const links = [
    { id: "ncs", url: "https://www.ncs.gov.in/", official: true },
    { id: "indeed", url: `https://in.indeed.com/jobs?q=${q}&l=${l}`, official: false },
    { id: "linkedin", url: `https://www.linkedin.com/jobs/search/?keywords=${q}&location=${l}`, official: false }
  ];
  if (p.prefs.types.includes("apprenticeship") || role.types.includes("apprenticeship")) {
    links.push({ id: "apprenticeship", url: "https://www.apprenticeshipindia.gov.in/", official: true });
  }
  return { place, links };
}

// ---------- Skills gap and improvement plan ----------
function feederRoles(targetId, roles = ROLES) {
  return roles.filter((r) => r.next.includes(targetId));
}

function gapAnalysis(rawProfile, roleId, todayISO = "2026-10-23") {
  const p = normalizePJ(rawProfile);
  const role = roleById(roleId);
  if (!role) return null;
  const ev = evaluateRole(role, p);
  const missingCourse = ev.missing.filter((s) => skillLearn(s) === "course");
  const missingPractice = ev.missing.filter((s) => skillLearn(s) === "practice");
  const missingLicence = ev.missing.filter((s) => skillLearn(s) === "licence");
  const improve = role.helpful.filter((s) => !p.skills.includes(s));
  const years = expYears(p.experience);
  const expGap = Math.max(0, role.expYears - years);
  const userRank = eduRank(p.edu.level);
  const eduGap = role.eduRank !== null && userRank !== null && userRank < role.eduRank;

  const steps = [];
  if (missingCourse.length) steps.push(msg("pj.step.course", { skills: missingCourse }));
  if (!ev.formalOk || missingLicence.length) steps.push(msg("pj.step.formal", ev.formalOk ? { skills: missingLicence } : { role: role.id, skills: missingLicence }));
  if (missingPractice.length) steps.push(msg("pj.step.practice", { skills: missingPractice }));
  if (eduGap) steps.push(msg("pj.step.edu", { rank: role.eduRank }));
  if (improve.length) steps.push(msg("pj.step.improve", { skills: improve.slice(0, 3) }));
  const portfolio = ["digital-marketing", "graphic-design", "programming"].some((s) => role.required.includes(s));
  steps.push(msg(portfolio ? "pj.step.portfolio" : "pj.step.proof"));
  const feeders = feederRoles(role.id).map((r) => evaluateRole(r, p))
    .filter((r) => ["strong", "good", "entry"].includes(r.category));
  if (expGap > 0 || feeders.length) steps.push(msg("pj.step.stepping", { roles: feeders.map((f) => f.roleId), n: expGap }));
  steps.push(msg("pj.step.apply"));

  return {
    role, evaluation: ev, category: ev.category || "training",
    current: { level: p.edu.level, skills: p.skills, experience: p.experience },
    have: [...ev.have, ...ev.helpfulHave],
    missingCourse, missingPractice, missingLicence, improve,
    formalOk: ev.formalOk, eduGap, expGap, steps,
    salary: salaryView(role.salary, todayISO),
    ready: ev.category === "strong" || ev.category === "good"
  };
}

// ---------- Learning options ----------
// Government/statutory certificates (NIELIT, NCVT/ITI, PMKVY/NSQF, driving licence, NCTE-recognised training).
const RECOGNISED_COURSES = ["nielit-ccc", "nielit-olevel", "iti-cts", "pmkvy-training", "sarathi-licence", "ncte-teacher"];
const PRACTICAL_COURSES = ["iti-cts", "pmkvy-training"];

/**
 * Existing course skills (data/courses.js) → Private Job Finder skills.
 * Uses only the exact equivalents listed in PJ_SKILLS.courseSkills, and only the
 * course's VERIFIED skills are passed in — so no provider is linked to a skill
 * through a similar name, a shared category or an unconfirmed claim.
 */
function courseToPJSkills(courseSkills) {
  const list = Array.isArray(courseSkills) ? courseSkills : [];
  return PJ_SKILLS.filter((s) => s.courseSkills.some((c) => list.includes(c))).map((s) => s.id);
}

/** Both course lists in one shape. Broken records are skipped, not guessed. */
function allLearning() {
  const fromCourses = COURSES.filter((c) => c && c.id && c.title && c.url).map((c) => {
    const verified = Array.isArray(c.skills) ? c.skills : [];
    return {
      id: c.id, source: "courses", title: c.title, provider: c.provider, url: c.url,
      about: c.topics, costNote: c.costNote, duration: c.duration, eligibility: c.prerequisites,
      searchTip: c.searchTip, checkedFrom: c.checkedFrom, checked: c.checked, note: c.note || null,
      evidence: c.evidence || null, courseSkills: verified,
      unverifiedCourseSkills: Array.isArray(c.unverifiedSkills) ? c.unverifiedSkills : [],
      mode: c.mode === "in-person" ? "offline" : c.mode,
      cost: c.cost, govt: c.providerType === "government" || c.providerType === "institute",
      cert: RECOGNISED_COURSES.includes(c.id) ? "recognised" : (c.certificate ? "provider" : null),
      practical: PRACTICAL_COURSES.includes(c.id), beginner: !c.minEducation, eduMax: null,
      skills: courseToPJSkills(verified), kind: c.providerType === "government" ? "govt" : "free-online"
    };
  });
  const extra = EXTRA_LEARNING.filter((x) => x && x.id && x.url).map((x) => ({ ...x, source: "extra", skills: Array.isArray(x.skills) ? x.skills : [] }));
  return [...fromCourses, ...extra];
}

const LEARNING_PATHS = ["all", "free", "paid", "offline", "online", "govt", "certificate", "practical"];

function inPath(o, path) {
  switch (path) {
    case "free": return o.cost === "free" || o.cost === "free-exam-fee";
    case "paid": return o.cost === "fee";
    case "offline": return o.mode === "offline" || o.mode === "both";
    case "online": return o.mode === "online" || o.mode === "both";
    case "govt": return o.govt;
    case "certificate": return o.cert === "recognised" || o.cert === "provider";
    case "practical": return o.practical;
    default: return true;
  }
}

/** What a matched option teaches, in its own words (course skill ids or PJ skill ids). */
function teachesFor(o, covers) {
  if (o.source === "courses") {
    const ids = o.courseSkills.filter((cs) => PJ_SKILLS.some((p) => covers.includes(p.id) && p.courseSkills.includes(cs)));
    return { vocab: "course", ids };
  }
  return { vocab: "pj", ids: covers };
}

/**
 * Learning options for the skills a person needs.
 *  items   — options with a VERIFIED offering of at least one needed skill, best first.
 *  general — portals and programmes with no verified skill (places to search
 *            yourself); they are never presented as teaching the skill.
 *  missing — needed skills that no verified option teaches (the page says so).
 *  picks   — "best of" choices, taken only from verified items.
 */
function recommendLearning(skills, rawProfile, path = "all", primary = skills) {
  const p = normalizePJ(rawProfile);
  const want = new Set(Array.isArray(skills) ? skills : []);
  const main = new Set(Array.isArray(primary) ? primary : []);
  const rank = eduRank(p.edu.level);
  const low = rank !== null && rank <= 3;
  const all = allLearning().filter((o) => o.eduMax === null || o.eduMax === undefined || (rank !== null && rank <= o.eduMax));
  const scored = all
    .map((o) => {
      const covers = o.skills.filter((s) => want.has(s));
      // Skills the job really needs count most; nice-to-have skills count a little.
      let score = covers.filter((x) => main.has(x)).length * 10 + covers.filter((x) => !main.has(x)).length * 3;
      if (o.cost === "fee") score -= 2;
      if (o.govt) score += 3;
      if (o.cost === "free" || o.cost === "free-exam-fee") score += 3;
      if (o.cert === "recognised") score += 2;
      if (o.practical) score += 2;
      if (low && o.beginner) score += 2;
      if (p.env.internet === "no" && o.mode === "online") score -= 6;
      return { ...o, covers, score, teaches: teachesFor(o, covers) };
    });
  const items = scored
    .filter((o) => o.covers.length > 0 && inPath(o, path))
    .sort((a, b) => b.score - a.score || a.id.localeCompare(b.id));
  const general = scored
    .filter((o) => o.skills.length === 0 && inPath(o, path))
    .sort((a, b) => Number(b.govt) - Number(a.govt) || Number(low && b.beginner) - Number(low && a.beginner) || a.id.localeCompare(b.id));
  const taught = new Set(scored.flatMap((o) => o.covers));
  const missing = [...want].filter((s) => !taught.has(s));

  const best = (fn) => items.find(fn)?.id || null;
  const picks = {
    free: best((o) => o.cost === "free" || o.cost === "free-exam-fee"),
    govt: best((o) => o.govt),
    practical: best((o) => o.practical),
    certificate: best((o) => o.cert === "recognised") || best((o) => o.cert === "provider"),
    offline: best((o) => o.mode === "offline"),
    beginner: best((o) => o.beginner)
  };
  return { items, general, missing, picks };
}

/** Skills to learn for a target role (required first, then helpful). */
function skillsToLearn(gap) {
  if (!gap) return [];
  return [...new Set([...gap.missingCourse, ...gap.missingLicence, ...gap.missingPractice, ...gap.improve])];
}

return { normalizePJ, emptyPJ, validatePJ, eduRank, expYears, skillLearn, roleById, evaluateRole, matchRoles, salaryView, salaryVsMin, companiesForRole, searchLinks, feederRoles, gapAnalysis, courseToPJSkills, allLearning, recommendLearning, skillsToLearn, CATEGORY_ORDER, MIN_PROFILES, MAX_SALARY_AGE_DAYS, MAX_RANGE_RATIO, LEARNING_PATHS };
})();

// ===== js/chat-engine.js =====
__mods["js/chat-engine.js"] = (function () {
// CareerSaathi Assistant — the conversation engine ("guide mode").
//
// HOW IT WORKS (honest version):
// - It runs completely in the visitor's browser. Nothing is sent anywhere.
// - It is an automated assistant built on simple, open rules — not a human and
//   not a large language model. It understands common ways of asking in English,
//   Hindi (Devanagari) and Hinglish, and keeps the context of the current chat.
// - Every course, provider, link, salary figure or vacancy it mentions comes from
//   this website's own data files, through the same functions the pages use:
//     courses  → coursesForSkill()  (only VERIFIED provider–skill links)
//     careers  → data/careers.js    · salary → salaryView()  · vacancies → vacancyStatus()
//   General learning paths are clearly labelled as general guidance.
// - When the optional AI mode is switched on (js/chat-config.js), retrieveFacts()
//   gives the AI the same verified facts, so it cannot invent providers either.
//
// Pure functions — tested in Node (tests/chat-engine.test.js).

const { CAREERS } = __mods["data/careers.js"];
const { COURSES } = __mods["data/courses.js"];
const { ALL_SKILLS, labelOf } = __mods["data/options.js"];
const { coursesForSkill } = __mods["js/course-match.js"];
const { QUIZ_AREAS } = __mods["data/quiz.js"];
const { PATHS, STAGES } = __mods["data/roadmap.js"];
const { VACANCIES } = __mods["data/vacancies.js"];
const { vacancyStatus, daysBetween } = __mods["js/vacancy-match.js"];
const { ROLES } = __mods["data/private-roles.js"];
const { salaryView } = __mods["js/pj-model.js"];
const { SALARY_SOURCE } = __mods["data/salary.js"];
const MAX_INPUT = 500;          // characters per message
const MAX_TURNS_KEPT = 40;      // messages kept in the visible history

// ---------------- Language ----------------
const HINGLISH = /\b(mujhe|mujhko|muje|hai|hain|kya|kaise|kaun|kahan|kahaan|kab|karna|karu|karoon|karun|chahiye|chahta|chahti|nahi|nhi|banna|banana|bata|batao|batayein|samajh|seekh|sikh|sikhna|seekhna|padhai|naukri|kaam|accha|acha|theek|haan|ji|aur|lekin|mera|meri|mere|apna|kuch|kitna|kitni|kyun|kyu|pehle|baad|wala|wali|sakta|sakti|abhi|shuru|koi|yeh|ye|woh|wo|dikhao|dikhaiye|dikha|karo|kariye|milega|milegi|hoga|hogi|sakte|wale|kitne|padhna|seekhun|seekhu|karu|bano|banu|lagta|lagti|pasand|dijiye|jaankari)\b/i;

/** "hi" = Hindi script, "hl" = Hinglish (Hindi in Latin letters), "en" = English, null = can't tell. */
function detectLang(text) {
  const s = String(text || "");
  if (/[ऀ-ॿ]/.test(s)) return "hi";
  const words = s.toLowerCase().match(/[a-z]+/g) || [];
  if (!words.length) return null;
  const hits = words.filter((w) => HINGLISH.test(w)).length;
  if (hits >= 1 && hits / words.length >= 0.15) return "hl";
  return words.length >= 2 || /^(hi|hello|hey|thanks|help|ok|yes|no)$/.test(words[0]) ? "en" : null;
}

// ---------------- Phrases (English / Hindi / Hinglish) ----------------
const P = {
  hello: {
    en: "Hello! I'm the CareerSaathi Assistant — an automated helper, not a human. You don't need to tell me your name or any personal details.\n\nAsk me about careers, skills, courses, government jobs or what to do after 10th/12th. Where should we start?",
    hi: "नमस्ते! मैं CareerSaathi असिस्टेंट हूँ — एक ऑटोमेटेड सहायक, इंसान नहीं। आपको अपना नाम या कोई निजी जानकारी बताने की ज़रूरत नहीं है।\n\nकरियर, हुनर, कोर्स, सरकारी नौकरी या 10वीं/12वीं के बाद क्या करें — कुछ भी पूछें। कहाँ से शुरू करें?",
    hl: "Namaste! Main CareerSaathi Assistant hoon — ek automated helper, insaan nahi. Aapko apna naam ya koi personal detail batane ki zaroorat nahi hai.\n\nCareer, skills, courses, sarkari naukri ya 10th/12th ke baad kya karein — kuch bhi poochiye. Kahan se shuru karein?"
  },
  unsure: {
    en: "That's completely okay — many people feel this way. Let's explore step by step.\n\nWhat kind of work sounds more interesting to you? Pick one, or tell me in your own words:",
    hi: "कोई बात नहीं — बहुत लोग ऐसा महसूस करते हैं। हम क़दम-दर-क़दम देखते हैं।\n\nआपको किस तरह का काम ज़्यादा अच्छा लगता है? एक चुनें, या अपने शब्दों में बताएँ:",
    hl: "Koi baat nahi — bahut log aisa feel karte hain. Hum step by step explore karte hain.\n\nAapko kis tarah ka kaam zyada interesting lagta hai? Ek chuniye, ya apne words mein bataiye:"
  },
  notSureArea: {
    en: "No problem. A quick way to find out is our 4-minute interest quiz — it suggests areas you may enjoy. Or tell me one thing you liked doing in school or at home.",
    hi: "कोई बात नहीं। जानने का आसान तरीक़ा हमारा 4 मिनट का रुचि क्विज़ है — यह बताता है कि आपको क्या पसंद आ सकता है। या मुझे एक काम बताइए जो आपको स्कूल या घर पर अच्छा लगता था।",
    hl: "Koi baat nahi. Jaanne ka aasaan tareeka hamara 4 minute ka interest quiz hai — yeh batata hai ki aapko kya pasand aa sakta hai. Ya mujhe ek kaam bataiye jo aapko school ya ghar par accha lagta tha."
  },
  area: {
    en: "Good choice to explore: **{area}**. {about}\n\nCareers people often look at in this area: {careers}.\n\nWhich of these would you like to know more about? You can also ask \"what should I learn first?\"",
    hi: "देखने लायक़ क्षेत्र: **{area}**। {about}\n\nइस क्षेत्र में लोग अक्सर ये करियर देखते हैं: {careers}।\n\nइनमें से किसके बारे में और जानना चाहेंगे? आप यह भी पूछ सकते हैं: \"पहले क्या सीखूँ?\"",
    hl: "Explore karne layak area: **{area}**. {about}\n\nIs area mein log aksar ye careers dekhte hain: {careers}.\n\nInmein se kiske baare mein aur jaanna chahenge? Aap yeh bhi pooch sakte hain: \"pehle kya seekhun?\""
  },
  careerIntro: {
    en: "**{title}** — {summary}",
    hi: "**{title}** — {summary}",
    hl: "**{title}** — {summary}"
  },
  careerEdu: {
    en: "Education usually recorded for this path: {edu}.",
    hi: "इस रास्ते के लिए आम तौर पर दर्ज पढ़ाई: {edu}।",
    hl: "Is raaste ke liye aam taur par darj padhai: {edu}."
  },
  careerEduVaries: {
    en: "Education rules vary by state or notification — check the official notice.",
    hi: "पढ़ाई के नियम राज्य या नोटिफ़िकेशन के हिसाब से बदलते हैं — आधिकारिक नोटिस देखें।",
    hl: "Padhai ke niyam state ya notification ke hisaab se badalte hain — official notice dekhiye."
  },
  careerSkills: {
    en: "Main skills: {skills}.",
    hi: "मुख्य हुनर: {skills}।",
    hl: "Main skills: {skills}."
  },
  careerNoSkills: {
    en: "This path is mainly through an exam — preparation and the official notice matter most.",
    hi: "यह रास्ता मुख्य रूप से परीक्षा से है — तैयारी और आधिकारिक नोटिस सबसे ज़रूरी हैं।",
    hl: "Yeh raasta mainly exam se hai — taiyari aur official notice sabse zaroori hain."
  },
  pathT: {
    en: "A possible learning path (general guidance, not a guarantee):",
    hi: "एक संभावित सीखने का रास्ता (सामान्य मार्गदर्शन, गारंटी नहीं):",
    hl: "Ek possible learning path (general guidance, guarantee nahi):"
  },
  careerNext: {
    en: "Want to see verified courses for these skills, or the next steps? You can also tell me your education level and I'll check what fits.",
    hi: "क्या इन हुनर के जाँचे गए कोर्स या अगले क़दम देखना चाहेंगे? आप अपनी पढ़ाई भी बता सकते हैं, मैं देखूँगा क्या ठीक बैठता है।",
    hl: "Kya in skills ke verified courses ya next steps dekhna chahenge? Aap apni padhai bhi bata sakte hain, main dekhunga kya fit hota hai."
  },
  noGuarantee: {
    en: "No course or career can guarantee a job or a salary — results depend on your effort, the job market and each employer.",
    hi: "कोई कोर्स या करियर नौकरी या सैलरी की गारंटी नहीं दे सकता — नतीजा आपकी मेहनत, नौकरी के बाज़ार और हर नियोक्ता पर निर्भर है।",
    hl: "Koi course ya career naukri ya salary ki guarantee nahi de sakta — result aapki mehnat, job market aur har employer par depend karta hai."
  },
  salaryShow: {
    en: "For **{role}**, reported base pay is about {low}–{high} per month (middle 80% of {n} self-reported salaries on {source}, updated {date}). Small-town pay is often lower, and this is not a promise.",
    hi: "**{role}** के लिए बताई गई बेसिक सैलरी लगभग {low}–{high} प्रति माह है ({source} पर {n} लोगों की ख़ुद बताई सैलरी का बीच का 80%, अपडेट {date})। छोटे शहरों में अक्सर कम होती है, और यह कोई वादा नहीं है।",
    hl: "**{role}** ke liye batayi gayi basic salary lagbhag {low}–{high} per month hai ({source} par {n} logon ki khud batayi salary ka beech ka 80%, update {date}). Chhote shehron mein aksar kam hoti hai, aur yeh koi waada nahi hai."
  },
  salaryNone: {
    en: "We don't have reliable salary data for **{role}**, so I won't guess a number. Check the salary written in each real job advert.",
    hi: "**{role}** के लिए हमारे पास भरोसेमंद सैलरी डेटा नहीं है, इसलिए मैं अंदाज़े से कोई संख्या नहीं बताऊँगा। हर असली विज्ञापन में लिखी सैलरी देखें।",
    hl: "**{role}** ke liye hamare paas bharosemand salary data nahi hai, isliye main andaze se koi number nahi bataunga. Har asli job advert mein likhi salary dekhiye."
  },
  salaryAsk: {
    en: "Which job do you want salary information for? For example: data entry, accountant, web developer, customer support.",
    hi: "किस नौकरी की सैलरी जाननी है? जैसे: डेटा एंट्री, अकाउंटेंट, वेब डेवलपर, कस्टमर सपोर्ट।",
    hl: "Kis naukri ki salary jaanni hai? Jaise: data entry, accountant, web developer, customer support."
  },
  coursesT: {
    en: "Verified learning options on our website for **{skill}**:",
    hi: "**{skill}** के लिए हमारी वेबसाइट पर जाँचे गए सीखने के विकल्प:",
    hl: "**{skill}** ke liye hamari website par verified learning options:"
  },
  coursesFree: {
    en: "You said you prefer free options, so free ones are shown first.",
    hi: "आपने मुफ़्त विकल्प पसंद बताए थे, इसलिए मुफ़्त वाले पहले दिखाए हैं।",
    hl: "Aapne free options pasand bataye the, isliye free wale pehle dikhaye hain."
  },
  noVerified: {
    en: "We haven't found a verified provider for **{skill}** yet, so I won't suggest one. If you like, I can explain a general way to start learning it.",
    hi: "**{skill}** के लिए अभी हमें कोई जाँचा हुआ प्रदाता नहीं मिला, इसलिए मैं कोई नाम नहीं सुझाऊँगा। चाहें तो मैं इसे सीखने का एक सामान्य तरीक़ा समझा सकता हूँ।",
    hl: "Abhi humein **{skill}** ke liye koi verified provider nahi mila, isliye main koi naam suggest nahi karunga. Aap chahein to main ise seekhne ka ek general tareeka samjha sakta hoon."
  },
  unknownSkill: {
    en: "\"{skill}\" isn't in our course data, so I can't point to a verified provider for it. I can share general guidance, or you can search the Skill India Digital Hub (we have not checked those results).",
    hi: "\"{skill}\" हमारे कोर्स डेटा में नहीं है, इसलिए मैं इसके लिए कोई जाँचा हुआ प्रदाता नहीं बता सकता। मैं सामान्य मार्गदर्शन दे सकता हूँ, या आप स्किल इंडिया डिजिटल हब पर खोज सकते हैं (वहाँ के नतीजे हमने नहीं जाँचे)।",
    hl: "\"{skill}\" hamare course data mein nahi hai, isliye main iske liye koi verified provider nahi bata sakta. Main general guidance de sakta hoon, ya aap Skill India Digital Hub par search kar sakte hain (wahan ke results humne check nahi kiye)."
  },
  providerYes: {
    en: "Yes — our data shows **{provider}** offers **{skill}**. How we checked: {evidence} (checked {date}).",
    hi: "हाँ — हमारे डेटा के अनुसार **{provider}** में **{skill}** सिखाया जाता है। हमने कैसे जाँचा: {evidence} ({date} को)।",
    hl: "Haan — hamare data ke hisaab se **{provider}** mein **{skill}** sikhaya jata hai. Humne kaise check kiya: {evidence} ({date} ko)."
  },
  providerUnconfirmed: {
    en: "Not confirmed. **{provider}** may list **{skill}**, but we could not verify a current offering, so I can't recommend it as a match. Please check with the provider directly.",
    hi: "पक्का नहीं। **{provider}** में **{skill}** हो सकता है, लेकिन हम मौजूदा कोर्स की पुष्टि नहीं कर सके, इसलिए इसे मेल के रूप में नहीं सुझा सकता। सीधे प्रदाता से पूछें।",
    hl: "Confirm nahi hai. **{provider}** mein **{skill}** ho sakta hai, lekin hum current course verify nahi kar sake, isliye ise match ke roop mein suggest nahi kar sakta. Seedhe provider se poochiye."
  },
  providerNo: {
    en: "Our data does not show **{provider}** offering **{skill}**, so I won't recommend it for that.",
    hi: "हमारे डेटा में **{provider}** के पास **{skill}** का कोर्स नहीं दिखता, इसलिए मैं उसके लिए इसे नहीं सुझाऊँगा।",
    hl: "Hamare data mein **{provider}** ke paas **{skill}** ka course nahi dikhta, isliye main uske liye ise suggest nahi karunga."
  },
  providerSkills: {
    en: "What our data verifies for **{provider}**: {skills}.",
    hi: "**{provider}** के लिए हमारे डेटा में जाँचा गया: {skills}।",
    hl: "**{provider}** ke liye hamare data mein verified: {skills}."
  },
  providerNone: {
    en: "**{provider}** has no verified skill offering in our data right now — treat it as a general place to search.",
    hi: "हमारे डेटा में अभी **{provider}** का कोई जाँचा हुआ कोर्स नहीं है — इसे खोजने की सामान्य जगह मानें।",
    hl: "Hamare data mein abhi **{provider}** ka koi verified course nahi hai — ise search karne ki general jagah maaniye."
  },
  govtT: {
    en: "Government recruitments open right now in our list (worked out from today's date):",
    hi: "हमारी सूची में अभी खुली सरकारी भर्तियाँ (आज की तारीख़ से निकाली गईं):",
    hl: "Hamari list mein abhi khuli sarkari bhartiyan (aaj ki date se nikaali gayi):"
  },
  govtNone: {
    en: "No recruitment in our list is open today. Check the official websites on our Govt Jobs page.",
    hi: "आज हमारी सूची में कोई भर्ती खुली नहीं है। हमारे सरकारी नौकरी पेज पर आधिकारिक वेबसाइटें देखें।",
    hl: "Aaj hamari list mein koi bharti khuli nahi hai. Hamare Govt Jobs page par official websites dekhiye."
  },
  govtNote: {
    en: "Always confirm dates and eligibility in the official notice. We update this list by hand.",
    hi: "तारीख़ और पात्रता हमेशा आधिकारिक नोटिस में पक्की करें। यह सूची हम हाथ से अपडेट करते हैं।",
    hl: "Dates aur eligibility hamesha official notice mein confirm kariye. Yeh list hum haath se update karte hain."
  },
  govtItem: {
    en: "last date {date} ({n} days left)",
    hi: "आख़िरी तारीख़ {date} ({n} दिन बाक़ी)",
    hl: "last date {date} ({n} din baaki)"
  },
  govtConfirm: {
    en: "reported in news — confirm officially",
    hi: "ख़बरों के अनुसार — आधिकारिक रूप से पक्का करें",
    hl: "news ke hisaab se — officially confirm kariye"
  },
  roadmapT: {
    en: "Main paths {stage} (durations are usual ones — check official websites):",
    hi: "{stage} के मुख्य रास्ते (अवधि आम तौर पर लगने वाली — आधिकारिक वेबसाइट देखें):",
    hl: "{stage} ke main raaste (duration aam taur par lagne wali — official websites dekhiye):"
  },
  pagePointer: {
    en: "You'll find this on our **{page}** page.",
    hi: "यह आपको हमारे **{page}** पेज पर मिलेगा।",
    hl: "Yeh aapko hamare **{page}** page par milega."
  },
  privacy: {
    en: "That's absolutely fine — you don't need to share anything personal. I can help with just your interests or goals. This chat stays in this browser tab only.",
    hi: "बिल्कुल ठीक है — आपको कुछ भी निजी बताने की ज़रूरत नहीं। मैं सिर्फ़ आपकी रुचि या लक्ष्य से मदद कर सकता हूँ। यह चैट सिर्फ़ इसी ब्राउज़र टैब में रहती है।",
    hl: "Bilkul theek hai — aapko kuch bhi personal batane ki zaroorat nahi. Main sirf aapke interests ya goals se help kar sakta hoon. Yeh chat sirf isi browser tab mein rehti hai."
  },
  secrets: {
    en: "I can't help with that. This assistant runs in your browser and has no passwords, API keys or other people's chats — conversations are never shared between users. Ask me anything about careers or courses instead.",
    hi: "इसमें मैं मदद नहीं कर सकता। यह असिस्टेंट आपके ब्राउज़र में चलता है; इसके पास कोई पासवर्ड, API key या दूसरों की चैट नहीं है — एक व्यक्ति की चैट दूसरे को कभी नहीं दिखती। करियर या कोर्स के बारे में कुछ भी पूछें।",
    hl: "Isme main help nahi kar sakta. Yeh assistant aapke browser mein chalta hai; iske paas koi password, API key ya dusron ki chat nahi hai — ek user ki chat dusre ko kabhi nahi dikhti. Career ya courses ke baare mein kuch bhi poochiye."
  },
  prefFree: {
    en: "Noted — I'll show free options first.",
    hi: "ठीक है — मैं मुफ़्त विकल्प पहले दिखाऊँगा।",
    hl: "Theek hai — main free options pehle dikhaunga."
  },
  prefBeginner: {
    en: "Noted — starting from the beginning is perfectly fine.",
    hi: "ठीक है — शुरुआत से सीखना बिल्कुल ठीक है।",
    hl: "Theek hai — shuruaat se seekhna bilkul theek hai."
  },
  thanks: {
    en: "You're welcome! Ask anytime. Before any big decision, compare a few options and check official websites.",
    hi: "आपका स्वागत है! कभी भी पूछें। कोई बड़ा फ़ैसला लेने से पहले कुछ विकल्पों की तुलना करें और आधिकारिक वेबसाइट देखें।",
    hl: "Aapka swagat hai! Kabhi bhi poochiye. Koi bada faisla lene se pehle kuch options compare kariye aur official websites dekhiye."
  },
  fallback: {
    en: "I'm not sure I understood. I'm a simple automated guide, so short questions work best — for example: \"I want to become a data analyst\", \"Where can I learn Tally?\" or \"What after 12th?\"",
    hi: "मैं ठीक से समझ नहीं पाया। मैं एक आसान ऑटोमेटेड गाइड हूँ, इसलिए छोटे सवाल सबसे अच्छे चलते हैं — जैसे: \"मुझे डेटा एनालिस्ट बनना है\", \"टैली कहाँ सीखूँ?\" या \"12वीं के बाद क्या?\"",
    hl: "Main theek se samajh nahi paya. Main ek simple automated guide hoon, isliye chhote sawaal sabse acche chalte hain — jaise: \"mujhe data analyst banna hai\", \"Tally kahan seekhun?\" ya \"12th ke baad kya?\""
  },
  tooLong: {
    en: "Your message was long, so I read only the first {n} characters.",
    hi: "आपका संदेश लंबा था, इसलिए मैंने सिर्फ़ पहले {n} अक्षर पढ़े।",
    hl: "Aapka message lamba tha, isliye maine sirf pehle {n} characters padhe."
  },
  empty: {
    en: "Please type a question.",
    hi: "कृपया कोई सवाल लिखें।",
    hl: "Kripya koi sawaal likhiye."
  },
  needGoal: {
    en: "Sure — which career or skill should I plan for? For example: web developer, accountant, electrician, teacher.",
    hi: "ज़रूर — किस करियर या हुनर के लिए बताऊँ? जैसे: वेब डेवलपर, अकाउंटेंट, इलेक्ट्रीशियन, शिक्षक।",
    hl: "Zaroor — kis career ya skill ke liye bataun? Jaise: web developer, accountant, electrician, teacher."
  },
  firstSkills: {
    en: "For **{title}**, a sensible order is:",
    hi: "**{title}** के लिए सही क्रम यह हो सकता है:",
    hl: "**{title}** ke liye ek sahi order yeh ho sakta hai:"
  },
  eduAsk: {
    en: "Got it — your education: **{level}**. {fit}",
    hi: "समझ गया — आपकी पढ़ाई: **{level}**। {fit}",
    hl: "Samajh gaya — aapki padhai: **{level}**. {fit}"
  },
  eduFits: {
    en: "That matches what is usually recorded for {title}.",
    hi: "यह {title} के लिए आम तौर पर दर्ज पढ़ाई से मेल खाती है।",
    hl: "Yeh {title} ke liye aam taur par darj padhai se match karti hai."
  },
  eduGap: {
    en: "For {title}, the education usually recorded is {edu}. You can still start learning the skills now, and plan the qualification alongside.",
    hi: "{title} के लिए आम तौर पर दर्ज पढ़ाई {edu} है। आप हुनर अभी से सीखना शुरू कर सकते हैं, और योग्यता की योजना साथ में बनाएँ।",
    hl: "{title} ke liye aam taur par darj padhai {edu} hai. Aap skills abhi se seekhna shuru kar sakte hain, aur qualification ki planning saath mein kariye."
  }
};

function say(key, lang, vars = {}) {
  const row = P[key];
  const s = (row && (row[lang] || row.en)) || "";
  return s.replace(/\{(\w+)\}/g, (_, k) => (vars[k] === undefined || vars[k] === null ? "" : String(vars[k])));
}
const pick = (o, lang) => (o ? (lang === "hi" ? o.hi || o.en : o.en) : "");
const skillLabel = (id, lang) => labelOf(ALL_SKILLS, id, lang === "hi" ? "hi" : "en");
const careerById = (id) => CAREERS.find((c) => c.id === id);

// ---------------- Understanding the message ----------------
const norm = (s) => String(s || "").toLowerCase().replace(/[’']/g, "").replace(/\s+/g, " ").trim();

// Skills in the course data (exact ids from data/options.js). Aliases cover common
// English, Hinglish and Hindi ways of naming them.
const SKILL_ALIASES = {
  "basic-computer": ["basic computer", "computer basics", "computer chalana", "computer seekh", "computer sikh", "computer course", "कंप्यूटर"],
  ccc: ["ccc"],
  olevel: ["o level", "o-level", "olevel"],
  dca: ["dca", "adca"],
  tally: ["tally", "टैली"],
  excel: ["excel", "spreadsheet", "libreoffice calc", "एक्सेल", "स्प्रेडशीट"],
  typing: ["typing", "टाइपिंग"],
  programming: ["programming", "coding", "python", "java ", "प्रोग्रामिंग", "कोडिंग"],
  webdev: ["web development", "web design", "website banana", "website bana", "html", "css", "javascript", "वेब डेवलपमेंट"],
  "data-analytics": ["data analytics", "data analysis", "data science", "डेटा एनालिटिक्स"],
  "graphic-design": ["graphic design", "graphics design", "designing", "photoshop", "canva", "ग्राफ़िक", "ग्राफिक"],
  "digital-marketing": ["digital marketing", "social media marketing", "seo", "online marketing", "डिजिटल मार्केटिंग"],
  teaching: ["teaching skill", "padhana seekh", "पढ़ाना"],
  accounting: ["accounting", "accounts", "hisab kitab", "hisaab", "gst", "bookkeeping", "अकाउंटिंग", "हिसाब"],
  sales: ["sales", "selling", "सेल्स"],
  "customer-service": ["customer service", "customer care", "ग्राहक सेवा"],
  "spoken-english": ["spoken english", "english bolna", "english speaking", "english seekh", "english sikh", "अंग्रेज़ी", "अंग्रेजी", "इंग्लिश"],
  electrician: ["electrician", "wiring", "electrical", "बिजली", "इलेक्ट्रीशियन"],
  plumbing: ["plumbing", "plumber", "प्लंबर", "प्लंबिंग"],
  welding: ["welding", "welder", "वेल्डिंग"],
  tailoring: ["tailoring", "silai", "sewing", "stitching", "सिलाई"],
  driving: ["driving", "driving licence", "driving license", "ड्राइविंग"],
  repair: ["repair", "mobile repair", "ac repair", "रिपेयर", "मरम्मत"],
  agriculture: ["farming", "kheti", "agriculture", "खेती"],
  cooking: ["cooking", "khana banana", "खाना बनाना"]
};

// Skills people ask about that are NOT in our course data (answered honestly).
const UNKNOWN_SKILLS = ["sql", "statistics", "power bi", "tableau", "nursing", "hr ", "inventory", "autocad", "cloud", "machine learning", "ai course", "video editing", "photography", "beautician", "share market"];

// Careers (data/careers.js ids) — common names in English, Hinglish and Hindi.
const CAREER_ALIASES = {
  "data-analyst": ["data analyst", "डेटा एनालिस्ट"],
  "web-developer": ["web developer", "website developer", "वेब डेवलपर"],
  "software-developer": ["software developer", "software engineer", "programmer", "सॉफ़्टवेयर डेवलपर", "सॉफ्टवेयर"],
  "graphic-designer": ["graphic designer", "ग्राफ़िक डिज़ाइनर", "ग्राफिक डिजाइनर"],
  "digital-marketer": ["digital marketer", "digital marketing executive", "social media manager"],
  "accounts-assistant": ["accountant", "accounts assistant", "अकाउंटेंट"],
  "data-entry": ["data entry", "computer operator", "डेटा एंट्री"],
  "office-assistant": ["office assistant", "office job", "ऑफ़िस"],
  "customer-support": ["customer support", "call centre", "call center", "bpo", "कस्टमर सपोर्ट"],
  "sales-executive": ["sales executive", "salesman", "marketing job"],
  "retail-associate": ["retail", "showroom", "shop job", "दुकान"],
  "govt-teacher": ["government teacher", "sarkari teacher", "सरकारी शिक्षक", "teacher", "शिक्षक", "अध्यापक"],
  tutor: ["tutor", "tuition", "ट्यूशन"],
  electrician: ["electrician banna", "electrician job", "electrician bana", "become an electrician"],
  plumber: ["plumber banna", "plumber job", "become a plumber"],
  welder: ["welder banna", "welder job", "become a welder"],
  driver: ["driver", "ड्राइवर"],
  "repair-technician": ["mobile repair technician", "repair technician", "mechanic", "मैकेनिक"],
  "bank-po": ["bank po", "bank officer", "बैंक पीओ"],
  "bank-clerk": ["bank clerk", "bank job", "bank mein naukri", "बैंक"],
  "ssc-chsl": ["ssc chsl", "chsl"],
  "ssc-cgl": ["ssc cgl", "cgl"],
  "ssc-mts": ["ssc mts", "mts"],
  "rrb-ntpc": ["railway", "rrb", "ntpc", "रेलवे"],
  "state-police": ["police", "constable", "पुलिस"],
  "army-agniveer": ["army", "agniveer", "fauj", "सेना", "अग्निवीर"],
  "upsc-cse": ["ias", "ips", "upsc", "civil services", "आईएएस"],
  "india-post-gds": ["post office", "gds", "डाक"],
  "tailoring-business": ["boutique", "tailor", "दर्ज़ी", "दर्जी"],
  "food-business": ["food business", "tiffin", "restaurant business"],
  "computer-centre": ["computer centre", "csc centre", "cyber cafe"]
};

// General learning paths (guidance, labelled as such). Steps mention skills; the
// courses shown next to them still come only from verified data.
const GENERAL_PATHS = {
  "data-analyst": {
    en: ["Spreadsheet basics (formulas, sorting, charts)", "Basic statistics (average, percentages, simple graphs)", "SQL to read data from databases", "Data visualisation (clear charts and dashboards)", "Python for data, if your goals need it", "2–3 small portfolio projects with real public data"],
    hi: ["स्प्रेडशीट की बुनियाद (फ़ॉर्मूले, सॉर्टिंग, चार्ट)", "बेसिक सांख्यिकी (औसत, प्रतिशत, आसान ग्राफ़)", "डेटाबेस से डेटा पढ़ने के लिए SQL", "डेटा विज़ुअलाइज़ेशन (साफ़ चार्ट और डैशबोर्ड)", "ज़रूरत हो तो डेटा के लिए पाइथन", "असली सार्वजनिक डेटा से 2–3 छोटे पोर्टफ़ोलियो प्रोजेक्ट"],
    hl: ["Spreadsheet basics (formulas, sorting, charts)", "Basic statistics (average, percentage, simple graphs)", "Database se data padhne ke liye SQL", "Data visualisation (saaf charts aur dashboards)", "Zaroorat ho to data ke liye Python", "Asli public data se 2–3 chhote portfolio projects"]
  },
  "web-developer": {
    en: ["HTML and CSS — build simple pages", "JavaScript basics", "Make 2–3 small real websites (portfolio)", "Learn Git and how to publish a site", "Apply for internships or junior roles"],
    hi: ["HTML और CSS — आसान पेज बनाएँ", "JavaScript की बुनियाद", "2–3 छोटी असली वेबसाइट बनाएँ (पोर्टफ़ोलियो)", "Git और वेबसाइट पब्लिश करना सीखें", "इंटर्नशिप या जूनियर नौकरी के लिए आवेदन करें"],
    hl: ["HTML aur CSS — simple pages banaiye", "JavaScript basics", "2–3 chhoti asli websites banaiye (portfolio)", "Git aur website publish karna seekhiye", "Internship ya junior role ke liye apply kariye"]
  },
  "software-developer": {
    en: ["One programming language well (for example Python or Java)", "Problem solving and basic data structures", "Small projects you can show", "Git and teamwork basics", "Graduate / fresher hiring routes of IT companies"],
    hi: ["एक प्रोग्रामिंग भाषा अच्छे से (जैसे पाइथन या जावा)", "प्रॉब्लम सॉल्विंग और बेसिक डेटा स्ट्रक्चर", "दिखाने लायक़ छोटे प्रोजेक्ट", "Git और टीम में काम की बुनियाद", "IT कंपनियों के ग्रेजुएट / फ़्रेशर भर्ती रास्ते"],
    hl: ["Ek programming language acche se (jaise Python ya Java)", "Problem solving aur basic data structures", "Dikhane layak chhote projects", "Git aur teamwork basics", "IT companies ke graduate / fresher hiring routes"]
  },
  "digital-marketer": {
    en: ["How social media and online ads work", "Writing simple posts and basic design", "Measuring results (analytics)", "Run a small real page or campaign as practice", "Internships or entry-level roles"],
    hi: ["सोशल मीडिया और ऑनलाइन विज्ञापन कैसे काम करते हैं", "आसान पोस्ट लिखना और बेसिक डिज़ाइन", "नतीजे मापना (एनालिटिक्स)", "अभ्यास के लिए एक छोटा असली पेज या अभियान चलाएँ", "इंटर्नशिप या शुरुआती नौकरी"],
    hl: ["Social media aur online ads kaise kaam karte hain", "Simple posts likhna aur basic design", "Results measure karna (analytics)", "Practice ke liye ek chhota asli page ya campaign chalaiye", "Internship ya entry-level role"]
  },
  "graphic-designer": {
    en: ["Design basics: layout, colour, fonts", "One design tool well", "Practise with real posters and posts", "Build a portfolio of 10–15 pieces", "Freelance or junior roles"],
    hi: ["डिज़ाइन की बुनियाद: लेआउट, रंग, फ़ॉन्ट", "एक डिज़ाइन टूल अच्छे से", "असली पोस्टर और पोस्ट से अभ्यास", "10–15 कामों का पोर्टफ़ोलियो", "फ़्रीलांस या जूनियर नौकरी"],
    hl: ["Design basics: layout, colour, fonts", "Ek design tool acche se", "Asli posters aur posts se practice", "10–15 kaam ka portfolio", "Freelance ya junior role"]
  },
  "accounts-assistant": {
    en: ["Basics of accounting (entries, ledgers)", "Tally / accounting software", "GST basics", "Spreadsheets", "Practice with sample bills; apply to small firms"],
    hi: ["अकाउंटिंग की बुनियाद (एंट्री, लेजर)", "टैली / अकाउंटिंग सॉफ़्टवेयर", "GST की बुनियाद", "स्प्रेडशीट", "सैंपल बिल से अभ्यास; छोटी फ़र्मों में आवेदन"],
    hl: ["Accounting basics (entries, ledgers)", "Tally / accounting software", "GST basics", "Spreadsheets", "Sample bills se practice; chhoti firms mein apply"]
  }
};

const PROVIDERS = [
  { id: "nielit-ccc", label: "NIELIT", names: ["nielit", "ccc course"] },
  { id: "nielit-olevel", label: "NIELIT", names: ["o level course"] },
  { id: "swayam-digital-marketing", label: "SWAYAM", names: ["swayam", "स्वयम"] },
  { id: "nptel-programming", label: "NPTEL", names: ["nptel", "एनपीटेल"] },
  { id: "freecodecamp-web", label: "freeCodeCamp", names: ["freecodecamp", "free code camp"] },
  { id: "spoken-tutorial", label: "Spoken Tutorial", names: ["spoken tutorial", "iit bombay"] },
  { id: "iti-cts", label: "ITI", names: ["iti", "आईटीआई"] },
  { id: "pmkvy-training", label: "PMKVY", names: ["pmkvy", "kaushal vikas"] },
  { id: "sarathi-licence", label: "Sarathi", names: ["sarathi", "parivahan"] },
  { id: "kvk-training", label: "Krishi Vigyan Kendra", names: ["kvk", "krishi vigyan"] },
  { id: "ncte-teacher", label: "NCTE-recognised institutes", names: ["ncte", "b.ed", "bed course", "d.el.ed", "deled"] },
  { id: "tally-education", label: "Tally Education", names: ["tally education"] },
  { id: "rseti", label: "RSETI", names: ["rseti"] },
  { id: "hubspot-academy", label: "HubSpot Academy", names: ["hubspot"] },
  { id: "google-skillshop", label: "Google Skillshop", names: ["skillshop", "google ads course"] }
];
// SWAYAM and NIELIT have several records; all of them are checked together.
const PROVIDER_GROUPS = {
  "swayam-digital-marketing": ["swayam-digital-marketing", "swayam-computer", "swayam-accounting"],
  "nptel-programming": ["nptel-programming", "nptel-english"],
  "nielit-ccc": ["nielit-ccc", "nielit-olevel"]
};

const has = (text, list) => list.some((w) => text.includes(w));
const word = (text, re) => re.test(text);

function findSkills(t) {
  const found = [];
  for (const [id, words] of Object.entries(SKILL_ALIASES)) if (has(t + " ", words)) found.push(id);
  // "web developer" is a career; don't also treat it as only a skill question.
  return found;
}
// Each career's own title (English and Hindi) also counts as a name for it.
const TITLE_ALIASES = Object.fromEntries(CAREERS.map((c) => [c.id, [norm(c.title.en), c.title.hi]]));
function findCareer(t) {
  let best = null;
  for (const [id, words] of [...Object.entries(CAREER_ALIASES), ...Object.entries(TITLE_ALIASES)]) {
    for (const w of words) if (t.includes(w) && (!best || w.length > best.len)) best = { id, len: w.length };
  }
  return best ? best.id : null;
}
function findProvider(t) {
  for (const p of PROVIDERS) if (p.names.some((n) => new RegExp(`(^|[^a-z])${n.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")}([^a-z]|$)`).test(t))) return p.id;
  return null;
}
function findUnknownSkill(t) {
  return UNKNOWN_SKILLS.find((w) => (t + " ").includes(w)) || null;
}

const AREA_WORDS = {
  think: ["technology", "tech", "computer", "coding", "science", "टेक्नोलॉजी", "कंप्यूटर", "विज्ञान"],
  lead: ["business", "management", "vyapar", "dhandha", "व्यवसाय", "बिज़नेस", "बिजनेस"],
  create: ["creative", "design", "art", "drawing", "रचनात्मक", "डिज़ाइन", "कला"],
  help: ["teaching", "helping", "help others", "social work", "padhana", "पढ़ाना", "मदद"],
  hands: ["hands-on", "machine", "machines", "practical work", "repair", "हाथ का काम", "मशीन"],
  organise: ["numbers", "accounts", "office work", "हिसाब", "ऑफ़िस"]
};
function findArea(t) {
  for (const [id, words] of Object.entries(AREA_WORDS)) if (has(t, words)) return id;
  return null;
}

const EDU_WORDS = [
  ["postgraduation", ["post graduation", "postgraduate", "masters", "m.a", "m.com", "mba", "m.sc", "पोस्ट ग्रेजुएशन"]],
  ["graduation", ["graduation", "graduate", "b.a", "b.com", "bcom", "b.sc", "bsc", "btech", "b.tech", "bca", "degree", "ग्रेजुएशन", "स्नातक"]],
  ["diploma", ["diploma", "polytechnic", "डिप्लोमा"]],
  ["iti", ["iti pass", "iti kiya", "iti done", "maine iti"]],
  ["class12", ["12th", "12 pass", "12th pass", "class 12", "intermediate", "inter pass", "12वीं", "बारहवीं"]],
  ["class10", ["10th", "10 pass", "10th pass", "class 10", "high school", "matric", "10वीं", "दसवीं"]]
];
function findEdu(t) {
  for (const [id, words] of EDU_WORDS) if (has(t, words)) return id;
  return null;
}

// ---------------- Answers built from website data ----------------
function verifiedCourseCards(skillId, ctx) {
  let list = coursesForSkill(skillId, COURSES);
  if (ctx.budget === "free") list = [...list].sort((a, b) => Number(isFree(b)) - Number(isFree(a)));
  return list.map((c) => courseCard(c, skillId));
}
const isFree = (c) => c.cost === "free" || c.cost === "free-exam-fee";
function courseCard(c, skillId) {
  return {
    id: c.id, title: c.title, provider: c.provider, url: c.url, skill: skillId,
    cost: c.cost, costNote: c.costNote || null, duration: c.duration || null,
    evidence: c.evidence ? { url: c.evidence.url, text: c.evidence.text, checked: c.evidence.checked } : null
  };
}

function careerReply(id, lang, ctx) {
  const c = careerById(id);
  const lines = [say("careerIntro", lang, { title: pick(c.title, lang), summary: pick(c.summary, lang) })];
  if (Array.isArray(c.education)) {
    lines.push(say("careerEdu", lang, { edu: eduList(c.education, lang) }));
  } else if (c.education === null) lines.push(say("careerEduVaries", lang));
  const skills = [...c.requiredSkills, ...c.optionalSkills.slice(0, 2)];
  lines.push(c.requiredSkills.length ? say("careerSkills", lang, { skills: skills.map((s) => skillLabel(s, lang)).join(", ") }) : say("careerNoSkills", lang));
  const path = GENERAL_PATHS[id];
  if (path) lines.push("", say("pathT", lang), ...path[lang === "hi" ? "hi" : lang === "hl" ? "hl" : "en"].map((s, i) => `${i + 1}. ${s}`));
  lines.push("", say("noGuarantee", lang), "", say("careerNext", lang));
  const chips = [
    { label: chip("firstSkills", lang), send: chipSend("firstSkills", lang) },
    { label: chip("courses", lang), send: chipSend("courses", lang) },
    { label: chip("salary", lang), send: chipSend("salary", lang) }
  ];
  const links = c.sector === "government" ? [{ page: "jobs.html" }] : [{ page: "recommendations.html" }];
  return { text: lines.join("\n"), chips, links };
}

const EDU_LABEL = {
  class10: { en: "Class 10", hi: "10वीं" }, class12: { en: "Class 12", hi: "12वीं" }, iti: { en: "ITI", hi: "ITI" },
  diploma: { en: "Diploma", hi: "डिप्लोमा" }, graduation: { en: "Graduation", hi: "ग्रेजुएशन" },
  postgraduation: { en: "Post graduation", hi: "पोस्ट ग्रेजुएशन" }, professional: { en: "Professional degree", hi: "प्रोफ़ेशनल डिग्री" }
};
function eduList(levels, lang) {
  if (levels === "any") return lang === "hi" ? "कोई न्यूनतम नहीं" : "no minimum recorded";
  return levels.slice(0, 3).map((l) => pick(EDU_LABEL[l], lang)).join(" / ") + (levels.length > 3 ? (lang === "hi" ? " आदि" : " and higher") : "");
}

const CHIPS = {
  unsure: { en: "I'm not sure", hi: "मुझे पक्का नहीं पता", hl: "Mujhe pakka nahi pata" },
  firstSkills: { en: "What should I learn first?", hi: "पहले क्या सीखूँ?", hl: "Pehle kya seekhun?" },
  courses: { en: "Show verified courses", hi: "जाँचे गए कोर्स दिखाओ", hl: "Verified courses dikhao" },
  salary: { en: "Salary information", hi: "सैलरी की जानकारी", hl: "Salary ki jaankari" },
  govt: { en: "Government jobs open now", hi: "अभी खुली सरकारी नौकरियाँ", hl: "Abhi khuli sarkari naukri" },
  after10: { en: "What after 10th?", hi: "10वीं के बाद क्या?", hl: "10th ke baad kya?" },
  after12: { en: "What after 12th?", hi: "12वीं के बाद क्या?", hl: "12th ke baad kya?" },
  generalPath: { en: "Explain a general way to learn it", hi: "सीखने का सामान्य तरीक़ा बताओ", hl: "Seekhne ka general tareeka batao" }
};
const chip = (k, lang) => CHIPS[k][lang] || CHIPS[k].en;
const chipSend = chip;

function areaChips(lang) {
  return [...QUIZ_AREAS.map((a) => ({ label: `${a.icon} ${pick(a.name, lang)}`, send: pick(a.name, lang) })), { label: chip("unsure", lang), send: chip("unsure", lang) }];
}

function salaryReply(ctx, lang) {
  const role = ROLE_FOR_CAREER[ctx.goal] ? ROLES.find((r) => r.id === ROLE_FOR_CAREER[ctx.goal]) : null;
  if (!ctx.goal) return { text: [say("noGuarantee", lang), "", say("salaryAsk", lang)].join("\n") };
  const title = role ? (lang === "hi" ? role.title.hi : role.title.en) : pick(careerById(ctx.goal)?.title, lang);
  const v = role ? salaryView(role.salary, ctx.today) : { show: false };
  const lines = [];
  if (v.show) {
    const money = (n) => "₹" + Number(n).toLocaleString("en-IN");
    lines.push(say("salaryShow", lang, { role: title, low: money(v.low), high: money(v.high), n: v.profiles, source: SALARY_SOURCE.name, date: v.updated }));
  } else lines.push(say("salaryNone", lang, { role: title }));
  lines.push("", say("noGuarantee", lang));
  return { text: lines.join("\n"), links: v.show ? [{ url: v.url, label: SALARY_SOURCE.name }] : [] };
}
// Private Job Finder roles that correspond to a career (for salary data only).
const ROLE_FOR_CAREER = {
  "data-entry": "data-entry-operator", "accounts-assistant": "accounts-assistant", "office-assistant": "office-assistant",
  "customer-support": "customer-support", "sales-executive": "sales-executive", "retail-associate": "retail-sales-associate",
  electrician: "electrician", "repair-technician": "service-technician", "web-developer": "web-developer",
  "software-developer": "software-developer", "graphic-designer": "graphic-designer", "digital-marketer": "digital-marketing-executive",
  driver: "driver", "data-analyst": null
};

function coursesReply(skills, lang, ctx) {
  const parts = [];
  const cards = [];
  const chips = [];
  const sections = [];
  for (const s of skills.slice(0, 3)) {
    const list = verifiedCourseCards(s, ctx);
    if (list.length) {
      sections.push({ text: say("coursesT", lang, { skill: skillLabel(s, lang) }), cards: list.slice(0, 4) });
      cards.push(...list.slice(0, 4));
    } else {
      sections.push({ text: say("noVerified", lang, { skill: skillLabel(s, lang) }), cards: [] });
      if (!chips.length) chips.push({ label: chip("generalPath", lang), send: chip("generalPath", lang) });
    }
  }
  if (ctx.budget === "free" && cards.length) parts.push(say("coursesFree", lang));
  return { text: parts.join("\n\n"), sections, cards, chips, links: [{ page: "courses.html" }] };
}

function providerReply(providerId, skills, lang) {
  const ids = PROVIDER_GROUPS[providerId] || [providerId];
  const records = ids.map((id) => COURSES.find((c) => c.id === id)).filter(Boolean);
  const name = PROVIDERS.find((p) => p.id === providerId)?.label || pick(records[0].provider, lang);
  if (!skills.length) {
    const verified = [...new Set(records.flatMap((r) => r.skills))];
    return { text: verified.length ? say("providerSkills", lang, { provider: name, skills: verified.map((s) => skillLabel(s, lang)).join(", ") }) : say("providerNone", lang, { provider: name }),
      cards: records.filter((r) => r.skills.length).map((r) => courseCard(r, r.skills[0])) };
  }
  const lines = [];
  const cards = [];
  for (const s of skills.slice(0, 2)) {
    const yes = records.find((r) => r.skills.includes(s));
    const unconfirmed = records.find((r) => (r.unverifiedSkills || []).includes(s));
    if (yes) {
      lines.push(say("providerYes", lang, { provider: name, skill: skillLabel(s, lang), evidence: pick(yes.evidence?.text, lang), date: yes.evidence?.checked || yes.checked }));
      cards.push(courseCard(yes, s));
    } else if (unconfirmed) lines.push(say("providerUnconfirmed", lang, { provider: name, skill: skillLabel(s, lang) }));
    else lines.push(say("providerNo", lang, { provider: name, skill: skillLabel(s, lang) }));
    if (!yes) {
      const others = coursesForSkill(s, COURSES).filter((c) => !ids.includes(c.id));
      if (others.length) { lines.push(say("coursesT", lang, { skill: skillLabel(s, lang) })); cards.push(...others.slice(0, 3).map((c) => courseCard(c, s))); }
    }
  }
  return { text: lines.join("\n\n"), cards };
}

function govtReply(lang, today) {
  const open = VACANCIES
    .map((v) => ({ v, status: vacancyStatus(v, today).status }))
    .filter((x) => x.status === "open" || x.status === "closing-soon")
    .sort((a, b) => a.v.closes.localeCompare(b.v.closes));
  if (!open.length) return { text: say("govtNone", lang), links: [{ page: "jobs.html" }] };
  const lines = [say("govtT", lang), ...open.slice(0, 6).map(({ v }) => {
    const left = daysBetween(today, v.closes);
    return `- **${pick(v.title, lang)}** — ${say("govtItem", lang, { date: v.closes, n: left })}${v.verification === "news-reports" ? " · " + say("govtConfirm", lang) : ""}`;
  }), "", say("govtNote", lang)];
  return { text: lines.join("\n"), links: [{ page: "jobs.html" }] };
}

function roadmapReply(stageId, lang) {
  const stage = STAGES.find((s) => s.id === stageId);
  const paths = PATHS.filter((p) => p.stage === stageId);
  const lines = [say("roadmapT", lang, { stage: pick(stage.name, lang) }), ...paths.map((p) => `- **${pick(p.name, lang)}** — ${pick(p.duration, lang)}`)];
  return { text: lines.join("\n"), links: [{ page: `roadmap.html?stage=${stageId}`, pageKey: "roadmap.html" }], chips: [{ label: chip("govt", lang), send: chip("govt", lang) }] };
}

function firstSkillsReply(ctx, lang) {
  const c = careerById(ctx.goal);
  const path = GENERAL_PATHS[ctx.goal];
  const lines = [say("firstSkills", lang, { title: pick(c.title, lang) })];
  if (path) lines.push(...path[lang === "hi" ? "hi" : lang === "hl" ? "hl" : "en"].map((s, i) => `${i + 1}. ${s}`));
  else {
    const order = [...c.requiredSkills, ...c.optionalSkills];
    if (order.length) lines.push(...order.map((s, i) => `${i + 1}. ${skillLabel(s, lang)}`));
    else lines.push(say("careerNoSkills", lang));
  }
  lines.push("", say("noGuarantee", lang));
  return { text: lines.join("\n"), chips: [{ label: chip("courses", lang), send: chip("courses", lang) }] };
}

function goalSkills(goal) {
  const c = careerById(goal);
  return c ? [...c.requiredSkills, ...c.optionalSkills].slice(0, 3) : [];
}

// ---------------- Main entry ----------------
function newContext(today) {
  return { lang: "en", goal: null, area: null, budget: null, level: null, edu: null, lastSkills: [], pendingOptions: null, today: today || "2026-10-24" };
}

/**
 * Answers one message. Returns { reply: { text, chips, cards, links }, ctx }.
 * ctx is a plain object kept only for this conversation (never shared).
 */
function respond(input, prevCtx) {
  const ctx = { ...newContext(prevCtx?.today), ...(prevCtx || {}) };
  let raw = typeof input === "string" ? input : "";
  // Remove control characters; keep the text otherwise unchanged.
  raw = raw.replace(/[\u0000-\u0008\u000B\u000C\u000E-\u001F\u007F]/g, "").trim();
  const notes = [];
  if (raw.length > MAX_INPUT) { raw = raw.slice(0, MAX_INPUT); notes.push("tooLong"); }
  // Clicking a suggestion or answering "1", "2"… keeps the language of the chat.
  const fromChip = Array.isArray(ctx.lastSends) && ctx.lastSends.includes(raw);
  const lang = (fromChip || ctx.keepLang ? ctx.lang : detectLang(raw)) || ctx.lang || "en";
  ctx.lang = lang;
  ctx.keepLang = false;
  const out = (reply) => {
    const pre = notes.map((n) => say(n, lang, { n: MAX_INPUT })).join("\n");
    const full = { chips: [], cards: [], links: [], sections: [], ...reply, text: (pre ? pre + "\n\n" : "") + (reply.text || "") };
    ctx.lastSends = full.chips.map((c) => c.send).concat(ctx.pendingOptions || []);
    return { reply: full, ctx };
  };
  if (!raw) return out({ text: say("empty", lang) });

  const t = norm(raw);

  // Numbered answer to a list of options we just showed.
  if (/^[1-9]$/.test(t) && Array.isArray(ctx.pendingOptions) && ctx.pendingOptions[Number(t) - 1]) {
    return respond(ctx.pendingOptions[Number(t) - 1], { ...ctx, pendingOptions: null, keepLang: true });
  }
  ctx.pendingOptions = null;

  // 1. Requests for secrets, instructions or other people's data.
  if (word(t, /(api.?key|secret|password|token|system prompt|system instruction|your instructions|prompt dikha|admin|database dump|other users?|another user|dusre (user|logon)|kisi aur ki chat|सिस्टम प्रॉम्प्ट|पासवर्ड|दूसरों की चैट)/)) {
    return out({ text: say("secrets", lang) });
  }
  // 2. Not wanting to share personal details.
  if (word(t, /(nahi batana|nahi bataunga|nahi batungi|naam nahi|don.?t want to (share|tell)|won.?t share|no personal|private rakhna|नाम नहीं|नहीं बताना|निजी जानकारी)/)) {
    return out({ text: say("privacy", lang), chips: areaChips(lang).slice(0, 3) });
  }
  // 3. Preferences that can be corrected at any time.
  const prefNotes = [];
  if (word(t, /(free|muft|mufat|bina paise|मुफ़्त|मुफ्त|फ्री)/)) { ctx.budget = "free"; prefNotes.push(say("prefFree", lang)); }
  if (word(t, /(paid (course )?(is )?ok|paise de sakta|paise de sakti|can pay)/)) ctx.budget = "any";
  if (word(t, /(beginner|shuru se|shuruaat se|starting from scratch|from zero|शुरुआत से|शुरू से)/)) { ctx.level = "beginner"; prefNotes.push(say("prefBeginner", lang)); }

  const edu = findEdu(t);
  const career = findCareer(t);
  const provider = findProvider(t);
  const skills = findSkills(t).filter((s) => !(career === "web-developer" && s === "webdev" && !provider) || /course|seekh|sikh|learn|सीख/.test(t));
  const unknown = findUnknownSkill(t);

  // Scholarships and schemes have their own pages.
  if (word(t, /(scholarship|छात्रवृत्ति|स्कॉलरशिप|vazifa)/)) return out({ text: say("pagePointer", lang, { page: lang === "en" ? "Scholarship Finder" : "स्कॉलरशिप" }), links: [{ page: "scholarships.html" }] });
  if (word(t, /(scheme|yojana|योजना|loan)/)) return out({ text: say("pagePointer", lang, { page: lang === "en" ? "Scheme Finder" : "योजनाएँ" }), links: [{ page: "schemes.html" }] });
  // 4. Guarantee / salary questions.
  if (word(t, /(guarantee|guaranteed|pakka|pakki naukri|100 ?%|surely get|salary|tankhwah|tankha|kitna kama|kitni kamai|वेतन|सैलरी|गारंटी|पक्की नौकरी|कमाई)/)) {
    if (career) ctx.goal = career;
    return out(salaryReply(ctx, lang));
  }
  // 5. Provider check ("does ITI teach welding?").
  if (provider) return out(withPrefix(prefNotes, providerReply(provider, skills, lang)));

  // 6. Topics with their own pages.
  if (word(t, /(10th ke baad|10 ke baad|after 10th|after class 10|10वीं के बाद|दसवीं के बाद)/)) return out(roadmapReply("after10", lang));
  if (word(t, /(12th ke baad|12 ke baad|after 12th|after class 12|12वीं के बाद|बारहवीं के बाद)/)) return out(roadmapReply("after12", lang));
  if (word(t, /(sarkari|government job|govt job|vacanc|bharti|recruitment|सरकारी|भर्ती|वैकेंसी)/) && !career) return out(govtReply(lang, ctx.today));
  if (word(t, /(private job|private naukri|company job|प्राइवेट नौकरी)/)) return out({ text: say("pagePointer", lang, { page: "Private Job Finder" }), links: [{ page: "private-jobs.html" }] });
  if (word(t, /\bquiz\b|क्विज़/)) return out({ text: say("notSureArea", lang), links: [{ page: "quiz.html" }] });

  // 7. A career goal (also used to change the goal later).
  if (career) {
    ctx.goal = career;
    ctx.lastSkills = goalSkills(career);
    const r = careerReply(career, lang, ctx);
    if (edu) r.text = eduFitText(edu, career, lang) + "\n\n" + r.text;
    if (edu) ctx.edu = edu;
    return out(withPrefix(prefNotes, r));
  }
  // 8. Education given on its own → relate it to the current goal.
  if (edu) {
    ctx.edu = edu;
    if (ctx.goal) return out({ text: eduFitText(edu, ctx.goal, lang), chips: [{ label: chip("firstSkills", lang), send: chip("firstSkills", lang) }] });
    return out(roadmapReply(["class10"].includes(edu) ? "after10" : "after12", lang));
  }
  // 9. A skill or course question.
  if (skills.length) {
    ctx.lastSkills = skills;
    return out(withPrefix(prefNotes, coursesReply(skills, lang, ctx)));
  }
  if (unknown) return out({ text: say("unknownSkill", lang, { skill: unknown.trim() }), links: [{ url: "https://www.skillindiadigital.gov.in/", label: "Skill India Digital Hub" }] });

  // 10. Feeling unsure / where to start.
  if (word(t, /(samajh nahi|samjh nahi|confus|pata nahi|kya karu|kya karun|kya karna chahiye|kya karoon|what should i do|don.?t know what|no idea|not sure|unsure|समझ नहीं|पता नहीं|क्या करूँ|क्या करना चाहिए|उलझन|पक्का नहीं)/)) {
    if (ctx.pendingArea) { ctx.pendingArea = false; return out({ text: say("notSureArea", lang), links: [{ page: "quiz.html" }] }); }
    ctx.pendingArea = true;
    const chips = areaChips(lang);
    ctx.pendingOptions = chips.map((c) => c.send);
    return out({ text: say("unsure", lang) + "\n" + chips.map((c, i) => `${i + 1}. ${c.label}`).join("\n"), chips });
  }
  // 11. An interest area.
  const area = findArea(t) || QUIZ_AREAS.find((a) => t.includes(norm(a.name.en)) || raw.includes(a.name.hi))?.id;
  if (area) {
    ctx.area = area; ctx.pendingArea = false;
    const a = QUIZ_AREAS.find((x) => x.id === area);
    const careers = a.careers.map((id) => careerById(id)).filter(Boolean).slice(0, 6);
    ctx.pendingOptions = careers.map((c) => pick(c.title, lang === "hi" ? "hi" : "en"));
    return out({
      text: say("area", lang, { area: pick(a.name, lang), about: pick(a.about, lang), careers: careers.map((c, i) => `${i + 1}. ${pick(c.title, lang)}`).join("; ") }),
      chips: careers.slice(0, 4).map((c) => ({ label: pick(c.title, lang), send: pick(c.title, "en") })),
      links: [{ page: "quiz.html" }]
    });
  }
  // 12. Follow-ups that rely on the conversation so far.
  if (word(t, /(pehle kya|pahle kya|first|start kaha|shuru kaha|kahan se shuru|where (do|should) i start|next step|aage kya|roadmap|steps|पहले क्या|कहाँ से शुरू|अगला क़दम|अगला कदम)/)) {
    return out(ctx.goal ? firstSkillsReply(ctx, lang) : { text: say("needGoal", lang), chips: areaChips(lang).slice(0, 4) });
  }
  if (word(t, /(course|courses|kahan seekh|kahan sikh|where (can|to) learn|provider|institute|कोर्स|कहाँ सीख|संस्थान|verified)/)) {
    const list = ctx.lastSkills && ctx.lastSkills.length ? ctx.lastSkills : goalSkills(ctx.goal);
    return out(list.length ? withPrefix(prefNotes, coursesReply(list, lang, ctx)) : { text: say("needGoal", lang) });
  }
  if (word(t, /(general (way|tareeka|path)|samjhao|explain)/) && ctx.lastSkills?.length) {
    return out({ text: generalLearning(ctx.lastSkills[0], lang) });
  }
  if (prefNotes.length) return out({ text: prefNotes.join(" ") + (ctx.lastSkills?.length ? "" : "\n\n" + say("needGoal", lang)) , chips: ctx.lastSkills?.length ? [{ label: chip("courses", lang), send: chip("courses", lang) }] : [] });
  // 13. Greetings and thanks.
  if (word(t, /^(hi|hello|hey|namaste|namaskar|नमस्ते|नमस्कार|hii+|helo|start|help|madad)\b/)) return out({ text: say("hello", lang), chips: helloChips(lang) });
  if (word(t, /(thank|thanks|dhanyavad|shukriya|धन्यवाद|शुक्रिया)/)) return out({ text: say("thanks", lang) });

  return out({ text: say("fallback", lang), chips: helloChips(lang) });
}

function withPrefix(prefNotes, reply) {
  return prefNotes.length ? { ...reply, text: prefNotes.join(" ") + "\n\n" + reply.text } : reply;
}

function eduFitText(edu, goal, lang) {
  const c = careerById(goal);
  const label = pick(EDU_LABEL[edu], lang);
  let fit = "";
  if (c && Array.isArray(c.education)) {
    fit = c.education.includes(edu) ? say("eduFits", lang, { title: pick(c.title, lang) }) : say("eduGap", lang, { title: pick(c.title, lang), edu: eduList(c.education, lang) });
  } else if (c && c.education === null) fit = say("careerEduVaries", lang);
  return say("eduAsk", lang, { level: label, fit });
}

function generalLearning(skillId, lang) {
  const name = skillLabel(skillId, lang);
  const steps = {
    en: [`Learn the basics of ${name} from free videos or books`, "Practise a little every day", "Make one small real piece of work", "Ask someone experienced for feedback", "Look for verified courses again later — our list is updated"],
    hi: [`${name} की बुनियाद मुफ़्त वीडियो या किताबों से सीखें`, "रोज़ थोड़ा अभ्यास करें", "एक छोटा असली काम बनाकर देखें", "किसी अनुभवी व्यक्ति से राय लें", "बाद में फिर से जाँचे गए कोर्स देखें — हमारी सूची अपडेट होती है"],
    hl: [`${name} ke basics free videos ya books se seekhiye`, "Roz thoda practice kariye", "Ek chhota asli kaam bana kar dekhiye", "Kisi experienced vyakti se feedback lijiye", "Baad mein phir se verified courses dekhiye — hamari list update hoti hai"]
  };
  return say("pathT", lang) + "\n" + steps[lang === "hi" ? "hi" : lang === "hl" ? "hl" : "en"].map((s, i) => `${i + 1}. ${s}`).join("\n");
}

function helloChips(lang) {
  return [
    { label: chip("unsure", lang), send: chip("unsure", lang) },
    { label: chip("after12", lang), send: chip("after12", lang) },
    { label: chip("govt", lang), send: chip("govt", lang) },
    { label: lang === "en" ? "I want to become a data analyst" : lang === "hi" ? "मुझे डेटा एनालिस्ट बनना है" : "Mujhe data analyst banna hai", send: lang === "en" ? "I want to become a data analyst" : lang === "hi" ? "मुझे डेटा एनालिस्ट बनना है" : "Mujhe data analyst banna hai" }
  ];
}

function welcome(lang = "en") {
  return { text: say("hello", lang), chips: helloChips(lang), cards: [], links: [] };
}

/**
 * Facts for the optional AI mode: only verified website data relevant to the
 * message and the conversation. The AI is told to use ONLY these facts for any
 * course, provider, link, salary or vacancy.
 */
function retrieveFacts(input, ctx) {
  const t = norm(input);
  const career = findCareer(t) || ctx?.goal || null;
  const skills = [...new Set([...findSkills(t), ...(career ? goalSkills(career) : []), ...((ctx && ctx.lastSkills) || [])])].slice(0, 5);
  const today = ctx?.today || "2026-10-24";
  const c = career ? careerById(career) : null;
  return {
    career: c ? { id: c.id, title: c.title.en, summary: c.summary.en, education: c.education, requiredSkills: c.requiredSkills, optionalSkills: c.optionalSkills } : null,
    verifiedCourses: Object.fromEntries(skills.map((s) => [s, coursesForSkill(s, COURSES).slice(0, 4).map((x) => ({
      title: x.title.en, provider: x.provider.en, url: x.url, cost: x.cost, costNote: x.costNote?.en || null, duration: x.duration?.en || null,
      evidence: x.evidence ? `${x.evidence.text.en} (checked ${x.evidence.checked})` : null
    }))])),
    skillsWithoutVerifiedProvider: skills.filter((s) => !coursesForSkill(s, COURSES).length),
    salary: career && ROLE_FOR_CAREER[career] ? (() => { const r = ROLES.find((x) => x.id === ROLE_FOR_CAREER[career]); const v = salaryView(r.salary, today); return v.show ? { role: r.title.en, monthlyLow: v.low, monthlyHigh: v.high, profiles: v.profiles, updated: v.updated, source: SALARY_SOURCE.name, url: v.url } : { role: r.title.en, available: false }; })() : null,
    openGovtRecruitments: VACANCIES.filter((v) => ["open", "closing-soon"].includes(vacancyStatus(v, today).status)).map((v) => ({ title: v.title.en, closes: v.closes, apply: v.applyUrl, verification: v.verification })),
    today
  };
}

return { detectLang, newContext, respond, welcome, retrieveFacts, MAX_INPUT, MAX_TURNS_KEPT, SKILL_ALIASES, CAREER_ALIASES };
})();

// ===== js/chat-config.js =====
__mods["js/chat-config.js"] = (function () {
// Settings for the CareerSaathi Assistant.
//
// aiEndpoint: the address of YOUR chat server (see server/README.md).
//   ""  → the assistant runs only in "guide mode": fully in the visitor's browser,
//         nothing is sent anywhere, answers come from this website's data.
//   "https://careersaathi-chat.<your-name>.workers.dev/chat"
//       → visitors can switch on AI answers (Google Gemini). The API key stays on
//         the server — NEVER put an API key in this file or anywhere in the website.
const CHAT_CONFIG = {
  aiEndpoint: "",
  aiProviderName: "Google Gemini",
  timeoutMs: 25000,
  maxHistory: 12 // messages sent to the AI server for context
};

return { CHAT_CONFIG };
})();

// ===== js/chat-ai.js =====
__mods["js/chat-ai.js"] = (function () {
// Talks to the optional AI chat server (server/chat-worker.js).
// The browser never holds an API key. Verified website facts are sent along so the
// AI can only cite real courses, providers, links and dates.

const { CHAT_CONFIG } = __mods["js/chat-config.js"];
/** An error with a `kind` the page can explain to the visitor. */
function ChatError(kind, message) {
  const err = new Error(message || kind);
  err.name = "ChatError";
  err.kind = kind;
  return err;
}

/** Removes any web address the AI wrote that is not in the verified facts. */
function stripUnverifiedLinks(text, facts) {
  const allowed = new Set();
  const walk = (v) => {
    if (typeof v === "string" && /^https?:\/\//.test(v)) allowed.add(v.replace(/\/$/, ""));
    else if (Array.isArray(v)) v.forEach(walk);
    else if (v && typeof v === "object") Object.values(v).forEach(walk);
  };
  walk(facts);
  return String(text).replace(/https?:\/\/[^\s)\]>"']+/g, (u) => {
    const clean = u.replace(/[.,;:!?]+$/, "");
    return allowed.has(clean.replace(/\/$/, "")) ? u : "[link removed — not in our verified data]";
  });
}

/**
 * history: [{ role: "user" | "assistant", text }]  (most recent last)
 * Returns the reply text. Throws ChatError with kind:
 *   "off" | "timeout" | "network" | "rate" | "server" | "bad"
 */
async function askAI(history, facts, lang, { endpoint = CHAT_CONFIG.aiEndpoint, fetchImpl = globalThis.fetch, timeoutMs = CHAT_CONFIG.timeoutMs } = {}) {
  if (!endpoint) throw ChatError("off");
  const controller = new AbortController();
  const timer = setTimeout(() => controller.abort(), timeoutMs);
  let res;
  try {
    res = await fetchImpl(endpoint, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ messages: history.slice(-CHAT_CONFIG.maxHistory), facts, lang }),
      signal: controller.signal,
      credentials: "omit"
    });
  } catch (err) {
    throw ChatError(err && err.name === "AbortError" ? "timeout" : "network");
  } finally {
    clearTimeout(timer);
  }
  if (res.status === 429) throw ChatError("rate");
  if (!res.ok) throw ChatError("server", String(res.status));
  let data;
  try { data = await res.json(); } catch { throw ChatError("bad"); }
  if (!data || typeof data.reply !== "string" || !data.reply.trim() || data.reply.length > 6000) throw ChatError("bad");
  return stripUnverifiedLinks(data.reply.trim(), facts);
}

return { ChatError, stripUnverifiedLinks, askAI };
})();

// ===== js/chat-widget.js =====
__mods["js/chat-widget.js"] = (function () {
// CareerSaathi Assistant — floating chat button and panel, added to every page.
// Privacy: no login, no personal details. The conversation is kept only in this
// browser tab (sessionStorage) and is deleted by "New chat", by closing the tab,
// or by "Delete my saved data" on the Privacy page. In guide mode nothing leaves
// the browser. AI mode (only if configured AND switched on by the visitor) sends
// the messages to our chat server and Google Gemini.

const { t } = __mods["js/i18n.js"];
const { esc, extLink, formatDate } = __mods["js/ui.js"];
const { getJSON, setJSON, removeItem } = __mods["js/storage.js"];
const { respond, newContext, welcome, retrieveFacts, MAX_INPUT } = __mods["js/chat-engine.js"];
const { askAI } = __mods["js/chat-ai.js"];
const { CHAT_CONFIG } = __mods["js/chat-config.js"];
const { todayISO } = __mods["js/vacancy-match.js"];
const { ALL_SKILLS, labelOf } = __mods["data/options.js"];
const KEY = "chat";
const PAGE_LABEL = {
  "jobs.html": "nav.jobs", "courses.html": "nav.courses", "recommendations.html": "nav.recommendations",
  "quiz.html": "nav.quiz", "roadmap.html": "nav.roadmap", "scholarships.html": "nav.scholarships",
  "schemes.html": "nav.schemes", "private-jobs.html": "nav.privateJobs", "profile.html": "nav.profile"
};
const COST_KEY = { free: "sd.cost.free", "free-exam-fee": "sd.cost.freeExam", fee: "sd.cost.fee" };

let getLang = () => "en";
const L = () => getLang();
const tt = (k, v) => t(k, L(), v);
const txt = (o) => (o ? o[L()] || o.en : "");

const state = { open: false, messages: [], ctx: null, busy: false, useAI: false, lastFailed: null };

// ---------- storage (this tab only) ----------
function load() {
  const saved = getJSON(KEY, null, "session");
  if (saved && Array.isArray(saved.messages) && saved.ctx && typeof saved.ctx === "object") {
    state.messages = saved.messages.slice(-60);
    state.ctx = saved.ctx;
    state.useAI = Boolean(saved.useAI && CHAT_CONFIG.aiEndpoint);
  }
  if (!state.ctx) state.ctx = newContext(todayISO());
  state.ctx.today = todayISO(); // dates are always worked out fresh
}
function save() { setJSON(KEY, { messages: state.messages.slice(-60), ctx: state.ctx, useAI: state.useAI }, "session"); }
function reset() {
  removeItem(KEY, "session");
  state.messages = []; state.ctx = newContext(todayISO()); state.lastFailed = null; state.busy = false;
}

// ---------- drawing ----------
function formatText(s) {
  // Escape first, then allow **bold** and line breaks only.
  return esc(s).replace(/\*\*(.+?)\*\*/g, "<strong>$1</strong>").replace(/\n/g, "<br>");
}

function cardHtml(c) {
  const skill = labelOf(ALL_SKILLS, c.skill, L());
  return `
  <li class="cs-card">
    <strong>${esc(txt(c.title))}</strong>
    <span class="cs-card-prov">${esc(txt(c.provider))}</span>
    <span class="cs-card-meta">✓ ${esc(tt("chat.verifiedFor", { skill }))}</span>
    <span class="cs-card-meta">${esc(tt("sd.costT"))}: ${esc(c.cost ? tt(COST_KEY[c.cost]) : tt("sd.cost.none"))}</span>
    ${c.evidence ? `<span class="cs-card-meta">${esc(tt("chat.checkedOn", { date: formatDate(c.evidence.checked, L()) }))}</span>` : ""}
    ${extLink(c.url, tt("sd.open"), tt("rec.newTab"), "cs-card-link")}
  </li>`;
}

function linksHtml(links) {
  if (!links || !links.length) return "";
  return `<p class="cs-links">${links.map((l) => {
    if (l.page) {
      const key = PAGE_LABEL[l.pageKey || l.page.split("?")[0]];
      return `<a href="${esc(l.page)}">${esc(key ? tt(key) : l.page)} →</a>`;
    }
    return extLink(l.url, l.label, tt("rec.newTab"));
  }).join(" ")}</p>`;
}

function botHtml(m) {
  const r = m.reply;
  const sections = (r.sections || []).map((s) => `
    <p>${formatText(s.text)}</p>
    ${s.cards.length ? `<ul class="cs-cards">${s.cards.map(cardHtml).join("")}</ul>` : ""}`).join("");
  const plainCards = !(r.sections && r.sections.length) && r.cards && r.cards.length
    ? `<ul class="cs-cards">${r.cards.map(cardHtml).join("")}</ul>` : "";
  return `
  <div class="cs-msg cs-msg--bot${m.mode === "ai" ? " cs-msg--ai" : ""}">
    <span class="visually-hidden">${esc(tt(m.mode === "ai" ? "chat.aiSaid" : "chat.botSaid"))}</span>
    ${m.mode === "ai" ? `<span class="cs-tag">${esc(tt("chat.aiTag", { provider: CHAT_CONFIG.aiProviderName }))}</span>` : ""}
    ${r.text ? `<p>${formatText(r.text)}</p>` : ""}
    ${sections}${plainCards}
    ${linksHtml(r.links)}
  </div>`;
}

function messagesHtml() {
  const list = state.messages.length ? state.messages : [{ role: "bot", mode: "guide", reply: welcome(L()) }];
  const html = list.map((m) => {
    if (m.role === "user") return `<div class="cs-msg cs-msg--user"><span class="visually-hidden">${esc(tt("chat.youSaid"))}</span>${formatText(m.text)}</div>`;
    if (m.role === "error") {
      return `<div class="cs-msg cs-msg--error" role="alert"><p>${esc(tt(`chat.err.${m.kind}`))}</p>
        <p class="cs-err-actions"><button type="button" class="btn btn-secondary btn-small" data-cs="retry">${esc(tt("chat.retry"))}</button>
        <button type="button" class="btn btn-ghost btn-small" data-cs="guide-answer">${esc(tt("chat.useGuide"))}</button></p></div>`;
    }
    return botHtml(m);
  }).join("");
  const last = list[list.length - 1];
  const chips = last.role === "bot" && last.reply.chips && last.reply.chips.length && !state.busy
    ? `<div class="cs-chips">${last.reply.chips.slice(0, 7).map((c) => `<button type="button" class="cs-chip" data-send="${esc(c.send)}">${esc(c.label)}</button>`).join("")}</div>` : "";
  const thinking = state.busy ? `<div class="cs-msg cs-msg--bot cs-thinking" role="status"><span class="cs-dots" aria-hidden="true"><i></i><i></i><i></i></span> ${esc(tt("chat.thinking"))}</div>` : "";
  return html + thinking + chips;
}

function noticeHtml() {
  return `
  <details class="cs-notice"${state.messages.length ? "" : " open"}>
    <summary>${esc(tt("chat.privacyT"))}</summary>
    <p>${esc(tt(state.useAI ? "chat.privacyAI" : "chat.privacyGuide", { provider: CHAT_CONFIG.aiProviderName }))}</p>
    <p>${esc(tt("chat.privacyAll"))} <a href="privacy.html#chat">${esc(tt("chat.privacyMore"))}</a></p>
  </details>`;
}

function panelBody() {
  return `
    <div class="cs-head">
      <div>
        <h2 class="cs-title" id="cs-title">${esc(tt("chat.title"))}</h2>
        <p class="cs-sub">${esc(tt(state.useAI ? "chat.subAI" : "chat.subGuide", { provider: CHAT_CONFIG.aiProviderName }))}</p>
      </div>
      <div class="cs-head-actions">
        <button type="button" class="cs-icon-btn" data-cs="new" title="${esc(tt("chat.new"))}"><span aria-hidden="true">↺</span><span class="visually-hidden">${esc(tt("chat.new"))}</span></button>
        <button type="button" class="cs-icon-btn" data-cs="close" title="${esc(tt("chat.close"))}"><span aria-hidden="true">✕</span><span class="visually-hidden">${esc(tt("chat.close"))}</span></button>
      </div>
    </div>
    ${noticeHtml()}
    ${CHAT_CONFIG.aiEndpoint ? `<label class="cs-ai-toggle"><input type="checkbox" data-cs="ai"${state.useAI ? " checked" : ""}> ${esc(tt("chat.aiToggle", { provider: CHAT_CONFIG.aiProviderName }))}</label>` : ""}
    <div class="cs-log" id="cs-log" role="log" aria-live="polite" aria-relevant="additions" tabindex="0">${messagesHtml()}</div>
    <form class="cs-form" id="cs-form">
      <label for="cs-input" class="visually-hidden">${esc(tt("chat.inputLabel"))}</label>
      <textarea id="cs-input" rows="2" maxlength="${MAX_INPUT}" placeholder="${esc(tt("chat.placeholder"))}" aria-describedby="cs-count"${state.busy ? " disabled" : ""}></textarea>
      <div class="cs-form-row">
        <span id="cs-count" class="cs-count">0/${MAX_INPUT}</span>
        <button type="submit" class="btn btn-primary btn-small"${state.busy ? " disabled" : ""}>${esc(tt("chat.send"))}</button>
      </div>
      <p class="cs-foot">${esc(tt("chat.foot"))}</p>
    </form>`;
}

function render(focusInput) {
  const panel = document.getElementById("cs-panel");
  const btn = document.getElementById("cs-launch");
  if (!panel || !btn) return;
  btn.setAttribute("aria-expanded", String(state.open));
  panel.hidden = !state.open;
  document.body.classList.toggle("cs-open", state.open);
  if (!state.open) return;
  const draft = document.getElementById("cs-input")?.value || "";
  panel.innerHTML = panelBody();
  const input = document.getElementById("cs-input");
  if (input) { input.value = draft; updateCount(); }
  const log = document.getElementById("cs-log");
  if (log) log.scrollTop = log.scrollHeight;
  if (focusInput && input && !input.disabled) input.focus();
}

function updateCount() {
  const input = document.getElementById("cs-input");
  const c = document.getElementById("cs-count");
  if (input && c) c.textContent = `${input.value.length}/${MAX_INPUT}`;
}

// ---------- conversation ----------
function guideAnswer(text) {
  const { reply, ctx } = respond(text, state.ctx);
  state.ctx = ctx;
  state.messages.push({ role: "bot", mode: "guide", reply });
}

async function send(text) {
  const clean = String(text || "").slice(0, MAX_INPUT).trim();
  if (!clean || state.busy) return;
  state.messages.push({ role: "user", text: clean });
  if (!state.useAI) {
    guideAnswer(clean);
    save(); render(true);
    return;
  }
  await askWithAI(clean);
}

async function askWithAI(clean) {
  state.busy = true; state.lastFailed = null;
  save(); render(false);
  // Keep the guide's understanding of the chat (goal, language) up to date too.
  const local = respond(clean, state.ctx);
  const facts = retrieveFacts(clean, local.ctx);
  const history = state.messages
    .filter((m) => m.role === "user" || (m.role === "bot" && m.mode === "ai"))
    .map((m) => ({ role: m.role === "user" ? "user" : "assistant", text: m.role === "user" ? m.text : m.reply.text }));
  try {
    const answer = await askAI(history, facts, local.ctx.lang);
    state.ctx = local.ctx;
    // Data cards come from the website's verified data, not from the AI.
    state.messages.push({ role: "bot", mode: "ai", reply: { text: answer, sections: local.reply.sections || [], cards: local.reply.sections?.length ? [] : local.reply.cards || [], links: local.reply.links || [], chips: [] } });
  } catch (err) {
    state.lastFailed = clean;
    state.messages.push({ role: "error", kind: err && err.name === "ChatError" ? err.kind : "network" });
  } finally {
    state.busy = false;
    save(); render(true);
  }
}

// ---------- events ----------
function openPanel() { state.open = true; render(true); }
function closePanel() {
  state.open = false; render(false);
  document.getElementById("cs-launch")?.focus();
}

function onPanelClick(e) {
  const chip = e.target.closest("[data-send]");
  if (chip) { send(chip.dataset.send); return; }
  const b = e.target.closest("[data-cs]");
  if (!b) return;
  const action = b.dataset.cs;
  if (action === "close") closePanel();
  else if (action === "new") { reset(); save(); render(true); }
  else if (action === "retry" && state.lastFailed) {
    const text = state.lastFailed;
    state.messages = state.messages.filter((m) => m.role !== "error");
    askWithAI(text);
  } else if (action === "guide-answer" && state.lastFailed) {
    const text = state.lastFailed;
    state.messages = state.messages.filter((m) => m.role !== "error");
    state.lastFailed = null;
    guideAnswer(text);
    save(); render(true);
  }
}

function onPanelChange(e) {
  if (e.target.matches('[data-cs="ai"]')) {
    state.useAI = e.target.checked;
    save(); render(false);
    document.querySelector('[data-cs="ai"]')?.focus();
  }
}

function openChat() { openPanel(); }
function toggleChat() { (state.open ? closePanel : openPanel)(); }

/** Adds the button and the (hidden) panel. Safe to call once per page. */
function initChat(langGetter) {
  if (typeof document === "undefined" || document.getElementById("cs-panel")) return;
  if (typeof langGetter === "function") getLang = langGetter;
  load();
  // Take over the small launcher button that layout.js put on the page.
  let btn = document.getElementById("cs-launch");
  if (btn) { const fresh = btn.cloneNode(true); btn.replaceWith(fresh); btn = fresh; }
  else {
    btn = document.createElement("button");
    btn.type = "button";
    btn.id = "cs-launch";
    btn.className = "cs-launch no-print";
    btn.setAttribute("aria-controls", "cs-panel");
    btn.setAttribute("aria-expanded", "false");
    btn.innerHTML = `<span class="cs-launch-icon" aria-hidden="true">💬</span><span class="cs-launch-text" data-i18n="chat.launch">${esc(tt("chat.launch"))}</span>`;
    document.body.append(btn);
  }
  const panel = document.createElement("section");
  panel.id = "cs-panel";
  panel.className = "cs-panel no-print";
  panel.setAttribute("aria-labelledby", "cs-title");
  panel.hidden = true;
  document.body.append(panel);

  btn.addEventListener("click", () => (state.open ? closePanel() : openPanel()));
  panel.addEventListener("click", onPanelClick);
  panel.addEventListener("change", onPanelChange);
  panel.addEventListener("input", (e) => { if (e.target.id === "cs-input") updateCount(); });
  panel.addEventListener("submit", (e) => {
    e.preventDefault();
    const input = document.getElementById("cs-input");
    const value = input ? input.value : "";
    if (input) input.value = "";
    send(value);
  });
  panel.addEventListener("keydown", (e) => {
    if (e.key === "Escape") { e.preventDefault(); closePanel(); return; }
    if (e.key === "Enter" && !e.shiftKey && e.target.id === "cs-input") {
      e.preventDefault();
      document.getElementById("cs-form")?.requestSubmit();
    }
  });
  document.addEventListener("cs:langchange", () => render(false));
}

return { openChat, toggleChat, initChat };
})();

// ===== js/chat-entry.js =====
__mods["js/chat-entry.js"] = (function () {
// Entry point for the chat assistant. layout.js loads this only when a visitor
// opens the chat (in the built site it becomes js/bundle-chat.js).
const { initChat, openChat, toggleChat } = __mods["js/chat-widget.js"];
window.CareerSaathiChat = { init: initChat, open: openChat, toggle: toggleChat };

return {  };
})();

})();
