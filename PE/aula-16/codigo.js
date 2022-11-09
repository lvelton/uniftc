var nota = []

var notaTotal = 0
for(var n = 0; n<5; n++){
    nota[n] = window.prompt("Digita a nota "+(n+1))

}
nota
for(var cont = 0; cont<nota.length; cont++){ 
    notaTotal = notaTotal + Number(nota[cont])
}
document.write(notaTotal/nota.length)
