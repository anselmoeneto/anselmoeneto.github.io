const menu = document.querySelector(".header__menu--hamburguer");
const navMenu = document.querySelector(".header__menu");

menu.addEventListener("click", () => {
  navMenu.classList.toggle("is-active");
  menu.classList.toggle("is-active");
});

document.addEventListener("click", (event) => {
  const clicouNoMenu = navMenu.contains(event.target);
  const clicouNoBotao = menu.contains(event.target);

  if (!clicouNoMenu && !clicouNoBotao) {
    navMenu.classList.remove("is-active");
    menu.classList.remove("is-active");
  }
});

navMenu.addEventListener("click", () => {
  navMenu.classList.remove("is-active");
  menu.classList.remove("is-active");
});
