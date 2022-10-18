var idade = prompt("Qual a sua idade?")

if(idade>=5 && idade<=7){
    document.write("Você é Infantil A")
}else if(idade>=8 && idade<=10){
    document.write("Você Infantil B")
}else if(idade>=11 && idade<=13){
    document.write("Você é juvenil A")
}else if(idade>=14 && idade<=17){
    document.write("Você é Juvenil B")
}else if(idade>=18){
    document.write("Você é Senior")
}else{
    document.write("Você não pode jogar")
}
