# Debugging Scenario 

To run this git clone this repository.

Install all dependencies : 

```shell
npm i
```

Compile the Hardhat Token :

```shell
npx hardhat compile
```

Run the Test Cases :

```shell
npx hardhat test
```


The test will give error because we are able to burn tokens when locked.

In "JoyBoyToken" , there is correct burn function commented , uncomment that burn function and comment the incorrect burn function.


Run the Test Cases Again:

```shell
npx hardhat test
```

The test should work fine now.
