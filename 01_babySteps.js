function sum(arr) {
  return arr.slice(2).reduce(function(a,b){ return Number(a)+Number(b); });
}
console.log(sum(process.argv));
