// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    let map = A.reduce((map, el) => {
        map[el] = true;
        return map;
    },{});
    let i = 0;

    let result = 1;
    for(let i = 1; i < N + 1; i++){
        if(!map[i]){
            result = 0;
            break;
        }
    }
    return result;
}