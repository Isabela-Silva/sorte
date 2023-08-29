// array com várias mensagens
const fortunes = [
  "O aprendizado é como o horizonte: não há limites.",
  "Não há que ser forte, há que ser flexível.",
  "Limitações são fronteiras criadas apenas pela nossa mente.",
  "O cão não ladra por valentia e sim por medo.",
  "Procure acender uma vela em vez de amaldiçoar a escuridão.",
  "A palavra é prata, o silêncio é ouro.",
  "Lembre-se de que grandes realizações e grandes amores envolvem grandes riscos.",
  "Um pouco de perfume sempre fica nas mãos de quem oferece flores.",
  "O homem só envelhece quando os lamentos substituem seus sonhos.",
  "A persistência realiza o impossível.",
  "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu.",
];

// variables
const message = document.getElementById("message");
const buttonMsg = document.getElementById("buttonMsg");
const imgBtn = document.getElementById("imgBtn");
const screen1 = document.getElementById("screen1");
const screen2 = document.getElementById("screen2");



// EVENTS
buttonMsg.addEventListener("click", handleResetClick);
imgBtn.addEventListener("click", handleTryClick);
document.addEventListener("keydown", handleTryEnter);


// FUNCTIONS 
function handleTryClick(event) {
  trocarTela()
  pickFortune()
}

function handleResetClick() {
  trocarTela()
}

function handleTryEnter(e) {
  if(e.key == "Enter" && screen2.classList.contains("hide")) {
    handleTryClick()
  } else if (e.key == "Enter" && screen1.classList.contains("hide")) {
    handleResetClick()
  }
}
function pickFortune() {
  const allfortunes = fortunes.length
  const randomIndex = Math.floor(Math.random() * allfortunes);
  screen2.querySelector("h2").innerText = `${fortunes[randomIndex]}`
}
function trocarTela() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
}

