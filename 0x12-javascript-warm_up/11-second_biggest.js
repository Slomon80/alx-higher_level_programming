#!/usr/bin/node

function compare (a, b) { return b - a; }

if (!process.argv[2] || process.argv.length === 3) console.log('0');
else { console.log(process.argv.slice(2).sort(compare)[1]); }
