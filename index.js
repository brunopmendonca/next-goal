const email = document.getElementById('email')
const nome = document.getElementById('nome')
const company = document.getElementById('company')
const botao = document.getElementById('botao')
const verificadorN = document.getElementById('verificadorN')
const verificadorE = document.getElementById('verificadorE')
let emailD
let nomeD
let companyD

nome.addEventListener('input',()=>{

let verificaçaoNome = nome.value.length
 
     
if(verificaçaoNome > 1 ){
    nomeD = nome.value
    verificadorN.innerHTML="nome valido"
    nome.style.borderColor = "green"
    
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
     email.style.borderColor = "green"
 }
    
 if(verificaçaoEmail <= -1){
     emailD = ""
     verificadorE.innerHTML=""
     email.style.borderColor = ""
 }

console.log(emailD)
})

company.addEventListener('input',()=>{

    let verificaçaoCompany = company.value.length
     
         
    if(verificaçaoCompany > 1 ){
        companyD = company.value
        company.style.borderColor = "green"
        
    }
       
    if(verificaçaoCompany < 1){
        companyD = ""
        company.style.borderColor = ""
    }
    console.log(CompanyD)
    })


botao.addEventListener('click', ()=>{
 
   
        criar(emailD, nomeD, companyD)
        console.log("naada")
        email.value= ""
        nome.value = ""
        company.value = " "
        company.style.borderColor = ""
        email.style.borderColor = ""
        verificadorE.innerHTML=""
        verificadorN.innerHTML=""
        nome.style.borderColor = ""

        console.log(email.value.lenght)
    
   
})

function criar(nome, email,company){
    let data= {
        nome:nome,
        email:email,
        company: company

    }

    firebase.database().ref().child("usuarios").push(data)
    window.alert("Cadastro feito com sucesso") 
}

