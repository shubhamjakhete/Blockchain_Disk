

import React, { useEffect, useState } from 'react';
import RentalSystemCard from '../../components/RentalSystemCard'; // Import your card component
import { getDeployedRentalSystems } from './deployedSystems'; // Import your function to get deployed addresses
import web3 from 'web3'; // Import or initialize Web3 library
import Navbar from '../../components/Navbar';
 

function BuySpace() {
  const [deployedSystems, setDeployedSystems] = useState([]);
  const [rentalSystemData, setRentalSystemData] = useState([]);

  useEffect(() => {
    // Fetch deployed systems when the component mounts
    async function fetchDeployedSystems() {
      try {
        const systems = await getDeployedRentalSystems();
        setDeployedSystems(systems);
        console.log(systems);
        const data = await fetchRentalSystemData(systems);
        setRentalSystemData(data);
      } catch (error) {
        console.error('Error fetching deployed systems:', error);
      }
    }

    fetchDeployedSystems();
  }, []);
  
  // Your ABI definition here
  const abi =[
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
  async function fetchRentalSystemData(systems) {
    const web3Instance = new web3(new web3.providers.HttpProvider('https://sepolia.infura.io/v3/2a1c675738b24b03a96d255896495982'));

    const data = [];
    for (const address of systems) {
      const rentalSystem = new web3Instance.eth.Contract(abi, address);

      const owner = await rentalSystem.methods.owner().call();
      const totalDiskSpace = await rentalSystem.methods.totalDiskSpace().call();
      const availableDiskSpace = await rentalSystem.methods.availableDiskSpace().call();
      const rentalPrice = await rentalSystem.methods.rentalPrice().call();

      data.push({
        address,
        owner,
        totalDiskSpace,
        availableDiskSpace,
        rentalPrice,
      });
    }

    return data;
  }

  const cardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr)',
    gap: '1rem',
  };

  const containerStyle = {
    padding: '100px', // Add padding to create space between the Navbar and the grid
  };

  return (
    <div>
      <Navbar/>
      <div style={containerStyle}>
        <div style={cardStyle}>
          {rentalSystemData?.map((system, index) => (
            <RentalSystemCard key={index} rentalSystem={system} />
          ))}
        </div>
      </div>
    </div>
  );
}

export default BuySpace;



