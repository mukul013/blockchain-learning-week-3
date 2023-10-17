const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("JoyBoyToken", function () {

  let advancedToken;
  let owner;
  let user;

  before(async function () {
    [owner , user] = await ethers.getSigners();
    const AdvancedToken = await ethers.getContractFactory("JoyBoyToken");
    advancedToken = await AdvancedToken.deploy();
  });

  it('Should prevent burning locked tokens', async () => {
    await advancedToken.mint(user.address, 1000);
    await advancedToken.lockTokens(user.address, 2);
    expect(await advancedToken.connect(user).isTokensLocked(user.address)).to.be.true;
    // attempting to burn locked tokens
    await expect( advancedToken.connect(user).burn(500) ).to.be.revertedWith('Tokens are locked');
  });
  
});




