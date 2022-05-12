let nomes = ['Cebolinha', 'cascão', 'Mônica', 'Magali']
console.log("Array completo", nomes)
console.log(nomes[0])
console.log(nomes[1])
console.log(nomes[2])
console.log(nomes[3])
console.log("tamanho do array", nomes.length)

for (let i = 0; i < nomes.length; i++){
    console.log(nomes[i])
}

for (let i in nomes){
    console.log(nomes[i])
}

for (let nome of nomes){
    console.log(nome, nome.length)
}
