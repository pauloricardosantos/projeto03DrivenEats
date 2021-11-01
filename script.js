
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

    const mensagemConfirmacao = (
        `Olá, gostaria de fazer o pedido: \n
     - Prato: ${pratoSelecionado} \n
     - Bebida: ${bebidaSelecionado} \n 
     - Sobremesa: ${sobremesaSelecionado} \n
     - Valor total: R$ ${valorFinalConfig} \n

     - Nome do cliente: ${nomeCliente} 
     - Endereço de entrega: ${enderecoCliente}`)
    alert(mensagemConfirmacao)

    const mensagemEnvio = encodeURIComponent
        (`Olá, gostaria de fazer o pedido: \n
     - Prato: ${pratoSelecionado} \n
     - Bebida: ${bebidaSelecionado} \n 
     - Sobremesa: ${sobremesaSelecionado} \n
     - Valor total: R$ ${valorFinalConfig} \n

     - Nome do cliente: ${nomeCliente} 
     - Endereço de entrega: ${enderecoCliente}`)

    const configURL = ("https://wa.me/5575983734446?text=" + mensagemEnvio)
    window.open(configURL)

    const agradecimento = document.querySelector(".obrigado")
    agradecimento.classList.remove("ocultar")

}
function cancelarPedido() {

    const voltarTelaInicial = document.querySelector(".container-sobreposicao")
    voltarTelaInicial.classList.add("ocultar-container")
}
/*
function voltarMenu() {
    const voltarMenuinicial = document.querySelector(".obrigado")
    voltarMenuinicial.classList.add("ocultar")

    const voltarTelaInicial = document.querySelector(".container-sobreposicao")
    voltarTelaInicial.classList.add("ocultar-container")
}
Posso usar essa função para voltar apenas uma tela ao invés de dar reload na página
*/

