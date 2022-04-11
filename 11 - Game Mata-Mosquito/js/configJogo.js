//dimensão do palco de jogo

var height = window.innerHeight
var width = window.innerWidth
var lives = 1
var tempo = 60

var criaMosquitoTempo = 2000

var dificuldade = window.location.search
dificuldade = dificuldade.replace('?', '')

if (dificuldade === 'normal' ) {
	criaMosquitoTempo = 1500
} else if (dificuldade === 'dificil') {
	criaMosquitoTempo = 1000
}

function adjustXY() {
	height = window.innerHeight
	width = window.innerWidth
}

var cronometro = setInterval(function(){
	tempo-=1
	if (tempo < 0) {
		clearInterval(cronometro)
		clearInterval(criaMoscas)
		window.location.href = 'vitoria.html'
	}
	document.getElementById('cronometro').innerHTML = tempo
},1000)

//posição randomica da mosca
function randomPosition() {

	if (document.getElementById('mosca')) {
		document.getElementById('mosca').remove()

		if (lives > 3) {
			window.location.href = 'fim_de_jogo.html'
		} else {
			document.getElementById('v' + lives).src = 'img/imagens/coracao_vazio.png'

			lives++
		} 		
	}


	var positionX = Math.floor(Math.random() * width) - 90
	var positionY = Math.floor(Math.random() * height) - 90

	if (positionX < 0) {
		positionX = 0
	}
	if (positionY < 0) {
		positionY = 0
	}



	//criar elemento html
	var mosca = document.createElement('img')
	mosca.src = 'img/imagens/mosca.png'
	mosca.className = randomSize() + ' ' + randomSide()
	mosca.style.left = positionX + 'px'
	mosca.style.top = positionY + 'px'
	mosca.style.position = 'absolute'
	mosca.id = 'mosca'
	mosca.onclick = function() {this.remove()}

	document.body.appendChild(mosca)

}

//tamanho aleatorio para mosca
function randomSize() {
	var classe = Math.floor(Math.random() * 3) + 1
	
	switch(classe) {
		case 1:
			return 'mosca1'

		case 2:
			return 'mosca2'

		case 3:
			return 'mosca3'
	}
}

//muda os lados da mosca
function randomSide() {
	var classe = Math.floor(Math.random() * 2) + 1

	switch(classe) {
		case 1:
			return 'ladoA'

		case 2:
			return 'ladoB'
	}
}

var criaMoscas = setInterval(function() {randomPosition()}, criaMosquitoTempo)