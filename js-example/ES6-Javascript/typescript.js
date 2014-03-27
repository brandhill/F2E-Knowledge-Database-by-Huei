// testing for TypeScript
// Type Annotations
var myString = 'String', myNumber = 1, myBoolean = true, unknown;

//////////////////////////////////////////////////////
// Module
// export
// Classes
// Interface
//////////////////////////////////////////////////////
//
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
// etc .......
//# sourceMappingURL=typescript.js.map
