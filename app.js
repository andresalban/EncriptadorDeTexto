const text_area = document.getElementById("text_area");
const mensaje = document.getElementById("mensaje");
const copiar = document.getElementById("copiar");

let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];

/*
Las "llaves" de encriptación que utilizaremos son las siguientes:
La letra "a" es convertida para "ai"
La letra "e" es convertida para "enter"
La letra "i" es convertida para "imes"
La letra "o" es convertida para "ober"
La letra "u" es convertida para "ufat"
*/
function btn_encriptar() {
    const textoEncriptado = encriptar(text_area.value)
    mensaje.value = textoEncriptado;
    text_area.value = "";
    mensaje.style.backgroundImage = "none";
}

function encriptar(texto) {
    texto = texto.toLowerCase(); //Convertir todo a minúsculas

    for (const i in matrizCodigo) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    /*
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (texto.includes(matrizCodigo[i][0])) {
            texto = texto.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }*/
    return texto;
}

function btn_desencriptar() {
    const textoDesencriptado = desencriptar(mensaje.value);
    mensaje.value = textoDesencriptado;
    text_area.value = "";

}

function desencriptar(texto) {
    texto = texto.toLowerCase()
    for (const i in matrizCodigo) {
        if (texto.includes(matrizCodigo[i][1])) {
            texto = texto.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return texto
}

function btn_copiar() {
    mensaje.select()
    navigator.clipboard.writeText(mensaje.value)
    alert("Texto copiado de forma exitosa ");
}