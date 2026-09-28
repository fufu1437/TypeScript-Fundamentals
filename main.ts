const n: number = Number(require('fs').readFileSync(0, 'utf-8').trim())

if(n % 15 === 0) {
	console.log("FizzBuzz")
}
else if(n % 5 === 0) {
	console.log("Buzz")
}
else if(n % 3 === 0) {
	console.log("Fizz")
}
