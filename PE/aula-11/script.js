var btn = document.getElementById('btnCalcular')

btn.addEventListener('click', calcular)

function calcular(){
    var input1 = document.getElementById('nota1')

    var input2 = document.getElementById('nota2')

    var nota1 = Number(input1.value)

    var nota2 = Number(input2.value)
   
    var media = (nota1 +nota2)/2

    var resultado = document.getElementById('resultado')
    
    if(media >= 7){
        resultado.innerText = "Você foi aprovado! " + media
    } else{
        resultado.innerText = "Você foi reprovado!" + media
    }
}