
const wrapperSearc = document.querySelector('.wrapper-searc');

function addValueInInput(event){
    let valueSearch = event.target.textContent;
    let id =  event.target.id;
    document.querySelector('.searchCity').value = valueSearch;
    console.log(id);
    return id;
}

wrapperSearc.addEventListener('click', (event) =>{
    if(event.target.classList.contains('item-result')){
        addValueInInput(event);

    }
}); 




