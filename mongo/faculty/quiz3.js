
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
console.log(odds);
const filter=function(array,transform){
  const copy=[];
  for(const element of array){
    if(transform(element)==true){
      copy.push(element)
    }
  }
  return copy;
}

const newf = filter(numbers, x => x%2 > 0);
console.log(newf);


//JavaScript arrays have a sort ``method that works like this:
// const numbers = [4, 2, 5, 1, 3];
// numbers.sort((a,b) => a - b);
//Try it out, and read about how it works. Then rewrite the arrow function to reverse sort the array instead.

const numbersaa = [4, 2, 5, 1, 3];
console.log(numbersaa.sort((a,b)=> a-b));
console.log(numbersaa.sort((a,b) => b - a));







// Suppose q1 and q2 are Mongoose queries.
// You want to run q1 and print the result,
// and afterwards run q2 and print the result.

// How can we do this without promises?
