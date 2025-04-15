//contract abi of factory

const abi = [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_initialSpace",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_initialPrice",
				"type": "uint256"
			}
		],
		"name": "createRentalSystem",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"name": "deployedRentalSystems",
		"outputs": [
			{
				"internalType": "address",
				"name": "",
				"type": "address"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getDeployedRentalSystems",
		"outputs": [
			{
				"internalType": "address[]",
				"name": "",
				"type": "address[]"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
  
  export default abi;