// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');
//ME 100%

function solution(A, B) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = A.length;
    let stack = [];
    let counter = 0;
    for(let i = 0; i < N; i++){
        if(B[i] === 0){
            if(stack.length === 0){
                //fish saved, will not encounter any other fish
                counter++;
            }
            else{
                while(A[i] > A[stack[stack.length - 1]] && stack.length > 0){
                    //fish eats fish going downstream
                    stack.pop();
                }
                if(stack.length === 0){
                    //fish going upstream ate all the fish in the stack
                    counter++;
                }
            }
        }
        else{//B[i] === 1
            //fish going downstream
            stack.push(i);
        }
    }
    return counter + stack.length;
}