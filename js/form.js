var btnAdicionar = document.querySelector("#adicionar-paciente")

btnAdicionar.addEventListener("click", (event) => {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteDoFormulario(form)

    var pacienteTr = montaTr(paciente)

    var erro = validaPaciente(paciente)

    if (erro.length > 0) {
        var mensagemErro = document.querySelector("#mensagem-erro")
        mensagemErro.textContent = erro
        return
    }

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

    form.nome.value = ''
    form.altura.value = ''
    form.gordura.value = ''
    form.peso.value = ''
})

function obtemPacienteDoFormulario(form) {

    var paciente = {
        nome: form.nome.value,
        peso: Number(form.peso.value),
        altura: Number(form.altura.value),
        gordura: Number(form.gordura.value),
        imc: calculaImc(form.peso.value, form.altura.value)
    }

    return paciente
}

function montaTr(paciente) {

    var pacienteTr = document.createElement("tr")
    pacienteTr.classList.add("paciente")

    var nomeTd = montaTd(paciente.nome, "info-nome")
    var pesoTd = montaTd(paciente.peso, "info-peso")
    var alturaTd = montaTd(paciente.altura, "info-altura")
    var gorduraTd = montaTd(paciente.gordura, "info-gordura")  
    var imcTd = montaTd(paciente.imc, "info-imc")

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    return pacienteTr
}

function montaTd(dado, classe) {
    var td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)
    return td
}

function validaPaciente(paciente) {
    if (validaPeso(paciente.peso)) {
        return true
    }
    else if(!validaPeso(paciente.peso)) {
        alert("Preencha da forma correta o Campo de Peso!")
        return false
    }
    else if (validaAltura(paciente.altura)) {
        return true
    }
    else if(!validaAltura(paciente.altura)) {
        alert("Preencha da forma correta o Campo de Altura!")
        return false
    }
}