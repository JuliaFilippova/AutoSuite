
// MODAL WINDOW
$('.carpark-cards__btn').on('click',function() {
    $('.carpark-cards-modal').toggle();
});
//close bg
$('.js-close-window').on('click',function() {
    $('.carpark-cards-modal').hide();
});



// //MODAL hamburger
// $('#menuToggle').on('click',function() {
//     $('.menu-modal').toggle();
//     $('#modal').toggle();
// });
// //close bg
// $('#modal').on('click',function() {
//     $('.menu-modal').hide();
//     $('#modal').hide();
// });
// //close bg
// $('.js-close-window').on('click',function() {
//     $('.menu-modal').hide();
//     $('#modal').hide();
// });

// //MODAL FORM
// $('#btnForm').on('click',function() {
//     $('.modal-form').toggle();
//     $('#modal').toggle();
// });
// //close bg
// $('#modal').on('click',function() {
//     $('.modal-form').hide();
//     $('#modal').hide();
// });
// //close bg
// $('.js-close-window').on('click',function() {
//     $('.modal-form').hide();
//     $('#modal').hide();
// });
// //close bg
// $('.js-close-window').on('click',function() {
//     $('.modal-form_thank').hide();
//     $('#modal').hide();
// });
// $('#modal').on('click',function() {
//     $('.modal-form_thank').hide();
//     $('#modal').hide();
// });

// //MODAL sort carpark
// $('.carpark-cards__btn').on('click',function() {
//     $('.carpark-cards-modal').toggle();
// });
// //close bg
// $('.js-close-window').on('click',function() {
//     $('.carpark-cards-modal').hide();
// });


// TAB SORT
let tab = function () {
    let tabSort = document.querySelectorAll('.carpark-tabs__tab'),
        tabContent = document.querySelectorAll('.carpark-cards__card'),
        tabName;
    tabSort.forEach(item => {
        item.addEventListener('click', selecttabSort)
    });
    function selecttabSort() {
        tabSort.forEach(item => {
            item.classList.remove('is-active');
        });
        this.classList.add('is-active');
        tabName = this.getAttribute('data-tab-name');
        selectTabContent(tabName);
    }
    function selectTabContent(tabName) {
        tabContent.forEach(item => {
            item.classList.contains(tabName) ? item.classList.add('is-active') : item.classList.remove('is-active');
        })
    }
};
tab();

