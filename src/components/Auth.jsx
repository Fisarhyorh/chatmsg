import {auth, provider} from "../firebase-config";
import { signInWithPopup } from "firebase/auth";
import {BrowserRouter, Routes, Route} from 'react-dom'
import Register from '../Register'
import "../styles/navbar.css";
// import "../styles/Auth.css";
import banner from "../assets/banner2.png"
import arab from "../assets/arab.png"
import logo from "../assets/logo3.png"


import Cookies from 'universal-cookie'
import React from "react";
const cookies = new Cookies()

export const Auth = (props) => {
    const {setIsAuth} = props;

     const signInWithGoogle = async () => {
        try{
             const result = await signInWithPopup(auth, provider);
             console.log(result);
       cookies.set("auth-token", result.user.refreshToken)
       setIsAuth(true)
        }
        catch (err){
            console.log(err);
        }

        
    };
    
    return (
      <div className="auth">
         <div className="container">
          <div className="navbar">
            <div className="img"><img src={logo} alt="" /></div>
            <div className="infos">
                <ul>
                    <li>Home</li>
                    <li>Services</li>
                    <li>About</li>
                </ul>
            </div>
            <div className="contact">
            <span onClick={signInWithGoogle}>Sign In With Goggle</span>
            </div>
          </div>
            
            <div className="main">
                <div className="left">
                    <h3>Lorem ipsum dolor sit amet consectetur.</h3>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident a quisquam ex.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio!</p>
                   
                </div>
                 <div className="img">
                <div className="bg-color"></div>
                    <img src={arab} alt="" />
                    
                </div>
            </div>


            <div className="middle-info">
                <div className="img">
                <div className="bg-color"></div>
                    <img src={arab} alt="" />
                    
                </div>
                <div className="abt-chat">
                <h2>Lorem ipsum dolor sit amet consectetur.</h2>
                    <h1>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident a quisquam ex.</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio!</p>
                    <div className="delivery">
                        <h3>Faster Process<span className="p-1"><p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet iusto voluptatum nostrum explicabo doloremque praesentium sit ipsa consequatur beatae nesciunt?</p></span></h3>
                        <h3>Faster Process<span className="p-1"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Debitis dolor quis repudiandae enim quas culpa ipsam facere quos. Officia, repudiandae.</p></span></h3>
                    </div>
                    <div className="access">
                    <h3>Faster Process<span className="p-1"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat ea soluta consectetur quod ad nesciunt quidem praesentium vero laudantium!</p></span></h3>
                        <h3>Faster Process<span className="p-1"><p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam, eius illo? Corrupti voluptate at sequi ipsa ex aspernatur corporis eveniet.</p></span></h3>
                    </div>
                </div>
            </div>

            <div className="footer">
                <div className="left-foot">
                    <img src={logo} alt=""/>
                    <h2>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae.</h2>
                </div>
                <div className="mid-foot">
                    <h1>Get In Touch</h1>
                    <ul>
                        <li>landmark</li>
                        <li>info@gmail.com</li>
                        <li>+2348020928198</li>
                        <li>7:00 am to 9:00 pm</li>
                    </ul>
                </div>
                <div className="right-foot">
                    <h1>Support</h1>
                    <ul>
                        <li>Help Center</li>
                        <li>Career</li>
                        <li>FAQS</li>
                        <li>Contact</li>
                    </ul>
                </div>
            </div>
</div>
        </div>
    )
}