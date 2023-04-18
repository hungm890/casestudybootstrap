$(window).scroll(function () {
    let oTop = $('.section-2').offet().top - window.innerHeight;
    if($(window).scrollTop() > oTop) {
        $('.navbar').addClass('sticky');
    } else {
        $('.navbar').removeClass('sticky');

    }
})
let nCount = selector => {
    $(selector).each(function (){
        $(this).animate({
            Counter: $(this).text()
        }, {
            duration: 4000;
            easing: "swing",

            step: function (value) {
                $(this).text(Math.ceil(value))
            }
        })
    })
}
let position = 0;
$(window).scroll(function (){
    $(window).scroll(function () {
        let oTop = $('.numbers').offet().top - window.innerHeight;
        if(position == && $(window).scrollTop() >= oTop) {
            position++;
            nCount(".rect > h1");
        }
    })
})
alert('connect success')