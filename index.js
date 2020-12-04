const email = document.getElementById('email')
const nome = document.getElementById('nome')
const botao = document.getElementById('botao')
const verificadorN = document.getElementById('verificadorN')
const verificadorE = document.getElementById('verificadorE')
let emailD
let nomeD

nome.addEventListener('input',()=>{

let verificaçaoNome = nome.value.length
 
     
if(verificaçaoNome > 1 ){
    nomeD = nome.value
    verificadorN.innerHTML="nome valido"
    nome.style.borderColor = "#FF0F0F"
    
}
   
if(verificaçaoNome < 1){
    nomeD = ""
    verificadorN.innerHTML=""
    nome.style.borderColor = ""
}
console.log(nomeD)
})

email.addEventListener('input',()=>{

 let verificaçaoEmail = email.value.indexOf('@')
 
 if(verificaçaoEmail > -1 ){
     emailD = email.value
     verificadorE.innerHTML="Email valido"
     email.style.borderColor = "#FF0F0F"
 }
    
 if(verificaçaoEmail <= -1){
     emailD = ""
     verificadorE.innerHTML=""
     email.style.borderColor = ""
 }

console.log(emailD)
})


botao.addEventListener('click', ()=>{
 
   
        criar(emailD, nomeD)
        console.log("naada")
        email.value= ""
        nome.value = ""
        email.style.borderColor = ""
        verificadorE.innerHTML=""
        verificadorN.innerHTML=""
        nome.style.borderColor = ""

        console.log(email.value.lenght)
    
   
})

function criar(nome, email){
    let data= {
        nomeD:nome,
        emailD:email

    }

    firebase.database().ref().child("usuarios").push(data)
    window.alert("Cadastro feito com sucesso") 
}

