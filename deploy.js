const { ethers, JsonRpcProvider } = require("ethers");
const fs = require("fs-extra")
require("dotenv").config()




async function main(){
    const provider = new ethers.providers.JsonRpcProvider(process.env.RPC_URL)
    const wallet = new ethers.Wallet(
        process.env.PRIVATE_KEY,
        provider
    );
    const abi = fs.readFileSync("./helloworld_sol_SimpleStorage.abi","utf-8");
    const binary = fs.readFileSync("./helloworld_sol_Simplestorage.bin", "utf-8");

    const contractFactory= new ethers.ContractFactory(abi , binary , wallet);
    console.log("deploying , please wait .......");
    const contract = await contractFactory.deploy()
    console.log(contract )
}
main()
   .then(() => process.exit(0) )
   .catch((error) => {
        console.error(error);
        process.exit(1)
    
   })

