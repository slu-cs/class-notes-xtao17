// Syntax for console and file input

const readline = require('readline');
const fs = require('fs');

// Console configuration
const user = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Console input
user.question('Filename: ', function(filename) {

  // File configuration
  const file = readline.createInterface({
    input: fs.createReadStream(filename)
  });

  // Asynchronous line-by-line input
  file.on('line', function(line) {
    console.log(line);
  });

  // End the program when the file closes
  file.on('close', function() {
    process.exit(0);
  });
});

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
