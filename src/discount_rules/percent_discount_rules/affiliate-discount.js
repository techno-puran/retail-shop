export default class AffiliateDiscountRule {
  isApplicable(user) {
    return user.isAffiliate;
  }
  getDiscount(){
    return 10;
  }
}