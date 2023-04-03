export class Point {
    private name: string = 'O'
    private x: number = 0
    private y: number = 0
    constructor(name: string, x: number, y: number) {
        this.name = name
        this.x = x
        this.y = y
    }
    public getX(): number {
        return this.x
    }
    public getY(): number {
        return this.y
    }
    public getName(): string {
        return this.name
    }
    public setX(x: number): void {
        this.x = x
    }
    public setY(y: number): void {
        this.y = y
    }
    public toString(): string {
        return `${this.name}(x:${this.x} y:${this.y}`
    }
}