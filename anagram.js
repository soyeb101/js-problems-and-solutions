// String Anagram
// 'hello' -> 'llheo'

// condition
// length check (for both Strings)
// String 'hello'
// {h:1, e:1,l:2,0:1}

function isAnagram(string1,string2) {
    if(string1.length!=string2.length){
        return false;
    }

    let counter = {}

    for(let letter of string1){
        counter[letter]=(counter[letter] || 0) + 1;
        console.log(counter[letter]);
    }

    // console.log(counter);

    for(let i of string2) {
        if(!counter[i]){
            return false;
        }

        counter[i]-=1;
    }
    return true;

    
}

const check = isAnagram('hello','lleho');
console.log(check);