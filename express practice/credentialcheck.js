var express=require("express");
var app=express();
var path = require('path');
app.use(express.json());
app.use((err, req, res, next) => {
    console.error(err); // Log the error for debugging purposes
  
    const statusCode = err.statusCode || 500;
    const errorMessage = err.message || 'Internal Server Error';
  
    res.status(statusCode).json({ error: errorMessage });
  });
app.set("view engine","ejs");
app.set('views', path.join(__dirname, 'frontend'));
app.use(express.static(path.join(__dirname,"public1")))
app.get("/login",function(req,res){
    res.render("credential_check");
});
app.post("/cc",function(req,res){
    if (req.body.username==="vidya vikas" && res.body.password==="Vikas@21"){
        res.send("correct")
    }else{
        res.send("wrong")
    }
});
app.listen(3000);