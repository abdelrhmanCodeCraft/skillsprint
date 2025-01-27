import React from 'react'
import Trash from '../../assets/images/Trash Hauling.png'
import './header.css'
import Button from '../buttons/Button'
import vector7 from '../../assets/images/Vector 7.png'
 
const Header = () => {
    return (
        <header className='header'>
            <div className="image">
                <img src={vector7} alt="" />
            </div>
            <div className="container">
                <div className="content">
                    <div className="logo">
                        <div className="imo">
                            <img src={Trash} alt="logo" />
                        </div>
                        <div className="text-logo">
                            <h1>Round Rock</h1>
                            <p>Trush Hauling</p>
                        </div>
                    </div>
                    <button className='btn'>
                        Experts
                    </button>
                    <h1 className='one'>lorem</h1>
                    <h1 className="tow">lorem lorem</h1>
                    <p className='p'>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the</p>
                    <Button istrue={true} className ='btn-com' />
                </div>
            </div>
        </header>
    )
}

export default Header
