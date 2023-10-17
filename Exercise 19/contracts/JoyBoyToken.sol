// SPDX-License-Identifier: MIT

pragma solidity ^0.8.4;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract JoyBoyToken is ERC20 {

    address public owner;
    uint256 public maxSupply;
    
    mapping(address => uint256) public lockedUntil;

    event TokensLocked(address indexed user, uint256 unlockTimestamp);

    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    modifier tokensUnlocked(address user) { 
        require(lockedUntil[user] <= block.timestamp, "Tokens are locked");
        _;
    }

    constructor() ERC20("JoyBoyToken", "JOYBOY"){
        _mint(msg.sender, 1000000);
        maxSupply = 2000000;
        owner = msg.sender;
    }

    function mint(address to, uint256 amount) public onlyOwner {
        require(totalSupply() + amount <= maxSupply, "Exceeds maximum supply limit");
        _mint(to, amount);
    }

    //correct burn function which will not burn tokens when locked 
    // function burn(uint256 amount) public {
    //     require(balanceOf(msg.sender) >= amount, "Not enough tokens");
    //     require(lockedUntil[msg.sender] <= block.timestamp, "Tokens are locked");
    //     _burn(msg.sender, amount);
    //     maxSupply -= amount;
    // }

    
    //incorrect burn fuction which will burn tokens when locked
    function burn(uint256 amount) public {
        require(balanceOf(msg.sender) >= amount, "Not enough tokens");
        _burn(msg.sender, amount);
        maxSupply -= amount;
    }
    
    function lockTokens(address user, uint256 duration) public onlyOwner {
        require(balanceOf(user) > 0, "No tokens to lock");
        lockedUntil[user] = block.timestamp + duration;
        emit TokensLocked(user, lockedUntil[user] );
    }

    function isTokensLocked(address user) public view returns (bool) {
        return lockedUntil[user] > block.timestamp;
    }
    
}
