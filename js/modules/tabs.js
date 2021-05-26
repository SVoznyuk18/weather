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

export default showTabs;