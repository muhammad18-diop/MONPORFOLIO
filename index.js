let menu = document.getElementById("menu-btn");
let nav = document.querySelector(".droite");

menu.addEventListener("click", () => {
   nav.classList.toggle("active");
  
})

let liens = document.querySelectorAll('li')

liens.forEach(lien => {
   lien.addEventListener("click", () => {
      nav.classList.remove("active")
   })
}) 


let monBtn = document.getElementById("btn")


monBtn.addEventListener("click", () => {
    document.body.classList.toggle("active")
    if(document.body.classList.contains("active")){
      monBtn.classList.add("fa-solid", "fa-sun")
    }
})

let plus1 = document.getElementById("plus1")
let cache = document.getElementById("cacher1")
let para = document.getElementById("para1")


plus1.addEventListener("click", (e) => {
    e.preventDefault();
     if(cache.style.display === "none"){
        cache.style.display = "block"
        para = para + cache
     }else{
        cache.style.display = "none"
       
     }
   
})

let plus2 = document.getElementById("plus2")
let message2 = document.getElementById("cacher2")
let para2 = document.getElementById("para2")

plus2.addEventListener("click", (e) => {
   e.preventDefault();
  if(message2.style.display === "none"){
   message2.style.display = "block"
   para2 = para2 + message2
  }else{
   message2.style.display = "none"
  }
})

let form = document.getElementById("form")
let mess = document.getElementById("mess")
let nom = document.getElementById("nom")
let email = document.getElementById("email")
let objet = document.getElementById("objet")
let text = document.getElementById("text")

const RegEmail = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-]+\.[a-z]+$/

form.addEventListener("submit", (e) => {
   e.preventDefault();
if(email == RegEmail){
   mess.textContent = "Entrer l'email au bon format"
   mess.style.color = "red"
   mess.style.fontWeight = "bold"
   return
}else{
   mess.style.display = "none"
}

   const data = new FormData(form);
   fetch("https://formspree.io/f/xaqlrllp", {
      method: "POST",
      body: data,
      headers: {
         "Accept": "application/json"
      }
   })
   .then(response => {
      if(response.ok){
         mess.textContent = "Message envoyé"
         mess.style.fontSize = "24px"
         mess.style.color = "green"
         mess.style.textAlign = "center"
         form.reset();
      }else{
         mess.textContent = "Erreur"
      }
   })
   .catch(() => {
      mess.textContent = "Erreur réseau"
   })
})