/**
 @type {Number}
 @const
 */
NaN = 0;
/**
 @type {Number}
 */
Infinity = 0;
undefined = 0;
/**
 @param {*} x
 @return {Object}
 */
eval = function(x) {};
/**
 @param {*} s
 @param {Number} [radix]
 @return {Number}
 */
parseInt = function(s,radix) {};
/**
 @param {*} x
 @return {Number}
 */
parseFloat = function(x) {};
/**
 @param {Number} x
 @return {boolean}
 */
isNaN = function(x) {};
/**
 @param {Number} x
 @return {boolean}
 */
isFinite = function(x) {};
/**
 @param {string} encodedURI
 @return {string}
 */
decodeURI = function(encodedURI) {};
/**
 @param {string} encodedURIComponent
 @return {string}
 */
decodeURIComponent = function(encodedURIComponent) {};
/**
 @param {string} uri
 @return {string}
 */
encodeURI = function(uri) {};
/**
 @param {string} uriComponent
 @return {string}
 */
encodeURIComponent = function(uriComponent) {};

/**
 @type {function}
 */
Object.constructor = 0;
/**
 @type {Number}
 */
Object.prototype.length = 0;
/**
 @type {Object}
 */
Object.prototype.prototype = 0;
/**
 @param {*} [value]
 @constructor
 */
function Object(value) {}
/**
 @return {string}
 */
Object.prototype.toLocaleString = function() {};
/**
 @param {string} propertyName
 @return {boolean}
 */
Object.prototype.hasOwnProperty = function(propertyName) {};
/**
 @param {Object} o
 @return {boolean}
 */
Object.prototype.isPrototypeOf = function(o) {};
/**
 @param {string} propertyName
 @return {boolean}
 */
Object.prototype.propertyIsEnumerable = function(propertyName) {};
/**
 @return {string}
 */
Object.prototype.toString = function() {};
/**
 @return {*}
 */
Object.prototype.valueOf = function() {};

/**
 @param {...*} [args]
 @constructor
 */
function Array(args) {}
/**
 @param {...*} [items]
 @return {Array}
 */
Array.prototype.concat = function(items) {};
/**
 @param {string} [separator]
 @return {string}
 */
Array.prototype.join = function(separator) {};
/**
 @return {*}
 */
Array.prototype.pop = function() {};
/**
 @param {...*} [items]
 @return {Number}
 */
Array.prototype.push = function(items) {};
/**
 @return {Array}
 */
Array.prototype.reverse = function() {};
/**
 @return {*}
 */
Array.prototype.shift = function() {};
/**
 @param {Number} [start]
 @param {Number} [end]
 @return {Array}
 */
Array.prototype.slice = function(start,end) {};
/**
 @param {function} [compareFn]
 @return {Array}
 */
Array.prototype.sort = function(compareFn) {};
/**
 @param {Number} [start]
 @param {Number} [deleteCount]
 @param {...*} [items]
 @return {Array}
 */
Array.prototype.splice = function(start,deleteCount,items) {};
/**
 @param {...*} [items]
 @return {Number}
 */
Array.prototype.unshift = function(items) {};
/**
 @return {Array}
 */
Array.prototype.valueOf = function() {};

/**
 @param [value]
 @constructor
 @return {boolean}
 */
function Boolean(value) {}
/**
 @return {boolean}
 */
Boolean.prototype.valueOf = function() {};

/**
 @param {number} year
 @param {number} month
 @param {number} [date]
 @param {number} [hours]
 @param {number} [minutes]
 @param {number} [seconds]
 @param {number} [milliseconds]
 @static
 @return {number}
 */
Date.UTC = function(year,month,date,hours,minutes,seconds,milliseconds) {};
/**
 @param {string} dateString
 @static
 @return {number}
 */
Date.parse = function(dateString) {};
/**
 @param {...*} args
 @constructor
 */
function Date(args) {}
/**
 @return {number}
 */
Date.prototype.getDate = function() {};
/**
 @return {number}
 */
Date.prototype.getDay = function() {};
/**
 @return {number}
 */
Date.prototype.getMonth = function() {};
/**
 @return {number}
 */
Date.prototype.getFullYear = function() {};
/**
 @return {number}
 */
