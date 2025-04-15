const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledRentalSystem = require("./build/DiskSpaceRentalSystem.json"); // 👈 not factory

const provider = new HDWalletProvider(
  ["b5865b862243ec7fe0845eefe82ee9dd13a2297bf3710e87428e5c582a0a0677"], // Private key from Ganache CLI (NO "0x")
  "http://127.0.0.1:8545"
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying from account:", accounts[0]);

    const result = await new web3.eth.Contract(compiledRentalSystem.abi)
      .deploy({
        data: compiledRentalSystem.evm.bytecode.object,
        arguments: [1000, 1000000000000, accounts[0]] // initialSpace, price (wei), creator address
      })
      .send({ from: accounts[0], gas: "6000000" });

    console.log("Contract deployed to:", result.options.address);

    // Optional: write to contractAddress.js
    const fs = require("fs");
    fs.writeFileSync(
      "./ethereum/contractAddress.js",
      `const contractAddress = '${result.options.address}';\nexport default contractAddress;\n`
    );

    provider.engine.stop();
  } catch (e) {
    console.error("Deployment Error:", e);
  }
};

deploy();
