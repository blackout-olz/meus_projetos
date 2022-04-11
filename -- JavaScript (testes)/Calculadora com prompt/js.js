var numero1 = prompt('Digite o primeiro número: ')
var numero1conv = parseInt(numero1)

var numero2 = prompt('Digite o primeiro número: ')
var numero2conv = parseInt(numero2)

var adicao = numero1conv + numero2conv
var subtracao = numero1conv - numero2conv
var multiplicacao = numero1conv * numero2conv
var divisao = numero1conv / numero2conv

document.write('O resultado da adição dos números é de: ' + adicao + '<br>')
document.write('O resultado da subtração dos números é de: ' + subtracao + '<br>')
document.write('O resultado da multiplicação dos números é de: ' + multiplicacao + '<br>')
document.write('O resultado da divisão dos números é de: ' + divisao)