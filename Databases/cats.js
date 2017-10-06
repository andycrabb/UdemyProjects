var mongoose = require("mongoose");

mongoose.connect("mongodb://localhost/cat_app", {useMongoClient: true});

var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
});

var Cat = mongoose.model("Cat", catSchema);

// var george = new Cat({
//     name: "Mrs Norris",
//     age: 7,
//     temperament: "Evil"
    
// });



// george.save(function(err, cat){
//     if(err) {
//         console.log("Something Went Wrong");
//     } else {
//         console.log("We saved the Cat");
//         console.log(cat);
//     }
// });


//add a cat to the database

Cat.find({}, function(err, cats) {
    if(err) {
    console.log("oh no!");
    } else {
        console.log(cats);
    }
});

Cat.create({
    name: "Jon Snow",
    age: 15,
    temperament: "You know nothing!"
}, function(err, cats) {
    if(err) {
    console.log("oh no!");
    } else {
        console.log(cats);
    }
    
});


//retrive all cats from the db and console.log

