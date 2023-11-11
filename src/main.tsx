import React from "react";
import { createRoot } from "react-dom/client";
import App from "./App";
import {
  ThirdwebProvider,
  localWallet,
  smartWallet,
} from "@thirdweb-dev/react";
import "./styles/globals.css";
import { Goerli, Mumbai } from "@thirdweb-dev/chains";

// This is the chain your dApp will work on.
// Change this to the chain your app is built for.
// You can also import additional chains from `@thirdweb-dev/chains` and pass them directly.
export const activeChain = Mumbai;

export const smartWalletConfig = smartWallet(localWallet(), {
  factoryAddress: "0x1D4B52d6b93a448340997Fb3e9C183D5Bf5f727a",
  gasless: true,
});

export const editionDropAddress = "0x2a444530FDe90d819d03D58AE19665F708Fba1d6";
export const editionDropTokenId = "0";
export const secondNFTTokenId = "1";

const container = document.getElementById("root");
const root = createRoot(container!);
root.render(
  <React.StrictMode>
    <ThirdwebProvider
      clientId={import.meta.env.VITE_TEMPLATE_CLIENT_ID}
      activeChain={activeChain}
      supportedWallets={[smartWalletConfig]}
    >
      <App />
    </ThirdwebProvider>
  </React.StrictMode>
);
