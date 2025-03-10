import axios from "axios";
import { Network, Alchemy } from "alchemy-sdk";


export async function getTokensForAccount(wallet:string) {


    if (!process.env.ALCHEMY_API_KEY) {
        throw new Error(
          "⛔ ALCHEMY_API_KEY environment variable is not set. You need to set it to connect with Alchemy API."
        );
    }

    const settings = {
        apiKey: process.env.ALCHEMY_API_KEY, // Replace with your Alchemy API Key.
        network: Network.SCROLL_MAINNET, // Replace with your network.
      };
    const alchemy = new Alchemy(settings);

    // Print token balances of USDC in Vitalik's address
    const balances = await alchemy.core.getTokenBalances(wallet);

    return balances.tokenBalances;
};