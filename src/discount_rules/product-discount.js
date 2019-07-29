module.exports = class ProductOffers {
  constructor() {
    this.employeeDiscount = 30;
  }

  getDiscount(user) {
    if(user === undefined)
      return 0;

    switch(true){
      case user.isEmployee:
        return this.employeeDiscount;
      default:
        return 0;
    }
  }
}