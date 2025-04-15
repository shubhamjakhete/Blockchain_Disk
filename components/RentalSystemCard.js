import React from 'react';
import {Link} from '../routes';


const RentalSystemCard = ({ rentalSystem }) => {
  // Extract information from the rentalSystem object
  const { address, owner, totalDiskSpace, availableDiskSpace, rentalPrice } = rentalSystem;

  const cardStyle = {
    maxWidth: '300px', // Adjust the maximum width as needed
    whiteSpace: 'nowrap',
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  };
  console.log('Rental System:', rentalSystem);
  return (
    
    <div className="p-6 bg-white border border-gray-200 rounded-lg shadow text-gray-900" style={{ maxWidth: '600px' }}>
      <div>
          <div style={{ maxWidth: '100%', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis' }}>
              <h5 className="mb-3 text-2xl font-bold tracking-tight">{address}</h5>
          </div>
          <p className="mb-3 font-normal">Price:{rentalPrice} Wei/MB</p>
      </div>
      <Link route={`/buyspace/${address}`}>
        <a className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300">
            Rent
            <svg className="w-3.5 h-3.5 ml-2" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </a>
      </Link>
     
  </div>
  


  );

  

};

export default RentalSystemCard;
