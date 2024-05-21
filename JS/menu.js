let sidebarWidth = 250;

function openNav() {
  document.getElementById("mySidebar").style.width = sidebarWidth + "px";
  document.getElementById("main2").style.marginRight = sidebarWidth + "px";
}

function closeNav() {
  document.getElementById("mySidebar").style.width = "0";
  document.getElementById("main2").style.marginRight = "0";
}

let sidebarOpen = false;

function toggleNav() {
  if (sidebarOpen) {
    closeNav();
    sidebarOpen = false;
  } else {
    openNav();
    sidebarOpen = true;
  }
}

document.querySelector('.openbtn').addEventListener('click', toggleNav);

let buttons = document.querySelectorAll('.sidebar a');

buttons.forEach(button => {
  button.addEventListener('click', closeNav);
});
