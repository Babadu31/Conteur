# Story Gerator
# 1-Introduction

. Define the purpose of your project
The goal of the project was to allow to have precise stories adapted to the desires of the child. The creation of history is limited by the imagination and the time of the individual.

.Share your team members, roles and timeline
I am the only member working for this project.

For the timeline:
January 23 - February 4: time to find the project, its mvp. prioritize and time the project
February 6 - February 10: progress on the project with mid-term analysis
February 13 - February 17: end of the project
February 20 - February 27: construction project presentation with home page and explanatory blog

.Describe for whom your project was created
This project was created for an audience of children. the specific target are children who want a story before bedtime

.Explain what your personal goal was
My personal goal for this project was to learn how to handle APIs well, learn how to build a non-static site.

# 2-Tell a story about yourself that explains why you chose to work on this project

I have always enjoyed creating stories for as long as I can remember. This desire was confirmed during my years of work in the field of animation. During this period, I realized that many people could not create stories due to a lack of imagination or simply lack of time. During my work with children I also realized that children were more interested in stories where they could choose the hero, the villain. Either way, the details of the story. A few years ago I also began to write. Since the appearance of chat gpt I have been able to improve my writing because chat gpt has allowed me to make an outline for the stories, a narrative thread and ideas for the stories. As I saw that chat gpt has the limited ability for now but still existing to be able to create custom stories. This observation gave me an idea. Make a support for parents and children so that everyone can dream with the stories they want.

#3- Summarize what you have accomplished with your project

present file:

javascript          styles        html
script.js           styles.css    counter.html

the user arrives on the html site, he enters these preferences for the story in the filters available on the html page. Once the selection is made, the user presses the generate story button. By pressing the button the javascript comes into action, it will take the filters and add them to the prompt that I the javascript will send to chat gpt
ex :
```
fetch("https://api.openai.com/v1/completions", {
     method: "POST",
     headers: {
       "Content-Type": "application/json",
       "Authorization": `Bearer ${apiKey}`
     },
     body: JSON.stringify({
       model: "text-davinci-003",
       prompt: `You are a writer, expert in writing children's stories. Imagine me a story for children, relies heavily on the subject of ${theme} while relying on ${characteristic} and must include characters with ${adjective} characteristics And this story must be very funny .`,
       max_tokens: 3900,
       temperature: 0,
     })
```
If the api key is valid and the generated text does not exceed 4000 tokens, the generated text will be returned and with the javascript the result will be displayed on the html page.

Summarize the technologies you used and why you (or your team) made those choices

To achieve this result I did not need to create a back-end, I would have needed it if I had involved user management and the storage of generated stories. For the front-end used I only needed html, css for the site and javascript to manage api requests. without any additional frame. I chose not to use other frameworks because I wanted this project to make me revise and improve my understanding of how a non-static website works and train me to write and understand html, css and js languages

Provide an overview of 1-3 features you have completed.
1: story generation
create a story with the chosen filters

2: voice reading
When the button is pressed it will read aloud the generated story
 
# 4-Write down your most difficult technical challenge in depth
The most difficult technical challenge I encountered while making this project was to properly format the prompt I sent to chat gpt so that the result matched the purpose. For example, I had to add the phrase “you are a writer” to make the result look better. At first I had to fix api key issues because the request fails as chat gpt did not recognize or see the chat gpt api key.In addition to these two problems already mentioned, I had to learn to manage the maximum number of tokens by testing and modifying the form of the request so that the result does not exceed the maximum possible length. To achieve this result I had to study the gtp chat api, understand how it works, the different possibilities with the different versions.

# 5-Share what you learned
My new technical skills are mainly revisions and application of what I learned during my training. As the code remains simple, I was able to understand the basics well.
For what I could do differently I would first think of going to the simplest and most essential before thinking of something else the way of communicating with the API and the construction of the associated javascript code and their good communication.
Personally, I learned to create a small tool that can be practical and therefore quite rewarding.
For the questioning I wanted to do the whole environment of the home page before really checking if the idea of ​​the generation of history with in addition filters chosen by the user was possible. I had already done some tests and had seen other people get there but it's dark when the idea just looks cool so be careful for the next time on the viability. I tried to start on a back-end when it was not mandatory but I think that the back-end is necessary to have the idea of ​​selling or distributing this project massively.
There is really something to dig into so I have to look into it but very risky for distribution as it is for children.
