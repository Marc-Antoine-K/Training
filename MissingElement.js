// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    let sum = A.reduce((sum,el) => {
        sum += el;
        return parseInt(sum);
    },0);

    let result = (N+1)*(N+2)/2 - sum;
    return result;
}

/* function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    let sum = A.reduce((sum,el) => sum + el,0);

    return (N+1)*(N+2)/2 - sum;
} */