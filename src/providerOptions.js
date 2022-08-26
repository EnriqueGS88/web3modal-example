import WalletConnect from "@walletconnect/web3-provider";
import CoinbaseWalletSDK from "@coinbase/wallet-sdk";
import 'dotenv';

export const providerOptions = {
    walletlink: {
        package: CoinbaseWalletSDK, // requried
        options: {
            appName: "Web 3 Modal Example", // required
            infuraId: process.env.INFURA_ID //  infura ID to be checked
        }
    },
    walletconnect: {
        package: WalletConnect, // required
        options: {
            infuraId: process.env.INFURA_ID // to be checked again
        }
    }
}
