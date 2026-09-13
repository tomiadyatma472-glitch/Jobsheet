function countdown(n) {
  if (n <= 0) {
    console.log("Selesai");
    return;
  }
  console.log(n);
  countdown(n - 1);
}

console.log("--- Contoh Countdown ---");
countdown(5);

const categories = [
  {
    name: "Electronics",
    children: [
      { name: "Laptop", children: [] },
      { name: "Phone", children: [
        { name: "Android", children: [] },
        { name: "iPhone", children: [] }
      ] }
    ]
  },
  {
    name: "Fashion",
    children: [
      { name: "Men", children: [] },
      { name: "Women", children: [] }
    ]
  }
];

function printCategories(categories, depth = 0) {
  for (const category of categories) {
    console.log(" ".repeat(depth * 2) + category.name);
    if (category.children.length > 0) {
      printCategories(category.children, depth + 1);
    }
  }
}

console.log("\n--- Print Categories ---");
printCategories(categories);