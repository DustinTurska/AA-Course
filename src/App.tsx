import "./styles/Home.css";
import { NFTComponent } from "./components/nft";
import BalanceDisplay from "./components/ownedNFTs";

export default function Home() {
  return (
    <main className="main">
      <div className="container">
        <div className="header">
          <br/>
          <div className="connect">
          </div>
        </div>
        <p className="description">
          Allow your users to claim NFTs for completing tasks!
        </p>
        <NFTComponent />
        <hr className="divider" />
        <BalanceDisplay contractAddress={""} address={[]} ids={[]} />
      </div>
    </main>
  );
}
