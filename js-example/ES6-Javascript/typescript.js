// testing for TypeScript
var __extends = this.__extends || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    __.prototype = b.prototype;
    d.prototype = new __();
};
//////////////////////////////////////////////////////
// Type Annotations
//////////////////////////////////////////////////////
var myString = 'String', myNumber = 1, myBoolean = true, myArray = [0, 0], myObj = { property: myString }, unknown;

//////////////////////////////////////////////////////
// Module - export
//////////////////////////////////////////////////////
var script;
(function (script) {
    var local = 'localString';
    script.from = 'typescript';
    script.to = 'javascript';

    script.toString = function () {
        return local + ' from ' + this.from + ' to ' + this.to;
    };
})(script || (script = {}));


var man = (function () {
    function man(first, last, age) {
        if (typeof first === "undefined") { first = 'Huei'; }
        if (typeof last === "undefined") { last = 'Tan'; }
        if (typeof age === "undefined") { age = 22; }
        this.gender = 'male';
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    man.prototype.getAge = function () {
        return this.age;
    };
    return man;
})();

var woman = (function () {
    function woman(first, last, age) {
        if (typeof first === "undefined") { first = 'Huei'; }
        if (typeof last === "undefined") { last = 'Tan'; }
        if (typeof age === "undefined") { age = 22; }
        this.gender = 'female';
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
    return woman;
})();
var huei = new man('CCC');
var gf = new woman();

// man {gender: "male", firstName: "CCC", lastName: "Tan", age: "22"}
// woman {gender: "female", firstName: "Huei", lastName: "Tan", age: "22"}
//////////////////////////////////////////////////////
// Functions
// Optional Default Rest Parameter
//////////////////////////////////////////////////////
var myOptional = function (opt) {
    return opt;
};

var myDefault = function (opt) {
    if (typeof opt === "undefined") { opt = 'myString'; }
    return opt;
};

var myRest = function () {
    var opt = [];
    for (var _i = 0; _i < (arguments.length - 0); _i++) {
        opt[_i] = arguments[_i + 0];
    }
    return opt.join();
};

//////////////////////////////////////////////////////
// Overload
//////////////////////////////////////////////////////
var Example = (function () {
    function Example() {
    }
    Example.prototype.overloadedMethod = function (input) {
        return input.toString();
    };
    return Example;
})();

//////////////////////////////////////////////////////
// Enumerations
//////////////////////////////////////////////////////
var score;
(function (score) {
    score[score["hundred"] = 100] = "hundred";
    score[score["thousand"] = 1000] = "thousand";
})(score || (score = {}));

// Object {100: "hundred", 1000: "thousand", hundred: 100, thousand: 1000}
//////////////////////////////////////////////////////
// Generics <T>
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Constraints
//////////////////////////////////////////////////////
//////////////////////////////////////////////////////
// Extends - Simple Inheritance
//////////////////////////////////////////////////////
var hueitan = (function (_super) {
    __extends(hueitan, _super);
    function hueitan(last, first, a) {
        _super.call(this, last, first, a);
        this.age = this.getAge();
    }
    hueitan.prototype.getAge = function () {
        return _super.prototype.getAge.call(this) * 2;
    };
    return hueitan;
})(man);

var me = new hueitan('test', 'a', 2);
// hueitan {gender: "male", firstName: "test", lastName: "a", age: 2, constructor: function…}
// etc ....... learning
//# sourceMappingURL=typescript.js.map
