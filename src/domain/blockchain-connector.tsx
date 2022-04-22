import Web3 from 'web3'

const SMART_CONTRACT_ABI = require('../components/config');
const SMART_CONTRACT_ADDRESS = require('../components/config');

declare let window: any;

//handles interactions with the contract
export async function loadBlockchainData<Type>(dataType: String, data?: Array<any>): Promise<Type | null> {
    const web3 = new Web3(Web3.givenProvider || "http://localhost:8545")
    const accounts = await web3.eth.getAccounts()
    const contract = new web3.eth.Contract(SMART_CONTRACT_ABI.SMART_CONTRACT_ABI, SMART_CONTRACT_ADDRESS)
    contract.options.address = '0xbEb01b0a6359e2f8f330DE4a7773cA3f8134eA09'
    const account = await readAddress()

    async function readAddress() {

        window.ethereum.request({ method: 'eth_requestAccounts' })
            .then(res => {
                console.log("account", res)
            })
        return accounts[0];
    }

    switch (dataType) {
        // ** USER **
        //gets a user
        case "user": {
            const result: Type = await contract.methods.users(account).call({ from: accounts[0] })
            console.log(result)
            return result
        }
        //gets user's papers
        case "userPapers": {
            const result: Type = await contract.methods.getAuthoredPapers(account).call({ from: accounts[0] })
            return result
        }
        //edits a user
        case "editUser": {

            const result: Type = await contract.methods.editUser(data[0], data[1], data[2], data[3], data[4], account).send({ from: accounts[0] })
            console.log(result)
            return result
        }

        // ** PAPER **
        //gets a paper
        case "paper": {
            const result: Type = await contract.methods.getPaper(data[0]).call({ from: accounts[0] })
            // .then((res: any) => {
            //     console.log(res)
            // })
            return result
        }
        //gets all papers
        case "papers": {
            const result: Type = await contract.methods.getPapers().call({ from: accounts[0] })
            return result
        }
        //uploads a paper
        case "uploadPaper": {
            if (data != undefined) {
                const result: Type = await contract.methods.addPaper(4, "#000", data[0], data[1], data[2], data[3], data[4], account).send({ from: accounts[0] })
                return result
            }
            return null
        }

        // ** REVIEW **
        //uploads a review
        case "uploadReview": {
            if (data != undefined) {
                const result: Type = await contract.methods.addReview(account, data[1], data[2]).send({ from: accounts[0] })
                return result
            }
            return null
        }
        //gets reviews for a paper
        case "paperReviews": {
            const result: Type = await contract.methods.getPaperReviews(data[0]).call({ from: accounts[0] })
            return result
        }
        //upvotes or downvotes a review
        case "sendReaction": {
            console.log(data[0])
            console.log(data[1])
            console.log(data[2])

            const result: Type = await contract.methods.sendReaction(data[0], data[1], data[2], '0xE0B6e5538CE13841B19A022cA671a1177a3B7d83').send({ from: accounts[0] })
            console.log(result)
            return result
        }

        // ** LOGIN & REGISTER **
        //login
        case "login": {
            const result: Type = await contract.methods.login(data[0], data[1], account).call({ from: accounts[0] })
            return result
        }
        //register
        case "register": {
            const result: Type = await contract.methods.register(data[0], data[1], data[2], data[3], data[4], 1, account, data[5]).send({ from: accounts[0] })
            return result
        }

        // ** APPROVAL & SUCH **
        //upload document to approve user
        case "requestAuthentication": {
            const result: Type = await contract.methods.requestAuthentication(account, data[0]).send({ from: accounts[0] })
            console.log(data[0])
            return result
        }
        //gets non verified users
        case "unconfiredUsers": {
            const result: Type = await contract.methods.getUnaprovedUsers().call({ from: accounts[0] })
            console.log(result)
            return result
        }
        //approves a user
        case "confirmUser": {
            const result: Type = await contract.methods.approveUser(data[0]).send({ from: accounts[0] })
            console.log(result)
            return result
        }
        //rejects a user
        case "rejectUser": {
            const result: Type = await contract.methods.rejectUser(data[0]).send({ from: accounts[0] })
            console.log(result)
            return result
        }
        //adds a degree
        case "addDegree": {
            const result: Type = await contract.methods.addDegree(account, "Computer Science").send({ from: accounts[0] })
            console.log(result)
            return result
        }

        default: {
            return null
        }
    }
}


