var express = require('express');
var router = express.Router();
var app = express();

const connection = require('../../helpers/db');
const bodyParser = require('body-parser');
// Support JSON-encoded bodies
router.use(bodyParser.json());
// Support URL-encoded bodies
router.use(bodyParser.urlencoded({
  extended: true
}));






// middleware that is specific to this router
router.use(function timeLog(req, res, next) {
  console.log('Time: ', Date.now());
  next();
});







// define the home page route
router.post('/signup', function (req, res, next) {

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
    if (err)
      res.status(500).json({ flash: err.message });
    else
      res.status(200).json({ flash: "User has been signed up !" });

  })
});






// define the about route
router.get('/about', function (req, res) {
  res.send('About birds');
});

module.exports = router;



// const express = require('express')
// const app = express()
// const port = 3000
// const connection = require('./config');
// const bodyParser = require('body-parser');
// // Support JSON-encoded bodies
// app.use(bodyParser.json());
// // Support URL-encoded bodies
// app.use(bodyParser.urlencoded({
//   extended: true
// }));





// app.put('/api/employees/:id', (req, res) => {

//   // récupération des données envoyées
//   const idEmployee = req.params.id;
//   const formData = req.body;

//   // connection à la base de données, et insertion de l'employé
//   connection.query('UPDATE employee SET ? WHERE id = ?', [formData, idEmployee], err => {

//     if (err) {
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       console.log(err);
//       res.status(500).send("Erreur lors de la modification d'un employé");
//     } else {

//       // Si tout s'est bien passé, on envoie un statut "ok".
//       res.sendStatus(200);
//     }
//   });
// });


// app.put('/api/employees/', (req, res) => {

//   // récupération des données envoyées

//   const formData = req.body;

//   // connection à la base de données, et insertion de l'employé
//   connection.query('UPDATE employee SET ? WHERE id = ?', [formData, idEmployee], err => {

//     if (err) {
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       console.log(err);
//       res.status(500).send("Erreur lors de la modification d'un employé");
//     } else {

//       // Si tout s'est bien passé, on envoie un statut "ok".
//       res.sendStatus(200);
//     }
//   });
// });









// app.post('/api/movie', (req, res) => {
//   // TODO récupérer les données (étape 2)
//   const formulaireData = req.body;
//   console.log(formulaireData)
//   // format du formulaireData
//   // {
//   //   firstname: '',
//   //   lastname: '', 
//   //   email: '',
//   // }
//   connection.query('INSERT INTO movie SET ?', formulaireData, (err, results) => {
//     if (err) {
//       console.log(err);
//       res.status(500).send("Erreur lors de la sauvegarde d'un movie");
//     } else {
//       res.sendStatus(200);
//     }

//   })
//   // TODO enregistrer les données (étape 3)

// });



// app.get('/api/movies', (req, res) => {

//   // connection à la base de données, et sélection des employés
//   connection.query('SELECT * from movie', (err, results) => {

//     if (err) {
//       console.log(err.sqlMessage)
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       res.status(500).send('Erreur lors de la récupération des films');
//     } else {

//       // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//       res.json(results);
//     }
//   });
// });

// app.get('/api/movies/name', (req, res) => {

//   // connection à la base de données, et sélection des employés
//   connection.query('SELECT name from movie', (err, results) => {

//     if (err) {
//       console.log(err.sqlMessage)
//       // Si une erreur est survenue, alors on informe l'utilisateur de l'erreur
//       res.status(500).send('Erreur lors de la récupération des names');
//     } else {

//       // Si tout s'est bien passé, on envoie le résultat de la requête SQL en tant que JSON.
//       res.json(results);
//     }
//   });
// });








// app.get(`/api/movies/:name`, function (req, res) {
//   const name = req.params.name
//   res.json({ result: `${name}` })



// })

// app.get('/api/employee', function (req, res) {
//   const titi = req.query.name
//   console.log()
//   if (titi) {
//     res.status(404).send(`impossible de récupérer l'employée  ${titi}`);
//   } else {
//     res.status(304)
//   }
// })


// app.get('/', function (req, res) {
//   res.send('Bienvenue en enfer')
// })




// app.listen(port, () =>
//   console.log(`Example app listening on port ${port}!`


//   ))
