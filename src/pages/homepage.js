import React from "react";
import { useNavigate } from "react-router-dom";
import logo from '../img/dropgames_logo_sombra.png';
import ratilogo from '../img/ratilogo.png'
import rati from '../img/epic_rat.png'

export function HomePage() {

    const navigate = useNavigate();

    return (
        <div className="justify-center bg-black" >

            <div className="homecontainer custom-font bg-dropwhite bg-about" style={{
                height: "50vh",
                position: 'relative',
                zIndex: '2'
            }}>


                <div className="titlemargin">
                    <h1 className="dropgamestitle">
                        Welcome to
                    </h1>
                    <img src={logo} alt='Logo' style={{
                        width: '20vw',
                        height: 'auto',
                        objectFit: 'contain'
                    }} />
                </div>
                <div className="item infocard">
                    <span className="abouttext clearblue-txt">
                        SOMOS DROP GAMES
                    </span>
                    <div className="infocardsdesc anil-txt">
                        Un grupo de {' '}
                        <span style={{ color: " rgb(153 27 27)" }}>
                            gamers
                        </span>

                        <span style={{ color: " rgb(0 104 71)" }}> Mex</span>
                        <span style={{ color: " rgb(150 150 150)" }}>i</span>
                        c
                        <span style={{ color: " rgb(150 150 150)" }}>a</span>
                        <span style={{ color: " rgb(206 17 38)" }}>nos </span>

                        haciendo juegos con experiencias únicas.
                    </div>

                    <div className="videocontainer">
                        <button className=" shadow-md shadow-black text-white boton gradient-button:hover"
                            onClick={() => { navigate("/about-us") }}>
                            Conócenos
                        </button>
                    </div>
                </div>

            </div>

            <div className="bg-ratimg rati-container">

                <div className='infocardsdesc anil-txt' style={{ marginTop: '13vh' }}>
                    <img src={ratilogo} alt="ratilogo" className="rati-logo"  /> 

                    <div style={{marginTop:'20vh', marginLeft:'10vw'}}>
                        aaaaa
                    </div>
                    
                    <img src={rati} alt="ratiepica" className="rati-epica"/>
                </div>

                

                

            </div>






            {/* Espacio para el video
            
            <div className="videocontainer item dropgamestitle" style={{
                    height: "30vw",
                    width: "60vw",
                    marginTop: "5vw",
                    marginLeft: "7vw"
                }}>
                    Video
                </div>*/}


        </div>

    )

}