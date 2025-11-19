const cobra = {
    vida: 3,
    tamanho: 10,
    cor: "black",
    x:400,
    y:260,
    direcao:"cima",
    desenhar(){
        cCtx.fillStyle = this.cor
        cCtx.fillRect(this.x, this.y,
            this.tamanho, this.tamanho)


    },
    mover(){
        if (this.direcao == "direita") this.x++;
        if (this.direcao == "esquerda") this.x--;
        if (this.direcao == "cima") this.y--;
        if (this.direcao == "baixo") this.y++;
    }
    }

