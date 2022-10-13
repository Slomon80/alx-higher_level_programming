#!/usr/bin/node

const firstArgSize = Math.floor(process.argv[2]);

if (!firstArgSize) console.log('Missing size');

for (let i = 0; i < firstArgSize; i++) {
  console.log('x'.repeat(firstArgSize));
}
