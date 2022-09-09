//  step 6.1. create a controller for home and export to routes 
 module.exports.home = function(req , res){
   //  return res.end('<h1>Express is up for Todo ! </h1>');

   // step 7 . function to render view ejs file . 
   return res.render('home' , {
      title : "home"
   }) ; 
 }

//  general function
// module.exports.actionName = function(req ,res) ; 

