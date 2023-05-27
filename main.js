const screen1 = document.querySelector(".screen1")
const screen2 = document.querySelector(".screen2")
const btnTry = document.querySelector("#btnTry")
const btnReset = document.querySelector("#btnReset")

let randomNumber = Math.round(Math.random() * 10)
const b1 = {
    id: 1,
    sorte: "Se alguém está tão cansado que não possa te dar um sorriso, deixa-lhe o teu."
} 
const b2 = {
    id: 2,
    sorte: "Defeitos e virtudes são apenas dois lados da mesma moeda."
}
const b3 = {
    id: 3,
    sorte: "A juventude não é uma época da vida, é um estado de espírito."
}
const b4 = {
    id: 4,
    sorte: "Podemos escolher o que semear, mas somos obrigados a colher o que plantamos."
}
const b5 = {
    id: 5,
    sorte: "Lamentar aquilo que não temos é desperdiçar aquilo que já possuímos."
}
const b6 = {
    id: 6,
    sorte: "A paciência na adversidade é sinal de um coração sensível"
}
const b7 = {
    id: 7,
    sorte: "Uma bela flor é incompleta sem as suas folhas."
}
const b8 = {
    id: 8,
    sorte: "Quem olha para fora sonha; quem olha para dentro acorda."
}
const b9 = {
    id: 9,
    sorte: "Pare de procurar eternamente; a felicidade está mesmo aqui ao seu lado."
}
const b10 = {
    id: 10,
    sorte: "A maior barreira para o sucesso é o medo do fracasso."
}
const bList = [b1,b2,b3,b4,b5,b6,b7,b8,b9,b10]
console.log(bList)

//Eventos
btnTry.addEventListener('click', handleTryClick)
btnReset.addEventListener('click', handleResetClick)

function handleTryClick(event) {
    event.preventDefault()
    for (n in bList) {
        if(Number(randomNumber) == bList[n].id) {
            screen2.querySelector("h2").innerText = `${bList[n].sorte}`
        }
        
    }
    toggleScreen()   
}

function handleResetClick() {
    randomNumber = Math.round(Math.random() * 10)
    toggleScreen()
}


function toggleScreen() {
    screen1.classList.toggle("hide")
    screen2.classList.toggle("hide")
}