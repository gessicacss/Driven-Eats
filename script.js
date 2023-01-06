function selecionarPrato(prato) {
    const pratoSelecionado = document.querySelector(`.prato .selecionado`);

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    prato.classList.add("selecionado");
    habilitarBotao();
    }

function selecionarBebida(bebida) {
    const bebidaSelecionada = document.querySelector(".bebida .selecionado");
    
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }
    
    bebida.classList.add("selecionado");
    habilitarBotao();
    }

function selecionarSobremesa(sobremesa) {
    const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado");

    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
}

sobremesa.classList.add("selecionado");
habilitarBotao();
}

function habilitarBotao () {
    const verifica = document.querySelectorAll(".selecionado").length;
if (verifica === 3) {
    const botao = document.querySelector('.enviar');
    botao.removeAttribute('disabled');
    botao.textContent = `Fechar pedido`
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

    const pratoSelecionado = document.querySelector('.prato .selecionado');
    const bebidaSelecionada = document.querySelector('.bebida .selecionado');
    const sobremesaSelecionada = document.querySelector ('.sobremesa .selecionado');

    const nomePrato = nome(pratoSelecionado);
    const nomeBebida = nome(bebidaSelecionada);
    const nomeSobremesa = nome(sobremesaSelecionada);

    const precoPrato = valor(pratoSelecionado);
    const precoBebida = valor(bebidaSelecionada);
    const precoSobremesa = valor(sobremesaSelecionada);

    const valorTotal = (precoPrato + precoBebida + precoSobremesa).toFixed(2);

    document.querySelector('.nome-prato').textContent = nomePrato;
    document.querySelector('.preco-prato').textContent = precoPrato.toFixed(2);
    document.querySelector('.nome-bebida').textContent = nomeBebida;
    document.querySelector('.preco-bebida').textContent = precoBebida.toFixed(2);
    document.querySelector('.nome-sobremesa').textContent = nomeSobremesa;
    document.querySelector('.preco-sobremesa').textContent = precoSobremesa.toFixed(2);
    document.querySelector('.preco-total').textContent = valorTotal;
}