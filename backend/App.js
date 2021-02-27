const express = require('express');
var request = require("request");
const app = express();
const port = 3001;
var mysql = require('mysql')
var connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'spike exercise'
})

app.get('/loginYS', (req, res) => {
  var testValue = 200;
  res.send({ testValue });
})

app.get("/login", (req, res) => {
    var username = req.query.username;
    var password = req.query.password;

    //check if username and password exist in database
    //send True or "yes" or something if it exists
    //send False or "no" if is not in database
	var isCorrect = false;
	var sql = "SELECT * FROM users WHERE username='"+username+"' AND password='"+password+"';";
    connection.query(sql, function (error, results) {
      if (error) { isCorrect=false; }
      else {
        console.log("success.");
        console.log(results[0]);
        var isCorrect = false;
        if (results[0] == 1) {
          isCorrect = true;
        }
      }
    });
    res.send(isCorrect);
  });

app.get("/signup", (req, res) => {
    var username = req.query.username;
    var password = req.query.password;
    var phonenumber = req.query.phonenumber;
    var address = req.query.address;
    var type = req.query.type;
   	
	//intert new user into database
    //send True or "yes" or something if successful
	//send False or "no or something if not successful
	var query_p2 = "'"+username+"', '"+password+"', '"+phonenumber+"', '"+address+"', '"+ type+"'";
    var sql = "INSERT INTO users (username, password, phonenumber, address, type) VALUES(" +query_p2+");";
    connection.query(sql, function (error, results) {
         if (error) throw error
             console.log("success.")
   })
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
