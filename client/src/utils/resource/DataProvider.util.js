const products = [
  {
    "id": "P001",
    "name": "Paracetamol 500mg",
    "category": "Pharmaceuticals",
    "subCategory": "OTC Drugs",
    "count": 150,
    "status": "Available"
  },
  {
    "id": "P002",
    "name": "Amoxicillin 250mg",
    "category": "Pharmaceuticals",
    "subCategory": "Prescription Drugs",
    "count": 80,
    "status": "Available"
  },
  {
    "id": "P003",
    "name": "Cetirizine 10mg",
    "category": "Pharmaceuticals",
    "subCategory": "OTC Drugs",
    "count": 200,
    "status": "Available"
  },
  {
    "id": "P004",
    "name": "Metformin 500mg",
    "category": "Pharmaceuticals",
    "subCategory": "Prescription Drugs",
    "count": 120,
    "status": "Available"
  },
  {
    "id": "P005",
    "name": "Insulin Injection",
    "category": "Pharmaceuticals",
    "subCategory": "Specialty Drugs",
    "count": 50,
    "status": "Out of Stock"
  },
  {
    "id": "P006",
    "name": "Surgical Gloves (Latex-Free)",
    "category": "PPE",
    "subCategory": "Gloves",
    "count": 500,
    "status": "Available"
  },
  {
    "id": "P007",
    "name": "N95 Respirator Mask",
    "category": "PPE",
    "subCategory": "Masks",
    "count": 300,
    "status": "Available"
  },
  {
    "id": "P008",
    "name": "Digital Thermometer",
    "category": "Medical Devices",
    "subCategory": "Diagnostic Tools",
    "count": 75,
    "status": "Available"
  },
  {
    "id": "P009",
    "name": "Blood Pressure Monitor",
    "category": "Medical Devices",
    "subCategory": "Diagnostic Tools",
    "count": 40,
    "status": "Out of Stock"
  },
  {
    "id": "P010",
    "name": "Glucometer Strips (50-pack)",
    "category": "Medical Devices",
    "subCategory": "Testing Kits",
    "count": 100,
    "status": "Available"
  },
  {
    "id": "P011",
    "name": "Cotton Bandage Roll",
    "category": "Consumables",
    "subCategory": "Bandages",
    "count": 300,
    "status": "Available"
  },
  {
    "id": "P012",
    "name": "Alcohol Swabs (100-pack)",
    "category": "Consumables",
    "subCategory": "Cleaning Supplies",
    "count": 500,
    "status": "Available"
  },
  {
    "id": "P013",
    "name": "IV Catheter 20G",
    "category": "Consumables",
    "subCategory": "Catheters",
    "count": 60,
    "status": "Out of Stock"
  },
  {
    "id": "P014",
    "name": "Nebulizer Machine",
    "category": "Medical Devices",
    "subCategory": "Therapeutic Devices",
    "count": 25,
    "status": "Available"
  },
  {
    "id": "P015",
    "name": "Vitamin C Tablets",
    "category": "Health and Wellness",
    "subCategory": "Vitamins",
    "count": 150,
    "status": "Available"
  },
  {
    "id": "P016",
    "name": "Calcium Tablets",
    "category": "Health and Wellness",
    "subCategory": "Vitamins",
    "count": 180,
    "status": "Available"
  },
  {
    "id": "P017",
    "name": "Pregnancy Test Kit",
    "category": "Laboratory Supplies",
    "subCategory": "Testing Kits",
    "count": 100,
    "status": "Available"
  },
  {
    "id": "P018",
    "name": "First-Aid Kit",
    "category": "Emergency Supplies",
    "subCategory": "First-Aid",
    "count": 40,
    "status": "Available"
  },
  {
    "id": "P019",
    "name": "Sanitary Pads (10-pack)",
    "category": "Personal Care",
    "subCategory": "Hygiene Products",
    "count": 400,
    "status": "Available"
  },
  {
    "id": "P020",
    "name": "Adult Diapers (10-pack)",
    "category": "Personal Care",
    "subCategory": "Hygiene Products",
    "count": 60,
    "status": "Out of Stock"
  }
]


