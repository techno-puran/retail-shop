module.exports = class AffiliateDiscountRule {
  isApplicable(user) {
    return user.isAffiliate;
  }

  getDiscount(){
    return 10;
  }
}