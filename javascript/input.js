//Syntax for console and file input

//synchronous calls:wait for a result(stuck until it arrives)
//asynchronous calls:do not wait for the result, handle the result when it arrives
//web involves lots of asynchronous because of many users so should not stuck
const readline=require('readline');
//Console configuration
//short for filesystem
const fs=require('fs');
const user= readline.createInterface({
  input: process.stdin,
  output: process.stdout
});



//console input
user.question('Filename:',function(filename){
  //file configuration
  const file=readline.createInterface({
    input:fs.createReadStream(filename);
  })
})

//asynchronous line-by-line input
file.on('line',function(line){
  console.log(line);
});
//End the program when the file closes
file.on('close',function(){
  process.exit(0);
});
//This part will not happen
console.log('here');
