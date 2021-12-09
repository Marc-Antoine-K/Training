// you can write to stdout for debugging purposes, e.g.
// console.log('this is a debug message');

function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let map = A.reduce((map, el) => {
    map[el] = ++map[el] || 1;
    return map;
  }, {});
  let result = Object.keys(map).filter((el) => map[el] % 2 !== 0);
  return +result[0];
}

/* function solution(A) {
  let map = A.reduce((map, el) => {
    if (map[el] === undefined) {
      map[el] = 1;
    } else {
      map[el]++;
    }
    return map;
  }, {});

  function result(map) {
    for (properties in map) {
      if (map[properties] % 2 !== 0) {
        return parseInt(properties);
      }
    }
  }
  return result(map);
} */

/* function solution(A) {
  // write your code in JavaScript (Node.js 8.9.4)
  let l = A.length;
  let tab = A.sort();
  let result = 0;
  for(let i = 0; i < l; i++){
      result += (-1)**i * tab[i];
  }
  return result > 0 ? result : -result;
} */
