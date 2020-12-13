import React from 'react'
import './BotaoAux.css'

export default props =>{
    
    let classes = 'botaoaux ' 
    classes += props.duplo?'duplo':''
    classes += props.triplo?'triplo':''
    classes += props.quatro?'quatro':''
    return(
        <button className={classes} >
            {props.label}

        </button>
    )
}