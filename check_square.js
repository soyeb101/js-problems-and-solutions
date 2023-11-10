function checkSquare(arr1,arr2) {
    let map1={};
    let map2={};
    for(item of arr1) {
        map1[item] = (map2[item] || 0)  + 1;
    }
    for(item1 of arr2) {
        map2[item1] = (map2[item1] || 0)  + 1;
    }

    for(let key in map1) {
        if(!map2[key * key]){
            return false;
        }
        if(map1[key]!== map2[key * key]){
            return false;
        }
    }

    return true;

}

console.log(checkSquare([1,2,3,4], [1,9,4,16]));


// time complexity O(n) linear time complexity







