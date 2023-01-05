function selecionarPrato(prato) {
    const pratoSelecionado = document.querySelector(".prato .selecionado");

    if (pratoSelecionado !== null) {
        pratoSelecionado.classList.remove("selecionado");
    }

    prato.classList.add("selecionado");
    }

function selecionarBebida(bebida) {
    const bebidaSelecionada = document.querySelector(".bebida .selecionado");
    
    if (bebidaSelecionada !== null) {
        bebidaSelecionada.classList.remove("selecionado");
    }
    
    bebida.classList.add("selecionado");
    }

function selecionarSobremesa(sobremesa) {
    const sobremesaSelecionada = document.querySelector(".sobremesa .selecionado");

    if (sobremesaSelecionada !== null) {
        sobremesaSelecionada.classList.remove("selecionado");
}

sobremesa.classList.add("selecionado");
}