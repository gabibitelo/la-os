//laços 08/05
//exercicio-1) WHIlE
//*no nosso sistema, o usario será solicitado para enserir vários numeros
//*um após o outro.Quando ele digitar o numero "0"; devemos parar de solicitar
//*novos inputs e imprimir o console a soma de todos os numeros por eles indicados
//*EX:vamos supor que ele coloque:10,3,50,7,0. O resultado deve ser 70

//function somaNumeros() {
//    let valor = 100;
//    let soma = 0

//    while(valor !== 0) {
//        valor = Number(prompt("digite um numero: \n"))
//        soma += valor;
//    }
//    return soma;
//}
//console.log(somaNumeros());

//FOR
//const numeros = [14, 67, 89, 15, 23]

//for(let i = o;  i<10;  i++) {
//    const elemento = numeros[i]
//    console.log(i)
//}

//exercicio-2)
//*escreva uma função que receba um array com numeros e devolva qual o maior dentro
//*dele.EX:para o array[11, 15, 18, 14, 12, 13], a saida ddeve ser:O maior num
//*é 18

//const numeros = [23, 56, 73, 44];
//function maiorNum(numeros) {
//    let maior = 0;
//    for(let i = 0; i < numeros.length; i++){
//        if(numeros[i] > maior){
//            maior = numeros[i];
//        
//        }
//    }
//    return maior;
//}
//console.log(numeros)
//console.log(maiorNum(numeros))

//for...of...
//const numeros = [14, 67, 89, 15, 23]

//for(let numero of numeros){
//    console,log(numeros)
//}

//exercicio-3)
//*considere que voce tem um array com varias palavras. Nossa tarefa é criar
//*uma função para imprimilas em uma só mensagem colocando um espaço sobre elas
//*EX:para este array["oi", "sumido", "tudo", "bem?",], dar a mensagem
//*"oi sumido tudo bem? saudades".

//const palavras = ['oi', 'sumido', 'tudo', 'bem?', 'saudades'];
//function construirFrase(frase){
//    let frase1 = '';
//    for(let palavra of palavras) {
//        console.log(palavra)
//        frase1 = frase1 + ' ' + palavra
//    }
//    return frase1
//}
//console.log(construirFrase(palavras).trim())

//exercicio-40
let paises = ['brasil', 'argentina', 'russia' , 'lichtein'];
let contador = 1;
for(let pais of paises){
    console.log(contador++ + '- ' + pais);
    switch(pais){
        case 'brasil' :
            console.log(contador++ + '- ' + pais + '/BR');
            break;
            default:
                console.log('pais nao localizado')
                break;
                case 'argentina' :
                    console.log(contador++ + '- ' + pais + '/AR');
                    break;
                    case 'russia' :
                        console.log(contador++ + '- ' + pais + '/RS');
                        break;
                        case 'lichtein' :
                            console.log(contador++ + '- ' + pais + '/LI');
                            break;
    }
    
}
