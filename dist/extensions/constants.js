"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ContractNames = exports.NETWORK_CONFIGS = exports.NetworkNames = void 0;
var NetworkNames;
(function (NetworkNames) {
    NetworkNames["Mainnet"] = "mainnet";
    NetworkNames["Ropsten"] = "ropsten";
    NetworkNames["Rinkeby"] = "rinkeby";
    NetworkNames["Goerli"] = "goerli";
    NetworkNames["Kovan"] = "kovan";
    NetworkNames["Xdai"] = "xdai";
    NetworkNames["Sokol"] = "sokol";
    NetworkNames["Bsc"] = "bsc";
    NetworkNames["BscTest"] = "bscTest";
    NetworkNames["Fantom"] = "fantom";
    NetworkNames["FantomTest"] = "fantomTest";
    NetworkNames["Matic"] = "matic";
    NetworkNames["Mumbai"] = "mumbai";
    NetworkNames["Avalanche"] = "avalanche";
    NetworkNames["Fuji"] = "fuji";
    NetworkNames["Aurora"] = "aurora";
    NetworkNames["AuroraTest"] = "auroraTest";
    NetworkNames["Arbitrum"] = "arbitrum";
    NetworkNames["ArbitrumTest"] = "arbitrumTest";
    NetworkNames["Optimism"] = "optimism";
    NetworkNames["OptimismKovan"] = "optimismKovan";
    NetworkNames["Moonbeam"] = "moonbeam";
    NetworkNames["Moonbase"] = "moonbase";
    NetworkNames["Fuse"] = "fuse";
    NetworkNames["FuseSparknet"] = "fuseSparknet";
    NetworkNames["Celo"] = "celo";
    NetworkNames["CeloTest"] = "celoTest";
    NetworkNames["ArbitrumNova"] = "arbitrumNova";
    NetworkNames["ArbitrumNitro"] = "arbitrumNitro";
    NetworkNames["Etherspot"] = "etherspot";
    NetworkNames["LocalA"] = "localA";
    NetworkNames["LocalB"] = "localB";
    NetworkNames["LocalH"] = "localH";
})(NetworkNames = exports.NetworkNames || (exports.NetworkNames = {}));
exports.NETWORK_CONFIGS = {
    [NetworkNames.Mainnet]: {
        chainId: 1,
        defaultProviderUrl: "infura",
        explorer: "https://etherscan.io",
    },
    [NetworkNames.Ropsten]: {
        chainId: 3,
        defaultProviderUrl: "infura",
        defaultGasPrice: 1,
        explorer: "https://ropsten.etherscan.io",
    },
    [NetworkNames.Rinkeby]: {
        chainId: 4,
        defaultProviderUrl: "infura",
        defaultGasPrice: 1,
        explorer: "https://rinkeby.etherscan.io",
    },
    [NetworkNames.Goerli]: {
        chainId: 5,
        defaultProviderUrl: "infura",
        defaultGasPrice: 1,
        explorer: "https://goerli.etherscan.io",
    },
    [NetworkNames.Kovan]: {
        chainId: 42,
        defaultProviderUrl: "infura",
        defaultGasPrice: 1,
        explorer: "https://kovan.etherscan.io",
    },
    [NetworkNames.Xdai]: {
        chainId: 100,
        defaultProviderUrl: "https://rpc.xdaichain.com",
        defaultGasPrice: 1,
        explorer: "https://blockscout.com/poa/xdai",
    },
    [NetworkNames.Sokol]: {
        chainId: 77,
        defaultProviderUrl: "https://sokol.poa.network",
        defaultGasPrice: 1,
        explorer: "https://blockscout.com/poa/sokol",
    },
    [NetworkNames.Bsc]: {
        chainId: 56,
        defaultProviderUrl: "https://bsc-dataseed1.binance.org",
        defaultGasPrice: 20,
        explorer: "https://bscscan.com",
    },
    [NetworkNames.BscTest]: {
        chainId: 97,
        defaultProviderUrl: "https://data-seed-prebsc-1-s2.binance.org:8545",
        defaultGasPrice: 20,
        explorer: "https://testnet.bscscan.com",
    },
    [NetworkNames.Fantom]: {
        chainId: 250,
        defaultProviderUrl: "https://rpcapi.fantom.network",
        explorer: "https://ftmscan.com",
    },
    [NetworkNames.FantomTest]: {
        chainId: 4002,
        defaultProviderUrl: "https://rpc.testnet.fantom.network",
        defaultGasPrice: 22,
        explorer: {
            address: "https://explorer.testnet.fantom.network/address",
            transaction: "https://explorer.testnet.fantom.network/transactions",
        },
    },
    [NetworkNames.Matic]: {
        chainId: 137,
        defaultProviderUrl: "https://rpc-mainnet.maticvigil.com",
        explorer: "https://polygonscan.com",
    },
    [NetworkNames.Mumbai]: {
        chainId: 80001,
        defaultProviderUrl: "https://matic-mumbai.chainstacklabs.com",
        defaultGasPrice: 5,
        explorer: "https://mumbai.polygonscan.com",
    },
    [NetworkNames.Avalanche]: {
        chainId: 43114,
        defaultProviderUrl: "https://api.avax.network/ext/bc/C/rpc",
        explorer: "https://snowtrace.io",
    },
    [NetworkNames.Fuji]: {
        chainId: 43113,
        defaultProviderUrl: "https://api.avax-test.network/ext/bc/C/rpc",
        explorer: "https://testnet.snowtrace.io",
        defaultGasPrice: 25,
    },
    [NetworkNames.Aurora]: {
        chainId: 1313161554,
        defaultProviderUrl: "https://mainnet.aurora.dev",
        defaultGasPrice: 3,
    },
    [NetworkNames.AuroraTest]: {
        chainId: 1313161555,
        defaultProviderUrl: "https://testnet.aurora.dev/",
        defaultGasPrice: 3,
    },
    [NetworkNames.Arbitrum]: {
        chainId: 42161,
        defaultProviderUrl: "https://arb1.arbitrum.io/rpc",
        defaultGasPrice: 1,
    },
    [NetworkNames.ArbitrumTest]: {
        chainId: 421611,
        defaultProviderUrl: "https://rinkeby.arbitrum.io/rpc",
        defaultGasPrice: 1,
    },
    [NetworkNames.Optimism]: {
        chainId: 10,
        defaultProviderUrl: "https://mainnet.optimism.io",
        defaultGasPrice: 3,
    },
    [NetworkNames.OptimismKovan]: {
        chainId: 69,
        defaultProviderUrl: "https://kovan.optimism.io",
        defaultGasPrice: 3,
    },
    [NetworkNames.Moonbeam]: {
        chainId: 1284,
        defaultProviderUrl: "https://rpc.api.moonbeam.network",
        defaultGasPrice: 100,
    },
    [NetworkNames.Moonbase]: {
        chainId: 1287,
        defaultProviderUrl: "https://rpc.api.moonbase.moonbeam.network",
        defaultGasPrice: 1,
    },
    [NetworkNames.Celo]: {
        chainId: 42220,
        defaultProviderUrl: "https://forno.celo.org",
        defaultGasPrice: 1,
    },
    [NetworkNames.CeloTest]: {
        chainId: 44787,
        defaultProviderUrl: "https://alfajores-forno.celo-testnet.org",
        defaultGasPrice: 1,
    },
    [NetworkNames.Fuse]: {
        chainId: 122,
        defaultProviderUrl: "https://rpc.fuse.io",
        defaultGasPrice: 1,
    },
    [NetworkNames.FuseSparknet]: {
        chainId: 123,
        defaultProviderUrl: "https://rpc.fusespark.io",
        defaultGasPrice: 1,
    },
    [NetworkNames.ArbitrumNova]: {
        chainId: 42170,
        defaultProviderUrl: "https://nova.arbitrum.io/rpc",
        defaultGasPrice: 1,
    },
    [NetworkNames.ArbitrumNitro]: {
        chainId: 421613,
        defaultProviderUrl: "https://goerli-rollup-explorer.arbitrum.io",
        defaultGasPrice: 1,
    },
    [NetworkNames.Fuse]: {
        chainId: 122,
        defaultProviderUrl: 'https://rpc.fuse.io',
        defaultGasPrice: 1,
    },
    [NetworkNames.FuseSparknet]: {
        chainId: 123,
        defaultProviderUrl: 'https://rpc.fusespark.io',
        defaultGasPrice: 1,
    },
    [NetworkNames.Etherspot]: {
        chainId: 4386,
        defaultProviderUrl: "https://qa-etherspot-testnet.pillarproject.io",
        defaultGasPrice: 20,
    },
    [NetworkNames.LocalA]: {
        chainId: 9999,
        defaultProviderUrl: "http://localhost:8545",
        defaultGasPrice: 20,
    },
    [NetworkNames.LocalB]: {
        chainId: 6666,
        defaultProviderUrl: "http://localhost:9545",
        defaultGasPrice: 20,
    },
};
var ContractNames;
(function (ContractNames) {
    ContractNames["BalancesHelper"] = "BalancesHelper";
    ContractNames["ENSController"] = "ENSController";
    ContractNames["ENSHelper"] = "ENSHelper";
    ContractNames["ENSRegistry"] = "ENSRegistry";
    ContractNames["ENSReverseRegistrar"] = "ENSReverseRegistrar";
    ContractNames["ExternalAccountRegistry"] = "ExternalAccountRegistry";
    ContractNames["Gateway"] = "Gateway";
    ContractNames["PaymentRegistry"] = "PaymentRegistry";
    ContractNames["PersonalAccountImplementationV1"] = "PersonalAccountImplementationV1";
    ContractNames["PersonalAccountRegistry"] = "PersonalAccountRegistry";
    ContractNames["WrappedWeiToken"] = "WrappedWeiToken";
})(ContractNames = exports.ContractNames || (exports.ContractNames = {}));
