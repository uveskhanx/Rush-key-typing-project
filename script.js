const keyContainer = document.getElementById("keyContainer")
const allKeys = document.getElementsByClassName("keys")
const mainTop = document.getElementById("firstPage")
const inputText = document.getElementById("inputText")

window.onbeforeunload = function () {
  alert("Are you sure you want to leave? Your progress will be lost.")
  return "Are you sure you want to leave? Your progress will be lost.";
};
document.addEventListener("keydown", function (e) {
  if (e.key === "F5" || (e.ctrlKey && e.key === "r")) {
    e.preventDefault();
    alert("Are you sure you want to leave? Your progress will be lost.");
  }
});


let startTime;
let isStarted = false;
window.addEventListener('DOMContentLoaded', function (e) {
  inputText.focus()
  const windows = document.getElementById("windows")
  const mac = document.getElementById("mac")

  const platform = navigator.platform.toLowerCase()
  const userAgent = navigator.userAgent.toLowerCase()


  if (platform.includes('win') || userAgent.includes('windows')) {

    windows.style.display = "block"
    mac.style.display = "none"
  }

  else if (platform.includes('mac') || userAgent.includes('mac')) {
    windows.style.display = "none"
    mac.style.display = "block"
  }

})



const easyParagraphs = [
  `I enjoy eating healthy food like fruits and vegetables.
  Apples, bananas, and carrots are my favorites.
  They give me energy to play and study well.`,
  `I have a small dog that follows me everywhere.
He loves to play with a ball and runs around the house.
Every evening, we go for a walk in the park together.`,
  `I enjoy eating healthy food like fruits and vegetables.
Apples, bananas, and carrots are my favorites.
They give me energy to play and study well.`,
  `I like to draw pictures of animals, flowers, and trees.
Using colors makes my drawings bright and lively.
It is my favorite hobby after finishing homework.`,
  `I enjoy spending time with my family on weekends.
We play games, watch movies, and talk about our week.
Being together makes me feel loved and happy.`,
  `In the evening, the sky changes colors as the sun sets.
The orange and pink clouds look beautiful and peaceful.
Sometimes I sit and watch them while thinking about my day.`
]

const hardParagraphs = [
  `The forest was dense and filled with tall, ancient trees whose leaves rustled softly in the wind.
Birds of various colors and sizes flitted from branch to branch, creating a symphony of natural sounds that was both soothing and lively.`,
  `Science has made remarkable progress in the last century, allowing humans to explore outer space and understand the mysteries of the universe.
From launching satellites to studying distant planets, knowledge continues to expand beyond what was once imaginable.`,
  `History teaches us valuable lessons about the triumphs and mistakes of past civilizations.
By studying the rise and fall of empires, we can better understand human behavior and avoid repeating the same errors.`,
  `Art is a reflection of human emotion, creativity, and culture.
Paintings, music, and literature capture the essence of different societies and express feelings that words alone cannot convey.`,
  `Traveling to new places broadens the mind and exposes us to diverse cultures and traditions.
Meeting people with different perspectives helps develop empathy, understanding, and a sense of global community.`,
  `The human brain is incredibly complex, capable of learning, reasoning, and imagining countless possibilities.
Scientists continue to explore its mysteries, seeking to understand consciousness, memory, and the secrets of cognition.`
]

const intermediateParagraphs = [
  `Libraries are treasure troves of knowledge, filled with countless books that span centuries of human thought, imagination, and discovery.
Among the neatly arranged shelves, one can lose themselves in historical accounts, scientific theories, or imaginative tales that stretch the limits of reality.`,
  `The process of learning a new language requires patience, practice, and determination, as it involves mastering unfamiliar sounds, structures, and idioms.
Each conversation, every word memorized, and all mistakes corrected gradually bring the learner closer to fluency and confidence.`,
  `Mountains stand majestically against the horizon, their peaks often shrouded in mist and snow, challenging adventurers to explore their heights.
The winding trails, dotted with rocks and streams, demand resilience and careful navigation from those daring enough to undertake the journey.`,
  `Technology, while immensely beneficial, also presents challenges in privacy, security, and mental health, requiring careful consideration and responsible use.
The rapid pace of innovation often leaves society struggling to balance convenience with ethical implications and unintended consequences.`,
  `The night sky, adorned with countless stars, evokes a sense of wonder and contemplation about the vastness of the universe.
Astronomers, using powerful telescopes, study celestial bodies, uncovering mysteries that challenge human understanding and inspire imagination.`,
  `Urban life is characterized by constant movement, diverse cultures, and endless opportunities, yet it often comes with stress, noise, and relentless schedules.
Balancing work, social interactions, and personal time requires organization, adaptability, and a mindful approach to avoid burnout.`,
  `Writing effectively demands clarity, coherence, and creativity, as each sentence must convey the intended meaning while engaging the reader.
Through careful selection of words, sentence structure, and style, a writer can transform ideas into compelling narratives that resonate deeply.`,
  `Despite the cacophony of urban life—honking vehicles, hurried pedestrians, and incessant machinery—an observant individual discerns subtle chiaroscuro created by flickering streetlights and intermittent neon signage; simultaneously`
]

