#!/usr/bin/node

const firstArgLength = Math.floor(process.argv[2]);

if (!firstArgLength) console.log('Missing number of occurrences');

for (let i = 0; i < firstArgLength; i++) console.log('C is fun');
