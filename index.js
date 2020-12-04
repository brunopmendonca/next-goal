const email = document.getElementById('email')
const nome = document.getElementById('nome')
const botao = document.getElementById('botao')


botao.addEventListener('click', ()=>{

    criar(email.value, nome.value)
    console.log("naada")

})

function criar(nome, email){
    let data= {
        nome:nome,
        email:email

    }

    return firebase.database().ref().child("usuarios").push(data)
}