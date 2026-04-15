// Write your code here
// محصولات array
let products = ["Laptop", "Phone", "Headphones", "Monitor"];

// Log only the first product (NO extra text)
function logFirstProduct() {
    console.log(products[0]);
}

// Add product (no extra console text unless required)
function addProduct(productName) {
    products.push(productName);
}

// Update product name by index
function updateProductName(index, newName) {
    if (index >= 0 && index < products.length) {
        products[index] = newName;
    }
}

// Remove last product
function removeLastProduct() {
    products.pop();
}

// Export (IMPORTANT for Jest tests)
module.exports = {
    products,
    logFirstProduct,
    addProduct,
    updateProductName,
    removeLastProduct
};

// Export the necessary parts for testing
module.exports = {
  logFirstProduct: typeof logFirstProduct !== 'undefined' ? logFirstProduct : undefined,
  addProduct: typeof addProduct !== 'undefined' ? addProduct : undefined,
  updateProductName: typeof updateProductName !== 'undefined' ? updateProductName : undefined,
  removeLastProduct: typeof removeLastProduct !== 'undefined' ? removeLastProduct : undefined,
  products
};
