
Click to select
        
Learning from http://goo.gl/


// html
<span click-to-select>Your value here for click to select</span>

// angularjs directive
.directive('clickToSelect', [function () {

    var toolTipMessage = 'Press Ctrl+C to copy';

    if (navigator.appVersion.indexOf("Mac") != -1) {
        toolTipMessage = 'Press ⌘-C to copy';
    }

    return{
        restrict: 'A',
        replace: true,
        scope: true,
        template: '<input tooltip="' + toolTipMessage + '" trigger="focus" onclick="this.select();" value="{{ text }}" class="form-control" readonly/>',
        link: function (scope, element, attrs) {
            scope.text = element.context.innerHTML;
            /**
            * Allow user to click to auto select all the words and show the tooltip message
            * CSS is needed in every element which is using `apSelectCopy` directive
            */
            }
        }
}]);