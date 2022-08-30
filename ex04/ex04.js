//Criei 3 variáveis pra guardar o nome, valor e aumento
var nomeProduto = window.prompt("Digite o nome do produto")
var valorProduto = Number(window.prompt("Digite o valor do produto"))
var aumento = 1.30
//Calcular o valor do aumento
var novoValor = valorProduto*aumento
//Calculei a diferença pro preço atual
var diferenca = novoValor - valorProduto
//Exibir o resultado
document.write("O produto pode ser vendido por: "+novoValor.toLocaleString("pt-BR", {style:"currency", currency:"BRL"})+" e você lucrará "+diferenca.toLocaleString("pt-BR", {style:"currency", currency:"BRL"}))
