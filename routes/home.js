var express = require('express')
var router = express.Router()


// middleware that is specific to this router
router.use(function timeLog (req, res, next) {
  console.log('Time: ', Date.now())
  next()
})



var request = require("request")

// const got = require('got');

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    }else{
        req.flash('error_msg', 'You are not logged in.');
        res.redirect('/users/login');
    }
}

/**
 | -----------------------------------------------------------------------------
 | define the home page route
 | -----------------------------------------------------------------------------
 */
router.get('/', ensureAuthenticated, function (req, res) {

    var p1 = new Promise(function(resolve, reject){

        var url = globalUrl + '/api/user/list';

        request(url, function (error, response, body) {
                if (error) reject(error);
                resolve(body);
        });

    });

    var p2 = ['shams', 'sadek'];

    var p3 = [
        { Name: 'Hello World', Age: '18' },
        { Age: 23,  Name: 'Habib' },
        { Age: 28, 'Position': 'Programmer' }
        ];

    Promise.all([p1, p2, p3]).then(function(values){

               res.render('home', { p1: values[0], p2: values[1] });

           });

})



module.exports = router
