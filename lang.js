const data = {
  fr: {
    navHome: "Home",
    navAbout: "À propos",
    navSkills: "Compétences",
    navProjects: "Projets",
    navLanguages: "Langues",
    navContact: "Contact",
    
    homeTitle: "Bonjour, je suis Alizée XIA",
    homeText: "Future étudiante en Master 2 Informatique pour la Science des Données (ISD) – parcours IoT",
    
    aboutTitle: "À propos",
    aboutText: "Future étudiante en Master 2 ISD (parcours IoT) à l'Université Paris-Saclay. Passionnée par le développement logiciel et la conception d'applications robustes (Java, C++, Python), je maîtrise la programmation orientée objet, le développement full-stack (PHP, JavaScript, SQL) ainsi que les environnements IoT et DevOps (Docker, Prometheus).",
    
    skillsTitle: "Compétences",
    
    projectsTitle: "Projets",
    
    langTitle: "Langues",
    lang1: "Français – Bilingue",
    lang2: "Chinois – Bilingue",
    lang3: "Anglais – B2",
    lang4: "Italien – A2–B1",

    contactTitle: "Contact"
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navLanguages: "Languages",
    navContact: "Contact",
    
    homeTitle: "Hi, I'm Alizée XIA",
    homeText: "Future Master 2 Computer Science for Data Science (ISD – IoT track) student",
    
    aboutTitle: "About",
    aboutText: "Future Master 2 ISD (IoT track) student at Université Paris-Saclay. Passionate about software development and building robust applications (Java, C++, Python), I master object-oriented programming, full-stack development (PHP, JavaScript, SQL) as well as IoT and DevOps environments (Docker, Prometheus).",
    
    skillsTitle: "Skills",
    
    projectsTitle: "Projects",
    
    langTitle: "Languages",
    lang1: "French – Bilingual",
    lang2: "Chinese – Bilingual",
    lang3: "English – B2",
    lang4: "Italian – A2–B1",

    contactTitle: "Contact",
    
  }
}
function setLang(l) {
  document.querySelectorAll('[data-i18n]').forEach(el => {
    const key = el.getAttribute('data-i18n');
    if (data[l][key]) {
      el.innerText = data[l][key];
    }
  });
}
