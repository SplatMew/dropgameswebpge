import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../img/dropgames_logo_sombra.png';

export function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="justify-center" >

            <div className="homecontainer">
                <div className="custom-font titlemargin">
                    <h1 className="dropgamestitle">
                        Welcome to
                    </h1>
                    <img src={logo} alt='Logo' style={{
                        width: '20vw',
                        height: 'auto',
                        objectFit: 'contain'
                    }} />
                </div>
                <div className="videocontainer item dropgamestitle" style={{
                    height: "30vw",
                    width: "60vw",
                    marginTop: "5vw",
                    marginLeft: "7vw"
                }}>
                    Video
                </div>
            </div>

            <div className="custom-font text-white text-center" style={{marginTop: "10vh"}}>
                <span className="infocardstitle">
                    About us
                </span>
                <div className="custom-font text-white text-center infocardsdesc container ">
                    We do gamesss
                    
                </div>
                <button className=" shadow-md shadow-black text-white boton gradient-button:hover" 
                 onClick={() => {navigate("/about-us")}}>
                    Learn More
                </button>
            </div>

        </div>

    )

}