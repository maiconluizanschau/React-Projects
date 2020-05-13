import React from 'react';

//passar um start component burro so exibe algo funciona quando eh uma linha
//const BemVindo = ()=> <h2>Bem Vindo(a)</h2>

//mais de uma linha
const BemVindo = ()=>{
  return(
    <div>
    <h2>Bem-Vindo(a)</h2>
    </div>
  );
}
function App() {
  return (
   <div>
     Olá Mundo!
     <BemVindo/>
     <h1>Curso React</h1>
   </div>
  );
}

export default App;
