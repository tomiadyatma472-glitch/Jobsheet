const products = [
  {
    id: 1,
    title: "Laptop",
    price: 1200,
    rating: 4.5,
    stock: 10,
    category: "laptops",
    tags: ["computer", "electronics", "office"],
    dimensions: { width: 30, height: 2, depth: 20 },
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    price: 800,
    rating: 4.2,
    stock: 15,
    category: "phones",
    tags: ["mobile", "electronics"],
    dimensions: { width: 7, height: 0.8, depth: 15 },
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];


const allTagsNested = products.map(p => p.tags);
console.log("1. Semua tag (nested):", allTagsNested);


function findProductsByTag(products, tag) {
  return products.filter(p => p.tags.includes(tag));
}
console.log("2. Produk dengan tag 'electronics':", findProductsByTag(products, "electronics"));


function reviewCounts(products) {
  return products.map(p => ({ id: p.id, title: p.title, totalReviews: p.reviews.length }));
}
console.log("3. Jumlah review per produk:", reviewCounts(products));


function fiveStarReviews(products) {
  return products.flatMap(p => p.reviews.filter(r => r.rating === 5));
}
console.log("4. Review rating 5:", fiveStarReviews(products));


function calculateAverageRating(product) {
  if (product.reviews.length === 0) return 0;
  const total = product.reviews.reduce((sum, r) => sum + r.rating, 0);
  return total / product.reviews.length;
}
console.log("5. Rata-rata rating tiap produk:",
  products.map(p => ({ title: p.title, computedRating: calculateAverageRating(p) }))
);


function mostReviewedProduct(products) {
  return products.reduce((max, p) => (p.reviews.length > max.reviews.length ? p : max));
}
console.log("6. Produk review terbanyak:", mostReviewedProduct(products));


const allRatings = products.flatMap(p => p.reviews.map(r => r.rating));
console.log("7. Semua rating (flat):", allRatings);
