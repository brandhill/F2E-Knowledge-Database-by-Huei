
Detect msie - this is angularjs solution

```javascript
var isString = function (value) {
    return typeof value === 'string';
};

var int = function (str) {
    return parseInt(str, 10);
};

var lowercase = function (string) {
    return isString(string) ? string.toLowerCase() : string;
};

/**
* IE 11 changed the format of the UserAgent string.
* See http://msdn.microsoft.com/en-us/library/ms537503.aspx
*/

var msie = int((/msie (\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]);

if (isNaN(msie)) {
    msie = int((/trident\/.*; rv:(\d+)/.exec(lowercase(navigator.userAgent)) || [])[1]);
}


// check variable msie
console.log(msie);

```