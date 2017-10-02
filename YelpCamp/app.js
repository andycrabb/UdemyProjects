var express = require("express");
var app = express();
var campgrounds = [
    {name:"Port Vincent", image:"http://haileyidaho.com/wp-content/uploads/2015/01/Stanley-lake-camping-Credit-Carol-Waller-2011.jpg"},
    {name:"Norlunga", image:"http://www.christiesbeachtouristpark.com.au/images/CBTP_aerial3.jpg"},
    {name:"Victor Harbour", image:"http://www.britz.com.au/travel-guide-australia/camping-australia/PublishingImages/Pages/default/Britz-camping-australia.jpg?RenditionID=31"},
    {name:"Largs Bay", image:"https://www.discoveryholidayparks.com.au/file/resize/c470x300~80/1839_adelaide_beachfront_park_caravan_site_1_hdr_lowquality.jpg"}
    ]

app.set("view engine", "ejs");

app.get("/", function(req, res) {
   res.render("landing");
});

app.get("/campgrounds", function(req, res) {
   res.render("campgrounds", {campgrounds: campgrounds});
});

app.post("/campgrounds", function(req, res){
    res.send("You are on the Post Page");
});


app.listen(process.env.PORT, process.env.IP, function(){
     console.log("Yelp Server is Running!");
});