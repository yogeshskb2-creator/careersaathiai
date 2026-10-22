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

    // ---- Contact, terms, ads, guides ----
    "nav.guides": "Guides",
    "footer.terms": "Terms of use",
    "footer.contact": "Contact us",
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

    // ---- Contact, terms, ads, guides ----
    "nav.guides": "करियर गाइड",
    "footer.terms": "उपयोग की शर्तें",
    "footer.contact": "संपर्क करें",
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
  { id: "quiz",            href: "quiz.html",            key: "nav.quiz",            ready: true },
  { id: "recommendations", href: "recommendations.html", key: "nav.recommendations", ready: true },
  { id: "jobs",            href: "jobs.html",            key: "nav.jobs",            ready: true },
  { id: "schemes",         href: "schemes.html",         key: "nav.schemes",         ready: true },
  { id: "scholarships",    href: "scholarships.html",    key: "nav.scholarships",    ready: true },
  { id: "courses",         href: "courses.html",         key: "nav.courses",         ready: true },
  { id: "roadmap",         href: "roadmap.html",         key: "nav.roadmap",         ready: true },
  { id: "guides",          href: "guides.html",          key: "nav.guides",          ready: true },
  { id: "dashboard",       href: "dashboard.html",       key: "nav.dashboard",       ready: true }
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
        <li><a href="about.html" data-i18n="nav.about"></a></li>
        <li><a href="about.html#disclaimer" data-i18n="footer.disclaimer"></a></li>
        <li><a href="privacy.html" data-i18n="footer.privacy"></a></li>
        <li><a href="terms.html" data-i18n="footer.terms"></a></li>
        <li><a href="contact.html" data-i18n="footer.contact"></a></li>
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

// ===== js/privacy.js =====
__mods["js/privacy.js"] = (function () {
// Privacy page: "Delete my saved data" button.
const { clearAll } = __mods["js/storage.js"];
const { t } = __mods["js/i18n.js"];
const { getLang } = __mods["js/layout.js"];
const button = document.getElementById("delete-data");
const result = document.getElementById("delete-result");

if (button && result) {
  button.addEventListener("click", () => {
    const removed = clearAll();
    let key = "privacy.deleteDone";
    let kind = "ok";
    if (removed === 0) { key = "privacy.deleteNone"; kind = "info"; }
    if (removed < 0)   { key = "privacy.deleteError"; kind = "info"; }

    result.className = `alert alert--${kind}`;
    result.dataset.i18n = key; // so it re-translates if the language changes
    result.textContent = t(key, getLang());
  });
}

return {  };
})();

})();
