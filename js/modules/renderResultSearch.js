import get from './get.js'

function renderResult (pathDB){
    get(pathDB)
        .then((json) =>{
            const data = json;
            let res = [];
            let inputValue = ((this.value).toLowerCase()).trim();

            data.forEach(item =>{
                if(compareValue(inputValue, ((item.name).toLowerCase())) == true){
                    res.push(item);
                }
            })
            //console.log(res);
            renderSearchItem(res);
            showResult();
        })
        .catch(()=> console.log('Erooor'))
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

function compareValue(input, arrItem){     
    if(input === arrItem.slice(0, input.length)) return true;
}

function showResult(){           //добавляем  класс активнсти окна с результатами поиска
    const wrapperSearc = document.querySelector('.wrapper-searc');
    wrapperSearc.classList.add('wrapper-searc--active')
}

export default renderResult;