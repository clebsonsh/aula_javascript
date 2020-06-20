const nome = 'Clebson Moura'
let frase = 'Japão é o melhor time do mundo'
alert(`Bem vindo ${nome}`)
console.log(31 + 10)
console.log(frase.replace('Japão', 'Brasil').toUpperCase())

let lista = ['maçã', 'pera', 'laranja']

console.log(lista[1])
lista.push('uva')
console.log(lista)
lista.pop()
console.log(lista)
lista.shift()
console.log(lista)
lista.unshift('banana')
console.log(lista)
lista.reverse()
console.log(lista)
console.log(lista.toString())
console.log(lista.join(' | '))

console.log(lista.length)

let fruta = {
  nome: 'maçã',
  cor: 'vermelha'
}

console.log(`Uma ${fruta.nome} bem ${fruta.cor}`)

let frutas = [
  {
    nome: 'maçã',
    cor: 'vermelha'
  },
  {
    nome: 'uva',
    cor: 'roxa'
  }
]

console.log(frutas[1].nome)

let idade = prompt('Qual sua idade?')

if (idade >= 18) {
  alert('Maior de idade')
} else {
  alert('Menor de idade')
}

let count = 0

while (count <= 5) {
  console.log(count)
  count++
}

for (let index = 0; index <= 5; index++) {
  console.log(index)
}

const now = new Date()
console.log(now)
console.log(now.getDay())
console.log(now.getHours())
console.log(now.getMinutes())
console.log(now.getMonth() + 1)
