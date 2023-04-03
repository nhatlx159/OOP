"use strict";
exports.__esModule = true;
exports.Point = void 0;
var Point = /** @class */ (function () {
    function Point(name, x, y) {
        this.name = 'O';
        this.x = 0;
        this.y = 0;
        this.name = name;
        this.x = x;
        this.y = y;
    }
    Point.prototype.getX = function () {
        return this.x;
    };
    Point.prototype.getY = function () {
        return this.y;
    };
    Point.prototype.getName = function () {
        return this.name;
    };
    Point.prototype.setX = function (x) {
        this.x = x;
    };
    Point.prototype.setY = function (y) {
        this.y = y;
    };
    Point.prototype.toString = function () {
        return "".concat(this.name, "(x:").concat(this.x, " y:").concat(this.y);
    };
    return Point;
}());
exports.Point = Point;
