
// Object.is introduced in ES6
//
// "double equals" (==), strict equality or "triple equals" (===), and Object.is.
// more info : https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Sameness
//
// prototype
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/is

if (!Object.is) {
    Object.is = function(v1, v2) {
        if (v1 === 0 && v2 === 0) {
            return 1 / v1 === 1 / v2;
        }
        if (v1 !== v1) {
            return v2 !== v2;
        }
        return v1 === v2;
    };
}