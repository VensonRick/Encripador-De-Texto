var textInput = document.querySelector('#input-text');
var outInput = document.querySelector('#output');

function criptografar() {
    var texto = textInput.value.toLowerCase(); 
    texto = texto.replace(/[^a-z]/g, ' '); 
    var resultCriptogra = texto
        .replace(/e/g, 'enter')
        .replace(/i/g, 'imes')
        .replace(/a/g, 'ai')
        .replace(/o/g, 'ober')
        .replace(/u/g, 'ufat');

    outInput.innerHTML = `
        <textarea readonly id='input-text'> ${resultCriptogra}</textarea>
        <button class='btn-copy' id='copiar' onclick='copiar()'>Copiar</button>
    `;
}

function descriptografar() {
    var texto = textInput.value.toLowerCase(); 
    texto = texto.replace(/[^a-z]/g, ' '); 
    var resultDescriptogra = texto
        .replace(/enter/g, 'e')
        .replace(/imes/g, 'i')
        .replace(/ai/g, 'a')
        .replace(/ober/g, 'o')
        .replace(/ufat/g, 'u');

    outInput.innerHTML = `
        <textarea readonly id='input-text'> ${resultDescriptogra}</textarea>
        <button class='btn-copy' id='copiar' onclick='copiar()'>Copiar</button>
    `;
}

function copiar() {
    var copyText = document.getElementById('output').querySelector('textarea');
    
    try {
        navigator.clipboard.writeText(copyText.value);
        alert('Texto copiado');
    } catch (err) {
        console.error('Erro ao copiar texto: ', err);
    }
}

