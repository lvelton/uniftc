var quantidade = Number(window.prompt("Quantas laranjas você deseja?"))
var valorTotal

if(quantidade < 20){
   valorTotal = (quantidade*1)/2 
}else if(quantidade>=20 && quantidade<=30){
    valorTotal = (quantidade*3)/10
}else{
    valorTotal = (quantidade*2)/8
}

window.alert("Você pagará "+valorTotal)