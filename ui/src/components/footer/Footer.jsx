import React from 'react'
import './Footer.css'
import { FaYoutube, FaInstagram, FaDiscord, FaLinkedin, FaTelegram, FaWhatsapp } from 'react-icons/fa'
const Footer = () => {
    return (

        <footer className=' footer h-20'>
            <div className=' footer__left '>
                <div className='footer__item'>
                    <FaYoutube className='m-3' />
                </div>
                <div className='footer__item'>
                    <FaInstagram className='m-3' />
                </div>
                <div className='footer__item'>
                    <FaDiscord className='m-3' />
                </div>
                <div className='footer__item'>
                    <FaLinkedin className='m-3' />
                </div>
                <div className='footer__item '>
                    <FaTelegram className='m-3' />
                </div>
                <div className='footer__item '>
                    <FaWhatsapp className='m-3' />
                </div>
            </div>
            <div className=' footer__center '>
                <p>Made with <span> ❣ </span></p>
            </div>
            <div className='footer__right kdam'>
                <h1 className=' '>© 2022 All right reserved</h1>
            </div>
        </footer>

    )
}

export default Footer