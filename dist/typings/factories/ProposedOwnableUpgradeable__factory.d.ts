import { Signer } from "ethers";
import { Provider } from "@ethersproject/providers";
import type { ProposedOwnableUpgradeable, ProposedOwnableUpgradeableInterface } from "../ProposedOwnableUpgradeable";
export declare class ProposedOwnableUpgradeable__factory {
    static readonly abi: ({
        inputs: any[];
        name: string;
        type: string;
        anonymous?: undefined;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        anonymous: boolean;
        inputs: {
            indexed: boolean;
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        type: string;
        outputs?: undefined;
        stateMutability?: undefined;
    } | {
        inputs: any[];
        name: string;
        outputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    } | {
        inputs: {
            internalType: string;
            name: string;
            type: string;
        }[];
        name: string;
        outputs: any[];
        stateMutability: string;
        type: string;
        anonymous?: undefined;
    })[];
    static createInterface(): ProposedOwnableUpgradeableInterface;
    static connect(address: string, signerOrProvider: Signer | Provider): ProposedOwnableUpgradeable;
}
