var log = function (msg) {
    console.log(msg);
};
var msg = 'hello';
log(msg);
var a;
var b;
var c;
var d;
var e = [1, 2, 3]; //array of numbers. can initialize it (hence = through end)
var f = [1, true, 'a', false]; //not best practice
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var backgroundColor = Color.Red;
// let message
// message = 'abc'
// let endsWithC = (<string>message).endsWith('c') //assertions
// let alternativeWay = (message as string).endsWith('c')
// let drawPoint = (point: { x: number, y: number }) => {
//     //...
// }
var Point = /** @class */ (function () {
    function Point() {
    }
    Point.prototype.draw = function () {
        //...
        console.log('X: ' + this.x + ', Y: ' + this.y);
    };
    Point.prototype.getDistance = function (another) {
        //...
    };
    return Point;
}());
var point = new Point();
point.x = 1;
point.y = 2;
point.draw();
