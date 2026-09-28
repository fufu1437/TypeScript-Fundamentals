import * as readline from 'node:readline'

const rl = readline.createInterface({ input: process.stdin })

const buf: string[] = []

for await(const line of rl) {
	buf.push(line)
}

console.log(Number(buf[0]) + Number(buf[1]))
