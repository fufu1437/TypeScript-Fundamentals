const nums: number[] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number)

console.log(Math.max(...nums))
