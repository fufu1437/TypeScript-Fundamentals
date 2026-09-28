const word: string = require('fs').readFileSync(0, 'utf-8').trim()

console.log(word.split('').reverse().join(''))

