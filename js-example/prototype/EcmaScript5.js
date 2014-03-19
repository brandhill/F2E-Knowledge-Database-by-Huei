/**
 @param {Object} object
 @static
 @return {boolean}
 */
Object.isExtensible = function(object) {};
/**
 @param {Object} obj
 @static
 @return {void}
 */
Object.preventExtensions = function(obj) {};
/**
 @param {Object} obj
 @param {string} prop
 @static
 @return {Object}
 */
Object.getOwnPropertyDescriptor = function(obj,prop) {};
/**
 @param {Object} obj
 @param {string} prop
 @param {Object} desc
 @static
 @return {void}
 */
Object.defineProperty = function(obj,prop,desc) {};
/**
 @param {Object} obj
 @param {Object} props
 @static
 @return {void}
 */
Object.defineProperties = function(obj,props) {};
/**
 @param {Object} obj
 @static
 @return {Array}
 */
Object.keys = function(obj) {};
/**
 @param {Object} obj
 @static
 @return {Array}
 */
Object.getOwnPropertyNames = function(obj) {};
/**
 @param {Object} proto
 @param {Object} [props]
 @static
 @return {void}
 */
Object.create = function(proto,props) {};
/**
 @param {Object} obj
 @static
 @return {Object}
 */
Object.getPrototypeOf = function(obj) {};
/**
 @param {Object} obj
 @static
 @return {void}
 */
Object.seal = function(obj) {};
/**
 @param {Object} obj
 @static
 @return {boolean}
 */
Object.isSealed = function(obj) {};
/**
 @param {Object} obj
 @static
 @return {void}
 */
Object.freeze = function(obj) {};
/**
 @param {Object} obj
 @static
 @return {boolean}
 */
Object.isFrozen = function(obj) {};

/**
 @param {Function} callback
 @param {Object} [initialValue]
 @return {Object}
 */
Array.prototype.reduce = function(callback,initialValue) {};
/**
 @param {Function} callback
 @param {Object} [initialValue]
 @return {Object}
 */
Array.prototype.reduceRight = function(callback,initialValue) {};
/**
 @param {Object} searchElement
 @param {number} [fromIndex]
 @return {number}
 */
Array.prototype.indexOf = function(searchElement,fromIndex) {};
/**
 @param {Object} searchElement
 @param {number} [fromIndex]
 @return {number}
 */
Array.prototype.lastIndexOf = function(searchElement,fromIndex) {};
/**
 @param {Function} callback
 @param {Object} [thisObject]
 @return {boolean}
 */
Array.prototype.every = function(callback,thisObject) {};
/**
 @param {Function} callback
 @param {Object} [thisObject]
 @return {Array}
 */
Array.prototype.filter = function(callback,thisObject) {};
/**
 @param {Function} callback
 @param {Object} [thisObject]
 @return {void}
 */
Array.prototype.forEach = function(callback,thisObject) {};
/**
 @param {Function} callback
 @param {Object} [thisObject]
 @return {Array}
 */
Array.prototype.map = function(callback,thisObject) {};
/**
 @param {Function} callback
 @param {Object} [thisObject]
 @return {boolean}
 */
Array.prototype.some = function(callback,thisObject) {};
/**
 @param {Object} object
 @return {boolean}
 */
Array.prototype.isArray = function(object) {};

/**
 @return {string}
 */
String.prototype.trim = function() {};
/**
 @return {string}
 */
String.prototype.toJSON = function() {};

/**
 @param {T} thisArg
 @param {...*} [arg]
 @return {function(this:T)}
 @template T
 */
Function.prototype.bind = function(thisArg,arg) {};

/**
 @param {*} value
 @param {Function} [replacer]
 @param {Number|String} [space]
 @static
 */
JSON.stringify = function(value,replacer,space) {};
/**
 @param {string} jsonString
 @param {Function} [reviver]
 @static
 */
JSON.parse = function(jsonString,reviver) {};
JSON = function() {};
JSON.constructor = 0;
/**
 @static
 @return {number}
 */
Date.now = function() {};
/**
 @return {string}
 */
Date.prototype.toJSON = function() {};
