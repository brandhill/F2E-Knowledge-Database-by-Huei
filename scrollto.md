scrollTo.js

```javascript
// http://www.paulund.co.uk/smooth-scroll-to-internal-links-with-jquery
$('a[href^="#"]').on('click',function (e) {
    e.preventDefault();

    var target = this.hash,
        $target = $(target),
        offset = 40,
        elementOffset = $target.offset().top - offset,
        htmlbodyOffset = $('html, body').scrollTop() + offset;

    // prevent animate again and again
    if ( Math.abs(htmlbodyOffset - elementOffset) < 80) {
        return false;
    }

    $('html, body').stop().animate({
        'scrollTop': $target.offset().top - 40
    }, 1000, 'swing', function () {
        window.location.hash = target;
    });
});
```