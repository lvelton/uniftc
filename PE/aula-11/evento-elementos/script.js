var div = window.document.getElementById('minhaDiv')

div.addEventListener('click', clicar)

div.addEventListener('mouseenter',entrar)

div.addEventListener('mouseout', sair)

function clicar(){
    div.innerText = 'Você Clicou'
}
function entrar(){
    div.innerText = 'Você Entrou na Div'
}
function sair(){
    div.innerText = "Você saiu da Div"
}
