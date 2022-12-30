//  step 6.1. create a controller for home and export to routes 
 const Tododb = require('../models/todo') ; 

module.exports.home = function(req , res){
  Tododb.find({}, function(err, task){
    if(err){
        console.log('Error in fetching tasks from db');
        return;
    }

    return res.render('home', {
        title: "Home",
        task: task
    });
})
}



// creating Tasks
module.exports.add = function(req, res){
  //  console.log("Creating Task");  
    Tododb.create({
        description: req.body.description,
        category: req.body.category,
        date: req.body.date
        }, function(err, newtask){
        if(err){console.log('error in creating task', err); return;}
        

        //console.log(newtask);
        return res.redirect('back');

    });
}




// deleting Tasks
module.exports.delete = function(req, res){
  // get the id from query
  var id = req.query;

  // checking the number of tasks selected to delete
  var count = Object.keys(id).length;
  for(let i=0; i < count ; i++){
      
      // finding and deleting tasks from the DB one by one using id
      Tododb.findByIdAndDelete(Object.keys(id)[i], function(err){
      if(err){
          console.log('error in deleting task');
          }
      })
  }
  return res.redirect('back'); 
}



//  general function
// module.exports.actionName = function(req ,res) ; 

