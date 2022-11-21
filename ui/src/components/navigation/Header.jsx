import React, { useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import balloxLogo from '../../assets/icons/balloxLogo.png'
import { Button } from '../button/button.component'
import './header.styles.css'
import {Sidebar} from "./sidebar.component"
import Web3 from "web3"
const Header = () => {
    const { pathname } = useLocation()
    const [address, setAddress] = useState()

    useEffect(() => {

        const loadProvider = async () => {
            if (typeof window !== "undefined" && typeof window.ethereum !== "undefined") {

                try {
                    const web3 = new Web3(window.ethereum)
                    // get and store account
                    const accounts = await web3.eth.getAccounts()
                    setAddress(accounts[0])
                    // handle account or chain changes
                    window.ethereum.on("accountsChanged", accounts => window.location.reload())
                    window.ethereum.on("chainChanged", accounts => window.location.reload())
                }
                catch (err) {
                    alert(err.message)
                }

            }
            else {
                alert("Please Install Metamask!")
            }
        }

        loadProvider()

    }, [])

    const connectWallet = async () => {

        try {
            await window.ethereum.request({ method: "eth_requestAccounts" })
            window.location.reload()
        }
        catch (err) {
            alert(err.message)
        }

    }
    return (
        <div className='headr  '>
            {/* <header className='header  '> */}
            <div className='header__logo'>
                <Link to='/'>
                    <div>
                        <img src={balloxLogo} alt="logo" className="p-10 cursor-pointer " width={200} />
                    </div>
                </Link>
            </div>
            <div className="header__center revamped">
                <Link to="/create-election">
                    <div className="header__center_item">Create Election</div>
                </Link>
                <Link to="/results">
                    <div className="header__center_item">Results</div>
                </Link>
            </div>
            <div>
                {address ?
                    <Button className='blue-glassmorphism'>{address.slice(0, 3)}...{address.slice(38)}</Button>
                    :
                    <Button className='blue-glassmorphism' handleClick={connectWallet}>Connect Wallet</Button>
                }
            </div>
            <Sidebar />
        </div>

    )
}

export default Header