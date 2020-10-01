// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let M = P.length;
    let N = S.length;
    let PrefixSum = [];
    
    let State = { 
        A : 0,
        C : 0,
        G : 0,
        T : 0
    };
    //We fill the first element with a zero initialized object (hence the Q[i] + 1 after)
    for(let i = 0; i < N + 1; i++){
        //careful: copy by value!
        //PrefixSum.push({ A : State.A, C : State.C, G : State.G, T : State.T});
        let StateValue = Object.assign({}, State);
        PrefixSum.push(StateValue);
        State[S[i]]++;
    }
    let result = [];
    for(let i = 0; i < M; i++){
        if(PrefixSum[P[i]].A < PrefixSum[Q[i] + 1].A){
            result.push(1);
        }else if(PrefixSum[P[i]].C < PrefixSum[Q[i] + 1].C){
            result.push(2);
        }else if(PrefixSum[P[i]].G < PrefixSum[Q[i] + 1].G){
            result.push(3);
        }else if(PrefixSum[P[i]].T < PrefixSum[Q[i] + 1].T){
            result.push(4);
        }
    }
    return result;
}

/* 
// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(S, P, Q) {
    // write your code in JavaScript (Node.js 8.9.4)
    let M = P.length;
    let N = S.length;
    let PrefixSum = [];
    
    let State = { 
        A : 0,
        C : 0,
        G : 0,
        T : 0
    };
    
    //We fill the first element with a zero initialized object (hence the Q[i] + 1 after)
    PrefixSum.push(Object.assign({}, State));
    for(let i = 0; i < N; i++){
        switch(S[i]){
            case 'A' : 
                State.A++;
                break;
            case 'C' : 
                State.C++;
                break;
            case 'G' : 
                State.G++;
                break;
            case 'T' : 
                State.T++;
                break;
        }
        //careful: copy by value!
        //PrefixSum.push({ A : State.A, C : State.C, G : State.G, T : State.T});
        let StateValue = Object.assign({}, State);
        PrefixSum.push(StateValue);
    }
    let result = [];
    for(let i = 0; i < M; i++){
        if(PrefixSum[P[i]].A < PrefixSum[Q[i] + 1].A){
            result.push(1);
        }else if(PrefixSum[P[i]].C < PrefixSum[Q[i] + 1].C){
            result.push(2);
        }else if(PrefixSum[P[i]].G < PrefixSum[Q[i] + 1].G){
            result.push(3);
        }else if(PrefixSum[P[i]].T < PrefixSum[Q[i] + 1].T){
            result.push(4);
        }
    }
    return result;
} */