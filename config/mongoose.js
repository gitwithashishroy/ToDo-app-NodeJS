// step 10 : connected to mongoose data base

// const mongoose = require('mongoose') ; 

// mongoose.connect('mongodb://localhost/todo_development');  

// const db = mongoose.connection ; 

// db.on('error' , console.error.bind(console , "Error in connecting database")) ; 

// db.once('open' , function(){
//     console.log('connected to Database :: mongodb ');
// }) ; 

// module.exports = db ; 



// mongodb cluster

const mongoose = require('mongoose') ; 
const uri = "mongodb+srv://ashish:aroy1997@cluster0.tf7fqa3.mongodb.net/?retryWrites=true&w=majority"; 

try {
  // Connect to the MongoDB cluster
  mongoose.connect(
    uri,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => console.log(" Mongoose is connected"),
  );
} catch (e) {
  console.log("could not connect");
}

const dbConnection = mongoose.connection;
dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
dbConnection.once("open", () => console.log("Connected to DB!"));

module.exports = dbConnection ; 