// ------- EASY -------
function easyParagraphDisplay() {
  const randomParagraph = Math.floor(Math.random() * easyParagraphs.length)
  inputText.style.display = "block"
  mainTop.innerHTML = `${easyParagraphs[randomParagraph]}`
  mainTop.style.background = "#b697acff"
  mainTop.style.color = "black"
  mainTop.style.padding="5px"
  mainTop.style.height = "23vh"
  mainTop.style.fontSize = "2rem"
  mainTop.style.margin = "0"
  keyContainer.style.display = "block"
  document.body.style.background = "#111a22"

const targetText = mainTop.innerText; 
inputText.addEventListener('input', ()=> {
  let result = ""
  const typed = inputText.value

for(let i=0; i<targetText.length; i++){
 if(i<typed.length){
  if(typed[i] == targetText[i]){
    result += `<span style = "color : green">${targetText[i]}</span>`
  }else{
    result += `<span style = "color : red">${targetText[i]}</span>`
  }
 }else{
  result += `<span>${targetText[i]}</span>`
 }
 mainTop.innerHTML = result
}
})
}
 

// ------- HARD -------
function hardParagraphDisplay() {
  const randomParagraph = Math.floor(Math.random() * hardParagraphs.length)
  inputText.style.display = "block"
  mainTop.innerHTML = `${hardParagraphs[randomParagraph]}`
  mainTop.style.background = "#b697acff"
  mainTop.style.color = "black"
  mainTop.style.padding="5px"
  mainTop.style.height = "23vh"
  mainTop.style.fontSize = "2rem"
  mainTop.style.margin = "0"
  keyContainer.style.display = "block"
  document.body.style.background = "#111a22"

const targetText = mainTop.innerText; 
inputText.addEventListener('input', ()=> {
  let result = ""
  const typed = inputText.value

for(let i=0; i<targetText.length; i++){
 if(i<typed.length){
  if(typed[i] == targetText[i]){
    result += `<span style = "color : green">${targetText[i]}</span>`
  }else{
    result += `<span style = "color : red">${targetText[i]}</span>`
  }
 }else{
  result += `<span>${targetText[i]}</span>`
 }
 mainTop.innerHTML = result
}
})
}
 

// ------- INTERMEDIATE -------
function intermediateParagraphDisplay() {
  const randomParagraph = Math.floor(Math.random() * intermediateParagraphs.length)
  inputText.style.display = "block"
  mainTop.innerHTML = `${intermediateParagraphs[randomParagraph]}`
  mainTop.style.background = "#b697acff"
  mainTop.style.color = "black"
  mainTop.style.padding="5px"
  mainTop.style.height = "23vh"
  mainTop.style.fontSize = "2rem"
  mainTop.style.margin = "0"
  keyContainer.style.display = "block"
  document.body.style.background = "#111a22"

const targetText = mainTop.innerText; 
inputText.addEventListener('input', ()=> {
  let result = ""
  const typed = inputText.value

for(let i=0; i<targetText.length; i++){
 if(i<typed.length){
  if(typed[i] == targetText[i]){
    result += `<span style = "color : green">${targetText[i]}</span>`
  }else{
    result += `<span style = "color : red">${targetText[i]}</span>`
  }
 }else{
  result += `<span>${targetText[i]}</span>`
 }
 mainTop.innerHTML = result
}
})
}
 
