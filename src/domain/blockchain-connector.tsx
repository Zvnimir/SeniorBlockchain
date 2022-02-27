import Web3 from 'web3'
import { Paper } from '../model/Paper';
import { User } from '../model/User';

const SMART_CONTRACT_ABI = require('../components/config');
const SMART_CONTRACT_ADDRESS = require('../components/config');

export async function loadBlockchainData<Type>(dataType: String, data?: Array<any>): Promise<Type | null>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
    contract.options.address =  '0xFd444f7BE6f466dd5dCD6525c02a40838787ab27'
    
    switch(dataType) {
        case "user": {
            const result: Type = await contract.methods.users("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
            return result
        }
        case "paper": {
            const result: Type = await contract.methods.papers("0").call({ from: accounts[0] })
            return result
        }
        case "papers": {
            const result: Type = await contract.methods.getPapers().call({ from: accounts[0] })
            return result
        }
        case "uploadPaper": {
            if(data != undefined) {
                const result: Type = await contract.methods.addPaper(3, "#000", data[0], data[1], data[2], data[3], "0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").send({ from: accounts[0] })
                return result
            }
            return null
        }
        case "userPapers": {
            const result: Type = await contract.methods.getAuthoredPapers("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
            return result
        }
        
        case "login": {
            const result: Type = await contract.methods.login("admin@gmail.com","admin","0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
            return result
        }

        case "register": {
            const result: Type = await contract.methods.register("emal", "firstname", "lastname", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida neque arcu, non aliquam lectus aliquet a. Suspendisse placerat mi at erat pellentesque venenatis. Mauris eget congue libero. Aenean viverra tincidunt massa a ultrices.", "password", "0x7b61FC9AbeB0ac95a66E04F8AE69f1DAA842A451").call({ from: accounts[0] })
            return result
        }
            
        default: {
            return null
        }
    }
 }
