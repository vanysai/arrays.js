// 1
let nomes = ['Bernardo', 'Cairé', 'Maria Eduarda', 'Enzo', 'Jaíza']
console.log(nomes)

//2

let salarios = ['R$ 90,00', 'R$50,00', 'R$80,00', 'R$95,00', 'R$70,00', 'R$20,00', 'R$29,00', 'R$30,00']
console.log(salarios)

//3 

let booleans = [8 > 2, 78 > 3, 45 < 5]
console.log(booleans)

//4 

let matrizes = [[5,9,8]]
let preço = ["10"]
for(let i in matrizes){
    matrizes [i][0] *= preço
    matrizes [i][1] *= preço
    matrizes [i][2] *= preço
}
console.log(matrizes)

//5

Q5pre = [10.0,29.9,32.6];
Q5 = [];
for(i of Q5pre){
    Q5.push(i)
    Desconto = i * (95/100)
    Q5.push(Desconto);
    console.log(Q5)
}

//6

let matriz = [[2, 4, 8],[6, 9, 2], [6, 8, 6]]
for(let i in matriz){
    console.log("|", matriz[i][0], matriz[i][1], matriz[i][2], "|")
}
console.log('MATRIZ DOBRADA')
for (let i in matriz){
  
    matriz[i][i] *= 2
    console.log("|", matriz[i][0], matriz[i][1], matriz[i][2], "|") 
}

//7

function random(max,min){
    n = Math.floor(Math.random()* (max - min) + min);
    return n;
}

q7 = []
for(i = 0; i < 2; i++){
    arr = []
    q7.push(arr);
    for(ii = 0; ii < 2; ii++){
        q7[i].push(random(9,0));
    }

}

det = (q7[0][0]* q7[1][1]) - (q7[0][1] * q7[1][0]);
console.log(q7, det);
