import { Sinhvien } from "./Sinhvien";

const sv1 = new Sinhvien(1, "Nguyen Van A", 9.2, 6.0)
const sv2 = new Sinhvien(2, "Nguyen Van B", 7.2, 7.0)
const sv3 = new Sinhvien(3, "Nguyen Van B", 5.2, 8.0)

console.log(`MaSv   HoTen         DiemLT DiemTH DiemTB`);
console.log(sv1.toString(sv1.getDTB()));
console.log(sv2.toString(sv2.getDTB()));
console.log(sv3.toString(sv3.getDTB()));


