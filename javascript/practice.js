const k=function(a,b){

  return a ** b;
}
console.log(k(3,2));

//Create an array of objects representing the courses you are taking this semester.
//Each course should have a subject (e.g. 'CS') and a number (e.g. 332).
//Iterate through this array to find the largest course number in your schedule.
const ao={
  name:"Xin",
  anumber:1,
  afunction:function(a,b){
    return a+b;
  }
}
console.log(ao.name);
console.log(ao.afunction(3,4));
const courses=[{class:'cs',number:332},{class:'cs',number:400}]
let max=0;
for(const n_class of courses){
  if(n_class.number>max){
    max=n_class.number;
  }
}
console.log(max)
// Define a constructor function for Book objects. Each book should have a title and an array of authors.
//Define a shared method for books that lets you check
//whether a given author was one of the authors in this book.
const Book=function(book,authors){
  this.book=book;
  this.authors=authors;
}
Book.prototype.check=function(author){
  for(let i=0;i<this.authors.length;i++){
    if(authors[i]==author){
      return true;
    }
  }
  return false;
}
const abook=new Book("abook",["Xin","Tao"]);
console.log(abook.check("Xin"))
