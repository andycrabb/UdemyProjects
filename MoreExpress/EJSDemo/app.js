var express = require("express");  //create a variable for express library to call;
var app = express();  // create variable to run express()


app.use(express.static("public"));  //tells express where to find the public folder.
app.set("view engine", "ejs");  // shortcut to stop using the ejs extenstion on files ("home.ejs")

app.get("/", function(req, res){  //standard request.
    res.render("home");
});

app.get("/iLoveCBS/:thing", function(req, res){ 
    var thing = req.params.thing; // crete a variable that can parse the req.params.****  
    res.render("cbs", {thingVar: thing}); //res.render("ejs file in views folder", and ejs file  variable <%= *** %>)  ***whatever!
});

app.get("/posts", function(req, res){
    var posts = [
        {title: "We'll Start With Post 1", author: "Peter"},
        {title: "This Is Post 2", author: "Paul"},
        {title: "Don't Forget Post 3", author: "Simon"}
        ];
        res.render("posts", {posts: posts});
        
});

app.listen(process.env.PORT, process.env.IP, function(){
    console.log("Server is Listening!!!");
});

