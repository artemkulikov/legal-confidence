//Функция проверки поддержки браузером формата WEBP
function testWebP(callback) {
    var webP = new Image();
    webP.onload = webP.onerror = function () {
        callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
}
testWebP(function (support) {
    if (support == true) {
        document.querySelector('body').classList.add('webp');
    }
    else {
        document.querySelector('body').classList.add('no-webp');
    }
});
//_________________________________________________________________________________
//to top btn
var btn = $('#button');
$(window).scroll(function () {
    if ($(window).scrollTop() > 500) {
        btn.addClass('show');
    }
    else {
        btn.removeClass('show');
    }
});
btn.on('click', function (e) {
    e.preventDefault();
    $('html, body').animate({
        scrollTop: 0
    }, '300');
});
//_____________________

$(function () {
    $("#selectors li a").click(function (e) {
        e.preventDefault();
        $("#selectors li a").removeClass('active');
        $(this).addClass('active');
    })
});

var selectors = document.querySelectorAll('.selector')
    , blocks = document.querySelectorAll('.posts-page', '.active');
Array.prototype.forEach.call(selectors, function (selector, index) {
    selector.addEventListener('click', function (evt) {
        evt.preventDefault();
        clickButtonHandler(blocks[index])
    })
})

function clickButtonHandler(currentBlock) {
    Array.prototype.forEach.call(blocks, function (block) {
        if (block.classList.contains('opened')) {
            block.classList.remove('opened');
        }
    })
    currentBlock.classList.add('opened')
}
