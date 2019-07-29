const CartDiscount = require("../../src/discount_rules/cart-discount").default;
var assert = require("assert");

describe("cart-discount", function() {
  describe("#getDiscount()", function(){

    it("should return 0 when total price 99 is passed", function() {
      //Arrange
      let cartDiscount = new CartDiscount();
      let totalPrice = 99;
      //Act
      let discount = cartDiscount.getDiscount(totalPrice);
      //Assert
      assert.equal(0, discount);
    });

    it("should return 5 when total price 100 is passed", function() {
      //Arrange
      let cartDiscount = new CartDiscount();
      let totalPrice = 100;
      //Act
      let discount = cartDiscount.getDiscount(totalPrice);
      //Assert
      assert.equal(5, discount);
    });

    it("should return 45 when total price 990 is passed", function() {
      //Arrange
      let cartDiscount = new CartDiscount();
      let totalPrice = 990;
      //Act
      let discount = cartDiscount.getDiscount(totalPrice);
      //Assert
      assert.equal(45, discount);
    });
  });
});