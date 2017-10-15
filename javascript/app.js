/*
1)Check if browser supports geolocation, if not tell us, if so- continue to next line
2)push the coordinates into an object called Geo
3)make an ajax call to weather api using the coordinates
4)
*/


$(document).ready(function() {
var key ="&APPID=4e93dcc7568b48181fe68e883aede969"; 
var url ="api.openhweathermap.org/data/2.5/weather?";

var Geo={};//push geolocation into Geo={}
if (navigator.geolocation) {
  navigator.geolocation.getCurrentPosition(success,error);
 }
else {
  alert('Geolocation is not supported');
}


function error() {
  alert("That's weird! We couldn't find you!");
}


function success(position) {
  Geo.lat = position.coords.latitude;
  Geo.lng = position.coords.longitude;
  alert("We found you!" );
  $("#data").html("latitude: " + Geo.lat + "<br>longitude: " + Geo.lng);
}
 var Weather = url+ "lat="+Geo.lat+'&lon='+Geo.lng+key;
console.log(Weather);
$.ajax({
  url: Weather,
  method: "GET",
  dataType: "json"
}).done((res) => {
  console.log(res);
 // let results = res.quote;
  //let me = $.parseHTML(results)
 // $(".display").html("<div id='newDiv'>" + "<h1>" + results.author + "</h1>" + "<h2>" + results.tags + "</h2>" + "<p>" + results.body + "</p>" + "</div>");
});

//var Weather = "http://api.wunderground.com/api/”+ key +”/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";

//console.log(Weather);







 
  











//my testing for coordinates
function getCoordinates(arg) {
  // Only change code below this line.
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position)=>{
      $("#data").html("latitude: " + position.coords.latitude + "<br>longitude: " + position.coords.longitude);
      var Weather = url+ "lat="+position.coords.latitude+'&lon='+position.coords.longitude+key;
      console.log(Weather);
    });
  };
}
//getCoordinates();
});
