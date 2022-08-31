//INICIO - começar os valores que eu precisar
var Eleitores = window.prompt("Digite o número total de eleitores")
var numeroEleitores = Number(Eleitores)
var brancos = Number(window.prompt("Digite o valor de votos brancos"))
var nulos = Number(window.prompt("Digite o número de votos nulos"))
var votosValidos = numeroEleitores - brancos - nulos
//FIM -- Guardei os valores nas variáveis
//INICIO -- Cálculo de percentual
var percentValidos = (votosValidos/numeroEleitores)*100
var percentNulos = (nulos/numeroEleitores)*100
var percentBrancos = (brancos/numeroEleitores)*100
//FIM -- Cálculo de percentual
//INICIO - Exibir resultado
document.write("O percentual de votos Válidos é: "+percentValidos.toFixed(2)+"%<br>")
document.write("O percentual de votos nulos é: "+percentNulos.toFixed(2)+"%<br>")
document.write("O percentual de votos brancos é:"+percentBrancos.toFixed(2)+"%<br>")


//FIM - Exibir resultado