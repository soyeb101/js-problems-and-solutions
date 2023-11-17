// Find the maximum occuring character in given string

// Hello World
// Output -> l

function getMaxOccuring(str) {
  const map = {};

  str.split("").forEach((element) => {
    map[element] = map[element] ? map[element] + 1 : 1;
  });
  let max = 1;
  let char = str[0];

  for(let k in map) {
    if(map[k] > max) {
      max = map[k];
      char = k;
    }
  }
  return char;
}   

const result = getMaxOccuring("Hello World");

console.log(result);
