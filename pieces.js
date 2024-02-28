// Recuperation du tableau d'objet pieces
const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json())

function genererPieces(pieces){
    // Boucle pour générer toutes les fiches articles
    for(let i = O; i < pieces.length ; i++){

        // Créer la div Article
        const piecesElement = document.createElement("article")
        document.body.appendChild(piecesElement)

        // Créer le titre H2 de l'article
        const nomElement = document.createElement("h2")
        nomElement.innerText = pieces[i].nom
        piecesElement.appendChild(nomElement)
    }

    console.log(nomElement)
}

genererPieces(pieces)