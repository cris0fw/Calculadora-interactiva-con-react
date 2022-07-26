import React from "react";
import '../styles/BotonClear.css'

function BotonClear(props){
    return <div 
            onClick={props.reset}
            className="boton-clear">
        {props.children}
    </div>
}

export default BotonClear