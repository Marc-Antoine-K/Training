

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//GOT 100%
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    let [q, r] = [1, 2];
    let B = [];
    A = A.sort((a, b) => a - b);
    for(let p = 0; p < N; p++){
        q = p + 1;
        r = q + 1;
        //if(A[p] + A[q] - A[r] > 0 && A[q] + A[r] - A[p] > 0 && A[r] + A[p] - A[q] > 0){ NO NEED TO CHECK ALL BECAUSE 2 CONDITIONS ALWAYS MET
        if(A[p] + A[q] - A[r] > 0){
            return 1;
        }
    }
    return 0;
}

//DUMMY SOLUTION
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    let [p, q, r] = [0, 1, 2];
    let B = [];
    for(let p = 0; p < N; p++){
        for(let q = p + 1; q < N; q++){
            for(let r = q + 1; r < N; r++){
                if(A[p] + A[q] - A[r] > 0 && A[q] + A[r] - A[p] > 0 && A[r] + A[p] - A[q] > 0){
                    return 1;
                }
            }
        }
    }
    return 0;
}