let sorteio = Math.round(Math.random() *10)
let tentativas = 2
console.log(sorteio)
let chute = prompt("Chute um número de 0 a 10")

while(tentativas > 0){

if(chute == sorteio){
    alert("Parabéns você acertou")
    tentativas += - 4
}else{
    alert(`Você errou você tem mais ${tentativas} tentativas.`)
    chute = prompt("Chute um número de 0 a 10")
    tentativas--
        if (tentativas == 0){
        alert("Suas tentativas acabaram, recarregue a página para recomeçar")
    }
}

}
