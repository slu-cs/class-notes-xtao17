//Create an array of objects representing the courses you are taking this semester.
//Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
//Iterate through this array to find the largest course number in your schedule.
const course=[{subject:'cs',number:332},{subject:'cs',number:4006},{subject:'env',number:110}];
let l=0;
for(const c of course){
  if(c.number>l){
    l=c.number
  }
}
console.log(l);







const courses=[{subject:'CS',number:364},{subject:'CS',number:332}, {subject:'CS',number:1111},
{subject:'ENV',number:110}];
let n=0;
for(let i=0;i<courses.length;i++){
  if(courses[i].number>n){
    n=courses[i].number;
  }
};
console.log(n);

// Define a constructor function for Book objects. Each book should have a title and an array of authors.
//Define a shared method for books that lets you check
//whether a given author was one of the authors in this book.
const Book=function(title,author){
  this.title=title;
  this.author=author;
};

Book.prototype.checkbook=function(name){
  for(const author1 of this.author){
    if(author1===name){
      return true;
    }
  }
  return false;
};
const abook=new Book("a",["Xin","Tao"]);
console.log (abook.checkbook("Xin"));
console.log(abook.checkbook("TTT"));

//Define a function that works like the range function in Python.
//For example, range(5) returns [0,1,2,3,4] and range(3,8) returns [3,4,5,6,7].

const range=function(a,b){
  let lowb=0;
  let highb=0
  if(a===undefined&&b===undefined){
    lowb=0;
    highb=0;
  }
  else if(a===undefined){
    lowb=0;
    highb=b;
  }
  else{
    lowb=a;
    highb=b;
  }
  const lon=[];
  for(let i=lowb;i<highb;i++){
    lon.push(i);
  }
  console.log(lon);
}
range(0);
range(1,5);
range();
