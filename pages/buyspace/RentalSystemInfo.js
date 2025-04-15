import React, { Component } from 'react';
//import RentalStats from '../../components/RentalStats';
import BuySpaceForm from '../../components/BuySpaceForm';
import { getDeployedRentalSystems } from './deployedSystems';
import web3 from 'web3';
import Navbar from '../../components/Navbar';
import rentalStats from '../../ethereum/showRentalStats';
import { Card } from 'semantic-ui-react';
import { RentalStats } from '../../components/RentalStats';
import { Link } from '../../routes';

class Show extends Component {
  static async getInitialProps(props) {
    const address = props.query.address;
    const stats = rentalStats(address);
    const summary = await stats.methods.getSummary().call();
      
    console.log(summary)

    return {
      address: props.query.address,
      owner: summary[0],
      rentalPrice: summary[1],
      totalDiskSpace: summary[2],
      availableDiskSpace: summary[3],
      rentalCount: summary[4]
    };
  }

  renderCards() {
    const { owner, rentalPrice, totalDiskSpace, availableDiskSpace, rentalCount } = this.props;

    const items = [
      {
        header: owner,
        value: owner,
        description: 'Address of the owner',
      },
      {
        header: availableDiskSpace,
        value: availableDiskSpace,
        description: 'Available DiskSpace in Megabytes',
      },
      {
        header: totalDiskSpace,
        value: totalDiskSpace,
        description: 'Total DiskSpace in Megabytes',
      },
      {
        header: rentalPrice,
        value: rentalPrice,
        description: 'Price for renting DiskSpace in Wei',
      },
      {
        header: rentalCount,
        value: rentalCount,
        description: 'Active Rental Count',
      },
      {
        header: rentalCount,
        value: rentalCount,
        description: 'Active Rental Count',
      },
    ];

    return <Card.Group items={items} />;
  }

  
  render() {
    const { owner, rentalPrice, totalDiskSpace, availableDiskSpace, rentalCount} = this.props;

    return (
      <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-4">
        <RentalStats
          header='Owner'
          value= {owner}
          description='Address of the owner'
        />
        <RentalStats
          header='Available DiskSpace (MB)'
          value={availableDiskSpace}
          description='Available DiskSpace in Megabytes'
        />
        <RentalStats
          header='Total DiskSpace (MB)'
          value={totalDiskSpace}
          description='Total DiskSpace in Megabytes'
        />
        <RentalStats
          header='Rental Price (Wei)'
          value={rentalPrice}
          description='Price for renting DiskSpace in Wei'
        />
        <RentalStats
          header='Rental Count'
          value={rentalCount}
          description='Active Rental Count'
        />
        
        
      </div>
      <Link route={`/buyspace/${this.props.address}/requests`}>
      <button
  className="bg-blue-500 text-white py-2 px-4 rounded-lg"
  style={{
    margin: '20px 10px', // Adjust the margin to move the button
    position: 'absolute', // Position absolute for precise positioning
    bottom: '20px', // Adjust the distance from the bottom
    left: '50%', // Position in the horizontal center
    transform: 'translateX(-50%)', // Center horizontally
  }}
>
  View Rentals
</button>
</Link>
      <div className="w-1/2 p-4">
        {/* Place the BuySpaceForm component here */}
        <BuySpaceForm address={this.props.address} />
      </div>
    </div>
    
    );
  }
}

// function RentalStats({ header, value, description }) {
//   return (
//     <div className='shadow-lg p-4 bg-white rounded-lg' style={{ marginBottom: '20px' }}>
//       <div className='text-xl text-purple font-bold'>{header}</div>
//       <div className='text-lg'>{value}</div>
//       <div className='text-gray-500'>{description}</div>
//     </div>
//   );
// }

export default Show;
// the RentalStats component is part of the Show component, and it receives the rental data as props, allowing it to display the cards with the correct data.







// function RentalSystemInfo() {
//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: 1 }}>
        
//         <RentalStats/>
//         <button
//             className="bg-blue-500 text-white py-2 px-4 rounded-lg"
//             style={{
//               margin: '20px 10px', // Adjust the margin to move the button
//               position: 'relative', // Position relative to its containing element
//               bottom: '250px', // Move the button 10 pixels down from its default position
//               left: '70px', // Move the button 20 pixels to the right from its default position
//             }}
//           >
//             View Rentals
//         </button>

        
//       </div>


//       <div style={{ flex: 1 }}>
        
//         {/* Place the BuySpaceForm component on the right side */}
//         <BuySpaceForm />
//       </div>
//     </div>
//   );
// }

// export default RentalSystemInfo;

//export default Show;
// function RentalSystemInfo() {
//   const [deployedSystems, setDeployedSystems] = useState([]);
//   const [rentalSystemData, setRentalSystemData] = useState([]);
//   const [selectedRentalSystem, setSelectedRentalSystem] = useState(null);

//   useEffect(() => {
//     // Fetch deployed systems when the component mounts
//     async function fetchDeployedSystems() {
//       try {
//         const systems = await getDeployedRentalSystems();
//         setDeployedSystems(systems);
//         console.log(systems);
//         const data = await fetchRentalSystemData(systems);
//         setRentalSystemData(data);
//       } catch (error) {
//         console.error('Error fetching deployed systems:', error);
//       }
//     }

//     fetchDeployedSystems();
//   }, []);

//   // Your ABI definition here
//   const abi = 

//   async function fetchRentalSystemData(systems) {
//     const web3Instance = new web3(new web3.providers.HttpProvider('https://sepolia.infura.io/v3/2a1c675738b24b03a96d255896495982'));

//     const data = [];
//     for (const address of systems) {
//       const rentalSystem = new web3Instance.eth.Contract(abi, address);

//       const owner = await rentalSystem.methods.owner().call();
//       const totalDiskSpace = await rentalSystem.methods.totalDiskSpace().call();
//       const availableDiskSpace = await rentalSystem.methods.availableDiskSpace().call();
//       const rentalPrice = await rentalSystem.methods.rentalPrice().call();

//       data.push({
//         address,
//         owner,
//         totalDiskSpace,
//         availableDiskSpace,
//         rentalPrice,
//       });
//     }

//     return data;
//   }

//   // Function to handle click on a rental system
//   const handleRentalSystemClick = (address) => {
//     // Find the selected rental system based on its address
//     const selectedSystem = rentalSystemData.find((system) => system.address === address);
//     setSelectedRentalSystem(selectedSystem);
//   };

//   return (
//     <div style={{ display: 'flex' }}>
//       <div style={{ flex: 1 }}>
//         {/* Display rental system cards and handle click events */}
//         {rentalSystemData?.map((system, index) => (
//           <div key={index} onClick={() => handleRentalSystemClick(system.address)}>
//             <RentalStats rentalSystem={system} />
//           </div>
//         ))}
//         {/* Missing closing parenthesis for .map function here ^^^^ */}

//         {/* Display selected rental system information */}
//         {selectedRentalSystem && (
//           <div>
//             <h2>Selected Rental System</h2>
//             <p>Owner: {selectedRentalSystem.owner}</p>
//             <p>Total Disk Space: {selectedRentalSystem.totalDiskSpace}</p>
//             <p>Available Disk Space: {selectedRentalSystem.availableDiskSpace}</p>
//             <p>Rental Price: {selectedRentalSystem.rentalPrice}</p>
//           </div>
//         )}
//       </div>

//       <div style={{ flex: 1 }}>
//         {/* Place the BuySpaceForm component on the right side */}
//         <BuySpaceForm />
//       </div>
//     </div>
//   );
// }

// export default RentalSystemInfo;
