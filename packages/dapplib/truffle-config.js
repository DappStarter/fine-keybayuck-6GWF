require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'grid enter off food rent royal maze connect install brave slot ghost'; 
let testAccounts = [
"0xcebeeb76045d39e652892703fd78d920f875a08002e2e9fd666d0e1c04588e7f",
"0xe7298d7fb8eb26d10065c9c8e9b6961a3ce9bac1237f21eff9829a47632ce18f",
"0xa12abf22cfe0c8ee99e594ec21c459af43f25d1400f105da4fcb786ae9b54021",
"0x62039afd028067bf1fea7a93a11bb8143df8e8c58eec6cf9261ec5be76f2dacb",
"0x5d8e1bf491385e49471ce0287ed5e9901585b1d3e49d4feca323edeeed2192a8",
"0xc5b61f79601a9d8d057acae6e90aa692db090ce5ccd952d19dcdcdaa94aa3cfb",
"0x2a4d8b020246a93be5a197c09c233b30c1eaeb22774c170a0314316b417d9c25",
"0x8aa20d7e84e359df4ee50fb2f75f729b4461ac6e271cc8790fe612990a337483",
"0x14e6c18d5f1d23396c1c0041a273681fc43393305c93cc3afc00a2a7e01b069e",
"0x9a64922f7d7db0dacd62d24ae767b491fdef80e1e10f21247bef2fa4fba78d4b"
]; 
let devUri = 'http://127.0.0.1:7545/';

module.exports = {
    testAccounts,
    mnemonic,
    networks: {
        development: {
            uri: devUri,
            provider: () => new HDWalletProvider(
                mnemonic,
                devUri, // provider url
                0, // address index
                10, // number of addresses
                true, // share nonce
                `m/44'/60'/0'/0/` // wallet HD path
            ),
            network_id: '*'
        }
    },
    compilers: {
        solc: {
            version: '^0.8.0'
        }
    }
};

