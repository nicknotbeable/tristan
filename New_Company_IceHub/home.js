function toggleMenu() {
  const menu = document.getElementById("mainMenu");
  if (menu.style.width === "250px") {
    menu.style.width = "0";
  } else {
    menu.style.width = "250px";
  }
}


function exitMenu() {
  const menu = document.getElementById("mainMenu");
  menu.style.width = "0";
}