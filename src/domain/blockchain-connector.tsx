import Web3 from 'web3'
import { Paper } from '../model/Paper';
import { User } from '../model/User';

const SMART_CONTRACT_ABI = require('../components/config');
const SMART_CONTRACT_ADDRESS = require('../components/config');

export async function loadBlockchainData<Type>(dataType: String, data?: Array<any>): Promise<Type | null>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
    contract.options.address =  '0xd86BD99da142fB0303273f7a9D1D090f43F0261e'
    
    switch(dataType) {
        //user
        case "user": {
            const result: Type = await contract.methods.users("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
            return result
        }
        case "userPapers": {
            const result: Type = await contract.methods.getAuthoredPapers("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
            return result
        }

        //paper
        case "paper": {
            const result: Type = await contract.methods.getPaper(3).call({ from: accounts[0] })
            // .then((res: any) => {
            //     console.log(res)
            // })
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

        //review
        case "uploadReview": {
            if(data != undefined) {
                const result: Type = await contract.methods.addReview("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83", data[1], data[2]).send({ from: accounts[0] })
                return result
            }
            return null
        }
        case "paperReviews": {
            const result: Type = await contract.methods.getPaperReviews(0).call({ from: accounts[0] })
            return result
        }
        
        //login & regsiter
        case "login": {
            const result: Type = await contract.methods.login("admin@gmail.com","admin","0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").call({ from: accounts[0] })
            return result
        }
        case "register": {
            const result: Type = await contract.methods.register("emal", "firstname", "lastname", "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin gravida neque arcu, non aliquam lectus aliquet a. Suspendisse placerat mi at erat pellentesque venenatis. Mauris eget congue libero. Aenean viverra tincidunt massa a ultrices.", "password", "0x7b61FC9AbeB0ac95a66E04F8AE69f1DAA842A451").call({ from: accounts[0] })
            return result
        }
        
        //upload document to approve user
         case "requestAuthentication": {
            const result: Type = await contract.methods.requestAuthentication("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83","url").send({ from: accounts[0] })
            return result
        }

        case "unconfiredUsers": {
            const result: Type = await contract.methods.getUnaprovedUsers().call({ from: accounts[0] })
            console.log(result)
            return result
        }

        case "confirmUser": {
            const result: Type = await contract.methods.approveUser("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").send({ from: accounts[0] })
            console.log(result)
            return result
        }

        case "rejectUser": {
            const result: Type = await contract.methods.rejectUser("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83").send({ from: accounts[0] })
            console.log(result)
            return result
        }

        default: {
            return null
        }
    }
 }
