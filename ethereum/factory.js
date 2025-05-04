// ethereum/factory.js

import web3 from './web3';
import abi from './abi'; // ABI exported from abi.js
import contractAddress from './contractAddress'; // Auto-updated by deploy.js

const instance = new web3.eth.Contract(abi, contractAddress);

export default instance;
