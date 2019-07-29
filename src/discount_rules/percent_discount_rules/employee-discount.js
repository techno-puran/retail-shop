export default class EmployeeDiscountRule {
  isApplicable(user) {
    return user.isEmployee;
  }

  getDiscount(){
    return 30;
  }
}