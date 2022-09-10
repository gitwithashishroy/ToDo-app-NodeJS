//  step 6.1. create a controller for home and export to routes 
 module.exports.home = function(req , res){
   //  return res.end('<h1>Express is up for Todo ! </h1>');

   // step 7 . function to render view ejs file . 
   return res.render('home' , {
      title : "home"
   }) ; 
 }

 module.exports.user = function(req, res){

   return res.end('<h1> Welcome to user profile </h1>');
  // return res.render('user_profile', {
  //       title : "user" 
  //  }) ; 
 }

//  general function
// module.exports.actionName = function(req ,res) ; 

