import React from 'react';
function Header(){
    return(
        <section>
            <header>
                <div className="header">
                    <h1 className="iniciais">J.L</h1>
                    <nav>
                        <div className="ajeita_links">
                            <a href="#Algumas curiosidades sobre mim" className="link">Curiosidades</a><br/>
                            <a href="#sobre_mim" className="link">Sobre Mim</a><br/>
                            <a href="#Portifolio" className="link">Portifólio</a><br/>
                            <a href="#Contato" className="link">Contato</a><br/><br/><br/><br/>
                        </div>
                    </nav>
                </div>
            </header>            
        </section>
    );
}

export default Header;