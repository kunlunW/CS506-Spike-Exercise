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

app.get("/addtomenu", (req, res) => {
  connection.connect();
    var name = req.query.name;
    var image = req.query.image;
    var price = req.query.price;
    var available = req.query.available;
    
    //check if username and password exist in database
    //send True or "yes" or something if it exists
    //send False or "no" if is not in database
    var sqlParams = "'"+name+"', '"+image+"', '"+price+"', '"+available+"'";
    var sql = "INSERT INTO menu (name, image, price, available) VALUES(" +sqlParams+");";
    connection.query(sql, function (error) {
      if (error) { console.log('[SELECT ERROR] - ',error.message);}
             console.log("success.")
         if (error.fatal) {
              console.trace('fatal error: ' + error.message);
         }
    });
    connection.end();
  });

  app.get("/addtoorder", (req, res) => {
    connection.connect();
      var id = req.query.id;
      var username = req.query.username;
      var menuname = req.query.menuname;
      var quantity = req.query.quantity;
      var cost = req.query.cost;
      var priority = req.query.priority;
      var complete = req.query.complete;
      var ordertime = req.query.ordertime;
      var pickuptime = req.query.pickuptime;
      var vehicledescription = req.query.vehicledescription;
      
      //check if username and password exist in database
      //send True or "yes" or something if it exists
      //send False or "no" if is not in database
      var sqlParams = "'"+id+"', '"+username+"', '"+menuname+"', '"+quantity+"', '"+cost+"', '"+priority+"', '"+complete+"', '"+ordertime+"', '"+pickuptime+"', '"+vehicledescription+"'";
      var sql = "INSERT INTO orders (id, username, menuname, quantity, priority, complete, ordertime, pickuptime, vehicledescription) VALUES(" +sqlParams+");";
      connection.query(sql, function (error) {
        if (error) { console.log('[SELECT ERROR] - ',error.message);}
               console.log("success.")
           if (error.fatal) {
                console.trace('fatal error: ' + error.message);
           }
      });
      connection.end();
    });

  app.get("/getpickuptime"), (req, res) => {
    connection.connect();
    var id = req.query.id;
    var time = "";
    var sql = "SELECT orders.pickuptime FROM orders WHERE id = '"+id+"'";
    connection.query(sql, function(error, results) {
      if (error) { console.log('[SELECT ERROR] - ',error.message);}
      else {
        console.log("success.");
        console.log("pickup time is " + results[0]);
        time = results[0];
      }
    });
    res.send(time);
    connection.end();
  }

  app.get("/getcardescription"), (req, res) => {
    connection.connect();
    var id = req.query.id;
    var carD = "";
    var sql = "SELECT orders.cardescription FROM orders WHERE id = '"+id+"'";
    connection.query(sql, function(error, results) {
      if (error) { console.log('[SELECT ERROR] - ',error.message);}
      else {
        console.log("success.");
        console.log("Car description is " + results[0]);
        carD = results[0];
      }
    });
    res.send(carD);
    connection.end();
  }

  app.get("/getreceipt"), (req, res) => {
    connection.connect();
    var username = req.query.username;
    var receipt = "";
    var sql = "SELECT orders.menuname FROM orders WHERE username = '"+username+"'";
    connection.query(sql, function(error, results) {
      if (error) { console.log('[SELECT ERROR] - ',error.message);}
      else {
        console.log("success.");
        console.log("Ordered items are " + results);
        receipt += results;
      }
    });

    var sql2 = "SELECT SUM(orders.cost) FROM orders WHERE username = '"+username+"'";
    connection.query(sql2, function(error, results) {
      if (error) { console.log('[SELECT ERROR] - ',error.message);}
      else {
        console.log("success.");
        console.log("Total cost is " + results);
        receipt += "\nTotal price is " + results;
      }
    });
    res.send(receipt);
    connection.end();
}

app.get("/updateMenuAvailable"), (req, res) => {
  connection.connect();
  var name = req.query.name;
  var avaliable = req.query.available;
  var isSuccess = false;

  sql = "UPDATE menu SET menu.avaiable = '" + avaliable + "' WHERE menu.name = '" + name + "'";
  connection.query(sql, function (error, results) {
    if (error) { console.log('[SELECT ERROR] - ',error.message);}
      else {
        console.log("success.");
        isSuccess = true;
      }
  });
  res.send(isSuccess);
  connection.end();
  isSuccess = false;
}

//Only mark a single dish with a unique id as complete
app.get("/updateOrderComplete"), (req, res) => {
  connection.connect();
  var id = req.query.id;
  var isSuccess = false;

  sql = "UPDATE menu SET orders.complete = 'yes' WHERE orders.id = '" + id + "'";
  connection.query(sql, function (error, results) {
    if (error) { console.log('[SELECT ERROR] - ',error.message);}
      else {
        console.log("success.");
        isSuccess = true;
      }
  });
  res.send(isSuccess);
  connection.end();
  isSuccess = false;
}

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
