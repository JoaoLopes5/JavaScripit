let numeros = [1,2,13,4,35,26,7,82,90,10]

let maior = numeros[0]
let menor = numeros[0]


for (let num of numeros){
    if(num>maior) maior = num
    if(num<menor) menor = num
}

console.log('Maior número: ',maior,' Menor número: ',menor)