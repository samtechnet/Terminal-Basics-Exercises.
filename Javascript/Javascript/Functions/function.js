/*
* Programming Quiz: Laugh it Off 1
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a `laugh()` function
* - Your `laugh()` function should return the correct output
* - Your code should print `\"hahahahahahahahahaha!\"` by calling the `laugh()` function inside `console.log()`
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/

// your code goes here
function laugh(){
    let laugh = "hahahahahahahahahaha!"
    return laugh;
  }
console.log(laugh())
  

/*
* Programming Quiz: Laugh it Off 2
*
* Write a function called `laugh` with a parameter named `num` that represents the number of "ha"s to return.
*
* Note:
*  - make sure your the final character is an exclamation mark ("!")
*  - make sure that your function produces the correct results when it is called multiple times
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a `laugh()` function
* - Your `laugh()` function should have one parameter named `num`
* - Your `laugh()` function should return the correct number of laughs
*/


function laugh(num){
    let result = ' '
     for (let x = 1; x<=num; x++){
       result += 'ha'
     }
     return result
   }
   console.log(laugh(2) + '!')




   /*
* Programming Quiz: Build A Triangle
*/

/*
* QUIZ REQUIREMENTS
* - Your code should have a `buildTriangle()` function
* - Your `buildTriangle()` function should take one argument (or you can say parameter)
* - Your `laugh()` function should build the triangle as describe above
*/

// creates a line of * for a given length
function makeLine(lenght) {
    let line = ''
    for (let j = 1; j <= lenght; j++) {
        line += '* '
    }
    return line + '\n';
 }
 function buildTriangle(lenght){
    triangle = ' '
   for (let x = 1; x<=lenght; x++){
     triangle += makeLine(x)
   }
  
   return triangle
 }
 console.log(buildTriangle(10))



/*
* Programming Quiz: Laugh
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `laugh`
* - Your code should include an anonymous function expression stored in the variable `laugh`
* - Your anonymous function expression should take one argument
* - Your anonymous function expression should return the correct number of `hahaha`\'s
*/



 let laugh = function (lenght){
    laugh = ' '
   for (let x = 1; x<=lenght; x++){
     laugh += 'ha'
   }
  
   return laugh
 }
 console.log(laugh(10))




 /*
* Programming Quiz: Cry
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have a variable `cry`
* - Your code should include a named function expression stored in the variable `cry`
* - Your code should call the function expression using the variable name, not the function name
* - Your function expression should return the expected output
* - BE CAREFUL ABOUT THE PUNCTUATION AND THE EXACT WORDS TO BE PRINTED.
*/
// your code goes here


let cry = function (){
    laugh = ' '
     cry += 'boohoo!'
   return cry
 }
 console.log(cry())




 /*
* Programming Quiz: Inline Functions (5-6)
*/
/*
* QUIZ REQUIREMENTS
* - Your code should have an `emotions()` function
* - Your code should call the `emotions()` function
* - Your `emotions()` function call should have an inline function expression passed as the second parameter
* - Your function expression should return the expected output
*/
// don't change this code
// emotions() function definition
function emotions(myString, myFunc) {
    console.log("I am " + myString + ", " + myFunc(2));
 }
 // your code goes here
 // Call the emotions() function with two arguments
 // Argument 1 - "happy" string
 // Argument 2 - an inline function expression
 
 function laugh(num){
    let result = ' '
     for (let x = 1; x<=num; x++){
       result += 'ha'
     }
     return result
}

function emotions(laugh,  laugh ){
    return 'I am happy'  + laugh + '!'
  }

  console.log( emotions('happy', laugh(2)));