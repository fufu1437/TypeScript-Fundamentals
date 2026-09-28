const lines: string[] = require('fs').readFileSync(0, 'utf-8').trim().split('\n')


console.log(`Hi, ${lines[0]}! You are ${lines[1]} years old.`)
