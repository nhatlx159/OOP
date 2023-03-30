export class Sinhvien {
    private maSV: number = 0
    private hoTen: string = "null"
    private diemLT: number = 0.0
    private diemTH: number = 0.0

    constructor(maSV: number, hoTen: string, diemLT: number, diemTH: number) {
        if(maSV > 0 && hoTen != "" && diemLT <= 10 && diemLT >= 0 && diemTH >= 0 && diemTH <= 10){
            this.maSV = maSV;
            this.hoTen = hoTen;
            this.diemLT = diemLT;
            this.diemTH = diemTH
        } else {
            console.log("Nhap sai gia tri");
        }
    }
    getMaSV(): number {
        return this.maSV
    }
    getHoTen(): string {
        return this.hoTen
    }
    getDiemLT(): number {
        return this.diemLT
    }
    getDiemTH(): number {
        return this.diemTH
    }
    setMaSV(maSv: number): void {
        this.maSV = maSv
    }
    setHoten(hoTen: string): void {
        this.hoTen = hoTen
    }
    setDiemLT(diemLT: number): void {
        this.diemLT = diemLT
    }
    setDiemTH(diemTH: number): void {
        this.diemTH = diemTH
    }
    getDTB(): number {
        return (this.diemLT+this.diemTH)/2
    }
    toString(getDTB: number): string {
        return `${this.maSV}      ${this.hoTen}   ${this.diemLT}   ${this.diemTH}   ${getDTB}`
    }
}