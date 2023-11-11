// import React, { useEffect, useState } from "react"; // Import necessary dependencies
// import { useContract, useContractRead, useAddress } from "@thirdweb-dev/react";
// import { editionDropAddress } from "../main";

// export default function OwnedNFTs() {
//   const [account, setAccount] = useState(""); // Define and set the account state
//   const [id, setId] = useState(""); // Define and set the id state
//   const address = useAddress(); // Get the current address

//   // Replace this with your actual contract address
//   const contractAddress = editionDropAddress;

//   // Get the contract instance
//   const { contract } = useContract(contractAddress);

//   // Fetch the balanceOf data
//   const { data, isLoading } = useContractRead(contract, "balanceOf", [account, id]);

//   useEffect(() => {}, []); 

//   return (
//     <div>
//       {isLoading ? (
//         <p>Loading...</p>
//       ) : (
//         <p>Balance: {data}</p>
        
//       )}
//     </div>
//   );
// }
import React, { useEffect, useState } from "react";
import { useContract, useContractRead, useAddress } from "@thirdweb-dev/react";

interface BalanceDisplayProps {
  contractAddress: string;
  address: string[];
  ids: number[];
}


export default function BalanceDisplay({
  contractAddress,
  address,
  ids,
}: BalanceDisplayProps) {
  // Use the useContract hook to get a reference to the contract
  const { contract } = useContract(
    contractAddress
  );

  // Use the useContractRead hook to read data from the contract
  const { data, isLoading } = useContractRead(
    contract,
    "balanceOfBatch",
    [address, ids]
  );

  return (
    <div>
      {isLoading ? (
        <p>Loading...</p>
      ) : (
        <div>
          <h2>Balance of Batch</h2>
          <ul>
            {data.map((balance: string, index: number) => (
              <li key={index}>
                Account {address[index]}: {balance}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}
