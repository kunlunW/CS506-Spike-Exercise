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


app.get("/login", (req, res) => {
    var username = req.query.name;
    var password = req.query.password;
	
	//check if username and password exist in database
	//send True or "yes" or something if it exists
	//send False or "no" if is not in database
	connection.connect();
    query_p2 = "('"+username+"', '"+password+"',NULL, NULL)";
    connection.query("SELECT * FROM users WHERE username='"+username+"' AND password='"+password+"'",
      function (err, rows, fields) {
         if (err){ throw err}
         else {console.log("success."); console.log(rows);}
      })
    connection.end();
	res.send("login: username is " + username + " password is " + password);   
});

app.get("/signup", (req, res) => {
    var username = req.query.name;
    var password = req.query.password;
    
	//intert new user into database
    //send True or "yes" or something if successful
	//send False or "no or something if not successful
	 connection.connect();
     query_p2 = "("+username+", "+password+",NULL, NULL)";
     connection.query("INSERT INTO users (username, password, phonenumber, address, type) VALUES " + query_p2,
      function (err, rows, fields) {
         if (err) throw err
             console.log("success.")
         })
    connection.end();

    res.send("register: username is " + username + " password is " + password);
});

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
})
