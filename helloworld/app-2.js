"use strict";
import {NEMLibrary, Address, AccountHttp, NetworkTypes} from 'nem-library';

// Initialize NEMLibrary for TEST_NET Network
// NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
NEMLibrary.bootstrap(NetworkTypes.MAIN_NET);

const address = new Address("TALICE-ROONSJ-CPHC63-F52V6F-Y3SDMS-VAEUGH-MB7C");

const accountHttp = new AccountHttp();
accountHttp.getFromAddress(address).subscribe(accountInfoWithMetaData => {
    console.log(accountInfoWithMetaData);
});