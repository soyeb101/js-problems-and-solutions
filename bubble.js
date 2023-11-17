// Bubble Sort (Sorting ...)
// A sorting algorithm where the largest valuses bubble up at the top

function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--){
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
            }
        }
    }
    return arr;
}

// const result = bubbleSort([5,4,3,6,7,9]);

// console.log(result);


// optimize way
function bubbleSort(arr) {
    for(let i = arr.length; i > 0; i--){
        let isSwapped;
        for(let j = 0; j < i-1; j++){
            if(arr[j] > arr[j+1]){
                [arr[j],arr[j+1]] = [arr[j+1],arr[j]]
                isSwapped = true;
            }
        }
        if(!isSwapped){
            break;
        }
    }
    return arr;
}

const result = bubbleSort([5,4,3,6,7,9]);

console.log(result);

