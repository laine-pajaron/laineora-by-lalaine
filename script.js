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

// 6. Stock Status
const stockCount = 15;
const stockStatus = document.getElementById("stock-status");

if (stockStatus) {
    if (stockCount > 8) {
        stockStatus.textContent = "Stock Status: In stock";
    } else if (stockCount >= 1 && stockCount <= 10) {
        stockStatus.textContent = "Stock Status: Only a few left";
    } else if (stockCount === 0) {
        stockStatus.textContent = "Stock Status: Sold out";
    } else {
        stockStatus.textContent = "Invalid stock count";
    }
}

// 7. Free Delivery Check
const orderTotal = 325;
const isMember = true;
const freeDeliveryThreshold = 500;

const deliveryFee = (orderTotal >= freeDeliveryThreshold && isMember === true) ? 0 : 150;
const finalTotal = orderTotal + deliveryFee;

const deliveryResult = document.getElementById("delivery-result");

if (deliveryResult) {
    deliveryResult.textContent = `Order Total: ₱${orderTotal} | Delivery Fee: ₱${deliveryFee} | Final Total: ₱${finalTotal}`;
}

// 8. Shop Open or Closed
const shopIsOpen = true;

const shopStatus = shopIsOpen ? "Open today" : "Closed today";

const shopStatusElement = document.getElementById("shop-status");

if (shopStatusElement) {
    shopStatusElement.textContent = `Shop Status: ${shopStatus}`;
}