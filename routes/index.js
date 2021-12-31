var express = require("express");
var router = express.Router();
var axios = require("axios").default;
var app = express();

const rateLimit = require('express-rate-limit');
const fs = require("fs");
const path = require('path');

// let rawdata = fs.readFileSync(path.resolve(__dirname, '../data.json'));
var rawdata = fs.readFileSync(path.resolve(__dirname, '../write.json'));
var student = JSON.parse(rawdata);
console.log(student);

// fs.writeFileSync(path.resolve(__dirname, '../write.json'), JSON.stringify(student));
//console.log(object.forecast.forecastday[0].date);
router.get("/all/:country/:city/:date", function (req, res, next) {
  var country = req.params.country;
  var city = req.params.city;
  var date = req.params.date;
  if(rawdata.length != 0 && student.location.name == city  && student.forecast.forecastday[0].date == date){

    var forecast = student.forecast.forecastday;
      //console.log(forecast);
      // var sum1=0;
      // var sum2=0;
      // var sum3=0;
      // var sum4=0;
      // var sum1_f=0;
      // var sum2_f=0;
      // var sum3_f=0;
      // var sum4_f=0;
      var max1=forecast[0].hour[0].temp_c;
      var min1=forecast[0].hour[0].temp_c;
      var max1_f=forecast[0].hour[0].temp_f;
      var min1_f=forecast[0].hour[0].temp_f;

      var max2=forecast[0].hour[6].temp_c;
      var min2=forecast[0].hour[6].temp_c;
      var max2_f=forecast[0].hour[6].temp_f;
      var min2_f=forecast[0].hour[6].temp_f;

      var max3=forecast[0].hour[12].temp_c;
      var min3=forecast[0].hour[12].temp_c;
      var max3_f=forecast[0].hour[12].temp_f;
      var min3_f=forecast[0].hour[12].temp_f;

      var max4=forecast[0].hour[18].temp_c;
      var min4=forecast[0].hour[18].temp_c;
      var max4_f=forecast[0].hour[18].temp_f;
      var min4_f=forecast[0].hour[18].temp_f;
      for(var i =0; i<24; i++) {
        //console.log(forecast[0].hour[i].temp_c);
        //sum= sum+forecast[0].hour[i].temp_c;
        if(i>=0 && i<5){
          // sum1= sum1+forecast[0].hour[i].temp_c;
          // sum1_f= sum1_f+forecast[0].hour[i].temp_f;
          
          if(forecast[0].hour[i+1].temp_c>max1){
            max1=forecast[0].hour[i+1].temp_c
          }
          if(min1>forecast[0].hour[i+1].temp_c){
            min1=forecast[0].hour[i+1].temp_c
          }
          if(forecast[0].hour[i+1].temp_f>max1_f){
            max1_f=forecast[0].hour[i+1].temp_f
          }
          if(min1_f>forecast[0].hour[i+1].temp_f){
            min1_f=forecast[0].hour[i+1].temp_f
          }
        }
        else if(i>=6 && i<11){
          // sum2= sum2+forecast[0].hour[i].temp_c;
          // sum2_f= sum2_f+forecast[0].hour[i].temp_f;

          if(forecast[0].hour[i+1].temp_c>max2){
            max2=forecast[0].hour[i+1].temp_c
          }
          if(min2>forecast[0].hour[i+1].temp_c){
            min2=forecast[0].hour[i+1].temp_c
          }
          if(forecast[0].hour[i+1].temp_f>max2_f){
            max2_f=forecast[0].hour[i+1].temp_f
          }
          if(min2_f>forecast[0].hour[i+1].temp_f){
            min2_f=forecast[0].hour[i+1].temp_f
          }
        }
        else if(i>=12 && i<17){
          // sum3= sum3+forecast[0].hour[i].temp_c;
          // sum3_f= sum3_f+forecast[0].hour[i].temp_f;
          if(forecast[0].hour[i+1].temp_c>max3){
            max3=forecast[0].hour[i+1].temp_c
          }
          if(min3>forecast[0].hour[i+1].temp_c){
            min3=forecast[0].hour[i+1].temp_c
          }
          if(forecast[0].hour[i+1].temp_f>max3_f){
            max3_f=forecast[0].hour[i+1].temp_f
          }
          if(min3_f>forecast[0].hour[i+1].temp_f){
            min3_f=forecast[0].hour[i+1].temp_f
          }
        }
        else if(i>=18 && i<23){
          // sum4= sum4+forecast[0].hour[i].temp_c;
          // sum4_f= sum4_f+forecast[0].hour[i].temp_f;
          if(forecast[0].hour[i+1].temp_c>max4){
            max4=forecast[0].hour[i+1].temp_c
          }
          if(min4>forecast[0].hour[i+1].temp_c){
            min4=forecast[0].hour[i+1].temp_c
          }
          if(forecast[0].hour[i+1].temp_f>max4_f){
            max4_f=forecast[0].hour[i+1].temp_f
          }
          if(min4_f>forecast[0].hour[i+1].temp_f){
            min4_f=forecast[0].hour[i+1].temp_f
          }
        }
      }
      console.log(student.location.country)
      console.log(student.location.name)
      res.render("index", {data:{ e: max1, f: min1, g: max1_f, h: min1_f, i: max2, j: min2, k: max2_f, l: min2_f, m: max3, n: min3, o: max3_f, p: min3_f, q: max4, r: min4, s: max4_f, t: min4_f, w: student.location.name, z: student.location.country }});
      //res.render("index", {data:{ e: max1, f: min1, g: max1_f, h: min1_f, i: max2, j: min2, k: max2_f, l: min2_f, m: max3, n: min3, o: max3_f, p: min3_f, q: max4, r: min4, s: max4_f, t: min4_f }});
      //res.render("index", {data:{ e: max1, f: min1, i: max2, j: min2, m: max3, n: min3, q: max4, r: min4, o: student.location.name }});
  }
  else{

    axios
    .get(
      "http://api.weatherapi.com/v1/history.json?key=4e47a9e258db4a95808100350212812&q=" +
        country +
        "&q=" +
        city +
        "&dt=" +
        date
    )
    .then((response) => {
      // console.log(response.data);
      var jsonObject = JSON.stringify(response.data);
      // console.log(jsonObject);
      var object = JSON.parse(jsonObject);

      if( object.location.name == req.params.city ){
      fs.writeFileSync(path.resolve(__dirname, '../write.json'), JSON.stringify(response.data));



      // console.log(object);

      // var location = object.location;
      // console.log(location);

      var forecast = object.forecast.forecastday;
      //console.log(forecast);
      // var sum1=0;
      // var sum2=0;
      // var sum3=0;
      // var sum4=0;
      // var sum1_f=0;
      // var sum2_f=0;
      // var sum3_f=0;
      // var sum4_f=0;
      var max1=forecast[0].hour[0].temp_c;
      var min1=forecast[0].hour[0].temp_c;
      var max1_f=forecast[0].hour[0].temp_f;
      var min1_f=forecast[0].hour[0].temp_f;

      var max2=forecast[0].hour[6].temp_c;
      var min2=forecast[0].hour[6].temp_c;
      var max2_f=forecast[0].hour[6].temp_f;
      var min2_f=forecast[0].hour[6].temp_f;

      var max3=forecast[0].hour[12].temp_c;
      var min3=forecast[0].hour[12].temp_c;
      var max3_f=forecast[0].hour[12].temp_f;
      var min3_f=forecast[0].hour[12].temp_f;

      var max4=forecast[0].hour[18].temp_c;
      var min4=forecast[0].hour[18].temp_c;
      var max4_f=forecast[0].hour[18].temp_f;
      var min4_f=forecast[0].hour[18].temp_f;
      for(var i =0; i<24; i++) {
        //console.log(forecast[0].hour[i].temp_c);
        //sum= sum+forecast[0].hour[i].temp_c;
        if(i>=0 && i<5){
          // sum1= sum1+forecast[0].hour[i].temp_c;
          // sum1_f= sum1_f+forecast[0].hour[i].temp_f;
          
          if(forecast[0].hour[i+1].temp_c>max1){
            max1=forecast[0].hour[i+1].temp_c
          }
          if(min1>forecast[0].hour[i+1].temp_c){
            min1=forecast[0].hour[i+1].temp_c
          }
          if(forecast[0].hour[i+1].temp_f>max1_f){
            max1_f=forecast[0].hour[i+1].temp_f
          }
          if(min1_f>forecast[0].hour[i+1].temp_f){
            min1_f=forecast[0].hour[i+1].temp_f
          }
        }
        else if(i>=6 && i<11){
          // sum2= sum2+forecast[0].hour[i].temp_c;
          // sum2_f= sum2_f+forecast[0].hour[i].temp_f;

          if(forecast[0].hour[i+1].temp_c>max2){
            max2=forecast[0].hour[i+1].temp_c
          }
          if(min2>forecast[0].hour[i+1].temp_c){
            min2=forecast[0].hour[i+1].temp_c
          }
          if(forecast[0].hour[i+1].temp_f>max2_f){
            max2_f=forecast[0].hour[i+1].temp_f
          }
          if(min2_f>forecast[0].hour[i+1].temp_f){
            min2_f=forecast[0].hour[i+1].temp_f
          }
        }
        else if(i>=12 && i<17){
          // sum3= sum3+forecast[0].hour[i].temp_c;
          // sum3_f= sum3_f+forecast[0].hour[i].temp_f;
          if(forecast[0].hour[i+1].temp_c>max3){
            max3=forecast[0].hour[i+1].temp_c
          }
          if(min3>forecast[0].hour[i+1].temp_c){
            min3=forecast[0].hour[i+1].temp_c
          }
          if(forecast[0].hour[i+1].temp_f>max3_f){
            max3_f=forecast[0].hour[i+1].temp_f
          }
          if(min3_f>forecast[0].hour[i+1].temp_f){
            min3_f=forecast[0].hour[i+1].temp_f
          }
        }
        else if(i>=18 && i<23){
          // sum4= sum4+forecast[0].hour[i].temp_c;
          // sum4_f= sum4_f+forecast[0].hour[i].temp_f;
          if(forecast[0].hour[i+1].temp_c>max4){
            max4=forecast[0].hour[i+1].temp_c
          }
          if(min4>forecast[0].hour[i+1].temp_c){
            min4=forecast[0].hour[i+1].temp_c
          }
          if(forecast[0].hour[i+1].temp_f>max4_f){
            max4_f=forecast[0].hour[i+1].temp_f
          }
          if(min4_f>forecast[0].hour[i+1].temp_f){
            min4_f=forecast[0].hour[i+1].temp_f
          }
        }
      }
      
      //res.render("index", {data:{ title: avg1, name: avg2,x: avg3,y: avg4, a: avg1_f, b: avg2_f, c: avg3_f, d: avg4_f}});
      //res.render("index", {data:{ e: max1, f: min1, g: max1_f, h: min1_f, i: max2, j: min2, k: max2_f, l: min2_f, m: max3, n: min3, o: max3_f, p: min3_f, q: max4, r: min4, s: max4_f, t: min4_f }});
      //res.render("index", {data:{ e: max1, f: min1, i: max2, j: min2, m: max3, n: min3, q: max4, r: min4, o: object.location.name }});
      res.render("index", {data:{ e: max1, f: min1, g: max1_f, h: min1_f, i: max2, j: min2, k: max2_f, l: min2_f, m: max3, n: min3, o: max3_f, p: min3_f, q: max4, r: min4, s: max4_f, t: min4_f, w: object.location.name, z: student.location.country }});
      console.log(object.location.country)
      console.log(object.location.name)
        }  
      else{
        res.send("Location is incorrect");}

    })
    .catch((error) => {
      console.log(error);
    });

  }
  
});

// module.exports = app;

module.exports = router;


