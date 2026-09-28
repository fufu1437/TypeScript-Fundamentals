const words: string[] = require('fs').readFileSync(0, 'utf-8').trim().split(' ')
const seen: Set<string> = new Set()

words.forEach((v, _) => {
	seen.add(v)
})

console.log(seen.size)
