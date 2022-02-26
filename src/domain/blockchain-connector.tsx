import Web3 from 'web3'
import { Paper } from '../model/Paper';
import { User } from '../model/User';

const SMART_CONTRACT_ABI = require('../components/config');
const SMART_CONTRACT_ADDRESS = require('../components/config');

export async function loadBlockchainData<Type>(dataType: String, data?: Array<any>): Promise<Type | null>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
    contract.options.address =  '0x7d28858a0e87b0a26A93830065a1f2BC47716906'
    
    switch(dataType) {
        case "user": {
            const result: Type = await contract.methods.users("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
            return result
        }
        case "paper": {
            const result: Type = await contract.methods.papers("6").call({ from: accounts[0] })
            return result
        }
        case "papers": {
            const result: Type = await contract.methods.getPapers().call({ from: accounts[0] })
            return result
        }
        case "uploadPaper": {
            if(data != undefined) {
                const result: Type = await contract.methods.addPaper(6, "#000", data[0], data[1], data[2], data[3], "0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
                return result
            }
            return null
        }
        case "userPapers": {
            const result: Type = await contract.methods.getAuthoredPapers("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
            return result
        }
        default: {
            return null
        }
    }
 }
