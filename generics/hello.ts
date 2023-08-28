const numbers: Array<number> = [
    100,
    200,
    300,
    400
]
const countries: Array<string> = [
    'India',
    'Australia',
    'China',
    'Japan',
    'Germany'
]
function findLength<T>(myData: T[]): number {
    return myData.length
}
const r1 = findLength(numbers)
const r2 = findLength(countries)
console.log(r1, r2)


