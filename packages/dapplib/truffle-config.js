require('@babel/register');
({
    ignore: /node_modules/
});
require('@babel/polyfill');

const HDWalletProvider = require('@truffle/hdwallet-provider');

let mnemonic = 'jazz enter boil food trap reward stereo pulp hunt private slot gift'; 
let testAccounts = [
"0x60527ac3d422defe44c12c2aecb01ec5a96641644af622cefef2b97edb9288db",
"0x776d015dc8e7f2d42f573a8f3ad66794b0fa568662c13b6d01565a15c06779e1",
"0xa987d7e14332f976eb73af501ab23ca7dac35c0371cdb3586db546931fefd9f6",
"0x53f9a549e747dfd0e394433fb1ca68700fd3b4501a3916092baffecde90a4515",
"0x8b05152b5dca574ee5735987e869b5dbc8639c25642cedc8c5ed877d7c8bbdf1",
"0xcd2cbf1b4889028005b5bfa5f40a20c3bbef3503582acc0f67cbb93a81d5a9fb",
"0xf11d1baf15ecdc4c2be98cc36482db98e604145276bf0b4e7da587b5ceb60a11",
"0x8774d6369473c03767a04d276009f4a9ab1f6a7e91766c3c92f4b97dc510bf65",
"0x783a6bcaf85b1792733e9ef45d1738bb866984eaeb986b337d917c261969c6b3",
"0xe4c36878480da331000c0540a8455d8b83a8630840fa50511718f36a1adc9c12"
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

