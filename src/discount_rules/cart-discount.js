module.exports = class CartDiscount {

  constructor() {
    this.apply5forEvery100SpentOffer = function(totalPrice) {
      return Math.floor(totalPrice / 100) * 5;
    }
  }

  getDiscount(totalPrice) {
    switch(true) {

      case totalPrice >= 100:
        return this.apply5forEvery100SpentOffer(totalPrice);
      
        default:
          return 0;
    }
  }

  
}