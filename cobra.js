const cobra = {
    vida: 3,
    tamanho: 14,
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
        if ((this.x < 0)
            || (this.x > tela.largura - this.tamanho))
            this.morrer();
        if ((this.y < placar.altura)
            || (this.y > tela.altura + placar.altura
                - this.tamanho))
                this.morrer();



    },

    morrer(){
        this.vida--;
        this.x = 400;
        this.y = 260;
    }
    }

