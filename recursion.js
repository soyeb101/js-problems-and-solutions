// Recursion: when function call itself
// otherwise it will get called for inifinite time
// if a function call itself then there must be and end point

let counter = 1;
function demo(n) {
    if(counter > n) {
        return;
    }

    console.log('Counter: ' + counter);
    counter++;
    demo(n);
}
demo(10);