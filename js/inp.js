/* 
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

 */




function compereValue(input, arrItem){
    if(input === arrItem.slice(0, input.length)) return true;
   
    //console.log(input === arrItem.slice(0, input.length));

}

console.log(compereValue('A', 'Arklow'));