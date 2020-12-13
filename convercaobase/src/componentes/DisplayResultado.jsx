import React from 'react'
import './DisplayResultado.css'

export default props =>  {
    return(
        <button className="DisplayResultado" id={props.id}> 
        {props.value}

        </button>
    )
}