const orders = [
  {
    orderId: 1,
    items: ["Paracetamol Tablets", "Cough Syrup", "Bandages"],
    date: "10-02-2025",
    amount: 2096,
    payment: "Paid",
    status: "Delivered"
  },
  {
    orderId: 2,
    items: ["Cough Syrup", "Antiseptic Cream"],
    date: "09-02-2025",
    amount: 3850,
    payment: "Pending",
    status: "Processing"
  },
  {
    orderId: 3,
    items: ["Antiseptic Cream", "Thermometer", "Pain Relief Spray", "Bandages", "Medical Face Masks"],
    date: "11-02-2025",
    amount: 1275,
    payment: "Paid",
    status: "Shipped"
  },
  {
    orderId: 4,
    items: ["Pain Relief Spray", "Blood Pressure Monitor", "Digital Glucometer"],
    date: "08-02-2025",
    amount: 1960,
    payment: "Paid",
    status: "Delivered"
  },
  {
    orderId: 5,
    items: ["Thermometer", "Multivitamin Capsules", "Hand Sanitizer"],
    date: "07-02-2025",
    amount: 1500,
    payment: "Paid",
    status: "Delivered"
  },
  {
    orderId: 6,
    items: ["Blood Pressure Monitor", "Antacid Tablets"],
    date: "10-02-2025",
    amount: 2400,
    payment: "Pending",
    status: "Processing"
  },
  {
    orderId: 7,
    items: ["Bandages", "Cotton Rolls", "Antibiotic Ointment", "Nebulizer Machine"],
    date: "06-02-2025",
    amount: 1999,
    payment: "Paid",
    status: "Delivered"
  },
  {
    orderId: 8,
    items: ["Multivitamin Capsules", "Medical Face Masks", "Paracetamol Tablets", "Cough Syrup"],
    date: "05-02-2025",
    amount: 3480,
    payment: "Paid",
    status: "Shipped"
  },
  {
    orderId: 9,
    items: ["Antacid Tablets", "Digital Glucometer", "Hand Sanitizer"],
    date: "04-02-2025",
    amount: 750,
    payment: "Pending",
    status: "Processing"
  },
  {
    orderId: 10,
    items: ["Digital Glucometer", "Thermometer", "Blood Pressure Monitor", "Nebulizer Machine", "Cotton Rolls"],
    date: "03-02-2025",
    amount: 1300,
    payment: "Paid",
    status: "Delivered"
  },
  {
    orderId: 11,
    items: ["Medical Face Masks", "Hand Sanitizer", "Antibiotic Ointment"],
    date: "02-02-2025",
    amount: 1550,
    payment: "Paid",
    status: "Shipped"
  },
  {
    orderId: 12,
    items: ["Hand Sanitizer", "Paracetamol Tablets", "Bandages"],
    date: "01-02-2025",
    amount: 2540,
    payment: "Pending",
    status: "Processing"
  },
  {
    orderId: 13,
    items: ["Antibiotic Ointment", "Cough Syrup", "Digital Glucometer", "Multivitamin Capsules"],
    date: "30-01-2025",
    amount: 4196,
    payment: "Paid",
    status: "Delivered"
  },
  {
    orderId: 14,
    items: ["Nebulizer Machine", "Thermometer", "Blood Pressure Monitor", "Paracetamol Tablets", "Antacid Tablets"],
    date: "29-01-2025",
    amount: 3320,
    payment: "Paid",
    status: "Shipped"
  },
  {
    orderId: 15,
    items: ["Cotton Rolls", "Multivitamin Capsules", "Medical Face Masks", "Pain Relief Spray", "Bandages", "Hand Sanitizer"],
    date: "28-01-2025",
    amount: 1700,
    payment: "Pending",
    status: "Processing"
  }
];

