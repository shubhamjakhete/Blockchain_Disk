import React, { Component } from 'react';
import { Button } from 'semantic-ui-react';
import { Link } from '../../../routes';
import Navbar from '../../../components/Navbar';
import rentalStats from '../../../ethereum/showRentalStats';

class Show extends Component {
  constructor(props) {
    super(props);
    this.state = {
      renters: [],
      totalRentalSpace: 0,
    };
  }

  async componentDidMount() {
    try {
        const address = props.query.address;
      const stats = rentalStats(address)  
      const rentalCount = await stats.methods.getRentalCount().call();
      const renters = [];
      let totalRentalSpace = 0;

      for (let i = 0; i < rentalCount; i++) {
        const rental = await stats.methods.getRental(i).call();

        // Check if the rental belongs to the specific system (replace 'systemAddress' with the actual address)
        if (rental[5] === '0x134796f0408A6358b090247e1eBE0Af50A6911F4') {
          renters.push(rental[0]);
          totalRentalSpace += rental[1];
        }
      }

      this.setState({ renters, totalRentalSpace });
    } catch (error) {
      console.error('Error fetching renters:', error);
    }
  }

  render() {
    const { address } = this.props;
    const { renters, totalRentalSpace } = this.state;

    return (
      <div className="flex justify-center items-center h-screen">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <h3>Rental Information for System</h3>
            <p>System Address: {address}</p>
            <p>Total Rented Space (MB): {totalRentalSpace}</p>
            <p>Number of Renters: {renters.length}</p>
            <ul>
              {renters.map((renter, index) => (
                <li key={index}>Renter {index + 1}: {renter}</li>
              ))}
            </ul>
          </div>
          <div>
            <Link route={`/buyspace/${address}/requests`}>
              <button
                className="bg-blue-500 text-white py-2 px-4 rounded-lg"
                style={{
                  margin: '20px 10px',
                  position: 'absolute',
                  bottom: '20px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                }}
              >
                View Rentals
              </button>
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Show;