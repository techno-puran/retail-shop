module.exports = class ProductOffers {
  constructor() {
    this.employeeDiscount = 30;
    this.affiliateDiscount = 10;
  }

  getDiscount(user) {
    if(user === undefined)
      return 0;

    switch(true){
      case user.isEmployee:
        return this.employeeDiscount;

      case user.isAffiliate:
        return this.affiliateDiscount;

      default:
        return 0;
    }
  }
}