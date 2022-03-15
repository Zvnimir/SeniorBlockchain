import Web3 from 'web3'
import { Paper } from '../model/Paper';
import { User } from '../model/User';

const SMART_CONTRACT_ABI = require('../components/config_token');
const SMART_CONTRACT_ADDRESS = require('../components/config_token');

export async function loadBlockchainData_token<Type>(dataType: String, data?: Array<any>): Promise<Type | null>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
    contract.options.address =  '0x391FeFB1F69743999cb6102bDEB15bF2DA8099FC'
    
    switch(dataType) {
        //user
        case "balance": {
            const result: Type = await contract.methods.balanceOf("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
            console.log(result)
            return result
        }

        case "sendIntialTokens": {
            const result: Type = await contract.methods.transfer("0x9c78997736fA83b8b254342638CcCaF3d2b01f1d", 100).send({ from: accounts[0] })
            console.log(result)
            return result
        }
        case "sendDegreeTokens": {
            const result: Type = await contract.methods.transfer("0x9c78997736fA83b8b254342638CcCaF3d2b01f1d", 200).send({ from: accounts[0] })
            console.log(result)
            return result
        }

        
        default: {
            return null
        }
    }
 }
