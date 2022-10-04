// step 1 . entry point to the server (index.js)  and npm init  it will create package.json

// step 2 . mkdir routes controllers views models config
//          creating folder for different step

//  step3 : fire up our express server -  $ npm install epress

//  step 4.a : set up our server
const express = require("express");
const app = express();
const port = 8000;

// step 8 . express layouts
const expressLayouts = require('express-ejs-layouts') ; 

const db = require('./config/mongoose') ; 


// extract style and script from subpages into layouts
app.set('layout extractStyles' , true ) ; 
app.set('layout extractScripts' , true ) ; 



// step 9 . use of static file
app.use(express.static('./assets')) ; 


//step 8 . use layouts and footer and header 
app.use(expressLayouts) ; 


// step5.2 go to routes folder make a index.js file for all the routes and use it in entry js 
// use of router express
app.use('/' , require('./routes')) ; 



//step 7 . set up our view engine 
app.set('view engine' , 'ejs') ; 
app.set('views' , './views') ; 



//  step 4.b server listen part
app.listen(port, function (err) {
  if (err) {
    // interpolation using backtick 
    console.log(`Error in running the server : ${err}`);
  }
  console.log(`Server is running on port : ${port}`);
});

// change package json : nodemon index.js => npm start

