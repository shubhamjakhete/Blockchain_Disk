import web3 from './web3';

const bytecode = "60806040523480156200001157600080fd5b5060405162000d9f38038062000d9f83398181016040528101906200003791906200013a565b806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555082600281905550826003819055508160018190555050505062000196565b600080fd5b6000819050919050565b620000af816200009a565b8114620000bb57600080fd5b50565b600081519050620000cf81620000a4565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b60006200010282620000d5565b9050919050565b6200011481620000f5565b81146200012057600080fd5b50565b600081519050620001348162000109565b92915050565b60008060006060848603121562000156576200015562000095565b5b60006200016686828701620000be565b93505060206200017986828701620000be565b92505060406200018c8682870162000123565b9150509250925092565b610bf980620001a66000396000f3fe60806040526004361061007b5760003560e01c80638da5cb5b1161004e5780638da5cb5b1461012c578063af94a1d114610157578063d12e8d5114610198578063f9217419146101b45761007b565b80630136f66d146100805780631c43cd04146100ab57806369b42dc2146100d657806383d255bc14610101575b600080fd5b34801561008c57600080fd5b506100956101dd565b6040516100a291906106f4565b60405180910390f35b3480156100b757600080fd5b506100c06101e3565b6040516100cd91906106f4565b60405180910390f35b3480156100e257600080fd5b506100eb6101e9565b6040516100f891906106f4565b60405180910390f35b34801561010d57600080fd5b506101166101ef565b60405161012391906106f4565b60405180910390f35b34801561013857600080fd5b506101416101fc565b60405161014e9190610750565b60405180910390f35b34801561016357600080fd5b5061017e6004803603810190610179919061079c565b610220565b60405161018f9594939291906107e4565b60405180910390f35b6101b260048036038101906101ad9190610837565b610293565b005b3480156101c057600080fd5b506101db60048036038101906101d6919061079c565b6104ad565b005b60025481565b60015481565b60035481565b6000600480549050905090565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6004818154811061023057600080fd5b90600052602060002090600502016000915090508060000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16908060010154908060020154908060030154908060040160009054906101000a900460ff16905085565b6000821180156102a557506003548211155b6102e4576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004016102db906108fa565b60405180910390fd5b6000610e10826102f49190610949565b9050600081846001546103079190610949565b6103119190610949565b905080341015610356576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161034d906109d7565b60405180910390fd5b60046040518060a001604052803373ffffffffffffffffffffffffffffffffffffffff168152602001868152602001428152602001844261039791906109f7565b815260200160011515815250908060018154018082558091505060019003906000526020600020906005020160009091909190915060008201518160000160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060208201518160010155604082015181600201556060820151816003015560808201518160040160006101000a81548160ff021916908315150217905550505083600360008282546104659190610a2b565b925050819055507f741499c4edf5c799e9cedfda49b3bcd3bbf97e3b1147b6e91507db50ff25dc6d33858460405161049f93929190610a5f565b60405180910390a150505050565b60008054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161461053b576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161053290610b08565b60405180910390fd5b6004805490508110610582576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040161057990610b74565b60405180910390fd5b60006004828154811061059857610597610b94565b5b906000526020600020906005020190508060040160009054906101000a900460ff16156106d7578060010154600360008282546105d591906109f7565b9250508190555060008160040160006101000a81548160ff02191690831515021790555060008160020154826003015461060f9190610a2b565b905060008183600101546001546106269190610949565b6106309190610949565b90508260000160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff166108fc829081150290604051600060405180830381858888f1935050505015801561069c573d6000803e3d6000fd5b507fecddf1b4fdc1297684aa71a38e047726f2411ac8b4b4e705b9bf6e21d75ae133846040516106cc91906106f4565b60405180910390a150505b5050565b6000819050919050565b6106ee816106db565b82525050565b600060208201905061070960008301846106e5565b92915050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061073a8261070f565b9050919050565b61074a8161072f565b82525050565b60006020820190506107656000830184610741565b92915050565b600080fd5b610779816106db565b811461078457600080fd5b50565b60008135905061079681610770565b92915050565b6000602082840312156107b2576107b161076b565b5b60006107c084828501610787565b91505092915050565b60008115159050919050565b6107de816107c9565b82525050565b600060a0820190506107f96000830188610741565b61080660208301876106e5565b61081360408301866106e5565b61082060608301856106e5565b61082d60808301846107d5565b9695505050505050565b6000806040838503121561084e5761084d61076b565b5b600061085c85828601610787565b925050602061086d85828601610787565b9150509250929050565b600082825260208201905092915050565b7f496e76616c6964206f7220696e73756666696369656e7420617661696c61626c60008201527f6520737061636500000000000000000000000000000000000000000000000000000602082015250565b60006108e4602783610877565b91506108ef82610888565b604082019050919050565b60006020820190508181036000830152610913816108d7565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610954826106db565b915061095f836106db565b925082820261096d816106db565b915082820484148315176109845761098361091a565b5b5092915050565b7f496e73756666696369656e742066756e64732073656e74000000000000000000600082015250565b60006109c1601783610877565b91506109cc8261098b565b602082019050919050565b60006020820190508181036000830152610b2181610ae5565b9050919050565b7f496e76616c69642072656e74616c204944000000000000000000000000000000600082015250565b6000610b5e601183610877565b9150610b6982610b28565b602082019050919050565b60006020820190508181036000830152610b8d81610b51565b9050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052603260045260246000fdfea264697066735822122001876481e0efe6444be2cc8f10b7210fbb72294e0eb5019de3122ad198d4cbb464736f6c63430008120033";

