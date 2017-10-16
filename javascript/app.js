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
  var location;
  var temp;
  var img;
  var minTemp;
  var maxTemp;
  var description;
  var wind;
  //----------------------------------------------------------------------------------------
  function success(position) {
    Geo.lat = position.coords.latitude;
    Geo.lng = position.coords.longitude;
    alert("We found you!" );
   // $("#data").html("latitude: " + Geo.lat + "<br>longitude: " + Geo.lng);
    WeatherUrl = "https://api.openweathermap.org/data/2.5/weather?"+"lat="+Geo.lat+"&lon="+Geo.lng+"&units=Imperial"+ key;
    hitApi();
  }
  var weather ={};//Push response into object
  function hitApi() {
   // console.log(WeatherUrl);
    $.ajax({
      url: WeatherUrl,
      method: "GET",
      dataType: "jsonp",
    }).done((res, err) => {
      weather.res = JSON.stringify(res);
      location = res.name;
      temp = res.main.temp;
      img = res.weather[0].icon;
      minTemp =res.main.temp_min;
      maxTemp =res.main.temp_max; 
      description = res.weather[0].description;
      wind = res.wind['speed'];
      $('#fahrenheit').html(temp);
      $('#desc').html(description);
      $('#imgdiv').attr('src',img);
      $('#location').html(location);
      $('#wind').html(wind);
      console.log(res.wind['speed']);

      
      //console.log(JSON.stringify(res.main.temp));//current temp
      //console.log(JSON.stringify(res.main.humidity));//humidity
      //console.log(JSON.stringify(res.main.temp_min));//low temp
      //console.log(JSON.stringify(res.main.temp_max));//high temp
      //console.log(JSON.stringify(res.weather[0].description));//description
      //console.log(JSON.stringify(location));// location
      //console.log(JSON.stringify(res.weather[0].description));
    }
	   ).fail((jqXHR, textStatus, errorThrown) => {
	     console.log(jqXHR.status);
	     console.log(textStatus);
	     console.log(errorThrown);
	   }
		 );
    return;
  }
  console.log("weather= ",weather);
  console.log(JSON.stringify(weather));

  //----------------------------------------------------------------------------------------


});



