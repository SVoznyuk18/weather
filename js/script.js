
const get = async (url) =>{
    const resp = await fetch(url)
    if(!resp.ok){
        throw new Error(`status ${resp.status}`);
    }
    return await resp.json();
}

function renderSearchItem(arr){   //рендер результата поиска
    const wrapperSearc = document.querySelector('.wrapper-searc');
    const wrapperResult = document.createElement('div');  

    wrapperSearc.innerHTML = '';   //обнуляем результат рендера на следующих візовах функции
    wrapperResult.classList.add('wrapper-result');


    for(let i = 0; i < arr.length; i++){  
        let itemResult = document.createElement('div');
        itemResult.textContent =`${arr[i]["name"]}, ${arr[i]["country"]}`;
        itemResult.setAttribute('data-cityId', arr[i]["id"]);
        itemResult.classList.add('item-result');
        wrapperResult.append(itemResult);
        //console.log(arr[i]["name"]);
    }
    wrapperSearc.append(wrapperResult);
}

document.querySelector('.searcg__inp').addEventListener('input', function(){
    get('js/db.json')
        .then((json) =>{
            const data = json;
            let res = [];
            let inputValue = ((this.value).toLowerCase()).trim();

            data.forEach(item =>{
                if(compereValue(inputValue, ((item.name).toLowerCase())) == true){
                    res.push(item);
                }
            })

            //console.log(res);
            renderSearchItem(res);
            showResult();
        })
        .catch(()=> console.log('Erooor'))
});


function compereValue(input, arrItem){    
    if(input === arrItem.slice(0, input.length)) return true;
}


 
function addValueInInput(event){                                    // in input add result search and city id
    let targetElement = document.querySelector('.searcg__inp');              
    let valueSearch = event.target.textContent;           
    let cityId =  event.target.attributes[0].value;
    
    targetElement.value = valueSearch;
    targetElement.setAttribute('data-cityId', cityId);
    //console.log(cityId);
}

const wrapperSearc = document.querySelector('.wrapper-searc');

wrapperSearc.addEventListener('click', (event) =>{

    if(event.target.classList.contains('item-result')){
        addValueInInput(event);
        removeResults();
    }
}); 


const btnGo = document.querySelector('.search__btn');
btnGo.addEventListener('click', function (event) {
    event.preventDefault();
    /* let id = document.querySelector('.searcg__inp').getAttribute('data-cityId');
    get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=a696a0c8ecdc20d50ae0ceb393b2e9ac`)
        .then((json) =>{
            console.log(json);
        }) */
    get(`https://api.openweathermap.org/data/2.5/onecall?lat=50.433334&lon=30.516666&exclude=minutely,hourly,alerts&appid=a696a0c8ecdc20d50ae0ceb393b2e9ac`)
    .then((json) =>{
        console.log(json);
        renderWeather(json);
    })
})
///////////////////////////////////////////////////////////////////////////////////////////////////////

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
        days[index].textContent = getMonth(item.dt);
        count[index].textContent = getDay(item.dt);
        //month[index].textContent = month(item.dt);
        img[index].src = `http://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`;
        tempMin[index].innerHTML = `${convertToCels(item.temp.min)}&deg;`;
        tempMax[index].innerHTML = `${convertToCels(item.temp.max)}&deg;`;
        temperatureNight[index].innerHTML = `${convertToCels(item.temp.night)}&deg;`;
        temperatureMorning[index].innerHTML = `${convertToCels(item.temp.morn)}&deg;`;
        temperatureDay[index].innerHTML = `${convertToCels(item.temp.day)}&deg;`;
        temperatureEvening[index].innerHTML = `${convertToCels(item.temp.eve)}&deg;`;
        fellLikesNight[index].innerHTML = `${convertToCels(item.feels_like.night)}&deg;`;
        fellLikesMorning[index].innerHTML = `${convertToCels(item.feels_like.morn)}&deg;`;
        fellLikesDay[index].innerHTML = `${convertToCels(item.feels_like.day)}&deg;`;
        fellLikesEvening[index].innerHTML = `${convertToCels(item.feels_like.eve)}&deg;`;
        pressure[index].textContent = item.pressure;
        humidity[index].textContent = item.humidity;
        wind[index].textContent = item.wind_speed;
    })

}
function getMonth(unix) {     //getDay  получаем  название месяца
    let day = new Date (unix * 1000); // переводит с unix в мс.
    let res = '';
    switch(day.getDay()) {                      
        case 0: res = 'sunday'; break;
        case 1: res = 'monday';  break;
        case 2: res = 'tuesday';  break;
        case 3: res = 'wednesday';  break;
        case 4: res = 'thursday';  break;
        case 5: res = 'friday';  break;
        case 6: res = 'saturday'; break;
    }
    return res;
}

function getDay(unix){              //получаем день
    let day = new Date(unix * 1000);    // переводит с unix в мс.
    return day.getDate();
}

function month(unix){       //получаем месяц
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


 ////////////////////////////////////////////////////////////////////////////////////////////////////

function showResult(){
    const wrapperSearc = document.querySelector('.wrapper-searc');
    wrapperSearc.classList.add('wrapper-searc--active')
}
function removeResults(){
    const wrapperSearc = document.querySelector('.wrapper-searc');
    wrapperSearc.classList.remove('wrapper-searc--active')
}


////////////////////////////////////////////////////
//tabs

document.querySelector('.tabs__header').addEventListener('click', showTabs);

function showTabs(e){
    e.preventDefault();
   
    if(e.target.classList.contains('tabs__header__trigger')){
     
        let tabAtribut = e.target.parentElement.getAttribute('data-tab');
        let tabContent = document.querySelectorAll('.tabs__body__content');
        let tabHeader = document.querySelectorAll('.tabs__header__item');

        tabHeader.forEach(item => item.classList.remove('tabs__header__item--active'));
        e.target.parentElement.classList.add('tabs__header__item--active');


        tabContent.forEach((item, index) =>{
            if(tabAtribut == index) tabContent[index].classList.add('tabs__body__content--active');
            else tabContent[index].classList.remove('tabs__body__content--active');
        })
 
    }
    
}
////////////////////////////////////

