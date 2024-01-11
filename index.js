function isPalindrome(word) {
  // Write your algorithm here
  const cleanword = word.replace(/[^a-zA-Z]/g, '').toLowerCase();
  
    return cleanword === cleanword.split('').reverse().join('');
}

// Test cases
console.log(isPalindrome('abba'));       // true
console.log(isPalindrome('racecar'));    // true
console.log(isPalindrome('a'));          // true
console.log(isPalindrome('robot'));      // false
console.log(isPalindrome('ab'));         // false



/* 
  Add your pseudocode here

  function isPalindrome(word):
    // Remove non-letter characters and convert to lowercase
    cleanword = removeNonLettersAndLowercase(word)

    // Check if the string is the same when read forwards and backwards
    return cleanword equals reverse(cleanword)

function removeNonLettersAndLowercase(str):
    // Use regular expression to replace non-letter characters with an empty string
    cleanword = word.replace(/[^a-zA-Z]/g, '')

    // Convert the string to lowercase
    return cleanword.toLowerCase()

// Test cases
print(isPalindrome('abba'))        // true
print(isPalindrome('racecar'))     // true
print(isPalindrome('a'))            // true
print(isPalindrome('robot'))        // false
print(isPalindrome('ab'))           // false



/*
  Add written explanation of your solution here
*/
// Function isPalindrome(word)
//Takes a string word as input.
//Calls the helper function removeNonLettersAndLowercase to clean the string by 
//removing non-letter characters and converting it to lowercase
//Compares the cleaned string with its reverse using the equality operator.
//Returns true if the cleaned string is equal to its reverse, indicating that
 //the original string is a palindrome; otherwise, returns false.
//Helper Function removeNonLettersAndLowercase word

//Takes a string word as input.
//Uses a regular expression to replace all non-letter characters with an empty string, leaving only letters.
//Converts the resulting string to lowercase.
//Returns the cleaned and lowercase string.
  //

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
