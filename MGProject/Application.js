// requiring files here 
const express=require("express");
const path=require("path");
const router=require("./api/Route")
const app=express();
require("dotenv").config();


//using methods
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,"/api/Route")));
app.use("/api",router);

//setting the port
app.set("port",process.env.PORT)
const server=app.listen(process.env.PORT,function(){
    port=server.address().port;
    console.log(process.env.START_MESSAGE,port);
})

