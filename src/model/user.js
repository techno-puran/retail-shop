module.exports = class User{
    constructor(name, isEmployee = false) {
        this.name = name;
        this.isEmployee = isEmployee;
    }
}