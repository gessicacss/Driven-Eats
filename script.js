let nomePrato;
let precoPrato;
let nomeBebida;
let precoBebida;
let nomeSobremesa;
let precoSobremesa;
let valorTotal;

function selecionarPrato(prato) {
    const pratoSelecionado = document.querySelector(`.prato .selecionado`);

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    prato.classList.add("selecionado");

    nomePrato = nome(prato);
    precoPrato = valor(prato);

    habilitarBotao();
    }

function selecionarBebida(bebida) {
    const bebidaSelecionada = document.querySelector(".bebida .selecionado");
    
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }
    
    bebida.classList.add("selecionado");

    nomeBebida = nome(bebida);
    precoBebida = valor(bebida);

    habilitarBotao();
    }

function selecionarSobremesa(sobremesa) {
const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado");

    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
}

    sobremesa.classList.add("selecionado");

    nomeSobremesa = nome(sobremesa);
    precoSobremesa = valor(sobremesa);

    habilitarBotao();
}

function habilitarBotao () {
    if (nomePrato !== undefined && nomeBebida !== undefined && nomeSobremesa !== undefined) {
    const botao = document.querySelector('.enviar');
    botao.removeAttribute('disabled');
    botao.textContent = `Fechar pedido`;
}
}

function nome (nomeSelecionado) {
    const nome = nomeSelecionado.querySelector('.nome').textContent;
    return nome;
}

function valor (preco) {
    let valor = preco.querySelector('.valor').textContent.replace("R$", "").replace(",", ".");
    valor = (Number(valor));
    return valor;
}

function fecharPedido () {
    const modal = document.querySelector('.background');
    modal.classList.remove('display');

    valorTotal = (precoPrato + precoBebida + precoSobremesa).toFixed(2);

    document.querySelector('.nome-prato').textContent = nomePrato;
    document.querySelector('.preco-prato').textContent = precoPrato.toFixed(2);
    document.querySelector('.nome-bebida').textContent = nomeBebida;
    document.querySelector('.preco-bebida').textContent = precoBebida.toFixed(2);
    document.querySelector('.nome-sobremesa').textContent = nomeSobremesa;
    document.querySelector('.preco-sobremesa').textContent = precoSobremesa.toFixed(2);
    document.querySelector('.preco-total').textContent = valorTotal;
}

function cancelar () {
    const fecharModal = document.querySelector('.background');
    fecharModal.classList.add('display');
}

function enviarPedido () {
    const nomePessoa = prompt(`Qual seu nome?`);
    const endereco = prompt (`Qual seu endereço?`);

    const mensagem = `Olá, gostaria de fazer o pedido: \n- Prato: ${nomePrato} \n- Bebida: ${nomeBebida} \n- Sobremesa: ${nomeSobremesa} \nTotal: R$${valorTotal} \n\nNome: ${nomePessoa} \nEndereço: ${endereco}`;

    const enviarWpp = `https://wa.me/5521999999999?text=${encodeURIComponent(mensagem)}`;

    window.open(enviarWpp);
}