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


const numbers = [5, 3, 8, 1];
console.log("Ascending:", [...numbers].sort((a, b) => a - b));
console.log("Descending:", [...numbers].sort((a, b) => b - a));


function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}

console.log("Bubble sort:", bubbleSort([5, 3, 8, 1]));
console.log("Array asli:", [5, 3, 8, 1]);


function sortProducts(products, sortBy) {
  const sorted = [...products];

  switch (sortBy) {
    case "price-asc":
      return sorted.sort((a, b) => a.price - b.price);
    case "price-desc":
      return sorted.sort((a, b) => b.price - a.price);
    case "rating":
      return sorted.sort((a, b) => b.rating - a.rating);
    case "title":
      return sorted.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return sorted;
  }
}

console.log("Sort price-asc:", sortProducts(products, "price-asc").map(p => `${p.title}: ${p.price}`));
console.log("Sort price-desc:", sortProducts(products, "price-desc").map(p => `${p.title}: ${p.price}`));
console.log("Sort by rating:", sortProducts(products, "rating").map(p => `${p.title}: ${p.rating}`));
console.log("Sort by title:", sortProducts(products, "title").map(p => p.title));