const ordersToPlace = [
  {
    orderId: 1,
    items: [
      { itemName: "Paracetamol Tablets", quantity: 10, unit_price: 20 },
      { itemName: "Cough Syrup", quantity: 5, unit_price: 100 },
      { itemName: "Bandages", quantity: 15, unit_price: 10 },
    ],
    amount: 2096,
  },
  {
    orderId: 2,
    items: [
      { itemName: "Cough Syrup", quantity: 3, unit_price: 100 },
      { itemName: "Antiseptic Cream", quantity: 2, unit_price: 150 },
    ],
    amount: 3850,
  },
  {
    orderId: 3,
    items: [
      { itemName: "Antiseptic Cream", quantity: 3, unit_price: 150 },
      { itemName: "Thermometer", quantity: 2, unit_price: 300 },
      { itemName: "Pain Relief Spray", quantity: 4, unit_price: 250 },
      { itemName: "Bandages", quantity: 10, unit_price: 10 },
      { itemName: "Medical Face Masks", quantity: 20, unit_price: 15 },
    ],
    amount: 1275,
  },
  {
    orderId: 4,
    items: [
      { itemName: "Gloves", quantity: 50, unit_price: 5 },
      { itemName: "Thermometer", quantity: 1, unit_price: 300 },
    ],
    amount: 550,
  },
  {
    orderId: 5,
    items: [
      { itemName: "Cough Syrup", quantity: 2, unit_price: 100 },
      { itemName: "Medical Face Masks", quantity: 30, unit_price: 15 },
    ],
    amount: 800,
  },
  {
    orderId: 6,
    items: [
      { itemName: "Bandages", quantity: 20, unit_price: 10 },
      { itemName: "Antiseptic Cream", quantity: 4, unit_price: 150 },
    ],
    amount: 1100,
  },
  {
    orderId: 7,
    items: [
      { itemName: "Paracetamol Tablets", quantity: 5, unit_price: 20 },
      { itemName: "Pain Relief Spray", quantity: 2, unit_price: 250 },
    ],
    amount: 580,
  },
  {
    orderId: 8,
    items: [
      { itemName: "Gloves", quantity: 30, unit_price: 5 },
      { itemName: "Thermometer", quantity: 2, unit_price: 300 },
    ],
    amount: 1150,
  },
  {
    orderId: 9,
    items: [
      { itemName: "Cough Syrup", quantity: 4, unit_price: 100 },
      { itemName: "Bandages", quantity: 15, unit_price: 10 },
    ],
    amount: 850,
  },
  {
    orderId: 10,
    items: [
      { itemName: "Medical Face Masks", quantity: 25, unit_price: 15 },
      { itemName: "Antiseptic Cream", quantity: 2, unit_price: 150 },
    ],
    amount: 825,
  },
  {
    orderId: 11,
    items: [
      { itemName: "Paracetamol Tablets", quantity: 8, unit_price: 20 },
      { itemName: "Gloves", quantity: 40, unit_price: 5 },
    ],
    amount: 600,
  },
  {
    orderId: 12,
    items: [
      { itemName: "Pain Relief Spray", quantity: 5, unit_price: 250 },
      { itemName: "Thermometer", quantity: 3, unit_price: 300 },
    ],
    amount: 1750,
  },
  {
    orderId: 13,
    items: [
      { itemName: "Bandages", quantity: 25, unit_price: 10 },
      { itemName: "Medical Face Masks", quantity: 50, unit_price: 15 },
    ],
    amount: 1250,
  },
  {
    orderId: 14,
    items: [
      { itemName: "Cough Syrup", quantity: 6, unit_price: 100 },
      { itemName: "Antiseptic Cream", quantity: 3, unit_price: 150 },
    ],
    amount: 1050,
  },
  {
    orderId: 15,
    items: [
      { itemName: "Paracetamol Tablets", quantity: 12, unit_price: 20 },
      { itemName: "Pain Relief Spray", quantity: 3, unit_price: 250 },
    ],
    amount: 860,
  },
  {
    orderId: 16,
    items: [
      { itemName: "Gloves", quantity: 60, unit_price: 5 },
      { itemName: "Bandages", quantity: 30, unit_price: 10 },
    ],
    amount: 900,
  },
  {
    orderId: 17,
    items: [
      { itemName: "Thermometer", quantity: 4, unit_price: 300 },
      { itemName: "Medical Face Masks", quantity: 40, unit_price: 15 },
    ],
    amount: 1950,
  },
  {
    orderId: 18,
    items: [
      { itemName: "Cough Syrup", quantity: 7, unit_price: 100 },
      { itemName: "Antiseptic Cream", quantity: 5, unit_price: 150 },
    ],
    amount: 1450,
  },
];



