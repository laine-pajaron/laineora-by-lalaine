// 1. Shop Information
const shopName = "Laineora by Lalaine";
const currentYear = new Date().getFullYear();

// 2. Calculate Product Total
let runningTotal = 0;

const products = document.querySelectorAll(".product-card");

products.forEach(function(product) {
    runningTotal += Number(product.dataset.price);
});

const productTotal = document.getElementById("product-total");

if (productTotal) {
    productTotal.textContent = `Total value of all products: ₱${runningTotal}`;
}

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