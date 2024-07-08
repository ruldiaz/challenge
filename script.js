console.log("hello world");

let botonEncriptar = document.getElementById("encriptar");
let botonDesencriptar = document.getElementById("desencriptar");
let resultadoSection = document.getElementById("resultado__seccion");
let botonCopiar = document.getElementById("copiar");

let a = "ai";
let e = "enter";
let i = "imes";
let o = "ober";
let u = "ufat";

botonEncriptar.addEventListener("click", () => {
   let palabra = document.getElementById("palabra").value;
   console.log("Palabra ingresada:", palabra);
   let palabraEncriptada = encriptar(palabra);
   console.log("Palabra encriptada:", palabraEncriptada);
   mostrarResultado(palabraEncriptada);
   botonCopiar.style.display = "block";
});

botonDesencriptar.addEventListener("click", () => {
   let palabra = document.getElementById("palabra").value;
   console.log("Palabra encriptada ingresada:", palabra);
   let palabraDescifrada = descifrar(palabra);
   console.log("Palabra descifrada:", palabraDescifrada);
   mostrarResultado(palabraDescifrada);
   botonCopiar.style.display = "block";
});

function mostrarResultado(resultado) {
   resultadoSection.style.fontSize = "1px";
   resultadoSection.innerHTML = `<p id="resultado">${resultado}</p><button id="copiar">Copiar</button>`;
}

function encriptar(texto) {
   if(texto){
      let nuevaPalabra = [];
      for (let j = 0; j <= texto.length - 1; j++) {
         if (texto[j] === "a") {
            nuevaPalabra.push(a);
         } else if (texto[j] === "e") {
            nuevaPalabra.push(e);
         } else if (texto[j] === "i") {
            nuevaPalabra.push(i);
         } else if (texto[j] === "o") {
            nuevaPalabra.push(o);
         } else if (texto[j] === "u") {
            nuevaPalabra.push(u);
         } else {
            nuevaPalabra.push(texto[j]);
         }
      }
      return nuevaPalabra.join("");
   }else{
      return "Favor de introducir texto para encriptar."
   }

}

function descifrar(textoEncriptado) {
   if(textoEncriptado){
      let textoDescifrado = textoEncriptado.replace(/ai/g, 'a');
   textoDescifrado = textoDescifrado.replace(/enter/g, 'e');
   textoDescifrado = textoDescifrado.replace(/imes/g, 'i');
   textoDescifrado = textoDescifrado.replace(/ober/g, 'o');
   textoDescifrado = textoDescifrado.replace(/ufat/g, 'u');
   console.log("Texto descifrado:", textoDescifrado);
   return textoDescifrado;
   }else{
      return "Favor de introducir texto para desencriptar."
   }
   
}

