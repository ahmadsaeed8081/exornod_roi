import { http, createConfig } from 'wagmi'
import { polygon, polygonAmoy } from "wagmi/chains";
import { defaultWagmiConfig } from "@web3modal/wagmi/react/config";
import { createWeb3Modal } from "@web3modal/wagmi/react";
import { createClient } from 'viem'


const projectId = process.env.REACT_APP_WC_PROJECT_ID;
const metadata = {  
    name: "Exornode",
    description: "",
    url: "https://Exornode.io/",
    icons: ["https://Exornode.io/"]
    
};

export const config = defaultWagmiConfig({
    chains: process.env.REACT_APP_ENV == "production" ? [polygon] : [polygonAmoy],
    projectId,
    metadata
});

createWeb3Modal({
    wagmiConfig: config,
    projectId,

});