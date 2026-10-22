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

// ===== js/scheme-match.js =====
__mods["js/scheme-match.js"] = (function () {
// Decides which schemes are "worth a look" for a profile.
// It NEVER says a person is eligible — it only points out which recorded
// conditions seem to fit and which must be confirmed with the department.

const { normalizeProfile } = __mods["js/profile-model.js"];
const { userLevels } = __mods["js/engine.js"];
const msg = (key, vars = {}) => ({ key, vars });

function evaluateScheme(scheme, rawProfile) {
  const p = normalizeProfile(rawProfile);
  const h = scheme.hints || {};
  const reasons = [];
  const checks = [];
  let blocked = false; // a recorded condition clearly does not fit

  // Goals
  const goals = (h.goals || []).filter((g) => p.goals.includes(g));
  if (goals.length) reasons.push(msg("sch.why.goal", { goals }));
  const goalOk = !h.goals || goals.length > 0;

  // Current status (e.g. unemployed / student)
  if (h.employment && h.employment.includes(p.employmentStatus)) reasons.push(msg("sch.why.status"));

  // Education
  if (h.education) {
    const levels = userLevels(p);
    const hit = levels.find((l) => h.education.includes(l));
    if (hit) reasons.push(msg("sch.why.edu", { level: hit }));
    else if (levels.length) checks.push(msg("sch.check.edu"));
  }

  // Age: exact age (if given) beats the age range
  const age = p.eligibility.exactAge;
  if (h.exactAge && Number.isInteger(age)) {
    const [min, max] = h.exactAge;
    if (age >= min && age <= max) reasons.push(msg("sch.why.age"));
    else { checks.push(msg("sch.check.ageOut")); blocked = true; }
  } else if (h.ageRanges && p.ageRange) {
    if (h.ageRanges.includes(p.ageRange)) reasons.push(msg("sch.why.ageRange"));
    else { checks.push(msg("sch.check.ageOut")); blocked = true; }
    if (h.exactAge) checks.push(msg("sch.check.ageExact", { min: h.exactAge[0], max: h.exactAge[1] }));
  }
  if (h.notAgeRanges && h.notAgeRanges.includes(p.ageRange)) { checks.push(msg("sch.check.ageOut")); blocked = true; }

  // Special groups (e.g. SC/ST and/or women)
  if (h.genderOrCategory) {
    const { gender = [], category = [] } = h.genderOrCategory;
    const g = p.eligibility.gender;
    const c = p.eligibility.category;
    const fits = gender.includes(g) || category.includes(c);
    // Only the dimensions this scheme uses count. Blocked only when every one of them is known.
    const isKnown = (v) => Boolean(v) && v !== "prefer-not";
    const known = (gender.length === 0 || isKnown(g)) && (category.length === 0 || isKnown(c));
    if (fits) reasons.push(msg("sch.why.group"));
    else if (!known) checks.push(msg("sch.check.group"));
    else { checks.push(msg("sch.check.groupNo")); blocked = true; }
  }

  // Persons with disability (PwD)
  if (h.pwd) {
    const v = p.eligibility.pwd;
    if (v === "yes") reasons.push(msg("sch.why.pwd"));
    else if (v === "no") { checks.push(msg("sch.check.pwdNo")); blocked = true; }
    else checks.push(msg("sch.check.pwd"));
  }

  // Skills / trade
  if (h.skills) {
    const skills = h.skills.filter((s) => p.skills.includes(s));
    if (skills.length) reasons.push(msg("sch.why.skill", { skills }));
    else if (h.requireSkill) blocked = true;
  }

  checks.push(msg("sch.check.final"));

  return {
    schemeId: scheme.id,
    scheme,
    worthALook: goalOk && !blocked && reasons.length > 0,
    reasons,
    checks
  };
}

/** Returns every scheme; ones worth a look come first. Never throws. */
function matchSchemes(rawProfile, schemes) {
  if (!Array.isArray(schemes)) return [];
  const out = [];
  for (const s of schemes) {
    try { out.push(evaluateScheme(s, rawProfile)); } catch { /* skip a broken record */ }
  }
  return out.sort((a, b) => (b.worthALook - a.worthALook) || (b.reasons.length - a.reasons.length));
}

return { evaluateScheme, matchSchemes };
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

// ===== js/finder.js =====
__mods["js/finder.js"] = (function () {
// Shared "finder" page used by the Scheme Finder and the Scholarship Finder:
// summaries from official pages, plus "worth a look" hints from the saved profile.
// It never says "eligible".

const { t } = __mods["js/i18n.js"];
const { getLang } = __mods["js/layout.js"];
const { loadProfile } = __mods["js/profile-store.js"];
const { matchSchemes } = __mods["js/scheme-match.js"];
const { ALL_SKILLS, GOALS, EDUCATION_LEVELS, labelOf } = __mods["data/options.js"];
const { esc, formatDate, extLink, hostOf } = __mods["js/ui.js"];
const { ageInDays, todayISO, STALE_DAYS } = __mods["js/vacancy-match.js"];
let root = null;
let cfg = null; // { items, categories, portal, keys }
const state = { profile: null, results: [], category: "all" };

const L = () => getLang();
const tt = (key, vars) => t(key, L(), vars);
const txt = (o) => (o ? o[L()] || o.en : "");
const listOf = (list, ids) => ids.map((id) => labelOf(list, id, L())).filter(Boolean).join(", ");

function say(m) {
  const v = m.vars || {};
  const vars = { ...v };
  if (v.goals) vars.goals = listOf(GOALS, v.goals);
  if (v.skills) vars.skills = listOf(ALL_SKILLS, v.skills);
  if (v.level) vars.level = labelOf(EDUCATION_LEVELS, v.level, L());
  return tt(m.key, vars);
}

// Warn when facts are older than STALE_DAYS (worked out from today's date).
function staleNote(checked) {
  const age = ageInDays(checked, todayISO());
  return age > STALE_DAYS ? `<p class="alert alert--warn small">${esc(tt("stale.warn", { n: age }))}</p>` : "";
}

function list(items, cls = "compact") {
  return `<ul class="${cls}">${items.map((x) => `<li>${esc(txt(x))}</li>`).join("")}</ul>`;
}

function card(r, showFit) {
  const s = r.scheme;
  const cat = cfg.categories.find((c) => c.id === s.category);
  const fitHtml = showFit && r.worthALook ? `
    <h4>${esc(tt("schemes.why"))}</h4>
    <ul class="list-check compact">${r.reasons.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>` : "";
  const checks = state.profile ? r.checks : r.checks.filter((m) => m.key === "sch.check.final");

  return `
  <article class="card rec-card scheme-card" aria-labelledby="s-${s.id}">
    <div class="rec-top">
      <span class="sector">${esc(txt(cat))}</span>
      ${showFit && r.worthALook ? `<span class="fit fit--strong">${esc(tt("schemes.badge"))}</span>` : ""}
    </div>
    <h3 id="s-${s.id}">${esc(txt(s.name))}</h3>
    <p class="muted small"><strong>${esc(tt("schemes.ministry"))}:</strong> ${esc(txt(s.ministry))}</p>
    <p><strong>${esc(tt("schemes.purpose"))}:</strong> ${esc(txt(s.purpose))}</p>
    <p><strong>${esc(tt("schemes.audience"))}:</strong> ${esc(txt(s.audience))}</p>
    ${fitHtml}
    <h4>${esc(tt("schemes.check"))}</h4>
    <ul class="list-warn compact">${checks.map((m) => `<li>${esc(say(m))}</li>`).join("")}</ul>
    ${s.note ? `<p class="alert alert--warn small"><strong>${esc(tt("schemes.important"))}</strong> ${esc(txt(s.note))}</p>` : ""}
    ${staleNote(s.checked)}

    <details class="rec-more">
      <summary>${esc(tt("schemes.details"))}</summary>
      <h4>${esc(tt("schemes.eligibility"))}</h4>${list(s.eligibility)}
      <h4>${esc(tt("schemes.benefits"))}</h4>${list(s.benefits)}
      <h4>${esc(tt("schemes.apply"))}</h4>${list(s.howToApply, "compact numbered")}
    </details>

    <h4>${esc(tt("schemes.official"))}</h4>
    <p>${extLink(s.officialUrl, hostOf(s.officialUrl), tt("rec.newTab"))}</p>
    <p class="muted small">${esc(tt("schemes.readFrom", { date: formatDate(s.checked, L()), source: txt(s.checkedFrom) }))}</p>
  </article>`;
}

function render() {
  root.setAttribute("aria-busy", "false");
  const counts = {};
  cfg.items.forEach((s) => { counts[s.category] = (counts[s.category] || 0) + 1; });
  const K = cfg.keys;
  const filterButtons = [{ id: "all", label: tt("schemes.allCats"), n: cfg.items.length },
    ...cfg.categories.map((c) => ({ id: c.id, label: txt(c), n: counts[c.id] || 0 }))]
    .map((b) => `<button type="button" class="filter-btn" data-cat="${b.id}" aria-pressed="${state.category === b.id}"${b.n ? "" : " disabled"}>
      ${esc(b.label)} <span class="count">${b.n}</span></button>`).join("");

  const inCat = (r) => state.category === "all" || r.scheme.category === state.category;
  const worth = state.profile ? state.results.filter((r) => r.worthALook && inCat(r)) : [];
  const others = state.results.filter((r) => !worth.includes(r) && inCat(r));

  let intro;
  if (!state.profile) intro = `<p class="alert alert--info"><a href="profile.html">${esc(tt(K.noProfile))}</a></p>`;
  else if (!state.results.some((r) => r.worthALook)) intro = `<p class="alert alert--info">${esc(tt(K.noWorth))}</p>`;
  else intro = "";

  root.innerHTML = `
    <section class="card myscheme-card" aria-labelledby="mys-title">
      <h2 id="mys-title">${esc(tt(K.portalT))}</h2>
      <p class="muted">${esc(txt(cfg.portal.text))}</p>
      ${extLink(cfg.portal.url, tt(K.portalBtn), tt("rec.newTab"), "btn btn-primary")}
    </section>
    ${intro}
    <div class="filter-bar filter-bar--wrap" role="group" aria-label="${esc(tt("schemes.filterLabel"))}">${filterButtons}</div>
    ${worth.length ? `
      <section aria-labelledby="worth-title">
        <h2 id="worth-title">${esc(tt(K.worth))}</h2>
        <p class="muted">${esc(tt(K.worthD))}</p>
        <div class="rec-grid">${worth.map((r) => card(r, true)).join("")}</div>
      </section>` : ""}
    ${others.length ? `
      <section aria-labelledby="others-title">
        <h2 id="others-title">${esc(tt(worth.length ? K.others : K.all))}</h2>
        <div class="rec-grid">${others.map((r) => card(r, false)).join("")}</div>
      </section>` : ""}`;
}

/**
 * Starts a finder page.
 * @param {{ rootId: string, items: object[], categories: object[], portal: object, keys: object }} config
 */
function startFinder(config) {
  cfg = config;
  root = document.getElementById(config.rootId);
  if (!root) return;
  try {
    state.profile = loadProfile()?.profile || null;
    state.results = matchSchemes(state.profile, cfg.items);
    root.addEventListener("click", (e) => {
      const btn = e.target.closest("[data-cat]");
      if (!btn) return;
      state.category = btn.dataset.cat;
      render();
      root.querySelector(`[data-cat="${state.category}"]`)?.focus();
    });
    document.addEventListener("cs:langchange", () => render());
    render();
  } catch (err) {
    console.error(err);
    root.innerHTML = `<p class="alert alert--error" role="alert">${esc(tt("state.error"))}</p>`;
  }
}

return { startFinder };
})();

// ===== data/schemes.js =====
__mods["data/schemes.js"] = (function () {
// Government Scheme Finder records.
//
// RULES
// - Every fact below was read on an official government or public-sector
//   bank page on `checked` (the page is named in `checkedFrom`).
// - Rules change. The site always tells people to confirm on the official page.
// - `hints` are only used to say "may be worth checking" — NEVER "eligible".
//   Conditions we cannot check (income, BPL status, family rules) go in the
//   eligibility list and are always shown to the user.

const SCHEME_CATEGORIES = [
  { id: "training", en: "Education & skill training", hi: "शिक्षा और हुनर प्रशिक्षण" },
  { id: "employment", en: "Employment support & internships", hi: "रोज़गार सहायता और इंटर्नशिप" },
  { id: "apprenticeship", en: "Apprenticeships", hi: "अप्रेंटिसशिप" },
  { id: "entrepreneurship", en: "Entrepreneurship & artisans", hi: "उद्यमिता और कारीगर" },
  { id: "finance", en: "Business finance", hi: "व्यवसाय के लिए ऋण" }
];

const CHECKED = "2026-10-22";
const tx = (en, hi) => ({ en, hi });

const SCHEMES = [
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
const MYSCHEME = {
  url: "https://www.myscheme.gov.in/",
  name: tx("myScheme — search all government schemes", "myScheme — सभी सरकारी योजनाएँ खोजें"),
  text: tx("The official national platform to discover central and state schemes and check what you may qualify for.", "केंद्र और राज्य की योजनाएँ खोजने और अपनी पात्रता देखने का आधिकारिक राष्ट्रीय प्लेटफ़ॉर्म।")
};

return { SCHEME_CATEGORIES, SCHEMES, MYSCHEME };
})();

// ===== js/schemes.js =====
__mods["js/schemes.js"] = (function () {
// Government Scheme Finder page.
const { startFinder } = __mods["js/finder.js"];
const { SCHEMES, SCHEME_CATEGORIES, MYSCHEME } = __mods["data/schemes.js"];
startFinder({
  rootId: "schemes-app",
  items: SCHEMES,
  categories: SCHEME_CATEGORIES,
  portal: MYSCHEME,
  keys: {
    portalT: "schemes.mysT", portalBtn: "schemes.mysBtn",
    worth: "schemes.worth", worthD: "schemes.worthD", others: "schemes.others", all: "schemes.all",
    noProfile: "schemes.noProfile", noWorth: "schemes.noWorth"
  }
});

return {  };
})();

})();
