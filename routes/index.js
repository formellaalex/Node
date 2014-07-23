var express = require('express');
var router = express.Router();
var chlebek = require('../routes/przyklady');
/* GET home page. */



router.get('/', function(req, res) {
    var db = req.db;
    var tab = new Array();

    var collection = db.get('userlist');

    collection.find({},{},function(e,tab){
        res.render('index', {
            tab: tab
        });
    });
});




router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;

    // Get our form values. These rely on the "name" attributes
    var userName = req.body.username;
    var userEmail = req.body.useremail;

    // Set our collection
    var collection = db.get('userlist');

    // Submit to the DB
    collection.insert({
        "imie" : userName,
        "nazwisko" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("/");
            // And forward to success page
            res.redirect("/");
        }
    });
});

module.exports = router;
