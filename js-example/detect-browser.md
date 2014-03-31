
This is how Prototype.js detect Browser

```javascript

// https://github.com/sstephenson/prototype/blob/master/src/prototype/prototype.js#L76

var Prototype = {

    /**
    *  Prototype.Browser
    *
    *  A collection of [[Boolean]] values indicating the browser which is
    *  currently in use. Available properties are `IE`, `Opera`, `WebKit`,
    *  `MobileSafari` and `Gecko`.
    *
    *  Example
    *
    *      Prototype.Browser.WebKit;
    *      //-> true, when executed in any WebKit-based browser.
    **/

    Browser: (function(){
        var ua = navigator.userAgent;
        // Opera (at least) 8.x+ has "Opera" as a [[Class]] of `window.opera`
        // This is a safer inference than plain boolean type conversion of `window.opera`
        var isOpera = Object.prototype.toString.call(window.opera) == '[object Opera]';

        return {
            IE:             !!window.attachEvent && !isOpera,
            Opera:          isOpera,
            WebKit:         ua.indexOf('AppleWebKit/') > -1,
            Gecko:          ua.indexOf('Gecko') > -1 && ua.indexOf('KHTML') === -1,
            MobileSafari:   /Apple.*Mobile/.test(ua)
        }
    })()

}

```