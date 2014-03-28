// testing for TypeScript

//////////////////////////////////////////////////////
// Type Annotations
//////////////////////////////////////////////////////
var myString: string = 'String',
    myNumber: number = 1,
    myBoolean: boolean = true,
    myArray: number[] = [0,0],
    myObj: { property: string; } = { property: myString },
    unknown: any;

//////////////////////////////////////////////////////
// Module - export
//////////////////////////////////////////////////////
module script{
    var local: string = 'localString';
    export var from: string = 'typescript';
    export var to: string = 'javascript';

    export var toString = function () {
        return local + ' from ' + this.from + ' to ' + this.to;
    }
}

// script.toString();
// "from typescript to javascript"

//////////////////////////////////////////////////////
// Interface - Classes
//////////////////////////////////////////////////////
interface Person {
    firstName: string;
    lastName: string;
    age: number;
}

class man implements Person {

    firstName;
    lastName;
    age;
    gender: string = 'male';

    constructor (first = 'Huei', last = 'Tan', age = 22) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }

    getAge () {
        return this.age;
    }
}

class woman implements Person {

    firstName;
    lastName;
    age;
    gender: string = 'female';

    constructor (first = 'Huei', last = 'Tan', age = 22) {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
}
var huei = new man('CCC');
var gf = new woman();

// man {gender: "male", firstName: "CCC", lastName: "Tan", age: "22"}
// woman {gender: "female", firstName: "Huei", lastName: "Tan", age: "22"}

//////////////////////////////////////////////////////
// Functions
// Optional Default Rest Parameter
//////////////////////////////////////////////////////
var myOptional = function (opt?: string) {
    return opt;
};

var myDefault = function (opt: string = 'myString') {
    return opt;
};

var myRest = function (...opt: any[]) {
    return opt.join();
};

//////////////////////////////////////////////////////
// Overload
//////////////////////////////////////////////////////
class Example {
    overloadedMethod(input: string);

    overloadedMethod(input: number);

    overloadedMethod(input: any) {
        return input.toString();
    }
}

//////////////////////////////////////////////////////
// Enumerations
//////////////////////////////////////////////////////
enum score {
    hundred = 100,
    thousand = 1000
}

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
class hueitan extends man {
    constructor(last: string, first: string, a: number) { super(last,first,a);
    this.age = this.getAge();}

    getAge () {
        return super.getAge() * 2;
    }
}

var me = new hueitan('test','a',2);

// hueitan {gender: "male", firstName: "test", lastName: "a", age: 2, constructor: function…}

// etc ....... learning
