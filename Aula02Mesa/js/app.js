let jogar = confirm("Vamos jogar!")

if(jogar){
    let jogadorPontos =0
    let computadorPontos =0
        
    while(jogadorPontos < 3 && computadorPontos <3){
        let escolhas =["pedra", "papel", "tesoura"]
        let computador = escolhas[Math.floor(Math.random()*escolhas.length)]
        let jogador = prompt ("Escolha entre Pedra, Papel ou Tesoura.")
        let jogadorConfim=escolhas.find(escolha => escolha === jogador.toLowerCase())
        if (!jogadorConfim){
            alert("Essa opção não é válida!")
        }else switch (computador+jogadorConfim){
            case "pedrapedra":
            case "tesouratesoura":
            case "papelpapel":
                alert(`Sua escolha: ${jogadorConfim}. Minha escolha: ${computador}. Empatamos!😌`)
            break;
            case "pedratesoura":
            case "tesourapapel":
            case "papelpedra":
                computadorPontos++
                    alert(`Sua escolha: ${jogadorConfim}. Minha escolha: ${computador}. Eu ganhei!😃. 
                    Sua pontuação: ${jogadorPontos}. Minha pontuação ${computadorPontos}`)
            break;
            default:
                jogadorPontos++
                    alert(`Sua escolha: ${jogadorConfim}. Minha escolha: ${computador}. Você ganhou!😤 Sua pontução: ${jogadorPontos}. Minha pontuação ${computadorPontos}`)
         }
        }
        if(jogadorPontos ==3){
            alert("Parabéns, você ganhou!🥳")
        }else if(computadorPontos ==3){
            alert("Eu ganhei!!!")
        }else alert("Nos vemos na próxima!")
    }else alert("Nos vemos na próxima!🥺")
