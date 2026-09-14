// Dataset produk (dengan dimensions untuk contoh optional chaining)
const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 10, rating: 4.5, dimensions: { width: 30 } },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15, rating: 4.2 }, // sengaja tanpa dimensions
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3, rating: 4.0 }
];

// Contoh-contoh ES6+ dari jobsheet
const product = products[0];

// Template literal
const label = `${product.title} - $${product.price}`;
console.log("Template literal:", label);

// Destructuring
const { title, price, category } = product;
console.log("Destructuring:", title, price, category);

const [firstProduct, ...restProducts] = products;
console.log("Array destructuring - first:", firstProduct.title);
console.log("Array destructuring - rest:", restProducts.map(p => p.title));

// Spread
const updatedProduct = { ...product, stock: 20 };
console.log("Spread objek:", updatedProduct);

// Optional chaining & nullish coalescing
const width1 = products[0].dimensions?.width ?? "Tidak diketahui";
const width2 = products[1].dimensions?.width ?? "Tidak diketahui";
console.log("Width produk 1:", width1);
console.log("Width produk 2 (tanpa dimensions):", width2);

// Latihan 20.1 — Refactor getStatistics pakai destructuring & optional chaining
function getStatistics({ products } = { products: [] }) {
  const prices = products.map(p => p.price);
  const ratings = products.map(p => p.rating);

  return {
    totalProducts: products.length,
    averagePrice: prices.reduce((a, b) => a + b, 0) / products.length,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock: products.reduce((sum, p) => sum + p.stock, 0),
    averageRating: ratings.reduce((a, b) => a + b, 0) / products.length
  };
}

console.log("Statistics:", getStatistics({ products }));