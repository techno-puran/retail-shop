module.exports = class User{
    constructor(name, isEmployee = false, isAffiliate = false, enrollmentDate = new Date()) {
        this.name = name;
        this.isEmployee = isEmployee;
        this.isAffiliate = isAffiliate;
        this.enrollmentDate = enrollmentDate;
    }

    isLoyalCustomer() {
        return this.calcDate(new Date(), this.enrollmentDate) >= 2;
    }


  calcDate(date1,date2) {
    var diff = Math.floor(date1.getTime() - date2.getTime());
    var day = 1000 * 60 * 60 * 24;

    var days = Math.floor(diff/day);
    var months = Math.floor(days/31);

    return Math.floor(months/12);
  }
}