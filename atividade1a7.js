/*1. Você deve criar um programa que solicite ao seu usuário dois números A e B.
2. Crie uma função que receba os dois valores fornecidos pelo usuário e faça uma soma com eles, e retorne o resultado;
3. Crie uma função que receba os dois valores fornecidos pelo usuário e faça uma subtração com eles, e retorne o resultado;
4. Crie uma função que receba os dois valores fornecidos pelo usuário e faça uma multiplicação com eles, e retorne o resultado;
5. Crie uma função que receba os dois valores fornecidos pelo usuário e faça uma divisão com eles, e retorne o resultado;
6. Faça com que seu usuário escolha qual função ele deseja fazer com os números que ele inseriu, e depois de realizar essa 
operação pergunte se ele deseja fazer outra ou encerrar a aplicação.
7. Crie um array para salvar o resultado das operações e crie também uma função para exibir o histórico dos resultados.*/


var numA = parseInt(prompt("insira o primeiro numero"))
var numB = parseInt(prompt("insira o segundo numero"))
var resultados = []
var index = 0
var continuar = "s"


function soma(num1, num2){
    var somar = num1 + num2
    return somar
}

function subtracao(num1, num2){
    var subtrair = num1 - num2 
    return subtrair 
}

function multiplicacao(num1, num2){
    var multiplicar = num1 * num2
    return multiplicar
}

function divisao(num1, num2){
    var dividir = num1 / num2
    return dividir
}


function ExibirHistorico (){
    console.log(resultados)
}


while(continuar == "s"){
    var operacao = prompt("insira a opração desejada; 1 = somar; 2 = subtrair; 3 = multiplicar; 4 = dividir")
    if(operacao == "1"){
        resultados[index] = soma(numA, numB)
        index++
        console.log (soma(numA, numB))
    }
    else if(operacao == "2") {
        resultados[index] = subtracao(numA, numB)
        index++
        console.log (subtracao(numA, numB))
    }
    else if(operacao == "3") {
        resultados[index] = multiplicacao(numA, numB)
        index++
        console.log (multiplicacao(numA, numB))
    }
    else if(operacao == "4") {
        resultados[index] = divisao(numA, numB)
        index++
        console.log (divisao(numA, numB))
    }
    continuar = prompt("deseja continuar fazendo operações?")
}
ExibirHistorico()