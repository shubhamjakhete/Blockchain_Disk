const path = require("path");
const fs = require("fs");
const solc = require("solc");

const contractsPath = path.resolve(__dirname, "contracts", "DiskSpaceRentalSystem.sol");
const source = fs.readFileSync(contractsPath, "utf8");

const input = {
  language: "Solidity",
  sources: {
    "DiskSpaceRentalSystem.sol": {
      content: source,
    },
  },
  settings: {
    outputSelection: {
      "*": {
        "*": ["abi", "evm.bytecode"],
      },
    },
  },
};

const output = JSON.parse(solc.compile(JSON.stringify(input)));

// Ensure build folder exists
const buildPath = path.resolve(__dirname, "build");
fs.rmSync(buildPath, { recursive: true, force: true });
fs.mkdirSync(buildPath);

if (output.errors) {
  for (const error of output.errors) {
    console.error("❌", error.formattedMessage);
  }
  throw new Error("Compilation failed.");
}

// Write compiled contracts to disk
for (const contractName in output.contracts["DiskSpaceRentalSystem.sol"]) {
  const contract = output.contracts["DiskSpaceRentalSystem.sol"][contractName];
  fs.writeFileSync(
    path.resolve(buildPath, `${contractName}.json`),
    JSON.stringify(contract, null, 2)
  );
  console.log(`✅ Compiled: ${contractName}`);
}