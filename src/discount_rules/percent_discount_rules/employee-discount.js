module.exports = class EmployeeDiscountRule {
  isApplicable(user) {
    return user.isEmployee;
  }

  getDiscount(){
    return 30;
  }
}