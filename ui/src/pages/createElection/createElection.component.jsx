import { useState, useEffect } from 'react'
import './createElection.styles.css'
import { Input, TextArea } from '../../components/forms/forms.component'
import { Grid } from '@mui/material'
import { Button } from '../../components/button/button.component'
import Contract from '../../blockchain/Ballox'
import Web3 from "web3"


function CreateElection() {
  const [web3, setWeb3] = useState()
  const [account, setAccount] = useState()
  const [contract, setContract] = useState()

  const [title, setTitle] = useState()
  const [name1, setName1] = useState()
  const [name2, setName2] = useState()
  const [name3, setName3] = useState()
  const [name4, setName4] = useState()
  
  const [partyname1, setPartyName1] = useState()
  const [partyname2, setPartyName2] = useState()
  const [partyname3, setPartyName3] = useState()
  const [partyname4, setPartyName4] = useState()

  // load provider
  useEffect(() => {
    const loadProvider = async() => {
        if(typeof window !== "undefined" && typeof window.ethereum !== "undefined"){
            try{
                const web3 = new Web3(window.ethereum)
                setWeb3(web3)

                // create local copy of smart contract
                const contract = Contract(web3)
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

// add new product on form submit
const formHandler = (event) => {
    createElection()
    event.preventDefault()
}

// handle the addProduct functionality
const createElection = async() => {

    let candidates = [name1, name2, name3, name4]
    let partyNames = [partyname1, partyname2, partyname3, partyname4]
    try{
        await contract.methods.createElection(title, candidates,partyNames).send({
            from: account,
        })

         alert("Election was created successfully!")
    }
    catch(err){
        alert(err.message)
    }
}

    
    return (
      <div className="createElection revamped">
        <Grid container columns={18}>
          <Grid item xs={2} md={4} />

          <Grid item xs={14} md={10} className="createElection__content">
            <h1 className="createElection__content-title">Schedule an Election</h1>
            <p className="createElection__content-subtitle">Complete the fields below to setup your Election</p>

            <TextArea label="Add the title of your election" placeholder="add a good title for the election you are about to schedule"  handleChange={(event) => setTitle(event.target.value)} />

              <Input label="Add candidate 1" placeholder="add a name" handleChange={(event) => setName1(event.target.value)} />
              <Input label="Add candidate 1 Party Name" placeholder="add a party name" handleChange={(event) => setPartyName1(event.target.value)} />

              <Input label="Add candidate 2" placeholder="add a name" handleChange={(event) => setName2(event.target.value)} />
              <Input label="Add candidate 2 Party Name" placeholder="add a party name" handleChange={(event) => setPartyName2(event.target.value)} />

              <Input label="Add candidate 3" placeholder="add a name" handleChange={(event) => setName3(event.target.value)} />
              <Input label="Add candidate 3 Party Name" placeholder="add a party name" handleChange={(event) => setPartyName3(event.target.value)} />

              <Input label="Add candidate 4" placeholder="add a name" handleChange={(event) => setName4(event.target.value)} />
              <Input label="Add candidate 4 Party Name" placeholder="add a party name" handleChange={(event) => setPartyName4(event.target.value)} />

            <Button className="createElection__button revamped white-glassmorphism" handleClick={formHandler}>
              Add a candidate{" "}
            </Button>
          </Grid>

          <Grid item xs={2} md={4} />
        </Grid>
      </div>
    );
}

export default CreateElection