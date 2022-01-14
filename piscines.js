// create variable link json
const url = "https://data.laregion.fr/api/records/1.0/search/?dataset=piscines&q=";

// for requet
function requestApi(url) {
    fetch(url)
    .then(reponse => reponse.json())
    .then(data => {
        
        //console.log(jsonData);
        piscines(data);
    })

    .catch((error) => {
        console.error('Error:', error);
    });
}

function piscines(data) {
    //display.innerHTML = "";

    for(i=0; i<data.records.length; i++) {
        //----------------- saison-----------------------/
            
        let saison = document.createElement("div");

        saison.textContent = "";
        saison.textContent = `saison de ouverture ${data.records[i].fields.saison}`;
        display.appendChild(saison);
        //----------------- telephone-----------------------/
        let telephone = document.createElement("div");

        telephone.textContent = "";
        telephone.textContent = `numéro de téléphone ${data.records[i].fields.telephone}`;
        display.appendChild(telephone);

        //----------------- nom_complet-----------------------/
        let nom_complet = document.createElement("div");

        nom_complet.textContent = "";
        nom_complet.textContent = `nom complexe ${data.records[i].fields.nom_complet}`;
        display.appendChild(nom_complet);
        
        //----------------- adresse-----------------------/
        let adresse = document.createElement("div");

        adresse.textContent = "";
        adresse.textContent = `adresse ${data.records[i].fields.adresse}`;
        display.appendChild(adresse);
        
    }
}


var btn = document.getElementById("btn");

btn.addEventListener("click", function (event) {
    event.preventDefault();
    requestApi(url);

});

btn.addEventListener('click', function (e){
    display.innerHTML = "";
});

