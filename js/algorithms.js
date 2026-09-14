export function linearSearch(array, target) {
  for (let i = 0; i < array.length; i++) {
    if (array[i] === target) return i;
  }
  return -1;
}
 
export function binarySearch(sortedArray, target) {
  let left = 0;
  let right = sortedArray.length - 1;
 
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (sortedArray[mid] === target) return mid;
    if (sortedArray[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
 
export function findProductById(products, id) {
  return products.find((p) => p.id === id);
}
 

 
export function exactSearch(products, keyword) {
  return products.filter((p) => p.title === keyword);
}
 
export function partialSearch(products, keyword) {
  return products.filter((p) => p.title.includes(keyword));
}
 
export function caseInsensitiveSearch(products, keyword) {
  const lower = keyword.toLowerCase();
  return products.filter((p) => p.title.toLowerCase().includes(lower));
}
 

 
export function bubbleSort(numbers) {
  const arr = [...numbers];
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = 0; j < arr.length - 1 - i; j++) {
      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }
  return arr;
}
 
export function sortProducts(products, sortBy = "default") {
  const arr = [...products];
 
  switch (sortBy) {
    case "price-asc":
      return arr.sort((a, b) => a.price - b.price);
    case "price-desc":
      return arr.sort((a, b) => b.price - a.price);
    case "rating":
      return arr.sort((a, b) => b.rating - a.rating);
    case "title":
      return arr.sort((a, b) => a.title.localeCompare(b.title));
    default:
      return arr;
  }
}
 

 
export function groupByCategory(products) {
  return products.reduce((groups, product) => {
    const key = product.category;
    if (!groups[key]) groups[key] = [];
    groups[key].push(product);
    return groups;
  }, {});
}
 
export function countFrequency(array) {
  return array.reduce((counts, item) => {
    counts[item] = (counts[item] || 0) + 1;
    return counts;
  }, {});
}
 

 
export function buildProductLookup(products) {
  const map = new Map();
  for (const product of products) {
    map.set(product.id, product);
  }
  return map;
}
 

 
export function getStatistics(products) {
  if (products.length === 0) {
    return {
      totalProducts: 0,
      averagePrice: 0,
      highestPrice: 0,
      lowestPrice: 0,
      totalStock: 0,
      averageRating: 0,
    };
  }
 
  const prices = products.map((p) => p.price);
  const totalStock = products.reduce((sum, p) => sum + p.stock, 0);
  const totalRating = products.reduce((sum, p) => sum + (p.rating ?? 0), 0);
 
  return {
    totalProducts: products.length,
    averagePrice: prices.reduce((a, b) => a + b, 0) / prices.length,
    highestPrice: Math.max(...prices),
    lowestPrice: Math.min(...prices),
    totalStock,
    averageRating: totalRating / products.length,
  };
}
 

export function applyFilters(products, filters = {}) {
  const {
    search = "",
    category = "all",
    minPrice,
    maxPrice,
    minRating,
    minStock,
    sortBy = "default",
  } = filters;
 
  let result = products;
 
  if (search) {
    result = caseInsensitiveSearch(result, search);
  }
 
  if (category && category !== "all") {
    result = result.filter((p) => p.category === category);
  }
 
  if (minPrice !== undefined) {
    result = result.filter((p) => p.price >= minPrice);
  }
 
  if (maxPrice !== undefined) {
    result = result.filter((p) => p.price <= maxPrice);
  }
 
  if (minRating !== undefined) {
    result = result.filter((p) => p.rating >= minRating);
  }
 
  if (minStock !== undefined) {
    result = result.filter((p) => p.stock >= minStock);
  }
 
  return sortProducts(result, sortBy);
}