var mongoose = require("mongoose");
var Campground  = require("./models/campground");
var Comment  = require("./models/comment");

var data = [
    {
        name: "Cloud's Rest",
        image: "https://farm4.staticflickr.com/3795/10131087094_c1c0a1c859.jpg",
        description: "bcum voluptates sapiente beatae asperiores. Animi placeat possimus consequuntur sapiente ipsum, eaque itaque voluptas. Earum cumque delectus cupiditate magnam quia. Totam porro doloribus distinctio eveniet sequi cumque a praesentium! blah blah blah"
    },
    {
        name: "Desert Mesa",
        image: "https://farm4.staticflickr.com/3859/15123592300_6eecab209b.jpg",
        description:"cum voluptates sapiente beatae asperiores. Animi placeat possimus consequuntur sapiente ipsum, eaque itaque voluptas. Earum cumque delectus cupiditate magnam quia. Totam porro doloribus distinctio eveniet sequi cumque a praesentium!"
    },
    {
        name: "Canyon Floor",
        image: "https://farm1.staticflickr.com/189/493046463_841a18169e.jpg",
        description: "bcum voluptates sapiente beatae asperiores. Animi placeat possimus consequuntur sapiente ipsum, eaque itaque voluptas. Earum cumque delectus cupiditate magnam quia. Totam porro doloribus distinctio eveniet sequi cumque a praesentium!lblah blah blah"
    }
];

function seedDB(){
    //remove all campgrounds
    Campground.remove({}, function(err){
        if(err){
            console.log(err);
        }
        console.log("removed campgrounds");

 //add a few campgounds
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
                            console.log("Created a new comment");
                            }
                        });
                }
            });
        });
    });
}



module.exports = seedDB;
