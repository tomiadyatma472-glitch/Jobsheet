export const state = {
  products: [], 
  search: "",
  category: "all",
  sortBy: "default",
  favorites: new Set(), 
  status: "idle", 
};
 
export function setProducts(products) {
  state.products = products;
}
 
export function setStatus(status) {
  state.status = status;
}
 
export function setSearch(value) {
  state.search = value;
}
 
export function setCategory(value) {
  state.category = value;
}
 
export function setSortBy(value) {
  state.sortBy = value;
}
 
export function toggleFavorite(id) {
  if (state.favorites.has(id)) {
    state.favorites.delete(id);
  } else {
    state.favorites.add(id);
  }
}
 
export function isFavorite(id) {
  return state.favorites.has(id);
}
 

export function getAvailableCategories() {
  return [...new Set(state.products.map((p) => p.category))];
}