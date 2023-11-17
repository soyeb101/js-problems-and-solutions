// sorting using recursive function
// [2,3,1,4] -> by default case

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
