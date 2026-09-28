const n: number = Number(require('fs').readFileSync(0, 'utf-8').trim())
// let sum: number = 0

function square(n: number): number {
	return n * n
}

console.log(square(n))
