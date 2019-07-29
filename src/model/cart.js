const CartItem = require('./cart-item');

module.exports = class Cart {
    constructor() {
        this.cartItems = [];
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

    getPrice(user) {
        let totalPrice = 0;
        for (let item of this.cartItems) {
            totalPrice += item.product.unitPrice * item.quantity;
        }
        return totalPrice;
    }
}