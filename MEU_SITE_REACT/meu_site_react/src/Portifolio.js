import React from 'react';
import pasta1 from './img/pasta1.png';
function Portifolio(){
    return(
        <section>
            <article>
                <div class="historico">
                    <img src={pasta1} className="pasta" alt="ícone de pasta"/>
                    <h1 id="Portifolio" className="letra_historico">Portifolio:</h1>
                    <main>
                        <div className="container_geral_tabela">
                            <table className="tabela_inteira">
                                <thead>
                                    <tr>
                                        <th className="ano">Projeto</th>
                                        <th className="escola">Tecnologias</th>
                                        <th className="escola">Link</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="dados">Aroma Nordeste</td>
                                        <td className="dados">MySQL,HTML e CSS</td>
                                        <td className="dados">gggggggggg</td>
                                    </tr>
                        
                                    <tr>
                                        <td className="dados">Festa do Chá</td>
                                        <td className="dados">HTML e CSS</td>
                                        <td className="dados">gggggggggg</td>
                                    </tr>
                                    <tr>
                                        <td className="dados">Jogo da Memória</td>
                                        <td className="dados">JS,HTML e CSS</td>
                                        <td className="dados">gggggggggg</td>
                                    </tr>

                                </tbody>
                            </table><br/>
                        </div>
                    </main>
                </div>
            </article>
        </section>
    );
}
export default Portifolio;