"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
var Person_1 = require("./Person");
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(firstName, lastName, jobTitleId) {
        var _this = _super.call(this, firstName, lastName) || this;
        _this.jobTitleId = jobTitleId;
        return _this;
    }
    // public print1(): string {
    //     return "this is string"
    // }
    Teacher.prototype.printTitle = function () {
        console.log(_super.prototype.printName.call(this), "Job Title Id: ", this.jobTitleId);
    };
    return Teacher;
}(Person_1.Person));
var teacher1 = new Teacher("Phuong", "Nam", 12);
teacher1.printTitle();
