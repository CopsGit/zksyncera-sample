import "@matterlabs/hardhat-zksync-deploy";
import "@matterlabs/hardhat-zksync-solc";
import "@matterlabs/hardhat-zksync-verify";

module.exports = {
    zksolc: {
        version: "1.3.9",
        compilerSource: "binary",
        settings: {},
    },
    defaultNetwork: "zkSyncTestnet",

    networks: {
        zkSyncTestnet: {
            url: "https://testnet.era.zksync.dev",
            ethNetwork: "https://goerli.infura.io/v3/2fb28504bc054b31ba2aa60e3b11f750", // RPC URL of the network (e.g. `https://goerli.infura.io/v3/<API_KEY>`)
            zksync: true,
            // Verification endpoint for Goerli
            verifyURL: 'https://zksync2-testnet-explorer.zksync.dev/contract_verification',
        },
    },
    solidity: {
        version: "0.8.8",
    },
};
