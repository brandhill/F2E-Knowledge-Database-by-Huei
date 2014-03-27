// testing for TypeScript

//////////////////////////////////////////////////////
// Type Annotations
//////////////////////////////////////////////////////
var myString: string = 'String',
    myNumber: number = 1,
    myBoolean: boolean = true,
    unknown: any;

//////////////////////////////////////////////////////
// Module
// export
// Classes
//////////////////////////////////////////////////////

//////////////////////////////////////////////////////
// Interface
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

    constructor (first = 'Huei', last = 'Tan', age = '22') {
        this.firstName = first;
        this.lastName = last;
        this.age = age;
    }
}

class woman implements Person {

    firstName;
    lastName;
    age;
    gender: string = 'female';

    constructor (first = 'Huei', last = 'Tan', age = '22') {
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


// etc ....... learning