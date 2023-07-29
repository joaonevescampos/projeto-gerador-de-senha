function geradorDeSenha(){
    const caracteres = 'abcdefghjkmnpqrstuvwxyzABCDEFGHLKMNPQRSTUVWXYZ123456789@&!*'

    let senha = []

    for(let i = 0; i < 8; i++){
        numeroAleatorio = Math.floor(Math.random() * caracteres.length)
        sorteio = caracteres[numeroAleatorio - 1]
        senha.push(sorteio)
    }
    return senha.join(',')
}
console.log(geradorDeSenha())