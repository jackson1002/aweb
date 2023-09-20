let musica = document.querySelector('audio');

document.querySelector('.botao-play').addEventListener('click', tocarMusica);
document.querySelector('.fa-play').addEventListener('click', pausarMusica);

function tocarMusica(){
    musica.play();
    document.querySelector('.botao-play').style.display = 'none';
}