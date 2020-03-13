// MODAL WINDOW
$('.carpark-cards__btn').on('click',function() {
    $('.carpark-cards-modal').toggle();
});
//close bg
$('.js-close-window').on('click',function() {
    $('.carpark-cards-modal').hide();
});

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

// //MODAL hamburger
$('#menuToggle').on('click',function() {
    $('.menu-modal').toggle();
    $('.modal').toggle();
    $("body").addClass("modal-open");
});
//close bg
$('.modal').on('click',function() {
    $('.menu-modal').hide();
    $('.modal').hide();
    $("body").removeClass("modal-open");
});
//close bg
$('.js-close-window').on('click',function() {
    $('.menu-modal').hide();
    $('.modal').hide();
    $("body").removeClass("modal-open");
});
$('.hamburger-navigation-menu > li > a').on('click',function() {
    $('.menu-modal').hide();
    $('.modal').hide();
    $("body").removeClass("modal-open");
});
//MODAL FORM
$('.btnForm').on('click',function() {
    $('.modal-form').toggle();
    $('.modal').toggle();
    $("body").addClass("modal-open"); 
});
//close bg
$('.modal').on('click',function() {
    $('.modal-form').hide();
    $('.modal').hide();
    $("body").removeClass("modal-open")
});
//close bg
$('.js-close-window').on('click',function() {
    $('.modal-form').hide();
    $('.modal').hide();
});
//close bg
$('.js-close-window').on('click',function() {
    $('.modal-form_thank').hide();
    $('.modal').hide();
});
$('.modal').on('click',function() {
    $('.modal-form_thank').hide();
    $('.modal').hide();
});

//MODAL sort carpark
$('.carpark-cards__btn').on('click',function() {
    $('.carpark-cards-modal').toggle();
    $("body").addClass("modal-open");
}).on("hidden", function () {
    $("body").removeClass("modal-open")
});
//close bg
$('.js-close-window').on('click',function() {
    $('.carpark-cards-modal').hide();
});
//SCROLL TOP
$(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() != 0) {
            $('#toTop').fadeIn();
        } else {
            $('#toTop').fadeOut();
        }
    });
    $('#toTop').click(function() {
        $('body,html').animate({
            scrollTop:0
        },800);
    });
});

// SCROLL MENU FIXED HEAD
const checkScroll = () => {
    const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    const menuFixed = $('#menuFixed');
    if (scrollTop > 100) {
        menuFixed.addClass('fixed_menu');
    } else {
        menuFixed.removeClass('fixed_menu');
    }
};
window.addEventListener('scroll', checkScroll);
// SCROLL BODY HREF
$(".header a.transition-anchor").click(function (e) {
    e.preventDefault();

    let id        = $(this).attr('href'),
        positions = $(id).offset();

    if (!!positions.top) $('body,html').animate({scrollTop: positions.top}, 1500);
});

function getCar() {
    let getImg = this.parentNode.nextElementSibling.nextElementSibling.children;
    let getInfo = this.parentNode.nextElementSibling; // Получаем блок с информацией
    let getTitle = getInfo.querySelector('.carpark-cards__title').innerHTML; // ПОлучаем название машины
    let getSalon = getInfo.querySelector('.carpark-cards__salon').innerHTML; // Получаем салон
    let getPrice = getInfo.querySelector('.carpark-cards__price').innerHTML; // Получаем цену
    let getTrans = getInfo.querySelector('.carpark-cards__trans').innerHTML; // Получаем трансфер

    show(getTitle, getSalon, getPrice, getTrans, getImg); // вызываем функцию отрисовки и передаём параметры
}

function show(title, salon, price, trans, carGallery) { // отрисовка в модалке
    let homePage = document.querySelector('.carpark-cards-modal');
    let carImg = document.querySelector('.car-modal__gallery');
    homePage.style.display = 'block';
    homePage.querySelector('.carpark-cards__title').innerHTML = title;
    homePage.querySelector('.carpark-cards__salon').innerHTML = salon;
    homePage.querySelector('.carpark-cards__price').innerHTML = price;
    homePage.querySelector('.carpark-cards__trans').innerHTML = trans;

    carImg.innerHTML = '';
    for (let k in carGallery) {

    if (carGallery[k].tagName != 'IMG') return;
    carImg.innerHTML += `<img src="${carGallery[k].src}">`;
    }

    homePage.querySelector('.js-close-window').onclick = () => { // По клику закрываем окно
        homePage.style.display = 'none';
    }
}

let order = document.getElementsByClassName('carpark-cards__btn'); // Получили все кнопки "Заказать"

for (let k in order) {
    order[k].onclick = getCar; // вешаем на все кнопки событие клика
}

// скрыть фиксированое менб при открытом окне
$('.carpark-cards__btn').click(function(event) {
    $('.nav-menu-wrap').hide();   
});
$('.js-close-window').click(function(event) {
    $('.nav-menu-wrap').fadeIn();   
});

//VALIDATE FORM
const resetFormsErrors = () => {
    $('form span.error-input').each((i, el) => $(el).text(''));

    $('label.has-errors').removeClass('has-errors')
};
const validateForm = form => {
    const name  = $(form).find("input[name='name']"),
          phone = $(form).find("input[name='phone']");
    if ($(name).val().length === 0) {
        $(name).siblings('span.error-input').text('Поле должно быть заполнено!');

        $(name).parent('label.form-input').addClass('has-errors')
    }
    if ($(phone).val().length === 0) {
        $(phone).siblings('span.error-input').text('Поле должно быть заполнено!');

        return $(phone).parent('label.form-input').addClass('has-errors')
    }
    if ($(phone).val().length <= 11) {
        $(phone).parent('label.form-input').addClass('has-errors');

        return $(phone).siblings('span.error-input').text('Введите телефон полностью!');
    }
};
// form
$(document).ready(function () {
    $('#servicesForm, #popupForm').submit(function (e) {
        e.preventDefault();
        resetFormsErrors();
        const name  = $(this).find("input[name='name']"),
              phone = $(this).find("input[name='phone']");
        if (!name || !phone || $(name).val().trim().length === 0 || $(phone).val().length === 0) return validateForm(this);
        if ($(phone).val().length <= 11) return validateForm(this);
        $.ajax({
            type: "POST",
            url:  "mail/mail.php",
            data: $(this).serialize()
        }).done(() => {
            $(this).trigger('reset');
            $('.js-overlay-window-thank-you').fadeIn();
        });
        return false;
    });
});

// Маска ввода номера телефона (плагин maskedinput)
$(function($){
    $('[name="phone"]').mask("+7(999) 999-9999");
});