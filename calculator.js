var Calculator = /** @class */ (function () {
    function Calculator() {
        this.n1 = null;
        this.n2 = null;
        this.keys = [
            ["Clear", "÷"],
            ["7", "8", "9", "×"],
            ["4", "5", "6", "-"],
            ["1", "2", "3", "+"],
            ["0", ".", "="]
        ];
        this.createContainer();
        this.createOutpput();
        this.createButtons();
        this.bindEvents();
    }
    Calculator.prototype.createButton = function (text, container, className) {
        var button = document.createElement('button');
        button.textContent = text;
        if (className) {
            button.className = className;
        }
        container.appendChild(button);
    };
    Calculator.prototype.createButtons = function () {
        var _this = this;
        this.keys.forEach(function (keysList) {
            var div = document.createElement('div');
            div.className = 'row';
            keysList.forEach(function (key) {
                _this.createButton(key, div, "button text-" + key);
            });
            _this.container.appendChild(div);
        });
    };
    Calculator.prototype.createContainer = function () {
        var container = document.createElement('div');
        container.classList.add('calculator');
        document.body.appendChild(container);
        this.container = container;
    };
    Calculator.prototype.createOutpput = function () {
        var output = document.createElement('div');
        output.classList.add('output');
        var span = document.createElement('span');
        span.textContent = '0';
        this.span = span;
        output.appendChild(span);
        this.output = output;
        this.container.appendChild(output);
    };
    Calculator.prototype.bindEvents = function () {
        var _this = this;
        this.container.addEventListener('click', function (event) {
            if (event.target instanceof HTMLButtonElement) {
                var text = event.target.textContent;
                _this.updateInput(text);
            }
        });
    };
    Calculator.prototype.updateNumber = function (name, text) {
        if (this[name]) {
            this[name] += text;
        }
        else {
            this[name] = text;
        }
        this.span.textContent = this[name].toString();
    };
    Calculator.prototype.updateNumbers = function (text) {
        if (this.operator) {
            this.updateNumber('n2', text);
        }
        else {
            this.updateNumber('n1', text);
        }
    };
    Calculator.prototype.updateResult = function () {
        var result;
        var n1 = parseFloat(this.n1);
        var n2 = parseFloat(this.n2);
        if (this.operator === '+') {
            result = n1 + n2;
        }
        else if (this.operator === '-') {
            result = n1 - n2;
        }
        else if (this.operator === '×') {
            result = n1 * n2;
        }
        else if (this.operator === '÷') {
            result = n1 / n2;
        }
        result = result.toPrecision(12).replace(/.0+$/g, '').replace(/0+e/g, 'e');
        if (n2 === 0) {
            result = '不是数字';
        }
        this.span.textContent = result.toString();
        this.n1 = null;
        this.n2 = null;
        this.operator = null;
        this.result = result;
    };
    Calculator.prototype.updateOperator = function (text) {
        if (this.n1 === null) {
            this.n1 = this.result;
        }
        this.operator = text;
    };
    Calculator.prototype.updateInput = function (text) {
        if ('0123456789.'.indexOf(text) >= 0) {
            this.updateNumbers(text);
        }
        else if ('+-×÷'.indexOf(text) >= 0) {
            this.updateOperator(text);
        }
        else if ('='.indexOf(text) >= 0) {
            this.updateResult();
        }
        else if (text === 'Clear') {
            this.n1 = null;
            this.n2 = null;
            this.operator = null;
            this.result = null;
            this.span.textContent = '0';
        }
    };
    return Calculator;
}());
new Calculator();
