for (var i = 1; i<=9; i++) {
	document.getElementById('d' + i).addEventListener('click', jogo)
}

var turno = 1
var vencedor = ''

function jogo() {

	var verifica = this.textContent
	

	if (vencedor == '') {
		if (verifica == '') {
			if (turno < 10) { 
				if ((turno%2) === 0) {
					this.textContent = 'X'
				} else {
					this.textContent = 'O'
				}
				turno++
			} 

			if (turno == 10) {
				criaBotao()
			}
		}
	} else {return false}
	verificarFimDeJogo()

	

}

function criaBotao() {
	var botao = document.createElement('button')
	botao.textContent = 'Reiniciar Jogo'
	botao.className = 'btn btn-dark'
	botao.onclick = function() {reiniciarJogo()}
	botao.id = 'botao'
	document.getElementById('lugarBotao').appendChild(botao)
}

function reiniciarJogo() {
	for(var i = 1; i<=9; i++) {
		document.getElementById('d' + i).textContent = ''
	}
	turno = 1
	document.getElementById('botao').remove()
	vencedor = ''
}

function casasIguais(a, b, c) {
	var TCA = document.getElementById('d'+a).textContent
	var TCB = document.getElementById('d'+b).textContent
	var TCC = document.getElementById('d'+c).textContent

	 if( (TCA == TCB) && (TCB == TCC) && (TCA != '') ) {
	 	if(TCA.textContent == 'X') {
	 		vencedor = 'X'
	 	} else {
	 		vencedor = 'O'
	 	}
	 	return true
	 } else {
	 	return false
	 }
}

function verificarFimDeJogo(){
    if( casasIguais(1, 2, 3) || casasIguais(4, 5, 6) || casasIguais(7, 8, 9) ||
        casasIguais(1, 4, 7) || casasIguais(2, 5, 8) || casasIguais(3, 6, 9) ||
        casasIguais(1, 5, 9) || casasIguais(3, 5, 7)
        ) {

    	if(document.getElementById('botao')) {
    		document.getElementById('botao').remove()
    	}
  		criaBotao()

    }
}