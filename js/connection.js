// let nom = document.querySelector("#nom")
// let email = document.querySelector("#email")
// let password = document.querySelector("#password")
// let connection = document.querySelector("#connection")


// // console.log( nom, email, mot_de_pass, connection)



// connecion.addEventListener('click', function() {
//     let Entrer_nom =  localStorage.getItem("nom")
//     let  Entrer_E_mail = localStorage.getItem("email")
//     let  Entrer_password = localStorage.getItem("password")
    
//   if((nom.value === Entrer_nom.value) && (email === Entrer_E_mail) && (password === Entrer_password)){
//     window.location.href = 'file:///Users/imac-09/Desktop/Application-web-administrateur.github.io/html/accueil.html'
//   }
// })



let admin = {nom:"aaa", email:"bbbb", pass:"ccccc"}
localStorage.setItem('admin2', JSON.stringify(admin))
let nom = document.querySelector("#nom")
let email = document.querySelector("#email")
let password = document.querySelector("#password")
let connection = document.querySelector("#connection")

connecion.addEventListener('click', function() {
      let Entrer_nom =  localStorage.getItem("nom")
      let  Entrer_E_mail = localStorage.getItem("email")
      let  Entrer_password = localStorage.getItem("password")
      
    if((nom.value === Entrer_nom.value) && (email === Entrer_E_mail) && (password === Entrer_password)){
      window.location.href = 'file:///Users/imac-09/Desktop/Application-web-administrateur.github.io/html/accueil.html'
    }
})
