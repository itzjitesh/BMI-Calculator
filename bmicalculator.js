const express = require("express");
const bodyParser = require("body-parser");

const app = express();
app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
  res.sendFile(__dirname + "/bmi.html");
});

app.post("/", function(req, res){
  var name = req.body.name;
  var height = Number(req.body.height);
  var weight = Number(req.body.weight);
  var result = weight/(Math.pow(height,2));
  res.send(`The BMI of ${name} is ` + result);
});

app.listen(3000, function(){
  console.log("Port is listening at 3000.");
});


