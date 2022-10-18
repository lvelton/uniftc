var corpo = window.document.body

corpo.style.backgroundColor = 'yellow'

var paragrafo = window.document.getElementsByTagName('p')[0]

paragrafo.innerText = "Qualquer texto diferente"

paragrafo.style.backgroundColor = 'green'

paragrafo.style.color = 'white'

var primeiroTitulo = window.document.getElementById('principal')

primeiroTitulo.innerText = "Novo título"

var segundoTitulo = window.document.getElementsByClassName('titulos')[0]
document.write(segundoTitulo.innerText)

var div = window.document.getElementsByName('meuparagrafo')[0]

div.innerHTML = '<h1>Olá, turma de PE</h1>'