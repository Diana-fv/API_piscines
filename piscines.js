// create variable link json
const url = "https://data.laregion.fr/api/records/1.0/search/?dataset=piscines&q=";
let jsonData;
// for requet
function getApi(url) {
    fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
        jsonData = data;
        //console.log(jsonData);
        piscines(jsonData);
    })

    .catch((error) => {
        console.error('Error:', error);
    });
}

function piscines(jsonData) {
    //display.innerHTML = "";

    for(i=0; i<jsonData.records.length; i++) {
        //----------------- saison-----------------------/
            
        let saison = document.createElement("div");

        saison.textContent = "";
        saison.textContent = `saison de ouverture ${jsonData.records[i].fields.saison}`;
        display.appendChild(saison);
        //----------------- telephone-----------------------/
        let telephone = document.createElement("div");

        telephone.textContent = "";
        telephone.textContent = `numéro de téléphone ${jsonData.records[i].fields.telephone}`;
        display.appendChild(telephone);

        //----------------- nom_complet-----------------------/
        let nom_complet = document.createElement("div");

        nom_complet.textContent = "";
        nom_complet.textContent = `nom complexe ${jsonData.records[i].fields.nom_complet}`;
        display.appendChild(nom_complet);
        
        //----------------- adresse-----------------------/
        let adresse = document.createElement("div");

        adresse.textContent = "";
        adresse.textContent = `adresse ${jsonData.records[i].fields.adresse}`;
        display.appendChild(adresse);
        
    }
}


var btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    var ville = document.getElementById("ville").value;
    getApi(url);
    //console.log(ville);
});

function getValue() {
    //selectionner l'element input et recuperer sa valeur
    var ville = document.getElementById("ville").value;
    //console.log(getValue);
}
