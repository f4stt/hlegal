const swiper = new Swiper('.swiper', {
    spaceBetween: 30,
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },
});



(function () {
    const headerBurgerBtn = document.querySelector('.header__burger');
    const headerNavigation = document.querySelector('.header__menu');
    const headerButtonCloseNav = document.querySelector('.header__menu-close');

    headerBurgerBtn.addEventListener('click', e => {
        headerNavigation.classList.add('active');
    });

    headerButtonCloseNav.addEventListener('click', e => {
        headerNavigation.classList.remove('active');
    });

})();


(function () {
    const tabsItem = document.querySelectorAll('.tabs__menu-link');
    const tabsContent = document.querySelectorAll('.tabs__inner');
    tabsItem.forEach((tab, index) => {
        tab.addEventListener('click', (e) => {
            e.preventDefault()
            tabsContent.forEach(content => {
                content.classList.remove('active')
            })
            tabsItem.forEach(tab => {
                tab.classList.remove('active')
            })
            tabsItem[index].classList.add('active')
            tabsContent[index].classList.add('active')
        })
    })
})();


