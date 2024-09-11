import React from "react";
import minhafoto1 from "./img/minha_foto1.jfif";

function Hero(){
    return(
        <figure>
            <div className="hero">
                <img src = {minhafoto1} alt = 'Foto do autor do site,Jackson Lucas'/>
                <h1 className="nome_completo">Jackson Lucas</h1>
            </div>
        </figure>
    );
}

export default Hero;