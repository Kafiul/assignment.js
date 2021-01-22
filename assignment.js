


// Problem-1 (Kilometer To Meter)

function kilometerToMeter(kilometer) {
    if (kilometer < 0) {
      return "Kilometer can't be negative value!";
    }
    else {
      var meter = kilometer * 1000;
      return meter;
    }
}
var result = kilometerToMeter(5);
console.log(result);



// Problem-2 (Budget Calculator)

function budgetCalculator(numOfWatch, numOfMobile, numOfLaptop) {

    if (numOfWatch < 0 || numOfMobile < 0 || numOfLaptop < 0) {
        return "Number of any Item can't be negative!";
    } else {
         var totalCost = numOfWatch * 50 + numOfMobile * 100 + numOfLaptop * 500;
         return totalCost;
    }
}
var totalBudget = budgetCalculator(3, 2, 1);
console.log(totalBudget);


// Problem-3 (Hotel Cost)

function hotelCost(days) {
    if (days < 0) {
          return "Number of Days can't be negative?";
    } else {
      if (days <= 10) {
        var totalCost = days * 100;
      } 
      else if (days <= 20) {
          var firstTenDay = 10 * 100;
          var stayingDays = days - 10;
          var secondTenDay = stayingDays * 80;
          totalCost = secondTenDay + firstTenDay;
      }
      else {
          firstTenDay = 10 * 100;
          secondTenDay = 10 * 80;
          stayingDays = days - 20;
          totalCost = firstTenDay + secondTenDay + stayingDays * 50;
      }
      return totalCost;
    }
}
  
var totalHotelCost = hotelCost(23);
console.log(totalHotelCost);


// Problem-4 (Mega Friend)

function megaFriend(friendList) {
  if (friendList.length <= 0) {
      return "String Can't be Empty";
  } else {
      var largeName = friendList[0];
      for (var i = 0; i < friendList.length; i++) {
          var currentName = friendList[i];
          if (currentName.length > largeName.length) {
              largeName = currentName;
          }
     }
    return largeName;
}
}

var bigName = megaFriend(["shuvo", "kafiul", "Kafiul Islam", "islam"]);
console.log(bigName);