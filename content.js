function addInfoToResults() {
    var results = document.querySelectorAll('.g .yuRUbf h3');
    results.forEach(function(result, index) {
        var titleText = result.textContent.trim();
        var titleLength = countLetters(titleText);

        var numDiv = document.createElement('span');
        numDiv.textContent = (index + 1).toString();
        numDiv.style.backgroundColor = '#8A77E8';
        numDiv.style.color = '#ED3B49';
        numDiv.style.fontSize = '20px';
        numDiv.style.marginRight = '10px';
        numDiv.style.display = 'inline-block';
        result.insertAdjacentElement('beforebegin', numDiv);

        var additionalInfoDiv = document.createElement('div');
        additionalInfoDiv.textContent = titleLength + ' lettres';
        additionalInfoDiv.style.color = '#555';
        additionalInfoDiv.style.fontSize = '14px';
        additionalInfoDiv.style.float = 'right';
        additionalInfoDiv.style.marginLeft = '10px';
        additionalInfoDiv.style.marginTop = '-3px';
        result.appendChild(additionalInfoDiv);

        addPublicationDate(result); // Appeler la fonction pour ajouter la date de publication
    });
}

function addPublicationDate(result) {
    // Utilisez result pour cibler le résultat actuel
    // Implémentez ici la logique pour extraire la date de publication
    // Créez un élément div similaire à additionalInfoDiv et ajoutez-y la date
    // Ajoutez le nouvel élément à côté du titre ou où vous le souhaitez
}

function countLetters(text) {
    return text.replace(/[^a-zA-Z]/g, '').length;
}

// Appeler la fonction lorsque la page est complètement chargée
window.addEventListener('load', addInfoToResults);
