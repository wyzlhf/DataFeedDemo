const { computeAddress } = require("ethers/lib/utils");
const { ethers } = require("hardhat");  //ethers.js

async function deployContract(){
    const priceFeed = await ethers.getContractFactory("PriceFeed");
    const priceFeedContract = await priceFeed.deploy();
    await priceFeedContract.deployed();
    console.log("合约部署成功！")

    const contractAddress = await priceFeedContract.address;
    console.log("合约部署的地址为：", contractAddress );
}

deployContract().then(() => {
    process.exit(0);
}).catch(err => {
    console.error(err);
})