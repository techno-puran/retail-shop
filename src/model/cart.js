const CartItem = require('./cart-item');
const CartDiscountRule = require('../discount_rules/cart-discount');

module.exports = class Cart {
    constructor() {
        this.cartItems = [];
        this.cartDiscountRule = new CartDiscountRule();
    }

    addItem(product, quantity) {
        try {
            let cartItem = new CartItem(product, quantity);
            this.cartItems.push(cartItem);
            return true;
        }
        catch {
            return false;
        }
    }

    getPrice() {
        let totalPrice = 0;
        for (let item of this.cartItems) {
            totalPrice += item.product.unitPrice * item.quantity;
        }

        let discount = this.cartDiscountRule.getDiscount(totalPrice);

        return totalPrice - discount;
    }
}