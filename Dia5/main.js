let pergunta = prompt("Deseja adicionar uma comida a sua lista de compras ?")
let lista = [{
    Frutas:"",
    Laticinios:"",
    Congelados:"",
    Doces:"",
}]

while(pergunta != "sim" && pergunta !="não"){
    alert("Digite sim ou não para adicionar um item")
    pergunta = prompt("Deseja adicionar uma comida a sua lista de compras ?")
    
while(pergunta == "sim"){
    
    let item = prompt("Qual ?")
    let categoria = prompt("Qual a categoria ? 1-Frutas | 2 -Laticinios | 3-Congelados | 4-Doces")
        if(categoria == 1){
            lista[0].Frutas = item
        }else if(categoria == 2){
            lista[0].Laticinios = item
        }else if(categoria == 3){
            lista[0].Congelados = item
        }else if(categoria == 4){
            lista[0].Doces = item
        }

    pergunta = prompt("Deseja adicionar uma comida a sua lista de compras ?")
}

}
if(pergunta == "não"){
    alert(`Você adicionou Frutas: ${lista[0].Frutas} Laticinios: ${lista[0].Laticinios} Congelados: ${lista[0].Congelados} Doces ${lista[0].Doces} a sua lista`)
}




