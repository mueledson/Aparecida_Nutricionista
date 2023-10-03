var titulo = document.querySelector(".titulo");
titulo.textContent = "Aparecida Nutricionista"

var pacientes = document.querySelectorAll(".paciente")

//Calcula o IMC
for (var i = 0; i < pacientes.length; i++) {

    var paciente = pacientes[i]

    var tdPeso = paciente.querySelector(".info-peso")
    var peso   = tdPeso.textContent

    var tdAltura   = paciente.querySelector(".info-altura")
    var altura     = tdAltura.textContent

    var tdImc = paciente.querySelector(".info-imc")

    var pesoEhValido   = true
    var alturaEhValida = true

    if (peso <= 0 || peso >= 200) {
        tdImc.textContent = "Peso Inválido"
        paciente.classList.add("erro")
        pesoEhValido = false
    }

    else if (altura <= 0 || altura >= 3.00) {
        tdImc.textContent = "Altura Inválida"
        paciente.classList.add("erro")
        alturaEhValida = false
    }else {
        var imc = calculaImc(peso, altura)
        tdImc.textContent = imc
    }
}

function calculaImc(peso, altura) {
    var imc = 0

    imc = peso / (altura * altura)

    return imc.toFixed(2)
}