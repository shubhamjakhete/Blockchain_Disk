// SPDX-License-Identifier: MIT
pragma solidity ^0.8.0;


//OFFICIAL CODE

contract DiskSpaceRentalSystemFactory {
    address[] public deployedRentalSystems;

    function createRentalSystem(uint256 _initialSpace, uint256 _initialPrice) public {
        address newRentalSystem = address(new DiskSpaceRentalSystem(_initialSpace, _initialPrice, msg.sender));
        deployedRentalSystems.push(newRentalSystem);
    }

    function getDeployedRentalSystems() public view returns (address[] memory) {
        return deployedRentalSystems;
    }
}

contract DiskSpaceRentalSystem {
    address public owner;
    uint256 public rentalPrice; // Price in Wei per MB per hour
    uint256 public totalDiskSpace;
    uint256 public availableDiskSpace;
    
    struct Rental {
        address renter;
        uint256 space;
        uint256 startTime;
        uint256 endTime;
        bool active;
    }
    
    Rental[] public rentals;

    event RentalCreated(address renter, uint256 space, uint256 duration);
    event RentalTerminated(uint256 rentalId);
    
    modifier onlyOwner() {
        require(msg.sender == owner, "Only the owner can call this function");
        _;
    }

    constructor(uint256 _initialSpace, uint256 _initialPrice, address _creator) {
        owner = _creator;
        totalDiskSpace = _initialSpace;
        availableDiskSpace = _initialSpace;
        rentalPrice = _initialPrice;
    }

    function createRental(uint256 _space, uint256 _durationInHours) external payable {
        require(_space > 0 && _space <= availableDiskSpace, "Invalid or insufficient available space");
        uint256 durationInSeconds = _durationInHours * 3600; // Convert hours to seconds
        uint256 cost = rentalPrice * _space * durationInSeconds;
        require(msg.value >= cost, "Insufficient funds sent");

        rentals.push(Rental({
            renter: msg.sender,
            space: _space,
            startTime: block.timestamp,
            endTime: block.timestamp + durationInSeconds,
            active: true
        }));

        availableDiskSpace -= _space;
        emit RentalCreated(msg.sender, _space, durationInSeconds);
    }

    function terminateRental(uint256 _rentalId) external onlyOwner {
        require(_rentalId < rentals.length, "Invalid rental ID");
        Rental storage rental = rentals[_rentalId];
        
        if (rental.active) {
            availableDiskSpace += rental.space;
            rental.active = false;
            uint256 durationInSeconds = rental.endTime - rental.startTime;
            uint256 cost = rentalPrice * rental.space * durationInSeconds;
            payable(rental.renter).transfer(cost);
            emit RentalTerminated(_rentalId);
        }
    }

    function getRentalCount() external view returns (uint256) {
        return rentals.length;
    }
}
