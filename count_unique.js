function countUnique(array) {
    if(array.length>0){
        let i = 0;
        for(j=1;j<array.length; j++)
        if(array[i]!==array[j]){
            i++;
            array[i] = array[j];
        }
        return i+1;
    } else{
        throw new Error('Array is empty')
    }
}

const result = countUnique([1,1,2,3,3,2,4,5,6,7,8,8]);
console.log(result);

// on(n) linear time complexity