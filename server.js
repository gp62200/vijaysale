var express=require('express');
var app=express();

app.get("/",(req,res)=>{
    res.send(
        "<h1>Vijay sale</h1> "
        +"</h1>"
        +"<h3>smart devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>laptop</li>"
        +"<li>laptop</li>"
        +"<li>laptop</li>"
        +"<li>mobile</li>"
        +"<li>watch</li>"
        +"</ol>"
    );
});

app.get("/aboutus",(req,res)=>{
    res.send(
        "<h1>Vijay sales</h1> "
        +"</h1>"
        +"<h3>smart devices for sale</h3>"
        +"<br/>"
        +"<ol>"
        +"<li>laptop</li>"
        +"<li>laptop</li>"
        +"<li>laptop</li>"
        +"<li>mobile</li>"
        +"<li>watch</li>"
        +"</ol>"
    );
});

var server=app.listen(9000);
console.log("vijay sales at 90000");