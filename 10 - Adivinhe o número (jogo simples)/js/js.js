var numeroAleatorio = Math.floor(Math.random() * 100) + 1

var tentativa = 1

var palpite
var ultimoPalpite = ''
var certoErrado

var numeroTentativa = 11

document.getElementById('numeroTentativa').textContent = 'Seu número de tentativas é de ' + (numeroTentativa - tentativa)

function verificarPalpite() {
	palpite = document.getElementById('campoPalpite').value

	if (tentativa >= 1) {
		ultimoPalpite += palpite + ' '
		document.getElementById('ultimoPalpite').textContent = ultimoPalpite
	}

	if (tentativa == 10) {
		document.getElementById('campoPalpite').disabled = 'disabled'
		document.getElementById('enviaPalpite').disabled = 'disabled'
	}

	if (palpite == numeroAleatorio) {
		document.getElementById('certoErrado').textContent = 'Você acertou! Parabéns'
		document.getElementById('certoErrado').style.backgroundColor = 'green'
		document.getElementById('campoPalpite').disabled = 'disabled'
		document.getElementById('enviaPalpite').disabled = 'disabled'
	} else if (palpite != numeroAleatorio) {

		document.getElementById('certoErrado').textContent = 'Você errou! Tente novamente'
		document.getElementById('certoErrado').style.backgroundColor = 'red'

		if (palpite > numeroAleatorio) {
			document.getElementById('maiorMenor').textContent = 'Seu palpite é maior que o número aleatório'
		} else if (palpite < numeroAleatorio) {
			document.getElementById('maiorMenor').textContent = 'Seu palpite é menor que o número aleatório'
		}

	}

	tentativa = tentativa + 1

	document.getElementById('numeroTentativa').textContent = 'Seu número de tentativas é de ' + (numeroTentativa - tentativa) 
}
