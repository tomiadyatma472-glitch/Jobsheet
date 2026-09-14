import { formatCurrency } from "./Utils.js";
import { isFavorite } from "./state.js";
 
const productListEl = document.querySelector("#product-list");
const statsEl = document.querySelector("#statistics");
const categorySelectEl = document.querySelector("#category-select");
const statusEl = document.querySelector("#status-message");
 
export function renderProducts(products) {
  productListEl.innerHTML = "";
 
  if (products.length === 0) {
    statusEl.textContent = "Tidak ada produk yang cocok.";
    statusEl.hidden = false;
    return;
  }
 
  statusEl.hidden = true;
 
  for (const product of products) {
    const card = document.createElement("div");
    card.classList.add("product-card");
    card.innerHTML = `
      <img src="${product.thumbnail ?? ""}" alt="${product.title}">
      <h3>${product.title}</h3>
      <p class="category">${product.category}</p>
      <p class="price">${formatCurrency(product.price)}</p>
      <p class="rating">⭐ ${product.rating}</p>
      <button class="fav-btn" data-id="${product.id}">
        ${isFavorite(product.id) ? "♥ Favorit" : "♡ Tambah favorit"}
      </button>
    `;
    productListEl.append(card);
  }
}
 
export function renderStatistics(stats) {
  statsEl.innerHTML = `
    <div><strong>Total Produk:</strong> ${stats.totalProducts}</div>
    <div><strong>Rata-rata Harga:</strong> ${formatCurrency(stats.averagePrice)}</div>
    <div><strong>Harga Tertinggi:</strong> ${formatCurrency(stats.highestPrice)}</div>
    <div><strong>Harga Terendah:</strong> ${formatCurrency(stats.lowestPrice)}</div>
    <div><strong>Total Stok:</strong> ${stats.totalStock}</div>
    <div><strong>Rata-rata Rating:</strong> ${stats.averageRating.toFixed(2)}</div>
  `;
}
 
export function renderCategoryOptions(categories) {
  categorySelectEl.innerHTML = `<option value="all">Semua Kategori</option>`;
  for (const category of categories) {
    const option = document.createElement("option");
    option.value = category;
    option.textContent = category;
    categorySelectEl.append(option);
  }
}
 
export function renderStatus(status) {
  switch (status) {
    case "loading":
      statusEl.hidden = false;
      statusEl.textContent = "Memuat data produk...";
      break;
    case "error":
      statusEl.hidden = false;
      statusEl.textContent = "Gagal memuat data. Coba lagi nanti.";
      break;
    default:
      statusEl.hidden = true;
  }
}