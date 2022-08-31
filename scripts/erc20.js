const main = async () => {
  const ERC20ContractFactory = await hre.ethers.getContractFactory('EtherWallet');
  const ERC20Contract = await ERC20ContractFactory.deploy('JiaSu', 'ZGL');
  await ERC20Contract.deployed();
  console.log("Contract deployed to:", ERC20Contract.address);
};


main()
.then(() => {
  process.exit(0);
}).catch((err) => {
  console.log(error);
  process.exit(1);
})
