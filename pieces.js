const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json())

for(let i = 0 ; i < pieces.length ; i++){
    const sectionFiches = document.querySelector(".fiches")

    const article = pieces[i]

    const piecesElement = document.createElement("article")
    sectionFiches.appendChild(piecesElement)

    const nomElement = document.createElement("h2")
    nomElement.innerText = article.nom
    piecesElement.appendChild(nomElement)

    const imageElement = document.createElement("img")
    imageElement.src = article.image
    piecesElement.appendChild(imageElement)

    const prixElement = document.createElement("p")
    prixElement.innerText = `Prix : ${article.prix}€`
    piecesElement.appendChild(prixElement)

    const categorieElement = document.createElement("p")
    categorieElement.innerText = article.categorie
    piecesElement.appendChild(categorieElement)

    const descriptionElement = document.createElement("p")
    descriptionElement.innerText = article.description ?? "Pas de description pour le moment"
    piecesElement.appendChild(descriptionElement)

    const disponibiliteElement = document.createElement("p")
    disponibiliteElement.innerText = article.disponibilite ? "En stock" : "Rupture de stock"
    piecesElement.appendChild(disponibiliteElement)

}

const btnTrier = document.querySelector(".btn-trier")

btnTrier.addEventListener("click", function() {
})





const btnFiltrees = document.querySelector(".btn-filtrer")



