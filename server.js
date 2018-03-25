const express = require('express');
const app = express();
var sql = require('mssql');
var myParser = require("body-parser");



// käyttäjätiedot SQL tietokantaan
var config = {
 user: 'sa',
 password: 'admin',
 server: 'localhost', 
 database: 'IotJukka' 
 };
 
app.get('/api/sqldata', function (req, res) { 
 
 // Yhteys tietokantaan
 sql.connect(config, function (err) {
 
 if (err) console.log(err);

  
  var request = new sql.Request();
 
  // kysely tietokantaan
  request.query('select top 1 * from Measurements order by id desc', function (err, recordset) {
  
  if (err) console.log(err)
  
  // vastaus JSON muodossa
  res.json(recordset);

  sql.close();
  
  });
  });
 });

app.use(myParser.json({extended : true}));

  // Python scriptistä JSON muotoisen tiedon hakeminen

   app.post("/api/rpdata", function(request, response) {
     var payload = request.body;
      console.log(payload);
      var temperature = request.body.temperature;
      var humidity = request.body.humidity;
      var pressure = request.body.pressure;
      
      console.log(temperature,humidity, pressure );

      //Yhteys tietokantaan 

      sql.connect(config, function (err) {
 
        if (err) console.log(err);
       
        
         var request = new sql.Request();
        
         // JSON tietojen tallennus tietokannassa löytyvaan tauluuun
         
         request.query('INSERT INTO Measurements (Temperature, Humidity, Pressure) VALUES ('+temperature.toFixed(1)+','+humidity.toFixed(1)+','+pressure.toFixed()+')', function (err, recordset) {
         
         if (err) console.log(err)
         
         sql.close();
         
         });
         });
     

        
    
   }); 
const port = 5000;

app.listen(port, () => console.log(`Server started on port ${port}`));