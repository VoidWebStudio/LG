let gamesBtn = document.querySelectorAll('.games-main__btn');
let gamesItem = document.querySelectorAll('.games-main__item');
let gamesAliceBtn = document.querySelector('.games-main__first-screen');
let gamesContent = document.querySelector('.games-main__content');
let tabName;

gamesAliceBtn.addEventListener('click', function () {
   this.classList.remove('is-active');
    gamesContent.classList.add('is-active');
});

gamesBtn.forEach(item => {
    item.addEventListener('click', function () {
        gamesBtn.forEach( item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-item');
        selectTabItem(tabName);
    });
});

function selectTabItem(tabName) {
    gamesItem.forEach(item => {
        item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
    })
}