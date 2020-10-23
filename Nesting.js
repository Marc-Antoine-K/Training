// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S) {
    // write your code in JavaScript (Node.js 8.9.4)
    let counter = 0;
    for(let i = 0; i < S.length; i++){
        if (S[i] === "("){
            counter++;
        }
        else{
            counter--;
        }
        if(counter < 0){
            return 0;
        }
    }
    if(counter !== 0){
        return 0;
    }
    return 1;
}

//TEST
function solution(S) {
    let counter = 0;
    
    for (var i = 0; i < S.length; i++) {
        switch(S[i]) {
            case "(":
                counter++;
                break;
                
            case ")":
                counter--;
                break;
        }
        
        if (counter < 0) return 0
    }
    
    return counter === 0 ? 1 : 0 
}