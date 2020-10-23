// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(H) {
    // write your code in JavaScript (Node.js 8.9.4)
    let N = H.length;
    let stack = [H[0]];
    let blocks = 0;
    let top;
    let height;
    H.push(0);
    
    for(let i = 1; i < N + 1; i++){
        if(H[i] > H[i - 1]){
            stack.push(H[i] - H[i - 1]);
        }
        else if(H[i] < H[i-1]){
            height = H[i - 1];
            while(height > H[i]){
                top = stack.pop();
                height -= top;
                blocks++;
            }
            if(height < H[i]){
                stack.push(H[i] - height);
            }
        }
        //console.log(i, stack);
    }
    return blocks;
}