export default class Product {
  constructor(name, unitPrice, category) {
    this.name = name;
    this.unitPrice = unitPrice;
    this.category = category;
  }

  isGroceryItem() {
    return this.category === "grocery";
  }
}