Date.prototype.getHours = function() {};
/**
 @return {number}
 */
Date.prototype.getMilliseconds = function() {};
/**
 @return {number}
 */
Date.prototype.getMinutes = function() {};
/**
 @return {number}
 */
Date.prototype.getSeconds = function() {};
/**
 @return {number}
 */
Date.prototype.getTime = function() {};
/**
 @return {number}
 */
Date.prototype.getTimezoneOffset = function() {};
/**
 @return {number}
 */
Date.prototype.getUTCDate = function() {};
/**
 @return {number}
 */
Date.prototype.getUTCDay = function() {};
/**
 @return {number}
 */
Date.prototype.getUTCFullYear = function() {};
/**
 @return {number}
 */
Date.prototype.getUTCHours = function() {};
/**
 @return {number}
 */
Date.prototype.getUTCMilliseconds = function() {};
/**
 @return {number}
 */
Date.prototype.getUTCMinutes = function() {};
/**
 @return {number}
 */
Date.prototype.getUTCMonth = function() {};
/**
 @return {number}
 */
Date.prototype.getUTCSeconds = function() {};
/**
 @return {number}
 */
Date.prototype.getYear = function() {};
/**
 @param {number} date
 */
Date.prototype.setDate = function(date) {};
/**
 @param {number} year
 @param {number} [month]
 @param {number} [day]
 */
Date.prototype.setFullYear = function(year,month,day) {};
/**
 @param {number} hour
 @param {number} [min]
 @param {number} [sec]
 @param {number} [ms]
 */
Date.prototype.setHours = function(hour,min,sec,ms) {};
/**
 @param {number} ms
 */
Date.prototype.setMilliseconds = function(ms) {};
/**
 @param {number} min
 @param {number} [sec]
 @param {number} [ms]
 */
Date.prototype.setMinutes = function(min,sec,ms) {};
/**
 @param {number} month
 @param {number} [day]
 */
Date.prototype.setMonth = function(month,day) {};
/**
 @param {number} sec
 @param {number} [ms]
 */
Date.prototype.setSeconds = function(sec,ms) {};
/**
 @param {number} time
 */
Date.prototype.setTime = function(time) {};
/**
 @param {number} date
 */
Date.prototype.setUTCDate = function(date) {};
/**
 @param {number} year
 @param {number} [month]
 @param {number} [day]
 */
Date.prototype.setUTCFullYear = function(year,month,day) {};
/**
 @param {number} hour
 @param {number} [min]
 @param {number} [sec]
 @param {number} [ms]
 */
Date.prototype.setUTCHours = function(hour,min,sec,ms) {};
/**
 @param {number} ms
 */
Date.prototype.setUTCMilliseconds = function(ms) {};
/**
 @param {number} min
 @param {number} [sec]
 @param {number} [ms]
 */
Date.prototype.setUTCMinutes = function(min,sec,ms) {};
/**
 @param {number} month
 @param {number} [day]
 */
Date.prototype.setUTCMonth = function(month,day) {};
/**
 @param {number} sec
 @param {number} [ms]
 */
Date.prototype.setUTCSeconds = function(sec,ms) {};
/**
 @param {number} value
 */
Date.prototype.setYear = function(value) {};
/**
 @return {string}
 */
Date.prototype.toDateString = function() {};
/**
 @return {string}
 */
Date.prototype.toISOString = function() {};
/**
 @return {string}
 */
Date.prototype.toLocaleDateString = function() {};
/**
 @return {string}
 */
Date.prototype.toLocaleString = function() {};
/**
 @return {string}
 */
Date.prototype.toLocaleTimeString = function() {};
/**
 @return {string}
 */
Date.prototype.toTimeString = function() {};
/**
 @return {string}
 */
Date.prototype.toUTCString = function() {};

/**
 @type {function}
 */
Arguments.prototype.callee = 0;
/**
 @type {function}
 @const
 @deprecated
 */
Arguments.prototype.caller = 0;
Arguments.prototype = new Array();
Arguments = {};

/**
 @type {Arguments}
 @const
 */
Function.prototype.arguments = 0;
/**
 @type {Number}
 @const
 */
Function.prototype.arity = 0;
/**
 @param {Object} [thisArg]
 @param {Array} [argArray]
 @return {*}
 */
