////////////////////////////////////////////////// Traductions////////////////////////////////////////////////
const translations = {
  fr: {
    title: "Portfolio Kirmann Franck",
    "nav.presentation": "Présentation",
    "nav.project": "Projet",
    "nav.competence": "Compétences",
    name: "Franck Kirmann",
    description:
      "Je suis Franck Kirmann, un passionné par le domaine du développement web. Je suis actuellement en formation de développeur web au sein d'Openclassrooms. Mes compétences en HTML, CSS et JavaScript me permettent de concevoir des sites web dynamiques et intuitifs. Je suis aussi un expert en React et Redux, qui me permettent de concevoir des applications web dynamiques et réactives. En tant que développeur, je suis toujours en recherche de nouvelles technologies et de nouvelles possibilités pour améliorer mes compétences.",
    "projects.title": "Mes Projets",
    "projects.website": "Voir le site",
    "projects.repo": "Voir le repo GitHub",
    "projects.kasa.desc":
      "Kasa est un projet de site de location d’appartements et de studios. J’ai développé l’aperçu du site ainsi que ses principales fonctionnalités en utilisant JavaScript et React. L’objectif était d’assurer une navigation fluide et une expérience utilisateur optimisé.",
    "projects.ohmyfood.desc":
      "OhMyFood est un projet de site web dédié à la restauration, conçu en mobile-first. J’ai travaillé sur l’intégration des interfaces en mettant l’accent sur l’expérience utilisateur mobile et la fluidité des interactions. De plus, j’ai implémenté une animation de chargement (loading) pour améliorer l’immersion des utilisateurs.",
    "projects.ninacarducci.desc":
      "Nina Carducci est un projet consistait à créer un site web optimisé pour une photographe professionnelle. J’ai mis en place des techniques d’optimisation des performances, ainsi que des stratégies de référencement SEO pour améliorer la visibilité du site sur les moteurs de recherche.",
    "skills.title": "Mes Compétences",
    "skills.html": "HTML",
    "skills.css": "CSS et SASS",
    "skills.react": "React et Redux",
    "social.title": "Mes Résseaux",
    "contact.title": "Prendre contact",
    "contact.send": "Envoyer",
    "contact.email": "Votre e-mail",
    "contact.subject": "Le sujet de votre message",
    "contact.message": "Votre message",
    footer: "© Tous droits réservés par Kirmann Franck",
    button: "English",
  },
  en: {
    title: "Kirmann Franck Portfolio",
    "nav.presentation": "Presentation",
    "nav.project": "Project",
    "nav.competence": "Skills",
    description:
      "I am Franck Kirmann, passionate about the field of web development. I am currently training as a web developer at Openclassrooms. My skills in HTML, CSS and JavaScript allow me to design dynamic and intuitive websites. I am also an expert in React and Redux, which allow me to design dynamic and responsive web applications. As a developer, I am always looking for new technologies and new possibilities to improve my skills.",
    "projects.title": "My Projects",
    "projects.website": "See the website",
    "projects.repo": "See the GitHub repo",
    "projects.kasa.desc":
      "Kasa is a website project dedicated to renting apartments and studios. I developed the initial view of the site and its main functionalities using JavaScript and React. The objective was to ensure smooth navigation and optimized user experience.",
    "projects.ohmyfood.desc":
      "OhMyFood is a website project dedicated to catering, designed mobile-first. I worked on the integration of interfaces with a focus on user experience mobile and the fluidity of interactions. Additionally, I implemented a loading animation to improve immersion of users.",
    "projects.ninacarducci.desc":
      "Nina Carducci is a project consisted of creating an optimized website for a professional photographer. I implemented performance optimization techniques, as well as SEO strategies to improve the visibility of the site on search engines.",
    "skills.title": "My Skills",
    "skills.html": "HTML",
    "skills.css": "CSS and SASS",
    "skills.react": "React and Redux",
    "social.title": "My Socials Media",
    "contact.title": "Contact Me",
    "contact.send": "Send",
    "contact.email": "Your email",
    "contact.subject": "Subject of your message",
    "contact.message": "Your message",
    "contact.loader": "Loading...",
    footer: "© All rights reserved by Kirmann Franck",
    button: "Français",
  },
};

function getUserLanguage() {
  return (
    localStorage.getItem("lang") ||
    (navigator.language.startsWith("fr") ? "fr" : "en")
  );
}

let currentLang = getUserLanguage();

function applyLanguage(lang) {
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.getAttribute("data-i18n");
    if (translations[lang][key]) {
      element.textContent = translations[lang][key];
    }
  });

  document.querySelectorAll("[data-i18n-placeholder]").forEach((element) => {
    const key = element.getAttribute("data-i18n-placeholder");
    if (translations[lang][key]) {
      element.placeholder = translations[lang][key];
    }
  });

  document.getElementById("toggleLangue").textContent =
    translations[lang].button;
  localStorage.setItem("lang", lang);
}

applyLanguage(currentLang);

document.getElementById("toggleLangue").addEventListener("click", () => {
  currentLang = currentLang === "fr" ? "en" : "fr";
  applyLanguage(currentLang);
});

////////////////////////////////////////////////// Menu //////////////////////////////////////////////////////
document.getElementById("menuToggle").addEventListener("click", function () {
  document.querySelector(".nav").classList.toggle("open");
});

const nav = document.querySelector(".nav");
document.addEventListener("click", function (event) {
  if (!nav.contains(event.target)) {
    nav.classList.remove("open");
  }
});

// Fermer le menu si on clique sur un lien
document.querySelectorAll(".nav a").forEach((link) => {
  link.addEventListener("click", function () {
    nav.classList.remove("open");
  });
});

////////////////////////////////////////////////// taille police ////////////////////////////////////////////////////////
const pElements = document.querySelectorAll(".Card p");

function updateFontSize() {
  pElements.forEach((p) => {
    let newFontSize = window.innerWidth / 120;

    const minFontSize = 14;
    const maxFontSize = 16;

    newFontSize = Math.max(minFontSize, Math.min(newFontSize, maxFontSize));

    p.style.fontSize = newFontSize + "px";
  });
}

updateFontSize();

window.addEventListener("resize", updateFontSize);
