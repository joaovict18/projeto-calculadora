function inserir(n) {
    document.getElementById('resultado').innerHTML += n
}

function calcular() {
    var resultado = document.getElementById('resultado').innerHTML

    if (resultado) {
        document.getElementById('resultado').innerHTML = eval(resultado)
    } else {
        alert('Nada para calcular')
    }
}