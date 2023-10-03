var btnAdicionar = document.querySelector("#adicionar-paciente")

btnAdicionar.addEventListener("click", (event) => {
    event.preventDefault()

    var form = document.querySelector("#form-adiciona")

    var nome = form.nome.value
    var peso = form.peso.value
    var altura = form.altura.value
    var gordura = form.gordura.value

    var pacienteTr = document.createElement("tr")
    paciente.classList.add("paciente")
    
    var nomeTd = document.createElement("td")   
        nomeTd.classList.add("info-nome")

    var pesoTd = document.createElement("td")
        pesoTd.classList.add("info-peso")

    var alturaTd = document.createElement("td")
        alturaTd.classList.add("info-altura") 

    var gorduraTd = document.createElement("td")

    var imcTd = document.createElement("td")
        imcTd.textContent = calculaImc(peso, altura)
        imcTd.classList.add("info-imc")
    
    nomeTd.textContent = nome
    pesoTd.textContent = peso
    alturaTd.textContent = altura
    gorduraTd.textContent = gordura

    pacienteTr.appendChild(nomeTd)
    pacienteTr.appendChild(pesoTd)
    pacienteTr.appendChild(alturaTd)
    pacienteTr.appendChild(gorduraTd)
    pacienteTr.appendChild(imcTd)

    var tabela = document.querySelector("#tabela-pacientes")

    tabela.appendChild(pacienteTr)
})