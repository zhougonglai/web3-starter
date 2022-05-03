const main = async () => {
  const domainContractFactory = await hre.ethers.getContractFactory("Domains");
  // We pass in "programwithyt" to the constructor when deploying
  const domainContract = await domainContractFactory.deploy("ZGL");
  await domainContract.deployed();

  console.log("Contract deployed to:", domainContract.address);

  // We're passing in a second variable - value. This is the moneyyyyyyyyyy
  let txn = await domainContract.register("ZhouGongLai", {
    value: hre.ethers.utils.parseEther("0.1")
  });
  await txn.wait();

  const address = await domainContract.getAddress("ZhouGongLai");
  console.log("My address:", address);

  const balance = await hre.ethers.provider.getBalance(domainContract.address);
  console.log("Contract balance:", hre.ethers.utils.formatEther(balance));
};

main()
.then(() => {
  console.log("Done!");
  process.exit(0)
})
.catch(err => {
  console.log(err);
  process.exit(1);
})
