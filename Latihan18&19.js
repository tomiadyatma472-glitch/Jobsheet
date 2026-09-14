// ==========================================
// BAGIAN 18 — STATE MANAGEMENT SEDERHANA
// ==========================================
const state = {
  products: [
    { title: "Laptop", category: "laptops", price: 1200, rating: 4.5 },
    { title: "Gaming Laptop", category: "laptops", price: 1800, rating: 4.7 },
    { title: "Smartphone", category: "phones", price: 800, rating: 4.2 },
    { title: "Headphones", category: "audio", price: 100, rating: 4.0 }
  ],
  search: "",
  category: "all",
  sortBy: "default",
  favorites: [],
  status: "success"
};

function render() {
  let result = [...state.products];

  // Filter berdasarkan search
  if (state.search) {
    result = result.filter(p =>
      p.title.toLowerCase().includes(state.search.toLowerCase())
    );
  }

  // Filter berdasarkan category
  if (state.category !== "all") {
    result = result.filter(p => p.category === state.category);
  }

  // Sort
  if (state.sortBy === "price-asc") {
    result = result.slice().sort((a, b) => a.price - b.price);
  } else if (state.sortBy === "price-desc") {
    result = result.slice().sort((a, b) => b.price - a.price);
  }

  renderProducts(result);
}

function renderProducts(products) {
  const container = document.querySelector("#product-list");
  container.innerHTML = "";

  if (products.length === 0) {
    container.innerHTML = "<p>Tidak ada produk ditemukan.</p>";
    return;
  }

  for (const product of products) {
    const card = document.createElement("div");
    card.innerHTML = `
      <h3>${product.title}</h3>
      <p>${product.category} - $${product.price} - Rating: ${product.rating}</p>
    `;
    container.append(card);
  }
}

// ==========================================
// BAGIAN 19 — EVENT HANDLING (HUBUNGKAN KE STATE)
// ==========================================
const searchInput = document.querySelector("#search-input");
searchInput.addEventListener("input", (e) => {
  state.search = e.target.value;
  render();
});

const categorySelect = document.querySelector("#category-select");
categorySelect.addEventListener("change", (e) => {
  state.category = e.target.value;
  render();
});

const sortSelect = document.querySelector("#sort-select");
sortSelect.addEventListener("change", (e) => {
  state.sortBy = e.target.value;
  render();
});

// Render pertama kali saat halaman dimuat
render();