module.exports = class CartDiscount {

  getDiscount(totalPrice) {
    if (totalPrice < 100) {
      return 0;
    }
    return Math.floor(totalPrice / 100) * 5;
  }
  
}