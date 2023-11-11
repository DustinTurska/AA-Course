import React from "react";
import { useOwnedNFTs, useContract, useAddress, ThirdwebNftMedia } from "@thirdweb-dev/react";
import { editionDropAddress } from "../main";

interface NFTData {
  metadata: {
    id: string;
    uri: string;
    name?: string | number | undefined;
    description?: string | undefined;
    image?: string | undefined;
    external_url?: string | undefined;
    animation_url?: string | undefined;
    background_color?: string | undefined;
    properties?: {
      [x: string]: unknown;
    } | {
      [x: string]: unknown;
    }[] | undefined;
  };
  owner: string;
  type: "ERC1155" | "ERC721" | "metaplex"; // Add "metaplex" if needed
  supply: number;
  quantityOwned?: number | undefined; // Only available for ERC1155
}

export const BalanceDisplay = () => {
  const contractAddress = editionDropAddress;
  const address = useAddress();
  const { contract } = useContract(contractAddress);
  const { data, isLoading, error } = useOwnedNFTs(contract, address);

  // Transform the data into the desired format
  const transformedData: NFTData[] = data?.map((nft) => ({
    metadata: {
      id: nft.metadata.id,
      uri: nft.metadata.uri,
      name: nft.metadata.name ?? undefined,
      description: nft.metadata.description ?? undefined,
      image: nft.metadata.image ?? undefined,
      external_url: nft.metadata.external_url ?? undefined,
      animation_url: nft.metadata.animation_url ?? undefined,
      background_color: nft.metadata.background_color ?? undefined,
      properties: nft.metadata.properties ?? undefined,
    },
    owner: nft.owner,
    type: nft.type,
    supply: Number(nft.supply), // Convert supply to a number
    quantityOwned: nft.quantityOwned ? parseInt(nft.quantityOwned, 10) : undefined, // Convert quantityOwned to a number
  })) || [];

  return (
    <div>
      {isLoading && <div>Loading...</div>}
      {!isLoading && !error && (
        <div style={{ display: "flex", flexWrap: "wrap" }}>
          {transformedData.map((nft, index) => (
            <div key={index} style={{ margin: "10px", textAlign: "center" }}>
              <img src={nft.metadata.image} alt="NFT" style={{ width: '150px', height: '150px' }} />
              <p style={{ margin: "0" }}>{nft.metadata.name} # {nft.metadata.id}</p>
              <p>Quantity Owned:{nft.quantityOwned}</p>
              {/* <p>{nft.metadata.description}</p> */}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};
