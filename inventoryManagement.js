// Write your code here
// Step 1: Create the products array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Step 2: Function to log the first product
function logFirstProduct() {
    if (products.length === 0) {
        console.log("No products available.");
        return;
    }

    console.log("First product:", products[0]);
}

// Step 3: Function to add a new product
function addProduct(productName) {
    products.push(productName);
    console.log(`${productName} added to inventory.`);
}

// Step 4: Function to update a product name
function updateProductName(index, newName) {
    if (index < 0 || index >= products.length) {
        console.log("Invalid product index.");
        return;
    }

    console.log(`Updated ${products[index]} to ${newName}.`);
    products[index] = newName;
}

// Step 5: Function to remove the last product
function removeLastProduct() {
    if (products.length === 0) {
        console.log("No products to remove.");
        return;
    }

    const removed = products.pop();
    console.log(`${removed} removed from inventory.`);
}

// Optional: Function to display all products
function displayProducts() {
    console.log("Current Inventory:", products);
}


// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
