//abstração de despesa
class Despesa {
	constructor(ano, mes, dia, tipo, descricao, valor) {
		this.ano = ano
		this.mes = mes
		this.dia = dia
		this.tipo = tipo
		this.descricao = descricao
		this.valor = valor
	}

	validarDados() {
		for(let i in this) {
			if (this[i] == undefined || this[i] == '' || this[i] == null ) {
				return false
			} else {
				return true
			}		}
	}
}

//classe Bd
class Bd {
	constructor() {
		let id = localStorage.getItem('id')

		if(id===null) {
			localStorage.setItem('id', 0)
		}
	}

	getProximoId() {
		let proximoId = localStorage.getItem('id')
		return parseInt(proximoId) + 1
	}

	gravar = d => {
		//localStorage.setItem('despesa', JSON.stringify(d))
		let id = this.getProximoId()

		localStorage.setItem(id, JSON.stringify(d))

		localStorage.setItem('id', id)
	}

	recuperarRegistros() {
		let despesas = Array()

		let id = localStorage.getItem('id')

		for(let i = 1; i <= id; i++) {
			let despesa = JSON.parse(localStorage.getItem(i))

			if(despesa === null) {continue}
			despesa.id = i

			despesas.push(despesa)
		}

		return despesas
	}

	pesquisar(despesa) {
		let despesasFiltradas = Array()
		despesasFiltradas = this.recuperarRegistros()

		//ano
		if (despesa.ano != '') {
			despesasFiltradas = despesasFiltradas.filter(f => f.ano == despesa.ano)
		}

		//mes
		if (despesa.mes != '') {
			despesasFiltradas = despesasFiltradas.filter(f => f.mes == despesa.mes)
		}

		//dia
		if (despesa.dia != '') {
			despesasFiltradas = despesasFiltradas.filter(f => f.dia == despesa.dia)
		}

		//tipo
		if (despesa.tipo != '') {
			despesasFiltradas = despesasFiltradas.filter(f => f.tipo == despesa.tipo)
		}

		//descricao
		if (despesa.descricao != '') {
			despesasFiltradas = despesasFiltradas.filter(f => f.descricao == despesa.descricao)
		}

		//valor
		if (despesa.valor != '') {
			despesasFiltradas = despesasFiltradas.filter(f => f.valor == despesa.valor)
		}

		return despesasFiltradas

	}

	remover(id) {
		localStorage.removeItem(id)
	}
}

let bd = new Bd()

//recupera valores dos inputs
cadastrarDespesa = () => {
	let ano = document.getElementById('ano')
	let mes = document.getElementById('mes')
	let dia = document.getElementById('dia')
	let tipo = document.getElementById('tipo')
	let descricao = document.getElementById('descricao')
	let valor = document.getElementById('valor')

	let despesa = new Despesa(
		ano.value, 
		mes.value, 
		dia.value, 
		tipo.value, 
		descricao.value, 
		valor.value
		)

	if(despesa.validarDados()) {
		bd.gravar(despesa)
		document.getElementById('modalTitulo').textContent = 'Registro inserido com sucesso'
		document.getElementById('modalTitulo').className = ' text-success'
		document.getElementById('modalCorpo').textContent = 'Despesa cadastradas com sucesso'
		document.getElementById('modalBotao').textContent = 'Voltar'
		document.getElementById('modalBotao').className = 'btn btn-success'
		$('#modalRegistraDespesa').modal('show')

		ano.value = ''
		mes.value = ''
		dia.value = ''
		tipo.value = ''
		descricao.value = ''
		valor.value = ''

	} else {
		document.getElementById('modalTitulo').textContent = 'Erro na gravação'
		document.getElementById('modalTitulo').className = ' text-danger'
		document.getElementById('modalCorpo').textContent = 'Campos obrigatórios não foram devidamente preenchidos'
		document.getElementById('modalBotao').textContent = 'Voltar e corrigir'
		document.getElementById('modalBotao').className = 'btn btn-danger'
		$('#modalRegistraDespesa').modal('show')
	}
}

