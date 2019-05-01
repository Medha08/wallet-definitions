# What is a private Key?

1. In ecp256k1 Any number between 1 to 2^256-1 is a valid private key.
2. Size: A byte array of size 32 


# What is a public Key?

1. To derive public key-:

    1. private key is multiplied by G
    2. Multiplication used to derive public key is EC multiplication
    3. G is called generator point which is one of the domain parameters of EC cryptography. 
    4. G has fixed value for ecp256k1,

2. Size: A byte array of size 64 (formed from the concatenation of two positive integers

# What is an address?

1. For a given private key, pr, the Ethereum address A(pr) (a 160-bit value) is a byte array of size 20.
2. It corresponds to a given private and public key pair 
3. It is  defined as the right most 160-bits(a byte array of size 20) of the Keccak hash of the corresponding ECDSA public key.

4. To derive an address-:

    1. To generate Ethereum address, take Keccak-256 hash of public key. 
    2. Right most 20 bytes is your Ethereum address.
