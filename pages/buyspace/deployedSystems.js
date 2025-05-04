import instance from "../../ethereum/factory";

export const getDeployedRentalSystems = async () => {
  try {
    const deployedSystems = await instance.methods.getDeployedRentalSystems().call();

    console.log("Deployed Rental System Addresses:");
    deployedSystems.forEach((address, index) => {
      console.log(`Instance ${index + 1}: ${address}`);
    });

    return deployedSystems;
  } catch (error) {
    console.error("Error:", error);
    return [];
  }
};
