var pacientes = document.querySelectorAll(".paciente")

var tabela = document.querySelector("#tabela-pacientes")

tabela.addEventListener("dblclick", (e) => {   

    e.target.parentNode.classList.add("fadeOut")
    
    setTimeout(function(){
        e.target.parentNode.remove()
    }, 500)

})

// pacientes.forEach((paciente)=>{
//     paciente.addEventListener("dblclick", function() {
//         this.remove();
//     })
// })