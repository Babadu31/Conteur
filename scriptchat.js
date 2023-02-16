document.addEventListener("DOMContentLoaded", () => {
    const form = document.getElementById("chat-form");
    form.addEventListener("submit", sendMessage);
  });
  
  async function sendMessage(event) {
    event.preventDefault();
  
    const inputElement = document.getElementById("message-input");
    const message = inputElement.value.trim();
  
    if (message === "") {
      return;
    }
  
    const conversationElement = document.getElementById("conversation");
    const userMessageElement = createUserMessageElement(message);
    conversationElement.appendChild(userMessageElement);
  
    const response = await generateResponse(message);
  
    const botMessageElement = createBotMessageElement(response);
    conversationElement.appendChild(botMessageElement);
  
    inputElement.value = "";
    inputElement.focus();
  }
  
  async function generateResponse(message) {
    const apiKey = "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";
    const response = await fetch("https://api.openai.com/v1/engines/text-davinci-003/completions", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        prompt: `${message}\nBot:`,
        temperature: 0.7,
        max_tokens: 60,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      })
    });
  
    const data = await response.json();
    const text = data.choices[0].text.trim();
  
    return text.replace(/^Bot:/, "");
  }
  
  function createUserMessageElement(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("user-message");
    messageElement.textContent = message;
  
    return messageElement;
  }
  
  function createBotMessageElement(message) {
    const messageElement = document.createElement("div");
    messageElement.classList.add("bot-message");
    messageElement.textContent = `Bot: ${message}`;
  
    return messageElement;
  }
  