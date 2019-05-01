// In ecp256k1 Any number between 1 to 2^256-1 is a valid private key .
//Ethereum key generation is based on elliptical curve ecp256k1

var privateKey = Buffer.alloc(32,0);
privateKey[31] = 1;
console.log("PK::"+privateKey.toString('hex'))
