//Object and array syntax
//Oject literal
const point={x:1,y:2};
console.log(point);
//Accessing properties
console.log(point.x);
//Changing properties
point.x=3;
//Nested object literal
const circle={
  center: point,
  result:4
};
//Accessing subproperties
console.log(circle.center.x);
//indefined subproperties
console.log(circle.color);
circle.color='blue';
console.log(circle);
//array
const languages=['HTML','CSS','JS'];
console.log(languages);
for(let i=0;i<language.length;i++){
  console.log(languages[i]);
}
//Changing elements
languages[2]='JavaScript';
//Adding elements
languages.push('MongoDB');

//Iterating over elements
for(const lang of languages){
  console.log(lang);
}
