const CartItem = require('./cart-item');
const CartDiscountRule = require('../discount_rules/cart-discount');
const ProductDiscountRule = require('../discount_rules/product-discount');

module.exports = class Cart {
    constructor(user) {
        this.user = user;
        this.cartItems = [];
        this.cartDiscountRule = new CartDiscountRule();
        this.productDiscountRule = new ProductDiscountRule();
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
            let userDiscount = this.productDiscountRule.getDiscount(this.user);
            let unitPrice = item.product.unitPrice * (1 - userDiscount / 100);
            totalPrice += unitPrice * item.quantity;
        }

        let discount = this.cartDiscountRule.getDiscount(totalPrice);

        return totalPrice - discount;
    }
}