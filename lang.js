const data={
fr:{
homeTitle:"Bonjour, je suis Alizée XIA",
homeText:"Étudiante en Master Informatique – IoT & Réseaux",
aboutTitle:"À propos",
aboutText:"Je suis étudiante en Master Informatique spécialisée en IoT et réseaux.",
skillsTitle:"Compétences",
projectsTitle:"Projets",
langTitle:"Langues",
contactTitle:"Contact"
},
en:{
homeTitle:"Hi, I'm Alizée XIA",
homeText:"Master student in Computer Science – IoT & Networks",
aboutTitle:"About",
aboutText:"I am a Master student specialized in IoT and Networks.",
skillsTitle:"Skills",
projectsTitle:"Projects",
langTitle:"Languages",
contactTitle:"Contact"
}
}
function setLang(l){
for(let k in data[l]){
document.getElementById(k).innerText=data[l][k];
}
}
