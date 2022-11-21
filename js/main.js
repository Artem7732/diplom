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
//     const swiperslide = document.querySelectorAll('.slide'),
//         prev = document.querySelector('.ec-button-prev'),
//         next = document.querySelector('.ec-button-next');
//    // console.log(swiperslide);

//    let slideIndex =1;

//     prev?.addEventListener('click', () => plusSlide(-1));
//     next?.addEventListener('click', () => plusSlide(1));

//     function showSwiperslide(n) {
//         if(n> swiperslide.length){
//             slideIndex =1;
//         }
       
//         if (n < 1) {
//             slideIndex = swiperslide.length;
//         }

//         swiperslide.forEach(item => item.style.display = 'none');
//         swiperslide[slideIndex-1].style.display = 'block';
//    }
//    function plusSlide (n){
//     showSwiperslide(slideIndex+=n);
//    }
//     //slider 

const testiitem = document.querySelectorAll('.testi-item'),
        prev = document.querySelector('.tc-button-prev'),
        next = document.querySelector('.tc-button-next');
    console.log(testiitem.length);

   let slideIndex =1;

    prev?.addEventListener('click', () => plusSlide(-1));
    next?.addEventListener('click', () => plusSlide(1));

    function showtestiitem(n) {
        if(n> testiitem.length){
            slideIndex =1;
        }
       
        if (n < 1) {
            slideIndex = testiitem.length;
        }

        testiitem.forEach(item => item.style.display = 'none');
        testiitem[slideIndex-1].style.display = 'block';
   }
   function plusSlide (n){
    showtestiitem(slideIndex+=n);
   }
   
});