
const get = async (url) =>{
    const resp = await fetch(url)
    if(!resp.ok){
        throw new Error(`status ${res.status}`);
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
    let id = document.querySelector('.searcg__inp').getAttribute('data-cityId');
    /* get(`https://api.openweathermap.org/data/2.5/weather?id=${id}&appid=a696a0c8ecdc20d50ae0ceb393b2e9ac`)
        .then((json) =>{
            console.log(json);
        }) */
    get(`https://api.openweathermap.org/data/2.5/onecall?lat=34.52813&lon=69.172333&exclude=minutely,hourly,alerts&appid=a696a0c8ecdc20d50ae0ceb393b2e9ac`)
    .then((json) =>{
        console.log(json);
    })
})



 //

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

