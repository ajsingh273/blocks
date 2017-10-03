// Scroll To Works
var scrollToDemo = $('.btn-demo');

scrollToDemo.on('click', function(e){
    e.preventDefault();
    $('html, body').animate({
        scrollTop: $("#chose-demo").offset().top
    }, 1000);
});
