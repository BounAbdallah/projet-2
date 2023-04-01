const toggleSwitch = document.querySelector('#toggle');
const body = document.querySelector('body');

function switchTheme(e) {
  if (e.target.checked) {
    body.classList.add('dark-mode');
  } else {
    body.classList.remove('dark-mode');
  }    
}

toggleSwitch.addEventListener('change', switchTheme, false);
//code js du mode sombre fini ici //

//debut du code d'effet du texte de la page home //
const text = document.getElementById('typing-effect').innerHTML;
document.getElementById('typing-effect').innerHTML = '';

let i = 0;
let timer = setInterval(function() {
  if (i < text.length) {
    document.getElementById('typing-effect').innerHTML += text.charAt(i);
    i++;
  } else {
    clearInterval(timer);
  }
}, 100);


const modal = document.getElementById("myModal");
const btn = document.getElementById("myBtn");
const span = document.getElementsByClassName("close")[0];

btn.onclick = function() {
  modal.style.display = "block";
}

span.onclick = function() {
  modal.style.display = "none";
}

window.onclick = function(event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
}

// modal cv ...//

// Ouvrir le modal quand on clique sur le bouton
document.getElementById("open-modal").addEventListener("click", function() {
  document.getElementById("cv-modal").style.display = "block";
});

// Fermer le modal quand on clique sur le bouton de fermeture
document.getElementsByClassName("close")[0].addEventListener("click", function() {
  document.getElementById("cv-modal").style.display = "none";
});

// Fermer le modal quand on clique en dehors du contenu
window.addEventListener("click", function(event) {
  if (event.target == document.getElementById("cv-modal")) {
    document.getElementById("cv-modal").style.display = "none";
  }
});



