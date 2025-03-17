// additional task
const cart = {
  items: [],

  getItems() {
    return this.items;
  },

  add(product) {
    this.items.push(product);
  },

  remove(productName) {
    this.items = this.items.filter((item) => item.name !== productName);
  },

  clear() {
    this.items = [];
  },

  countTotalPrice() {
    return this.items.reduce((total, item) => total + item.price, 0);
  },
};

cart.add({ name: "🍎", price: 50 });
cart.add({ name: "🍇", price: 70 });
cart.add({ name: "🍋", price: 60 });
cart.add({ name: "🍓", price: 110 });
console.log(cart.getItems());

console.log(cart.countTotalPrice());

cart.remove("🍇");
console.log(cart.getItems());

cart.clear();
console.log(cart.getItems());
