var valor = Number(window.prompt("Digite o valor do produto:"))
var condicao = window.prompt("Digite a condição de pagamento")


switch(condicao){
    case 'debito':
        var novoValor = valor - (0.15*valor)
        break
    case 'dinheiro':
        var novoValor = valor - (0.10*valor)
        break
    case 'credito':
        var novoValor = valor
        break
    case 'parcelado':
        var novoValor = valor + (0.10*valor)
        break
    default:
        document.write("A forma de pagamento desconhecida")
        break
}

document.write("O novo valor será "+novoValor)