// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

//O(Nlog(N)) solution!
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    if(N === 3){
        return A[0]*A[1]*A[2];
    }
    const B = A.sort((a, b) => a-b);
    //at least 3 positive integers
    const posSol = B[N-1]*B[N-2]*B[N-3];
    const negSol = B[0]*B[1]*B[N-1];
    return posSol > negSol ? posSol : negSol;
}

//O(N) solution!

//HERE WE UPDATE BOTH MIN AND MAX EACH ITERATION!!!!!!!!!!!!!
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    if(N === 3){
        return A[0]*A[1]*A[2];
    }
    const MAX = 1001;
    const B = [MAX,MAX,-MAX,-MAX,-MAX];
    //B = [smallest, 2ndSmallest, 3rdHighest, 2ndHighest, Highest];
    for(let i = 0; i < N; i++){
        let tmp = A[i];
        //update max
        if(tmp > B[4]){
            B[2] = B[3];
            B[3] = B[4];
            B[4] = tmp;
        }
        else if(tmp > B[3]){
            B[2] = B[3];
            B[3] = tmp;
        }
        else if(tmp > B[2]){
            B[2] = tmp;
        }
        //update min
        if (tmp < B[0]){
            B[1] = B[0];
            B[0] = tmp;
        }
        else if(tmp < B[1]){
            B[1] = tmp;
        }

    }
    const v1 = B[4]*B[3]*B[2];
    const v2 = B[4]*B[0]*B[1];
    return v1 > v2 ? v1 : v2;  
}