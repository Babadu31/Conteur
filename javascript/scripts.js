document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("story-form");
  form.addEventListener("submit", generateStory);
});

function generateStory(event) {
  event.preventDefault();

  const mainElement = document.querySelector('main');
  const loadingMessage = document.getElementById('loading-message');
  const outputElement = document.createElement("p");

  mainElement.insertBefore(outputElement, loadingMessage);
  loadingMessage.style.display = "block";

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
      prompt: `Tu es un écrivain expert en écriture d'histoire pour enfants. Imagine moi une histoire pour les enfants, s'appuie fortement sur le sujet du ${theme} tout en s'appuyant sur ${characteristic} et devra obligatoirement comporter des personnages ayant des caractéristiques ${adjective} Et cette histoire doit être très drôle.`,
      max_tokens: 3900,
      temperature: 0,
    })
  })
  .then(response => response.json())
  .then(data => {
    const storyOutput = data.choices[0].text;
    outputElement.innerText = storyOutput;
    loadingMessage.style.display = "none";
  })
  .catch(error => console.error(error));
}

function readText() {
  const mainText = document.querySelector("main").textContent;
  const speech = new SpeechSynthesisUtterance();
  speech.text = mainText;
  speechSynthesis.speak(speech);
}
