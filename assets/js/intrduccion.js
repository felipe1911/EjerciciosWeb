
function appendTooperacion(value) {
    const operacion = document.getElementById('Operacion');
    operacion.value += value;
}

function clearoperacion() {
    const operacion = document.getElementById('Operacion');
    operacion.value = '';
}

function calculateResult() {
    const operacion = document.getElementById('Operacion');
    try {
        operacion.value = eval(operacion.value);
    } catch (error) {
        operacion.value = 'Error';
    }
}