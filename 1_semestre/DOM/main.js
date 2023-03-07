//VAR: Escopo Global
//Qualquer um acessa essa variável

/* 
getElementById - Pega um elemento por ID.
getElementByClass - Pega um elemento por Classe.

querySelector - Pega um objeto por classe, id.
querySelectorAll - Pega todos os objetos daquela id/classe
*/



//Coletar e armazenar a informação
var nome = document.querySelector('#nome').value
var endereco = document.querySelector('#endereco').value
var nascimento = document.querySelector('#nascimento').value


//eventos...
/*
    Quando algum evento acontecer, faz uma tarefa addEventListener('evento, o que fazer)    
*/

//Botão submit
var botao_submit = document.getElementById('submit')
var botao_limpar = document.getElementById('limpar')

//Chamando o evento para o botão submit
botao_submit.addEventListener('click',coletar_dados)
botao_limpar.addEventListener('click',limpa_dados)

//Função = Javascript

/* 
    É um conjunto de tarefas/instruções que servirão com um propósito específico para cada taerfa.
    ex: O código é sobre cozinhar um bolo, uma função, pode ser o ato de ligar o forno
    Não tem como ligar o forno, se eu não chamar o passo de ligar o forno. (ELA NÃO SE EXECUTA SOZINHA)
*/

//Comando Nome. Parametros
function coletar_dados (){
    var nome_coletado = nome 
    var ende_coletado = endereco 
    var data_coletado = nascimento 
    console.log(nome_coletado)
    console.log(ende_coletado)
    console.log(data_coletado)
}

function limpa_dados (){
    document.getElementById('nome').value = ""
    document.getElementById('endereco').value = ""
    document.getElementById('nascimento').value = "0"

    return console.log("YATA")
}

