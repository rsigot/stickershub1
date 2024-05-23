import React, { useContext, useState, useEffect} from 'react';
import { RpcError } from 'eosjs';
import { UALContext } from "ual-reactjs-renderer";
import './Css/LoginUAL.css';
import {Holder} from './Js/FreeVersionHolder.js'
import {FreeVersionGame} from './Js/FreeVersionGame.js';

export function LoginUAL() {
    const ual = useContext(UALContext);
    const [loggedIn, setLoggedIn] = useState(false);

    // URL for the wax-auth server
    const serverUrl = "http://localhost:3000";

    const login = () => {
        setLoggedIn(false);
        ual.logout();
        ual.showModal();
        
    }

    const logout = () => {
        setLoggedIn(false);
        ual.logout();
        {document.getElementById('walletspan').innerText = "Please Login"}
        {document.getElementById('holderspan').textContent  = "No Holder"} 
        {document.getElementById('imagen').style.filter = "grayscale(1)"}
    }

    useEffect(()=>{
        //console.log("wallet: " + document.getElementById('walletspan').innerText);
        Holder(document.getElementById('walletspan').innerText);
    }
    )

    //const textNoHolder = "No Holder text";

    {ual?.activeUser ?
        <>
            {document.getElementById('walletspan').innerText = ual.activeUser.accountName }
        </>
                : <></>
            }
            
    return (
        <div className="login">
            
            {ual?.activeUser ?
                <>
                    <>
                        <FreeVersionGame /> 
                    </>
                    
                    <>
                        <button className="WAXUALbutton" onClick={() => logout()}>Logout</button>
                    </>
                </>
                :
                    <>
                        <button className="WAXUALbutton" onClick={() => login()}>Login</button>
                    </>
                
            }
        </div>
    );
}
export default LoginUAL;
