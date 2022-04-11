var nome = prompt('Digite seu nome')
var altura = prompt('Informe sua altura em centímetros')
var peso = prompt('Informe seu peso')

altura = parseFloat(altura)
peso = parseFloat(peso)

altura /= 100

var M = peso / (altura * altura)

if (M < 16) {
	var classificacao = 'Baixo peso muito grave'
} else if (M >= 16 && M < 17) {
	var classificacao = 'Baixo peso grave'
} else if (M >= 17 && M < 18.5) {
	var classificacao = 'Baixo peso'
} else if (M >= 18.5 && M < 25) {
	var classificacao = 'Peso normal'
} else if (M >= 25 && M < 30) {
	var classificacao = 'Sobrepeso'
} else if (M >= 30 && M < 35) {
	var classificacao = 'Obesidade grau 1'
} else if (M >= 35 && M < 40) {
	var classificacao = 'Obesidade grau 2'
} else if (M >= 40) {
	var classificacao = 'Obesidade grau 3'
}

document.write(nome + ', você possui o índice de massa corporal igual a ' + M + ', sendo classificado como: ' + classificacao)
