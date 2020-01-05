var shopper = {
    firstName: "David",
    lastName: "Saperstein",
    age: 31,
    groceryCart: ["Apples", "Cereal", "Soda"],
    groceryPrices: [2, 3, 4],
    readyToCheckOut: true,
    totalShoppingCost: function() {
        let totalCost = 0
 
        for (let i = 0; i < this.groceryPrices.length; i++) {
            totalCost = totalCost + this.groceryPrices[i]
            if(i === this.groceryPrices.length-1) {
                console.log("$"+totalCost)
            }
        }
    }
 
  }
 
 shopper.totalShoppingCost()