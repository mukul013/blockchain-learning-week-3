### Primary Smart Contracts

There will be two primary smart contracts in the decentralized banking platform:

**AdvancedToken contract:** This contract will be responsible for managing the AdvancedToken tokens. It will provide functionality for users to deposit and withdraw ERC-20 tokens, mint and burn AdvancedToken tokens, and lock and unlock AdvancedToken tokens.
**LendingPool contract:** This contract will be responsible for facilitating lending and borrowing of AdvancedToken tokens. It will allow users to lend their AdvancedToken tokens to earn interest and to borrow against their AdvancedToken holdings.

### Primary Functions

The AdvancedToken contract will have the following primary functions:

**deposit() -** Allows users to deposit ERC-20 tokens and get an equivalent amount of AdvancedToken tokens in return.
**withdraw() -** Allows users to withdraw ERC-20 tokens by burning their AdvancedToken tokens.
**mint() -** Allows the contract owner to mint new AdvancedToken tokens, up to the maximum supply limit.
**burn() -** Allows users to burn their AdvancedToken tokens.
**lockTokens() -** Allows users to lock their AdvancedToken tokens for a specified duration.


The LendingPool contract will have the following primary functions:

**lendTokens() -** Allows users to lend their AdvancedToken tokens to earn interest.
**borrowTokens() -** Allows users to borrow against their AdvancedToken holdings.
**repayTokens() -** Allows users to repay their loans.
**liquidateBorrow() -** Allows the contract to liquidate a user's collateral if their loan-to-value ratio exceeds a certain threshold.

### How the Smart Contracts Interact

 - When a user deposits ERC-20 tokens into the AdvancedToken contract, the AdvancedToken contract will mint an equivalent amount of AdvancedToken tokens and transfer them to the user.
 - When a user lends their AdvancedToken tokens to the LendingPool contract, the LendingPool contract will transfer the AdvancedToken tokens from the user's wallet to its own wallet.
 - When a user borrows against their AdvancedToken holdings, the LendingPool contract will transfer the AdvancedToken tokens from its own wallet to the user's wallet.
 - When a user repays their loan, the LendingPool contract will transfer the AdvancedToken tokens from the user's wallet to its own wallet.
 - When a user liquidates a borrow, the LendingPool contract will transfer the AdvancedToken tokens from the borrower's wallet to the liquidator's wallet.