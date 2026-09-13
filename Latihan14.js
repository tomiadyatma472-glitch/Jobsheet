class Queue {
  constructor() {
    this.items = [];
  }
  enqueue(item) {
    this.items.push(item);
  }
  dequeue() {
    return this.items.shift();
  }
  peek() {
    return this.items[0];
  }
  isEmpty() {
    return this.items.length === 0;
  }
}

const requestQueue = new Queue();
requestQueue.enqueue("Request A");
requestQueue.enqueue("Request B");
requestQueue.enqueue("Request C");

console.log("Peek (paling depan):", requestQueue.peek());
console.log("Dequeue:", requestQueue.dequeue());
console.log("Peek setelah dequeue:", requestQueue.peek());
console.log("Is empty?", requestQueue.isEmpty());