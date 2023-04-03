"use strict";
exports.__esModule = true;
exports.Circle = void 0;
var Point_1 = require("./Point");
var Circle = /** @class */ (function () {
    function Circle(center, radius) {
        this.radius = 0;
        this.center = new Point_1.Point('O', 0, 0);
        this.center = center;
        this.radius = radius;
    }
    Circle.prototype.getCenter = function () {
        return this.center;
    };
    Circle.prototype.getRadius = function () {
        return this.radius;
    };
    Circle.prototype.setCenter = function (center) {
        this.center = center;
    };
    Circle.prototype.setRadius = function (radius) {
        this.radius = radius;
    };
    Circle.prototype.perimeter = function () {
        return Math.PI * 2 * this.radius;
    };
    Circle.prototype.area = function () {
        return Math.PI * Math.pow(this.radius, 2);
    };
    Circle.prototype.toString = function () {
        return "H\u00ECnh tr\u00F2n c\u00F3 t\u00E2m ".concat(this.center.toString(), " v\u1EDBi b\u00E1n k\u00EDnh ").concat(this.radius, " c\u00F3 di\u1EC7n t\u00EDch v\u00E0 chu vi l\u1EA7n l\u01B0\u1EE3t l\u00E0 ").concat(this.area(), " v\u00E0 ").concat(this.perimeter(), ".");
    };
    return Circle;
}());
exports.Circle = Circle;
