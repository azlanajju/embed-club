function navToggle() {
  const sideNav = document.getElementById("sideNav");
  if (!sideNav) return;
  sideNav.classList.add("openSideNav");
  document.body.classList.add("nav-open");
}

function closeNav() {
  const sideNav = document.getElementById("sideNav");
  if (!sideNav) return;
  sideNav.classList.remove("openSideNav");
  document.body.classList.remove("nav-open");
}

function bindSideNavControls() {
  const menuTrigger = document.querySelector(".menu-icon");
  if (menuTrigger) {
    menuTrigger.addEventListener("click", navToggle);
  }
  document.addEventListener("click", (e) => {
    if (e.target.id === "closeBtn" || e.target.closest("#closeBtn")) {
      closeNav();
    }
  });
}

bindSideNavControls();
const devCred = document.getElementById("devCred");
if (!devCred || devCred.innerHTML.trim() !== "Azlan") {
  document.body.innerHTML = "<h1>Unauthorized Changes Detected</h1>";
  alert(
    "Unauthorized changes detected! This website may not function properly."
  );
}
// scroll behaviour (desktop hero only; mobile menu stays dark on light topbar)
window.addEventListener("scroll", function () {
  const menuBtn = document.getElementById("menuBtn");
  if (!menuBtn || window.matchMedia("(max-width: 900px)").matches) return;

  menuBtn.style.color = window.scrollY > 400 ? "#222831" : "#ffffff";
});


// document.addEventListener("DOMContentLoaded", function() {
//     document.oncontextmenu = function() { return false; };

//     document.addEventListener("mousedown", function(e) {
//         if (e.button == 2) {
//             return false;
//         } else {
//             return true;
//         }
//     });

//     document.onkeydown = function(e) {
//         if ((e.ctrlKey && e.shiftKey && e.keyCode === 67)) {
//             document.body.innerHTML = '<center><h1>Baap se Bakchodi Nahi</h1> <br><a style="background: teal;color: white;" class="btn btn-primary" href="#">Give up</a></center>';
//             return false;
//         } else if ((e.ctrlKey && (e.keyCode === 67 || e.keyCode === 86 || e.keyCode === 73 || e.keyCode === 85 || e.keyCode === 83 || e.keyCode === 16 || e.keyCode === 117)) || (e.keyCode === 123)) {
//             document.body.innerHTML = '<center><h1>Sorry No Trespassing</h1> <br><a style="background: teal;color: white;" class="btn btn-primary" href="">Give up</a></center>';
//             return false;
//         }
//     };
// });
