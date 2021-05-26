
import renderResult from './modules/renderResultSearch.js'
import addValueInInput from './modules/addValueInput.js'
import getValueFromApi from './modules/getValueFromApi.js'
import showTabs from './modules/tabs.js'
import start from './modules/start.js'


window.addEventListener('DOMContentLoaded', () =>{
    const searchInput = document.querySelector('.searcg__inp');
    searchInput.addEventListener('input', function(){
        renderResult.call(searchInput, 'js/db.json');
    });
    
    const wrapperSearc = document.querySelector('.wrapper-searc');
    wrapperSearc.addEventListener('click', (event) =>{
        addValueInInput(event);
    });

    const btnGo = document.querySelector('.search__btn');
    btnGo.addEventListener('click', function(event) {
        getValueFromApi(event, 'js/db.json');
    })

    const tabsHeader = document.querySelector('.tabs__header');
    tabsHeader.addEventListener('click', showTabs);

    start();
});