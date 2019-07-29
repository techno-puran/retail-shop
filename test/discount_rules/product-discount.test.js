const ProductDiscount = require('../../src/discount_rules/product-discount');
const User = require('../../src/model/user');
var assert = require('assert');

describe('product-discount', function() {
  describe('#getDiscount()', function(){

    it('should not return 30% when user is not an employee of the store', function() {
      //Arrange
      let productDiscount = new ProductDiscount();
      let user = new User("John", false);
      //Act
      let discountPercent = productDiscount.getDiscount(user);
      //Assert
      assert.notEqual(30, discountPercent);
    });

    it('should return 30% when user is an employee of the store', function() {
      //Arrange
      let productDiscount = new ProductDiscount();
      let user = new User("John", true);
      //Act
      let discountPercent = productDiscount.getDiscount(user);
      //Assert
      assert.equal(30, discountPercent);
    });
  });
});