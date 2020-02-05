//Create an array of objects representing the courses you are taking this semester.
//Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
//Iterate through this array to find the largest course number in your schedule.
const course=[{subject:'cs',number:332},{subject:'cs',number:4006},{subject:'env',number:110}];
let l=0;
for(const c in course){
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
  for(let i=0;i<author.length;i++){
    if(author[i]===name){
      return True;
    }
  }
  return False;
};
const abook=new Book("a","Xin");
console.log (abook.checkbook("Xin"));
