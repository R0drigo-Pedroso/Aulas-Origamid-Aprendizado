function initTabNav() {
  const tabMenu = document.querySelectorAll(".js-tabmenu li");
  const tabContent = document.querySelectorAll(".js-tabcontent section");

  /* Fazendo verificação de tela */
  /*Esse 'if' é para verificar se 'tabMenu e tabContent' se realmente existe. Caso exista será executado normalmente, se por um acaso o usuário tenha desabilitado o js ou esta com o navegador antigo, o js não ira funcionar, mas o css esta funcionando normalmente porém será estatico  */
  if (tabMenu.length && tabContent.length) {
    tabContent[0].classList.add("ativo");

    function activeTab(index) {
      tabContent.forEach((section) => {
        section.classList.remove("ativo");
      });
      tabContent[index].classList.add("ativo");
    }

    tabMenu.forEach((itemMenu, index) => {
      itemMenu.addEventListener("click", () => {
        activeTab(index);
      });
    });
  }
}
initTabNav();

/* Accordin list */
function initAccordion() {
  const accordionList = document.querySelectorAll(".js-accordion dt");

  const activeClass = "ativo";

  /* Esse 'if' é para verificar se 'accordionList' se realmente existe. Caso exista será executado normalmente, se por um acaso o usuário tenha desabilitado o js ou esta com o navegador antigo, o js não ira funcionar, mas o css esta funcionando normalmente porém será estatico  */
  if (accordionList.length) {
    accordionList[0].classList.add(activeClass);
    accordionList[0].nextElementSibling.classList.add(activeClass);

    function activeAccordion() {
      this.classList.toggle(activeClass);
      this.nextElementSibling.classList.toggle(activeClass);
    }

    accordionList.forEach((item) => {
      item.addEventListener("click", activeAccordion);
    });
  }
}
initAccordion();

/* Realização de Scroll */
function initScrollSuave() {
  const linksInternos = document.querySelectorAll('.js-menu a[href^="#"]');

  function scrollToSection(event) {
    event.preventDefault();
    const href = event.currentTarget.getAttribute("href");
    const section = document.querySelector(href);
    section.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });

    /* 
    forma alternativa
    const topo = section.offsetTop;
    window.scrollTo({
      top: topo,
      behavior: 'smooth',
    });
     */
  }

  linksInternos.forEach((link) => {
    link.addEventListener("click", scrollToSection);
  });
}
initScrollSuave();

/* Animação ao usar Scroll */
function initAnimacaoScroll() {
  const sections = document.querySelectorAll(".js-scroll");
  if (sections.length) {
    const windowMetade = window.innerHeight * 0.6;

    function animaScroll() {
      sections.forEach((section) => {
        const sectionTop = section.getBoundingClientRect().top;
        const isSectionVisible = sectionTop - windowMetade < 0;
        if (isSectionVisible) section.classList.add("ativo");
        else section.classList.remove("ativo");
      });
    }

    animaScroll();

    window.addEventListener("scroll", animaScroll);
  }
}
initAnimacaoScroll();
