//Hello World web server

const express=require('express');

//crete the server
const app=express();

//Respond to a single request
app.get('/',function(request,response){
  response.send('Hello Xin');
})



//Start the server
//adress for the server
app.listen(3000);
console.log('Server is ready');
