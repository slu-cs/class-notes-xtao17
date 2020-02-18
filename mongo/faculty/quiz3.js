
//JavaScript arrays have a filter method that works like this:
//const numbers = [1, 2, 3, 4, 5];
//const odds = numbers.filter(x => x%2 > 0);
//Try it out, and then write your own filter function, which would be called like this instead:
//const numbers = [1, 2, 3, 4, 5];
//const odds = filter(numbers, x => x%2 > 0);
const map = function(array, transform) {
  const copy = [];
  for (const element of array) {
    copy.push(transform(element));
  }
  return copy;
};

const numbers = [1, 2, 3, 4, 5];
const odds = numbers.filter(x => x%2 > 0);
const filter=function(array,transform){
  const copy=[];
  for(const element of array){
    if(transform(element)==true){
      copy.push(element)
    }
  }
  return copy;
}

const odds = filter(numbers, x => x%2 > 0);
