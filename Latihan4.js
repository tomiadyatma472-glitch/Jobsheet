const tagsExample = [
  ["computer", "office"],
  ["electronics"],
  ["gaming", "computer"]
];


console.log("Contoh flat():", tagsExample.flat());


const products = [
  {
    id: 1,
    title: "Laptop",
    tags: ["computer", "electronics", "office"],
    reviews: [
      { user: "A", rating: 5, comment: "Good product" },
      { user: "B", rating: 4, comment: "Worth it" }
    ]
  },
  {
    id: 2,
    title: "Smartphone",
    tags: ["mobile", "electronics"],
    reviews: [
      { user: "C", rating: 4, comment: "Nice camera" },
      { user: "D", rating: 5, comment: "Fast" },
      { user: "E", rating: 3, comment: "Battery so-so" }
    ]
  }
];


const allTags = products.flatMap(p => p.tags);
console.log("4.1 Semua tags (flatMap):", allTags);


const allComments = products.flatMap(p => p.reviews.map(r => r.comment));
console.log("4.2 Semua comments:", allComments);