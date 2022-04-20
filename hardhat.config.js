require("@nomiclabs/hardhat-waffle");

module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://rinkeby.infura.io/v3/397a9e880bdb44d3aa8f8f0160a4f0b1",
      accounts: ["38d94061a68d54a8d9547019d4a22f5d8575e2360bf283c189d68d667fe14f6e"]
    },
  },
  
  paths: {
    artifacts: "./src/backend/artifacts",
    sources: "./src/backend/contracts",
    cache: "./src/backend/cache",
    tests: "./src/backend/test"
  },
};
