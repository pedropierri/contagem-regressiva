let qtdAtual = document.querySelector("#qtd-atual");
let progresso = document.querySelector("#progresso");
const botaoAcao = document.querySelector("#acao");
const botaoDesfazer = document.querySelector("#desfazer");
const configPagina = document.querySelector("#settings-tela")
const configBotao = document.querySelector("#settings-icon")
const CHAVE_QTD = 'qtdSalva';
const CHAVE_PROGRESSO = 'progressoSalvo';

const valorSalvoQtd = localStorage.getItem(CHAVE_QTD);
const valorSalvoProgresso = localStorage.getItem(CHAVE_PROGRESSO);

configBotao.addEventListener('click', () => {
    configPagina.classList.toggle("escondido")
})

if (valorSalvoQtd !== null && valorSalvoProgresso !== null) {
    qtdAtual.textContent = valorSalvoQtd;
    progresso.textContent = `Progresso: ${valorSalvoProgresso}`;
}

let valorProgresso = Number(valorSalvoProgresso || 0);

function acao() {
    let qtdNova = Number(qtdAtual.textContent) - 1;
    valorProgresso++; 

    qtdAtual.textContent = qtdNova;
    progresso.textContent = `Progresso: ${valorProgresso}`;

    localStorage.setItem(CHAVE_QTD, qtdNova);
    localStorage.setItem(CHAVE_PROGRESSO, valorProgresso);
}

function desfazer() {
    let qtdNova = Number(qtdAtual.textContent) + 1;
    if (valorProgresso > 0) {
        valorProgresso--;
    }

    qtdAtual.textContent = qtdNova;
    progresso.textContent = `Progresso: ${valorProgresso}`;

    localStorage.setItem(CHAVE_QTD, qtdNova);
    localStorage.setItem(CHAVE_PROGRESSO, valorProgresso);
}
