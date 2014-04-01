scrollTo.js

// 大神之作
// https://github.com/briangonzalez/jquery.arbitrary-anchor.js/blob/master/jquery.arbitrary-anchor.js

用距離來阻止滑動 scroll
```javascript
// http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
var offset = 40;

$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target),
        elementOffset = $target.offset().top - offset,
        htmlbodyOffset = $('html, body').scrollTop() + offset;

    // prevent animate again and again
    if ( Math.abs(htmlbodyOffset - elementOffset) < 80) {
        return false;
    }

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - offset
    }, 1000, 'swing', function () {
        window.location.hash = target;
    });
});
```

用 mouse event 來阻止一直滑動的效果
```javascript
var offset = 40;

$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target),
        elementOffset = $target.offset().top - offset,
        htmlbodyOffset = $('html, body').scrollTop() + offset;

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - offset
    }, 1000, 'swing', function () {
        window.location.hash = target;
    });
});

$(window).on('mousewheel DOMMouseScroll touchstart mousedown MSPointerDown', function(ev){
    // the true clears the queue
    // the false disables jump-to-end
    $('html, body').stop(true, false);
});
```