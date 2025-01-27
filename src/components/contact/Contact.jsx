import React, { useState } from "react";
import toast from "react-hot-toast";
import './contact.css'

import line1 from "../../assets/images/Line 2.png";
import line2 from "../../assets/images/Line 4.png";
import line3 from "../../assets/images/Line 1.png";
import line4 from "../../assets/images/Line 3.png";

import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";
import axios from "axios";



const Contact = () => {

    const [data, setData] = useState({
        email: "",
        phone: "",
        name: ""
    })

    const [isLoading, setIsLoading] = useState(false);

    const handleChange = (e) =>{
        setData({ ...data, [e.target.name]: e.target.value });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsLoading(true);
        try {
            const response = await axios.post("https://upskilling-egypt.com:3001/contact", data, {
                headers: {
                "Content-Type": "application/json",
                },
        });

        console.log("Response:", response.data);
        toast.success("your message ya ars");
        } catch (error) {
            console.error("Error:", error.response || error.message);
            alert("Something went wrong!");
        } 
                finally {
                    setIsLoading(false);
                }
    };
    return(
        <section className='contact'>
            <div className="container">
                <div className="title">
                    <div className="line line-one">
                        <img src={line1} alt="line" />
                        <img src={line2} alt="line" />
                    </div>
                    <h1>Contact</h1>
                    <div className="line line-tow">
                        <img src={line3} alt="line" />
                        <img src={line4} alt="line" />
                    </div>
                </div>
                <div className="content">
                    <div className="left">
                        <form onSubmit={handleSubmit}>
                            <input type="email" name="email" placeholder="Email" value={data.email} onChange={handleChange} required/>
                            <input type="text" name="phone" placeholder="Phone" value={data.phone} onChange={handleChange} required/>
                            <input type="text" name="name" placeholder="Name" value={data.name} onChange={handleChange} required/>
                            <button type="submit" disabled={isLoading}>
                                {isLoading ? "Sending..." : "Send"}
                            </button>

                        </form>
                    </div>
                    <div className="right">
                        <div className="email">
                            <MdEmail className="icon"/> 
                            <p>upskilling.eg1@gmail.com</p>
                        </div>
                        <div className="email">
                            <FaPhone className="icon"/>
                            <p>+20 115 493 2137</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Contact;