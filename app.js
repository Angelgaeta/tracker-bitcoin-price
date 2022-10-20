const url = "https://blockchain.info/ticker";

function recupererPrix() {
  // Créer une requete
  let requete = new XMLHttpRequest(); // Créer un objet
  requete.open("GET", url); // Premier paramètre pour utiliser GET / POST, deuxième paramètre : url
  requete.responseType = "json"; // Nous attendons du JSON
  requete.send(); // Nous envoyons notre requête

  // Dès qu'on recoit une réponse, cette fonction est executée
  requete.onload = function () {
    if (requete.readyState === XMLHttpRequest.DONE) {
      // Vérifier que la requete est bien terminé
      if (requete.status === 200) {
        // Vérifier que la requete s'est bien passé
        let reponse = requete.response; // On stock la réponse
        //console.log(reponse);
        let prixEnEuros = reponse.EUR.last;
        //console.log(prixEnEuros);
        document.querySelector("#price_label").textContent = prixEnEuros;
      } else {
        alert("Un problème est intervenu, merci de revenir plus tard.");
      }
    }
  }
  console.log('Prix actualisé');
}

setInterval(recupererPrix, 1000); // La fonction pour calculer toute les 1sec englobe tout