carregaListaDespesas = () => {

	let despesas = Array()
	despesas = bd.recuperarRegistros()

	for (let i = 0; i < despesas.length; i++) {
		let tableRow = document.createElement('tr')
		let tableData = document.createElement('td')
		let tableTipo = document.createElement('td')
		let tableDescricao = document.createElement('td')
		let tableValor = document.createElement('td')
		let iconBtn = document.createElement('i')
		iconBtn.className = 'fa-solid fa-xmark'
		let btn = document.createElement('button')
		btn.className = 'btn btn-outline-danger'
		btn.appendChild(iconBtn)
		btn.style.lineHeight = '1px'
		btn.style.marginTop = '3px'
		btn.id = 'id_despesa_' + despesas[i].id
		btn.onclick = function() {
			let id = this.id.replace('id_despesa_', '')

			bd.remover(id)

			window.location.reload()
		}

		tableData.textContent = `${despesas[i].dia}/${despesas[i].mes}/${despesas[i].ano}`
		tableTipo.textContent = despesas[i].tipo
		tableDescricao.textContent = despesas[i].descricao
		tableValor.textContent = despesas[i].valor

		if (tableTipo.textContent == 1) {
			tableTipo.textContent = 'Alimentação'
		} else if (tableTipo.textContent == 2) {
			tableTipo.textContent = 'Educação'
		} else if (tableTipo.textContent == 3) {
			tableTipo.textContent = 'Lazer'
		} else if (tableTipo.textContent == 4) {
			tableTipo.textContent = 'Saúde'
		} else if (tableTipo.textContent == 5) {
			tableTipo.textContent = 'Transporte'
		}

		tableRow.appendChild(tableData)
		tableRow.appendChild(tableTipo)
		tableRow.appendChild(tableDescricao)
		tableRow.appendChild(tableValor)
		tableRow.appendChild(btn)
		
		document.getElementById('tableBody').appendChild(tableRow)
	}
}

pesquisarDespesa = () => {
	let ano = document.getElementById('ano').value
	let mes = document.getElementById('mes').value
	let dia  = document.getElementById('dia').value
	let tipo  = document.getElementById('tipo').value
	let descricao = document.getElementById('descricao').value
	let valor = document.getElementById('valor').value

	let despesa = new Despesa(ano, mes, dia, tipo, descricao, valor)

	let despesasFiltradas = bd.pesquisar(despesa)

	let tableBody = document.getElementById('tableBody')

		while (tableBody.hasChildNodes()) {
			tableBody.removeChild(tableBody.firstChild)
		}

		for (let i = 0; i < despesasFiltradas.length; i++) {
		let tableRow = document.createElement('tr')
		let tableData = document.createElement('td')
		let tableTipo = document.createElement('td')
		let tableDescricao = document.createElement('td')
		let tableValor = document.createElement('td')
		let iconBtn = document.createElement('i')
		iconBtn.className = 'fa-solid fa-xmark'
		let btn = document.createElement('button')
		btn.className = 'btn btn-outline-danger'
		btn.appendChild(iconBtn)
		btn.style.lineHeight = '1px'
		btn.style.marginTop = '3px'
		btn.id = 'id_despesa_' + despesasFiltradas[i].id
		btn.onclick = function() {
			let id = this.id.replace('id_despesa_', '')

			bd.remover(id)

			window.location.reload()
		}

		tableData.textContent = `${despesasFiltradas[i].dia}/${despesasFiltradas[i].mes}/${despesasFiltradas[i].ano}`
		tableTipo.textContent = despesasFiltradas[i].tipo
		tableDescricao.textContent = despesasFiltradas[i].descricao
		tableValor.textContent = despesasFiltradas[i].valor

		if (tableTipo.textContent == 1) {
			tableTipo.textContent = 'Alimentação'
		} else if (tableTipo.textContent == 2) {
			tableTipo.textContent = 'Educação'
		} else if (tableTipo.textContent == 3) {
			tableTipo.textContent = 'Lazer'
		} else if (tableTipo.textContent == 4) {
			tableTipo.textContent = 'Saúde'
		} else if (tableTipo.textContent == 5) {
			tableTipo.textContent = 'Transporte'
		}

		tableRow.appendChild(tableData)
		tableRow.appendChild(tableTipo)
		tableRow.appendChild(tableDescricao)
		tableRow.appendChild(tableValor)
		tableRow.appendChild(btn)
		
		document.getElementById('tableBody').appendChild(tableRow)
	}

}

