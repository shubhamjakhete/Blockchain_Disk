// import Web3 from 'web3';

// let web3; // Define a variable to hold the web3 instance

// const initWeb3 = async () => {
//   // Check if MetaMask is installed
//   if (typeof window.ethereum !== 'undefined') {
//     // Use MetaMask's provider
//     web3 = new Web3(window.ethereum);

//     try {
//       // Request user's permission to connect to their MetaMask wallet
//       const accounts = await window.ethereum.request({ method: 'eth_requestAccounts' });
//       console.log('Connected to MetaMask:', accounts[0]);
//       // Now you can use the 'web3' instance to interact with Ethereum.
//     } catch (error) {
//       console.error('Connection to MetaMask failed:', error);
//     }
//   } else {
//     console.error('MetaMask is not available. Please install or enable it.');
//   }
// };

// initWeb3(); // Call the initialization function

// export default web3; // Export the web3 instance

import Web3 from 'web3';

let web3;

if (typeof window !== 'undefined' && typeof window.ethereum !== 'undefined') {
  // We are in the browser and metamask is running.
  window.ethereum.request({ method: 'eth_requestAccounts' });
  web3 = new Web3(window.ethereum);
} else {
  // We are on the server *OR* the user is not running metamask
  const provider = new Web3.providers.HttpProvider(
    'https://sepolia.infura.io/v3/2a1c675738b24b03a96d255896495982'
  );
  web3 = new Web3(provider);
}

export default web3;
