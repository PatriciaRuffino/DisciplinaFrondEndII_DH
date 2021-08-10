let notas = [1,6,7,9]

let soma = 0
/* for(let i=0; i<notas.length; i++){
    console.log(`${sum} + ${notas[i]} =` )
    sum += notas[i]
    console.log(sum)
} */

console.log ("Fazendo cáculo da média final do (a) aluno (a):")
//let media = sum/notas.length



notas.forEach(nota=>{
    console.log(`${soma} + ${nota} = `)
    soma +=nota
    console.log(soma)
})
let media = soma/notas.length
console.log(`Média final do aluno é de ${media}`)
if (media >= 7){
    console.log("Parabéns, você foi aprovado.")
} else console.log("infelizmente, você foi reprovado(a) ")