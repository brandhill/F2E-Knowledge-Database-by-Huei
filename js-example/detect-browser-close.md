Script that detect browser close in specific condition

```javascript

var detectBrowserClose: {
    on: function (message) {
        var _this = this;

        window.onbeforeunload = function () {
            return _this.condition() ? message : null;
        };
    },
    off: function () {
        window.onbeforeunload = function () {
            return null;
        }
    },
    condition: function () {
        /**
        * When using detectBrowser.on(msg), before closing, check condition,
        * return true then alert message;
        * return false then quit browser
        */
        return true;
    }
};

// example of using

var obj; // object use in client-side


detectBrowserClose.condition = (function () {
    var objCopy = Object.create({}) || {};
    objCopy = obj;

    return function () {
        return !(objCopy === obj));
    }
})();

detectBrowserClose.on('ConfirmExit');
```