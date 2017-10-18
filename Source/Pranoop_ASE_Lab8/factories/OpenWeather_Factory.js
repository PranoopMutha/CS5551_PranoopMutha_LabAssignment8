(function(){

var OpenWeather_Factory = function($http){

   var temp = {};

   temp.getWeather = function(city){

      var apiKey = "2bb2ce8ca8d8392e99787e164d4487bb";
      var Uri = "http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apiKey;
      return $http.get(Uri)
   };
   return temp;
}
OpenWeather_Factory.$inject = ["$http"];
angular.module("Mash").factory("OpenWeather_Factory", OpenWeather_Factory);

}());
