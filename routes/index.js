var express = require("express");
var router = express.Router();
var axios = require("axios").default;
var app = express();

const rateLimit = require('express-rate-limit');

// const rateLimit = require('express-rate-limit')
// const createAccountLimiter = rateLimit({
// 	windowMs: 60 * 1000, // 1 hour
// 	max: 1, // Limit each IP to 5 create account requests per `window` (here, per hour)
// 	message:
// 		'Too many accounts created from this IP, please try again after an hour',
// 	standardHeaders: true, // Return rate limit info in the `RateLimit-*` headers
// 	legacyHeaders: false, // Disable the `X-RateLimit-*` headers
// })


router.get("/all/:country/:city/:date", function (req, res, next) {
  var country = req.params.country;
  var city = req.params.city;
  var date = req.params.date;
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

      // console.log(object);

      var location = object.location;
      console.log(location);

      var forecast = object.forecast.forecastday;
      console.log(forecast);
      var sum1=0;
      var sum2=0;
      var sum3=0;
      var sum4=0;
      var sum1_f=0;
      var sum2_f=0;
      var sum3_f=0;
      var sum4_f=0;
      for(var i =0; i<24; i++) {
        console.log(forecast[0].hour[i].temp_c);
        //sum= sum+forecast[0].hour[i].temp_c;
        if(i>=0 && i<6){
          sum1= sum1+forecast[0].hour[i].temp_c;
          sum1_f= sum1_f+forecast[0].hour[i].temp_f;
        }
        else if(i>=6 && i<12){
          sum2= sum2+forecast[0].hour[i].temp_c;
          sum2_f= sum2_f+forecast[0].hour[i].temp_f;
        }
        else if(i>=12 && i<18){
          sum3= sum3+forecast[0].hour[i].temp_c;
          sum3_f= sum3_f+forecast[0].hour[i].temp_f;
        }
        else if(i>=18 && i<24){
          sum4= sum4+forecast[0].hour[i].temp_c;
          sum4_f= sum4_f+forecast[0].hour[i].temp_f;
        }
      }
      var avg1=sum1/6;
      var avg2=sum2/6;
      var avg3=sum3/6;
      var avg4=sum4/6;
      var avg1_f=sum1_f/6;
      var avg2_f=sum2_f/6;
      var avg3_f=sum3_f/6;
      var avg4_f=sum4_f/6;

      // console.log(Object.keys(object));

      // for (x in object) {
      //   res.render("index", { title: object[x].name, test: object[x].country });
      //   // res.render("index", { title: object[x].country });
      // }
      // for (x in object) {
      res.render("index", {data:{ title: avg1, name: avg2,x: avg3,y: avg4, a: avg1_f, b: avg2_f, c: avg3_f, d: avg4_f}});
      ///res.render("index", {title: object.current.temp_c, name: object.current.cloud});
     // res.render("index", {title: "jannatul"});
      //}
      // var t=0;
      // var i=0;
      // // res.render("index", { title: "" + Object.keys(object) });
      // //for(var i=0;i<24;i++){
      // var temp= object.forecast.forecastday.t.hour.i.temp_c;
      //res.render("index", {title: avg});
      // //}
      
    })
    .catch((error) => {
      console.log(error);
    });
});

// module.exports = app;

module.exports = router;


