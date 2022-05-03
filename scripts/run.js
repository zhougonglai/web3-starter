const main = async () => {
  const Counter = await hre.ethers.getContractFactory('Counter');
  const counter = await Counter.deploy();
  await counter.deployed();

  console.log(`deployed on ${counter.address}`);
}


main()
.then(() => {
  console.log('process');
  process.exit(0);
})
.catch(err => {
  console.error(err)
  process.exit(1);
})
