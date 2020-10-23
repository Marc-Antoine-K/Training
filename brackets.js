// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    N = S.length;
    if(N === 0){
        return 1;
    }
    let counter = [0, 0, 0];
    let B = [];
    let k = 0;
    for(let i = 0; i < N; i++){
        if(S[0] === ")" || S[0] === "}" || S[0] === "]"){
            return 0;
        }
        switch (S[i]){
            case "(":
                counter[0]++;
                B[k] = S[i];
                k++;
                break;
            case "{":
                counter[1]++;
                B[k] = S[i];
                k++;
                break;
            case "[":
                counter[2]++;
                B[k] = S[i];
                k++;
                break;
            case ")":
                counter[0]--;
                if (counter[0] < 0 || B[k -1] !== "("){
                    return 0;
                }
                k--;
                break;
            case "}":
                counter[1]--;
                if (counter[1] < 0 || B[k-1] !== "{" ){
                    return 0;
                }
                k--;
                break;
            case "]":
                counter[2]--;
                if (counter[2] < 0 || B[k-1] !== "["){
                    return 0;
                }
                k--;
                break;
        }
    }
    for(let i = 0; i < 3; i++){
        if(counter[i] !== 0){
            return 0;
        }
    }
    return 1;
}