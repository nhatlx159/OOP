class Tamgiac {
    private ma: number = 0
    private mb: number = 0
    private mc: number = 0
    constructor(ma: number, mb: number, mc: number) {
        this.checkTriangle(ma, mb, mc)
    }
    checkTriangle(ma: number, mb: number, mc: number): void {
        if(ma+mb<=mc){
            console.log("is not triangle");
            return
        }
        if(mb+mc<=ma){
            console.log("is not triangle");
            return
        }
        if(mc+ma<=mb){
            console.log("is not triangle");
            return
        }
        this.ma = ma
        this.mb = mb
        this.mc = mc
        if(ma==mb && ma==mc && mb==mc){
            console.log("is equilateral triangle");
            return
        }
        if(ma*ma+mb*mb==mc*mc && ma==mb || mc*mc+ma*ma==mb*mb && mc==ma || mb*mb+mc*mc==ma*ma && mb==mc){
            console.log("is triangle right angle");
            return
        }
        if(ma==mc && ma==mb || mb==mc && mb == ma || mc==ma && mc==mb){
            console.log("is isosceles triangle");
            return
        }
        console.log("is triangle");
    }
    
    public setMA(v : number) {
        this.checkTriangle(v, this.mb, this.mc)
        
    }
    
    public setMB(v : number) {
        this.checkTriangle(this.ma, v, this.mc)
    }
    
    public setMC(v : number) {
        this.checkTriangle(this.ma, this.mb, v)
    }
    
    public getMA() : number {
        return this.ma
    }
    
    public getMB() : number {
        return this.mb  
    }
    
    public getMC() : number {
        return this.mc
    }
    public perimeter(): number {
        return this.ma+this.mb+this.mc
    }
    public acreage(): number {
        const p = (this.perimeter())/2
        const S = Math.sqrt(p*(p-this.ma)*(p-this.mb)*(p-this.mc))
        return S
    }
    public currentValue(ma: number, mb : number, mc :number): number[] {
        const cValues:number[] = [];
        cValues[0] = ma;
        cValues[1] = mb;
        cValues[2] = mc
        return cValues
    }

}
const tamgiac1 = new Tamgiac(1, 1, 2)
console.log("chu vi: ", tamgiac1.perimeter());
console.log("dien tich: ", tamgiac1.acreage());
