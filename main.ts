const lines: string[] = require('fs').readFileSync(0, 'utf-8').trim().split('\n')

let buf: number = 0

for(const v of lines) {
	buf += Number(v)
}

console.log(Math.floor(buf / 3))
