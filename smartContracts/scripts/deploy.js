const hre = require("hardhat");

async function main() {
  // const currentTimestampInSeconds = Math.round(Date.now() / 1000);
  // const ONE_YEAR_IN_SECS = 365 * 24 * 60 * 60;
  // const unlockTime = currentTimestampInSeconds + ONE_YEAR_IN_SECS;
  // const lockedAmount = hre.ethers.utils.parseEther("1");

  const Transcations = await hre.ethers.getContractFactory("Transcation");
  const transcations = await Transcations.deploy();

  await transcations.deployed();

  console.log(`Deployed to ${transcations.address}`);
}

const runMain = async () => {
  try {
    await main();
    process.exit(0);
  } catch (error) {
    console.log({ error });
    process.exit(1);
  }
};

runMain();
