// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let left = A[0];
    let right = A.reduce((sum, el) => sum + el, 0) - A[0];
    let result = Math.abs(left - right);
    let tmp;
    for(let k = 1; k < A.length - 1; k++){
        left += A[k];
        right -= A[k];
        tmp = Math.abs(left - right);
        if(tmp < result){
        result = tmp;
        }
    }
    return result;
}