// TODO 1: declare `type Status` as the union of the four status strings.

// TODO 2: write `function describe(s: Status): string` — switch on s and
//         return the message that belongs to each status.

const readline = require("readline")
const rl = readline.createInterface({ input: process.stdin })
rl.on("line", (line: string) => {
	const valid = ['idle', 'loading', 'ready', 'error'] as const
	const isStatus: boolean = valid.includes(line as any)
	// TODO 3: when isStatus is true, print what describe returns for this
	//         line (assert it with `line as Status`); otherwise print 'unknown'.
	if(isStatus) {
		switch(line) {
			case 'idle':
				console.log("waiting")
				break
			case 'loading':
				console.log("please wait")
				break
			case 'ready':
				console.log("done")
				break
			case 'error':
				console.log("try again")
				break
		}
	}
	else {
		console.log("unknown")
	}
	rl.close()
})
rl.on("close", () => process.exit(0))
