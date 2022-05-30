//importing the Dataset
const moviesData=require("../api/data/movies.json");

/*

let gamesGetAll = function (req, res) {
    console.log("JSON GET RECIEVED");
    res.status(200).json(gamesData);
};
*/
//functions
let getAllMovies=function (req,res){
   console.log("Getting all the movies");
   res.status(200).json(moviesData);
};

//exporting the module

module.exports={
    getAllMovies,
}