var modal1 = document.getElementById("modal1");
var modal2 = document.getElementById("modal2");
var modal3 = document.getElementById("modal3");
var modal4 = document.getElementById("modal4");
var modal5 = document.getElementById("modal5");

var closeBtns = document.getElementsByClassName("close");
var cards = document.getElementsByClassName("card");
var copyButtons = document.getElementsByClassName("copy-btn");

function showModal(modal) {
    modal.style.display = "block";
}

function hideModal(modal) {
    modal.style.display = "none";
}

function showPopupMessage(message) {
    var popup = document.createElement("div");
    popup.classList.add("popup");
    popup.textContent = message;
  
    document.body.appendChild(popup);
  
    setTimeout(function () {
      popup.remove();
    }, 2000);
  }
  
  function copyModalContent(modal) {
    var paragraph = modal.querySelector(".modal-content p");
    var modalText = paragraph.innerText;
  
    navigator.clipboard
      .writeText(modalText)
      .then(function () {
        console.log("Content copied to clipboard!");
        showPopupMessage("Content copied to clipboard!");
      })
      .catch(function (error) {
        console.error("Unable to copy content to clipboard.", error);
      });
  }
  
Array.from(cards).forEach(function (card) {
    card.addEventListener("click", function () {
        if (card.id === "card1") {
            showModal(modal1);
        } else if (card.id === "card2") {
            showModal(modal2);
        } else if (card.id === "card3") {
            showModal(modal3);
        } else if (card.id === "card4") {
            showModal(modal4);
        } else if (card.id === "card5") {
            showModal(modal5);
        }
    });
});

Array.from(closeBtns).forEach(function (closeBtn) {
    closeBtn.addEventListener("click", function () {
        var modal = closeBtn.parentElement.parentElement;
        hideModal(modal);
    });
});

Array.from(copyButtons).forEach(function (copyButton) {
    copyButton.addEventListener("click", function () {
        var modal = copyButton.parentElement.parentElement;
        copyModalContent(modal);
    });
});

window.addEventListener("click", function (event) {
    if (event.target.classList.contains("modal")) {
        var modal = event.target;
        hideModal(modal);
    }
});