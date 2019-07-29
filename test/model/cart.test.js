import User from '../../src/model/user';
import Cart from '../../src/model/cart';
import CartItem from '../../src/model/cart-item';
import Product from '../../src/model/product';

var assert = require('assert');

describe('Cart', function() {
  describe('#getPrice', function() {
    
    it('should return 0 price for empty cart', function(){
      let user = new User();
      let cart = new Cart();

      let result = cart.getPrice(user);

      assert.equal(0, result.totalPrice);
    });

    it('should return 10$ when 2 items of 5$ are added', function(){
      let user = new User();
      let cart = new Cart();
      let product = new Product('White Bread', 5);
      let cartItem = new CartItem(product, 2);

      cart.addItem(cartItem);
      let result = cart.getPrice(user);

      assert.equal(10, result.totalPrice);
    });
  });
});