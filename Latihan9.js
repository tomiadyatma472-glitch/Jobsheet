// Dataset produk
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


function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}

const grouped = groupByCategory(products);
console.log("Grouped by category:", grouped);


function categorySummary(grouped) {
  return Object.entries(grouped).map(([category, items]) => ({
    category,
    jumlahProduk: items.length
  }));
}

console.log("Ringkasan per kategori:");
console.table(categorySummary(grouped));