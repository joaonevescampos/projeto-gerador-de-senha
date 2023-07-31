const inputEl = document.querySelector('#senha')
const checkNumeroEl = document.querySelector('#check-numero')
const checkMaiusculaEl = document.querySelector('#check-maiuscula')
const checkSimboloEl = document.querySelector('#check-simbolo')
const recarregarEl = document.querySelector('.botao-refresh')
let tamanho = 12

checkNumeroEl.addEventListener('click', geradorDeSenha)
checkMaiusculaEl.addEventListener('click', geradorDeSenha)
checkSimboloEl.addEventListener('click', geradorDeSenha)
recarregarEl.addEventListener('click', geradorDeSenha)

function geradorDeSenha(){
    
    let senha = []
    var caracteres = 'abcdefghjkmnpqrstuvwxyz'
    const caracteresMai = 'ABCDEFGHLKMNPQRSTUVWXYZ'
    const caracteresNum = '123456789'
    const caracteresSim = '@&!*%()?#$'

    if(checkMaiusculaEl.checked){
        caracteres += caracteresMai
    }
    if(checkNumeroEl.checked){
        caracteres += caracteresNum
    }
    if(checkSimboloEl.checked){
        caracteres += caracteresSim
    }
   
    for(let i = 0; i < tamanho; i++){
        numeroAleatorio = Math.floor(Math.random() * caracteres.length)
        sorteio = caracteres[numeroAleatorio]
        senha.push(sorteio)   
    }
    senha = senha.join('')
    inputEl.value = senha
    indiceDeSeguranca()

    if(tamanho > 15 && tamanho < 20){
    inputEl.style = "font-size: 14px"
    }

    else if(tamanho >= 20){
        inputEl.style = "font-size: 10px"
    }

    else{
        inputEl.style = "font-size: 18px"
    }
}

function indiceDeSeguranca() {
    barraSegurancaEl = document.querySelector('.barra-seguranca')
    ids = 35 * (tamanho / 32) + (checkMaiusculaEl.checked ? 15 : 0) + (checkNumeroEl.checked ? 20 : 0) + (checkSimboloEl.checked ? 30 : 0)
    ids = Math.floor(ids)
    barraSegurancaEl.style = `width: ${ids}%`
    console.log(ids)

    if(ids < 30){
        barraSegurancaEl.classList.remove('forte')
        barraSegurancaEl.classList.remove('media')
        barraSegurancaEl.classList.add('fraca')
    }else if(ids >= 30 && ids < 60){
        barraSegurancaEl.classList.remove('fraca')
        barraSegurancaEl.classList.remove('forte')
        barraSegurancaEl.classList.add('media')
    }else{
        barraSegurancaEl.classList.remove('fraca')
        barraSegurancaEl.classList.remove('medio')
        barraSegurancaEl.classList.add('forte')
    }

}

const copiarEl = document.querySelector('.copiar')
copiarEl.addEventListener('click', function (){
    navigator.clipboard.writeText(inputEl.value)
})

const copiar2El = document.querySelector('#copiar2')
copiar2El.addEventListener('click', function (){
    navigator.clipboard.writeText(inputEl.value)
})

const tamanhoEl = document.querySelector('#tamanho')
tamanhoEl.addEventListener('input', function() {
    tamanho = tamanhoEl.value
    tamanhoSenhaEl = document.querySelector('.tamanho-senha')
    tamanhoSenhaEl.innerHTML = `Tamanho: ${tamanho}`
    geradorDeSenha()

})

geradorDeSenha()

/*

1 - Criar uma função que calcula o indice de segurança
2 - capturar o id da barra para movimentá-la.
3 - criar a equação de calculo do indice de segurança.
4 - condicional:
se maiscula estiver marcada -> aumenta o indice de segurança
...
5 - escrever no css o width da barra de acordo com o indice de segurança calculado.

*/



