let gerarNumeroCPU = gerarNumero()
let button = document.getElementById("b-valor")

button.addEventListener("click", advinhar)

function gerarNumero () {
    return Math.floor(Math.random() * 101)
}    


function advinhar () {
    let valor = document.getElementById("valor")
    let resultado = document.getElementById("resultado")
    let valor2 = Number(valor.value)

    if (valor2 === gerarNumeroCPU) {
        resultado.innerHTML = `<strong>Voce acertou! O numero era ${gerarNumeroCPU}</strong>`
        gerarNumeroCPU = gerarNumero()
        alert("Gerando novo numero.....")
        document.getElementById("valor").value = "";

    } else if (valor2 > gerarNumeroCPU) {
        resultado.innerHTML = `<strong>Este valor é muito alto! Tente novamente</strong>`
    } else {
        resultado.innerHTML = `<strong>Este valor é muito pequeno! Tente novamente</strong>`
    }
}