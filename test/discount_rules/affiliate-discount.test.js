import DiscountRule from "../../src/discount_rules/percent_discount_rules/affiliate-discount";
import User from "../../src/model/user";
var assert = require("assert");

describe("affiliate-discount", function() {
  describe("#isApplicable()", function(){
    it("should return false when user is not an affiliate of the store", function() {
      //Arrange
      let discountRule = new DiscountRule();
      let user = new User("John");
      //Act
      let isApplicable = discountRule.isApplicable(user);
      //Assert
      assert.equal(false, isApplicable);
    });

    it("should return true when user is an affiliate of the store", function() {
      //Arrange
      let discountRule = new DiscountRule();
      let user = new User("John", false, true);
      //Act
      let isApplicable = discountRule.isApplicable(user);
      //Assert
      assert.equal(true, isApplicable);
    });
  });

  describe("#getDiscount()", function(){
    it("should return 10% as discount percent for affiliate user", function() {
      //Arrange
      let discountRule = new DiscountRule();
      //Act
      let discountPercent = discountRule.getDiscount();
      //Assert
      assert.equal(10, discountPercent);
    });
  });
});