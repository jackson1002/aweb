import React from 'react';
import './App.css';
import Header from './Header';
import Hero from './Hero';
import Cards from './Cards_Curiosidades';
import Portifolio from './Portifolio';

function App() {
  return (
    <div className="pagina_inteira">
      <Header/>
      <Hero/>
      <div className="conhecendo">
        <h1 className="espassamento">Olá,que tal me conhecer um pouco?</h1>
        <p className="espassamento2">Como já sabe:meu nome é Jackson Lucas e tenho 18 anos.Adoro programação e espero um dia ter bastante sucesso nessa área,a começar por esse site que está um sucesso.Sou um completo amante da música e gostaria de poder me matricular em aulas de música pra me aprofundar ainda mais nesse universo.</p>
      </div>
      <Cards/>
      <Portifolio/>
      
     
    </div>
  );
}

export default App;
