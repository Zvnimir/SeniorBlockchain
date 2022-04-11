import Web3 from 'web3'

const SMART_CONTRACT_ABI = require('../components/config');
const SMART_CONTRACT_ADDRESS = require('../components/config');

declare let window: any;

export async function loadBlockchainData<Type>(dataType: String, data?: Array<any>): Promise<Type | null>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
    contract.options.address =  '0x282D6651071E6B6A6d6D3FBe5645B4dF7b2CBF02'
    const account = await readAddress()
   // 0x0A2eaD28469f8Ae961189Bc26CC8DC047c9dF853
    async function readAddress() {
        
        window.ethereum.request({method:'eth_requestAccounts'})
         .then(res=>{
            console.log("account",res)  
           })
         return  accounts[0];
     }

    switch(dataType) {
        //user
        case "user": {
            const result: Type = await contract.methods.users(account).call({ from: accounts[0] })
            console.log(result)
            return result
        }
        case "userPapers": {
            const result: Type = await contract.methods.getAuthoredPapers(account).call({ from: accounts[0] })
            return result
        }

        //paper
        case "paper": {
            const result: Type = await contract.methods.getPaper(data[0]).call({ from: accounts[0] })
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
                const result: Type = await contract.methods.addPaper(4, "#000", data[0], data[1], data[2], data[3], data[4], account).send({ from: accounts[0] })
                return result
            }
            return null
        }

        //review
        case "uploadReview": {
            if(data != undefined) {
                const result: Type = await contract.methods.addReview(account, data[1], data[2]).send({ from: accounts[0] })
                return result
            }
            return null
        }

        
        case "paperReviews": {
            const result: Type = await contract.methods.getPaperReviews(data[0]).call({ from: accounts[0] })
            return result
        }
        
        //login & regsiter
        case "login": {
            const result: Type = await contract.methods.login(data[0],data[1],account).call({ from: accounts[0] })
            return result
        }
        case "register": {
            const result: Type = await contract.methods.register(data[0], data[1], data[2], data[3], data[4], account, data[5]).send({ from: accounts[0] })
            return result
        }
        
        //upload document to approve user
         case "requestAuthentication": {
            const result: Type = await contract.methods.requestAuthentication(account,data[0]).send({ from: accounts[0] })
            console.log(data[0])
            return result
        }

        case "unconfiredUsers": {
            const result: Type = await contract.methods.getUnaprovedUsers().call({ from: accounts[0] })
            console.log(result)
            return result
        }

        case "confirmUser": {
            const result: Type = await contract.methods.approveUser(data[0]).send({ from: accounts[0] })
            console.log(result)
            return result
        }

        case "rejectUser": {
            const result: Type = await contract.methods.rejectUser(data[0]).send({ from: accounts[0] })
            console.log(result)
            return result
        }

        case "addDegree": {
            const result: Type = await contract.methods.addDegree(account, "Computer Science").send({ from: accounts[0] })
            console.log(result)
            return result
        }

        case "editUser": {

            const result: Type = await contract.methods.editUser(data[0],data[1],data[2], data[3], data[4],account).send({ from: accounts[0] })
            console.log(result)
            return result
        }

        case "sendReaction": {
            console.log(data[0])
            console.log(data[1])
            console.log(data[2])

            const result: Type = await contract.methods.sendReaction(data[0],data[1],data[2],'0xE0B6e5538CE13841B19A022cA671a1177a3B7d83').send({ from: accounts[0] })
            console.log(result)
            return result
        }

        default: {
            return null
        }
    }
 }


