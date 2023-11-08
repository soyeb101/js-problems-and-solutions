// Divide & Conquerer Technique
// Find the index of given no in a sorted array 7
// [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15] ==> index 6 -> output

function binarySearch(arr,num) {
    let min = 0;
    let max = arr.length - 1;

    while(min <= max){
        let mid = Math.floor((min + max) / 2);

        if(arr[mid] < num) {
            min=mid+1;
        }else if(arr[mid] > num){
            max=mid-1;
        }else{
            return mid;
        }
    }
    return -1;
}

const result = binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15],7);
console.log(result);