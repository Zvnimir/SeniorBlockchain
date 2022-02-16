import Web3 from 'web3'
import { User } from '../model/User';

const SMART_CONTRACT_ABI = require('../components/config');
const SMART_CONTRACT_ADDRESS = require('../components/config');

export const loadBlockchainData = async (dataType: String) => {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
    contract.options.address =  "0xA742a55b2021A89c7BE5B0c6230B4724a4E1f279"
    
    switch(dataType) {
        case "user": {
            const userCount: User = await contract.methods.users("0x9c78997736fA83b8b254342638CcCaF3d2b01f1d").call({ from: accounts[0] })
            return userCount
            break;
        }
        default: {
            return null
            break;
        }
    }
 }