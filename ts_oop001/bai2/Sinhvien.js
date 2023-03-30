"use strict";
exports.__esModule = true;
exports.Sinhvien = void 0;
var Sinhvien = /** @class */ (function () {
    function Sinhvien(maSV, hoTen, diemLT, diemTH) {
        this.maSV = 0;
        this.hoTen = "null";
        this.diemLT = 0.0;
        this.diemTH = 0.0;
        if (maSV > 0 && hoTen != "" && diemLT <= 10 && diemLT >= 0 && diemTH >= 0 && diemTH <= 10) {
            this.maSV = maSV;
            this.hoTen = hoTen;
            this.diemLT = diemLT;
            this.diemTH = diemTH;
        }
        else {
            console.log("Nhap sai gia tri");
        }
    }
    Sinhvien.prototype.getMaSV = function () {
        return this.maSV;
    };
    Sinhvien.prototype.getHoTen = function () {
        return this.hoTen;
    };
    Sinhvien.prototype.getDiemLT = function () {
        return this.diemLT;
    };
    Sinhvien.prototype.getDiemTH = function () {
        return this.diemTH;
    };
    Sinhvien.prototype.setMaSV = function (maSv) {
        this.maSV = maSv;
    };
    Sinhvien.prototype.setHoten = function (hoTen) {
        this.hoTen = hoTen;
    };
    Sinhvien.prototype.setDiemLT = function (diemLT) {
        this.diemLT = diemLT;
    };
    Sinhvien.prototype.setDiemTH = function (diemTH) {
        this.diemTH = diemTH;
    };
    Sinhvien.prototype.getDTB = function () {
        return (this.diemLT + this.diemTH) / 2;
    };
    Sinhvien.prototype.toString = function (getDTB) {
        return "".concat(this.maSV, "      ").concat(this.hoTen, "   ").concat(this.diemLT, "   ").concat(this.diemTH, "   ").concat(getDTB);
    };
    return Sinhvien;
}());
exports.Sinhvien = Sinhvien;
