var EC = require('elliptic').ec;
var BN = require('bn.js');
var ec = new EC('secp256k1');

var G = ec.g; // Generator point
console.log("G",G);
var pk = new BN('1'); // private key as big number
console.log("pk",pk);
var pubPoint=G.mul(pk); // EC multiplication to determine public point 
console.log("pubPoint",pubPoint)

var x = pubPoint.getX().toBuffer(); //32 bit x co-ordinate of public point 
var y = pubPoint.getY().toBuffer(); //32 bit y co-ordinate of public point 

var publicKey =Buffer.concat([x,y])
console.log("publicKey",publicKey);

console.log("pub key::"+publicKey.toString('hex'))