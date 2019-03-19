var express = require('express');
var router = express.Router();
var app = express();
var MySql = require('mysql')
const bcrypt = require('bcrypt');
var jwt = require('jsonwebtoken');
var mySecret = 'blablabla';
var expressJwt = require('express-jwt');



// var passeport = require('passport');
const connection = require('../../helpers/db');
const bodyParser = require('body-parser');
// Support JSON-encoded bodies
router.use(bodyParser.json());
// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true
}));


router.post('/Profil', function (req, res) {
  console.log("/Profil",req.body)



})

router.post('/signin', function (req, res) {
  console.log(req.body)
  const dataForm = req.body
  const mail = req.body.mail
  const password = req.body.password



  console.log(dataForm)

  connection.query("SELECT * FROM users WHERE email=(" + MySql.escape(dataForm.mail) + ")", function (err, results) {
    console.log("Resultats Query",results)
    if (err) {
      res.send("Error")
    } else {
      if (results.length === 0) {
        return res.json({ message: "aucun resultats" })
      }
      if (bcrypt.compareSync(password, results[0].password)) {
        var token = jwt.sign(results[0].name, mySecret);//{expiresIn: 20}
        console.log("salut c'est oim", results, token)
        res.status(200).json({ results, token })

        // Passwords match
      } else {
        console.log("testr", results[0])
      }
    }
  });
});


// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});



// define the home page route
router.post('/signup', function (req, res) {
  console.log("tototiti", req.body)
  let hash = bcrypt.hashSync(req.body.password, 10);
  req.body.password = hash


  const formulaireData = req.body;
  console.log(formulaireData)
  // format du formulaireData
  // {
  //   email: '',
  //   password: '', 
  //   name:'',
  //   lastname:''

  // }
  connection.query('INSERT INTO users SET ?', formulaireData, (err, results) => {
    console.log(err)
    if (err)
      res.status(500).json({ flash: err.message });
    else
      res.status(200).json({ flash: "User has been signed up !" });

  })
});


// define the about route
app.get('/about', function (req, res) {
  res.json({
    text: "titi",
  })
});



router.get('/api/login', function (req, res) {
  res.json({
    text: "zizi"
  })
})





module.exports = router;


