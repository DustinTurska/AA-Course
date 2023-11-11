import { ConnectWallet, smartWallet } from "@thirdweb-dev/react";
import "./styles/Home.css";
import { NFTComponent } from "./components/nft";
import { ConnectUI } from "./components/connect";
import { AddSigner } from "./components/add-signer";
import { AddMetamask } from "./components/add-metamask";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <br/>
          <div className="connect">
            {/* <ConnectWallet btnTitle="Connect" /> */}
          </div>
        </div>
        {/* <div className="connect">
          <hr className="divider" />
          <p className="description">
            Already have an account? Enter your password to connect.
          </p>
        </div> */}
        {/* <ConnectUI /> */}
        {/* <hr className="divider" /> */}
        <p className="description">
          Allow your users to claim NFTs for completing tasks!
        </p>
        <NFTComponent />
        {/* <hr className="divider" />
        <p className="description">
          You can also add temporary session keys to your smart wallet
        </p>
        <AddSigner />
        <hr className="divider" />
        <p className="description">
          You can also add Metamask with <code className="code">{"addAdmin()"}</code> as another admin to your smart wallet
          </p> */}
        {/* <AddMetamask /> */}
        <hr className="divider" />
      </div>
    </main>
  );
}
