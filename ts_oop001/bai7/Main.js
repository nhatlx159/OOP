"use strict";
exports.__esModule = true;
var Circle_1 = require("./Circle");
var Point_1 = require("./Point");
var point1 = new Point_1.Point('O', 5, 5);
var hinhtron1 = new Circle_1.Circle(point1, 10.5);
console.log(hinhtron1.toString());
