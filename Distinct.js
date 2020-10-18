// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = A.reduce(
        (map, el) => {
            map[el] = 1;
            return map;
        }, {});
    let solution = Object.keys(map).length;
    return solution;
}
