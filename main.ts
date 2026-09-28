const nums: number[] = require('fs').readFileSync(0, 'utf-8').trim().split(' ').map(Number)
const result: number = nums
	.filter((x) => !(x & 1) /* TODO: keep only evens */)
	.map((x) => x * x /* TODO: square it */)
	.reduce((acc, x) => acc += x/* TODO: add x to the sum */, 0)
console.log(result)
