let nome = prompt("Digite seu nome")
let idade = prompt("Qual a sua idade?")
let linguagem = prompt("Qual linguagem você esta estudando ?")

let frase = document.querySelector("#frase")
let tecnologia = document.querySelector("#novaTecnologia")

frase.innerHTML = (`Ola ${nome} você tem ${idade} anos e já esta aprendendo ${linguagem}`)

let pergunta = prompt("Você gosta de estudar PHP ? 1 para SIM 2 para NÂO")

if (pergunta == 1){
    tecnologia.innerHTML = ("Muito bom! Continue estudando e você terá muito sucesso.")
}else if(pergunta == 2){  
    tecnologia.innerHTML = ("Ahh que pena... Já tentou aprender outras linguagens?")
}