document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("story-form");
  form.addEventListener("submit", generateStory);
});

function generateStory(event) {
  event.preventDefault();

  const mainElement = document.querySelector('main');
  mainElement.innerHTML = '<p>Création en cours...</p>';

  const theme = document.getElementById("theme-input").value;
  const characteristic = document.getElementById("characteristic-input").value;
  const adjective = document.getElementById("adjective-input").value;
  const apiKey = "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";

  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Imagine moi une histoire pour les enfants, sur lesquel le récrit s appuie fortement sur le sujet du ${theme} tout en s appuyant sur ${characteristic} et devra obligatoirement comporter des personnages ayant des caractéristiques ${adjective}, et cette histoire doit être très drôle. Limite cette histoire à 300 mots`,
      max_tokens: 3000,
      temperature: 0,
    })
  })
  .then(response => response.json())
  .then(data => {
    console.log(data);
    const storyOutput = data.choices[0].text;
    const outputElement = document.createElement("p");
    outputElement.innerText = storyOutput;
    const footer = document.querySelector("footer");
    footer.parentNode.insertBefore(outputElement, footer.nextSibling);

    const loadingMessage = document.querySelector('main p');
    const main = document.querySelector('main');
    main.innerHTML = '';
    main.appendChild(outputElement);
    loadingMessage.remove();
  })
  .catch(error => console.error(error));
}

function readText() {
  const mainText = document.querySelector("main").textContent;
  const speech = new SpeechSynthesisUtterance();
  speech.text = mainText;
  speechSynthesis.speak(speech);
}


/*   Ci-dessous une requête-histoire dans laquelle tu imagine pour moi une histoire pour enfant 
      Ci-dessous un exemple d'histoires pour enfants, tu trouveras le titre et histoire pour t'inspirer.
      
      
      requête-histoire: 

      
      Voici un exemple d'histoire: 

      Il était une fois un groupe d'amis intrépides nommé Billy, Lily et Willy. Ils vivaient dans une petite ville côtière et passaient leur temps à explorer les alentours, à la recherche d'aventures passionnantes.

      Un jour, alors qu'ils jouaient sur la plage, ils ont découvert une vieille carte au trésor qui semblait être tombée d'un navire pirate. La carte indiquait l'emplacement d'un trésor caché sur une île mystérieuse au large de la côte.
      
      Intrigués par cette découverte, les amis ont décidé de partir à la recherche de ce trésor légendaire. Ils ont convaincu le capitaine de leur petite barque de les emmener sur l'île, en échange de quelques pièces d'or qu'ils avaient économisées.
      
      Après plusieurs jours de navigation, ils ont enfin atteint l'île. Ils ont parcouru la jungle dense et les collines escarpées en suivant les indices de la carte. Au fur et à mesure de leur voyage, ils ont rencontré plusieurs obstacles, comme des rivières tumultueuses et des créatures sauvages.
      
      Mais les amis intrépides n'ont pas abandonné leur quête, car ils savaient que le trésor en valait la peine. Finalement, ils ont trouvé un ancien temple caché au sommet d'une montagne, où se trouvait le trésor légendaire.
      
      Ils ont triomphé de tous les pièges et les défis que le temple leur a présentés, et ont finalement atteint la chambre du trésor. Là, ils ont trouvé un coffre en or rempli de pièces d'or, de diamants et de pierres précieuses.
      
      Les amis intrépides ont partagé le trésor équitablement et sont retournés dans leur ville côtière avec des richesses et des histoires incroyables à raconter. Ils ont continué à explorer le monde, à la recherche de nouvelles aventures et de trésors cachés, mais leur plus grande richesse était leur amitié et leur esprit intrépide qui leur a permis de surmonter tous les défis sur leur chemin.

      Fin de l'histoire.
            //max_tokens: 4096 / 2,
      //temperature: 0.8,
      //n: 1,
      ----

      */