import contractAddress from './contractAddress';
import abi from './systemabi';

const systeminstance = new web3.eth.Contract(abi, contractAddress);
export default systeminstance;