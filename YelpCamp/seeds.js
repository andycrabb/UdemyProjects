var mongoose = require("mongoose");
var Campground  = require("./models/campground.js");
var Comment  = require("./models/comment");

var data = [
    {
        name: "Dobbins Retreat",
        image: "https://www.virginexperiencedays.co.uk/content/img/product/large/three-night-glamping-break-23120453.jpg",
        description: "This is the spot where champions go!"
    },
    {
        name: "Sidewalkers Paradise",
        image: "https://unsplash.com/photos/tRGwX1HcTd4",
        description: "Rocky Hill near the lake of thrill"
    },
    {
        name: "The big iron knob",
        image: "https://unsplash.com/photos/K9olx8OF36A",
        description: "Rocky Hill near the lake of thrill"
    },
];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");
        data.forEach(function(seed){
        Campground.create(seed, function(err, campground) {
            if(err) {
                console.log(err);
            }
            else {
                console.log("added a campground");
                Comment.create(
                        {
                            text:"This place is great but it has no internet!",
                            author: "Homer"
                        }, function(err, comment){
                            if(err){
                                console.log(err);
                        } else {
                            campground.comments.push(comment);
                            campground.save();
                        }
                        });
            }
        });
        });
    });
}



module.exports = seedDB;
