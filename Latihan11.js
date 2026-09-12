const products = [
  { id: 1, title: "Laptop", category: "laptops", rating: 4.5, brand: "Dell", tags: ["computer", "office"] },
  { id: 2, title: "Smartphone", category: "phones", rating: 4.2, brand: "Samsung", tags: ["mobile", "electronics"] },
  { id: 3, title: "Headphones", category: "audio", rating: 4.0, brand: "Sony", tags: ["music", "electronics"] },
  { id: 4, title: "Gaming Laptop", category: "laptops", rating: 4.7, brand: "Asus", tags: ["gaming", "computer"] },
  { id: 5, title: "Budget Laptop", category: "laptops", rating: 3.8, brand: "Dell", tags: ["computer", "office"] }
];


const uniqueCategories = [...new Set(products.map(p => p.category))];
const uniqueBrands = [...new Set(products.map(p => p.brand))];
const uniqueTags = [...new Set(products.flatMap(p => p.tags))];

console.log("Unique categories:", uniqueCategories);
console.log("Unique brands:", uniqueBrands);
console.log("Unique tags:", uniqueTags);