module.exports = class PercentDiscount {
  constructor() {
    this.employeeDiscount = 30;
    this.affiliateDiscount = 10;
    this.loyalCustomerDiscount = 5;
  }

  getDiscount(user, product) {
    
    if(product && product.isGroceryItem())
      return 0;

    if(user === undefined)
      return 0;

    switch(true){
      case user.isEmployee:
        return this.employeeDiscount;

      case user.isAffiliate:
        return this.affiliateDiscount;

      case user.isLoyalCustomer():
        return this.loyalCustomerDiscount;

      default:
        return 0;
    }
  }

}