import React from 'react'
import Header from '../components/header/Header'
import rectangleOne from '../assets/images/Rectangle 262 (1).png'
import rectangleTow from '../assets/images/Rectangle 263.png'
import Button from '../components/buttons/Button'
import vector from '../assets/images/Vector .png'
import line1 from '../assets/images/Line 2.png'
import line2 from "../assets/images/Line 4.png";
import line3 from "../assets/images/Line 1.png";
import line4 from "../assets/images/Line 3.png";
import {services, testymonials} from '../data/Data'
import { FaStar } from "react-icons/fa6";
import '../style/home.css'
import Contact from '../components/contact/Contact'
import Footer from '../components/footer/Footer'



const About = () => {
    return (
        <section className='about-sec'>
            <div className="container">
                <div className="image">
                    <img src={rectangleOne} alt="about" />
                </div>
                <div className="container">
                    <div className="left">
                        <h1>about us</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an </p>
                        <div className="img">
                            <img src={rectangleTow} alt="bla" />
                        </div>
                    </div>
                    <div className="right">
                        <img src={vector} alt="vector" />
                        <h1>where</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
                    </div>
                </div>
            </div>
             <Button istrue={false} />
        </section>
    )
}


const Services = () => {
    return (
        <section className='servies'>
            <div className="container">
                <div className="title">
                    <div className="line line-one">
                        <img src={line1} alt="line" />
                        <img src={line2} alt="line" />
                    </div>
                    <h1>services</h1>
                    <div className="line line-tow">
                        <img src={line3} alt="line" />
                        <img src={line4} alt="line" />
                    </div>
                </div>
                <div className="content">
                    {services.map((ele)=>{
                        return(
                            <div className="box" key={ele.id}>
                            <div className="image">
                                <img src={ele?.image} alt="services" />
                            </div>
                            <div className="box-content">
                                <h5>{ele.title}</h5>
                                <p>{ele.description}</p>
                            </div>
                        </div>
                        )
                    })}
                </div>
                <Button istrue={true} />
            </div>
        </section>
    )
}


const Testymonials = () => {
    return (
        <section className="testymonials">
            <div className="container">
                <div className="title">
                    <div className="line line-one">
                        <img src={line1} alt="line" />
                        <img src={line2} alt="line" />
                    </div>
                    <h1>testymonials</h1>
                    <div className="line line-tow">
                        <img src={line3} alt="line" />
                        <img src={line4} alt="line" />
                    </div>
                </div>
                <div className="content">
                    {testymonials.map((ele) => (
                        <div className="box" key={ele.id}>
                            <div className="img">
                                <img src={ele.image} alt="testymonials" />
                            </div>
                            <div className="body">
                                <h4>{ele.title}</h4>
                                <p>{ele.description}</p>
                                <div className="stars">
                                    {Array(ele.stars).fill(0).map((_, index) => (
                                        <FaStar className='star' key={index} />
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};


const Home = () => {
    return (
        <>
        
        <Header />
        <About />
        <Services />
        <Testymonials />
        <Contact />
        <Footer />
        </>
    )
}

export default Home
