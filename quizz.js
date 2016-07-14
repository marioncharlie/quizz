// Liste des questions à afficher. Une question est définie par son énoncé et sa réponse
var questions = [
    {
        enonce: "Combien font 2+2 ?",
        reponse: "2+2 = 4"
    },
    {
        enonce: "En quelle année Christophe Colomb a-t-il découvert l'Amérique ?",
        reponse: "1492"
    },
    {
        enonce: "On me trouve 2 fois dans l'année, 1 fois dans la semaine, mais pas du tout dans le jour... Qui suis-je ?",
        reponse: "La lettre N"
    }
];



var i = 1;

questions.forEach(function (question) {

    // Titre de la question
    var titreElt = document.createElement("strong");
    titreElt.textContent = "Question " + i + " : ";

    // Enoncé de la question, dans une balise <i>
    var debutEnonceElt = document.createElement("i");
    debutEnonceElt.textContent = question.enonce;

    // Enonce de la question (titre + énoncé)
    var enonceElt = document.createElement("div");
    enonceElt.appendChild(titreElt);
    enonceElt.appendChild(debutEnonceElt);

    // Zone de réponse qui contient le bouton
    var zoneReponse = document.createElement("div");
    var boutonReponse = document.createElement("button");
    boutonReponse.textContent = "Affichez la réponse";
    zoneReponse.appendChild(boutonReponse);


    boutonReponse.addEventListener("click", function () {
        // Remplacement du bouton par la réponse 

        var reponseElt = document.createElement("div");
        reponseElt.textContent = question.reponse;
        zoneReponse.innerHTML = "";
        zoneReponse.appendChild(reponseElt);


    })

    // La question regroupe l'énoncé et la zone de réponse
    var questionElt = document.createElement("p");
    questionElt.appendChild(enonceElt);
    questionElt.appendChild(zoneReponse);

    document.getElementById("contenu").appendChild(questionElt);

    i++;
});