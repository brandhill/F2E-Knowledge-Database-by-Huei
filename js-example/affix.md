bootstrap affix, using jquery to implement it

    #menu
      top #menuTop
        |
        | docScroll > topOffset
        | inside here, `fixed` here
        | docScroll < bottomOffset
        |
      bottom #menuBottom

without RWD case
```javascript
var menu = $('#menu');

$(document).bind('scroll', function () {
    var topOffset = $('#menuTop').offset().top,
        bottomOffset = $('#menuBottom').offset().top,
        docScroll = $(document).scrollTop();

    if (docScroll > topOffset && docScroll < bottomOffset) {
        // inside
        if (!menu.hasClass('fixed')) {
            menu.addClass('fixed');
        }
    } else {
        // outside
        if (menu.hasClass('fixed')) {
            menu.removeClass('fixed');
        }
    }

});
```

RWD case
```javascript
var responseWidth = 991, // depends on css @media max-width = xxxx
    menu = $('#menu');

$(document).bind('scroll', function () {
    if ($(document).width() > responseWidth) { // RWD use
        var topOffset = $('#menuTop').offset().top,
            bottomOffset = $('#menuBottom').offset().top,
            docScroll = $(document).scrollTop();

        if (docScroll > topOffset && docScroll < bottomOffset) {
            // inside
            if (!menu.hasClass('fixed')) {
                menu.addClass('fixed');
            }
        } else {
            // outside
            if (menu.hasClass('fixed')) {
                menu.removeClass('fixed');
            }
        }
    } else {
        if (careersMenu.hasClass('fixed')) {
            careersMenu.removeClass('fixed');
        }
    }
});
```
