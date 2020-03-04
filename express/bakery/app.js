// Hello world web server
const express = require('express');

// Create the server
const app = express();

//log requests to the console
app.use(function(request,response,next){
  console.log('-------------',new Date().toLocaleTimeString())
  console.log(request.method,request.url);
  console.log('Body= ',request.body);
  next();//keep handling this request
})
//Home page
app.get('/',function(request,response){
  response.send(`
    <h1>Bakery</h1>
    <ul>
      <li><a href="/cakes">Cakes</a></li>
      <li><a href="/pies">Pies</a></li>
    </ul>
  `);
})
//Handle undefined routes
app.use(function(request,response.next){
  console.log('Replied with 404');
  response.status(404).end();
})

//Handle another error
app.use(funciton(error,request,response ,next){
  console.error(error.stack);
})

// Start the server
app.listen(3000);
console.log('Server is ready.');
