import Web3 from 'web3'

const SMART_CONTRACT_ABI = require('../components/config_token');
const SMART_CONTRACT_ADDRESS = require('../components/config_token');

export async function loadBlockchainData_token<Type>(dataType: String, data?: Array<any>): Promise<Type | null>{
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
    contract.options.address =  '0x391FeFB1F69743999cb6102bDEB15bF2DA8099FC'
    const account = await readAddress()
   
    async function readAddress() {
        
        window.ethereum.request({method:'eth_requestAccounts'})
         .then(res=>{
            console.log("s",res) 
           })
         return accounts[0];
     }
    switch(dataType) {
        //user
        case "balance": {
            const result: Type = await contract.methods.balanceOf(account).call({ from: accounts[0] })
            console.log(result)
            return result
        }

        case "sendIntialTokens": {
            const result: Type = await contract.methods.transfer(account, 1000).send({ from: accounts[0] })
            console.log(result)
            return result
        }
        case "sendDegreeTokens": {
            const result: Type = await contract.methods.transfer(account, 2000).send({ from: accounts[0] })
            console.log(result)
            return result
        }
        case "uploadPaper": {
            // DONT CHANGE THE ADRESS - IT SHOULD BE THE CREATOR
            // transfers tokens to the creators account or later staking pool - the entered address is the creators
            const result: Type = await contract.methods.transfer("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83", 100).send({ from: accounts[0] })
            console.log(result)
            return result
        }
        case "uploadReview": {
            // DONT CHANGE THE ADRESS - IT SHOULD BE THE CREATOR
            // transfers tokens from sender to recipent - parameters (sender adress, recipent adress, number of tokens)
            const result: Type = await contract.methods.transfer("0xE0B6e5538CE13841B19A022cA671a1177a3B7d83", 10).send({ from: accounts[0] })
            console.log(result)
            return result
        }
        default: {
            return null
        }
    }
 }
