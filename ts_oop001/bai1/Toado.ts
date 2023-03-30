export class Toado {
    private x: number
    private y: number
    private name: string
    constructor(x: number, y: number, name: string) {
        this.x = x
        this.y = y
        this.name = name
    }
    public getX(): number{
        return this.x
    }
    public setX(x: number): void{
        this.x = x
    }
    public getY(): number{
        return this.y
    }
    public setY(y: number): void{
        this.y = y
    }
    public toString(): string {
        return `${this.name} (${this.x}, ${this.y})`
    }
}

