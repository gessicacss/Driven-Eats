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