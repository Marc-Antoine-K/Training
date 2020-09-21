// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message'); 

function solution(N) {
    // write your code in JavaScript (Node.js 8.9.4)
    const NBin = N.toString(2);
    let counting = false;
    let answer = 0;
    let tmp = 0;

    for (let i = 0; i < NBin.length; i++){
        if (!counting && NBin[i] === "1"){
            counting = true;
        }
        else if (counting && NBin[i] === "0") {
            tmp++;
        }
        else{
            if (tmp > answer){
                answer = tmp;
            }
            tmp = 0;
        }
    }
    return answer;
}
