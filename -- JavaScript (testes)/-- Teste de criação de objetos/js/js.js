//Array indivíduos, onde ficam armazenados os objetos
individuos = []

//Função criadora de objetos, recebe suas características de acordo com os parâmetros dados: nome, sobrenome, idade
objFactory = (nome, sobrenome, idade) => {
	return {
		nome,
		sobrenome,
		idade
	}
}

//Função enviar
enviar = () => {
	nome = document.getElementById('nome').value.trim()
	sobrenome = document.getElementById('sobrenome').value.trim()
	idade = document.getElementById('idade').value.trim()

	if (nome == '' || sobrenome == '' || idade == '' ) {
		alert('Informe valores válidos')
	} else {
		if (individuos[0]) {
			for (var i = 0; i < individuos.length; i++) {
				if (individuos[i].nome == nome && individuos[i].sobrenome == sobrenome && individuos[i].idade == idade) {
					alert('Indivíduo já existente')
					return false
				}
			}
		}
		if (document.getElementById('p0')) {
			for (var i = 0; i < individuos.length; i++) {
				document.getElementById('p' + i).remove()
			}
		}

		individuos.push(objFactory(nome, sobrenome, idade))

		for (var i = 0; i < individuos.length; i++) {
			let paragrafo = document.createElement('p')
			paragrafo.textContent = `Indivíduo ${i + 1}: ${individuos[i].nome} ${individuos[i].sobrenome}, ${individuos[i].idade} anos`
			paragrafo.style.border = '1px solid black'
			paragrafo.style.padding = '5px 10px'
			paragrafo.id = `p${i}`
			document.body.appendChild(paragrafo)
		}

		
	}
}

/* for (var i = 0; i < 10; i++) {
	let paragrafo = document.createElement('p')
	paragrafo.textContent = 'Teste' + i
	paragrafo.style.border = '1px solid black'
	paragrafo.style.padding = '5px 10px'
	document.body.appendChild(paragrafo)
} */