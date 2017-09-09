// import { NEMLibrary, NetworkTypes } from "nem-library";
import { NEMLibrary, NetworkTypes, AccountHttp, ServerConfig, Protocol} from "nem-library";
/**

Your application can have two modes, NetworkTypes.TEST_NET and NetworkTypes.MAIN_NET. Depending on the environment that you want to use, you should call the bootstrap method, with MAIN_NET or TEST_NET.

Because the application should have a unique environment, call two times NEMLibrary.bootstrap(_) will throw an Error. In case that you need to change between environments in runtime, call NEMLibrary.reset() first.

**/
NEMLibrary.bootstrap(NetworkTypes.TEST_NET);

// Configure Endpoint


// Using custom NIS Node

const accountHttp = new AccountHttp(
   [{ protocol: 'http', domain: '192.3.61.243', port: 7890 }]
);

// Using default NIS Node
const accountHttpWithDefaultConfig = new AccountHttp();

console.log("Account Custom NIS  => ", accountHttp);
console.log("===========================================");
console.log("\n\n");
console.log("Account using default NIS =>", accountHttpWithDefaultConfig);


