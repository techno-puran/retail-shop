export default class LoyaltyDiscountRule {
  isApplicable(user) {
    return user.isLoyalCustomer();
  }

  getDiscount(){
    return 5;
  }
}