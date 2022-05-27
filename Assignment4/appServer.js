/*
1- Write a Node web application on port 4343 using http module to perform the following:

   a- serve the following files: index.html, page1.html, page2.html.
   b- if the user makes a GET request without stating a file serve index.html
   c- serve a JSON response if the request is a POST

2- Write an express server that listens to port 5353 that does the same requirements of point 1 above.
 Submit your code or a link to your personal GitHub where you have your code exists.
*/

const http=require('http');
const fs=require("fs");

const Page1=function(req,res){
    res.setHeader("Content-Type","text/html");
    res.writeHead(200);
    res.end("<html><body><h1>Page1</h1></body></html>");
};
const Page2=function(req,res){
    res.setHeader("Content-Type","application/json");
    res.writeHead(200);
    res.end(`{message:"Page2"}`);
}
const indexPage=function(req,res){
    res.writeHead(200);
    res.end("Hello World!");
};
let request="";

let serverRequest=function(req,res){
    switch (req.url) {
    case "/Page1": serverRequest=Page1();
        break;
    case "/Page2": serverRequest=Page2;
    break;
    case "/Index":  serverRequest=indexPage()
    default:
        break;
};
}
const server = http.createServer(serverRequest);

server.listen(4343,"localhost",function(){console.log("listening to port 4343")});