const ordersToDispatch = [
  { orderId: 1, clientName: "Apollo Hospitals", location: { city: "New Delhi", state: "Delhi", country: "India" }, dateOfOrder: "10-02-2025", items: [{ itemName: "Paracetamol Tablets", quantity: 2, unitPrice: 500 }, { itemName: "Cough Syrup", quantity: 1, unitPrice: 600 }, { itemName: "Bandages", quantity: 3, unitPrice: 132 }], amount: 2096 },
  { orderId: 2, clientName: "Fortis Healthcare", location: { city: "Mumbai", state: "Maharashtra", country: "India" }, dateOfOrder: "09-02-2025", items: [{ itemName: "Cough Syrup", quantity: 2, unitPrice: 1300 }, { itemName: "Antiseptic Cream", quantity: 1, unitPrice: 550 }], amount: 3850 },
  { orderId: 3, clientName: "Max Healthcare", location: { city: "Bengaluru", state: "Karnataka", country: "India" }, dateOfOrder: "11-02-2025", items: [{ itemName: "Antiseptic Cream", quantity: 2, unitPrice: 300 }, { itemName: "Thermometer", quantity: 1, unitPrice: 400 }, { itemName: "Pain Relief Spray", quantity: 1, unitPrice: 375 }, { itemName: "Bandages", quantity: 2, unitPrice: 100 }, { itemName: "Medical Face Masks", quantity: 5, unitPrice: 20 }], amount: 1275 },
  { orderId: 4, clientName: "Manipal Hospitals", location: { city: "Hyderabad", state: "Telangana", country: "India" }, dateOfOrder: "08-02-2025", items: [{ itemName: "Pain Relief Spray", quantity: 1, unitPrice: 400 }, { itemName: "Blood Pressure Monitor", quantity: 1, unitPrice: 1100 }, { itemName: "Digital Glucometer", quantity: 1, unitPrice: 460 }], amount: 1960 },
  { orderId: 5, clientName: "Narayana Health", location: { city: "Chennai", state: "Tamil Nadu", country: "India" }, dateOfOrder: "07-02-2025", items: [{ itemName: "Thermometer", quantity: 1, unitPrice: 400 }, { itemName: "Multivitamin Capsules", quantity: 2, unitPrice: 500 }, { itemName: "Hand Sanitizer", quantity: 1, unitPrice: 100 }], amount: 1500 },
  { orderId: 6, clientName: "AIIMS Delhi", location: { city: "New Delhi", state: "Delhi", country: "India" }, dateOfOrder: "12-02-2025", items: [{ itemName: "Stethoscope", quantity: 2, unitPrice: 1200 }, { itemName: "Bandages", quantity: 5, unitPrice: 100 }], amount: 2900 },
  { orderId: 7, clientName: "KIMS Hospital", location: { city: "Hyderabad", state: "Telangana", country: "India" }, dateOfOrder: "10-02-2025", items: [{ itemName: "Digital Thermometer", quantity: 3, unitPrice: 450 }, { itemName: "Antibiotic Ointment", quantity: 2, unitPrice: 600 }], amount: 2550 },
  { orderId: 8, clientName: "Medanta Hospital", location: { city: "Gurgaon", state: "Haryana", country: "India" }, dateOfOrder: "09-02-2025", items: [{ itemName: "Hand Sanitizer", quantity: 4, unitPrice: 100 }, { itemName: "Blood Pressure Monitor", quantity: 1, unitPrice: 1100 }], amount: 1500 },
  { orderId: 9, clientName: "SRMC Chennai", location: { city: "Chennai", state: "Tamil Nadu", country: "India" }, dateOfOrder: "11-02-2025", items: [{ itemName: "Multivitamin Capsules", quantity: 3, unitPrice: 500 }, { itemName: "Cough Syrup", quantity: 2, unitPrice: 1300 }], amount: 4900 },
  { orderId: 10, clientName: "Ruby Hall Clinic", location: { city: "Pune", state: "Maharashtra", country: "India" }, dateOfOrder: "10-02-2025", items: [{ itemName: "Paracetamol Tablets", quantity: 5, unitPrice: 500 }, { itemName: "Medical Face Masks", quantity: 10, unitPrice: 20 }], amount: 2620 },
  { orderId: 11, clientName: "Global Hospitals", location: { city: "Mumbai", state: "Maharashtra", country: "India" }, dateOfOrder: "08-02-2025", items: [{ itemName: "Antiseptic Cream", quantity: 2, unitPrice: 550 }, { itemName: "Hand Sanitizer", quantity: 5, unitPrice: 100 }], amount: 1850 },
  { orderId: 12, clientName: "Saifee Hospital", location: { city: "Mumbai", state: "Maharashtra", country: "India" }, dateOfOrder: "07-02-2025", items: [{ itemName: "Thermometer", quantity: 2, unitPrice: 400 }, { itemName: "Cough Syrup", quantity: 3, unitPrice: 600 }], amount: 2600 },
  { orderId: 13, clientName: "Yashoda Hospitals", location: { city: "Hyderabad", state: "Telangana", country: "India" }, dateOfOrder: "12-02-2025", items: [{ itemName: "Blood Pressure Monitor", quantity: 1, unitPrice: 1100 }, { itemName: "Digital Glucometer", quantity: 2, unitPrice: 460 }], amount: 2020 },
  { orderId: 14, clientName: "BGS Global Hospitals", location: { city: "Bengaluru", state: "Karnataka", country: "India" }, dateOfOrder: "09-02-2025", items: [{ itemName: "Multivitamin Capsules", quantity: 4, unitPrice: 500 }, { itemName: "Paracetamol Tablets", quantity: 2, unitPrice: 500 }], amount: 3000 },
  { orderId: 15, clientName: "HCG Cancer Centre", location: { city: "Ahmedabad", state: "Gujarat", country: "India" }, dateOfOrder: "08-02-2025", items: [{ itemName: "Bandages", quantity: 6, unitPrice: 100 }, { itemName: "Antibiotic Ointment", quantity: 1, unitPrice: 600 }], amount: 1200 },
  { orderId: 16, clientName: "Columbia Asia", location: { city: "Pune", state: "Maharashtra", country: "India" }, dateOfOrder: "11-02-2025", items: [{ itemName: "Medical Face Masks", quantity: 15, unitPrice: 20 }, { itemName: "Digital Thermometer", quantity: 2, unitPrice: 450 }], amount: 1350 },
  { orderId: 17, clientName: "Sunshine Hospitals", location: { city: "Hyderabad", state: "Telangana", country: "India" }, dateOfOrder: "10-02-2025", items: [{ itemName: "Pain Relief Spray", quantity: 2, unitPrice: 400 }, { itemName: "Hand Sanitizer", quantity: 3, unitPrice: 100 }], amount: 1100 },
  { orderId: 18, clientName: "Fortis Malar Hospital", location: { city: "Chennai", state: "Tamil Nadu", country: "India" }, dateOfOrder: "07-02-2025", items: [{ itemName: "Cough Syrup", quantity: 4, unitPrice: 600 }, { itemName: "Bandages", quantity: 3, unitPrice: 100 }], amount: 2700 },
  { orderId: 19, clientName: "Apollo Spectra", location: { city: "Mumbai", state: "Maharashtra", country: "India" }, dateOfOrder: "09-02-2025", items: [{ itemName: "Blood Pressure Monitor", quantity: 2, unitPrice: 1100 }, { itemName: "Digital Glucometer", quantity: 1, unitPrice: 460 }], amount: 2660 },
  { orderId: 20, clientName: "Gleneagles Global Health", location: { city: "Bengaluru", state: "Karnataka", country: "India" }, dateOfOrder: "11-02-2025", items: [{ itemName: "Thermometer", quantity: 2, unitPrice: 400 }, { itemName: "Paracetamol Tablets", quantity: 3, unitPrice: 500 }], amount: 2500 }
];

const auditData = [
  {
    id: 1,
    auditName: "Financial Audit Q1",
    date: "23-02-2025",
    link:""
  },
  {
    id: 1,
    auditName: "Financial Audit Q1",
    date: "23-02-2025",
    link:""
  },
  {
    id: 1,
    auditName: "Financial Audit Q1",
    date: "23-02-2025",
    link:""
  }
];



export { products, orders, ordersToPlace, ordersToDispatch, auditData };
