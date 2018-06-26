const express = require("express");
const app = express();

app.get("/", function(req,res){
    res.send("home");
})

app.get("/contact", function(req, res){
    res.send("my num: +34 677 756 111")
})

app.get("/profile/:username", function(req, res){
    res.send(`hi ${req.params.username}`)
})

app.get("/profile/:username/achievements", function(req,res){
    res.send(`hi ${req.params.username} has no achievements`)
})

app.listen(3000);