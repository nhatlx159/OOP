import { Account } from "./Account";

const acc1 = new Account("Ted Murphy", 72354, 102000)
const acc2 = new Account("Jane Smith", 69713, 400000)
const acc3 = new Account("Edward Demsey", 93757, 753200)
console.log(acc1.toString());
console.log(acc2.toString());
console.log(acc3.toString());
acc1.deposit(40000)
acc2.deposit(100000)
console.log(acc1.toString());
console.log(acc2.toString());
console.log(acc3.toString());
acc2.withDraw(430000, 12000)
console.log(acc1.toString());
console.log(acc2.toString());
console.log(acc3.toString());
acc3.addInterest()
console.log(acc1.toString());
console.log(acc2.toString());
console.log(acc3.toString());
