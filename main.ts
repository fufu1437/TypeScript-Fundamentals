// // TODO 1: declare `type Shape` as a discriminated union with two variants:
// //         a circle (kind 'circle', numeric radius) and a square
// //         (kind 'square', numeric side).

// // TODO 2: write `function area(s: Shape): number` that switches on s.kind
// //         and returns the area of each variant. Math.PI is built in.

// const readline = require("readline")
// const rl = readline.createInterface({ input: process.stdin })
// const lines: string[] = []
// let expected = -1

// rl.on("line", (line: string) => {
// 	if(expected === -1) {
// 		expected = parseInt(line)
// 		if(expected === 0) rl.close()
// 		return
// 	}
// 	lines.push(line)
// 	if(lines.length === expected) {
// 		for(const l of lines) {
// 			const [letter, value] = l.split(' ')
// 			const n = parseFloat(value as string)
// 			// TODO 3: build the Shape this line describes ('c' means circle,
// 			//         's' means square) and print its area to two decimals.
// 			if(letter === 'c') {
// 				console.log((Math.PI * (n * n)).toFixed(2))
// 			}
// 			else {
// 				console.log((n * n).toFixed(2))
// 			}
// 		}
// 		rl.close()
// 	}
// })
// rl.on("close", () => process.exit(0))


console.log(`union: type
merging: interface
recursive: both
class implements: interface
`)
