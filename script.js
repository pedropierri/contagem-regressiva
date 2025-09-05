let qtdAtual = document.querySelector("#qtd-atual")
let progresso = document.querySelector("#progresso")
const botaoAcao = document.querySelector("#acao")
const botaoDesfazer = document.querySelector("#desfazer")
let valorProgresso = Number(0)

function acao() {
    let qtdNova = null

    qtdNova = Number(qtdAtual.textContent) - 1
    qtdAtual.textContent = qtdNova
    valorProgresso++ 

    acaoProgresso(valorProgresso)
}

function desfazer() {
    let qtdNova = null
    qtdNova = Number(qtdAtual.textContent) + 1
    qtdAtual.textContent = qtdNova
    if (progresso.textContent >= 0) {
        --valorProgresso
    }

    acaoProgresso(valorProgresso)
}

function acaoProgresso(valorProgresso) {
    progresso.textContent = `Progresso = ${valorProgresso}`
}
