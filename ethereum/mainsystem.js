// ethereum/mainsystem.js

import web3 from './web3';
import Abi from './abi';
import contractAddress from './contractAddress';

// ✅ Updated to use latest deployed contract address
const instance = new web3.eth.Contract(Abi, contractAddress);

export default instance;