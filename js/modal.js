let modal = function() {
    let modalButton = document.querySelectorAll('.modal-button');
    var window = document.getElementById("modal");
    let close = document.querySelectorAll('.modal-close');
    modalButton.forEach(item => {
        item.addEventListener('click', modalActive)
    });
    function modalActive() {
        window.classList.add('is-active');
    }
    close.forEach(item => {
        item.addEventListener('click', modalClose)
    });
    function modalClose() {
        window.classList.remove('is-active');
    }
};
modal();

    // let tabNav = document.querySelectorAll('.tabs-nav__item'),
    // tabContent = document.querySelectorAll('.tab'),
    // tabName;
    // var about = document.getElementById("about-me");
    // tabNav.forEach(item => {
    // item.addEventListener('click', selectTabNav)
    // });
    // function selectTabNav() {
    //     if(this.classList.contains('is-active')) {
    //         this.classList.remove('is-active');
    //         deselectTabContent(tabName);
    //         about.classList.remove('is-active');
    //         tabNav.forEach(item => {
    //             item.classList.remove('sat');
    //         });
    //     } else {
    //         tabNav.forEach(item => {
    //         item.classList.remove('is-active');
    //         });
    //         tabNav.forEach(item => {
    //             item.classList.add('sat');
    //         });
    //         this.classList.add('is-active');
    //         tabName = this.getAttribute('data-tab-name');
    //         selectTabContent(tabName);
    //         about.classList.add('is-active');
    //         this.classList.remove('sat');
    //     }
    // }
    // function selectTabContent(tabName) {
    //     tabContent.forEach(item => {
    //     item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active')
    //     })
    // }
    // function deselectTabContent(tabName) {
    //     tabContent.forEach(item => {
    //     item.classList.contains(tabName) ? item.classList.remove('is-active') : item.classList.remove('is-active')
    //     })
    // }