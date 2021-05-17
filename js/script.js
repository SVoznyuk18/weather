
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
        itemResult.id = arr[i]["id"];
        itemResult.classList.add('item-result');
        wrapperResult.append(itemResult);
        //console.log(arr[i]["name"]);
    }
    wrapperSearc.append(wrapperResult);
}

document.querySelector('.searchCity').addEventListener('input', function(){
get('js/db.json')
.then((json) =>{
    const data = json;
    let res = [];
    let inputValue = (this.value).toLowerCase();

    data.forEach(item =>{
        if(((item.name).toLowerCase()).includes(inputValue)){
            res.push(item);
        }
    })

    //console.log(res);
    renderSearchItem(res);
})
.catch(()=> console.log('Erooor'))
});




const wrapperSearc = document.querySelector('.wrapper-searc');

function addValueInInput(event){
    let valueSearch = event.target.textContent;
    let id =  event.target.id;
    document.querySelector('.searchCity').value = valueSearch;
    console.log(id);
    return id;
}

function getId (){
    let id = '';
    

    console.log(id);
    
}

wrapperSearc.addEventListener('click', (event) =>{

    if(event.target.classList.contains('item-result')){
        addValueInInput(event);
       
    }
}); 




