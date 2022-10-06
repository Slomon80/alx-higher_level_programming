#!/usr/bin/node
const firstNum = Math.floor(process.argv[2]);
console.log(!firstNum ? 'Not a number' : 'My number: ' + firstNum);
