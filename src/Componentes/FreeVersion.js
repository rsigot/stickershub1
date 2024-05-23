import React, { useEffect } from 'react';
import './Css/FreeVersionCss.css';

import { togglePrizeVisibility } from './Js/FreeVersionTogglePrizeVisibility.js';
import { toggleReadMeVisibility } from './Js/FreeVersionToggleReadMeVisibility.js';
//import './Js/FreeVersion.js';
//import './Js/FreeVersionTawk.js';
import { LoginUAL } from './LoginUAL.jsx';
//import './LoginUAL.jsx';
//import './LoginUAL.jsx';
//import {LoginDemo} from './LoginDemo.jsx';
//import {Holder} from './Js/FreeVersionHolder.js'
//import './Js/FreeVersionHolder.js';
//<Holder />
//<LoginUAL />


export default function FreeVersion() {

    return (
        <>
            <h1>Free Profit Tracker</h1>

            <h2 id="holderspan"></h2>

            <h3><span id="walletspan">Please Login</span></h3>
            
            <div className="contenedor">
                <div className="caja">
                    <img id="imagen" className="imagen" src="https://atomichub-ipfs.com/ipfs/QmSh5qdyUeEeMyEBx9XQne8rHvpaD6mDEd8t5N7u4xcfi1"></img>
                </div>
            </div>

            
                <LoginUAL />
            
                

            <div className="contact-container" >
                <h1>Follow Us and Stay Tuned</h1>
                <div className="contact-methods" >
                    <a href="https://chat.whatsapp.com/IOkajfYaJpRLlNYWms8dzq" target="_blank"><i className="fab fa-whatsapp"></i></a >
                    <a href="https://twitter.com/StickersHubWAX" target="_blank"><i className="fab fa-twitter"></i></a >
                    <a href="https://www.facebook.com/people/Stickershub1/100071760019083/" target="_blank"><i className="fab fa-facebook"></i></a >
                    <a href="https://discord.gg/NeUgxfuSZQ" target="_blank"><i className="fab fa-discord"></i></a >
                </div >
                <div className="toggle-container" >
                    <div className="read-me-prizes-container" >
                        <button className="custom-button" onClick={() => togglePrizeVisibility()} > AVAILABLE PRIZES</button >
                        <button className="custom-button" onClick={() => toggleReadMeVisibility()} > READ ME</button >
                        <div id="prize-list" className="prize-list toggle-content" >
                            <ul>
                                <li>Level 1: 1 STANDARD</li>
                                <li>Level 2: 1 CRITTER</li>
                                <li>Level 3: 1 SPECIAL CRITTER</li>
                                <li>Level 4: 1 BASIC</li>
                            </ul>
                        </div >

                        <div id="info" className="info toggle-content" >
                            <ul>
                                <li>To claim your prize, simply send a screenshot to our Discord channel, ptc-screenshots, within StickersHUB1, as you advance through each level.</li>
                                <li>Don't forget to include your wallet address in order to specify whether you are the owner of DIVINE RARITY. Without this crucial information, we won't be able to award your well-deserved prizes.</li>
                                <li>Join our Discord community to support our project and help us grow together! Purchase our NFTs to enhance content, increase prizes, develop more games, and continue improving and updating. Your participation is essential to our success! Connect here: Discord:馃敆 <a className="adiscord" href="https://discord.gg/NeUgxfuSZQ" target="_blank">https://discord.gg/NeUgxfuSZQ</a></li>
                            </ul>
                        </div >
                    </div >
                </div >
                <div id="make-a-wish-container">
                </div>
            </div >
            <p id="timestamp"><span id="current-time"></span></p>
            <div id="live-chat-container"></div>
            <div className="LoginButton" key='unique'>

            </div>
            <a href="/" className="goback-button">Go Back</a >
        </>
    )
}