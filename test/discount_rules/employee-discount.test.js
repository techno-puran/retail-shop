const DiscountRule = require('../../src/discount_rules/percent_discount_rules/employee-discount');
const User = require('../../src/model/user');
var assert = require('assert');

describe('employee-discount', function() {
  describe('#isApplicable()', function(){
    it('should return false when user is not an employee of the store', function() {
      //Arrange
      let discountRule = new DiscountRule();
      let user = new User("John");
      //Act
      let isApplicable = discountRule.isApplicable(user);
      //Assert
      assert.equal(false, isApplicable);
    });

    it('should return true when user is an employee of the store', function() {
      //Arrange
      let discountRule = new DiscountRule();
      let user = new User("John", true);
      //Act
      let isApplicable = discountRule.isApplicable(user);
      //Assert
      assert.equal(true, isApplicable);
    });
  });

  describe('#getDiscount()', function(){
    it('should return 30% as discount percent for employee user', function() {
      //Arrange
      let discountRule = new DiscountRule();
      //Act
      let discountPercent = discountRule.getDiscount();
      //Assert
      assert.equal(30, discountPercent);
    });
  });
});