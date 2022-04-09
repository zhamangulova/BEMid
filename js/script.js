let pageSlider = new Swiper('.page', {

    wrapperClass: 'page__wrapper',
    slideClass: 'page__screen',

    direction: 'vertical',

    slidesPerView: 'auto',

    parallax: true,

    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true,
    },

    mousewheel: {
        sensitivity: 1,
    },

    watchOverflow: true,

    speed: 800,
    observer: true,
    observeParents: true,

    pagination: {
        el: '.page__pagination',
        type: 'bullets',
        clickable: 'true',
        bulletClass: 'page__bullet',
        bulletActiveClass: 'page__bullet_active',

    },

    scrollbar: {
        el: '.page__scroll',
        dragClass: '.page__drag_scroll',
        draggable: true
    }
});

let menuLinks = document.querySelectorAll('.menu__link');

function menuSlider(){
    if (menuLinks.length > 0){
        menuLinks[pageSlider.realIndex].classList.add('_active');

        for (let index = 0; index < menuLinks.length; index++){
            const element = menuLinks[index];
            menuLink.addEventListener("click", function(e){
                menuSliderRemove();
                pageSlider.slideTo(index, 800);
                menuLink.classList.add("_active");
                e.preventDefault();
            });
        }
    }
}

