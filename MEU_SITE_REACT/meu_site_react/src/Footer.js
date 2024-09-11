import React from 'react';
import telefone from './img/telefone.png';

function Footer(){
    return(
        <section>
            <footer>
                <article>
                    <div className="contatos">
                        <img src={telefone} className="telefone" alt="ícone de telefone"/>
                        <h1 id="Contato" className="contato_titulo">Contato:</h1>
                        <main>
                            <div className="espacamento_contato">
                                <h3>Email:jackson.freitas@escolar.ifrn.edu.br</h3>
                                <h3>Telefone:99916-6889</h3>
                                <h3>Github:jackson1002</h3><br/>
                            </div>
                        </main>
                    </div>
                </article>
            </footer>
  
        </section>
    );
}
export default Footer