let pergunta = prompt("Deseja seguir para a área de Front-End ou Back-end ?")

if(pergunta.includes("Front-end")){
    let perguntaFront= prompt("Em Front-end você gostaria de aprender React ou Vue ?")

} else if (pergunta.includes("Back-end")){
    let perguntaBack= prompt("Em Back-end escolheria C# ou Java ?")
} else{
    alert("Você não inseriu uma área válida!")
}

let especializacao = prompt("Digite 1 para seguir se especializando na área escolhida ou 2 para seguir se desenvolvendo para se tornar Fullstack")

if(especializacao == 1){
    alert(`Continue se especializando para se desenvolver como ${pergunta}`)
} else if (especializacao == 2){
    alert(`Chegou a hora de aprender novas linguagens para se desenvolver como ${pergunta}`)
}

let novatecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.")
while (novatecnologia === "ok"){
    let perguntaTecnologia = prompt("qual ?")
    alert(`${perguntaTecnologia} é excelente`)
    novatecnologia = prompt("Tem mais alguma tecnologia que você gostaria de aprender? Digite 'ok' em caso positivo.")
}
  
