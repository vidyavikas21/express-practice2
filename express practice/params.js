var express=require("express");
var app=express();
app.get("/dynamicurl/:name/:id",function(req,res){
    res.send("hello "+req.params.name+"("+req.params.id+")");
})
app.listen(3000)