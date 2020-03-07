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
    $('#modal').toggle();
});
//close bg
$('#modal').on('click',function() {
    $('.menu-modal').hide();
    $('#modal').hide();
});
//close bg
$('.js-close-window').on('click',function() {
    $('.menu-modal').hide();
    $('#modal').hide();
});
$('.hamburger-navigation-menu > li > a').on('click',function() {
    $('.menu-modal').hide();
    $('#modal').hide();
});

//MODAL FORM
$('.btnForm').on('click',function() {
    $('.modal-form').toggle();
    $('#modal').toggle();
});
//close bg
$('#modal').on('click',function() {
    $('.modal-form').hide();
    $('#modal').hide();
});
//close bg
$('.js-close-window').on('click',function() {
    $('.modal-form').hide();
    $('#modal').hide();
});
//close bg
$('.js-close-window').on('click',function() {
    $('.modal-form_thank').hide();
    $('#modal').hide();
});
$('#modal').on('click',function() {
    $('.modal-form_thank').hide();
    $('#modal').hide();
});

//MODAL sort carpark
$('.carpark-cards__btn').on('click',function() {
    $('.carpark-cards-modal').toggle();
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
    const menuDesktop = $('#menuFixed');
    if (scrollTop > 100) {
        menuDesktop.addClass('fixed_menu');
    } else {
        menuDesktop.removeClass('fixed_menu');
    }
};


function getCar() {
    let getImg = this.parentNode; // тут можно получить Картинку, если будут проблемы обращайся ) если нужно будет ещё и картинки получать и отрисовывать ) 
    let getInfo = this.parentNode.nextElementSibling; // Получаем блок с информацией
    let getTitle = getInfo.querySelector('.carpark-cards__title').innerHTML; // ПОлучаем название машины
    let getSalon = getInfo.querySelector('.carpark-cards__salon').innerHTML; // Получаем салон
    let getPrice = getInfo.querySelector('.carpark-cards__price').innerHTML; // Получаем цену
    let getTrans = getInfo.querySelector('.carpark-cards__trans').innerHTML; // Получаем трансфер

    show(getTitle, getSalon, getPrice, getTrans); // вызываем функцию отрисовки и передаём параметры
}

function show(title, salon, price, trans) { // отрисовка в модалке
    let homePage = document.querySelector('.carpark-cards-modal');
    homePage.style.display = 'block';
    homePage.querySelector('.carpark-cards__title').innerHTML = title;
    homePage.querySelector('.carpark-cards__salon').innerHTML = salon;
    homePage.querySelector('.carpark-cards__price').innerHTML = price;
    homePage.querySelector('.carpark-cards__trans').innerHTML = trans;

    homePage.querySelector('.js-close-window').onclick = () => { // По клику закрываем окно
        homePage.style.display = 'none';
    }
}

let order = document.getElementsByClassName('carpark-cards__btn'); // Получили все кнопки "Заказать"

for (let k in order) {
    order[k].onclick = getCar; // вешаем на все кнопки событие клика
}








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