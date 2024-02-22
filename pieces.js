const reponse = await fetch("pieces-autos.json")
const pieces = await reponse.json()

for(let i = 0; i < pieces.length; i++){

    // Récupérer la section fiches
    const sectionfiches = document.querySelector(".fiches")

    // Créer la section article
    const pieceElement = document.createElement("article")

    // Créer toutes les balises
    const imageElement = document.createElement("img")
    imageElement.src = pieces[i].image

    const nomElement = document.createElement("p")
    nomElement.innerText = pieces[i].nom

    const prixElement = document.createElement("p")
    nomElement.innerText = `Prix : ${pieces[i].prix}€ (${pieces[i].prix < 35 ? "€" : "€€€"})`

    const categorieElement = document.createElement("p")
    categorieElement.innerText = pieces[i].categorie ?? "Aucune catégorie"

    const descriptionElement = document.createElement("p")
    descriptionElement.innerText = pieces[i].description

    const disponibiliteElement = document.createElement("p")
    disponibiliteElement.innerText = pieces[i].disponibilite ? "En stock" : "Indisponible"

    // Relier ma balise piece à ma section fiches
    sectionfiches.appendChild(pieceElement)

    // Relier mes balises à ma div
    pieceElement.appendChild(imageElement)
    pieceElement.appendChild(nomElement)
    pieceElement.appendChild(prixElement)
    pieceElement.appendChild(categorieElement)
    pieceElement.appendChild(descriptionElement)
    pieceElement.appendChild(disponibiliteElement)
}