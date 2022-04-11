var selecionador = prompt('Digite: 1 - Adição / 2 - Subtração / 3 - Divisão / 4 - Multiplicação')

if (selecionador == 1) {
	var num1 = prompt('Digite o primeiro número:')
	var num2 = prompt('Digite o segundo número:')

	var resultado = parseFloat(num1) + parseFloat(num2)

	document.write('Seu resultado é: ' + resultado)
} else if (selecionador == 2) {
	var num1 = prompt('Digite o primeiro número:')
	var num2 = prompt('Digite o segundo número:')

	var resultado = parseFloat(num1) - parseFloat(num2)

	document.write('Seu resultado é: ' + resultado)
} else if (selecionador == 3) {
	var num1 = prompt('Digite o primeiro número:')
	var num2 = prompt('Digite o segundo número:')

	var resultado = parseFloat(num1) / parseFloat(num2)

	document.write('Seu resultado é: ' + resultado)
} else if (selecionador == 4) {
	var num1 = prompt('Digite o primeiro número:')
	var num2 = prompt('Digite o segundo número:')

	var resultado = parseFloat(num1) * parseFloat(num2)

	document.write('Seu resultado é: ' + resultado)
} else {
	document.write('Recarregue a página')
}