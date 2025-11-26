class Ratinho { 
    constructor(){
        this.x=Math.random()*780;
        this.y=Math.random()*380+60;
        this.imagem = new Image();
        this.imagem.src='ratinho.png'
        this.tamanho=40;
    }
    desenhar(){
        cCtx.drawImage(this.imagem,
                                            this.x, this.y,
                                            this.tamanho, this.tamanho)

    }

}
