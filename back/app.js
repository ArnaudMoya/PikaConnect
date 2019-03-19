const express = require('express');
const bodyParser = require('body-parser');
const morgan = require('morgan');
const app = express();
var authRouter = require('./Route/Auth/Auth.js')
var jwt = require('jsonwebtoken');  
var expressJwt = require('express-jwt'); 
// je configure l'application
app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.static(__dirname + '/public'));

// j'implémente la partie API






app.use('/auth', authRouter); //où authRouter est issu de l'importation

/// dans le cas d'une route non trouvée, je retourne le code 404 'Not Found'
app.use(function (req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// passport.use(new LocalStrategy(
//     {
//         usernameField: 'email',
//         passwordField: 'password',
//         session: false
//     },
//     function (email, password, cb) {
//         // si une erreur est obtenue
//         return cb(err)
//         // si les login/password ne sont pas bon
//         return cb(null, false, { message: 'Incorrect email ou password.' })
//         // si l'utilisateur est ok on retourne l'objet user
//         return cb(null, user)
//     }
// ));



//je lance le serveur node
let server = app.listen(process.env.PORT || 5000, function () {
    console.log('Listening on port ' + server.address().port);
});