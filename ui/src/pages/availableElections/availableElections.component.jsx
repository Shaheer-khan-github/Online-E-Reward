import { useState, useEffect } from 'react'
import { Grid } from '@mui/material'
import { VoteCard } from '../../components/voteCard/voteCard.component'
import './availableElections.styles.css'
import { Button } from '../../components/button/button.component'
import Contract from '../../blockchain/Ballox'
import Web3 from "web3"
//  async function listenForEvents() {
//         smartContract = await contract.at("0x571addc6d560a8cea9ff46c26e38ff362e4bdc74");
//      }



function AvailableElections() {
    
  const [web3, setWeb3] = useState()
  const [account, setAccount] = useState()
  const [contract, setContract] = useState()
    // load provider
  useEffect(() => {
    const loadProvider = async() => {
        if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
            try{
                const web3 = new Web3(window.ethereum)
                setWeb3(web3)
                // create local copy of smart contract
                const contract = Contract(web3)
                 //new web3.eth.Contract(Contract contractJSON.abi) //await contract.at("0x571addc6d560a8cea9ff46c26e38ff362e4bdc74");// Contract(web3)
                setContract(contract)
                


                // get account address
                const accounts = await web3.eth.getAccounts()
                setAccount(accounts[0])
            }
            catch(err){
                alert(err.message)
            }
        }
        else{
            alert("Please install Metamask");
        }
    }

    loadProvider()
}, [])
    const availableElections = async() => {

    try{
      let res= await contract.methods.elections().call({
            from: account,
        })
        alert("Total no of elections="+res)
         
    }
    catch(err){
        alert(err.message)
    }
}
const formHandler = (event) => {
    availableElections()
    event.preventDefault()
}
    return (
        
        <Grid container columns={18}>
            <Grid item xs={2} md={4} />

            <Grid item xs={14} md={10} className="availableElections__content revamped">
                <Grid item container justifyContent="space-between" alignItems="baseline">
                    <Grid item>
                        <h1 className="availableElections__content-title">Available Elections</h1>
                        
            {/* <Button className="createElection__button" handleClick={formHandler}>Fetch Elections</Button> */}
                    </Grid>
                    {/* <Grid item style={{ marginBottom: '50px' }}>menu here</Grid> */}
                </Grid>
                                
                { Array(1).fill().map((_, i) => (
                    <VoteCard key={i} link="/results" />
                ))}

            </Grid>

            <Grid item xs={2} md={4} />
        </Grid>
    )
}

export default AvailableElections