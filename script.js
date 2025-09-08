// Seletores de Elementos
const qtdAtual = document.querySelector("#qtd-atual");
const progresso = document.querySelector("#progresso");
const botaoAcao = document.querySelector("#acao");
const nomeAcao = document.querySelector("#nome-acao")
const botaoDesfazer = document.querySelector("#desfazer");
const configPagina = document.querySelector("#settings-tela");
const configBotao = document.querySelector("#settings-icon");
const inputNumeroInicial = document.querySelector("#numero-inicial");
const inputPasso = document.querySelector("#passo-acao");
const botaoSalvar = document.querySelector("#salvar");

// Chaves para o localStorage
const CHAVE_NOME_ACAO = 'NomeAcao'
const CHAVE_QTD = 'qtdSalva';
const CHAVE_PROGRESSO = 'progressoSalvo';
const CHAVE_NUMERO_INICIAL = 'numeroInicial';
const CHAVE_PASSO = 'passoAcao';

// Adiciona event listeners (melhor prática que o onclick no HTML)
botaoAcao.addEventListener('click', acao);
botaoDesfazer.addEventListener('click', desfazer);
configBotao.addEventListener('click', toggleConfig);
botaoSalvar.addEventListener('click', salvarConfig);

// Carrega os dados salvos quando a página inicia  
const nomeAcaoSalvo = localStorage.getItem(CHAVE_NOME_ACAO)
const valorSalvoQtd = localStorage.getItem(CHAVE_QTD);
const valorInicialSalvo = localStorage.getItem(CHAVE_NUMERO_INICIAL);
const passoSalvo = localStorage.getItem(CHAVE_PASSO);

// Define o valor inicial da contagem e do progresso
let valorContagem = valorSalvoQtd !== null ? Number(valorSalvoQtd) : Number(valorInicialSalvo || 100);
let valorProgresso = Number(localStorage.getItem(CHAVE_PROGRESSO) || 0);
let valorPasso = Number(passoSalvo || 1);

// Atualiza a tela com os valores iniciais
qtdAtual.textContent = valorContagem;
progresso.textContent = `Progresso = ${valorProgresso}`;
botaoAcao.textContent = `${nomeAcaoSalvo}`


// Funções de Ação e Configuração
function acao() {
    valorContagem -= valorPasso;
    valorProgresso++; 

    qtdAtual.textContent = valorContagem;
    progresso.textContent = `Progresso = ${valorProgresso}x`;

    localStorage.setItem(CHAVE_QTD, valorContagem);
    localStorage.setItem(CHAVE_PROGRESSO, valorProgresso);
}

function desfazer() {
    valorContagem += valorPasso;
    valorProgresso = Math.max(0, valorProgresso - 1); // Garante que não seja negativo

    qtdAtual.textContent = valorContagem;
    progresso.textContent = `Progresso = ${valorProgresso}x`;

    localStorage.setItem(CHAVE_QTD, valorContagem);
    localStorage.setItem(CHAVE_PROGRESSO, valorProgresso);
}

function toggleConfig() {
    configPagina.classList.toggle("escondido");
    
    // Carrega os valores nos inputs quando a tela de config é aberta
    inputNumeroInicial.value = Number(localStorage.getItem(CHAVE_NUMERO_INICIAL) || 100);
    inputPasso.value = Number(localStorage.getItem(CHAVE_PASSO) || 1);
    nomeAcao.value= `${nomeAcaoSalvo}` || 'Ação'
}

function salvarConfig() {
    // Salva os novos valores no localStorage
    localStorage.setItem(CHAVE_NUMERO_INICIAL, inputNumeroInicial.value);
    localStorage.setItem(CHAVE_PASSO, inputPasso.value);
    localStorage.setItem(CHAVE_NOME_ACAO, nomeAcao.value)
    
    // Esconde a tela de configurações
    configPagina.classList.toggle("escondido");

    // Reinicia a contagem e o progresso com os novos valores
    valorContagem = Number(inputNumeroInicial.value);
    valorProgresso = 0;
    valorPasso = Number(inputPasso.value);
    botaoAcao.textContent = nomeAcao.value || 'Ação'
    
    localStorage.setItem(CHAVE_QTD, valorContagem);
    localStorage.setItem(CHAVE_PROGRESSO, valorProgresso);
    
    qtdAtual.textContent = valorContagem;
    progresso.textContent = `Progresso = ${valorProgresso}`;
}