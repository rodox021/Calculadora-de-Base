const React = "https://unpkg.com/react@17/umd/react.development.js"
const ReactDOM = "https://unpkg.com/react-dom@17/umd/react-dom.development.js"
class App extends React.Component{
    render(){
        return(
        {<h1>Teste</h1>   }         

        )
    }

}

ReactDOM.render(
    
       
        <App/>

, document.getElementById('root'));
registerServiceWorker();
