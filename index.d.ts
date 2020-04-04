declare module "random-location" {
    interface Point {
        latitude: number,
        longitude: number
    }

    function randomCirclePoint(centerPoint: Point, radius: number, randomFn?: (...args: any[]) => number): Point;
    function randomCircumferencePoint(centerPoint: Point, radius: number, randomFn?: (...args: any[]) => number): Point;
}
