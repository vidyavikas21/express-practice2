var express=require("express");
var app=express();
var path=require("path");
app.use(express.json());
app.set("view engine","ejs")
app.set("views",path.join(__dirname,'frontend'))

app.get("/register",function(req,res){
    res.render("register");
});
app.post("/sub",function(req,res){
    res.send(req.body.name)
});
app.listen(3000);