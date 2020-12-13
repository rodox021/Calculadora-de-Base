import React from 'react'
import './Display.css'

export default props =>  {
    return(
        <button className="display" id={props.id}> 
        {props.value}

        </button>
    )
}