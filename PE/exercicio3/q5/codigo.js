var salario = Number(prompt("Insira seu salário:"))
var tempoServico = prompt("Qual o seu tempo de serviço?")

if(tempoServico<=1){
    var novoSalario = salario + (0.05*salario)
}else if(tempoServico>=2 && tempoServico<=4){
    var novoSalario = salario + (0.10*salario)
}else{
    var novoSalario = salario + (0.15*salario)
}

document.write("Seu novo salário é: "+novoSalario)