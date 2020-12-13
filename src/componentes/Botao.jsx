import React from 'react'
import './Botao.css'


export default props => {
   
    let classes = 'button'
    classes += props.double ? 'double' : ''
    classes += props.triple ? 'triple' : ''
       
    return(
        <button 
        className={classes}
        onClick={e=>props.click && props.click(document.getElementById(props.bo).value, 
                                               document.getElementById(props.bd).value,
                                               document.getElementById(props.result).id,
                                               props.flag, props.id
                                               
                                               )

                }
        >
            {props.label}
        </button>
    )
}