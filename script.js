let nomePrato;
let precoPrato;
let nomeBebida;
let precoBebida;
let nomeSobremesa;
let precoSobremesa;
let valorTotal;

let numToFixed = 2;

function selecionarPrato(prato) {
const pratoSelecionado = document.querySelector(`.prato .selecionado`);

if (pratoSelecionado !== null) {
    pratoSelecionado.classList.remove("selecionado");
}

prato.classList.add("selecionado");

    nomePrato = prato.querySelector('.nome').textContent;
    precoPrato = prato.querySelector('.valor').textContent.replace("R$", "").replace(",", ".");

    habilitarBotao();
    }

function selecionarBebida(bebida) {
    const bebidaSelecionada = document.querySelector(".bebida .selecionado");

    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }

    bebida.classList.add("selecionado");

    nomeBebida = bebida.querySelector('.nome').textContent;
    precoBebida = bebida.querySelector('.valor').textContent.replace("R$", "").replace(",", ".");

    habilitarBotao();
    }

function selecionarSobremesa(sobremesa) {
const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado");

    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
}

    sobremesa.classList.add("selecionado");

    nomeSobremesa = sobremesa.querySelector('.nome').textContent;
    precoSobremesa = sobremesa.querySelector('.valor').textContent.replace("R$", "").replace(",", ".");

    habilitarBotao();
}

function habilitarBotao () {
    if (nomePrato !== undefined && nomeBebida !== undefined && nomeSobremesa !== undefined) {
    const botao = document.querySelector('.enviar');
    botao.removeAttribute('disabled');
    botao.textContent = `Fechar pedido`;
}
}

function fecharPedido () {
    const modal = document.querySelector('.background');
    modal.classList.remove('display');

    valorTotal = Number(precoPrato) + Number(precoBebida) + Number(precoSobremesa);

    document.querySelector('.nome-prato').textContent = nomePrato;
    document.querySelector('.preco-prato').textContent = precoPrato;
    document.querySelector('.nome-bebida').textContent = nomeBebida;
    document.querySelector('.preco-bebida').textContent = precoBebida;
    document.querySelector('.nome-sobremesa').textContent = nomeSobremesa;
    document.querySelector('.preco-sobremesa').textContent = precoSobremesa;
    document.querySelector('.preco-total').textContent = valorTotal.toFixed(numToFixed);
}

function cancelar () {
    const fecharModal = document.querySelector('.background');
    fecharModal.classList.add('display');
}

function enviarPedido () {
    const nomePessoa = prompt(`Qual seu nome?`);
    const endereco = prompt (`Qual seu endereço?`);

    const mensagem = `Olá, gostaria de fazer o pedido: \n - Prato: ${nomePrato} \n- Bebida: ${nomeBebida} \n- Sobremesa: ${nomeSobremesa} \nTotal: R$${valorTotal.toFixed(numToFixed)} \n\nNome: ${nomePessoa} \nEndereço: ${endereco}`;

    const enviarWpp = `https://wa.me/5521999999999?text=${encodeURIComponent(mensagem)}`;

    window.open(enviarWpp);
}