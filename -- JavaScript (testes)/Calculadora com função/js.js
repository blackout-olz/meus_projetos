var num1 = prompt('Informe um número')

var operacao = prompt('Informe a operação desejada: soma, subtração, multiplicação ou divisão')

var num2 = prompt('Informe outro número')

function realizarCalculo(num1, num2, operacao) {
	if (operacao == 'soma') {
		var resultado = parseFloat(num1) + parseFloat(num2)
	} else if (operacao == 'subtração') {
		var resultado = parseFloat(num1) - parseFloat(num2)
	} else if (operacao == 'multiplicação') {
		var resultado = parseFloat(num1) * parseFloat(num2)
	} else if (operacao == 'divisão') {
		var resultado = parseFloat(num1) / parseFloat(num2)
	} else {
		var resultado = 'Recarregue a página'
	}
	return resultado
}

var resultado = realizarCalculo(num1, num2, operacao)
document.write(resultado)