var express = require('express');
var router = express.Router();
var jwt    = require('jsonwebtoken');


/* GET home page. */
router.get('/', function (req, res, next) {
    res.render('index', {title: 'Helloo World'});
});


router.post('/adduser', function (req, res) {

    // Set our internal DB variable
    var db = req.db;

    var userName = req.body.username;
    var userPassword = req.body.password;
    var userEmail = req.body.email;

    // Set our collection
    var collection = db.get('usercollection1');

    collection.find({
        "username": userName
    }, function(err, user) {

        if (err) throw err;

        if (user[0]) {
            res.send({result: "failed", message: 'Username already taken, please try again.'});
        }else {
            // Submit to the DB
            collection.insert({
                "username": userName,
                "password": userPassword,
                "email": userEmail,
                "following":[]
            }, function (err, doc) {
                if (err) {
                    // If it failed, return error
                    res.send({result:"failed",message:"There was a problem adding the information to the database."});
                }
                else {
                    res.send({result: "success"});
                }
            });
        }
    });

});

// route to authenticate a user
router.post('/authenticate', function(req, res) {
    var app = req.app;
    var db = req.db;

    var collection = db.get('usercollection1');
    // Submit to the DB
    collection.find({
        "username": req.body.username
    }, function(err, user) {

        if (err) throw err;

        if (!user[0]) {
            res.json({ result: "failed", message: 'Authentication failed. User not found.' });
        } else if (user[0]) {
            // check if password matches
            if (user[0].password != req.body.password) {
                res.json({ result: "failed", message: 'Authentication failed. Wrong password.' });
            } else {

                // if user is found and password is right
                // create a token
                var token = jwt.sign(user[0], app.get('superSecret'), {
                    expiresIn: 1440 // expires in 24 hours
                });
                var decoded = jwt.verify(token, app.get('superSecret'));
                // return the information including token as JSON
                res.json({
                    success: true,
                    message: 'Enjoy your token!',
                    token: token,
                    user:user[0]
                });
            }

        }
    });
});


router.post('/getarticlecomments', function (req, res) {
    var db = req.db;
    var articleId = req.body.articleid;
    var collection = db.get('commentcollection1');

    collection.find({articleid: articleId}, {limit:5, sort:{time:-1}}, function (err, docs) {

        if (err) {
            // If it failed, return error
            res.send({result: "failed", message: "There was a problem adding the information to the database."});
        }
        else {
            res.send({result: "success", comments: docs});
        }
    });
});


router.post('/getarticlebyid', function (req, res) {
    var db = req.db;
    var articleId = req.body.articleid;
    var collection = db.get('articlecollection1');

    collection.find({_id: articleId}, {limit:5, sort:{time:-1}}, function (err, docs) {

        if (err) {
            // If it failed, return error
            res.send({result: "failed", message: "There was a problem adding the information to the database."});
        }
        else {
            res.send({result: "success", article: docs[0]});
        }
    });
});


router.post('/getuserbyid', function (req, res) {
    var db = req.db;
    var userId = req.body.userid;
    var collection = db.get('usercollection1');

    collection.find({_id:userId}, {limit:5, sort:{time:-1}}, function (err, docs) {

        if (err) {
            // If it failed, return error
            res.send({result: "failed", message: "There was a problem adding the information to the database."});
        }
        else {
            res.send({result: "success", user: docs[0]});
        }
    });
});


router.post('/getarticlelikecount', function (req, res) {
    var db = req.db;
    var articleId = req.body.articleid;
    var collection = db.get('likecollection1');

    // Submit to the DB
    collection.count({articleid: articleId}, function (err, count) {

        if (err) {
            // If it failed, return error
            res.send({result: "failed", message: "There was a problem adding the information to the database."});
        }
        else {
            res.send({result: "success", data:{"articleid":articleId,"count": count}});
        }
    });
});


router.get('/getglobalfeed', function (req, res) {
    var db = req.db;
    // Set our collection
    var collection = db.get('articlecollection1');

    // Submit to the DB
    collection.find({},{limit:5, sort:{time:-1}}, function (err, docs) {

        if (err) {
            // If it failed, return error
            res.send({result:"failed",message:"There was a problem adding the information to the database."});
        }
        else {
            //And return  success result
            res.json({result: "success", article : docs})
        }
    });
});


router.post('/getuserarticles', function (req, res) {

    // Set our internal DB variable
    var db = req.db;
    // Set our collection
    var collection = db.get('articlecollection1');

    // Submit to the DB
    collection.find({authorId :req.body.userid},{limit:5, sort:{time:-1}}, function (err, docs) {

        if (err) {
            // If it failed, return error
            res.send({result:"failed",message:"There was a problem adding the information to the database."});
        }
        else {
            // And return  success result
            res.json({result: "success", article : docs})
        }
    });
});


router.get('/userlist', function (req, res) {
    var db = req.db;
    var collection = db.get('usercollection1');
    collection.find({}, {}, function (e, docs) {
         res.render('userlist', {
         "userlist" : docs
         });
    });
});

module.exports = router;
