var express=require("express");
var cookieparser=require("cookie-parser");
var session=require("express-session");
var app=express();

//middle wares
app.use(express.urlencoded({extended:true}));
app.use(cookieparser());
app.use(session({
    secret: 'your-secret-key',
    resave: false,
    saveUninitialized: true
  }));

app.use("/",require("./routes"));
app.listen(3000);


