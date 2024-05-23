//import React, {useState}  from "react";
const textNoHolder = "No Holder text";
const textHolder = "Holder text";

export async function Holder(user) {
    
    try{
    const urlHolder = "https://wax.api.atomicassets.io/atomicassets/v1/accounts?template_id=782954&page=1&limit=1000&order=desc";
    const wallet = user;
    
    const response = await fetch(`${urlHolder}`);
    const records = await response.text();
    const isHolder = records.includes(`${wallet}`);
    //document.getElementById('borrarTexto').innerText = "";

    if (isHolder == true){
        document.getElementById('holderspan').textContent  = textHolder;
        document.getElementById('imagen').style.filter = "grayscale(0)";
        //document.getElementById('wax-wallet-container').style.display = "inline-block";
      } else{
        document.getElementById('holderspan').textContent  = textNoHolder;  
        document.getElementById('imagen').style.filter = "grayscale(1)";
        //document.getElementById('wax-wallet-container').style.display = "none";
      } 
    } catch { console.log("error")}
}

export default Holder