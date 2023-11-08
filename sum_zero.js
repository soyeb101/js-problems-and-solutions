function getSumPairZero(arr) {
    for(let num of arr) {
        for(let j=1;j<arr.length; j++) {
            if(num + arr[j] === 0) {
                return [num,arr[j]];
            }
        }
    }
}

// const result = getSumPairZero([-5,-4,-3,-2,0,2,4,6,8]);
// console.log(result);

// o(n^2) quadratic time complexity

// Another solution optimized

function findSomePair(arr) {
    let left = 0;
    let right = arr.length - 1;

    while(left < right) {
        sum = arr[left] + arr[right];
        if(sum === 0) {
            return [arr[left], arr[right]];
        } else if(sum > 0) {
            right--;
        } else {
            left++;
        }
    }
}

const result = findSomePair([-5,-4,-3,-2,0,2,4,6,8]);
console.log(result);


// o(n) linear time complexity