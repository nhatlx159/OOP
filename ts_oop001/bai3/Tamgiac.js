var Tamgiac = /** @class */ (function () {
    function Tamgiac(ma, mb, mc) {
        this.ma = 0;
        this.mb = 0;
        this.mc = 0;
        this.checkTriangle(ma, mb, mc);
    }
    Tamgiac.prototype.checkTriangle = function (ma, mb, mc) {
        if (ma + mb <= mc) {
            console.log("is not triangle");
            return;
        }
        if (mb + mc <= ma) {
            console.log("is not triangle");
            return;
        }
        if (mc + ma <= mb) {
            console.log("is not triangle");
            return;
        }
        this.ma = ma;
        this.mb = mb;
        this.mc = mc;
        if (ma == mb && ma == mc && mb == mc) {
            console.log("is equilateral triangle");
            return;
        }
        if (ma * ma + mb * mb == mc * mc && ma == mb || mc * mc + ma * ma == mb * mb && mc == ma || mb * mb + mc * mc == ma * ma && mb == mc) {
            console.log("is triangle right angle");
            return;
        }
        if (ma == mc && ma == mb || mb == mc && mb == ma || mc == ma && mc == mb) {
            console.log("is isosceles triangle");
            return;
        }
        console.log("is triangle");
    };
    Tamgiac.prototype.setMA = function (v) {
        this.checkTriangle(v, this.mb, this.mc);
    };
    Tamgiac.prototype.setMB = function (v) {
        this.checkTriangle(this.ma, v, this.mc);
    };
    Tamgiac.prototype.setMC = function (v) {
        this.checkTriangle(this.ma, this.mb, v);
    };
    Tamgiac.prototype.getMA = function () {
        return this.ma;
    };
    Tamgiac.prototype.getMB = function () {
        return this.mb;
    };
    Tamgiac.prototype.getMC = function () {
        return this.mc;
    };
    Tamgiac.prototype.perimeter = function () {
        return this.ma + this.mb + this.mc;
    };
    Tamgiac.prototype.acreage = function () {
        var p = (this.perimeter()) / 2;
        var S = Math.sqrt(p * (p - this.ma) * (p - this.mb) * (p - this.mc));
        return S;
    };
    return Tamgiac;
}());
var tamgiac1 = new Tamgiac(1, 1, 2);
console.log("chu vi: ", tamgiac1.perimeter());
console.log("dien tich: ", tamgiac1.acreage());
tamgiac1.setMC(Math.sqrt(2));
console.log("chu vi: ", tamgiac1.perimeter());
console.log("dien tich: ", tamgiac1.acreage());
