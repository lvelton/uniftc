//Pegar o valor do salário atual e pegar o percentual de aumento
var salario = Number(window.prompt("Digite o salário"))
var percentual = Number(window.prompt("Digite o percentual"))
//Calcular o novo salario baseado no percentual
var novoSalario = (salario/100)*percentual + salario
//Exibir novo salario
document.write("Seu novo salário é "+novoSalario.toLocaleString("pt-BR", {style:"currency",currency:"BRL"}))