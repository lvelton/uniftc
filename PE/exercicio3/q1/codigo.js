//Receber a hora
var hora = window.prompt("Digita a hora")
//a depender do valor da hora
if(hora>=6 && hora<=12){
    document.write("Bom Dia")
}else if(hora>=13 && hora<=18){
    document.write("Boa Tarde")
}else{
    document.write("Boa Noite")
}
