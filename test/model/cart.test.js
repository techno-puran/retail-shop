const User = require('../../src/model/user');
const Cart = require('../../src/model/cart');
const Product = require('../../src/model/product');

var assert = require('assert');

describe('Cart', function() {
  describe('#addItem', function(){
    it('should return true when a product is added', function() {
      let cart = new Cart();
      let product = new Product('White Bread', 5);

      let isAdded = cart.addItem(product, 2);

      assert.equal(true, isAdded);
      
    });
  })


  describe('#getPrice', function() {
    
    it('should return 0 price for empty cart', function(){
      let user = new User();
      let cart = new Cart();

      let result = cart.getPrice(user);

      assert.equal(0, result);
    });

    it('should return 10$ when 2 items of 5$ are added', function(){
      let user = new User();
      let cart = new Cart();
      let product = new Product('White Bread', 5);

      cart.addItem(product, 2);
      let result = cart.getPrice(user);

      assert.equal(10, result);
    });
  });
});