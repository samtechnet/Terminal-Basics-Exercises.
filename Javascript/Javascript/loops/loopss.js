/*
 * Programming Quiz
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `x` with a starting value of `1`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should use a conditional statement
 * - Your code should increment `x` by `1` each time the loop executes
 * - Your code should produce the expected output
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
let x = 1;

 while (x < 20) {
    // check divisibility
    // print Fizz, Buzz, or FizzBuzz
    // increment x
    x = x + 1;
    if (x % 3 === 0) {
      console.log('fizz')
    }
    else if (x % 5 === 0) {
       console.log('buzz')
    }
    else if (x % 3 && x % 5 === 0) {
       console.log('fizzbuss')
    }
    else (console.log(x))
}


* /

/*
2. Write a loop that prints out the following song. Starting at 99, and ending at 1 bottle.
99 bottles of juice on the wall! 99 bottles of juice! Take one down, pass it around... 98 bottles of juice on the wall!
98 bottles of juice on the wall! 98 bottles of juice! Take one down, pass it around... 97 bottles of juice on the wall!
...
2 bottles of juice on the wall! 2 bottles of juice! Take one down, pass it around... 1 bottle of juice on the wall!
1 bottle of juice on the wall! 1 bottle of juice! Take one down, pass it around... 0 bottles of juice on the wall!


/*
 * Programming Quiz
 *
 * Use the following `while` loop to write out the song "99 bottles of juice".
 * Log the your lyrics to the console.
 *
 * Note
 *   - Each line of the lyrics needs to be logged to the same line.
 *   - The pluralization of the word "bottle" changes from "2 bottles" to "1 bottle" to "0 bottles".
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should have a variable `num` with a starting value of `99`
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */


var num = 99;

while (/* your stop condition goes here */) {
    // check value of num
    // print lyrics using num
    // don't forget to check pluralization on the last line!
    // decrement num
}

*/

let num=99;

while(num>0){
if (num === 1) {
  console.log(num + " bottle of juice on the wall! "
                    + num + " bottle of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
}
 else if (num === 2){
        console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottle of juice on the wall!");
    }
else {
   console.log(num + " bottles of juice on the wall! "
                    + num + " bottles of juice! Take one down, pass it around... "
                    + (num-1) + " bottles of juice on the wall!");
}
num--  
}



/*
 * Programming Quiz: Countdown, Liftoff! (4-3)
 * 
 * Using a while loop, print out the countdown output above.
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should include a `while` loop
 * - Your `while` loop should have a stop condition
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */



let time=60;
while (time>0){
  time--
  if (time ===50){
    console.log('T-' + '  ' + time + '  ' + 'seconds' + '  ' +  'Orbiter transfers from ground to internal power')
  }
  if (time ===31){
    console.log('T-' + '  ' + time + '  ' + 'seconds' + '  ' +  'Ground launch sequencer is go for auto sequence start')
  }
  if (time ===16){
    console.log('T-' + '  ' + time + '  ' + 'seconds' + '  ' +  'Activate launch pad sound suppression system')
  }
  if (time ===10){
    console.log('T-' + '  ' + time + '  ' + 'seconds' + '  ' +  'Activate main engine hydrogen burnoff system')
  }
  if (time ===6){
    console.log('T-' + '  ' + time + '  ' + 'seconds' + '  ' +  'Main engine start')
  }
  if (time ===0){
    console.log('T-' + '  ' + time + '  ' + 'seconds' + '  ' +  'Solid rocket booster ignition and liftoff!')
  }
  else console.log('T-' + '  ' + time  )
}


/*
 * Programming Quiz
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `9`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should decrement `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
 
// rewrite the while loop as a for loop
/*var x = 9;
while (x >= 1) {
    console.log("hello " + x);
    x = x - 1;
}*/

for (x = 9; x >= 1; x =x-1){
   console.log("hello " + x);
 }



 /*
 * Programming Quiz: Fix the Error 
 */

/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `x` with the value of `5`
 * - Your `for` loop should have a stop condition for the value of `x`
 * - Your `for` loop should increment `x` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// fix the for loop
//for (x < 10; x++) {
//   console.log(x);
//}
for (x=5;x < 10; x++) {
   console.log(x);
}
 



/*
 * Programming Quiz: Fix the Error
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a `for` loop
 * - Your `for` loop should specify a starting condition `k` with the value of `0`
 * - Your `for` loop should have a stop condition for the value of `k`
 * - Your `for` loop should increment `k` each time it executes
 * - Your code should produce the expected output, as explained above
 * - Your code should not be empty
 * - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
 */
// fix the for loop
/*for (let k = 0 k < 200 k++) {
   console.log(k);
}*/

for (let k = 0; k < 200; k++) {
   console.log(k);
 }


 /*
 * Programming Quiz: Factorials 
 */

// your code goes here


let solution = 1
for (let num=12; num>=1; num --){
  solution *=num
  
}
console.log('factorial of 12 1s' + '  ' + solution)




/*
 * Programming Quiz: Find my Seat
 * 
 * Write a nested for loop to print out all of the different seat combinations in the theater.
 * The first row-seat combination should be 0-0 
 * The last row-seat combination will be 25-99
 * 
 * Things to note: 
 *  - the row and seat numbers start at 0, not 1
 *  - the highest seat number is 99, not 100
 */
/*
 * QUIZ REQUIREMENTS
 * - Your code should use a nested `for` loop'
 * - Your code should produce the expected output, as explained above
 */
// Write your code here
for (let x = 0; x < 26; x = x + 1) {
   for (let y = 0; y < 100; y = y + 1) {
      console.log(x + " " +y )
   }
   
  }