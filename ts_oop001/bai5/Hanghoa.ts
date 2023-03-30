import { HangThucPham } from "./HangThucPham";


const hanghoa1 = new HangThucPham("tp001", "lays", 18000, new Date('2023-01-01'), new Date('2023-06-03'))
// const hanghoa2 = new HangThucPham("tp002", "poca", 12000, new Date('2023/03/05'), new Date('2023/09/03'))
// const hanghoa3 = new HangThucPham("tp003", "snacks", 10000, new Date('2023/02/10'), new Date('2023/10/10'))
console.log(hanghoa1.toString());
// console.log(hanghoa2.toString());
// console.log(hanghoa3.toString());
hanghoa1.setDonGia(15000)
hanghoa1.setNSX(new Date('2023-01-01'))
hanghoa1.setHSD(new Date('2023-03-30'))
console.log(hanghoa1.toString());
// console.log(hanghoa2.toString());
// console.log(hanghoa3.toString());