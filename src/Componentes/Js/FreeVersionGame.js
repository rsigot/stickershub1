import React, { useContext, useState, useEffect } from 'react';
import {incrementCounter} from './FreeVersionIncrementCounter.js';
import '../Css/FreeVersionCss.css';


export function FreeVersionGame() {

    return (
        <>
            <div className="contenedor">

                <div id="wax-wallet-container" className="wax-wallet-container">

                <button id='clickbutton' className='clickbutton' onClick={() => incrementCounter()}>Click Profit</button>
                <p id='level-counter'>Level 1</p>
                <p id='progress-percentage'>100% : For Next Level</p>
                <p id='result' />
                <div id="prize-images"></div>
                <div id="progress-bar-container">
                    <div id="progress-bar">
                        <div id="progress"></div>
                    </div>
                    
                </div>
                </div>
            </div>
        </>
    )

}
export default FreeVersionGame;


