// import {
//   useAddress,
//   useContract,
//   useNFT,
//   useOwnedNFTs,
//   Web3Button,
//   ThirdwebNftMedia,
// } from "@thirdweb-dev/react";
// import { editionDropAddress, editionDropTokenId } from "../main";

// export const NFTComponent = () => {
//   const address = useAddress();
//   const { contract: editionDropContract } = useContract(editionDropAddress);
//   const { data: nft, isLoading: isNftLoading } = useNFT(
//     editionDropContract,
//     editionDropTokenId
//   );
//   const { data: ownedNfts } = useOwnedNFTs(editionDropContract, address);

//   return (
//     <div className="card" style={{ marginBottom: "20px" }}>
//       {" "}
//       {isNftLoading ? (
//         "Loading..."
//       ) : (
//         <>
//           {nft ? (
//             <ThirdwebNftMedia
//               metadata={nft.metadata}
//               style={{ width: "100%", marginTop: "10px" }}
//             />
//           ) : null}
//           {address ? (
//             <>
//               <p
//                 style={{
//                   textAlign: "center",
//                   width: "100%",
//                   marginTop: "10px",
//                 }}
//               >
//                 You own {ownedNfts?.[0]?.quantityOwned || "0"} NFTs
//               </p>
//               <Web3Button
//                 contractAddress={editionDropAddress}
//                 action={(contract) =>
//                   contract.erc1155.claim(editionDropTokenId, 1)
//                 }
//                 onSuccess={async () => {
//                   alert("Claim successful!");
//                 }}
//                 style={{ width: "100%", marginTop: "10px" }}
//               >
//                 Claim!
//               </Web3Button>
//             </>
//           ) : (
//             <p
//               style={{
//                 textAlign: "center",
//                 width: "100%",
//                 marginTop: "10px",
//               }}
//             >
//               Login to claim this NFT!
//             </p>
//           )}
//         </>
//       )}
//     </div>
//   );
// };
// import React, { useState, useEffect } from "react";
// import {
//   useAddress,
//   useContract,
//   useNFT,
//   useOwnedNFTs,
//   Web3Button,
//   ThirdwebNftMedia,
// } from "@thirdweb-dev/react";
// import { editionDropAddress, editionDropTokenId, secondNFTTokenId } from "../main";

// export const NFTComponent = () => {
//   const address = useAddress();
//   const { contract: editionDropContract } = useContract(editionDropAddress);
//   const { data: nft, isLoading: isNftLoading } = useNFT(
//     editionDropContract,
//     editionDropTokenId
//   );
//   const { data: ownedNfts } = useOwnedNFTs(editionDropContract, address);

//   const { contract: secondNFTContract } = useContract(editionDropAddress);
//   const { data: secondNFT, isLoading: isSecondNftLoading } = useNFT(
//     secondNFTContract,
//     secondNFTTokenId
//   );

//   // State to track whether the user has minted the first NFT
//   const [hasMintedFirstNFT, setHasMintedFirstNFT] = useState(false);

//   // Check if the user has minted the first NFT when ownedNfts data changes
//   useEffect(() => {
//     if (ownedNfts && ownedNfts.length > 0) {
//       setHasMintedFirstNFT(true);
//     } else {
//       setHasMintedFirstNFT(false);
//     }
//   }, [ownedNfts]);

//   return (
//     <div className="card" style={{ marginBottom: "20px" }}>
//       {isNftLoading ? (
//         "Loading..."
//       ) : (
//         <>
//           {nft ? (
//             <>
//               <ThirdwebNftMedia
//                 metadata={nft.metadata}
//                 style={{ width: "100%", marginTop: "10px" }}
//               />
//               <Web3Button
//                 contractAddress={editionDropAddress}
//                 action={(contract) =>
//                   contract.erc1155.claim(editionDropTokenId, 1)
//                 }
//                 onSuccess={async () => {
//                   alert("Claim successful!");
//                   // User has minted the first NFT, update the state
//                   setHasMintedFirstNFT(true);
//                 }}
//                 style={{ width: "100%", marginTop: "10px" }}
//               >
//                 Claim!
//               </Web3Button>
//             </>
//           ) : null}
//         </>
//       )}

//       {hasMintedFirstNFT && !isSecondNftLoading && secondNFT ? (
//         <>
//           <ThirdwebNftMedia
//             metadata={secondNFT.metadata}
//             style={{ width: "100%", marginTop: "10px" }}
//           />
//           <Web3Button
//             contractAddress={editionDropAddress}
//             action={(contract) =>
//               contract.erc1155.claim(secondNFTTokenId, 1)
//             }
//             onSuccess={async () => {
//               alert("Second NFT Claim successful!");
//             }}
//             style={{ width: "100%", marginTop: "10px" }}
//           >
//             Claim Second NFT!
//           </Web3Button>
//         </>
//       ) : null}

