const ProductDiscount = require('../../src/discount_rules/percent-discount');
const User = require('../../src/model/user');
var assert = require('assert');

describe('percent-discount', function() {
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

    it('should return 10% when user is an affiliate of the store', function() {
      //Arrange
      let productDiscount = new ProductDiscount();
      let user = new User("John", false, true);
      //Act
      let discountPercent = productDiscount.getDiscount(user);
      //Assert
      assert.equal(10, discountPercent);
    });



    it('should return 30% when user has enrolled for more than 2 years and is also an employee', function() {
      //Arrange
      let productDiscount = new ProductDiscount();
      let enrollmentDate = new Date(new Date().setFullYear(new Date().getFullYear() - 3));
      let user = new User("John", true, false, enrollmentDate);
      //Act
      let discountPercent = productDiscount.getDiscount(user);
      //Assert
      assert.equal(30, discountPercent);
    });

    it('should return 5% when user has enrolled for more than 2 years', function() {
      //Arrange
      let productDiscount = new ProductDiscount();
      let enrollmentDate = new Date(new Date().setFullYear(new Date().getFullYear() - 3));
      let user = new User("John", false, false, enrollmentDate);
      //Act
      let discountPercent = productDiscount.getDiscount(user);
      //Assert
      assert.equal(5, discountPercent);
    });
  });
});