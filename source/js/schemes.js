// Government Scheme Finder page.
import { startFinder } from "./finder.js";
import { SCHEMES, SCHEME_CATEGORIES, MYSCHEME } from "../data/schemes.js";

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
