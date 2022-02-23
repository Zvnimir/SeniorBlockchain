import Web3 from 'web3'
import { Paper } from '../model/Paper';
import { User } from '../model/User';

const SMART_CONTRACT_ABI = require('../components/config');
const SMART_CONTRACT_ADDRESS = require('../components/config');

export async function loadBlockchainData<Type>(dataType: String): Promise<Type | null>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
    contract.options.address =  "0xA742a55b2021A89c7BE5B0c6230B4724a4E1f279"
    
    switch(dataType) {
        case "user": {
            const result: Type = await contract.methods.users("0x9c78997736fA83b8b254342638CcCaF3d2b01f1d").call({ from: accounts[0] })
            return result
        }
        case "paper": {
            const result: Type = await contract.methods.papers("1").call({ from: accounts[0] })
            return result
        }
        default: {
            return null
        }
    }
 }