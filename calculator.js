var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.createButton = function () { };
    Calculator.prototype.createButtons = function () { };
    Calculator.prototype.createContainer = function () { };
    Calculator.prototype.createOutpput = function () { };
    Calculator.prototype.bindEvents = function () { };
    return Calculator;
}());
function createButton(text, container, className) {
    var button = document.createElement('button');
    button.textContent = text;
    if (className) {
        button.className = className;
    }
    container.appendChild(button);
}
var container = document.createElement('div');
container.classList.add('calculator');
document.body.appendChild(container);
var output = document.createElement('div');
output.classList.add('output');
var span = document.createElement('span');
span.textContent = '0';
output.appendChild(span);
container.appendChild(output);
var n1;
var n2;
var operator;
container.addEventListener('click', function (event) {
    if (event.target instanceof HTMLButtonElement) {
        var text = event.target.textContent;
        if ('0123456789'.indexOf(text) >= 0) {
        }
    }
});
var keys = [
    ["Clear", "÷"],
    ["7", "8", "9", "×"],
    ["4", "5", "6", "-"],
    ["1", "2", "3", "+"],
    ["0", ".", "="]
];
keys.forEach(function (keysList) {
    var div = document.createElement('div');
    keysList.forEach(function (key) {
        createButton(key, div, "button text-" + key);
    });
    container.appendChild(div);
});
