function popup(id){
    let popup = document.getElementById(id);
    popup.style.display="flex";
    document.documentElement.style.overflowY = 'hidden';
}

function closePopup(id){
    let popup = document.getElementById(id);
    popup.style.display="none";
    document.documentElement.style.overflowY = 'visible';

}

function escClose(id){
document.addEventListener("keydown", function(event) {
    if (event.key === "Escape") {
        closePopup(id);
    }
});
}