class Stack {
  constructor() {
    this.items = [];
  }
  push(item) {
    this.items.push(item);
  }
  pop() {
    return this.items.pop();
  }
  peek() {
    return this.items[this.items.length - 1];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}


const stack = new Stack();
stack.push("A");
stack.push("B");
stack.push("C");

console.log("Peek (paling atas):", stack.peek());
console.log("Pop:", stack.pop());
console.log("Peek setelah pop:", stack.peek());
console.log("Is empty?", stack.isEmpty());


const searchHistory = new Stack();

function performSearch(keyword) {
  searchHistory.push(keyword);
  console.log(`Mencari: "${keyword}"`);
}

function undoSearch() {
  if (searchHistory.isEmpty()) {
    console.log("Tidak ada riwayat pencarian untuk di-undo.");
    return null;
  }
  const removed = searchHistory.pop();
  const previous = searchHistory.peek();
  console.log(`Undo dari "${removed}", kembali ke: ${previous ?? "(kosong)"}`);
  return previous;
}

console.log("\n--- Simulasi Search History ---");
performSearch("laptop");
performSearch("phone");
performSearch("tablet");

undoSearch();
undoSearch();
undoSearch();
undoSearch();