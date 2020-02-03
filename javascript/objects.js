//Object and array syntax
//Oject literal
const point={x:1,y:2};
console.log(point);
//Accessing properties
console.log(point.x);
//Changing properties
point.x=3;
//Nested object literal
cost circle={
  center: point,
  result:4
};
//Accessing subproperties
console.log(circle.center.x);
//indefined subproperties
console.log(circle.color);
circle.color='blue';
console.log(circle);
