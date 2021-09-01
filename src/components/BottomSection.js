import React from 'react'
import '../styles/main.scss'
import { Link } from 'react-router-dom'

function BottomSection() {
    return (
        <div className="bottomSection">
            <div className="bottomSection__container max-width">
                <div className="bottom-left">
                    <h2 className='bottom-left-title'>About Us</h2>
                    <ul className="bottom-left-links">
                        <li className='item-links'>
                            <Link className='link' to='/'>How it Works</Link>
                        </li>
                        <li className='item-links'>
                            <Link className='link' to='/'>Testimonials</Link>
                        </li>
                        <li className='item-links'>
                            <Link className='link' to='/'>Careers</Link>
                        </li>
                        <li className='item-links'>
                            <Link className='link' to='/'>Investors</Link>
                        </li>
                    </ul>
                </div>

                <div className="bottom-left">
                    <h2 className='bottom-left-title'>Contact Us</h2>
                    <ul className="bottom-left-links">
                        <li className='item-links'>
                            <Link className='link' to='/'>Contact</Link>
                        </li>
                        <li className='item-links'>
                            <Link className='link' to='/'>Support</Link>
                        </li>
                        <li className='item-links'>
                            <Link className='link' to='/'>Destination</Link>
                        </li>
                        <li className='item-links'>
                            <Link className='link' to='/'>Sponsorship</Link>
                        </li>
                    </ul>
                </div>
                
                <div className="bottom-right">
                    <h5 className="bottom-right-title">
                        <span>in</span>House Corporation
                    </h5>
                    <div className="input-btn">
                    <input type="text" placeholder='Email' className='input-email' />
                    <button className='btn-subs'>Subscribe</button>
                    </div>
                    <div className="bottom-right-socmed">
                        Social Media Contacts
                        <ul className='socmed-list'>
                            <li><a href="https://www.facebook.com/"><i className="fab fa-facebook-square"></i></a></li>
                            <li><a href="https://www.instagram.com/"><i className="fab fa-instagram-square"></i></a></li>
                            <li><a href="https://twitter.com/"><i className="fab fa-twitter-square"></i></a></li>
                            <li><a href="https://www.linkedin.com/"><i className="fab fa-linkedin"></i></a></li>
                        </ul>
                    </div>

                    <p className='copyright'>Developed and Designed by Melvin John Bilbao © 2021 All Rights Reserved.</p>
                </div>
            </div>
        </div>
    )
}

export default BottomSection
