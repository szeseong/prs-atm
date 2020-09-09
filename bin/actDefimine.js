'use strict';

global.chainConfig.serviceDefiPricesSubmit = true;

const { defi } = require('sushitrain');

const func = async (argv) => {
    await defi.initSubmit(argv.account, argv.pubkey, argv.pvtkey);
};

module.exports = {
    pubkey: true,
    pvtkey: true,
    func,
    name: 'Launch a DeFi Miner Daemon (beta)',
    help: [
        '    --account  PRESS.one account                 [STRING  / REQUIRED]',
        '    --keystore Path to the keystore JSON file    [STRING  / OPTIONAL]',
        '    --password Use to decrypt the keystore       [STRING  / OPTIONAL]',
        '    --pubkey   PRESS.one public key              [STRING  / OPTIONAL]',
        '    --pvtkey   PRESS.one private key             [STRING  / OPTIONAL]',
        '    ┌---------------------------------------------------------------┐',
        '    | 1. `keystore` (recommend) or `pub/pvt key` must be provided.  |',
        '    └---------------------------------------------------------------┘',
        '',
        '    > Example:',
        '    $ prs-atm defimine --account=ABCDE --keystore=keystore.json',
    ],
};