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
    "contact.name": "Votre nom",
    "contact.email": "Votre e-mail",
    "contact.subject": "Le sujet de votre message",
    "contact.message": "Votre message",
    "contact.loader": "Chargement...",
    "contact.success": "Votre message a bien envoyé",
    "contact.error": "Une erreur est survenue:",
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
    "contact.name": "Your name",
    "contact.email": "Your email",
    "contact.subject": "Subject of your message",
    "contact.message": "Your message",
    "contact.loader": "Loading...",
    "contact.success": "Your message has been sent successfully",
    "contact.error": "An error has occurred:",
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

////////////////////////////////////////////////// Transition ////////////////////////////////////////////////
const cards = document.querySelectorAll(".Card");

cards.forEach((card) => {
  let initialHeight = card.clientHeight;

  card.addEventListener("transitionstart", () => {
    cards.forEach((card) => {
      card.style.height = initialHeight + 20 + "px";
    });
  });

  card.addEventListener("transitionend", () => {
    cards.forEach((card) => {
      card.style.height = "";
    });
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

////////////////////////////////////////////////// Loader /////////////////////////////////////////////////////
var Loader = document.getElementById("Loader");

function LoaderStart() {
  Loader.style.display = "flex";
}

function LoaderEnd() {
  Loader.style.display = "none";
}

////////////////////////////////////////////////// Modal //////////////////////////////////////////////////////

const Modal = document.querySelector("#Modal");
const CloseBtns = document.querySelectorAll(".Close");
const ContactSuccess = document.querySelector(".ContactSuccess");
const ContactError = document.querySelector(".ContactError");
const ErrorMessage = document.getElementById("error");

function ModalSuccess() {
  Modal.style.display = "flex";
  ContactSuccess.style.display = "flex";
}

function ModalError() {
  Modal.style.display = "flex";
  ContactError.style.display = "flex";
}

function closeModal() {
  Modal.style.display = "none";
  ContactSuccess.style.display = "none";
  ContactError.style.display = "none";
}

CloseBtns.forEach((btn) => {
  btn.addEventListener("click", closeModal);
});

window.addEventListener("click", function (event) {
  if (event.target === Modal) {
    Modal.style.display = "none";
    ContactSuccess.style.display = "none";
    ContactError.style.display = "none";
  }
});

////////////////////////////////////////////////// mail ///////////////////////////////////////////////////////
const SendBtn = document.getElementById("send");

SendBtn.addEventListener("click", function (e) {
  e.preventDefault();

  var name = document.getElementById("name").value;
  var email = document.getElementById("email").value;
  var subject = document.getElementById("subject").value;
  var message = document.getElementById("message").value;

  removeErrorClasses();

  let valid = true;

  if (!name) {
    document.getElementById("name").classList.add("error");
    valid = false;
  }
  if (!email) {
    document.getElementById("email").classList.add("error");
    valid = false;
  }
  if (!subject) {
    document.getElementById("subject").classList.add("error");
    valid = false;
  }
  if (!message) {
    document.getElementById("message").classList.add("error");
    valid = false;
  }

  if (valid) {
    var data = {
      service_id: "service_b3diujl",
      template_id: "template_zz9mqrc",
      user_id: "XYUyuMVkvvbHTsejO",
      template_params: {
        name: name,
        email: email,
        subject: subject,
        message: message,
      },
    };

    LoaderStart();
    $.ajax("https://api.emailjs.com/api/v1.0/email/send", {
      type: "POST",
      data: JSON.stringify(data),
      contentType: "application/json",
    })
      .done(function () {
        LoaderEnd();
        ModalSuccess();
      })
      .fail(function (error) {
        LoaderEnd();
        ModalError();
        ErrorMessage.value = error;
      });
  }
});

function removeErrorClasses() {
  const fields = ["name", "email", "subject", "message"];
  fields.forEach((fieldId) => {
    const field = document.getElementById(fieldId);
    field.addEventListener("input", function () {
      if (field.value.trim() !== "") {
        field.classList.remove("error");
      } else {
        field.classList.add("error");
      }
    });
  });
}

removeErrorClasses();
