
function renderWeather(data){
    const days = document.querySelectorAll('.tabs__header__item__day'),
        count  = document.querySelectorAll('.tabs__header__item__count'),
        month = document.querySelectorAll('.tabs__header__item__month'),
        img = document.querySelectorAll('.tabs__header__item__img'),
        tempMin = document.querySelectorAll('.tabs__header__item__minTemp__value'),
        tempMax = document.querySelectorAll('.tabs__header__item__maxTemp__value'),
        temperatureNight = document.querySelectorAll('.block__descr__temperature--night'),
        temperatureMorning = document.querySelectorAll('.block__descr__temperature--morning'),
        temperatureDay = document.querySelectorAll('.block__descr__temperature--day'),
        temperatureEvening = document.querySelectorAll('.block__descr__temperature--evening'),  
        fellLikesNight  = document.querySelectorAll('.block__descr__feelLikes--night'),
        fellLikesMorning = document.querySelectorAll('.block__descr__feelLikes--morning'),
        fellLikesDay = document.querySelectorAll('.block__descr__feelLikes--day'),
        fellLikesEvening = document.querySelectorAll('.block__descr__feelLikes--evening'),
        pressure = document.querySelectorAll('.block__descr__pressure'),
        humidity = document.querySelectorAll('.block__descr__humidity'),
        wind = document.querySelectorAll('.block__descr__wind');

    data.daily.forEach((item, index) =>{
        days[index].textContent = setDay(item.dt);
        count[index].textContent = setDate(item.dt);
        month[index].textContent = setMonth(item.dt);
        img[index].src = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        tempMin[index].innerHTML = `${convertToCels(item.temp.min)}&deg;`;
        tempMax[index].innerHTML = `${convertToCels(item.temp.max)}&deg;`;
        //console.log(item);
        temperatureNight[index].innerHTML = `${convertToCels(item.temp.night)}&deg;`;
        temperatureMorning[index].innerHTML = `${convertToCels(item.temp.morn)}&deg;`;
        temperatureDay[index].innerHTML = `${convertToCels(item.temp.day)}&deg;`;
        temperatureEvening[index].innerHTML = `${convertToCels(item.temp.eve)}&deg;`;
        fellLikesNight[index].innerHTML = `${convertToCels(item.feels_like.night)}&deg;`;
        fellLikesMorning[index].innerHTML = `${convertToCels(item.feels_like.morn)}&deg;`;
        fellLikesDay[index].innerHTML = `${convertToCels(item.feels_like.day)}&deg;`;
        fellLikesEvening[index].innerHTML = `${convertToCels(item.feels_like.eve)}&deg;`;
        pressure[index].textContent = convertToHgmm(item.pressure);
        humidity[index].textContent = item.humidity;
        wind[index].textContent = item.wind_speed;
    })

}
function setDay(unix) {     //getDay  получаем  название месяца
    let day = new Date (unix * 1000); // переводит с unix в мс.
    let res = '';
    switch(day.getDay()) {                      
        case 0: res = 'Sunday'; break;
        case 1: res = 'Monday';  break;
        case 2: res = 'Tuesday';  break;
        case 3: res = 'Wednesday';  break;
        case 4: res = 'Thursday';  break;
        case 5: res = 'Friday';  break;
        case 6: res = 'Saturday'; break;
    }
    return res;
}

function setDate(unix){              //получаем день
    let day = new Date(unix * 1000);    // переводит с unix в мс.
    return day.getDate();
}

function setMonth(unix){       //получаем месяц
    let month = new Date(unix * 1000);  // переводит с unix в мс.
    let res = '';   
    switch(month.getMonth()) {                      
        case 0: res = 'Январь'; break;
        case 1: res = 'Февраль'; break;
        case 2: res = 'Март'; break;
        case 3: res = 'Апрель'; break;
        case 4: res = 'Май'; break;
        case 5: res = 'Июнь'; break;
        case 6: res = 'Июль'; break;
        case 7: res = 'Август'; break;
        case 8: res = 'Сентябрь'; break;
        case 9: res = 'Октябрь'; break;
        case 10: res = 'Ноябрь'; break;
        case 11: res = 'Декабрь'; break;
    }
    return res;
}

function convertToCels(kelvin){   //конвертируем  кельвин в цельсий
    return Math.round(kelvin - 273.15);
}
function convertToHgmm(hPa){
    return Math.round(hPa*0.75);
}

export default renderWeather;