module.exports = class User{
    constructor(name, isEmployee = false, isAffiliate = false) {
        this.name = name;
        this.isEmployee = isEmployee;
        this.isAffiliate = isAffiliate;
    }
}