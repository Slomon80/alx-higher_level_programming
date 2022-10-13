#!/usr/bin/node

function add (a, b) {
  console.log(Math.floor(a) + Math.floor(b));
}
add(Math.floor(process.argv[2]), Math.floor(process.argv[3]));
