// SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@chainlink/contracts/src/v0.8/interfaces/AggregatorV3Interface.sol";

contract PriceFeed {
    
    // BTC/ETH
    AggregatorV3Interface internal priceFeedBE;
    // BTC/USD
    AggregatorV3Interface internal priceFeedBU;
    
    constructor(){
        priceFeedBE = AggregatorV3Interface(0x779877A7B0D9E8603169DdbD7836e478b4624789);
        priceFeedBU = AggregatorV3Interface(0xA39434A63A52E749F02807ae27335515BA4b07F7);
    }
    
    /**priceFeed.latestRoundData()返回值为5个数据：
        uint80 internal roundId：第几轮，因为价格的更新是一轮一轮地（数据是轮询Feed给预言机的）
        int256 internal answer：真正的价格数据，就是我们需要的内容
        uint256 internal startedAt：这一轮价格的开始时间
        uint256 internal updatedAt：这一轮价格的开始结束时间
        uint80 internal answeredInRound：我们得到的价格的roundId，这里肯定是和第一个roundId相等的；
    **/
    function getBEPrice() public view returns (int256){
        (
        ,
        int256 answer,
        ,
        ,
        ) = priceFeedBE.latestRoundData();
        return answer;
    }
    
    function getBUPrice() public view returns (int256){
        (
        ,
        int256 answer,
        ,
        ,
        ) = priceFeedBU.latestRoundData();
        return answer;
    }
}