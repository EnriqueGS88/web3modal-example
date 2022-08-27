import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
require('dotenv').config();

export const providerOptions = {
    walletlink: {
        package: CoinbaseWalletSDK, // requried
        options: {
            appName: "Web 3 Modal Example", // required
            infuraId: process.env.INFURA_ID
        }
    },
    walletconnect: {
        package: WalletConnect, // required
        options: {
            infuraId: process.env.INFURA_ID
        }
    }
}
