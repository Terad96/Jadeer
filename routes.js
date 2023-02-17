var express = require("express");
var router = express.Router();

router.get("/", function(req,res){

    
    res.render("pages/index");
});
router.get("/about", function(req,res){

    res.render("pages/about");
});
router.get("/Ar", function(req,res){

    res.render("pages/about");
});
router.get("/login", function(req,res){

    res.render("pages/about");
});

module.exports= router;