const systemAbi =[
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_space",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_durationInHours",
				"type": "uint256"
			}
		],
		"name": "createRental",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
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
			},
			{
				"internalType": "address",
				"name": "_creator",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "space",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "RentalCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rentalId",
				"type": "uint256"
			}
		],
		"name": "RentalTerminated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rentalId",
				"type": "uint256"
			}
		],
		"name": "terminateRental",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "availableDiskSpace",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rentalId",
				"type": "uint256"
			}
		],
		"name": "getRental",
		"outputs": [
			{
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "space",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRentalCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSummary",
		"outputs": [
			{
				"internalType": "address",
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rentalPriceValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalDiskSpaceValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "availableDiskSpaceValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rentalCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
		"name": "rentalPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
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
		"name": "rentals",
		"outputs": [
			{
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "space",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalDiskSpace",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]

// Replace 'contractAddress' with the actual address where the contract is deployed
const contractAddress = '0x134796f0408A6358b090247e1eBE0Af50A6911F4';

// const instance = new web3.eth.Contract(Abi, contractAddress);

const systeminstance = new web3.eth.Contract(
  [
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_space",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "_durationInHours",
				"type": "uint256"
			}
		],
		"name": "createRental",
		"outputs": [],
		"stateMutability": "payable",
		"type": "function"
	},
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
			},
			{
				"internalType": "address",
				"name": "_creator",
				"type": "address"
			}
		],
		"stateMutability": "nonpayable",
		"type": "constructor"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "space",
				"type": "uint256"
			},
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "duration",
				"type": "uint256"
			}
		],
		"name": "RentalCreated",
		"type": "event"
	},
	{
		"anonymous": false,
		"inputs": [
			{
				"indexed": false,
				"internalType": "uint256",
				"name": "rentalId",
				"type": "uint256"
			}
		],
		"name": "RentalTerminated",
		"type": "event"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "_rentalId",
				"type": "uint256"
			}
		],
		"name": "terminateRental",
		"outputs": [],
		"stateMutability": "nonpayable",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "availableDiskSpace",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [
			{
				"internalType": "uint256",
				"name": "rentalId",
				"type": "uint256"
			}
		],
		"name": "getRental",
		"outputs": [
			{
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "space",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getRentalCount",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "getSummary",
		"outputs": [
			{
				"internalType": "address",
				"name": "ownerAddress",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "rentalPriceValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "totalDiskSpaceValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "availableDiskSpaceValue",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "rentalCount",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "owner",
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
		"name": "rentalPrice",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
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
		"name": "rentals",
		"outputs": [
			{
				"internalType": "address",
				"name": "renter",
				"type": "address"
			},
			{
				"internalType": "uint256",
				"name": "space",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "startTime",
				"type": "uint256"
			},
			{
				"internalType": "uint256",
				"name": "endTime",
				"type": "uint256"
			},
			{
				"internalType": "bool",
				"name": "active",
				"type": "bool"
			}
		],
		"stateMutability": "view",
		"type": "function"
	},
	{
		"inputs": [],
		"name": "totalDiskSpace",
		"outputs": [
			{
				"internalType": "uint256",
				"name": "",
				"type": "uint256"
			}
		],
		"stateMutability": "view",
		"type": "function"
	}
]
, '0x134796f0408A6358b090247e1eBE0Af50A6911F4');

export default systeminstance;