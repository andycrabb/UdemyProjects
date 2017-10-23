var bodyParser = require("body-parser"),
    mongoose   = require("mongoose"),
    express    = require("express"),
    app        = express();

var blogSchema = new mongoose.Schema({
    title: String,
    image: String,
    body: String,
    created: {type: Date, default: Date.now}
});
var Blog = mongoose.model("Blog", blogSchema);

mongoose.connect("mongodb://localhost/restful_blog_app");
app.set("view engine", "ejs");
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended:true}));

// RESTFUL ROUTES
app.get("/",function(req, res){
    res.redirect("/blogs");
});

app.get("/blogs",function(req,res){
    Blog.find({}, function(err, blogs){
        if(err){
            console.log("error");
        } else {
            res.render("index", {blogs: blogs});
        }
    });
});

//NEW ROUTE
app.get("/blogs/new", function(req, res){
    res.render("new");
});

//CREATE ROUTE
app.post("/blogs", function(req, res){
    //create blog
    Blog.create(req.body.blog, function(err, newBlog){
        if(err){
            res.render("new");
        }else {
            //then redirect to the index
            res.redirect("/blogs");
        }
    });
});


app.listen(process.env.PORT || 8081, process.env.IP, function(){
    console.log("SERVER IS RUNNING!");
});
