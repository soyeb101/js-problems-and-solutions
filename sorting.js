// sorting using recursive function
// [2,3,1,4] -> by default case

function bubbleSort(arr) {
    for(let i = 0; i < arr.length; i++) {
        for(let j = 0; j < arr.length - i - 1; j++) {
            if(arr[j] > arr[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
            }
        }
    }
    return arr;
}

let arr = [2,3,1,4];

console.log(bubbleSort(arr));

// aother way

let myArray = [2,3,1,4];
let myNewList = [];
let i = 0;
let j = 1;


function isSorted(arr){
    for(let i = 0;i<arr.length; i++){
        if(arr[i] > arr[i+1]){
            return false;
        }
    }
    return true;
}

function sortCheck(arr) {
    if(isSorted(arr)){
        myNewList = arr;
        return;
    } else if(arr[i] < arr[j]){
        i++;
        j++;
        sortCheck(arr)
    }else{
        [arr[i],arr[j]]= [arr[j],arr[i]]
        i=0;
        j=1;
        sortCheck(arr);
    }
}

sortCheck(myArray);
console.log(myNewList);
