var express=require("express");
var app=express();
const result={
    firsr_name:"vidya",
    second_name:"vikas"
}
app.get("/bringjson",function(req,res){
    res.json(result)
    console.log("returned json")
});app.listen(3000)