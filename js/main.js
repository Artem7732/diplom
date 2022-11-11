//tabs
const tabs = document.querySelectorAll('.tabheader__item'),
    tabsCurrent = document.querySelectorAll('.current'),
    tabsParent = document.querySelector('.tabheader');

function hideTabCurrent() {
    tabsCurrent.forEach(item => {
        item.style.display = 'none';
    });
    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    })
}

function showTabCurrent(i = 0) {
    tabsCurrent[i].style.display = 'block';
    tabs[i].classList.add('tabheader__item_active');
}
hideTabCurrent();
showTabCurrent();

tabsParent.addEventListener('click', (event) => {
    const target = event.target;
    if (target && target.classList.contains('tabheader__item')) {
        tabs.forEach((item, i) => {
            if (target == item) {
                hideTabCurrent();
                showTabCurrent(i);
            }
        });
    }
});