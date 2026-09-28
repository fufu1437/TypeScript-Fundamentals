const n: number = Number(require('fs').readFileSync(0, 'utf-8').trim())
let sum: number = 0

for(let i = 1; i <= n; i++) {
	sum += i
}

console.log(sum)
