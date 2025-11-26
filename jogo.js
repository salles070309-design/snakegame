function jogar(){
    placar.desenhar();
    tela.desenhar();
    cobra.desenhar();
    ratinho.desenhar();
    cobra.mover();
    requestAnimationFrame(jogar)
}
let ratinho = new Ratinho();
jogar();


document.addEventListener('keydown',(evento)=>{
    if (evento.key== '8') cobra.direcao='cima';
    if(evento.key== '6') cobra.direcao='direita';
    if(evento.key== '2') cobra.direcao= 'baixo';
    if(evento.key== '4') cobra.direcao= 'esquerda';

})
