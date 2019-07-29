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

    getPrice() {
        let totalPrice = 0;
        for (let item of this.cartItems) {
            totalPrice += item.product.unitPrice * item.quantity;
        }

        let discountedPrice = this.apply5forEvery100SpentOffer(totalPrice);

        return discountedPrice;
    }

    apply5forEvery100SpentOffer(totalPrice) {
        if(totalPrice < 100) 
            return totalPrice;
        return  totalPrice - (Math.floor(totalPrice / 100) * 5);
    }
}