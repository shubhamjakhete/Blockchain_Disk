import ViewRental from "../../components/ViewRental";
import React from 'react';

function Demo2() {
    // Sample rental data
    const rentalData = {
      rentalId: 1,
      renter: '0x983eu2iuef87r38edn2igyVUTKNWID',
      space: 1000,
      startTime: 1636219200, // Example timestamp
      endTime: 1636305600,   // Example timestamp
      active: true,
    };
  
    const handleTerminateRental = (rentalId) => {
      // Implement the termination logic here
      console.log(`Terminating rental ID: ${rentalId}`);
    };
  
    return (
        <div className="container mx-auto p-4">
          <h1 className="text-3xl font-bold mb-4 text-indigo-600">View Rental Agreements</h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {/* {rentalData.map((data) => (
              <ViewRental key={data.rentalId} rentalData={data} onTerminate={handleTerminateRental} />
            ))} */}
              <ViewRental rentalData={rentalData} onTerminate={handleTerminateRental} />
          </div>
        </div>
      );
      
  }
  
  export default Demo2;


