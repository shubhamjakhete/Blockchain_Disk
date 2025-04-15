import systeminstance from "../../../ethereum/mainsystem";

export const getRentalSystems = async () => {
  try {
    const rentalSystems = await instance.methods.getRental().call();

    console.log("Deployed Rental System Addresses:");
    rentalSystems.forEach((address, index) => {
      console.log(`Instance ${index + 1}: ${address}`);
    });

    return rentalSystems; // Return the fetched data
  } catch (error) {
    console.error("Error:", error);
    return []; // Return an empty array in case of an error
  }
};