function escribir(valor) {
    let resultado = document.getElementById("resultado");
    if (resultado.value === "0") {
        resultado.value = valor === "." ? "0." : valor;
    } else {
        resultado.value += valor;
    }
}

function borrar() {
    document.getElementById("resultado").value = "0";
}

function calcular() {
    let resultado = document.getElementById("resultado");
    resultado.value = eval(resultado.value);
}
