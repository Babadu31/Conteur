document.addEventListener("DOMContentLoaded", () => {
  // Récupère le formulaire pour générer des histoires
  const form = document.getElementById("story-form");
  // Ajoute un écouteur d'événement pour le formulaire
  form.addEventListener("submit", generateStory);
});

// Fonction pour générer une histoire
function generateStory(event) {
  // Empêche la soumission par défaut du formulaire
  event.preventDefault();

  // Récupère les éléments de la page HTML
  const mainElement = document.querySelector('main');
  const loadingMessage = document.getElementById('loading-message');
  const outputElement = document.createElement("p");

  // Insère un élément de paragraphe vide pour afficher l'histoire
  mainElement.insertBefore(outputElement, loadingMessage);
  // Affiche le message de chargement
  loadingMessage.style.display = "block";

  // Récupère les entrées de l'utilisateur dans le formulaire
  const theme = document.getElementById("theme-input").value;
  const characteristic = document.getElementById("characteristic-input").value;
  const adjective = document.getElementById("adjective-input").value;
  const apiKey = "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";
  // Appelle l'API OpenAI pour générer une histoire
  fetch("https://api.openai.com/v1/completions", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${apiKey}`
    },
    body: JSON.stringify({
      model: "text-davinci-003",
      prompt: `Tu es un écrivain expert en écriture d'histoire pour enfants. Imagine moi une histoire pour les enfants, s'appuie fortement sur le sujet du ${theme} tout en s'appuyant sur ${characteristic} et devra obligatoirement comporter des personnages ayant des caractéristiques ${adjective} Et cette histoire doit être très drôle.`,
      max_tokens: 3900,
      temperature: 0,
    })
  })
  .then(response => response.json())
  .then(data => {
    // Affiche l'histoire générée dans le paragraphe vide
    const storyOutput = data.choices[0].text;
    outputElement.innerText = storyOutput;
    // Cache le message de chargement
    loadingMessage.style.display = "none";
  })
  .catch(error => console.error(error));
}

// Fonction pour lire l'histoire à voix haute
function readText() {
  // Récupère le contenu du paragraphe principal
  const mainText = document.querySelector("main").textContent;
  // Initialise une instance de la synthèse vocale
  const speech = new SpeechSynthesisUtterance();
  // Définit le texte à lire
  speech.text = mainText;
  // Lance la synthèse vocale
  speechSynthesis.speak(speech);
}
