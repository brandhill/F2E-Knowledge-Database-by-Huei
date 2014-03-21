
Detect user key 'undo' 'redo'

```javascript

// ref: http://stackoverflow.com/questions/6536992/capture-ctr-zundo-and-ctr-yredo-with-javascript-and-perform-custom-function
//
// but
//
// https://github.com/ccampbell/mousetrap
// mousetrap is awesome



$(document).keydown(function (keyEvent) {
    var keyCode = keyEvent.keyCode;

    if (keyEvent.metaKey === true || keyEvent.ctrlKey === true) {

        if (keyCode === 89) { // y
            // fire your custom redo logic
            keyEvent.preventDefault();
            return false;
        }

        else if (keyCode === 90) { // z
            if (keyEvent.shiftKey === true) {
                // special case (CTRL-SHIFT-Z) does a redo (on a mac for example)
                // fire your custom redo logic
            }
            else {
                // fire your custom undo logic
            }

            keyEvent.preventDefault();
            return false;
        }
    }
});
```
