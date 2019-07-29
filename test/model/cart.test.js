const Cart = require('../../src/model/cart');
const Product = require('../../src/model/product');
const User = require('../../src/model/user');

var assert = require('assert');

describe('Cart', function() {
  describe('#addItem()', function(){
    it('should return true when a product is added', function() {
      //Arrange
      let cart = new Cart();
      let product = new Product('White Bread', 5);
      //Act
      let isAdded = cart.addItem(product, 2);
      //Assert
      assert.equal(true, isAdded);
      
    });
  });

  describe('#getPrice()', function() {
    
    it('should return 0 price for empty cart', function(){
      //Arrange
      let cart = new Cart();
      //Act
      let totalPrice = cart.getPrice();
      //Assert
      assert.equal(0, totalPrice);
    });

    it('should return 10 when 2 items of 5 are added', function(){
      //Arrange
      let cart = new Cart();
      let product = new Product('White Bread', 5);
      cart.addItem(product, 2);
      //Act
      let totalPrice = cart.getPrice();
      //Assert
      assert.equal(10, totalPrice);
    });

    it('should return 945 when total cart price is 990 and 5 off on every 100 spent is applied', function(){
      //Arrange
      let cart = new Cart();
      let product = new Product('Earphones', 99);
      cart.addItem(product, 10);
      //Act
      let totalPrice = cart.getPrice();
      //Assert
      assert.equal(945, totalPrice);
    });

    it('should return 99 when total cart price is 99 and 5 off on every 100 spent is applied', function(){
      //Arrange
      let cart = new Cart();
      let product = new Product('Earphones', 99);
      cart.addItem(product, 1);
      //Act
      let totalPrice = cart.getPrice();
      //Assert
      assert.equal(99, totalPrice);
    });

    it('should return 96 when total cart price is 101 and 5 off on every 100 spent is applied', function(){
      //Arrange
      let cart = new Cart();
      let product = new Product('Earphones', 101);
      cart.addItem(product, 1);
      //Act
      let totalPrice = cart.getPrice();
      //Assert
      assert.equal(96, totalPrice);
    });

    it('should give employee discount user is an employee of the store', function() {
       //Arrange
       let user = new User('John', false)
       let cart = new Cart(user);
       let product = new Product('Earphones', 100);
       cart.addItem(product, 1);
       //Act
       let totalPrice = cart.getPrice();
       //Assert
       assert.equal(70, totalPrice);
    })
  });
});