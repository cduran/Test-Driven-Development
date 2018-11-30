/* The code block below ONLY Applies to Node.js - This Demonstrates
   re-useability of JS code in both Back-end and Front-end! #isomorphic */
/* istanbul ignore next */
if (typeof module !== 'undefined' && module.exports) {
  module.exports = getChange;  // allows CommonJS/Node.js require()
}
var coins = [200, 100, 50, 20, 10, 5, 2, 1];
function getChange (totalPayable, cashPaid) {
    var change = [];
    var diference = 0;

    if (totalPayable > cashPaid) {
        diference = totalPayable - cashPaid;
    } else {
        diference = cashPaid - totalPayable;
    }

    while (diference !== 0){
        for (var i = 0; i < coins.length; i++) {
            var coin = coins[i];
            if (coin <= diference){
                diference = diference - coin;
                change.push(coin);
                if (diference === coin){
                    break;
                }
            }
        }
    }

    return change;
}
