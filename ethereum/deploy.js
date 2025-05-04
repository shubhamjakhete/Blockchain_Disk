const HDWalletProvider = require("@truffle/hdwallet-provider");
const Web3 = require("web3");
const compiledFactory = require("./build/DiskSpaceRentalSystemFactory.json");

const provider = new HDWalletProvider(
  ["0d76fe1672006a8cd341152befef8fd5d88b6c58db901e49fba03c1fdea0b11a"],
  "http://127.0.0.1:8545"
);

const web3 = new Web3(provider);

const deploy = async () => {
  try {
    const accounts = await web3.eth.getAccounts();
    console.log("Deploying from account:", accounts[0]);

    const result = await new web3.eth.Contract(compiledFactory.abi)
      .deploy({ data: compiledFactory.evm.bytecode.object })
      .send({ from: accounts[0], gas: "6000000" });

    console.log("✅ Contract deployed to:", result.options.address);

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
