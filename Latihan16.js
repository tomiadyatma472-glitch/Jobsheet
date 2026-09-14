function linearSearchCount(array, target) {
  let steps = 0;
  for (let i = 0; i < array.length; i++) {
    steps++;
    if (array[i] === target) return steps;
  }
  return steps;
}

function binarySearchCount(arr, target) {
  let steps = 0;
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    steps++;
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return steps;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return steps;
}


const bigArray = Array.from({ length: 10000 }, (_, i) => i);
const target = 9999; 

console.log("Linear search steps:", linearSearchCount(bigArray, target));
console.log("Binary search steps:", binarySearchCount(bigArray, target));


function generateProducts(size) {
  const dataset = [];
  for (let i = 1; i <= size; i++) {
    dataset.push({ id: i, category: `category-${i % 20}` });
  }
  return dataset;
}

const testProducts = generateProducts(1000);


const startNested = performance.now();
let pairCount = 0;
for (let i = 0; i < testProducts.length; i++) {
  for (let j = 0; j < testProducts.length; j++) {
    if (i !== j && testProducts[i].category === testProducts[j].category) {
      pairCount++;
    }
  }
}
const endNested = performance.now();


const startMap = performance.now();
const groupMap = new Map();
for (const p of testProducts) {
  if (!groupMap.has(p.category)) groupMap.set(p.category, []);
  groupMap.get(p.category).push(p);
}
const endMap = performance.now();

console.log("\nNested loop waktu:", (endNested - startNested).toFixed(2), "ms");
console.log("Map-based waktu:", (endMap - startMap).toFixed(2), "ms");