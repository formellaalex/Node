var express = require('express');
var router = express.Router();
var temp = require('../public/javascripts/temp');
var city='gdansk';
var collection;
/* GET home page. */



router.get('/', function(req, res) {
  var db = req.db;  
  collection = db.get('gdansk');
  city = 'gdansk';
  collection.find({},{},function(e,tabela){
        res.render('index', {
            tabela: tabela, miasto: city
        });
    });
});



router.get('/:collection', function(req, res) {
    var db = req.db;
    var tabela = new Array();
    var miasto;
    collection = db.get(req.params.collection);
    city = req.params.collection;
    collection.find({},{},function(e,tabela){
        res.render('index', {
            tabela: tabela, miasto: city
        });
    });

});






router.post('/adduser', function(req, res) {

    // Set our internal DB variable
    var db = req.db;
 // Get our form values. These rely on the "name" attributes
    var cat = req.body.kategoria;
    var nam = req.body.nazwa;
    var x = req.body.xx;
    var y = req.body.yy;
    // Submit to the DB
    collection.insert({
        "x" : x,
        "y" : y,
        "nazwa" : nam,
        "kategoria" : cat
   /* // Get our form values. These rely on the "name" attributes
    var userName = req.body.category;
    var userEmail = req.body.nazwisko;

    // Submit to the DB
    collection.insert({
        "Imie" : userName,
        "nazwisko" : userEmail*/
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location('/' + city);
            // And forward to success page
            res.redirect('/' + city);

        }
    });
});




module.exports = router;