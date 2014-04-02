
This is the collection of `Prototype.js` `fastclick.js` to detect Browser, OS

```javascript

// https://github.com/sstephenson/prototype/blob/master/src/prototype/prototype.js#L76
// https://github.com/ftlabs/fastclick/blob/master/lib/fastclick.js#L174

var Prototype = (function () {

    var ua = navigator.userAgent,
        isOpera = Object.prototype.toString.call(window.opera) == '[Object Opera]';

    return {
        Browser: {
            IE:             !!window.attachEvent && !isOpera,
            Opera:          isOpera,
            WebKit:         ua.indexOf('AppleWebKit/') > -1,
            Gecko:          ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
            MobileSafari:   /Apple.*Mobile/.test(ua),
        },
        OS: {
            Android:        ua.indexOf('Android') > 0,
            IOS:            /iP(ad|hone|od)/.test(ua),
            IOS4:           /iP(ad|hone|od)/.test(ua) && (/OS 4_\d(_\d)?/).test(ua)
        }
    }

})();
```