const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("JoyBoyToken", function () {

  let advancedToken;
  let owner;
  let user;
  const initialSupply = 1000000;
  const maxSupply = 2000000;

  before(async function () {
    [owner , user] = await ethers.getSigners();
    const AdvancedToken = await ethers.getContractFactory("JoyBoyToken");
    advancedToken = await AdvancedToken.deploy();
  });

  it('Should mint tokens correctly', async function () {
    await advancedToken.mint(owner.address , 100);
    expect(await advancedToken.balanceOf(owner.address)).to.equal(initialSupply + 100);
  });

  it('Should not mint beyond maximum supply', async () => {
    await expect(advancedToken.connect(owner).mint(owner.address , 2000001)).to.be.revertedWith('Exceeds maximum supply limit');
  });

  it("Should allow users to burn their tokens", async () => {
    const burnAmount = 500;
    await advancedToken.mint(user.address , 1000);
    await advancedToken.connect(user).burn(500);
    expect(await advancedToken.balanceOf(user.address)).to.equal(1000 - burnAmount)
    expect(await advancedToken.maxSupply()).to.equal(maxSupply - burnAmount);
  });

  it('Should lock and unlock tokens', async () => {
    await advancedToken.mint(user.address, 1000);
    expect(await advancedToken.connect(user).isTokensLocked(user.address)).to.be.false;
    await advancedToken.lockTokens(user.address, 2); 
    expect(await advancedToken.connect(user).isTokensLocked(user.address)).to.be.true;  
    await ethers.provider.send('evm_increaseTime', [2]); 
    await ethers.provider.send('evm_mine');
    expect(await advancedToken.connect(user).isTokensLocked(user.address)).to.be.false;
  });

  it('Should prevent transfer of locked tokens', async () => {
    await advancedToken.mint(user.address, 1000);
    await advancedToken.connect(owner).lockTokens(user.address, 5);
    await expect(advancedToken.transfer(user.address, 500)).to.be.revertedWith('Tokens are locked');
  });
  
});




