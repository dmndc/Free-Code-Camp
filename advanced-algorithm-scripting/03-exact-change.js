/*
Design a cash register drawer function checkCashRegister() that accepts purchase price as the first argument (price), payment as the second argument (cash), and cash-in-drawer (cid) as the third argument.

cid is a 2D array listing available currency.

Return the string "Insufficient Funds" if cash-in-drawer is less than the change due. Return the string "Closed" if cash-in-drawer is equal to the change due.

Otherwise, return change in coin and bills, sorted in highest to lowest order.
 */


function checkCashRegister(price, cash, cid) {
  var change = Math.abs(cash - price) * 100;
  var changeLeft = change;
  var totalCid = getTotalCid(cid);
  var result = [];

  if (totalCid < change) {
    return "Insufficient Funds";
  } else if (totalCid === change) {
    return "Closed";
  }

  for (var i = cid.length - 1; i >= 0; i--) {
    var coinName = cid[i][0];
    var coinTotal = cid[i][1] * 100;
    var coinValue = getValue(coinName);
    var coinAmount = coinTotal / coinValue;
    var toReturn = 0;

    while (changeLeft >= coinValue && coinAmount > 0) {
      changeLeft = changeLeft - coinValue;
      coinAmount--;
      toReturn++;
    }

    if (toReturn > 0) {
      result.push([coinName, toReturn * (coinValue / 100)]);
    }
  }

  if (getTotalCid(result) !== change) {
    return 'Insufficient Funds';
  }

  return result;

  function getTotalCid(cid) {
    var total = 0;

    for (var i = 0; i < cid.length; i++) {
      total += cid[i][1] * 100;
    }

    return total;
  }


  function getValue(coinOrBill) {
    switch (coinOrBill) {
      case 'PENNY':
        return 1;
      case 'NICKEL':
        return 5;
      case 'DIME':
        return 10;
      case 'QUARTER':
        return 25;
      case 'ONE':
        return 100;
      case 'FIVE':
        return 500;
      case 'TEN':
        return 1000;
      case 'TWENTY':
        return 2000;
      case 'ONE HUNDRED':
        return 10000;
    }
  }

}



checkCashRegister(19.50, 20.00, [
  ["PENNY", 1.01],
  ["NICKEL", 2.05],
  ["DIME", 3.10],
  ["QUARTER", 4.25],
  ["ONE", 90.00],
  ["FIVE", 55.00],
  ["TEN", 20.00],
  ["TWENTY", 60.00],
  ["ONE HUNDRED", 100.00]
]);
