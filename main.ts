import * as readline from 'readline'
async function main() {

	const rl = readline.createInterface({ input: process.stdin })

	const buf: string[] = []

	for await(const line of rl) {
		buf.push(line)
	}
	console.log(Number(buf[0]) + Number(buf[1]))
}

main()
