//syntax for callbacks
//this function uses another function
//to transform an array
const map=function(array,transform){
  const copy=[];
  for(const element of array){
    copy.push(transform(element));
  }
  return copy;
};

//This function can be used as the transform
const square=function(x){
  return x**2;
};
const numbers=[1,2,3,4,5];
//doing the transformation
console.log(map(numbers,square));
console.log(numbers);
