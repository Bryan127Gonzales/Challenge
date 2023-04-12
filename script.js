function encriptar() {
  var texto = document.querySelector("#texto_enviado").value;
  var textocifrado = texto
    .replace(/e/gi, "enter")
    .replace(/i/gi, "imes")
    .replace(/a/gi, "ai")
    .replace(/o/gi, "ober")
    .replace(/u/gi, "ufat");

    document.querySelector("#salida").value=textocifrado;
    document.querySelector("#texto_enviado").value;
}
var boton1=document.querySelector("#boton_encriptar");
boton1.onclick=encriptar;

function desencriptar() {
    var texto = document.querySelector("#texto_enviado").value;
    var textoCifrado = texto
      .replace(/enter/gi, "e")
      .replace(/imes/gi, "i")
      .replace(/ai/gi, "a")
      .replace(/ober/gi, "o")
      .replace(/ufat/gi, "u");
    document.querySelector("#salida").value = textoCifrado;
    document.querySelector("#texto_enviado").value;
  }

var boton2 = document.querySelector("#boton_desencriptar");
boton2.onclick = desencriptar;