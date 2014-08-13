var express = require('express');
var router = express.Router();
var chlebek = require('../routes/przyklady');
var temp = require('../public/javascripts/temp');
var city;
/* GET home page. */



router.get('/', function(req, res) {
  res.render('cities', { title: 'PolandStartUpMapChoice' });
});



router.get('/index', function(req, res) {
  	var db = req.db;
    var tabela = new Array();
    var miasto = req.body.wpisz;
    var collection = db.get(miasto);
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
    var userName = req.body.category;
    var userEmail = req.body.nazwisko;

    // Set our collection
    var collection = db.get('gdansk');

    // Submit to the DB
    collection.insert({
        "Imie" : userName,
        "nazwisko" : userEmail
    }, function (err, doc) {
        if (err) {
            // If it failed, return error
            res.send("There was a problem adding the information to the database.");
        }
        else {
            // If it worked, set the header so the address bar doesn't still say /adduser
            res.location("/index");
            // And forward to success page
            res.redirect("/index");

        }
    });
});

// tutaj jest funkcja która wysyła formularz ze strony startowej do strony głównej, z napisem z klikniętego buttona
// wysyla tez dane z bazy danych
router.post('/index', function(req, res) {

	var miasto = req.body.wpisz;
	city = miasto;
 	var db = req.db;
    var tabela = new Array();

    var collection = db.get(miasto);
    collection.find({},{},function(e,tabela){
        res.render('index', {
            tabela: tabela, miasto: miasto
        });
    });


    
});

module.exports = router;
