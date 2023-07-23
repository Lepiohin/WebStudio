//ТАБИ
const tabNavItems = document.querySelectorAll('.tubs-portfolio__item');
const tabItems = document.querySelectorAll('.portfolio-tabs__items');
document.addEventListener("click", function (e) {
    const targetElement = e.target;
    let currentActiveIndex = null;
    let newActiveIndex = null;
    if (targetElement.closest('.tubs-portfolio__item')){
        tabNavItems.forEach((tabNavItems, index) => {
            if(tabNavItems.classList.contains('active')){
                currentActiveIndex = index;
                tabNavItems.classList.remove('active');
            }
            if(tabNavItems === targetElement){
                newActiveIndex = index;
            }
        });
        targetElement.classList.add('active');
        tabItems[currentActiveIndex].classList.remove('active');
        tabItems[newActiveIndex].classList.add('active');
    }
});

//БУРГЕР

$(document).ready(function () {
    $('.header__burger').click(function(event){
        $('.header__burger,.header__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});