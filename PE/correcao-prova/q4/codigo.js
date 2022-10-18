var senhaUsuario = window.prompt("Digite a senha:")
var senhaPadrao = 12345

if(senhaUsuario == senhaPadrao){
    document.write("ACESSO PERMITIDO")
}else{
    document.write("ACESSO NEGADO")
}