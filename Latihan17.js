const dummyProducts = [
  { title: "Laptop", category: "laptops", price: 1200, rating: 4.5, thumbnail: "https://via.placeholder.com/100" },
  { title: "Smartphone", category: "phones", price: 800, rating: 4.2, thumbnail: "https://via.placeholder.com/100" },
  { title: "Headphones", category: "audio", price: 100, rating: 4.0, thumbnail: "https://via.placeholder.com/100" },
  { title: "4K Monitor", category: "monitors", price: 350, rating: 4.4, thumbnail: "https://via.placeholder.com/100" },
  { title: "Gaming Mouse", category: "accessories", price: 45, rating: 4.1, thumbnail: "https://via.placeholder.com/100" }
];

function renderProducts(products) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";
  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.thumbnail}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p>${product.category}</p>
      <p>Harga: $${product.price}</p>
      <p>Rating: ${product.rating}</p>
    `;
    container.append(card);
  }
}

renderProducts(dummyProducts);