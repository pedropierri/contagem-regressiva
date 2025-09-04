let qtdAtual = document.querySelector("#qtd-atual")
let progresso = document.querySelector("#progresso")
const botaoAcao = document.querySelector("#acao")
const botaoDesfazer = document.querySelector("#desfazer")

function acao() {
    let qtdNova = null

    qtdNova = Number(qtdAtual.textContent) - 1
    qtdAtual.textContent = qtdNova

    acaoProgresso()
}

function desfazer() {
    let qtdNova = null
    qtdNova = Number(qtdAtual.textContent) + 1
    qtdAtual.textContent = qtdNova
}

function acaoProgresso() {
    let valorProgresso = null

    valorProgresso = 
}

