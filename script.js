const inputEl = document.querySelector('#senha')
let tamanho = 12

function geradorDeSenha(){
    let senha = []
    const caracteres = 'abcdefghjkmnpqrstuvwxyzABCDEFGHLKMNPQRSTUVWXYZ123456789@&!*'

    for(let i = 0; i < tamanho; i++){
        numeroAleatorio = Math.floor(Math.random() * caracteres.length)
        sorteio = caracteres[numeroAleatorio - 1]
        senha.push(sorteio)   
    }
    senha = senha.join('')
    inputEl.value = senha
}

const copiarEl = document.querySelector('.copiar')
copiarEl.addEventListener('click', function (){
    navigator.clipboard.writeText(inputEl.value)
})

const tamanhoEl = document.querySelector('#tamanho')
tamanhoEl.addEventListener('input', function() {
    tamanho = tamanhoEl.value
    geradorDeSenha()

})

geradorDeSenha()


