// 1. Shop Information
const shopName = "Laineora by Lalaine";
const currentYear = new Date().getFullYear();

// 2. Running Total
let runningTotal = 0;

// 3. Display Shop Name
const shopNameElement = document.getElementById("shop-name");

if (shopNameElement) {
    shopNameElement.textContent = shopName;
}

// 4. Dynamic Copyright
const copyright = document.getElementById("copyright");

if (copyright) {
    copyright.textContent = `© ${currentYear} ${shopName}. All rights reserved.`;
}

// 5. Console Messages
console.log("Shop Name:", shopName);
console.log("Current Year:", currentYear);
console.log("Running Total:", runningTotal);