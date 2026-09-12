const products = [
  { id: 1, title: "Laptop", price: 1200 },
  { id: 2, title: "Smartphone", price: 800 },
  { id: 3, title: "Headphones", price: 100 }
];


function buildProductLookup(products) {
  const map = new Map();
  for (const product of products) {
    map.set(product.id, product);
  }
  return map;
}

const productLookup = buildProductLookup(products);
console.log("Lookup id 2:", productLookup.get(2));
console.log("Lookup id 99 (tidak ada):", productLookup.get(99));