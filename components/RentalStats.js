import React from 'react';

export function RentalStats({ header, value, description }) {
  return (
    <div className='shadow-lg p-4 bg-white rounded-lg' style={{ marginBottom: '20px' }}>
      <div className='text-xl text-purple font-bold'>{header}</div>
      <div className='text-lg'>{value}</div>
      <div className='text-gray-500'>{description}</div>
    </div>
  );
}

function ExampleUsage(props) {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="grid grid-cols-2 gap-4">
        <RentalStats
          header='Owner'
          value={props.owner}
          description='Address of the owner'
        />
        <RentalStats
          header='Available DiskSpace (MB)'
          value={props.availableDiskSpace}
          description='Available DiskSpace in Megabytes'
        />
        <RentalStats
          header='Total DiskSpace (MB)'
          value={props.totalDiskSpace}
          description='Total DiskSpace in Megabytes'
        />
        <RentalStats
          header='Rental Price (Wei)'
          value={props.rentalPrice}
          description='Price for renting DiskSpace in Wei'
        />
      </div>
    </div>
  );
}

export default ExampleUsage;
