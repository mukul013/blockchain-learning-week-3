
async function main(){

  const [deployer] = await ethers.getSigners()

  console.log("Deploying contracts with the account:" , deployer.address)

  const token = await ethers.deployContract("JoyBoyToken");
  
  console.log("Token Address : " , await token.getAddress())


}

main().then(() => process.exit(0)).catch((error) => {
    console.error(error);
    process.exit(1);
});