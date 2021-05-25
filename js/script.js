
import renderResult from './modules/renderResultSearch.js'
import addValueInInput from './modules/addValueInput.js'

window.addEventListener('DOMContentLoaded', () =>{
    const searchInput = document.querySelector('.searcg__inp');
    searchInput.addEventListener('input', function(){
        renderResult.call(searchInput, 'js/db.json');
    });
    
    const wrapperSearc = document.querySelector('.wrapper-searc');
    wrapperSearc.addEventListener('click', (event) =>{
        addValueInInput(event);
    }); 

});