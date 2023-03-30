"use strict";
exports.__esModule = true;
exports.HangThucPham = void 0;
var HangThucPham = /** @class */ (function () {
    function HangThucPham(mahang, tenhang, dongia, nsx, hsd) {
        var _this = this;
        this.maHang = "";
        this.tenHang = "xxx";
        this.donGia = 0;
        this.nsx = new Date();
        this.hsd = this.nsx;
        this.ghiChu = "";
        this.setDonGia = function (dongia) {
            if (dongia < 0) {
                console.log("dongia invalid");
                return;
            }
            _this.donGia = dongia;
            _this.toString();
        };
        this.setNSX = function (nsx) {
            if (nsx.getTime() > _this.hsd.getTime()) {
                console.log("nsx invalid");
                return;
            }
            _this.nsx = nsx;
            _this.toString();
        };
        this.setHSD = function (hsd) {
            if (hsd.getTime() < _this.nsx.getTime()) {
                console.log("hsd invalid");
                return;
            }
            if (hsd.getTime() < new Date().getTime()) {
                _this.ghiChu = "Hang Het Han";
            }
            _this.hsd = hsd;
            _this.toString();
        };
        this.toString = function () {
            return "Ma Hang Hoa: ".concat(_this.maHang, " Ten hang hoa: ").concat(_this.tenHang, " Don gia: ").concat(_this.donGia, " NSX: ").concat(_this.getNSX(), " HSD: ").concat(_this.getHSD(), " Ghi chu: ").concat(_this.ghiChu);
        };
        if (mahang == "") {
            console.log("mahang isn't null");
            return;
        }
        if (tenhang == "") {
            console.log("tenhang isn't null");
        }
        if (dongia < 0) {
            console.log("dongia invalid");
        }
        if (nsx.getTime() < new Date().getTime() && nsx.getTime() > hsd.getTime()) {
            console.log("nsx invalid");
        }
        if (hsd.getTime() < nsx.getTime()) {
            console.log("hsd invalid");
        }
        if (hsd.getTime() < new Date().getTime()) {
            this.ghiChu = "Hang Het Han";
        }
        this.maHang = mahang;
        this.tenHang = tenhang;
        this.donGia = dongia;
        this.nsx = nsx;
        this.hsd = hsd;
    }
    HangThucPham.prototype.getMaHang = function () {
        return this.maHang;
    };
    HangThucPham.prototype.getTenHang = function () {
        return this.tenHang;
    };
    HangThucPham.prototype.getDonGia = function () {
        return this.donGia;
    };
    HangThucPham.prototype.getNSX = function () {
        var dd = this.nsx.getDay();
        var mm = this.nsx.getMonth();
        var yyyy = this.nsx.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
    };
    HangThucPham.prototype.getHSD = function () {
        var dd = this.hsd.getDay();
        var mm = this.hsd.getMonth();
        var yyyy = this.hsd.getFullYear();
        return dd + '/' + mm + '/' + yyyy;
    };
    HangThucPham.prototype.setMaHang = function (mahang) {
        if (mahang == "") {
            console.log("mahang isn't null");
            return;
        }
        this.maHang = mahang;
        this.toString();
    };
    HangThucPham.prototype.setTenHang = function (tenhang) {
        if (tenhang == "") {
            console.log("tenhang isn't null");
            return;
        }
        this.tenHang = tenhang;
        this.toString();
    };
    return HangThucPham;
}());
exports.HangThucPham = HangThucPham;
