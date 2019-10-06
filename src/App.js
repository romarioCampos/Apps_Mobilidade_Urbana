import React from 'react';
import './App.css';
// Os import's utilizados para fazer 
import Header from './ui/Header';
import Ilustracao from './ui/Ilustracao';
import Conteudo from './ui/Conteudo';
import Desfecho from './ui/Desfecho';

function App() {
  return (
    <div className="header">
      <Header />
      <div className="ilustracao">
        <Ilustracao />
      </div>
      <div className="conteudo">
        <Conteudo />
      </div>
      <div className="desfecho">
        <Desfecho />
      </div>
    </div>
  )
}

export default App;
