// array com várias mensagens
const fortunes = [
  "Se um dia for traído e quiser se atirar pela janela, lembre-se: você ganhou um par de cornos e não um par de asas!",
  "Estou começando a achar que a minha metade da laranja já virou suco.",
  "No teatro da vida o papel de trouxa é o que melhor me serve.",
  "Não deixe que nada te desanime. Lembre-se que até um pé na bunda te empurra pra frente.",
  "Eu não sou fofoqueiro. Eu sou historiador da vida alheia.",
  "Pobre é como pneu, quanto mais trabalha, mais liso fica!",
  "Quem cedo madruga passa o dia com sono.",
  "Dizem que tudo que vai volta. Acho que meu dinheiro se perdeu pelo caminho.",
  "Não adianta passar a vida procurando sua metade da laranja se você é um limão azedo.",
  "Larguei a cerveja, só não lembro onde!",
  "Evite a ressaca, mantenha-se bêbado.",
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

