window.addEventListener('DOMContentLoaded', () => {
    //tabs
    const tabs = document.querySelectorAll('.tabcontent'),
        tabsContent = document.querySelectorAll('.tab-content'),
        tabsParent = document.querySelector('.hero-menu_header');

    function hideTabContent() {
        tabsContent.forEach(item => {
            item.style.display = 'none';
        });
        tabs.forEach(item => {
            item.classList.remove('current');
        })
    }

    function showTabContent(i = 0) {
        tabsContent[i].style.display = 'block';
        tabs[i].classList.add('current');
    }
    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => {
        const target = event.target;
        if (target && target.classList.contains('tabcontent')) {
            tabs.forEach((item, i) => {
                if (target == item) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    });
    //slides
    const swiperslide = document.querySelector('.swiper-slide'),
        swiperslides = swiperslide.querySelectorAll('.event-carousel-item'),
        prev = swiperslide.querySelector('.fas fa-caret-left'),
        next = swiperslide.querySelector('.fas fa-caret-right');
    // console.log(SwiperSlide);

    let slideIndex = 0;

    prev.addEventListener('click', () => showSwiperslide(-1));
    next.addEventListener('click', () => showSwiperslide(1));

    function showSwiperslide(n) {
        slideIndex = slideIndex + n;
        if (slideIndex < 0) {
            slideIndex = swiperslide.length - 1;
        }

        swiperSlide.forEach(item => item.syle.display = 'none');
        swiperSlide[slideIndex].style.display = 'block';

        //console.log(slideIndex);

    }
});