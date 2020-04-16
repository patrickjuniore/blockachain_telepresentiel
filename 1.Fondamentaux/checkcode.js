let crypto = require('crypto');
let hash = crypto.createHash('sha256');
hash.update('toto');
let bin = hash.digest('bin');
//console.log(bin)
const buf = Buffer.from(bin.buffer);
//console.log(buf[1])
let i = 0;
do {
  i += 1;
  console.log(console.log(buf[i]));
} while (i < 4);
