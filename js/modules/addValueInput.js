
function addValueInInput(event){
    if(event.target.classList.contains('item-result')){
        valueInInput(event);
        removeResults();
    }
}

function valueInInput(event){                                    // в инпут добавляет резкльтат поиска и cityId
    const targetElement = document.querySelector('.searcg__inp');              
    const valueSearch = event.target.textContent;           
    const cityId =  event.target.attributes[0].value;
    
    targetElement.value = valueSearch;
    targetElement.setAttribute('data-cityId', cityId);
    //console.log(cityId);
}

function removeResults(){                       //закрывет окно результата поиска при выборе результата
    const wrapperSearc = document.querySelector('.wrapper-searc');
    wrapperSearc.classList.remove('wrapper-searc--active')
}  


export default addValueInInput;