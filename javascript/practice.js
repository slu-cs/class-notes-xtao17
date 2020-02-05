const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(x => x%2 > 0);
console.log(odds)
const filter=function(numbers,f){
  const copy=[];
  for(const element of array){
    copy.push(f(element));
  }
  return copy;
}
const numbers = [1, 2, 3, 4, 5];
const odds1 = filter(numbers, x => x%2 > 0);
console.log(odds1)
