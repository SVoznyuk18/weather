import get from './get.js'
import renderWeather from './renderWeather.js'

 function start (){
    navigator.geolocation.getCurrentPosition(function(position) {
        let res = (`lat=${position.coords.latitude}&lon=${position.coords.longitude}`);
        get(`https://api.openweathermap.org/data/2.5/onecall?${res}&exclude=minutely,hourly,alerts&appid=a696a0c8ecdc20d50ae0ceb393b2e9ac`)
          .then((json) =>{
              console.log(json);
              renderWeather(json);
              
          })
      });
}

export default start;