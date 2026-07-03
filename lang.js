const data = {
  fr: {
    navHome: "Home",
    navAbout: "À propos",
    navSkills: "Compétences",
    navProjects: "Projets",
    navExperience: "Expériences",
    navLanguages: "Langues",
    navContact: "Contact",
    
    homeTitle: "Bonjour, je suis Alizée XIA",
    homeText: "Future étudiante en Master 2 Informatique pour la Science des Données (ISD) – parcours IoT",
    homeSub: "Recherche une alternance de 12 mois · Disponible septembre 2026",
    homeBtn: "Télécharger mon CV",
    
    aboutTitle: "À propos",
    aboutText: "Future étudiante en Master 2 ISD (parcours IoT) à l'Université Paris-Saclay. Passionnée par le développement logiciel et la conception d'applications robustes (Java, C++, Python), je maîtrise la programmation orientée objet, le développement full-stack (PHP, JavaScript, SQL) ainsi que les environnements IoT et DevOps (Docker, Prometheus).",
    
    skillsTitle: "Compétences",
    skillsLang: "Langages",
    skillsWeb: "Web",
    skillsIoT: "IoT / Réseaux",
    skillsDevOps: "DevOps / Outils",
    skillsData: "IA / Data",
    skillsMethods: "Méthodes",

    projectsTitle: "Projets",
    proj1: "Monitoring temps réel d'un capteur ultrasons via MQTT, Docker, Prometheus et Grafana. Implémentation de la QoS MQTT et visualisation des données.",
    proj2: "Conception et évaluation d'une e-reader collaborative avec annotations, group reads et snippets. Tests utilisateurs avec la méthode NASA-TLX.",
    proj3: "Télécommande d'un robot via réseaux avec communication temps réel.",
    proj4: "Application web complète front-end et back-end avec gestion de base de données et sécurisation des formulaires.",
    proj5: "Application interactive 'arbre de vie' en JavaFX avec conception centrée utilisateur.",
    proj6: "2048, Lapin & Renard, Désert Interdit, Rancher — conception algorithmique et POO.",

    expTitle: "Expériences",
    exp1Title: "Stage de Recherche – Laboratoire LISN, Équipe ROCS",
    exp1Text: "Implémentation et évaluation d'algorithme d'économie d'énergie pour les réseaux Wi-Fi 7 (IEEE 802.11be), adapté aux applications time-sensitive.",
    exp2Title: "TER – Laboratoire LISN, Équipe ROCS",
    exp2Text: "Analyse théorique des mécanismes d'économie d'énergie Wi-Fi 7 (MLO). Étude des modèles existants et rédaction de rapport scientifique.",
    
    langTitle: "Langues",
    lang1: "Français – Bilingue",
    lang2: "Chinois – Bilingue",
    lang3: "Anglais – B2",
    lang4: "Italien – A2–B1",

    contactTitle: "Contact",
    contactAvail: "Disponible pour une alternance à partir de septembre 2026 · Paris"
  },
  en: {
    navHome: "Home",
    navAbout: "About",
    navSkills: "Skills",
    navProjects: "Projects",
    navExperience: "Experience",
    navLanguages: "Languages",
    navContact: "Contact",
    
    homeTitle: "Hi, I'm Alizée XIA",
    homeText: "Future Master 2 Computer Science for Data Science (ISD – IoT track) student",
    homeSub: "Looking for a 12-month apprenticeship · Available September 2026",
    homeBtn: "Download my CV",
    
    aboutTitle: "About",
    aboutText: "Future Master 2 ISD (IoT track) student at Université Paris-Saclay. Passionate about software development and building robust applications (Java, C++, Python), I master object-oriented programming, full-stack development (PHP, JavaScript, SQL) as well as IoT and DevOps environments (Docker, Prometheus).",
    
    skillsTitle: "Skills",
    skillsLang: "Languages",
    skillsWeb: "Web",
    skillsIoT: "IoT / Networks",
    skillsDevOps: "DevOps / Tools",
    skillsData: "AI / Data",
    skillsMethods: "Methods",
    
    projectsTitle: "Projects",
    proj1: "Real-time monitoring of an ultrasonic sensor via MQTT, Docker, Prometheus and Grafana. MQTT QoS implementation and data visualization.",
    proj2: "Design and evaluation of a collaborative e-reader with annotations, group reads and snippets. User testing using the NASA-TLX method.",
    proj3: "Remote control of a robot via networks with real-time communication.",
    proj4: "Complete full-stack web application with database management and form security.",
    proj5: "Interactive 'tree of life' application in JavaFX with user-centered design.",
    proj6: "2048, Fox & Rabbit, Forbidden Desert, Rancher — algorithmic design and OOP.",

    expTitle: "Experience",
    exp1Title: "Research Internship – LISN Laboratory, ROCS Team",
    exp1Text: "Implementation and evaluation of an energy-saving algorithm for Wi-Fi 7 networks (IEEE 802.11be), adapted for time-sensitive applications.",
    exp2Title: "Research Study (TER) – LISN Laboratory, ROCS Team",
    exp2Text: "Theoretical analysis of Wi-Fi 7 energy-saving mechanisms (MLO). Study of existing models and scientific report writing.",
    
    langTitle: "Languages",
    lang1: "French – Bilingual",
    lang2: "Chinese – Bilingual",
    lang3: "English – B2",
    lang4: "Italian – A2–B1",

    contactTitle: "Contact",
    contactAvail: "Available for a 12-month apprenticeship from September 2026 · Paris"
    
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
