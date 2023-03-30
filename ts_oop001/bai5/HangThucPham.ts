export class HangThucPham {
    private maHang: string = ""
    private tenHang: string = "xxx"
    private donGia: number = 0
    private nsx: Date = new Date()
    private hsd: Date = this.nsx
    private ghiChu: string = ""
    constructor(mahang: string, tenhang: string, dongia: number, nsx: Date, hsd: Date) {
        if (mahang == "") {
            console.log("mahang isn't null");
            return
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
        if(hsd.getTime() < new Date().getTime()){
            this.ghiChu = "Hang Het Han"
        }
        this.maHang = mahang
        this.tenHang = tenhang
        this.donGia = dongia
        this.nsx = nsx
        this.hsd = hsd
    }
    public getMaHang(): string {
        return this.maHang
    }
    public getTenHang(): string {
        return this.tenHang
    }
    public getDonGia(): number {
        return this.donGia
    }
    public getNSX(): string {
        let dd = this.nsx.getDay()
        let mm = this.nsx.getMonth()
        const yyyy = this.nsx.getFullYear()
        return dd + '/' + mm + '/' + yyyy
    }
    public getHSD(): string {
        const dd = this.hsd.getDay()
        const mm = this.hsd.getMonth()
        const yyyy = this.hsd.getFullYear()
        return dd + '/' + mm + '/' + yyyy
    }
    public setMaHang(mahang: string): void {
        if (mahang == "") {
            console.log("mahang isn't null");
            return
        }
        this.maHang = mahang
        this.toString()
    }
    public setTenHang(tenhang: string): void {
        if (tenhang == "") {
            console.log("tenhang isn't null");
            return
        }
        this.tenHang = tenhang
        this.toString()
    }
    public setDonGia = (dongia: number): void => {
        if (dongia < 0) {
            console.log("dongia invalid");
            return
        }
        this.donGia = dongia
        this.toString()
    }
    public setNSX = (nsx: Date): void => {
        if (nsx.getTime() > this.hsd.getTime()) {
            console.log("nsx invalid");
            return
        }
        this.nsx = nsx
        this.toString()
    }
    public setHSD = (hsd: Date): void => {
        if (hsd.getTime() < this.nsx.getTime()) {
            console.log("hsd invalid");
            return
        }
        if(hsd.getTime() < new Date().getTime()){
            this.ghiChu = "Hang Het Han"
        }
        this.hsd = hsd
        this.toString()
    }
    public toString = (): string => {
        return `Ma Hang Hoa: ${this.maHang} Ten hang hoa: ${this.tenHang} Don gia: ${this.donGia} NSX: ${this.getNSX()} HSD: ${this.getHSD()} Ghi chu: ${this.ghiChu}`
    }
}


