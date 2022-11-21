import { Grid } from '@mui/material'
import { RadioButton } from '../../components/forms/forms.component'
import { VoteCard } from '../../components/voteCard/voteCard.component'
import { Button } from '../../components/button/button.component'
import './castVote.styles.css'
import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Contract from '../../blockchain/Ballox';
import Web3 from "web3"

const options = [
  { name: "Ilsa Afzal", value: "1" },
  { name: "Shaheer Khan", value: "2" },
  { name: "Saad", value: "3" },
  { name: "Usama Zafar", value: "4" },
];

function CastVote() {
    const [selection, setSelection] = useState("")

    const [web3, setWeb3] = useState()
    const [account, setAccount] = useState()
    const [contract, setContract] = useState()

    /***************************************************
     * handlers
     **************************************************/

    const handleClick = (option) => {
        setSelection(option)
    }

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
                //fetch()
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
const fetch = async() => {

    try{
        let optionse= await contract.methods.candidates().call({
            from: account,
        })
        alert("res="+optionse)
    }
    catch(err){
        alert(err.message)
    }
}
// cast vote
const castVote = async() => {

   

    
    try{
        await contract.methods.castVote(64, 23).send({
            from: account,
        }).then(() => {
         alert("You have been credited with 100 coins for voting")
        })

    }
    catch(err){
        alert(err.message)
    }
}

    return (
        <div className="castVote revamped ">
            <Grid container columns={18}>
                <Grid item xs={2} md={4} />

                <Grid item xs={14} md={9}>
                    <VoteCard removeEffect/>

                    { options.map((option, index) => (
                        <RadioButton 
                            key={index}
                            name={option.name}
                            value={option.value}
                            selected={option.value === selection}
                            handleClick={() => handleClick(option.value)}
                            className='transparent'
                        />
                    ))}

                    <Grid item container xs={14} justifyContent="center">
                        <Grid item xs={12} sm={6}>
                            <Button className="castVote__button revamped white-glassmorphism" handleClick={castVote}>Cast your vote</Button>
                        </Grid>

                        <Grid item xs={12} sm={6}>
                            <Link to="/results">
                                <div className="castVote__jump-to-results revamped">
                                    <span>Jump to results</span> 
                                </div>
                            </Link>
                        </Grid>
                    </Grid>
                </Grid>

                <Grid item xs={2} md={5} />
            </Grid>
        </div>
    )
}

export default CastVote