
import instance from "../../ethereum/factory";

export const getDeployedRentalSystems = async () => {
  try {
    const deployedSystems = await instance.methods.getDeployedRentalSystems().call();

    console.log("Deployed Rental System Addresses:");
    deployedSystems.forEach((address, index) => {
      console.log(`Instance ${index + 1}: ${address}`);
    });

    return deployedSystems; // Return the fetched data
  } catch (error) {
    console.error("Error:", error);
    return []; // Return an empty array in case of an error
  }
};
