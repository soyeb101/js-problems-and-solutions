// Selection sort
// [0,2,32,22,10,19]

function selectionSort(arr) {

    for(let i = 0; i <arr.length; i++) {
        let min = i;
        for(let j = i+1; j < arr.length; j++) {
            if(arr[j] < arr[min]) {
                min = j;
            }
        }
        if(i!==min) {
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }

    return arr;
}

const result = selectionSort([0,2,32,22,10,19]);
console.log(result);