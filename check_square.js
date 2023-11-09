// Checking Square in another array
// arr=[1,2,3,4], arr2=[1,5,8,11]

function checkSquare(arr1,arr2) {
    for(let i=0;i<arr1.length;i++){
    let isSquare = false;
    for(let j=0;i<arr1.length;i++) {
        if(arr1[i] * arr1[i] === arr2[j]){
            isSquare = true;
        }
        if(j === arr2.length - 1){
            if(!isSquare){
                return false;
            }
        }
    }
}
    return true;
}

console.log(checkSquare([1,2,3,4], [1,9,4,15]));

// time complexity O(n^2)