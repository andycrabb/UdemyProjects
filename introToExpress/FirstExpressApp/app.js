var express = require("express");
var app = express();

app.get("/", function(req, res){
    res.send("Hi there!");
});

app.get("/bye", function(req, res){
    res.send("Goodbye!");
});

app.get("/dog", function(req, res){
    res.send("MEOW!");
});

app.get("/r/:subredditName", function(req, res){
    var subreddit = req.params.subredditName;
   res.send("WELCOME TO THE " + subreddit.toUpperCase() + " SUBREDDIT!"); 
});

// app.get("/subredditname", function(req, res){
//     var subreddit = req.params.subredditName;
//     res.send(`Welcome to the new ${subreddit.toUpperCase()} SUBBREDDIT`);
// });

app.get("*", function(req, res){
  res.send("YOU ARE A STAR!!!"); 
});

// Tell Express to listen for requests (start server)

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server has started!!!");
});
