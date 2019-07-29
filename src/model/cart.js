const CartItem = require("./cart-item").default;
const CartDiscountRule = require("../discount_rules/cart-discount").default;
const ProductDiscountRule = require("../discount_rules/percent-discount");

module.exports = class Cart {
  constructor(user) {
    this.user = user;
    this.cartItems = [];
    this.cartDiscountRule = new CartDiscountRule();
    this.productDiscountRule = new ProductDiscountRule();
  }

  addItem(product, quantity) {
    let cartItem = new CartItem(product, quantity);
    this.cartItems.push(cartItem);
    return true;
  }

  getPrice() {
    let totalPrice = 0;
    for (let item of this.cartItems) {
      let userDiscount = this.productDiscountRule.getDiscount(this.user, item.product);
      let discountedUnitPrice = item.product.unitPrice * (1 - userDiscount / 100);
      totalPrice += discountedUnitPrice * item.quantity;
    }
    let discount = this.cartDiscountRule.getDiscount(totalPrice);
    return totalPrice - discount;
  }
};