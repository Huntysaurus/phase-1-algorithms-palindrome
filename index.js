function isPalindrome(word) {
  // Write your algorithm here
  if(word === word.split('').reverse().join('')){
    return true
  } else {
    return false
  }

}

/* 
  the parameter will be a string which is a word that is all lowercase with letters only. The word needs to be read forwards and backwards so that both versions may be compared to each other. If both versions of the string are identical, the return value should be true, otherwise it should return false.
*/

/*
  Right away since we need to compare something that returns true or false, we can use either an if else statement or a ternary.

  And since there are no direct methods in js to simply read a string backwards, we need to use several methods to get the desired output.

  We can break the string into an array of string objects containing each individual letter using the .split() method. Arrays of string objects are much easier to manipulate than a single string object.

  let word = 'robot'
  
  return word.split('')

  => [ 'r', 'o', 'b', 'o', 't' ]

  we can then attach the .reverse() method right after, which will simply reverse the array.

  word.split('').reverse()

  => [ 't', 'o', 'b', 'o', 'r' ]

  Next we can use the .join() method, which will join the individual strings back together to give us the reversed version of the original word

  word.split('').reverse().join('')

  => 'tobor'

  And last, we compare our altered word to the original word to verify that they are exactly the same.

  if(word === word.split('').reverse().join('')){
    return true
  } else {
    return false
  }

  in this case 'robot' does not return true, but 'madam' does.

  if we were to use a ternary instead of an if else statement, it would look like this,
  
  return (word === word.split('').reverse().join('')) ? true : false

  which is essentially saying if the condition,

  (word === word.split('').reverse().join(''))

  is true,

  ?

  then return the first expression,

  true

  otherwise, return the second expression,

  false

  */

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
