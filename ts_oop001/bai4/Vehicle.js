"use strict";
exports.__esModule = true;
exports.Vehicle = void 0;
var Vehicle = /** @class */ (function () {
    function Vehicle(chuXe, loaiXe, dungTich, triGia) {
        this.chuXe = "";
        this.loaiXe = "";
        this.dungTich = 0;
        this.triGia = 0;
        this.thue = 0;
        if (chuXe == "" || loaiXe == "") {
            console.log("nhap chuxe hoac loaixe");
            return;
        }
        if (dungTich < 0 || triGia < 0) {
            console.log("sai gia tri dung tich hoac tri gia");
            return;
        }
        this.chuXe = chuXe;
        this.loaiXe = loaiXe;
        this.dungTich = dungTich;
        this.triGia = triGia;
        this.thue = this.Thue(dungTich);
    }
    Vehicle.prototype.Thue = function (cc) {
        var v = 0;
        if (cc < 100) {
            v = this.triGia * 0.01;
        }
        if (cc >= 100 && cc <= 200) {
            v = this.triGia * 0.03;
        }
        if (cc > 200) {
            v = this.triGia * 0.05;
        }
        return v;
    };
    Vehicle.prototype.toString = function () {
        return "Ho Ten: ".concat(this.chuXe, "   loai xe: ").concat(this.loaiXe, "     dung tich: ").concat(this.dungTich, "     tri gia: ").concat(this.triGia, "     thue: ").concat(this.thue);
    };
    return Vehicle;
}());
exports.Vehicle = Vehicle;
