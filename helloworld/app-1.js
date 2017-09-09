"use strict";

import { NEMLibrary, Address, AccountHttp, NetworkTypes } from 'nem-library';
import colors from 'colors';


NEMLibrary.bootstrap(NetworkTypes.TEST_NET);
// Configure Endpoint
// Using custom NIS Node
var accountHttp = new AccountHttp([
    {   
        protocol: 'http', 
        domain: '104.128.226.60', 
        port: 7890 
    }
]);
// Using default NIS Node
var accountHttpWithDefaultConfig = new AccountHttp();

console.log("\n");
console.log(colors.green("Account Custom NIS  => "), accountHttp);
console.log("===========================================");
console.log("\n");
console.log(colors.yellow("Account using default NIS =>"), accountHttpWithDefaultConfig);
