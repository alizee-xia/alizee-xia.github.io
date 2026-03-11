const data = {
  fr: {
    navHome: "Home",
    navAbout: "À propos",
    navSkills: "Compétences",
    navProjects: "Projets",
    navLanguages: "Langues",
    navContact: "Contact",
    homeTitle: "Bonjour, je suis Alizée XIA",
    homeText: "Étudiante en Master Informatique – IoT",
    aboutTitle: "À propos",
    aboutText: "Je suis étudiante en Master Informatique spécialisée en IoT et réseaux.",
    skillsTitle: "Compétences",
    projectsTitle: "Projets",
    langTitle: "Langues",
    contactTitle: "Contact",
    lang1: "Français – Bilingue",
    lang2: "Chinois – Bilingue",
    lang3: "Anglais – B2",
    lang4: "Italien – A2–B1"
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navLanguages: "Languages",
    navContact: "Contact",
    homeTitle: "Hi, I'm Alizée XIA",
    homeText: "Master student in Computer Science – IoT",
    aboutTitle: "About",
    aboutText: "I am a Master student specialized in IoT and Networks.",
    skillsTitle: "Skills",
    projectsTitle: "Projects",
    langTitle: "Languages",
    contactTitle: "Contact",
    lang1: "French – Bilingual",
    lang2: "Chinese – Bilingual",
    lang3: "English – B2",
    lang4: "Italian – A2–B1"
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
