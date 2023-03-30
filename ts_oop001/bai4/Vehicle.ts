export class Vehicle {
    private chuXe: string = "";
    private loaiXe: string = "";
    private dungTich: number = 0;
    private triGia: number = 0;
    private thue: number = 0;
    constructor(chuXe: string, loaiXe: string, dungTich: number, triGia: number) {
        if (chuXe == "" || loaiXe == "") {
            console.log("nhap chuxe hoac loaixe");
            return
        }
        if (dungTich < 0 || triGia < 0) {
            console.log("sai gia tri dung tich hoac tri gia");
            return
        }
        this.chuXe = chuXe
        this.loaiXe = loaiXe
        this.dungTich = dungTich
        this.triGia = triGia
        this.thue = this.Thue(dungTich)
    }
    public Thue(cc: number): number {
        let v = 0
        if (cc < 100) {
            v = this.triGia * 0.01
        }
        if (cc >= 100 && cc <= 200) {
            v = this.triGia * 0.03
        }
        if (cc > 200) {
            v = this.triGia * 0.05
        }
        return v
    }
    public toString(): string {
        return `Ho Ten: ${this.chuXe}   loai xe: ${this.loaiXe}     dung tich: ${this.dungTich}     tri gia: ${this.triGia}     thue: ${this.thue}`
    }
}