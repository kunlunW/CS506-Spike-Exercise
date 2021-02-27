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

	var isCorrect = false;
	var sql = "SELECT * FROM users WHERE username='"+username+"' AND password='"+password+"';";
    connection.query(sql, function (error, results) {
      if (error) { throw error; }
      else {
        console.log("success.");
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

    //Check if someone has already registered the username
    var sql = "SELECT COUNT(*) AS num FROM users WHERE username='" + username + "';";
    connection.query(sql, function (error, results) {
        if (results[0].num !== 0) { 
            console.log("username already registered");
            res.send(false);
        } else {
			var query_p2 = "'"+username+"', '"+password+"', '"+phonenumber+"', '"+address+"', '"+ type+"'";
      		var sql = "INSERT INTO users (username, password, phonenumber, address, type) VALUES(" +query_p2+");";
          	connection.query(sql, function (error, results) {
              	if (error){ throw error }
              	console.log("success.")
				res.send(true);
          	});
     	}
	}); 
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
