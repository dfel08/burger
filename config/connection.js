var mysql = require("mysql");

var connection = mysql.createConnection({
    Host: "b4e9xxkxnpu2v96i.cbetxkdyhwsb.us-east-1.rds.amazonaws.com",	
    Username: "rb07d5zqrmi0ivlg",	
    Password: "g3k0qw2wvf8xo02i",
    Port: 3306,
    Database: "q6tykcl2ht3trqx8"	
});

//var connection = mysql.createConnection(process.env.JAWSDB_URL);

connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId)
});

module.exports = connection;