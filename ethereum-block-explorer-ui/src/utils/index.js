import { ethers } from "ethers";

// Alchemy/Infura HTTP endpoint URL
const url = process.env.REACT_APP_ALCHEMY_MAINNET_ENDPOINT

// hook up ethers provider
const provider = new ethers.providers.JsonRpcProvider(url);

export async function getLatestBlockNumber(){
    // Look up the current block numbe
    return await provider.getBlockNumber()
}

export const getBlockWithTransactions = async (blockNumber) =>{
    return  await provider.getBlockWithTransactions(blockNumber);
}
export const geBlock = async (blockNumber) =>{
    return  await provider.getBlock(blockNumber);
}