Function.prototype.apply = function(thisArg,argArray) {};
/**
 @param {Object} [thisArg]
 @param {...*} [args]
 @return {*}
 */
Function.prototype.call = function(thisArg,args) {};
Function = {};

/**
 @static
 @type {number}
 @const
 */
Math.E = 0;
/**
 @static
 @type {number}
 @const
 */
Math.LN10 = 0;
/**
 @static
 @type {number}
 @const
 */
Math.LN2 = 0;
/**
 @static
 @type {number}
 @const
 */
Math.LOG10E = 0;
/**
 @static
 @type {number}
 @const
 */
Math.LOG2E = 0;
/**
 @static
 @type {number}
 @const
 */
Math.PI = 0;
/**
 @static
 @type {number}
 @const
 */
Math.SQRT1_2 = 0;
/**
 @static
 @type {number}
 @const
 */
Math.SQRT2 = 0;
/**
 @param {number} x
 @static
 @return {number}
 */
Math.abs = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.acos = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.asin = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.atan = function(x) {};
/**
 @param {number} x
 @param {number} y
 @static
 @return {number}
 */
Math.atan2 = function(x,y) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.ceil = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.cos = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.exp = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.floor = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.log = function(x) {};
/**
 @param {...number} x
 @static
 @return {number}
 */
Math.max = function(x) {};
/**
 @param {...number} x
 @static
 @return {number}
 */
Math.min = function(x) {};
/**
 @param {number} x
 @param {number} y
 @static
 @return {number}
 */
Math.pow = function(x,y) {};
/**
 @static
 @return {number}
 */
