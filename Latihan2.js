const products = [
  { id: 1, title: "Laptop", price: 1200, category: "laptops", stock: 5 },
  { id: 2, title: "Smartphone", price: 800, category: "phones", stock: 15 },
  { id: 3, title: "Headphones", price: 100, category: "audio", stock: 3 },
  { id: 4, title: "Mechanical Keyboard", price: 90, category: "accessories", stock: 12 },
  { id: 5, title: "Gaming Mouse", price: 45, category: "accessories", stock: 20 },
  { id: 6, title: "4K Monitor", price: 350, category: "monitors", stock: 8 },
  { id: 7, title: "Wireless Earbuds", price: 130, category: "audio", stock: 2 },
  { id: 8, title: "Tablet", price: 500, category: "tablets", stock: 6 },
  { id: 9, title: "Smartwatch", price: 220, category: "wearables", stock: 9 },
  { id: 10, title: "External SSD", price: 90, category: "storage", stock: 4 },
  { id: 11, title: "Gaming Laptop", price: 1500, category: "laptops", stock: 7 },
  { id: 12, title: "Budget Smartphone", price: 300, category: "phones", stock: 18 },
  { id: 13, title: "Bluetooth Speaker", price: 75, category: "audio", stock: 10 },
  { id: 14, title: "USB-C Hub", price: 35, category: "accessories", stock: 25 },
  { id: 15, title: "Webcam", price: 60, category: "accessories", stock: 14 },
  { id: 16, title: "Ultrawide Monitor", price: 600, category: "monitors", stock: 5 },
  { id: 17, title: "Noise Cancelling Headphones", price: 250, category: "audio", stock: 6 },
  { id: 18, title: "Drawing Tablet", price: 280, category: "tablets", stock: 8 },
  { id: 19, title: "Fitness Tracker", price: 100, category: "wearables", stock: 12 },
  { id: 20, title: "Portable SSD", price: 150, category: "storage", stock: 9 },
  { id: 21, title: "2-in-1 Laptop", price: 1100, category: "laptops", stock: 4 },
  { id: 22, title: "Flagship Smartphone", price: 1300, category: "phones", stock: 7 },
  { id: 23, title: "Gaming Headset", price: 140, category: "audio", stock: 11 },
  { id: 24, title: "Wireless Keyboard", price: 70, category: "accessories", stock: 16 },
  { id: 25, title: "Gaming Mouse Pad", price: 30, category: "accessories", stock: 22 },
  { id: 26, title: "Curved Gaming Monitor", price: 450, category: "monitors", stock: 6 },
  { id: 27, title: "Android Tablet", price: 400, category: "tablets", stock: 10 },
  { id: 28, title: "Premium Smartwatch", price: 350, category: "wearables", stock: 5 },
  { id: 29, title: "USB Flash Drive", price: 20, category: "storage", stock: 30 },
  { id: 30, title: "Wi-Fi Router", price: 120, category: "networking", stock: 13 }
];

function findProductById(products, id) {
  return products.find(p => p.id === id);
}

findProductById(products, 3); 
findProductById(products, 999); 

console.log(findProductById(products, 3));

function lowStockProducts(products) {
  return products.filter(p => p.stock < 10);
}

console.log(lowStockProducts(products));

function updateStock(products, id, newStock) {
  return products.map(p =>
    p.id === id ? { ...p, stock: newStock } : p
  );
}

const updated = updateStock(products, 3, 50);
console.log(products[2].stock); 
console.log(updated[2].stock);  