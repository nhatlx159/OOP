import { Point } from "./Point";

export class Circle {
    private radius: number = 0
    private center: Point = new Point('O', 0, 0)
    constructor(center: Point, radius: number) {
        this.center = center
        this.radius = radius
    }
    public getCenter(): Point {
        return this.center
    }
    public getRadius(): number {
        return this.radius
    }
    public setCenter(center: Point): void {
        this.center = center
    }
    public setRadius(radius: number): void {
        this.radius = radius
    }
    public perimeter(): number {
        return Math.PI * 2 * this.radius
    }
    public area(): number {
        return Math.PI * Math.pow(this.radius, 2)
    }
    public toString(): string {
        return `Hình tròn có tâm ${this.center.toString()} với bán kính ${this.radius} có diện tích và chu vi lần lượt là ${this.area()} và ${this.perimeter()}.`
    }
}