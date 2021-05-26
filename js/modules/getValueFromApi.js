import get from './get.js'
import renderWeather from './renderWeather.js'

function getValueFromApi(event, pathDB){
    event.preventDefault();
    let id = +document.querySelector('.searcg__inp').getAttribute('data-cityId');
    let res = [];
    get(pathDB)
        .then((data) =>{
            data.forEach(item =>{
                if(id === item.id) { res.push(`lat=${item.coord.lat}&lon=${item.coord.lon}`)}
            });
            return res;
        })
        .then((string) =>{
            //console.log(string.join(''));
            get(`https://api.openweathermap.org/data/2.5/onecall?${string.join('')}&exclude=minutely,hourly,alerts&appid=a696a0c8ecdc20d50ae0ceb393b2e9ac`)
            .then((json) =>{
                //console.log(json);
                renderWeather(json);
            })
        })
}

export default getValueFromApi;