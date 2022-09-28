require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/paBMua3nS6hRboY9tsmwdiPaMz367ViE",
      accounts: [
        "4b913d3ac32ddaa264349a62eeae3b36b088e2aa635db18f4c1355ef859a9d84",
      ],
    },
  },
};

// https://eth-goerli.g.alchemy.com/v2/paBMua3nS6hRboY9tsmwdiPaMz367ViE
