import React, { Component } from 'react';
import './estilo.css'

class App extends Component{

//criar construtor
constructor(props){
  super(props);
  //exibir frases
  this.state={
        textoFrase:''
  };


  this.quebraBiscoito=this.quebraBiscoito.bind(this);

  //array
  this.frases = ['Siga os bons e aprenda com eles.', 'O bom-senso vale mais do que muito conhecimento.', 
 'O riso é a menor distância entre duas pessoas.', 
 'Deixe de lado as preocupações e seja feliz.',
 'Realize o óbvio, pense no improvável e conquiste o impossível.',
 'Acredite em milagres, mas não dependa deles.',
 'A maior barreira para o sucesso é o medo do fracasso.'];
}


quebraBiscoito(){
      //para acessar as state
      let state = this.state;
      //numero aleatorio conforme numero de frases
      let numeroAleatorio = Math.floor(Math.random()*this.frases.length);
      state.textoFrase='"'+this.frases[numeroAleatorio]+'"'
      this.setState(state);
}
  

   render(){
     return (
       <div className="container">
       <img src={require('./assets/biscoito.png')}className="img"/>
       <Botao nome="Abrir biscoito" acaoBtn={this.quebraBiscoito}/>
     <h3 className="textoFrase">{this.state.textoFrase}</h3>
       </div>
     );
   }
   }



//criar componente
class Botao extends Component{
  render(){
    return(
      <div>
        <button onClick={this.props.acaoBtn}>{this.props.nome}</button>
      </div>
    );
  }
}


export default App;