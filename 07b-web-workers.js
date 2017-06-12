"use strict";

const cuentaAtras = (numero) => {

    // Se notifica al worker el numero indicado
    postMessage(numero);
    
    setTimeout(
        () => {
            cuentaAtras (--numero);
        }, 1000
    );
};

cuentaAtras(10);