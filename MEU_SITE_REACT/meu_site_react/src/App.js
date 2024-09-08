import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div classname="pagina_inteira">
      <section>
        <header>
          <div classname="header">
              <h1 classname="iniciais">J.L</h1>
              <nav>
                <div class="ajeita_links">
                  <a href="#Algumas curiosidades sobre mim" class="link">Curiosidades</a><br>
                  <a href="#Histórico" classname="link">Histórico</a><br>
                  <a href="#Causos" classname="link">Causos</a><br>
                  <a href="#Habilidades" classname="link">Habilidades</a><br>
                  <a href="#Contato" classname="link">Contato</a><br>
                  <a href="#Minhas_fotos" classname="link">Minhas fotos</a><br><br><br><br>
                </div>
              </nav>
          </div>

        <figure>
          <div classname="hero">
            <img src = 'img/minha_foto1.jfif' alt = 'Foto do autor do site,Jackson Lucas'>
            <h1 classname="nome_completo">Jackson Lucas</h1>
          </div>
        </figure>
        <div classname="conhecendo">
          <h1 classname="espassamento">Olá,que tal me conhecer um pouco?</h1>
          <p classname="espassamento2">Como já sabe:meu nome é Jackson Lucas e tenho 18 anos.Adoro programação e espero um dia ter bastante sucesso nessa área,a começar por esse site que está um sucesso.Sou um completo amante da música e gostaria de poder me matricular em aulas de música pra me aprofundar ainda mais nesse universo.<p>
        </div>
        
        
        </header>
      </section>
    
      <section>
        <article>
          <div classname="cards">
            <img src="img/curiosidades.png" class="icone_duvida">
            <h3 id="Algumas curiosidades sobre mim" class="curiosidades">Algumas curiosidades sobre mim:</h3>
            <main>
              <div classname="container_cards">
                <div classname="container_colum1">
                  <div classname="card_aniversario">
                    <img src="img/aniversario.jfif" class="aniversario" alt="Foto de Jackson Lucas em seu aniversário de 16 anos">
                    <h2>Meu aniversário é dia 26/01</li>
                  </div>
                  <div classname="card_eu_cecilia">
                    <img src="img/eu_cecilia.jfif" class="eu_cecilia" alt="foto de Jackson Lucas com sua irmã cecília na praia de Genipabu">
                    <h2>Tenho uma irmã chamada Cecília</h2>
                  </div>
                </div>
                <div classname="container_colum2">
                  <div classname="card_sushi">
                    <img src="img/sushi.jfif" class="sushi" alt="foto de Jackson Lucas com sua amiga Jéssica comendo sushi">
                    <h2>Sou apaixonado por sushi</h2>
                  </div>
                  <div classname="card_musica">
                    <img src="img/musica.jfif" class="musica" alt="foto de Jackson Lucas ouvindo música">
                    <h2 classname="alinha_texto">Amo cantar(principalmente produzir backing vocal)</h2>
                  </div>
                </div>
                <div classname="container_colum3">
                  <div classname="card_doce">
                    <img src="img/doce.jfif" class="doce" alt="foto de bolo sabor laranja,com cobertura de chocolate e enfeitado com rodela de laranja,feito por Jackson Lucas">
                    <h2>Sou doceiro</h2>
                  </div>
                </div>
              </div>
            </main>
          </div>
        
        </article>
      </section>
    
      <section>
        <article>
          <div classname="historico">
            <img src="img/pasta1.png" classname="pasta">
            <h1 id="Histórico" classname="letra_historico">Histórico:</h1>
            <main>
              <div classname="container_geral_tabela">
                <table classname="tabela_inteira">
                  <thead>
                    <tr>
                      <th classname="ano">Ano</th>
                      <th classname="escola">Escola</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td classname="dados">2010 à 2012</td>
                      <td classname="dados">Escola Nossa Senhora da Conceição</td>
                    </tr>
        
                    <tr>
                      <td classname="dados">2013 à 2019</td><br>
                      <td classname="dados">Escola Alegria do Saber</td>
                    </tr>
                  </tbody>
                </table><br>
              </div>
            </main>
          </div>
        </article>
      </section>

      <section>
        <article>
          <main>
            <div classname="causos">
              <h1 id="Causos" classname="cor_titulo">Causos:</h1>
              <div classname="container_causos">
                <div classname="espaco_paragrafo">
                  
                  <p classname="paragrafo1">Uma experiência engraçada que tive foi quando eu era criança.</p>
                  <p classname="paragrafo2">Quando estava brincando com uma amiga minha,minha vara de </p>
                  <p classname="paragrafo3">pescar de brinquedo prendeu no pega ladrão do muro da</p>
                  <p classname="paragrafo4">vizinha e para pegar tivemos a brilhante idéia de me</p>
                  <p classname="paragrafo5">fazer subir numa bicicleta,resultado...cai da bicicleta,o </p>
                  <P classname="paragrafo6">pega ladrão perfurou meu dedo médio fazendo jorrar rios de </P>
                  <p classname="paragrafo7">sangue,mas por fim pegamos a vara de pescar. :)</p>
                  <div classname="carta">
                    <h3 classname="assinatura">Jackson Lucas</h3>
                  </div>
                </div>
                <div classname="container_lapis">
                  <img src="img/caneta_azul.png" classname="lapis_img">
                </div>
              </div>
            </div>
          </main>
        </article>
      </section>
    
  <section>
    <article>
        <div classname="habilidades">
          <img src="img/lampada.png" classname="lampada">
          <h1 id="Habilidades">Habilidades</h1>
          <div classname="container_principal">
            <main>
              <div classname="container_habilidades">
                <div classname="backing_vocal">
                  <h1 classname="titulo">Desenvolver backing vocal</h1>
                  <img src="img/microfone.png" class="microfone">
                </div>
                <div classname="tocar_violao">
                  <h1 classname="titulo">Tocar um pouco de violão</h1>
                  <img src="img/violao.png" class="violao">
                </div>
                <div classname="atuar">
                  <h1 classname="titulo">Sou otimo em atuar</h1>
                  <img src="img/atuar.png" classname="filme">
                </div>
              </div>
            </main>
          </div>
      </div>
    
    </article>
  </section>

  <section>
    <div classname="sequencia_fotos">
      <article>
        <img src="img/camera.png" classname="camera">
        <h3 id = "Minhas_fotos" classname="cor_titulo">Veja à seguir uma sequência das minhas fotos favoritas:</h3>
      </article> 
      <nav>
        <div classname="ajusta_link_fotos">
          <a href = 'MINHAS_FOTOS2/minha_foto2.html' classname="link_fotos">Clique aqui e veja minha sequência de fotos</a><br>
        </div>
      </nav>
    </div>
  </section>
      
  <section>
    <footer>
      <article>
        <div classname="contatos">
          <img src="img/telefone.png" classname="telefone">
          <h1 id="Contato" classname="contato_titulo">Contato:</h1>
          <main>
            <div classname="espacamento_contato">
              <h3>Email:jackson.freitas@escolar.ifrn.edu.br</h3>
              <h3>Telefone:99916-6889</h3>
              <h3>Github:jackson1002</h3><br>
            </div>
          </main>
        </div>
      </article>
    </footer>
    
  </section>

 
 
</body>
</html>
  </div>
  );
}

export default App;
