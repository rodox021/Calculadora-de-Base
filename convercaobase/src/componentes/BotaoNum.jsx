import React from 'react'
import './BotaoNum.css'


export default props => {
   
    let classes = 'botaonum'
       
    
    return(
        <button 
        className={classes} onClick={e=>props.click && 
            props.click(props.label, 
                      document.getElementById(props.id).id)}
        >
            {props.label}
        </button>
    )
}