// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(X, A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let B = [];
    let count = 0;
    for (let k = 0; k < A.length; k++){
        if(!B[A[k]]){
            B[A[k]] = 1;
            count++;
        }
        if (count === X){
            return k;
        }
    }
    return -1;
}