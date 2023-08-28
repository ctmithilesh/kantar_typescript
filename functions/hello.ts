// a function with number as return type
function addNumber(x: number, y: number): number {
    return x + y
}
const result: number = addNumber(200, 200)
console.log(result)


// function with string as return type
function makeupperCase(y: string): string {
    return y.toUpperCase()
}
const r2: string = makeupperCase('hello')
console.log(r2)