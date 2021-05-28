import get from './get.js'
function setCityName(data){
  
    const district = document.querySelectorAll('.block__header__district');
    get(`https://api.openweathermap.org/data/2.5/weather?lat=${data.lat}&lon=${data.lon}&appid=a696a0c8ecdc20d50ae0ceb393b2e9ac`)
    .then((data) =>{
        district.forEach(item =>{
            item.textContent = `${data.name}, ${data.sys.country}`;
        })
        //console.log(data);
     
     
    })

}

export default setCityName;

