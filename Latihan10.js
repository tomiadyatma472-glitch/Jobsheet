const products = [
  { id: 1, title: "Laptop", category: "laptops", rating: 4.5, brand: "Dell", tags: ["computer", "office"] },
  { id: 2, title: "Smartphone", category: "phones", rating: 4.2, brand: "Samsung", tags: ["mobile", "electronics"] },
  { id: 3, title: "Headphones", category: "audio", rating: 4.0, brand: "Sony", tags: ["music", "electronics"] },
  { id: 4, title: "Gaming Laptop", category: "laptops", rating: 4.7, brand: "Asus", tags: ["gaming", "computer"] },
  { id: 5, title: "Budget Laptop", category: "laptops", rating: 3.8, brand: "Dell", tags: ["computer", "office"] }
];


const words = ["laptop", "phone", "laptop", "tablet", "phone", "laptop"];

function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}

console.log("Frekuensi kata:", countFrequency(words));


console.log("Frekuensi category:", countFrequency(products.map(p => p.category)));
console.log("Frekuensi rating (dibulatkan):", countFrequency(products.map(p => Math.round(p.rating))));
console.log("Frekuensi tags:", countFrequency(products.flatMap(p => p.tags)));
console.log("Frekuensi brand:", countFrequency(products.map(p => p.brand)));