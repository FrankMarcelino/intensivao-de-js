const botaoPlayPausa = document.getElementById('play-pause')
const botaoProximo = document.getElementById('proximo')
const botaoAnterior = document.getElementById('anterior')
const audioCapitulo = document.getElementById('audio-capitulo')

const capitulo = document.getElementById('capitulo')

const numeroCapitulos = 10
let taTocando = false
let capituloAtual = 1

function tocarFaixa() {
    audioCapitulo.play()
    botaoPlayPausa.classList.remove('bi-play-circle')
    botaoPlayPausa.classList.add('bi-pause-circle')
}

function pausarFaixa() {
    audioCapitulo.pause()
    botaoPlayPausa.classList.add('bi-play-circle')
    botaoPlayPausa.classList.remove('bi-pause-circle')
}

function tocarOuPausar() {
    if (!taTocando) {
        tocarFaixa()
        taTocando = true
    } else {
        pausarFaixa()
        taTocando = false
    }
}

function trocarNomeFaixa(){
    capitulo.innerText = `Capítulo ${capituloAtual}`
}

function proximaFaixa() {
    if (capituloAtual === numeroCapitulos) {
        capituloAtual = 1
    } else {
        capituloAtual++
       
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    trocarNomeFaixa()
}

function anteriorFaixa() {
    if (capituloAtual === 1) {
        capituloAtual = numeroCapitulos
    } else {
        capituloAtual--
       
    }

    audioCapitulo.src = `./books/dom-casmurro/${capituloAtual}.mp3`
    tocarFaixa()
    trocarNomeFaixa()
}

botaoPlayPausa.addEventListener('click', tocarOuPausar)
botaoProximo.addEventListener('click', proximaFaixa)
botaoAnterior.addEventListener('click', anteriorFaixa)
