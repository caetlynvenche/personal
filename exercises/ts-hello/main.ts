import { Point } from './point'

const log = (msg) => {
    console.log(msg)
}

let msg = 'hello'

log(msg)

let a: number
let b: boolean
let c: string
let d: any
let e: number[] = [1, 2, 3] //array of numbers. can initialize it (hence = through end)
let f: any[] = [1, true, 'a', false] //not best practice

enum Color { Red = 0, Green = 1, Blue = 2 }
let backgroundColor = Color.Red

// let message
// message = 'abc'
// let endsWithC = (<string>message).endsWith('c') //assertions
// let alternativeWay = (message as string).endsWith('c')

// let drawPoint = (point: { x: number, y: number }) => {
//     //...
// }



let point = new Point(1, 2)
let x = point.x
point.x = 10
point.draw()