/* Open the sidenav */
function openNav() {
  document.getElementById("mySidenav").style.width = "100%";
}

/* Close/hide the sidenav */
function closeNav() {
  document.getElementById("mySidenav").style.width = "0";
}

function flipCard(id) {
  var card = document.getElementById(id).style.transform;
  document.getElementById(id).style.transform = (card == "rotateY(180deg)" ? "" : "rotateY(180deg)");
}
