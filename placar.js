const placar = {
    pontuacao: 0,
    corFundo:'black',
    corTexto:'white',
    largura: 800,
    altura: 60,
    nomeJogo:'IFRJ Cobra',
    desenhar() {
        cCtx.fillStyle=this.corFundo;
        cCtx.fillRect(0,0,this.largura,this.altura);
        cCtx.fillStyle=this.corTexto;
        cCtx.font= '20px Fantasy';
        cCtx.textAlign= 'center';
        cCtx.textBaseline= 'middle';
        cCtx.fillText(this.nomeJogo,400,30);
        cCtx.font = '14px Fantasy';
        cCtx.textAlign = 'left'
        cCtx.textBaseline = 'bottom';
        cCtx.fillText(this.pontuacao+' pts',10,50);
        cCtx.textAlign = 'right'
        cCtx.fillText(cobra.vida + ' vida(s)',790,50);

    }




}
