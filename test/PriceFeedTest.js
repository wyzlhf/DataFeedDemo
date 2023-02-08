const { ethers } = require("hardhat");  //ethers.js
const { expect } = require("chai");  //javascript的测试框架

const chai =  require("chai");
const BN = require("bn.js");
chai.use(require('chai-bn')(BN));

describe("PriceFeed Demo Test", function(){
    it("check if return price > 0", async function(){
        //部署合约
        const priceFeed = await ethers.getContractFactory("PriceFeed");
        const priceFeedContract = await priceFeed.deploy();
        await priceFeedContract.deployed();
        console.log("the contract is deployed successed!")

        // 因为返回值不是字符串，所以需要工具转换一下
        const resultBE = await priceFeedContract.getBEPrice();
        const resultBU = await priceFeedContract.getBUPrice();
        const resultStrBE = new ethers.BigNumber.from(resultBE).toString();
        const resultStrBU = new ethers.BigNumber.from(resultBU).toString();
        console.log("the resturn price is", resultStrBE);
        console.log("the resturn price is", resultStrBU);

        // 断言
        expect(resultStrBE).to.be.bignumber.greaterThan("0");
        expect(resultStrBU).to.be.bignumber.greaterThan("0");
    })
})