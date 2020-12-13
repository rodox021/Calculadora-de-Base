import React from 'react'
import './Opcao.css'

export default props =>  {
    let id = props.id
    
    let classes = 'opcao '
    classes += props.operation ? 'operation' : ''
    classes += props.duplo ? 'duplo' : ''
    classes += props.tripla ? 'tripla' : ''
    classes += props.quadra ? 'quadra' : ''
    
    
    return(
        <input className={classes} id={id} type="number" min="1" max="16" placeholder={props.place}
            onClick={e=>props.click && props.click(e.target.value)}
        >
        
        </input>
            
       
    )
        
}