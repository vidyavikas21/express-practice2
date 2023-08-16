//iam writing this in github editor to check commit in githubb
var express=require("express");
var app=express();
app.get("/hello",function(req,res){
    console.log("localhost/%s/%s",3000,"hello");
    res.send("hello vikas")
})
app.listen(3000)
