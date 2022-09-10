// step 5.1.a  express.Router
const express = require('express') ; 
const router = express.Router() ; 

//step 6.2.a = access home controller 
const homeController = require('../controllers/home_controller'); 



 console.log("router loaded");

//step 6.2.b get the home of homeController . 
router.get('/' , homeController.home) ; 
router.get('./users' , homeController.user) ; 


 
// step 5.1.b
// export router to use it in index.js entry point
module.exports = router ; 