
function appendToOperacion(value) {
    const operacion = document.getElementById('Operacion');
    operacion.value += value;
}

function clearOperacion() {
    const operacion = document.getElementById('Operacion');
    operacion.value = '';
}

function calcularResultado() {
    const operacion = document.getElementById('Operacion');
    try {
        operacion.value = eval(operacion.value);
    } catch (error) {
        operacion.value = 'Error';
    }
}



