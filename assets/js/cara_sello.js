function ganar(saldo,apuesta){
    saldo = saldo+(apuesta*2);
    return saldo;
}


function perder(saldo,apuesta){
    saldo = saldo-(apuesta);
    return saldo;
}


function cara_sello(){
    let moneda = Math.floor((Math.random()*2)+1);
    console.log(`EL lanzamiento fue ${moneda}`);
    return moneda;
}

function juego(){
    jugar = true
    saldo = 20

    while (jugar == true){
        opcion = prompt("opcion (1 sello 2 cara)");
        apuesta = prompt("Apuesta")
        resultado = cara_sello();
        if (resultado == opcion){
            saldo = ganar(saldo,apuesta)
            alert(`Ganaste, tienes ${saldo}`)

        }
        else{
            saldo = perder(saldo,apuesta)
            alert(`Perdiste, tienes ${saldo}`)
        }
    }
}

juego();