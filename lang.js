const data={
fr:{
homeTitle:"Bonjour, je suis Alizée XIA",
homeText:"Étudiante en Master Informatique – IoT ",
aboutTitle:"À propos",
aboutText:"Je suis étudiante en Master Informatique spécialisée en IoT et réseaux. Je développe en C++, Java, Python et Web.",
skillsTitle:"Compétences",
projectsTitle:"Projets",
langTitle:"Langues",
contactTitle:"Contact"
},
en:{
homeTitle:"Hi, I'm Alizée XIA",
homeText:"Master student in Computer Science – IoT ",
aboutTitle:"About",
aboutText:"I am a Master student specialized in IoT and Networks. I develop in C++, Java, Python and Web.",
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