Math.random = function() {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.round = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.sin = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.sqrt = function(x) {};
/**
 @param {number} x
 @static
 @return {number}
 */
Math.tan = function(x) {};
Math = {};

/**
 @static
 @type {Number}
 @const
 */
Number.MAX_VALUE = 0;
/**
 @static
 @type {Number}
 @const
 */
Number.MIN_VALUE = 0;
/**
 @static
 @type {Number}
 @const
 */
Number.NaN = 0;
/**
 @static
 @type {Number}
 @const
 */
Number.NEGATIVE_INFINITY = 0;
/**
 @static
 @type {Number}
 @const
 */
Number.POSITIVE_INFINITY = 0;
/**
 @param [value]
 @constructor
 @return {number}
 */
function Number(value) {}
/**
 @param {Number} [fractionalDigits]
 @return {string}
 */
Number.prototype.toExponential = function(fractionalDigits) {};
/**
 @param {Number} [fractionalDigits]
 @return {string}
 */
Number.prototype.toFixed = function(fractionalDigits) {};
/**
 @param {Number} [precision]
 @return {string}
 */
Number.prototype.toPrecision = function(precision) {};
/**
 @param {Number} [radix]
 @return {string}
 */
Number.prototype.toString = function(radix) {};
/**
 @return {Number}
 */
Number.prototype.valueOf = function() {};

/**
 @static
 @type {string}
 @const
 */
RegExp.leftContext = 0;
/**
 @static
 @type {string}
 @const
 */
RegExp.input = 0;
/**
 @static
 @type {string}
 @const
 */
RegExp.lastParen = 0;
/**
 @static
 @type {string}
 @const
 */
RegExp.lastMatch = 0;
/**
 @static
 @type {string}
 @const
 */
RegExp.rightContext = 0;
/**
 @static
 @type {string}
 @const
 */
RegExp.$1 = 0;
/**
 @static
 @type {string}
 @const
 */
RegExp.$2 = 0;
/**
 @static
 @type {string}
 @const
 */
RegExp.$3 = 0;
/**
 @static
 @type {string}
 @const
 */
RegExp.$4 = 0;
/**
 @static
 @type {string}
 @const
 */
RegExp.$5 = 0;
/**
 @type {boolean}
 @const
 */
RegExp.prototype.global = 0;
/**
 @type {boolean}
 @const
 */
RegExp.prototype.ignoreCase = 0;
/**
 @type {Number}
 */
RegExp.prototype.lastIndex = 0;
/**
 @type {boolean}
 */
RegExp.prototype.multiline = 0;
/**
 @type {string}
 */
RegExp.prototype.source = 0;
/**
 @param {string} [pattern]
 @param {string} [options]
 @constructor
 */
function RegExp(pattern,options) {}
/**
 @param {string} [String]
 @return {Array|{index:number, input:string}}
 */
RegExp.prototype.exec = function(String) {};
/**
 @param {string} [String]
 @return {boolean}
 */
RegExp.prototype.test = function(String) {};

/**
 @param {...Number} [chars]
 @static
 @return {string}
 */
String.fromCharCode = function(chars) {};
/**
 @param [value]
 @constructor
 @return {string}
 */
function String(value) {}
/**
 @param {string} [nameAttribute]
 @return {string}
 */
String.prototype.anchor = function(nameAttribute) {};
/**
 @return {string}
 */
String.prototype.big = function() {};
/**
 @return {string}
 */
String.prototype.blink = function() {};
/**
 @return {string}
 */
String.prototype.bold = function() {};
/**
 @param {Number} pos
 @return {string}
 */
String.prototype.charAt = function(pos) {};
/**
 @return {Number}
 */
String.prototype.charCodeAt = function(index) {};
/**
 @param {...string} [strings]
 @return {string}
 */
String.prototype.concat = function(strings) {};
/**
 @return {string}
 */
String.prototype.fixed = function() {};
/**
 @param {string} color
 @return {string}
 */
String.prototype.fontcolor = function(color) {};
/**
 @param {Number} size
 @return {string}
 */
String.prototype.fontsize = function(size) {};
/**
 @param {string} searchString
 @param {Number} [position]
 @return {Number}
 */
String.prototype.indexOf = function(searchString,position) {};
/**
 @return {string}
 */
String.prototype.italics = function() {};
/**
 @param {string} searchString
 @param {Number} [position]
 @return {Number}
 */
String.prototype.lastIndexOf = function(searchString,position) {};
/**
 @param {string} href
 @return {string}
 */
String.prototype.link = function(href) {};
/**
 @param {string} that
 @return {boolean}
 */
String.prototype.localeCompare = function(that) {};
/**
 @param {RegExp} regexp
 @return {Array|{index:number, input:string}}
 */
String.prototype.match = function(regexp) {};
/**
 @param {RegExp|string} searchValue
 @param {string|function} replaceValue
 @return {string}
 */
String.prototype.replace = function(searchValue,replaceValue) {};
/**
 @param {*} regexp
 @return {Number}
 */
String.prototype.search = function(regexp) {};
/**
 @param {Number} start
 @param {Number} [end]
 @return {string}
 */
String.prototype.slice = function(start,end) {};
/**
 @return {string}
 */
String.prototype.small = function() {};
/**
 @param {*} separator
 @param {Number} [limit]
 @return {Array}
 */
String.prototype.split = function(separator,limit) {};
/**
 @return {string}
 */
String.prototype.strike = function() {};
/**
 @return {string}
 */
String.prototype.sub = function() {};
/**
 @param {Number} start
 @param {Number} [length]
 @return {string}
 */
String.prototype.substr = function(start,length) {};
/**
 @param {Number} start
 @param {Number} [end]
 @return {string}
 */
String.prototype.substring = function(start,end) {};
/**
 @return {string}
 */
String.prototype.sup = function() {};
/**
 @return {string}
 */
String.prototype.toLowerCase = function() {};
/**
 @return {string}
 */
String.prototype.toLocaleLowerCase = function() {};
/**
 @return {string}
 */
String.prototype.toLocaleUpperCase = function() {};
/**
 @return {string}
 */
String.prototype.toUpperCase = function() {};
/**
 @return {string}
 */
String.prototype.valueOf = function() {};

/**
 @type {string}
 */
Error.prototype.name = 0;
/**
 @type {string}
 */
Error.prototype.message = 0;
/**
 @param {*} [msg]
 @param {*} [id]
 @constructor
 */
function Error(msg,id) {}

EvalError.prototype = new Error();
EvalError = {};

RangeError.prototype = new Error();
RangeError = {};

ReferenceError.prototype = new Error();
ReferenceError = {};

SyntaxError.prototype = new Error();
SyntaxError = {};

TypeError.prototype = new Error();
TypeError = {};

URIError.prototype = new Error();
URIError = {};
