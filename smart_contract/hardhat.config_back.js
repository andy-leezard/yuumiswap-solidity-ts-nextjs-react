require("@nomiclabs/hardhat-waffle")

/**
 * @type import('hardhat/config').HardhatUserConfig
 */
module.exports = {
  solidity: "0.8.4",
  networks: {
    rinkeby: {
      url: "https://eth-rinkeby.alchemyapi.io/v2/ibkgexS95zJWkYiFxIlNutkGP4xmILdr", //ETH-RINKEBY Alchemy API
      accounts: ["REDACTED"], // Wallet Private Key
    },
  },
}