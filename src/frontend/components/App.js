
import { useEffect, useState } from "react";
import './App.css';
import Navigation from './Navbar/Navbar.js';
 
function App() {

  const [wallet, setWallet] = useState(null);
  const [chain, setChain] = useState("");

  const [CONFIG, SET_CONFIG] = useState({
    CONTRACT_ADDRESS: "0xeF453154766505FEB9dBF0a58E6990fd6eB66969",

    SCAN_LINK: "https://polygonscan.com/",

    NETWORK: {
      NAME: "Polygon",
      SYMBOL: "Matic",
      ID: "0x89",
    },
    MAX_SUPPLY: 1302,
    DISPLAY_COST: 0,
    GAS_LIMIT: 985000,
    MARKETPLACE: "opensea",
    MARKETPLACE_LINK: `https://opensea.io/collection/mrcrypto-by-racksmafia/`,
  });

  const getUserWallet = async (e) => {
    const ethereum = window.ethereum;
    if (ethereum) {
      try {
        const eth = await ethereum.request({ method: "eth_requestAccounts" });

        let chainId = await ethereum.request({ method: "eth_chainId" });
        console.log("connected to chain" + chainId);
        setChain(chainId);
        const walletReduce = (eth[0].substring(0,5) + "..." + eth[0].substring(38, 42)).toUpperCase();
        setWallet(walletReduce);
        if (chainId != CONFIG.NETWORK.ID) return addPolygonNetwork();
      } catch (error) {
        setWallet(null);
      }
    }
  };

  async function addPolygonNetwork() {
    const { ethereum } = window;

    try {
      //si el usuario ya tiene matic añadida, se cambia a esa red(en este caso es la testnet de matic)
      await ethereum.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x89" }], // Hexadecimal version of 80001, prefixed with 0x
      });
    } catch (error) {
      console.log(error);
      // si no tiene matic añadimos pedimos permiso para que añada
      if (error.code === 4902) {
        try {
          await ethereum.request({
            method: "wallet_addEthereumChain",
            params: [
              {
                chainId: "0x89", // Hexadecimal version of 80001, prefixed with 0x
                chainName: "Polygon",
                nativeCurrency: {
                  name: "MATIC",
                  symbol: "MATIC",
                  decimals: 18,
                },
                rpcUrls: ["https://polygon-rpc.com"],
                blockExplorerUrls: ["https://polygonscan.com/"],
                iconUrls: [
                  "https://cryptologos.cc/logos/polygon-matic-logo.png",
                ],
              },
            ],
          });
        } catch (addError) {
          console.log("Did not add network");
        }
      }
    }
  }

  return (
    <div>
      <>
        <Navigation getUserWallet={getUserWallet} wallet={wallet}/>
      </>
    </div>
  );
}

export default App;
