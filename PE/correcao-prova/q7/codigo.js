var lado1 = 9
var lado2 = 10
var lado3 = 10

if(lado1 == lado2 && lado2 == lado3){
    document.write("TRIANGULO EQUILATERO")
}else if(lado1!=lado2 && lado2 != lado3 && lado1!=lado3){
    document.write("TRIANGULO ESCALENO")
}else{
    document.write("TRIANGULO ISÓCELES")
}