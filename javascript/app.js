/*
1)Check if browser supports geolocation, if not tell us, if so- continue to next line
2)push the coordinates into an object called Geo
3)make an ajax call to weather api using the coordinates
4)
*/
//$(document).ready(function() {
  
  var key ="&APPID=4e93dcc7568b48181fe68e883aede969"; 
  var url ="api.openhweathermap.org/data/2.5/weather?";
  var Geo={};//push geolocation into Geo={}
  // var Weather = "http://api.wunderground.com/api/”+ key +”/forecast/geolookup/conditions/q/" + Geo.lat + "," + Geo.lng + ".json";
  var WeatherUrl = "api.openweathermap.org/data/2.5/weather?"+"lat="+Geo.lat+'&lon='+Geo.lng+key;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(success,error);
  }
  else {
    alert('Geolocation is not supported');
  }
  function error() {
    alert("That's weird! We couldn't find you!");
  }
  console.log("Geo",Geo);
  //----------------------------------------------------------------------------------------
  function success(position) {
    Geo.lat = position.coords.latitude;
    Geo.lng = position.coords.longitude;
    alert("We found you!" );
    $("#data").html("latitude: " + Geo.lat + "<br>longitude: " + Geo.lng);
    WeatherUrl = "api.openweathermap.org/data/2.5/weather?"+"lat="+Geo.lat+'&lon='+Geo.lng+key;
    console.log(WeatherUrl);
    hitApi();
  }
  function hitApi(res) {
    console.log(WeatherUrl);
    $.ajax({
      url: WeatherUrl,
      method: "GET",
      dataType: "jsonp",
    }).done(function(res, err) {
      console.log(res);
      
    }).fail((jqXHR, textStatus, errorThrown) => {

      console.log(jqXHR.status);
      console.log(textStatus);
      console.log(errorThrown);
    }
);


    
  }  

  //----------------------------------------------------------------------------------------

//});



