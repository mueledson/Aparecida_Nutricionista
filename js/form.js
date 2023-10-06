var btnAdicionar = document.querySelector("#adicionar-paciente")

btnAdicionar.addEventListener("click", (event) => {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")
    var paciente = obtemPacienteDoFormulario(form)

    var pacienteTr = montaTr(paciente)

    var erros = validaPaciente(paciente)

    if (erros.length > 0) {
        exibeErros(erros)
        return
    }

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)

    form.nome.value = ''
    form.altura.value = ''
    form.gordura.value = ''
    form.peso.value = ''

    var ul = document.querySelector("ul")
    ul.innerHTML = ""
})

function exibeErros(erros) {
    var ul = document.querySelector("#mensagem-erro")
    ul.innerHTML = ""

    erros.forEach((erro) => {
        var li = document.createElement("li")
        li.textContent = erro
        ul.appendChild(li)
    });
}

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

    var erros = []

    if (!paciente.nome) {
        erros.push("O Nome não pode ser em branco!")
    }

    if (!validaPeso(paciente.peso)) {
        erros.push("O Peso é Inválido!")
    }

    if (!validaAltura(paciente.altura)) {
        erros.push("A Altura é Inválida!")
    }

    if (!paciente.gordura) {
        erros.push("O campo de Gordura tem que ser preenchido!")
    }

    return erros
}