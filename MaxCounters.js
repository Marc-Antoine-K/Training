// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(N, A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let M = A.length;
  let reset = -1;
  let counter = 0;
  const B = new Array(N).fill(0);

  for (let i = 0; i < M; i++) {
    if (A[i] === N + 1) {
      reset = counter;
    } else if (A[i] < N + 1) {
      if (B[A[i] - 1] < reset) {
        B[A[i] - 1] = reset;
        B[A[i] - 1]++;
      } else {
        B[A[i] - 1]++;
      }
      counter = counter < B[A[i] - 1] ? B[A[i] - 1] : counter;
    }
    //console.log(reset);
    //console.log(B);
  }
  for (let i = 0; i < N; i++) {
    if (B[i] < reset) {
      B[i] = reset;
    }
  }
  return B;
}
