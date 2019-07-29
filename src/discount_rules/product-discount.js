module.exports = class ProductOffers {
  constructor() {
    this.employeeDiscount = 30;
  }

  getDiscount(User){
    switch(true){
      case User.isEmployee:
        return this.employeeDiscount;
      default:
        return 0;
    }
  }
}