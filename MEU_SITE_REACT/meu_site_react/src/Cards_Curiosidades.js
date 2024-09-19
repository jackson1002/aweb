import React from 'react';
import aniversario from './img/aniversario.jfif';
import curiosidades from './img/curiosidades.png';
import cecilia from './img/eu_cecilia.jfif';
import sushi from './img/sushi.jfif';
import musica from './img/musica.jfif';
import doce from './img/doce.jfif';
function Cards(){
    return(
        <section>
            <article>
                <div className="cards">
                    <img src={curiosidades} className="icone_duvida" alt="ícone de ponrto de interrogação"/>
                    <h3 id="Algumas curiosidades sobre mim" className="curiosidades">Algumas curiosidades sobre mim:</h3>
                    <main>
                        <div className="container_cards">
                            <div className="container_colum1">
                                <div className="card_aniversario">
                                    <img src={aniversario} className="aniversario" alt="Foto de Jackson Lucas em seu aniversário de 16 anos"/>
                                    <h2 className="letras_curiosidades">Meu aniversário é dia 26/01</h2>
                                </div>
                                <div className="card_eu_cecilia">
                                    <img src={cecilia} className="eu_cecilia" alt="foto de Jackson Lucas com sua irmã cecília na praia de Genipabu"/>
                                    <h2 className="letras_curiosidades">Tenho uma irmã chamada Cecília</h2>
                                </div>
                            </div>
                            
                            <div className="container_colum2">
                                <div className="card_sushi">
                                    <img src={sushi} className="sushi" alt="foto de Jackson Lucas com sua amiga Jéssica comendo sushi"/>
                                    <h2 className="letras_curiosidades">Sou apaixonado por sushi</h2>
                                </div>
                                <div className="card_musica">
                                    <img src={musica} className="musica" alt="foto de Jackson Lucas ouvindo música"/>
                                    <h2 className="alinha_texto letras_curiosidades">Amo cantar(principalmente produzir backing vocal)</h2>
                                </div>
                            </div>
                            <div className="container_colum3">
                                <div className="card_doce">
                                    <img src={doce} className="doce" alt="foto de bolo sabor laranja,com cobertura de chocolate e enfeitado com rodela de laranja,feito por Jackson Lucas"/>
                                    <h2>Sou doceiro</h2>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            
            </article>
        </section>
    );
}
export default Cards;