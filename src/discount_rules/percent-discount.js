import EmployeePercentDiscount from "./percent_discount_rules/employee-discount";
import AffiliatePercentDiscount from "./percent_discount_rules/affiliate-discount";
import LoyaltyCustomerPercentDiscount from "./percent_discount_rules/loyalty-discount";

export default class PercentDiscount {
  constructor() {
    let employeeDiscount = new EmployeePercentDiscount();
    let affiliateDiscount = new AffiliatePercentDiscount();
    let loyaltyDiscount = new LoyaltyCustomerPercentDiscount();

    this.rules = [employeeDiscount, affiliateDiscount, loyaltyDiscount];
  }

  getDiscount(user, product) {

    if(user === undefined || (product && product.isGroceryItem()))
      return 0;

    for(let rule of this.rules) {
      if (rule.isApplicable(user)) {
        return rule.getDiscount();
      }
    }

    return 0;
  }
}