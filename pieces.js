const reponse = await fetch("pieces-autos.json")
const pieces = await reponse.json()

console.log(pieces)

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

// Récupérer le btn trier parp rix croissant
const btnTrier = document.querySelector(".btn-trier")

// Récupérer le btn trier par la disponibilité des pieces
const btnFiltrer = document.querySelector(".btn-filtrer")

// Récupérer le bouton filtrer par description
const btnFiltrerDescription = document.querySelector(".btn-nodesc")

// Récupérer le bouton filtrer par prix décroissant
const btnFiltrerPrixDecroissant = document.querySelector(".btn-decroissant")



// Function pour trier par prix croissant
btnTrier.addEventListener("click", ()=>{
    const piecesPrixCroissant = Array.from(pieces)

    piecesPrixCroissant.sort(function(a,b){
        return a.prix - b.prix
    })
    console.log(piecesPrixCroissant)
})

// Function pour trier par prix decroissant
btnFiltrerPrixDecroissant.addEventListener("click", ()=>{
    const piecesPrixDecroissant = Array.from(pieces)

    piecesPrixDecroissant.sort(function(a,b){
        return b.prix - a.prix
    })
    console.log(piecesPrixDecroissant)
})

// Function pour trier par disponibilité
btnFiltrer.addEventListener("click", ()=>{
    const piecesFiltrees = pieces.filter(function(pieces){
        return pieces.prix <= 35
    })
    console.log(piecesFiltrees)
})

// Function pour filtrer par description
btnFiltrerDescription.addEventListener("click", ()=>{
    const pieceDescription = pieces.filter(function(pieces){
        return pieces.description 
    })
    console.log(pieceDescription)
})


// Créer une nouvelle liste comportant uniquement tous les noms des pieces
const noms = pieces.map(pieces => pieces.nom)

// Supprimer toutes les pièces dont le prix est > 35€
for(let i = pieces.length -1; i >= 0 ; i--){
    if(pieces[i].prix > 35){
        noms.splice(i,1)
    }
}

const abordableElement = document.createElement("ul")

const abordable = document.querySelector(".abordables").appendChild(abordableElement)

for(let i=0 ; i < noms.length; i++){
    const nomElement = document.createElement("li")
    nomElement.innerText = noms[i]
    abordableElement.appendChild(nomElement)
}

const dispo = pieces.map(pieces => `${pieces.nom} ${pieces.prix}`)

for(let i = pieces.length -1 ; i >= 0 ; i--){
    if(pieces[i].disponibilite === false){
        dispo.splice(i,1)
    }
}

const disponiblesElement = document.createElement("ul")

const disponible = document.querySelector(".disponibles").appendChild(disponiblesElement)

for(let i = 0 ; i < dispo.length ; i++){
    const nomDispoElement = document.createElement("li")
    nomDispoElement.innerText = dispo[i]
    disponiblesElement.appendChild(nomDispoElement)
}

console.log(dispo)

