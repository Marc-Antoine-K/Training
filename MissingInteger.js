// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
    //write your code in JavaScript (Node.js 8.9.4)
    let map = A.reduce((map, el) => {
        if(el > 0){
            map[el] = el;
        }
        return map;
    }, {});
    //let result = 1;
    // let keys = [...Object.keys(map)];
    // keys = keys.map(el => parseFloat(el));
    
    // let result = 1;
    // while(true){
    //     if(!map[result]) return result;
    //     result++;
    // }
    
    //more general if the exercise is to find the smallest positive integer greater than the first positive integer //of A that does not occur in A
    const B = [...Object.values(map)];
    if (B === undefined || B.length === 0 || B[0] !== 1)  return 1;
    
    let r = 0;
    while(true){
        if (B[r + 1] !== B[r]+1) return B[r] + 1;
        r++;
    }
}

/* 
function solution(A) {
    // write your code in JavaScript (Node.js 8.9.4)
    let map = A.reduce((map, el) => {
        if(el > 0){
            map[el] = 1;
        }
        return map;
    }, {});
    let result = 1;
    let keys = [...Object.keys(map)];
    keys = keys.map(el => parseFloat(el));

    //console.log(keys);
    M = keys.length;
    if(M === 0){
        return result;
    }
    //single element array
    if(M === 1){
        result = keys[0] > 0 ? keys[0] + 1 : 1;
        return result;
    }
    //else array has at least 2 elements (positive)
    let i = 1;
    let gap = 0;
    while(i<M){
        gap = keys[i] - keys[i - 1];
        if(gap > 1){
            result = keys[i - 1] + 1;
            break;
        }
        else if(i === M - 1 && gap < 2){
            result = keys[M - 1] + 1;
            break;
        }
        i++;
    }
    return result;
} */

