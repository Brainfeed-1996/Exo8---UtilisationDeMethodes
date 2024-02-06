// Avec innerHTML
const titreIntroduction = document.createElement("h1");
titreIntroduction.innerHTML = "L'Apprentissage de JavaScript";

const emplacementH1 = document.querySelector("#monIntroduction");

emplacementH1.appendChild(titreIntroduction);

//console.log(titreIntroduction);
//console.log(emplacementH1);

// Avec createTextNode()
const paragraphe01 = document.createElement("p");

const paragraph01Texte = document.createTextNode(
  "Je galère avec l'apprentissage du Javascript"
);
paragraphe01.appendChild(paragraph01Texte);

document.querySelector("#monParagraphe01").appendChild(paragraphe01);

//console.log(paragraphe01);
//console.log(paragraphe01Texte)
