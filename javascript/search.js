document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("story-form");
    form.addEventListener("submit", searchStories);
  });
  
  function searchStories(event) {
    event.preventDefault();
  
    const keywords = document.getElementById("keywords-input").value;
    const apiKey = "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";
  
    fetch("https://api.openai.com/v1/search", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "text-davinci-002",
        query: `${keywords} story`,
        documents: ["story-1", "story-2", "story-3", "story-4", "story-5"]
      })
    })
    .then(response => response.json())
    .then(data => {
      const hits = data.data;
      const storyOutput = document.getElementById("story-output");
      storyOutput.innerHTML = "";
  
      if (hits.length > 0) {
        hits.forEach(hit => {
          const hitElement = document.createElement("div");
          hitElement.classList.add("hit");
          const hitTitle = document.createElement("h2");
          hitTitle.innerText = hit.metadata.title;
          const hitExcerpt = document.createElement("p");
          hitExcerpt.innerText = hit.document_excerpt;
          hitElement.appendChild(hitTitle);
          hitElement.appendChild(hitExcerpt);
          storyOutput.appendChild(hitElement);
        });
      } else {
        storyOutput.innerHTML = "<p>Aucune histoire trouvée avec ces mots-clés. Veuillez réessayer.</p>"
      }
    })
    .catch(error => console.error(error));
  }
  