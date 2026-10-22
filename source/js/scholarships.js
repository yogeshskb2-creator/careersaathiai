// Scholarship Finder page.
import { startFinder } from "./finder.js";
import { SCHOLARSHIPS, SCHOLARSHIP_CATEGORIES, NSP_PORTAL } from "../data/scholarships.js";

startFinder({
  rootId: "scholarships-app",
  items: SCHOLARSHIPS,
  categories: SCHOLARSHIP_CATEGORIES,
  portal: NSP_PORTAL,
  keys: {
    portalT: "schol.portalT", portalBtn: "schol.portalBtn",
    worth: "schol.worth", worthD: "schemes.worthD", others: "schol.others", all: "schol.all",
    noProfile: "schol.noProfile", noWorth: "schol.noWorth"
  }
});
