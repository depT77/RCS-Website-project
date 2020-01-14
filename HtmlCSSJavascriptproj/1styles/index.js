//dabūt pogu
mybutton = document.getElementById("myBtn");

// kad ir aizskrullējis 20px no galvenās bildes uz leju, parādīt pogu
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// uzspiežot uz pogas aiziet uz pašu augšu uz (0)
function topFunction() {
  document.body.scrollTop = 0; // priekš Safari
  document.documentElement.scrollTop = 0; // priekš Chromes, Firefoxa, IE un Operas
}
