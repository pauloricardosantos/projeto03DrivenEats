
let prato
let bebida
let sobremesa

function selecionarPrato(pratoselecionado) {
    prato = true
    const pratoEscolhido = document.querySelector(".bordaPrato");

    if (pratoEscolhido !== null) {
        pratoEscolhido.classList.remove("bordaPrato");
    }

    pratoselecionado.classList.add("bordaPrato");
    fecharPedido()
}
function selecionarBebida(bebidaSelecionada) {
    bebida = true
    const bebidaEscolhida = document.querySelector(".bordaBebida");

    if (bebidaEscolhida !== null) {
        bebidaEscolhida.classList.remove("bordaBebida");
    }

    bebidaSelecionada.classList.add("bordaBebida");

    fecharPedido()
}
function selecionarSobremesa(sobremesaSelecionada) {
    sobremesa = true
    const sobremesaEscolhida = document.querySelector(".bordaSobremesa");

    if (sobremesaEscolhida !== null) {
        sobremesaEscolhida.classList.remove("bordaSobremesa");
    }

    sobremesaSelecionada.classList.add("bordaSobremesa");
    fecharPedido()
}
function fecharPedido() {

    const botao = document.querySelector(".botaoFecharPedido")

    if (prato === true && bebida === true && sobremesa === true) {
        botao.classList.add("pedido-fechado")
        botao.innerHTML = "Fechar pedido"
        botao.disabled = false

    }
}
function confirmarcaoPedido() {

    let pratoSelecionado = document.querySelector(".pratos .bordaPrato h3").innerHTML
    let bebidaSelecionado = document.querySelector(".bebidas .bordaBebida h3").innerHTML
    let sobremesaSelecionado = document.querySelector(".sobremesas .bordaSobremesa h3").innerHTML

    let pratoPreco = document.querySelector(".pratos .bordaPrato h5").innerHTML
    let bebidaPreco = document.querySelector(".bebidas .bordaBebida h5").innerHTML
    let sobremesaPreco = document.querySelector(".sobremesas .bordaSobremesa h5").innerHTML

    const valorFinalCheck = document.querySelector(".confirmar-pedido .container-dois .valores .valor-total")

    let telaDeConfirmacao = document.querySelector(".container-sobreposicao")
    telaDeConfirmacao.classList.remove("ocultar-container")

    const pratoCheck = document.querySelector(".confirmar-pedido .container-dois .itens .prato")
    pratoCheck.innerHTML = pratoSelecionado

    const bebidaCheck = document.querySelector(".confirmar-pedido .container-dois .itens .bebida")
    bebidaCheck.innerHTML = bebidaSelecionado

    const sobremesaCheck = document.querySelector(".confirmar-pedido .container-dois .itens .sobremesa")
    sobremesaCheck.innerHTML = sobremesaSelecionado

    const precoPratoCheck = document.querySelector(".confirmar-pedido .container-dois .valores .valor-prato")
    precoPratoCheck.innerHTML = pratoPreco

    const precoBebidaCheck = document.querySelector(".confirmar-pedido .container-dois .valores .valor-bebida")
    precoBebidaCheck.innerHTML = bebidaPreco

    const precoSobremesaCheck = document.querySelector(".confirmar-pedido .container-dois .valores .valor-sobremesa")
    precoSobremesaCheck.innerHTML = sobremesaPreco

    let valorFinal = parseFloat(pratoPreco.replace("R$", "")) + parseFloat(bebidaPreco.replace("R$", "")) + parseFloat(sobremesaPreco.replace("R$", ""))
    let valorFinalConfig = valorFinal.toFixed(2)
    valorFinalCheck.innerHTML = "R$ " + valorFinalConfig
}
function botaofecharPedido() {

    let nomeCliente = prompt("Qual o seu nome?")
    let enderecoCliente = prompt("Qual o seu endereço?")


    let pratoSelecionado = document.querySelector(".pratos .bordaPrato h3").innerHTML
    let bebidaSelecionado = document.querySelector(".bebidas .bordaBebida h3").innerHTML
    let sobremesaSelecionado = document.querySelector(".sobremesas .bordaSobremesa h3").innerHTML

    let pratoPreco = document.querySelector(".pratos .bordaPrato h5").innerHTML
    let bebidaPreco = document.querySelector(".bebidas .bordaBebida h5").innerHTML
    let sobremesaPreco = document.querySelector(".sobremesas .bordaSobremesa h5").innerHTML

    let valorFinal = parseFloat(pratoPreco.replace("R$", "")) + parseFloat(bebidaPreco.replace("R$", "")) + parseFloat(sobremesaPreco.replace("R$", ""))
    let valorFinalConfig = valorFinal.toFixed(2)

    let mensagemEnvio =
        `Olá, gostaria de fazer o pedido: 
        - Prato: ${pratoSelecionado} 
        - Bebida: ${bebidaSelecionado} 
        - Sobremesa: ${sobremesaSelecionado} 
        Valor total R$ ${valorFinalConfig} 
        
        -Nome do cliente: ${nomeCliente} 
        -Endereço de entrega: ${enderecoCliente}`
    alert(mensagemEnvio)

    window.open("https://wa.me/5575983734446?text=" + mensagemEnvio)

    /*encodeURIComponent Está abrindo pop-up*/
}
function cancelarPedido() {

    const voltarTelaInicial = document.querySelector(".container-sobreposicao")
    voltarTelaInicial.classList.add("ocultar-container")
}
