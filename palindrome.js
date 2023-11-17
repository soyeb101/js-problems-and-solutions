// How do you check if a given string is a Palindrome

// racecar > racecar > true
// dad > dad > true
// 121 > 121 > true
// soyeb > beyos > false


// Case 1

function isPalindrome(str) {
  return str === str.split("").reverse().join("");
}

const result1 = isPalindrome("racecar");
console.log(result1);

// Case 2

function isPalindrome2(str) {
  let newStr = str.toLowerCase();

  let left = 0;
  let right = newStr.length - 1;

  while(left < right) {
    if(newStr[left]!== newStr[right]) {
      return false;
    }
    left++;
    right--;
  }
  return true;
}

const result2 = isPalindrome("dad");
console.log(result2);
