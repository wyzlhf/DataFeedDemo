/** @type import('hardhat/config').HardhatUserConfig */
require("@nomicfoundation/hardhat-toolbox");

const account = "b627fa1dca25520b719c1dd9c6c05918e8684a8575be803e0a56451a4055e967";
const rpcUrl = "https://goerli.infura.io/v3/be0c2062b1294239a705813646553380";
module.exports = {
  solidity: "0.8.17",
  networks: {
    goerli: {
      accounts: [account], //钱包的私钥
      url: rpcUrl      //节点rpc地址
    }
  }
};
