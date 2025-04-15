import React, {Component} from 'react';
import rentalStats from '../ethereum/showRentalStats'
import web3 from '../ethereum/web3'
import { Router } from '../routes'
import { Message, Button } from 'semantic-ui-react';


class BuySpaceForm extends Component {

  state = {
    value: '',
    durationOfLease: '',
    errorMessage: '',
    loading: false
  }

  onSubmit = async (event) => {
  event.preventDefault();
  const rent = rentalStats(this.props.address);

  this.setState({loading: true, errorMessage: ''});
  try {
    const accounts = await web3.eth.getAccounts();
    await rent.methods
      .createRental(this.state.value, this.state.durationOfLease)
      .send({
        from: accounts[0],
        value: web3.utils.toWei(this.state.value, 'ether')
      });
    Router.replaceRoute(`/buyspace/${this.props.address}`)
  } catch (err) {
    this.setState({errorMessage: err.message})
    // Handle any errors
  }

  this.setState({loading:false, value: ''});
};

  render() {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            RENT WITH THE BEST!
          </h1>

          <p className="mx-auto mt-4 max-w-md text-center text-gray-500">
            SpacePal - the blockchain solution and your perfect pal when you need storage
          </p>

          <form
            onSubmit={this.onSubmit}
            error={!!this.state.errorMessage}
            action=""
            className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">A friend in need is a friend indeed!</p>

            <div>
              <label htmlFor="space-required" className="sr-only">
                Space Required (MB)
              </label>

              <div className="relative">
                <input
                  value={this.state.value}
                  onChange={event => this.setState({value:event.target.value})}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Space Required (MB)"
                />
              </div>
            </div>

            <div>
              <label htmlFor="duration-of-lease" className="sr-only">
                Duration of Lease (HRS)
              </label>

              <div className="relative">
                <input
                  value={this.state.durationOfLease}
                  onChange={(event) => this.setState({ durationOfLease: event.target.value })}
                  type="text"
                  className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                  placeholder="Enter Duration of Lease (HRS)"
                />
              </div>
            </div>
            <Message error content={this.state.errorMessage} />
            <button
              loading={this.state.loading}
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Buy Space
            </button>
          </form>
        </div>
      </div>
    </div>
  );
  }
};

export default BuySpaceForm;
