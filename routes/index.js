var express = require('express');
var router = express.Router();


/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Express'});
});

router.get('/bazatest', function(req, res) {
    var db = req.db;
    var collection = db.get('userlist');
    collection.find({},{},function(e,docs){
        res.render('bazatest', {
            "bazatest" : docs
        });
    });
});
module.exports = router;
