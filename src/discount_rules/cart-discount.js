module.exports = class CartDiscount {

  getDiscount(totalPrice) {
    switch(true) {

      case totalPrice >= 100:
        return this.apply5forEvery100SpentOffer(totalPrice);
      
        default:
          return 0;
    }
  }
  
  apply5forEvery100SpentOffer(totalPrice) {
    return Math.floor(totalPrice / 100) * 5;
  }

  
}