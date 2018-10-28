function sum(a, b) {
  return a + b;
}

function make(...args) {
  const arr = [...args];
  return function closureFunction(...arg) {
    if (typeof arg[0] !== "function") {
      arr.push(...arg);
      return closureFunction;
    }
    console.log(arr.reduce(sum));
    return arr.reduce(sum);
  };
}
make(15)(34, 21, 666)(41)(sum);
