const DiscountRule = require("../../src/discount_rules/percent_discount_rules/loyalty-discount").default;
const User = require("../../src/model/user").default;
var assert = require("assert");

describe("loyalty-discount", function() {
  describe("#isApplicable()", function(){
    it("should return false when user is enrolled for less than 2 years", function() {
      //Arrange
      let discountRule = new DiscountRule();
      let user = new User("John");
      //Act
      let isApplicable = discountRule.isApplicable(user);
      //Assert
      assert.equal(false, isApplicable);
    });

    it("should return true when user is an enrolled with store for more than 2 years", function() {
      //Arrange
      let discountRule = new DiscountRule();
      let enrollmentDate = new Date(new Date().setFullYear(new Date().getFullYear() - 3));
      let user = new User("John", false, false, enrollmentDate);
      //Act
      let isApplicable = discountRule.isApplicable(user);
      //Assert
      assert.equal(true, isApplicable);
    });
  });

  describe("#getDiscount()", function(){
    it("should return 5% as discount percent for loyalty user", function() {
      //Arrange
      let discountRule = new DiscountRule();
      //Act
      let discountPercent = discountRule.getDiscount();
      //Assert
      assert.equal(5, discountPercent);
    });
  });
});