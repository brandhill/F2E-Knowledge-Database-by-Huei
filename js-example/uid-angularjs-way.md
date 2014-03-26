
This is how angularjs generate their uid

```javascript
/**
* A consistent way of creating unique IDs in angular. The ID is a sequence of alpha numeric
* characters such as '012ABC'. The reason why we are not using simply a number counter is that
* the number string gets longer over time, and it can also overflow, where as the nextId
* will grow much slower, it is a string, and it will never overflow.
*
* @returns {string} an unique alpha-numeric string
*/

var uid = ['0', '0', '0'];

function nextUid() {
    var index = uid.length;
    var digit;

    while(index) {
        index--;
        digit = uid[index].charCodeAt(0);

        if (digit == 57 /*'9'*/) {
            uid[index] = 'A';
            return uid.join('');
        }

        if (digit == 90  /*'Z'*/) {
            uid[index] = '0';
        } else {
            uid[index] = String.fromCharCode(digit + 1);
            return uid.join('');
        }
    }

    uid.unshift('0');

    return uid.join('');
}

//
// nextUid()
//
//"001"
//"002"
//"003"
//"004"
//"005"
//"006"
//"007"
//"008"
//"009"
//"00A"
//"00B"
//"00C"
//"00D"
//"00E"
//"00F"
//"00G"
//"00H"
//"00I"
//"00J"

```javascript