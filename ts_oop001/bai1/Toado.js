"use strict";
exports.__esModule = true;
exports.Toado = void 0;
var Toado = /** @class */ (function () {
    function Toado(x, y, name) {
        this.x = x;
        this.y = y;
        this.name = name;
    }
    Toado.prototype.getX = function () {
        return this.x;
    };
    Toado.prototype.setX = function (x) {
        this.x = x;
    };
    Toado.prototype.getY = function () {
        return this.y;
    };
    Toado.prototype.setY = function (y) {
        this.y = y;
    };
    Toado.prototype.toString = function () {
        return "".concat(this.name, " (").concat(this.x, ", ").concat(this.y, ")");
    };
    return Toado;
}());
exports.Toado = Toado;
