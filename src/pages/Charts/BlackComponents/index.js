"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BlackClass = void 0;
var BlackClass = /** @class */ (function () {
    // 写上public之后会变成属性，不写的话就只是个形参
    function BlackClass(height, width, el, app, btns, //放按钮的容器
    bgColor, lineColor) {
        if (height === void 0) { height = 500; }
        if (width === void 0) { width = 800; }
        if (el === void 0) { el = document.querySelector('#canvas'); }
        if (app === void 0) { app = el.getContext('2d'); }
        if (btns === void 0) { btns = document.createElement('div'); }
        if (bgColor === void 0) { bgColor = '#000'; }
        if (lineColor === void 0) { lineColor = '#fff'; }
        this.height = height;
        this.width = width;
        this.el = el;
        this.app = app;
        this.btns = btns;
        this.bgColor = bgColor;
        this.lineColor = lineColor;
        this.initCanvas();
        this.bindEvent();
        this.clear();
        this.erase();
        this.setLineColor();
        this.save();
    }
    // 初始画布
    BlackClass.prototype.initCanvas = function () {
        this.el.width = this.width;
        this.el.height = this.height;
        this.app.fillStyle = this.lineColor;
        this.app.fillRect(0, 0, this.width, this.height);
        this.el.insertAdjacentElement('afterend', this.btns);
        this.btns.classList.add('flex-button');
        this.app.lineWidth = 2;
    };
    BlackClass.prototype.bindEvent = function () {
        var _this = this;
        var callback = this.drawLine.bind(this);
        this.el.addEventListener('mousedown', function () {
            _this.app.beginPath();
            _this.app.strokeStyle = _this.lineColor; //白色线
            // this.app.moveTo(e.pageX, e.pageY)
            _this.el.addEventListener('mousemove', callback);
            document.addEventListener('mouseup', function () {
                _this.el.removeEventListener('mousemove', callback);
            }); //如果把事件取消绑定到el上，在外部松开的话，就不能取消事件了，用冒泡接受
        });
    };
    BlackClass.prototype.drawLine = function (event) {
        this.app.lineTo(event.offsetX, event.offsetY);
        this.app.stroke();
    };
    BlackClass.prototype.clear = function () {
        var _this = this;
        var era = document.createElement('button');
        era.innerText = 'clear';
        this.btns.insertAdjacentElement('afterbegin', era);
        era.addEventListener('click', function () {
            _this.setBgColor(_this.bgColor);
        });
        return this;
    };
    BlackClass.prototype.setBgColor = function (newColor) {
        this.bgColor = newColor;
        this.app.fillStyle = this.bgColor;
        this.app.fillRect(0, 0, this.el.width, this.el.height);
        return this;
    };
    BlackClass.prototype.setLineColor = function () {
        var _this = this;
        var colors = ['#1B9CFC', '#FD7272', '#D6A2E8', '#55E6C1', '#6D214F', '#fff'];
        var container = document.createElement('div');
        container.classList.add('line-color');
        colors.forEach(function (item) {
            var colorDiv = document.createElement('div');
            colorDiv.style.cssText = "width:20px;height:20px;background-color:".concat(item);
            colorDiv.addEventListener('click', function () {
                _this.lineColor = item;
                _this.app.lineWidth = 2;
            });
            container.insertAdjacentElement('afterbegin', colorDiv);
        });
        this.btns.insertAdjacentElement('beforeend', container);
    };
    BlackClass.prototype.erase = function () {
        var _this = this;
        var cel = document.createElement('button');
        cel.innerText = 'erase';
        this.btns.insertAdjacentElement('afterbegin', cel);
        cel.addEventListener('click', function () {
            _this.lineColor = _this.bgColor;
            _this.app.lineWidth = 28;
        });
        return this;
    };
    BlackClass.prototype.save = function () {
        var _this = this;
        var save = document.createElement('button');
        save.innerText = 'save';
        this.btns.insertAdjacentElement('beforeend', save);
        var img = document.createElement('img');
        save.addEventListener('click', function () {
            img.src = _this.el.toDataURL('image/jpeg');
            img.classList.add('img-cut');
        });
        this.btns.insertAdjacentElement('afterend', img);
        return this;
    };
    return BlackClass;
}());
exports.BlackClass = BlackClass;
