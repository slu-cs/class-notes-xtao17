//Syntax for console and file input

//synchronous calls:wait for a result(stuck until it arrives)
//asynchronous calls:do not wait for the result, handle the result when it arrives
//web involves lots of asynchronous because of many users so should not stuck
const realine=require('readline');
//Console configuration
const user=readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


//console input
user.question('Filename:',function(filename){
  console.log(filename);
})
