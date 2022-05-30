//importing packages
const express=require("express");
const path=require("path");
const app=express();
const router=express.Router();
const gameController=require("../../Controller/controller.movies");

//creating the route
router.route("/movies")
.get(gameController.getAllMovies);

module.exports=router;