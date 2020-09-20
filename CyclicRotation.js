// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A, K) {
    // write your code in JavaScript (Node.js 8.9.4)
    const l = A.length;
    let Kr = K%l;  
    if (Kr === 0){
        return A;
    }
    else{
        const RotatedA = [...A];
        for(let i = 0; i < l; i++){
            if (i + Kr < l){
                RotatedA[i + Kr] = A[i];
            }
            else{
                RotatedA[i + Kr -l] = A[i];
            }
        }
        return RotatedA;
    }
}
