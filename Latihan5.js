const products = [
  { id: 1, title: "Laptop", price: 1200, rating: 4.5, stock: 10, category: "laptops" },
  { id: 2, title: "Smartphone", price: 800, rating: 4.2, stock: 15, category: "phones" },
  { id: 3, title: "Headphones", price: 100, rating: 4.0, stock: 3, category: "audio" },
  { id: 4, title: "Gaming Laptop", price: 1800, rating: 4.7, stock: 4, category: "laptops" },
  { id: 5, title: "Budget Laptop", price: 600, rating: 3.8, stock: 12, category: "laptops" },
  { id: 6, title: "Wireless Mouse", price: 25, rating: 4.1, stock: 30, category: "accessories" },
  { id: 7, title: "4K Monitor", price: 350, rating: 4.4, stock: 8, category: "monitors" },
  { id: 8, title: "Mechanical Keyboard", price: 90, rating: 4.3, stock: 12, category: "accessories" }
];


const laptopPrices = products
  .filter(p => p.category === "laptops")
  .map(p => p.price);

const avg = laptopPrices.reduce((a, b) => a + b, 0) / laptopPrices.length;
console.log("Rata-rata harga laptop:", avg);

function getStatistics(products) {
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

console.log(getStatistics(products));