function somar() {
	var num1 = parseFloat(document.getElementById('num1').value)
	var num2 = parseFloat(document.getElementById('num2').value)

	var resultado = num1 + num2

	document.getElementById('resultado').value = resultado
}

function subtrair() {
	var num1 = parseFloat(document.getElementById('num1').value)
	var num2 = parseFloat(document.getElementById('num2').value)

	var resultado = num1 - num2

	document.getElementById('resultado').value = resultado
}

function multiplicar() {
	var num1 = parseFloat(document.getElementById('num1').value)
	var num2 = parseFloat(document.getElementById('num2').value)

	var resultado = num1 * num2

	document.getElementById('resultado').value = resultado
}

function dividir() {
	var num1 = parseFloat(document.getElementById('num1').value)
	var num2 = parseFloat(document.getElementById('num2').value)

	var resultado = num1 / num2

	document.getElementById('resultado').value = resultado
}