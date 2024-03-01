let sideNav = document.getElementById("sideNav");
let menuButton = document.getElementById("menuBtn");
let menuClose = document.getElementById("closeBtn");

function navToggle() {
  sideNav.classList.add("openSideNav");
  menuButton.style.display = "none";
}

function closeNav() {
  sideNav.classList.remove("openSideNav");
  menuButton.style.display = "block";
}

menuButton.addEventListener("click", navToggle);
menuClose.addEventListener("click", closeNav);
const devCred = document.getElementById("devCred");
if (!devCred || devCred.innerHTML.trim() !== "Azlan") {
  document.body.innerHTML = "<h1>Unauthorized Changes Detected</h1>";
  alert(
    "Unauthorized changes detected! This website may not function properly."
  );
}
// scroll behaviour
window.addEventListener("scroll", function () {
  const menuIcon = document.getElementById("menu-icon");
  const scrollPosition = window.scrollY;

  if (scrollPosition > 400) {
    menuIcon.style.color = "black";
  } else {
    menuIcon.style.color = "white";
  }
});


document.addEventListener("DOMContentLoaded", function() {
    document.oncontextmenu = function() { return false; };

    document.addEventListener("mousedown", function(e) {
        if (e.button == 2) {
            return false;
        } else {
            return true;
        }
    });

    document.onkeydown = function(e) {
        if ((e.ctrlKey && e.shiftKey && e.keyCode === 67)) {
            document.body.innerHTML = '<center><h1>Baap se Bakchodi Nahi</h1></center>';
            return false;
        } else if ((e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 73 || e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 16 || e.keyCode === 117)) || (e.keyCode === 123)) {
            document.body.innerHTML = '<center><h1>Baap se Bakchodi Nahi</h1></center>';
            return false;
        }
    };
});
