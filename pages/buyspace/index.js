import React, { useEffect, useState } from 'react';
import RentalSystemCard from '../../components/RentalSystemCard';
import { getDeployedRentalSystems } from './deployedSystems';
import Web3 from 'web3';
import Navbar from '../../components/Navbar';

function BuySpace() {
  const [deployedSystems, setDeployedSystems] = useState([]);
  const [rentalSystemData, setRentalSystemData] = useState([]);

  useEffect(() => {
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

  const abi = [
    {
      inputs: [],
      name: "owner",
      outputs: [
        { internalType: "address", name: "", type: "address" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "availableDiskSpace",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "rentalPrice",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" }
      ],
      stateMutability: "view",
      type: "function"
    },
    {
      inputs: [],
      name: "totalDiskSpace",
      outputs: [
        { internalType: "uint256", name: "", type: "uint256" }
      ],
      stateMutability: "view",
      type: "function"
    }
  ];

  async function fetchRentalSystemData(systems) {
    const web3Instance = new Web3(new Web3.providers.HttpProvider('http://127.0.0.1:8545'));
    const data = [];
    for (const address of systems) {
      try {
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
      } catch (err) {
        console.error(`Error reading contract at ${address}:`, err.message);
      }
    }
    return data;
  }

  const cardStyle = {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))',
    gap: '1rem',
  };

  const containerStyle = {
    padding: '100px',
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