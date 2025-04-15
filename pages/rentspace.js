import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import web3 from '../ethereum/web3'; // Import your Web3 instance
import abi from '../ethereum/abi'; // Import ABI and contract address
import contractAddress from '../ethereum/contractAddress';
import {Router} from '../routes';

const RentalSpace = () => {
  const [volume, setVolume] = useState('');
  const [price, setPrice] = useState('');

  const handleVolumeChange = (e) => {
    setVolume(e.target.value);
  };

  const handlePriceChange = (e) => {
    setPrice(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Convert input values to the required data types (uint256 in this case)
    const space = parseInt(volume); // You can add validation here
    const rentalPrice = parseInt(price);

    // Get the currently selected Ethereum account (e.g., from MetaMask)
    const accounts = await web3.eth.getAccounts();
    const account = accounts[0]; // Assuming you want to use the first account

    // Connect to your contract using Web3
    const contract = new web3.eth.Contract(abi, contractAddress);

    try {
      // Send a transaction to create the rental system
      await contract.methods.createRentalSystem(space, rentalPrice).send({
        from: account,
      });
      Router.pushRoute('/');
      // Optionally, you can provide user feedback about the successful creation
      alert('Rental system created successfully!');
    } catch (error) {
      // Handle errors (e.g., transaction reverted)
      alert('Error creating rental system: ' + error.message);
    }
  };

  return (
    <div>
      <Navbar/>
    
      <div className="bg-blue-400 h-screen w-screen">
        <div className="flex flex-col items-center flex-1 h-full justify-center px-4 sm:px-0">
          <div className="flex rounded-lg shadow-lg w-full sm:w-3/4 lg:w-1/2 bg-white sm:mx-0" style={{ height: '500px' }}>
            <div className="flex flex-col w-full md:w-1/2 p-4">
              <div className="flex flex-col flex-1 justify-center mb-8">
                <h1 className="text-4xl text-center font-thin">Rental System Creation</h1>
                <div className="w-full mt-4">
                  <form className="form-horizontal w-3/4 mx-auto" onSubmit={handleSubmit}>
                    <div className="flex flex-col mt-4">
                      <input
                        type="text"
                        className="flex-grow h-8 px-2 border rounded border-grey-400"
                        name="volume"
                        value={volume}
                        onChange={handleVolumeChange}
                        placeholder="Volume of Space to Rent (MB)"
                      />
                    </div>
                    <div className="flex flex-col mt-4">
                      <input
                        type="text"
                        className="flex-grow h-8 px-2 rounded border border-grey-400"
                        name="price"
                        value={price}
                        onChange={handlePriceChange}
                        placeholder="Price of Rental (Wei)"
                      />
                    </div>
                    {/* Other form fields go here */}
                    <div className="flex flex-col mt-8">
                      <button
                        type="submit"
                        className="bg-blue-500 hover:bg-blue-700 text-white text-sm font-semibold py-2 px-4 rounded"
                      >
                        Create Rental Space
                      </button>
                    </div>
                  </form>
                  <div className="text-center mt-4">
                    <a className="no-underline hover:underline text-blue-dark text-xs" href="#">
                      
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div
              className="hidden md:block md:w-1/2 rounded-r-lg"
              style={{
                background: 'url("https://images.unsplash.com/photo-1515965885361-f1e0095517ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=3300&q=80")',
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
              }}
            ></div>
          </div>
        </div>
      </div>
    </div>   
  );
};

export default RentalSpace;
