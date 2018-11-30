var Calculator = /** @class */ (function () {
    function Calculator() {
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
                if ('0123456789'.indexOf(text) >= 0) {
                    if (_this.operator) {
                        if (_this.n2) {
                            _this.n2 = parseInt(_this.n2.toString() + text);
                        }
                        else {
                            _this.n2 = parseInt(text);
                        }
                        _this.span.textContent = _this.n2.toString();
                    }
                    else {
                        if (_this.n1) {
                            _this.n1 = parseInt(_this.n1.toString() + text);
                        }
                        else {
                            _this.n1 = parseInt(text);
                        }
                        _this.span.textContent = _this.n1.toString();
                    }
                }
                else if ('+-×÷'.indexOf(text) >= 0) {
                    _this.operator = text;
                }
                else if ('='.indexOf(text) >= 0) {
                    var result = void 0;
                    if (_this.operator === '+') {
                        result = _this.n1 + _this.n2;
                    }
                    else if (_this.operator === '-') {
                        result = _this.n1 - _this.n2;
                    }
                    else if (_this.operator === '×') {
                        result = _this.n1 * _this.n2;
                    }
                    else if (_this.operator === '÷') {
                        result = _this.n1 / _this.n2;
                    }
                    _this.span.textContent = result.toString();
                }
            }
        });
    };
    Calculator.prototype.x = function () {
    };
    return Calculator;
}());
new Calculator();
