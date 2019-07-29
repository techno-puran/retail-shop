module.exports = class ProductOffers {
  constructor() {
    this.employeeDiscount = 30;
  }

  getDiscount(user){
    switch(true){
      case user.isEmployee:
        return this.employeeDiscount;
      default:
        return 0;
    }
  }
}