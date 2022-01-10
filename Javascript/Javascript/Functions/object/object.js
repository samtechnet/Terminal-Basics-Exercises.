'use strict';

   
   /*
* Programming Quiz: Umbrella
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `umbrella`
* - The variable `umbrella` should be an object
* - Your `umbrella` object should have the `color` and `isOpen` property
* - Your `umbrella` object should have an `open()` method that toggles the value of `isOpen` property
* - Your `umbrella` object should have an `close()` method that toggles the value of `isOpen`
*/

var umbrella = {
    color: "pink",
    isOpen: true,
    open: function() {
        if (umbrella.isOpen === true) {
            return "The umbrella is already opened!";
        } else {
            umbrella.isOpen = true;
            return "Julia opens the umbrella!";
        }
    },
    // your code goes here

    close: function () {
        if (umbrella.isOpen === false) {
            return "The umbrella is already close!"
        } else {
            umbrella.isOpen = false;
            return "Julia close the umbrella!"
        }
    }
 };
 
umbrella.open()




/*
* Programming Quiz: Menu Items
* Create an object named `breakfast`.
* The object should contain properties for the `name`, `price`, and `ingredients`.
* Print the entire object on the console
*/

// your code goes here


const breakFast = {
    name: "", 
    price: "",
    ingrident:[]
  }
  breakFast.name='Lumberjack';
  breakFast.price = '$9.95';
  breakFast.ingrident=['eggs', 'sausage', "toast", "hashbrowns", "pancakes"];
  
  breakFast

  const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
      if (amount > 0) {
        savingsAccount.balance += amount;
      }
    },
    withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
        savingsAccount.balance -= amount;
      }
    },
    printAccountSummary: function() {
      return  ` Welcome! \n Your balance is ${savingsAccount.balance}  currently  and your interest rate is ${this.interestRatePercent}%.`
   
    }
   };
   
   
   savingsAccount.printAccountSummary()

  const savingsAccount = {
    balance: 1000,
    interestRatePercent: 1,
    deposit: function addMoney(amount) {
      if (amount > 0) {
        savingsAccount.balance += amount;
      }
    },
    withdraw: function removeMoney(amount) {
      var verifyBalance = savingsAccount.balance - amount;
      if (amount > 0 && verifyBalance >= 0) {
        savingsAccount.balance -= amount;
      }
    },
    printAccountSummary: function() {
      return  ` Welcome! \n Your balance is ${savingsAccount.balance}  currently  and your interest rate is ${this.interestRatePercent}%.`
   
    }
   };
   
   
   savingsAccount.printAccountSummary()

