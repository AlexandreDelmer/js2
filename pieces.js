const pieces = await fetch("pieces-autos.json").then(pieces => pieces.json())

//function pour afficher les éléments

function displayElements(element){
    for(let i = 0 ; i < element.length ; i++){
        const sectionFiches = document.querySelector(".fiches")
    
        const article = element[i]
    
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
}

//function pour trier les éléments dans l'odre croissant par prix
function orderAscByPrice(element){
    element.sort((a,b) => a.prix -b.prix)
}

//function pour n'afficher que les éléments disponibles
function displayAvailableArticle(element){
    const availableArticle = element.filter(function (element) {
        return element.disponibilite === true
    })
}

displayAvailableArticle(pieces)

//Trie des articles par prix croissant
const btnTrier = document.querySelector(".btn-trier")

btnTrier.addEventListener("click", () => {
    orderAscByPrice(pieces)
    displayElements(pieces)
})

//Affiche uniquement les éléments diponibles
const btnFiltrees = document.querySelector(".btn-filtrer")

btnFiltrees.addEventListener("click", () => {
    displayAvailableArticle(pieces)
    displayElements(availableArticle)
})



