// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//MINE SMART
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    let left = [];
    let right = [];
    for(let i = 0; i < N; i++){
        left[i] = i - A[i];
        right[i] = i + A[i];
    }
    left = left.sort((a, b) => a - b);
    right = right.sort((a, b) => a - b);
    let discOpen = 0;
    let pairs = 0;
    let val = left[0] < right[0] ? left[0] : right[0];
    let r = 0;
    let l = 0;
    while(val <= right[N - 1]){
            if(val === left[l]){
                discOpen++;
                l++;
                //if l === N then the comparison is always false
                val = left[l] <= right[r] ? left[l] : right[r];
            }
            else{//val = right[r]
                pairs += discOpen - 1;
                if (pairs > 10000000){
                    return -1;
                }
                r++;
                //if r === N then the comparison is always false
                val = left[l] <= right[r] ? left[l] : right[r];
                discOpen--;
            }
    }
    return pairs;
}

// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//SOLUTION IDIOTE MINE
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    const MAX = 10000000;
    let pairs = 0;
    for(let i = 0; i < N; i++){
        for(let j = i + 1; j < N; j++){
            if(j - i <= A[i] + A[j]){
                pairs++;
                if(pairs > MAX){
                    return -1;
                }
                //console.log(i, j, pairs);
            }
        }
    }
    return pairs;
}

// console.log('this is a debug message');
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    const N = A.length;
    let tupple = [];
    for(let i = 0; i < N; i++){
        //tupple[i] = left[i], right[i]
        tupple[i] = [i - A[i], i + A[i]];
    }
    tupple = tupple.sort((a, b) => a[0] - b[0]);
    let pairs = 0;
    for(let k = 0; k < N; k++){
        for(let l = k + 1; l < N; l++){
            //if the circle 'starting' after the circle k closes before the circle k
            //i.e if left[l] <= right[k] && left[l] <= left[k]
            if(tupple[l][0] <= tupple[k][1]){
                pairs++;
                if (pairs > 10000000) {return -1;}
            }
            else{
                break;
            }
        }
    }
    return pairs;
}

//
