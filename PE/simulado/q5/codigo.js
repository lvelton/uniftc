var alerta = window.prompt("Qual o Nível do Alerta")
if(alerta>=0 && alerta<=3){
    document.write("Baixo")
}else if(alerta<=7){
    document.write("Médio")
}else{
    document.write("Grave")
}