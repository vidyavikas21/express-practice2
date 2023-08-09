var express=require("express");
var app=express();
const middlewarefun=function(req,res,next){
    const ts=new Date().toISOString();
    console.log("timestamp is %s and method used is %s and url is %s",ts,req.method,req.url);
    next();
}
app.use(middlewarefun);
app.get("/middleware",function(req,res){
    res.send("done")
});
app.listen(3000);