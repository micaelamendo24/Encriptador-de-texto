
function encriptar() {
    let texto=document.getElementById("input-text").value;
    let textoEncriptado = texto
        .replace(/e/g, "enter")
        .replace(/i/g, "imes")
        .replace(/a/g, "ai")
        .replace(/o/g, "ober")
        .replace(/u/g, "ufat")
    document.getElementById("output-text").value = textoEncriptado;
}

function desencriptar() {
    let texto = document.getElementById("input-text").value;
    let textoDesencriptado = texto
        .replace(/enter/g, "e")
        .replace(/imes/g, "i")
        .replace(/ai/g, "a")
        .replace(/ober/g, "o")
        .replace(/ufat/g, "u");
    document.getElementById("output-text").value = textoDesencriptado;
}

function copiarTexto() {
    let texto = document.getElementById("output-text");
    texto.select();
    document.execCommand("copy");
    alert ("Texto copiado");
}

document.addEventListener("DOMContentLoaded", function() {
    document.querySelector(".boton-encriptar").addEventListener("click", encriptar);
    document.querySelector(".boton-desencriptar").addEventListener("click", desencriptar);
    document.querySelector(".boton-copiar").addEventListener("click", copiarTexto);

})