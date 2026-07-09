let menu = document.getElementById("menu-btn");
let nav = document.querySelector(".droite");
let gauche = document.querySelector(".aside")
let div = document.querySelector(".porfolio-projet")
let tous = document.getElementById("tous");
let frontend = document.getElementById("frontend");
let backend = document.getElementById("backend");


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
    document.body.classList.toggle("active");

    if (document.body.classList.contains("active")) {
        localStorage.setItem("dark", "active");
        monBtn.classList.remove("fa-moon");
        monBtn.classList.add("fa-sun");
    } else {
        localStorage.setItem("dark", "inactive");
        monBtn.classList.remove("fa-sun");
        monBtn.classList.add("fa-moon");
    }
});


const darkmode = localStorage.getItem("dark");

if (darkmode === "active") {
    document.body.classList.add("active");
    monBtn.classList.add("fa-sun");
} else {
    document.body.classList.remove("active");
    monBtn.classList.add("fa-moon");
}



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
if(email != RegEmail){
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


async function afficheProjet(){
   const response = await fetch("projet.json");
   const data = await response.json();
   console.log(data);
   
   data.forEach(m => {
      div.innerHTML += `
      <div class="projet">
           <div class="projet-content">
               
                         </div>
              <p>${m.text}</p>
              <a href="${m.lien}" style="text-decoration: none;
    color: white;
    background-color: #ffb300;
    padding: 5px;" target="_blank">Voir le site</a>
               <br>
               <a href="${m.lienGit}" style="text-decoration: none;
    color: white;
    background-color: #ffb300;
    padding: 5px;" >Code GitHub</a>
                              
                 </div>
      `
   })
}

async function front(){
   div.innerHTML ="";
    const response = await fetch("projet.json");
   const data = await response.json();
   console.log(data);

   const frontend = data.filter(p => p.categorie === "frontend")
   console.log(frontend);
   
   
   frontend.forEach(m => {
      div.innerHTML += `
      <div class="projet">
           <div class="projet-content">
               
                         </div>
              <p>${m.text}</p>
              <a href="${m.lien}" target="_blank" style="text-decoration: none;
    color: white;
    background-color: #ffb300;
    padding: 5px;" target="_blank">Voir le site</a>
               <br>
               <a href="${m.lienGit}" style="text-decoration: none;
    color: white;
    background-color: #ffb300;
    padding: 5px;">Code GitHub</a>
                              
                 </div>
      `
   })
}

async function back(){
   div.innerHTML ="";
    const response = await fetch("projet.json");
   const data = await response.json();
   console.log(data);

   const frontend = data.filter(p => p.categorie === "backend")
   console.log(frontend);
   
   
   frontend.forEach(m => {
      div.innerHTML += `
      <div class="projet">
           <div class="projet-content">
               
                         </div>
              <p>${m.text}</p>
              <a href="${m.lien}" target="_blank" style="text-decoration: none;
    color: white;
    background-color: #ffb300;
    padding: 5px;" target="_blank">Voir le site</a>
               <br>
               <a href="${m.lienGit}" style="text-decoration: none;
    color: white;
    background-color: #ffb300;
    padding: 5px;">Code GitHub</a>
                              
                 </div>
      `
   })
}

tous.addEventListener("click", () => {
   div.innerHTML = "";
   afficheProjet();
})

frontend.addEventListener("click", () => {
   
   front();
})

backend.addEventListener("click", () => {
   back();
})

afficheProjet();