//       {!hasMintedFirstNFT && (
//         <p
//           style={{
//             textAlign: "center",
//             width: "100%",
//             marginTop: "10px",
//           }}
//         >
//           Mint the first NFT before claiming the second one.
//         </p>
//       )}
//     </div>
//   );
// };

import React, { useState, useEffect } from "react";
import {
  useAddress,
  useContract,
  useNFT,
  useOwnedNFTs,
  Web3Button,
  ThirdwebNftMedia,
} from "@thirdweb-dev/react";
import { editionDropAddress, editionDropTokenId, secondNFTTokenId } from "../main";

export const NFTComponent = () => {
  const address = useAddress();
  const { contract: editionDropContract } = useContract(editionDropAddress);
  const { data: nft, isLoading: isNftLoading } = useNFT(
    editionDropContract,
    editionDropTokenId
  );
  const { data: ownedNfts } = useOwnedNFTs(editionDropContract, address);

  const { contract: secondNFTContract } = useContract(editionDropAddress);
  const { data: secondNFT, isLoading: isSecondNftLoading } = useNFT(
    secondNFTContract,
    secondNFTTokenId
  );

  // State to track whether the user has minted the first NFT
  const [hasMintedFirstNFT, setHasMintedFirstNFT] = useState(false);

  // State to track whether the second NFT claiming is disabled due to a timer
  const [isSecondNFTClaimDisabled, setIsSecondNFTClaimDisabled] = useState(false);

  // Timer duration (5 minutes in milliseconds)
  const timerDuration = 5 * 60 * 1000; // 5 minutes

  // Function to enable the second NFT claiming after the timer expires
  const enableSecondNFTClaim = () => {
    setIsSecondNFTClaimDisabled(false);
  };

  // Variable to store the start time of the timer
  let timerStartTime = 0;

  // Check if the user has minted the first NFT when ownedNfts data changes
  useEffect(() => {
    if (ownedNfts && ownedNfts.length > 0) {
      setHasMintedFirstNFT(true);

      // Start a timer to enable the second NFT claiming after 5 minutes
      timerStartTime = Date.now();
      setTimeout(enableSecondNFTClaim, timerDuration);
    } else {
      setHasMintedFirstNFT(false);
    }
  }, [ownedNfts]);

  return (
    <div className="card" style={{ marginBottom: "20px" }}>
      {isNftLoading ? (
        "Loading..."
      ) : (
        <>
          {nft ? (
            <>
              <ThirdwebNftMedia
                metadata={nft.metadata}
                style={{ width: "100%", marginTop: "10px" }}
              />
              <Web3Button
                connectWallet={{
                  btnTitle: "Create Account",
                  modalTitle: "Login",
                }}
                contractAddress={editionDropAddress}
                action={(contract) =>
                  contract.erc1155.claim(editionDropTokenId, 1)
                }
                onSuccess={async () => {
                  alert("Claim successful!");
                  // User has minted the first NFT, update the state
                  setHasMintedFirstNFT(true);
                  // Start a timer to enable the second NFT claiming after 5 minutes
                  timerStartTime = Date.now(); // Reset the timer start time
                  setTimeout(enableSecondNFTClaim, timerDuration);
                }}
                style={{ width: "100%", marginTop: "10px" }}
              >
                Claim!
              </Web3Button>
            </>
          ) : null}
        </>
      )}

      {!hasMintedFirstNFT && (
        <p
          style={{
            textAlign: "center",
            width: "100%",
            marginTop: "10px",
          }}
        >
          Create a free account to claim this NFT!
        </p>
      )}

      {hasMintedFirstNFT ? (
        <>
          {isSecondNftLoading ? (
            "Loading Second NFT..."
          ) : (
            <>
              {secondNFT?.metadata ? (
                <ThirdwebNftMedia
                  metadata={secondNFT.metadata}
                  style={{ width: "100%", marginTop: "10px" }}
                />
              ) : null}
              <Web3Button
                contractAddress={editionDropAddress}
                action={(contract) =>
                  contract.erc1155.claim(secondNFTTokenId, 1)
                }
                onSuccess={async () => {
                  alert("Second NFT Claim successful!");
                }}
                style={{
                  width: "100%",
                  marginTop: "10px",
                }}
                isDisabled={isSecondNFTClaimDisabled}
              >
                {isSecondNFTClaimDisabled
                  ? `Claim Second NFT in ${Math.ceil(
                      (timerDuration - (Date.now() - timerStartTime)) / 1000
                    )} seconds`
                  : "Claim Second NFT!"}
              </Web3Button>
            </>
          )}
        </>
      ) : null}
    </div>
  );
};
