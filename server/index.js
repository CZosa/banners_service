const express = require("express");
const bodyParser = require("body-parser");
const mysql = require("mysql");
const path = require("path");
const db = require("../database/index.js");

const connection = mysql.createConnection({
	host: "restaurants.cgnynmya1xwv.us-west-1.rds.amazonaws.com",
	user: "root",
	password: "lovelove",
	database: "restaurants" 
});

const app = express();

app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../client/dist")));

app.get("/restaurants/banners/:rest_id", (req, res) => {
	db.getOneRestaurant(req.params.rest_id, (error, results) => {
		if (error) {
			console.log(error)
			res.send(error);
		} else {
			res.writeHead(201, {"Content-Type": "application/json"});
			res.end(JSON.stringify(results));
		}
	});
});


let port = 3005;

app.listen(port, () => {
	console.log(`Listening on port ${port}`);
});