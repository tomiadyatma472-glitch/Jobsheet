import { fetchProducts } from "./api.js";
import { applyFilters, getStatistics } from "./algorithms.js";
import {
  state,
  setProducts,
  setStatus,
  setSearch,
  setCategory,
  setSortBy,
  toggleFavorite,
  getAvailableCategories,
} from "./state.js";
import {
  renderProducts,
  renderStatistics,
  renderCategoryOptions,
  renderStatus,
} from "./UI.js";
import { debounce } from "./utils.js";
 

function render() {
  renderStatus(state.status);
 
  if (state.status !== "success") return;
 
  const filtered = applyFilters(state.products, {
    search: state.search,
    category: state.category,
    sortBy: state.sortBy,
  });
 
  renderProducts(filtered);
  renderStatistics(getStatistics(filtered));
}
 
async function loadProducts() {
  setStatus("loading");
  render();
 
  try {
    const products = await fetchProducts(30);
    setProducts(products);
    setStatus("success");
    renderCategoryOptions(getAvailableCategories());
  } catch (error) {
    console.error("Gagal mengambil data:", error);
    setStatus("error");
  }
 
  render();
}
 
function setupEventListeners() {
  const searchInput = document.querySelector("#search-input");
  const categorySelect = document.querySelector("#category-select");
  const sortSelect = document.querySelector("#sort-select");
  const productList = document.querySelector("#product-list");
 
  searchInput.addEventListener(
    "input",
    debounce((e) => {
      setSearch(e.target.value);
      render();
    }, 300)
  );
 
  categorySelect.addEventListener("change", (e) => {
    setCategory(e.target.value);
    render();
  });
 
  sortSelect.addEventListener("change", (e) => {
    setSortBy(e.target.value);
    render();
  });
 
 
  productList.addEventListener("click", (e) => {
    if (!e.target.matches(".fav-btn")) return;
    const id = Number(e.target.dataset.id);
    toggleFavorite(id);
    render();
  });
}
 
function init() {
  setupEventListeners();
  loadProducts();
}
 
document.addEventListener("DOMContentLoaded", init);