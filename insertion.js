// insertion sorting

const arr = [8,2,4,1,3];


const sorted = (arr) => {
    for(let i = 0; i < arr.length; i++) {
        let curr = arr[i];
        let j = i - 1;
        while(j >= 0 && arr[j] > curr) {
            arr[j + 1] = arr[j];
            j--;
        }
        arr[j + 1] = curr;
    }
    return arr;
}

const result = console.log(sorted(arr));



// https://visualgo.net/en/sorting

