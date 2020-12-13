import React, {Component} from 'react'
import './CalcularBase.css'
import BotaoAux from '../componentes/BotaoAux'
import Display from '../componentes/Display'
import DisplayResutado from '../componentes/DisplayResultado'
import Opcao from '../componentes/Opcao'
import Botao from '../componentes/Botao'
import BotaoNum from '../componentes/BotaoNum'

let resulatdoDecToAny

const initialState = {
    displayValue: '0',
    clearDisplay: false,
    operation: null,
    values: [0, 0],
    current: 0
}



export default class calculadore extends Component{
    
    state  = {...initialState}

    constructor(props) {
        super(props)

       
        
        
    }

    clearDisplay(id){
        document.getElementById(id).innerHTML ="0"

    }
    setResultado(bo, bd, result, flag, id){

        
        if (flag) {
            document.getElementById(id).innerHTML ="0"
            document.getElementById(result).innerHTML ="0"
            return
        }
         
        
        let valor = Number (document.getElementById('visor').innerHTML)
        if ( bo ==="" || bd ===""){
            window.alert("[ERRO] Existem campos vazios!!")
            return
        }

           // da Base 10 para qualquer base
        

        if (bo === '10'){
            document.getElementById(result).innerHTML = valor.toString(bd)
        }else if (bd ==='10'){
            let x = String (document.getElementById('visor').innerHTML)
            document.getElementById(result).innerHTML = parseInt(x, bo)
            
        }else{
            let v        
            if (bo > 9){
                v = String (valor)
                
            }
            else{
                v = valor
                
            }
            
            let temp = parseInt(v,bo)
            
            document.getElementById(result).innerHTML = temp.toString(bd)

        }   
        
        
          
           
        
        

    }

    adicionarDigito(n,result){

        if (document.getElementById(result).innerHTML === '0'){
            document.getElementById(result).innerHTML = ""
        }
        let num = "" + document.getElementById(result).innerHTML
                num += n
        //console.log(num)
        //console.log(result )
        document.getElementById(result).innerHTML = num

    }

    
    

    render(){
        return(
            <div className="calculadora">
                <DisplayResutado value ={0}id="resultado"/>
                <Display value={this.state.displayValue} id="visor"/>
                <BotaoAux label="Base de Origem" quatro/>
                <Opcao place=""  id="inputBaseOrigem" click={this.setBaseOrigem}/>
                <BotaoAux label="Base de Destino" quatro/>
                <Opcao place="" id="inputBaseDestino" click={this.setBaseDestino}/>
                
                <BotaoNum label={7} click={this.adicionarDigito} id="visor"/>
                <BotaoNum label={8}click={this.adicionarDigito} id="visor" />
                <BotaoNum label={9}click={this.adicionarDigito} id="visor" />
                <Botao label ="AC" click={this.setResultado} 
                                     bo="inputBaseOrigem" 
                                     bd="inputBaseDestino"
                                     result="resultado"
                                     flag={true}
                                     id ="visor"/> 
               
                <BotaoNum label="A" click={this.adicionarDigito} id="visor"/>
                <BotaoNum label={4} click={this.adicionarDigito} id="visor"/>
                <BotaoNum label={5} click={this.adicionarDigito} id="visor" />
                <BotaoNum label={6} click={this.adicionarDigito} id="visor"/>
                <Botao label ="Gerar" click={this.setResultado} 
                                        bo="inputBaseOrigem" 
                                        bd="inputBaseDestino"
                                        result="resultado"
                                        flag={false}
                                        id ="visor"
                />
                <BotaoNum label="B" click={this.adicionarDigito} id="visor"/>
                <BotaoNum label={1}click={this.adicionarDigito} id="visor" />
                <BotaoNum label={2} click={this.adicionarDigito} id="visor"/>
                <BotaoNum label={3} click={this.adicionarDigito} id="visor"/>
                <Botao label ="" />
                <BotaoNum label="C" click={this.adicionarDigito} id="visor"/>
                <BotaoNum label=""/>
                <BotaoNum label={0} click={this.adicionarDigito} id="visor"/>
                <BotaoNum label=""/>
                <Botao label ="" />
                <BotaoNum label="D" click={this.adicionarDigito} id="visor"/>
                <BotaoNum label=""/>
               
                <BotaoNum label=""/>
                <BotaoNum label=""/>
                <Botao label ="" />
                <BotaoNum label="F" click={this.adicionarDigito} id="visor"/>
                
                
                
               

                
               

            </div>
        )
    }

}