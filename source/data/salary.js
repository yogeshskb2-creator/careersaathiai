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

export const SALARY_SOURCE = { name: "PayScale India", url: "https://www.payscale.com/research/IN/Country=India/Salary" };
export const SALARY_ACCESSED = "2026-10-23";

const s = (id, title, avg, p10, p90, profiles, updated, path) =>
  ({ id, title, avg, p10, p90, profiles, updated, url: `https://www.payscale.com/research/IN/Job=${path}/Salary` });

export const SALARIES = [
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
