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

// Latihan 7.1 — binarySearch pada angka biasa
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

const sortedNumbers = [1, 3, 5, 7, 9, 11, 13];
console.log("Cari angka 7:", binarySearch(sortedNumbers, 7));
console.log("Cari angka 100:", binarySearch(sortedNumbers, 100));

// Latihan 7.2 — binarySearchByPrice
function binarySearchByPrice(sortedProducts, targetPrice) {
  let left = 0;
  let right = sortedProducts.length - 1;

  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedProducts[mid].price === targetPrice) return mid;
    if (sortedProducts[mid].price < targetPrice) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}

// urutkan dulu berdasarkan price sebelum binary search
const sortedProducts = [...products].sort((a, b) => a.price - b.price);
console.log("Produk terurut by price:", sortedProducts.map(p => `${p.title}: ${p.price}`));
console.log("Cari produk harga 800:", binarySearchByPrice(sortedProducts, 800));
console.log("Cari produk harga 9999:", binarySearchByPrice(sortedProducts, 9999));