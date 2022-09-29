const menu = document.querySelector(".nav__menuburgercontent");
const menuItems = document.querySelectorAll(".menu__headerburgeritem");
const burgerBtn = document.querySelector(".headerburgerbutton");
const closeIcon= document.querySelector(".burgerclosedmenu");
const menuIcon = document.querySelector(".burgeropenicon");
const mainBurgerHide = document.querySelector("main");
const footerBurgerHide = document.querySelector("footer");

function toggleMenu() {
  if (menu.classList.contains("showMenu")) {
    menu.classList.remove("showMenu");
    closeIcon.style.display = "none";
    menuIcon.style.display = "block";
    footerBurgerHide.style.display = "block";
    mainBurgerHide.style.display = "block";

  } else {
    menu.classList.add("showMenu");
    closeIcon.style.display = "block";
    menuIcon.style.display = "none";
    footerBurgerHide.style.display = "none";
    mainBurgerHide.style.display = "none";
    
  }
}

burgerBtn.addEventListener("click", toggleMenu);

menuItems.forEach( 
    function(menuItem) { 
      menuItem.addEventListener("click", toggleMenu);
    }
  )