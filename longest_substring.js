// Longest Substring without repeating charecters

// Leetcode problem

var lengthOfLongestSubstring = function (s) {
  // sliding window
  if (!s) {
    return 0;
  }

  let end = 0;
  let start = 0;
  let maxlength = 0;

  const Uniquecharecters = new Set();

  while (end < s.length) {
    if (!Uniquecharecters.has(s[end])) {
      Uniquecharecters.add(s[end]);
      end++;
      maxlength = Math.max(maxlength, Uniquecharecters.size);
    } else {
      Uniquecharecters.delete(s[start]);
      start++;
    }
  }

  return maxlength;
};

const result = lengthOfLongestSubstring("abcabcbb");

console.log(result);