document.addEventListener('keydown',function(e){ 

  // Clone a new audio object each time
  const sound = new Audio("keypress.mp3");
  sound.volume = 1.0; // optional: adjust loudness
  sound.play().catch(err => {
    console.log("Audio play blocked until user interacts", err);
  });

const key = e.code.toLowerCase();  
keyPressed = document.getElementById(key);


  if(keyPressed){
        keyPressed.style.background= "green"
        keyPressed.style.boxShadow = "0 0 10px green"
    }
})

// ------- KEYUP RESET -------
document.addEventListener('keyup', function (e) {
  const key = e.code.toLowerCase()
  const keyPressed = document.getElementById(key)
  if (keyPressed) {
    keyPressed.style.background = ""
    keyPressed.style.boxShadow = "none"
    keyPressed.style.transform = "translateY(0px)"
  }
})

let mainTopRefine = mainTop.innerText.trim().split("")
const targetCheck = mainTopRefine.length - 7

inputText.addEventListener('input', ()=> {
if (inputText.value.length > targetCheck && inputText.value.slice(-1) == mainTop.innerText.slice(-1) ){
  const splitting = inputText.value.trim().split(" ")
  const words = splitting.length
  if(!startTime){
    startTime = new Date()
    isStarted = true
  }
   if(inputText.value.length == mainTop.innerText.length){
    let endTime = new Date()
    const timeTaken = (endTime-startTime) / 60000; // FIXED: minutes
    const wpm = words / timeTaken 

    let correctChars = 0
    for (let i = 0; i < inputText.value.length; i++) {
      if(inputText.value[i] === mainTop.innerText[i]){
        correctChars++
      }
    }

    keyContainer.style.display = "none"
    mainTop.style.display = "none"
    inputText.style.display = "none"

    const resultDiv = document.createElement("div")
    resultDiv.setAttribute('id', "resultDiv")

    const resultWpm = document.createElement("div")
    resultWpm.setAttribute('id','resultWpm')
    const resultAccuracy = document.createElement("div")
    resultAccuracy.setAttribute('id','resultAccuracy')
    const resultTimetaken = document.createElement("div")
    resultTimetaken.setAttribute("id",'resultTimetaken')
    const resultReview = document.createElement("div")
    resultReview.setAttribute("id","resultReview")

    const retestButton = document.createElement("button")
    retestButton.setAttribute('id', 'restestButton')
    retestButton.innerText = "Restart Test"
    retestButton.style.background = "linear-gradient(to right, green , blue)"
    retestButton.style.color = "white"
    retestButton.style.padding = "15px"
    retestButton.style.width = "15vw"
    retestButton.style.border = "1px"
    retestButton.style.borderRadius = "21px"
    retestButton.style.marginTop = "80vh"
    retestButton.style.marginLeft = "44vw"
    retestButton.style.cursor= "pointer"
    retestButton.addEventListener("click", () => {
      
window.onbeforeunload = function () {}
    location.reload(); // reloads the current page
  });
    

    resultDiv.append(resultWpm,resultAccuracy,resultTimetaken,resultReview)
    document.body.appendChild(resultDiv)
    document.body.appendChild(retestButton)

    document.body.style.background= "radial-gradient(circle at center, #1e3c72, #2a5298)"
    resultWpm.innerHTML = `WPM =  ${wpm.toFixed(2)}`
    keyContainer.setAttribute('disabled', '')
    const accuracy = (correctChars / inputText.value.length) * 100;
    resultAccuracy.innerHTML = `Accuracy = ${accuracy.toFixed(2)}%`
    resultTimetaken.innerHTML = `Time taken = ${Math.ceil(timeTaken * 60)}s` // seconds

    if (wpm <= 25) {
      resultReview.innerHTML = "Review : Slow 🐢 – Keep practicing!";
      resultReview.style.color= "red"
    } else if (wpm <= 40) {
      resultReview.innerHTML = "Review : Good 🙂 – Decent typing speed.";
      resultReview.style.color = "black"
    } else if (wpm <= 60) {
      resultReview.innerHTML = "Review : Very Good 💪 – You type faster than most people!";
      resultReview.style.color = "#39ff14" // neon green
    }else if(wpm == Infinity){
      resultReview.innerHTML = "Review: I think you may have cheated."
      resultReview.style.color = "#FFA500"
    }else {
      resultReview.innerHTML = "Review : Excellent 🚀 – Professional level!";
      resultReview.style.color = "green"
    }

    
   }
}
})
