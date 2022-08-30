//Guardei os valores de km e litro
var km = Number(window.prompt("Digite a quilometragem"))
var litros = Number(window.prompt("Digite a quantidade de combustível gasta"))
//Calculei o consumo dividindo km por litro
var consumo = km/litros
//Exibir o resultado
document.write("O consumo médio foi "+consumo+"km/l")